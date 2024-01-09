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


import {type RcFile} from 'antd/es/upload/interface';


export abstract class FileUtils {
    /**
     * Returns whether the given file is a jpeg file
     *
     * @param file the file to inspect
     *
     * @return whether the given file is a jpeg file
     */
    public static isJpgImage(file?: RcFile): boolean {
        return !!file && file.type === 'image/jpeg';
    }

    /**
     * Returns whether the given file is a png file
     *
     * @param file the file to inspect
     *
     * @return whether the given file is a png file
     */
    public static isPngImage(file?: RcFile): boolean {
        return !!file && file.type === 'image/png';
    }

    /**
     * Read and convert the given file to data url
     *
     * @param file the file to inspect
     * @param callback the function to execute when the `file` read complete
     */
    public static readAsDataUrl = (file?: RcFile, callback?: (url: string) => void): void => {
        if (!file || !callback) {
            return;
        }
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(file);
    };
}
