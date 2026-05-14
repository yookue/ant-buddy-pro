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



import {useStyle, type UseStyleResult, type GenerateStyle} from '@ant-design/pro-components';
import {type ExtraProAliasToken} from '@/type/design-token';
import {PackageConst} from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}`]: {
            [`&-field > ${token.iconCls}`]: {
                minWidth: 15,
                minHeight: 15,
                verticalAlign: 'middle',
            },

            [`${token.antCls}-badge ${token.antCls}-badge-count`]: {
                background: 'inherit',
                boxShadow: 'inherit',
                color: 'inherit',
                fontSize: token.fontSize,
            }
        }
    };
}


export function useFieldStyle(prefixCls: string, iconCls?: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:CountField`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            iconCls: `.${iconCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
