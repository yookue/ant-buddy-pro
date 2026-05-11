/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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

import React from 'react';


/**
 * Utility class for React-related operations
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export class ReactUtils {
    /**
     * Get the major version number of React
     *
     * @returns The major version number (e.g., 18, 19)
     *
     * @example
     * ```typescript
     * const majorVersion = ReactUtils.getMajorVersion();
     * console.log(majorVersion); // 18 or 19
     * ```
     */
    public static getMajorVersion(): number {
        return parseInt(React.version.split('.')[0], 10);
    }
}
