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


import {ObjectUtils, StringUtils} from '@yookue/ts-lang-utils';


/**
 * Utilities for styles
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class StyleUtils {
    /**
     * Returns whether the given document is dark color
     *
     * @param doc the document object to inspect
     *
     * @returns whether the given document is dark color
     */
    public static isDarkness = (doc: Document = document): boolean => {
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
        if (!groups || groups.length === 0) {
            return undefined;
        }
        const result = {};
        groups.forEach(item => {
            const key = StringUtils.trim(StringUtils.substringBeforeLast(item, ':'));
            const value = StringUtils.trim(StringUtils.substringAfterLast(item, ':'));
            if (key && value) {
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
