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


/**
 * Utilities for Ant Design datasets
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class DatasetUtils {
    /**
     * Returns the data for ProComponents `ProTable`
     *
     * @param income the income data (especially server response)
     *
     * @reference "https://pro-components.antdigital.dev/components/table#request"
     */
    public static echoProTable(income?: Record<string, any>): Record<string, any> {
        return {
            success: income?.data?.success || income?.success || (income?.status === 200),
            data: income?.data?.data,
            total: income?.data?.total,
        };
    }
}
