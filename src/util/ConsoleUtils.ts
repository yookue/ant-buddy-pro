/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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


import {noteOnce as rcNote, warning as rcWarning} from '@rc-component/util';
import dayjs from 'dayjs';
import objectHash from 'object-hash';
import {PackageConst} from '@/constant/PackageConst';


const loggedHashes: string[] = [];
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
    public static build(component?: string, message?: string, product?: string): string | undefined {
        return !message ? undefined : (component ? `[${product ?? PackageConst.PACKAGE_NAME}: ${component}] - ` : '').concat(message);
    }

    /**
     * Log if condition not match
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print (can be string or object)
     * @param explain Optional explanation for the message (used when message is object)
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.log(true, false, 'Foobar', 'some log');    // print nothing
     *  ConsoleUtils.log(false, false, 'Foobar', 'some log');    // print some error
     *  ConsoleUtils.log(false, false, 'Foobar', {key: 'value'}, 'Data');    // print expandable object with label
     *  ```
     */
    public static log(valid: boolean, once: boolean, component?: string, message?: any, explain?: string, product?: string): void {
        // noinspection DuplicatedCode
        if (message === undefined || message === null) {
            return;
        }
        const prefix = component ? `[${product ?? PackageConst.PACKAGE_NAME}: ${component}] - ` : '';
        const hash = objectHash({prefix, message});
        if (once && loggedHashes.includes(hash)) {
            return;
        }
        if (!valid) {
            loggedHashes.push(hash);
            if (typeof message === 'string') {
                console.log(prefix + message);
            } else {
                if (explain) {
                    console.log(prefix, explain + ':', message);
                } else {
                    console.log(prefix, message);
                }
            }
        }
    }

    /**
     * Log if condition not match, with timestamp
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print (can be string or object)
     * @param explain Optional explanation for the message (used when message is object)
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.logTimestamp(true, false, 'Foobar', 'some log');    // print nothing
     *  ConsoleUtils.logTimestamp(false, false, 'Foobar', 'some log');    // print some error
     *  ConsoleUtils.logTimestamp(false, false, 'Foobar', {key: 'value'}, 'Data');    // print expandable object with label
     *  ```
     */
    public static logTimestamp(valid: boolean, once: boolean, component?: string, message?: any, explain?: string, product?: string): void {
        // noinspection DuplicatedCode
        if (message === undefined || message === null) {
            return;
        }
        const prefix = component ? `[${product ?? PackageConst.PACKAGE_NAME}: ${component}]` : '';
        const timestamp = `[${dayjs().format(timeFormat)}]`;
        const hash = objectHash({prefix, message});
        if (once && loggedHashes.includes(hash)) {
            return;
        }
        if (!valid) {
            loggedHashes.push(hash);
            if (typeof message === 'string') {
                console.log(timestamp, prefix + ' - ' + message);
            } else {
                if (explain) {
                    console.log(timestamp, prefix, explain + ':', message);
                } else {
                    console.log(timestamp, prefix, message);
                }
            }
        }
    }

    /**
     * Note if condition not match
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print (can be string or object, will be converted to string for rcNote)
     * @param explain Optional explanation for the message (used when message is object)
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.note(true, false, 'Foobar', 'some note');    // print nothing
     *  ConsoleUtils.note(false, false, 'Foobar', 'some note');    // print some error
     *  ConsoleUtils.note(false, false, 'Foobar', {key: 'value'}, 'Data');    // print object as string with label
     *  ```
     */
    public static note(valid: boolean, once: boolean, component?: string, message?: any, explain?: string, product?: string): void {
        // noinspection DuplicatedCode
        if (message === undefined || message === null) {
            return;
        }
        const messageStr = typeof message === 'string' ? message : JSON.stringify(message);
        const built = explain ? this.build(component, `${explain}: ${messageStr}`, product) : this.build(component, messageStr, product);
        if (!built) {
            return;
        }
        if (once) {
            rcNote(valid, built);
        } else {
            if (!valid) {
                console.warn(`Note: ${built}`);
            }
        }
    }

    /**
     * Warn if condition not match
     *
     * @param valid The condition to match
     * @param once Whether print once only
     * @param component The component name to prefix
     * @param message The message to print (can be string or object, will be converted to string for rcWarning)
     * @param explain Optional explanation for the message (used when message is object)
     * @param product The package name to prefix
     *
     * @example
     * ```ts
     *  ConsoleUtils.warn(true, false, 'Foobar', 'some warn');    // print nothing
     *  ConsoleUtils.warn(false, false, 'Foobar', 'some warn');    // print some error
     *  ConsoleUtils.warn(false, false, 'Foobar', {key: 'value'}, 'Data');    // print object as string with label
     *  ```
     */
    public static warn(valid: boolean, once: boolean, component?: string, message?: any, explain?: string, product?: string): void {
        // noinspection DuplicatedCode
        if (message === undefined || message === null) {
            return;
        }
        const messageStr = typeof message === 'string' ? message : JSON.stringify(message);
        const built = explain ? this.build(component, `${explain}: ${messageStr}`, product) : this.build(component, messageStr, product);
        if (!built) {
            return;
        }
        if (once) {
            rcWarning(valid, built);
        } else {
            if (!valid) {
                console.warn(`Warning: ${built}`);
            }
        }
    }
}
