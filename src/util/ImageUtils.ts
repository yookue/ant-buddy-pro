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
 * Utilities for images
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class ImageUtils {
    /**
     * Returns the detected image src for the given param
     *
     * @param param the parameter to inspect
     * @param callback the function to execute when the given param is a promise
     *
     * @returns the detected image src for the given param
     */
    public static detectSource = (param?: string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>), callback?: ((value?: string) => void)): string | undefined => {
        if (!param) {
            return undefined;
        }
        if (typeof param === 'string') {
            return param;
        }
        if (typeof param === 'function') {
            return this.detectSource(param(), callback);
        }
        if (typeof param === 'object' && Object.prototype.toString.call(param) === '[object Promise]' && !!callback) {
            (param as Promise<string | undefined>).then(data => callback(data));
        }
        return undefined;
    }
}
