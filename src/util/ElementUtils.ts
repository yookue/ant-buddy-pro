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


import React from 'react';
import {ObjectUtils, StringUtils} from '@yookue/ts-lang-utils';


/**
 * Utilities for HTML elements
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class ElementUtils {
    /**
     * Adds the class name(s) to the given element
     *
     * @param element the element to inspect
     * @param className the class name(s) to add
     */
    public static addClazz(element?: HTMLElement | null, className?: string | string[] | null): void {
        if (!element || !className || className.length === 0) {
            return;
        }
        if (Array.isArray(className)) {
            element.classList.add(...className);
        } else {
            element.classList.add(className);
        }
    }

    /**
     * Removes the class name(s) from the given element
     *
     * @param element the element to inspect
     * @param className the class name(s) to remove
     */
    public static removeClazz(element?: HTMLElement | null, className?: string | null): void {
        if (!element || !className || className.length === 0) {
            return;
        }
        if (Array.isArray(className)) {
            element.classList.remove(...className);
        } else {
            element.classList.remove(className);
        }
    }

    /**
     * Adds the style to the given element
     *
     * @param element the element to inspect
     * @param key the style key
     * @param value the style key
     */
    public static addStyle(element?: HTMLElement | null, key?: string | null, value?: string | null): void {
        if (!element || !key || !value) {
            return;
        }
        element.style.setProperty(key, value);
    }

    /**
     * Adds the styles to the given element
     *
     * @param element the element to inspect
     * @param style the styles to add
     */
    public static addStyles(element?: HTMLElement | null, style?: React.CSSProperties | null): void {
        if (!element || !style) {
            return;
        }
        for (const prop in style) {
            if (Object.prototype.hasOwnProperty.call(style, prop)) {
                element.style.setProperty(StringUtils.toKebabCase(prop) as string, ObjectUtils.getProp(style, prop));
            }
        }
    }

    /**
     * Removes the style from the given element
     *
     * @param element the element to inspect
     * @param key the style key
     */
    public static removeStyle(element?: HTMLElement | null, key?: string | null): void {
        if (!element || !key) {
            return;
        }
        element.style.setProperty(key, '');
    }

    /**
     * Removes the styles from the given element
     *
     * @param element the element to inspect
     * @param style the styles to remove
     */
    public static removeStyles(element?: HTMLElement | null, style?: React.CSSProperties | null): void {
        if (!element || !style) {
            return;
        }
        for (const prop in style) {
            if (Object.prototype.hasOwnProperty.call(style, prop)) {
                element.style.setProperty(StringUtils.toKebabCase(prop) as string, '');
            }
        }
    }

    /**
     * Returns the value property descriptor of the given element
     *
     * @param element the element to inspect
     *
     * @returns the value property descriptor of the given element
     *
     * @see "https://coryrylan.com/blog/trigger-input-updates-with-react-controlled-inputs"
     */
    public static getValueDescriptor(element?: HTMLElement | null): PropertyDescriptor | undefined {
        if (!element) {
            return undefined;
        }
        if (element instanceof HTMLInputElement) {
            return Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
        } else if (element instanceof HTMLSelectElement) {
            return Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');
        } else if (element instanceof HTMLTextAreaElement) {
            return Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
        }
        return Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'value');
    }

    /**
     * Returns the value of the given element
     *
     * @param element the element to inspect
     *
     * @returns the value of the given element
     *
     * @see "https://coryrylan.com/blog/trigger-input-updates-with-react-controlled-inputs"
     */
    public static getElementValue = (element?: HTMLElement | null): string | undefined => {
        const descriptor = this.getValueDescriptor(element);
        return !descriptor ? undefined : (descriptor.get?.call(element) || '');
    }

    /**
     * Clears value for the given element
     *
     * @param element the element to inspect
     * @param callback the function to execute after value been set
     */
    public static clearElementValue = (element?: HTMLElement | null, callback?: ((previous?: string) => void)): void => {
        this.setElementValue(element, undefined, callback)
    }

    /**
     * Sets value for the given element
     *
     * @param element the element to inspect
     * @param value the value to set
     * @param callback the function to execute after value been set
     *
     * @see "https://coryrylan.com/blog/trigger-input-updates-with-react-controlled-inputs"
     */
    public static setElementValue = (element?: HTMLElement | null, value?: string, callback?: ((previous?: string) => void)): void => {
        const descriptor = this.getValueDescriptor(element);
        if (!descriptor) {
            return;
        }
        const previous = descriptor.get?.call(element) || '';
        descriptor.set?.call(element, value || '');
        element?.dispatchEvent(new Event('change', {bubbles: true}));
        if (callback) {
            callback(previous);
        }
    }
}
