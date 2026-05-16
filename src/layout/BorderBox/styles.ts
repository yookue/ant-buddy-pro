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

            [`&&-bound-circle`]: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
            },

            [`&&-bound-shadow`]: {
                boxShadow: token.boxShadow,
            },

            [`&&-border-all`]: {
                border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            },

            [`&&-border-top`]: {
                borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            },

            [`&&-border-right`]: {
                borderRight: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            },

            [`&&-border-bottom`]: {
                borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            },

            [`&&-border-left`]: {
                borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:BorderBox`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
