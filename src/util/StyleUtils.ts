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
 * Utilities for styles
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class StyleUtils {
    /**
     * Adds the class name(s) to the given element
     *
     * @param element the element to inspect
     * @param className the class name(s) to add
     */
    public static addClazz(element?: HTMLElement | null, className?: string | string[] | null): void {
        if (!element || !className || !className.length) {
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
        if (!element || !className || !className.length) {
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
     * Returns whether the given document is dark color
     *
     * @param doc the document object to inspect
     *
     * @returns whether the given document is dark color
     */
    public static isDarkness(doc: Document = document): boolean {
        const html = doc.querySelector('html');
        if (!html) {
            return false;
        }
        if (html.getAttribute('data-prefers-color') === 'dark') {
            return true;
        }
        const styles = this.stringToStyles(html.getAttribute('style'));
        return ObjectUtils.getProp(styles, 'color-scheme') === 'dark';
    }

    /**
     * Returns a styles object representation of the given string
     *
     * @param styles the string to convert
     *
     * @returns a styles object representation of the given string
     */
    public static stringToStyles(styles?: string | null): Record<string, any> | undefined {
        if (!styles) {
            return undefined;
        }
        const groups = styles.split(';');
        if (!groups || !groups.length) {
            return undefined;
        }
        const result = {};
        groups.forEach(item => {
            const key = StringUtils.trim(StringUtils.substringBeforeLast(item, ':'));
            const value = StringUtils.trim(StringUtils.substringAfterLast(item, ':'));
            if (key) {
                ObjectUtils.setProp(result, key, value);
            }
        });
        return result;
    }

    /**
     * Returns a string representation of the given styles object
     *
     * @param styles the styles object to convert
     *
     * @returns a string representation of the given styles object
     */
    public static stylesToString(styles?: Record<string, any>): string | undefined {
        if (!styles) {
            return undefined;
        }
        const result = Object.keys(styles).filter((key) => styles[key]).join(' ').trim().replace(/\s+/g, ' ');
        return result.length ? result : undefined;
    }
}
