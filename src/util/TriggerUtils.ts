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


/**
 * Utilities for trigger
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class TriggerUtils {
    /**
     * Returns the general placements for the `builtinPlacements` option of rc-trigger
     *
     * @param adjustWidth whether to adjust width or not
     * @param adjustHeight whether to adjust height or not
     *
     * @returns the general placements for the `builtinPlacements` option of rc-trigger
     *
     * @see "https://github.com/react-component/select/blob/14.1.x/src/SelectTrigger.tsx"
     */
    public static buildPlacements = (adjustWidth: number = 0, adjustHeight: number = 1): Record<string, any> => {
        return {
            bottomLeft: {
                points: ['tl', 'bl'],
                offset: [0, 4],
                overflow: {
                    adjustX: adjustWidth,
                    adjustY: adjustHeight,
                }
            },
            bottomRight: {
                points: ['tr', 'br'],
                offset: [0, 4],
                overflow: {
                    adjustX: adjustWidth,
                    adjustY: adjustHeight,
                }
            },
            topLeft: {
                points: ['bl', 'tl'],
                offset: [0, -4],
                overflow: {
                    adjustX: adjustWidth,
                    adjustY: adjustHeight,
                }
            },
            topRight: {
                points: ['br', 'tr'],
                offset: [0, -4],
                overflow: {
                    adjustX: adjustWidth,
                    adjustY: adjustHeight,
                }
            }
        };
    }
}
