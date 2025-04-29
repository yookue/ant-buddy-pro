/*
 * Copyright (c) 2025 Yookue Ltd. All rights reserved.
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


import {useStyle, type UseStyleResult, type GenerateStyle} from '@ant-design/pro-provider';
import {type ExtraProAliasToken} from '@/type/design-comp';
import {PackageConst} from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}-container`]: {
            [`> ${token.subComponentCls}`]: {
                [`&${token.subComponentCls}-top ${token.antCls}-tabs-content > ${token.antCls}-tabs-tabpane`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopLeftRadius: 0,
                    }
                },
                [`&${token.subComponentCls}-top-end ${token.antCls}-tabs-content > ${token.antCls}-tabs-tabpane`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopRightRadius: 0,
                    }
                },
                [`&${token.subComponentCls}-bottom ${token.antCls}-tabs-content > ${token.antCls}-tabs-tabpane`]: {
                    [`${token.componentCls}:not(${token.componentCls}-pro-field), ${token.componentCls}-item:not(${token.componentCls}-item-pro-field)`]: {
                        borderBottomLeftRadius: 0,
                    }
                },
                [`&${token.subComponentCls}-bottom-end ${token.antCls}-tabs-content > ${token.antCls}-tabs-tabpane`]: {
                    [`${token.componentCls}:not(${token.componentCls}-pro-field), ${token.componentCls}-item:not(${token.componentCls}-item-pro-field)`]: {
                        borderBottomRightRadius: 0,
                    }
                },
                [`&${token.subComponentCls}-left ${token.antCls}-tabs-content > ${token.antCls}-tabs-tabpane`]: {
                    paddingLeft: 1,
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }
                },
                [`&${token.subComponentCls}-right ${token.antCls}-tabs-content > ${token.antCls}-tabs-tabpane`]: {
                    paddingRight: 1,
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string, subPrefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:LocaleTextarea`, (token) => {
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
