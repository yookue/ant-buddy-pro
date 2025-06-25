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
import {type ExtraProAliasToken} from '@/type/design-token';
import {PackageConst} from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}-popup`]: {
            padding: 0,
            [`&-tabs`]: {
                [`> ${token.antCls}-tabs-nav > ${token.antCls}-tabs-extra-content`]: {
                    maxWidth: 200,
                    margin: token.marginXXS,
                    [`> ${token.antCls}-input-search > ${token.antCls}-input-wrapper > ${token.antCls}-input-affix-wrapper`]: {
                        height: 24,
                        [`&${token.antCls}-input-affix-wrapper-status-error`]: {
                            borderColor: `${token.colorBorder} !important`,
                            [`&:not(${token.antCls}-input-affix-wrapper-focused):hover`]: {
                                borderColor: `${token.colorPrimaryBorderHover} !important`,
                            }
                        }
                    }
                }
            },
            [`${token.componentCls}-scene-tab`]: {
                padding: '6px 0 6px 8px',
                [`&-content`]: {
                    [`${token.componentCls}-scroll-area`]: {
                        width: '100%',
                        minHeight: '48px !important',
                    },
                    [`${token.componentCls}-search-mismatch`]: {
                        width: '100%',
                    }
                }
            },
            [`${token.componentCls}-icon-wrapper`]: {
                position: 'relative',
                border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`,
                borderRadius: token.borderRadius,
                cursor: 'pointer',
                margin: 6,
                transition: 'transform 0.3s ease',
                [`&:hover`]: {
                    border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorPrimaryBorderHover}`,
                    backgroundColor: token.controlItemBgActive,
                    transition: 'transform 0.8s ease',
                }
            },
            [`${token.componentCls}-icon-selected`]: {
                border: `${unit(token.lineWidth)} ${token.lineType} ${token.blue4}`,
                backgroundColor: token.controlItemBgActive,
                [`&::before`]: {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderBottom: `16px ${token.lineType} ${token.colorSuccess}`,
                    borderLeft: `16px ${token.lineType} transparent`,
                    borderRadius: token.borderRadiusSM,
                },
                [`&::after`]: {
                    content: '""',
                    position: 'absolute',
                    bottom: 1,
                    right: 3,
                    width: 4,
                    height: 8,
                    borderRight: `2px ${token.lineType} ${token.colorWhite}`,
                    borderBottom: `2px ${token.lineType} ${token.colorWhite}`,
                    transform: 'rotate(45deg)',
                }
            },
            [`${token.componentCls}-icon-option`]: {
                width: 48,
                height: 48,
                fontSize: token.fontSizeLG + 1,
                display: 'flex',
                justifyContent: 'center',
                [`&:hover`]: {
                    transform: 'scale(1.2)',
                }
            },
            [`${token.subComponentCls}`]: {
                [`&${token.subComponentCls}-top > ${token.antCls}-tabs > ${token.antCls}-tabs-content-holder`]: {
                    borderTopRightRadius: '0 !important',
                },
                [`&${token.subComponentCls}-top-end > ${token.antCls}-tabs > ${token.antCls}-tabs-content-holder`]: {
                    borderTopLeftRadius: '0 !important',
                },
                [`&${token.subComponentCls}-bottom > ${token.antCls}-tabs > ${token.antCls}-tabs-content-holder`]: {
                    borderBottomRightRadius: '0 !important',
                },
                [`&${token.subComponentCls}-bottom-end > ${token.antCls}-tabs > ${token.antCls}-tabs-content-holder`]: {
                    borderBottomLeftRadius: '0 !important',
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string, subPrefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:IconSelect`, (token) => {
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
