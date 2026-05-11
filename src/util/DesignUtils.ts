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


/**
 * Utilities for ant design
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class DesignUtils {
    /**
     * Checks if the given element or its parent has form feedback (error/success/warning)
     *
     * @param element The element to inspect (usually the input element or its container)
     * @param prefix The CSS class prefix (default: 'ant')
     * @returns true if the element or its parent has feedback status, false otherwise
     *
     * @example
     * ```ts
     *  // Check if an input field has validation feedback
     *  const hasFormFeedback = DesignUtils.hasFormFeedback(inputElement);
     *
     *  // With custom prefix
     *  const hasFormFeedback = DesignUtils.hasFormFeedback(inputElement, 'custom');
     *  ```
     */
    public static hasFormFeedback = (element?: HTMLElement | null, prefix: string = 'ant'): boolean => {
        if (!element) {
            return false;
        }
        // Check if the element itself has feedback class
        const feedbackClasses = [
            `${prefix}-form-item-has-error`,
            `${prefix}-form-item-has-success`,
            `${prefix}-form-item-has-warning`,
            `${prefix}-form-item-has-feedback`,
        ];
        // Check the element and its parents up to the form item level
        let current: HTMLElement | null = element;
        while (current) {
            // Check if current element has feedback class
            if (feedbackClasses.some(cls => current?.classList.contains(cls))) {
                return true;
            }
            // Stop searching if we reach the form level
            if (current.tagName === 'FORM' || current.classList.contains(`${prefix}-form`)) {
                break;
            }
            current = current.parentElement;
        }
        return false;
    }

    /**
     * Checks if the given element or its children has form additional content
     *
     * @param element The element to inspect (usually the form item container)
     * @param prefix The CSS class prefix (default: 'ant')
     * @returns true if the element or its children contains additional content, false otherwise
     *
     * @example
     * ```ts
     *  // Check if a form item has additional content
     *  const hasAdditional = DesignUtils.hasFormAdditional(formItemElement);
     *
     *  // With custom prefix
     *  const hasAdditional = DesignUtils.hasFormAdditional(formItemElement, 'custom');
     *  ```
     */
    public static hasFormAdditional = (element?: HTMLElement | null, prefix: string = 'ant'): boolean => {
        if (!element) {
            return false;
        }
        // Check if the element itself has the additional class
        const additionalClass = `${prefix}-form-item-additional`;
        if (element.classList.contains(additionalClass)) {
            return true;
        }
        // Check if any child element has the additional class
        return !!element.querySelector(`.${additionalClass}`);
    }

    /**
     * Gets the height of the form additional content element
     *
     * @param element The element to inspect (usually the form item container)
     * @param prefix The CSS class prefix (default: 'ant')
     * @returns the height of the additional content element, or 0 if not found
     *
     * @example
     * ```ts
     *  // Get the height of additional content (error message, help text, etc.)
     *  const additionalHeight = DesignUtils.getFormAdditionalHeight(formItemElement);
     *
     *  // With custom prefix
     *  const additionalHeight = DesignUtils.getFormAdditionalHeight(formItemElement, 'custom');
     *  ```
     */
    public static getFormAdditionalHeight = (element?: HTMLElement | null, prefix: string = 'ant'): number => {
        if (!element) {
            return 0;
        }
        const additionalClass = `${prefix}-form-item-additional`;
        const additionalElement = element.classList.contains(additionalClass) ? element : element.querySelector<HTMLElement>(`.${additionalClass}`);
        return additionalElement?.offsetHeight ?? 0;
    }

    /**
     * Detects the layout of the nearest parent Form element
     *
     * @param element The starting element to search from (usually the current component's root element)
     * @param prefix The CSS class prefix (default: 'ant')
     * @returns The detected layout type: 'horizontal', 'vertical', or 'inline'
     *
     * @description
     * This method traverses up the DOM tree from the given element to find the nearest Form element,
     * and determines its layout by checking the CSS class names.
     * Useful in React 19 where FormContext may not provide accurate layout information.
     *
     * @example
     * ```ts
     *  // Detect form layout from current element
     *  const layout = DesignUtils.detectFormLayout(elementRef.current);
     *
     *  // With custom prefix
     *  const layout = DesignUtils.detectFormLayout(elementRef.current, 'custom');
     *  ```
     */
    public static detectFormLayout = (element?: HTMLElement | null, prefix: string = 'ant'): 'horizontal' | 'vertical' | 'inline' | null => {
        if (!element) {
            return null;
        }
        // Try to find the nearest Form element by checking parent nodes
        let currentElement: HTMLElement | null = element;
        while (currentElement && currentElement !== document.body) {
            // Check if this element is a Form with layout class
            if (currentElement.classList.contains(`${prefix}-form-horizontal`)) {
                return 'horizontal';
            }
            if (currentElement.classList.contains(`${prefix}-form-vertical`)) {
                return 'vertical';
            }
            if (currentElement.classList.contains(`${prefix}-form-inline`)) {
                return 'inline';
            }
            // Stop searching if we reach the form level
            if (currentElement.tagName === 'FORM' || currentElement.classList.contains(`${prefix}-form`)) {
                break;
            }
            currentElement = currentElement.parentElement;
        }
        return null;
    }
}
