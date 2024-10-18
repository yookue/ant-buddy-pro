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


import dayjs from 'dayjs';
import objectHash from 'object-hash';
import {noteOnce as rcNote, warningOnce as rcWarning} from 'rc-util/es/warning';


const loggedHashes: string[] = [];
const productName: string = '@yookue/ant-buddy-pro';
const timeFormat: string = 'YYYY-MM-DD HH:mm:ss';


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
     * @param component The component name to prefix
     * @param message The message to print
     * @param product The package name to prefix
     */
    protected static build(component?: string, message?: string, product?: string): string | undefined {
        return !message ? undefined : (component ? `[${product ?? productName}: ${component}] - ` : '').concat(message);
    }

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
        const built = this.build(component, message, product);
        if (!built) {
            return;
        }
        const hash = objectHash(built);
        if (once && loggedHashes.includes(hash)) {
            return;
        }
        if (!valid) {
            loggedHashes.push(hash);
            console.log(built);
        }
    }

    /**
     * Log if condition not match, with timestamp
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.logTimestamp(true, false, 'Foobar', 'some log');    // print nothing
     *  ConsoleUtils.logTimestamp(false, false, 'Foobar', 'some log');    // print some error
     *  ConsoleUtils.logTimestamp(1 === 2, false, 'Foobar', 'some log');    // print some error
     *  ```
     */
    public static logTimestamp(valid: boolean, once: boolean, component?: string, message?: string, product?: string): void {
        const built = this.build(component, message, product);
        if (!built) {
            return;
        }
        const hash = objectHash(built);
        if (once && loggedHashes.includes(hash)) {
            return;
        }
        if (!valid) {
            loggedHashes.push(hash);
            console.log(`[${dayjs().format(timeFormat)}] ${built}`);
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
        const built = this.build(component, message, product);
        if (!built) {
            return;
        }
        if (once) {
            rcNote(valid, built);
        } else {
            console.warn(`Note: ${built}`);
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
        const built = this.build(component, message, product);
        if (!built) {
            return;
        }
        if (once) {
            rcWarning(valid, built);
        } else {
            console.warn(`Warning: ${built}`);
        }
    }
}
