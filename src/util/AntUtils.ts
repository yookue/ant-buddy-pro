/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
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


export abstract class AntUtils {
    /**
     * Returns the data for Ant `ProTable`
     *
     * @param income the income data (especially server response)
     */
    public static echoProTable(income?: Record<string, any>): Record<string, any> {
        return {
            success: income?.status === 200,
            data: income?.data?.recordsDetails || [],
            total: income?.data?.recordsTotal || 0,
        };
    }

    /**
     * Returns the data for Ant `ProDescriptions`
     *
     * @param income the income data (especially server response)
     */
    public static echoProDescriptions(income?: Record<string, any>): Record<string, any> {
        return {
            success: income?.status === 200,
            data: income?.data || {},
        };
    }
}
