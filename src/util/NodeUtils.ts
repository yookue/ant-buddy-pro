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


/**
 * Utilities for React node
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class NodeUtils {
    /**
     * Returns the string representation of the node
     *
     * @param node the node to inspect
     *
     * @returns the string representation of the node
     */
    public static toString(node?: React.ReactNode | (() => React.ReactNode) | null): string | undefined {
        if (!node) {
            return undefined;
        }
        if (typeof node === 'string') {
            return node;
        } else if (typeof node === 'number') {
            return node.toString();
        } else if (typeof node === 'function') {
            return this.toString(node());
        }
        return undefined;
    }

    /**
     * Returns the string representation of the node that under all the children
     *
     * @param node the node to inspect
     *
     * @returns the string representation of the node that under all the children
     *
     * @see "https://github.com/sunknudsen/react-node-to-string"
     */
    public static toStringRecursive(node?: React.ReactNode | (() => React.ReactNode) | null): string | undefined {
        if (!node) {
            return undefined;
        }
        if (typeof node === 'string' || typeof node === 'number' || typeof node === 'function') {
            return this.toString(node);
        }
        let result = '';
        if (node instanceof Array) {
            node.forEach(child => {
                result += this.toStringRecursive(child) ?? '';
            });
        } else if (React.isValidElement(node)) {
            result += this.toStringRecursive(node.props.children) ?? '';
        }
        return result;
    }
}
