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
import ReactDOMServer from 'react-dom/server';


export abstract class ChildUtils {
    /**
     * Returns the total number of components in the children
     *
     * @param children the element(s) to check
     * @return the total number of components in the children
     *
     * @see "https://learnreactjs.github.io/access-child-component-node"
     */
    public static countChildren = (children?: any): number => {
        return children ? React.Children.count(children) : 0;
    }

    /**
     * Returns the total number of nonnull components in the children
     *
     * @param children the element(s) to check
     * @return the total number of nonnull components in the children
     *
     * @see "https://tagmerge.com/question/react-component-children-detect-if-empty-null-before-render"
     */
    public static countNonnullChildren = (children?: any): number => {
        if (!children) {
            return 0;
        }
        let result = 0;
        React.Children.forEach(children, (child: any) => {
            if (child) {
                try {
                    if (ReactDOMServer.renderToStaticMarkup(child)) {
                        result++;
                    }
                } catch (ignored) {
                }
            }
        });
        return result;
    }
}
