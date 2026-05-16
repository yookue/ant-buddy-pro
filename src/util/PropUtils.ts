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


import { omit } from '@rc-component/util';
import { DesignConst } from '@/constant/DesignConst';


/**
 * Utilities for properties
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class PropUtils {
    /**
     * Returns the omitted record of Ant ProComponents from the given props
     *
     * @param props the properties object to inspect
     *
     * @returns the omitted record of Ant ProComponents from the given props
     */
    public static omitProProps = (props?: Record<string, any>): Record<string, any> => {
        // @ts-ignore
        return !props ? {} : omit(props, [...DesignConst.PRO_FORM_FIELD_ITEM_PROPS, ...DesignConst.PRO_FIELD_SELECT_PROPS]);
    }

    /**
     * Returns the forwarded record of Ant ProComponents from the given props
     *
     * @param props the properties object to inspect
     *
     * @returns the forwarded record of Ant ProComponents from the given props
     */
    public static pickForwardProps = (props?: Record<string, any>): Record<string, any> => {
        if (!props) {
            return {};
        }
        const result = {};
        // @ts-ignore
        Object.keys(props).filter(key => DesignConst.FORWARD_FIELD_PROPS.includes(key)).forEach(key => result[key] = props[key]);
        return result;
    }

    /**
     * Calculate width based on ProForm width presets
     *
     * @param width The width value (number or preset string: xs/sm/md/lg/xl)
     * @returns The calculated width in pixels, or undefined if no width specified
     *
     * @example
     * ```ts
     *  PropUtils.calculateWidth('xs');  // returns '104px'
     *  PropUtils.calculateWidth('md');  // returns '328px'
     *  PropUtils.calculateWidth(200);   // returns '200px'
     *  ```
     */
    public static calculateWidth = (width?: number | string): string | undefined => {
        if (!width) {
            return undefined;
        }
        if (typeof width === 'number') {
            return `${width}px`;
        }
        const widthMap: Record<string, string> = {
            xs: '104px',
            sm: '216px',
            md: '328px',
            lg: '440px',
            xl: '552px',
        };
        return widthMap[width];
    }
}
