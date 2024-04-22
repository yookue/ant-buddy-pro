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
 * Utilities for HTML elements
 *
 * @author David Hsing
 */
export abstract class ElementUtils {
    /**
     * Appends the given class name to the given html element
     *
     * @param element the html element to inspect
     * @param className the class name to append
     */
    public static appendClassName(element?: HTMLElement | null, className?: string | null): void {
        if (!element || !className || className.length === 0) {
            return;
        }
        const clazzNames = element.className?.split(' ')?.filter(item => !!item);
        if (!clazzNames || clazzNames.length === 0) {
            element.className = className;
            return;
        }
        if (!clazzNames.includes(className)) {
            clazzNames.push(className);
            element.className = clazzNames.join(' ');
        }
    }

    /**
     * Removes the given class name from the given html element
     *
     * @param element the html element to inspect
     * @param className the class name to remove
     */
    public static removeClassName(element?: HTMLElement | null, className?: string | null): void {
        if (!element || !className || className.length === 0) {
            return;
        }
        let clazzNames = element.className?.split(' ')?.filter(item => !!item);
        if (clazzNames?.includes(className)) {
            clazzNames = clazzNames.filter(item => item !== className);
            element.className = (!clazzNames || clazzNames.length === 0) ? '' : clazzNames.join(' ');
        }
    }

    /**
     * Returns the value property descriptor of the given html element
     *
     * @param element the html element to inspect
     *
     * @return the value property descriptor of the given html element
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
     * Returns the value of the given html element
     *
     * @param element the html element to inspect
     *
     * @return the value of the given html element
     *
     * @see "https://coryrylan.com/blog/trigger-input-updates-with-react-controlled-inputs"
     */
    public static getElementValue = (element?: HTMLElement | null): string | undefined => {
        const descriptor = this.getValueDescriptor(element);
        return !descriptor ? undefined : (descriptor.get?.call(element) || '');
    }

    /**
     * Clears value for the given html element
     *
     * @param element the html element to inspect
     * @param callback the function to execute after value been set
     */
    public static clearElementValue = (element?: HTMLElement | null, callback?: ((previous?: string) => void)): void => {
        this.setElementValue(element, undefined, callback)
    }

    /**
     * Sets value for the given html element
     *
     * @param element the html element to inspect
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
