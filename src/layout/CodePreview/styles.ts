/*
 * Copyright (c) 2025 Unikue Ltd. All rights reserved.
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


import { unit } from '@ant-design/cssinjs';
import { useStyle, type UseStyleResult, type GenerateStyle } from '@ant-design/pro-components';
import { type ExtraProAliasToken } from '@/type/design-token';
import { PackageConst } from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}`]: {
            borderRadius: token.borderRadius,

            [`&&-bound-border`]: {
                border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            },

            [`&&-bound-shadow`]: {
                boxShadow: token.boxShadow,
            },

            [`pre code`]: {
                border: 'none',
                backgroundColor: token.colorBgContainer,
                color: token.colorText,
            },

            [`&${token.componentCls}-padding-0 pre code`]: {
                padding: 0,
            },

            [`&${token.componentCls}-padding-xxs pre code`]: {
                padding: `${token.paddingXXS}px ${token.paddingXXS}px`,
            },

            [`&${token.componentCls}-padding-xs pre code`]: {
                padding: `${token.paddingXS}px ${token.paddingXS}px`,
            },

            [`&${token.componentCls}-padding-sm pre code`]: {
                padding: `${token.paddingSM}px ${token.paddingSM}px`,
            },

            [`&${token.componentCls}-padding-md pre code`]: {
                padding: `${token.paddingMD}px ${token.paddingMD}px`,
            },

            [`&${token.componentCls}-padding-lg pre code`]: {
                padding: `${token.paddingLG}px ${token.paddingLG}px`,
            },

            [`&${token.componentCls}-padding-x-0 pre code`]: {
                paddingLeft: 0,
                paddingRight: 0,
            },

            [`&${token.componentCls}-padding-x-xxs pre code`]: {
                paddingLeft: token.paddingXXS,
                paddingRight: token.paddingXXS,
            },

            [`&${token.componentCls}-padding-x-xs pre code`]: {
                paddingLeft: token.paddingXS,
                paddingRight: token.paddingXS,
            },

            [`&${token.componentCls}-padding-x-sm pre code`]: {
                paddingLeft: token.paddingSM,
                paddingRight: token.paddingSM,
            },

            [`&${token.componentCls}-padding-x-md pre code`]: {
                paddingLeft: token.paddingMD,
                paddingRight: token.paddingMD,
            },

            [`&${token.componentCls}-padding-x-lg pre code`]: {
                paddingLeft: token.paddingLG,
                paddingRight: token.paddingLG,
            },

            [`&${token.componentCls}-padding-y-0 pre code`]: {
                paddingTop: 0,
                paddingBottom: 0,
            },

            [`&${token.componentCls}-padding-y-xxs pre code`]: {
                paddingTop: token.paddingXXS,
                paddingBottom: token.paddingXXS,
            },

            [`&${token.componentCls}-padding-y-xs pre code`]: {
                paddingTop: token.paddingXS,
                paddingBottom: token.paddingXS,
            },

            [`&${token.componentCls}-padding-y-sm pre code`]: {
                paddingTop: token.paddingSM,
                paddingBottom: token.paddingSM,
            },

            [`&${token.componentCls}-padding-y-md pre code`]: {
                paddingTop: token.paddingMD,
                paddingBottom: token.paddingMD,
            },

            [`&${token.componentCls}-padding-y-lg pre code`]: {
                paddingTop: token.paddingLG,
                paddingBottom: token.paddingLG,
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:CodePreview`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
