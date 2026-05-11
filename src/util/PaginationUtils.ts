/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import {type ActionType} from '@ant-design/pro-components';


/**
 * Utilities for pagination
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class PaginationUtils {
    /**
     * Calculates the serial number of a row in a table
     * @param actionRef The actionRef of the table
     * @param currentIndex The index of the row
     */
    public static calculateRowSerial = (actionRef?: React.RefObject<ActionType | null | undefined>, currentIndex?: number): number => {
        if (!actionRef?.current || currentIndex === undefined || currentIndex < 0) {
            return -1;
        }
        return (actionRef.current.pageInfo?.pageSize ?? 20) * ((actionRef.current.pageInfo?.current ?? 1) - 1) + currentIndex + 1;
    }

    /**
     * Reloads table data after delete, and adjusts the page number if necessary
     * @param actionRef The actionRef of the table
     * @param deletedCount The number of deleted items
     */
    public static reloadAfterDelete = (actionRef?: React.RefObject<ActionType | null | undefined>, deletedCount: number = 1): void => {
        if (!actionRef?.current) {
            return;
        }
        const pageInfo = actionRef.current.pageInfo;
        if (!pageInfo || deletedCount <= 0) {
            actionRef.current.reload();
            return;
        }
        const {current, pageSize, total} = pageInfo;
        const newTotal = Math.max(0, total - deletedCount);
        if (current > 1 && newTotal > 0 && newTotal <= (current - 1) * pageSize) {
            actionRef.current.setPageInfo?.({
                ...pageInfo,
                current: current - 1,
            });
        }
        actionRef.current.reload();
    }
}
