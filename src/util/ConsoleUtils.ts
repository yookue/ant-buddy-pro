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


import objectHash from 'object-hash';
import {noteOnce as rcNote, warningOnce as rcWarning} from 'rc-util/es/warning';
import packageJson from '#/package.json';


const loggedHashes: string[] = [];


/**
 * Utilities for console
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class ConsoleUtils {
    /**
     * Log if condition not match
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.log(true, false, 'Foobar', 'some log');    // print nothing
     *  ConsoleUtils.log(false, false, 'Foobar', 'some log');    // print some error
     *  ConsoleUtils.log(1 === 2, false, 'Foobar', 'some log');    // print some error
     *  ```
     */
    public static log(valid: boolean, once: boolean, component?: string, message?: string, product?: string): void {
        if (!message) {
            return;
        }
        const result = (component ? `[${product ?? packageJson.name}: ${component}] ` : '').concat(message);
        const hash = objectHash(result);
        if (once && loggedHashes.includes(hash)) {
            return;
        }
        if (!valid) {
            loggedHashes.push(hash);
            console.log(result);
        }
    }

    /**
     * Note if condition not match
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.note(true, false, 'Foobar', 'some note');    // print nothing
     *  ConsoleUtils.note(false, false, 'Foobar', 'some note');    // print some error
     *  ConsoleUtils.note(1 === 2, false, 'Foobar', 'some note');    // print some error
     *  ```
     */
    public static note(valid: boolean, once: boolean, component?: string, message?: string, product?: string): void {
        if (!message) {
            return;
        }
        const result = (component ? `[${product ?? packageJson.name}: ${component}] ` : '').concat(message);
        if (once) {
            rcNote(valid, result);
        } else {
            console.warn('Note: ' + result);
        }
    }

    /**
     * Warn if condition not match
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.warn(true, false, 'Foobar', 'some warn');    // print nothing
     *  ConsoleUtils.warn(false, false, 'Foobar', 'some warn');    // print some error
     *  ConsoleUtils.warn(1 === 2, false, 'Foobar', 'some warn');    // print some error
     *  ```
     */
    public static warn(valid: boolean, once: boolean, component?: string, message?: string, product?: string): void {
        if (!message) {
            return;
        }
        const result = (component ? `[${product ?? packageJson.name}: ${component}] ` : '').concat(message);
        if (once) {
            rcWarning(valid, result);
        } else {
            console.warn('Warning: ' + result);
        }
    }
}
