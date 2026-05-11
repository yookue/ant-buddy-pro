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
            },

            [`> ${token.antCls}-form-item`]: {
                width: '100%',
            },

            [`&-compact-before, &-compact-after`]: {
                flex: 'none',

                [`> ${token.antCls}-btn`]: {
                    marginTop: -token.lineWidth,
                    marginBottom: -token.lineWidth,
                }
            },

            // Status styles - when ProForm.Item has error, apply to Space.Compact
            [`${token.antCls}-form-item-has-error ${token.componentCls}-space`]: {
                borderColor: token.colorError,

                [`${token.antCls}-space-addon-compact-first-item, ${token.antCls}-space-addon-compact-last-item`]: {
                    borderColor: token.colorError,
                    '&:hover': {
                        borderColor: token.colorErrorHover,
                    },
                    '&:focus': {
                        borderColor: token.colorError,
                        boxShadow: `0 0 0 2px ${token.colorErrorBg}`,
                    }
                }
            },

            // Readonly styles
            [`&&-read-mode`]: {
                [`& ${token.componentCls}-space`]: {
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                },

                [`& ${token.componentCls}-input`]: {
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    color: token.colorText,
                    padding: 0,

                    '&:hover': {
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                    },

                    '&:focus': {
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                    },

                    '&::placeholder': {
                        color: token.colorTextDescription,
                    },
                },

                [`& ${token.componentCls}-compact-before, & ${token.componentCls}-compact-after`]: {
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:AddonInput`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
