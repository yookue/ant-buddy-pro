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


import {unit} from '@ant-design/cssinjs';
import {useStyle, type UseStyleResult, type GenerateStyle} from '@ant-design/pro-provider';
import {type ExtraProAliasToken} from '@/type/design-comp';
import {PackageConst} from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}-popup`]: {
            backgroundColor: token.colorBgContainer,
            borderRadius: token.borderRadiusLG,
            boxShadow: token.boxShadow,
            zIndex: token.zIndexPopupBase,
            [`${token.componentCls}-popup-list`]: {
                [`${token.componentCls}-popup-list-item`]: {
                    [`&:hover`]: {
                        backgroundColor: token.controlItemBgHover,
                    },
                    [`> ${token.antCls}-form-item`]: {
                        width: '100%',
                    },
                    [`${token.componentCls}-locale-tag`]: {
                        color: token.colorTextSecondary,
                        cursor: 'default',
                        fontSize: token.fontSize - 1,
                    },
                    [`${token.componentCls}-locale-action`]: {
                        cursor: 'pointer',
                    }
                }
            },
            [`&${token.componentCls}-popup-immutable ${token.componentCls}-popup-list ${token.componentCls}-popup-list-item > ${token.antCls}-form-item`]: {
                marginBottom: 0,
            },
            [`${token.componentCls}-locale-item-readonly`]: {
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                [`&-before ${token.componentCls}-locale-item-readonly-content`]: {
                    paddingLeft: token.paddingXS,
                },
                [`&-after ${token.componentCls}-locale-item-readonly-content`]: {
                    paddingRight: token.paddingXS,
                },
                [`&-content`]: {
                    flex: 1,
                },
                [`&-tag`]: {
                    flex: 'none',
                    width: 'fit-content',
                    backgroundColor: token.controlItemBgHover,
                    border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    borderRadius: token.borderRadiusSM,
                    color: token.colorTextSecondary,
                    cursor: 'default',
                    padding: `2px ${token.paddingXS}px`,
                    fontSize: token.fontSizeSM,
                }
            },
            [`&${token.componentCls}-popup-pro-field:not(${token.componentCls}-popup-immutable)`]: {
                [`${token.componentCls}-popup-list ${token.componentCls}-popup-list-item:first-of-type`]: {
                    paddingTop: token.paddingMD,
                }
            },
            [`&:not(${token.componentCls}-popup-pro-field)`]: {
                [`${token.componentCls}-popup-list ${token.componentCls}-popup-list-item:first-of-type`]: {
                    paddingTop: token.paddingXS,
                }
            }
        },
        [`${token.componentCls}-entry-readonly`]: {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            [`&-before ${token.componentCls}-entry-readonly-content`]: {
                paddingLeft: token.paddingXS,
            },
            [`&-after ${token.componentCls}-entry-readonly-content`]: {
                paddingRight: token.paddingXS,
            },
            [`&-content`]: {
                display: 'flex',
                flexGrow: 1,
            },
            [`&-addon`]: {
                flex: 'none',
                width: 'fit-content',
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:LocaleInput`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
