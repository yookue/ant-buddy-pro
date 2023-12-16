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


export abstract class InputUtils {
    /**
     * Sets value for a given input element
     *
     * @param element the input element to inspect
     * @param value the value to set
     * @param callback the function to execute after set value
     *
     * @see "https://coryrylan.com/blog/trigger-input-updates-with-react-controlled-inputs"
     */
    public static setInputValue = (element: HTMLInputElement, value?: string, callback?: ((previous?: string) => void)): void => {
        const descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
        if (!descriptor) {
            return;
        }
        // @ts-ignore
        const previous = descriptor?.get.call(element) || '';
        // @ts-ignore
        descriptor.set.call(element, value || '');
        element.dispatchEvent(new Event('change', {bubbles: true}));
        if (callback) {
            callback(previous);
        }
    }
}
