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
            [`&&-width-block`]: {
                width: '100%',
                display: 'inline-block',
                flexFlow: 'row nowrap',
                [`${token.antCls}-space-compact`]: {
                    display: 'flex',
                    [`${token.antCls}-form-item:first-of-type`]: {
                        flex: 1,
                    },
                    [`${token.antCls}-form-item:last-of-type`]: {
                        flex: 'none',
                        width: 'fit-content',
                    }
                }
            },
            [`> ${token.antCls}-space-compact`]: {
                [`${token.antCls}-form-item:first-of-type`]: {
                    marginRight: -1,
                }
            },
            [`${token.subComponentCls}`]: {
                [`&${token.antCls}-select:not(${token.antCls}-select-customize-input) ${token.antCls}-select-selector`]: {
                    color: token.colorTextSecondary,
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string, subPrefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:ChronoTuple`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            subPrefixCls,
            subComponentCls: `.${subPrefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
