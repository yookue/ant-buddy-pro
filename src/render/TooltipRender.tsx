/*
 * Copyright (c)  Yookue Ltd. All rights reserved.
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
import {Tooltip, type TooltipProps} from 'antd';
import {NodeUtils} from '@/util/NodeUtils';


/**
 * Renders for rendering tooltip
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class TooltipRender {
    /**
     * Returns the rendered tooltip for the given children
     *
     * @param tooltipCtrl Whether to use the Antd Tooltip or traditional title
     * @param tooltipProps The props for Antd Tooltip
     * @param children The children node to be tipped
     * @param wrapperClazz The class name of the wrapper span
     * @param wrapperStyle The style of the wrapper span
     *
     * @returns the rendered tooltip for the given children
     */
    public static renderTooltip = (tooltipCtrl?: boolean, tooltipProps?: TooltipProps, children?: React.ReactNode, wrapperClazz?: string, wrapperStyle?: React.CSSProperties): React.ReactNode => {
        if (!tooltipCtrl) {
            return (
                <span className={wrapperClazz} style={wrapperStyle} title={NodeUtils.toString(tooltipProps?.title)}>
                    {children}
                </span>
            );
        }
        if (!wrapperClazz && !wrapperStyle) {
            return (
                <Tooltip {...tooltipProps}>
                    {children}
                </Tooltip>
            );
        }
        return (
            <Tooltip {...tooltipProps}>
                <span className={wrapperClazz} style={wrapperStyle}>
                    {children}
                </span>
            </Tooltip>
        );
    }
}
