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


import {unit} from '@ant-design/cssinjs';
import {useStyle, type UseStyleResult, type GenerateStyle} from '@ant-design/pro-components';
import {type ExtraProAliasToken} from '@/type/design-token';
import {PackageConst} from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}`]: {
            [`&&-width-block`]: {
                width: '100%',
            },
            [`&:not(&-readonly-borderless)`]: {
                [`${token.componentCls}-field-border ${token.antCls}-form-item ${token.antCls}-form-item-control, ${token.componentCls}-addon-border ${token.antCls}-form-item ${token.antCls}-form-item-control`]: {
                    border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    [`&:hover`]: {
                        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorPrimary}`,
                    },
                    [`&:focus`]: {
                        boxShadow: token.boxShadow,
                        outline: 'none',
                    }
                }
            },
            [`&&-field-prior ${token.antCls}-space-compact`]: {
                display: 'flex',
                [`${token.componentCls}-field`]: {
                    display: 'flex',
                    flex: 1,
                },
                [`${token.componentCls}-addon`]: {
                    display: 'flex',
                    flex: 'none',
                    width: 'fit-content',
                }
            },
            [`&&-addon-prior ${token.antCls}-space-compact`]: {
                display: 'flex',
                [`${token.componentCls}-field`]: {
                    display: 'flex',
                    flex: 'none',
                    width: 'fit-content',
                },
                [`${token.componentCls}-addon`]: {
                    display: 'flex',
                    flex: 1,
                }
            },
            [`&&-addon-after &-addon`]: {
                marginLeft: -1,
                [`> ${token.antCls}-form-item > ${token.antCls}-form-item-row > ${token.antCls}-form-item-control`]: {
                    borderTopRightRadius: token.borderRadius,
                    borderBottomRightRadius: token.borderRadius,
                    [`&:hover`]: {
                        zIndex: token.zIndexBase + 10,
                    }
                }
            },
            [`&&-addon-before &-addon`]: {
                marginRight: -1,
                [`> ${token.antCls}-form-item > ${token.antCls}-form-item-row > ${token.antCls}-form-item-control`]: {
                    borderTopLeftRadius: token.borderRadius,
                    borderBottomLeftRadius: token.borderRadius,
                    [`&:hover`]: {
                        zIndex: token.zIndexBase + 10,
                    }
                }
            },
            [`&&-field-prior, &&-addon-prior`]: {
                [`${token.componentCls}-field, ${token.componentCls}-addon`]: {
                    [`> ${token.antCls}-form-item`]: {
                        width: '100%',
                    }
                }
            },
            [`&-field, &-addon`]: {
                [`> ${token.antCls}-form-item > ${token.antCls}-form-item-row > ${token.antCls}-form-item-control > ${token.antCls}-form-item-control-input`]: {
                    minHeight: 30,
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:CompactTuple`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
