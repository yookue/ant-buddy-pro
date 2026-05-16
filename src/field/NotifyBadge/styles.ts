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
            [`&-popup`]: {
                minWidth: 320,

                [`> ${token.antCls}-dropdown-menu > ${token.antCls}-dropdown-menu-item`]: {
                    paddingLeft: `${token.paddingXS}px !important`,
                    paddingRight: `${token.paddingXS}px !important`,

                    [`&:hover`]: {
                        backgroundColor: 'unset !important',
                        cursor: 'unset !important',
                    }
                },

                [`${token.componentCls}-tabs`]: {
                    [`${token.antCls}-tabs-content-top ${token.antCls}-tabs-tab`]: {
                        paddingTop: 2,
                    },

                    [`${token.antCls}-tabs-content-left ${token.antCls}-tabs-tabpane`]: {
                        paddingLeft: token.paddingXS,
                    },

                    [`${token.antCls}-tabs-content-right ${token.antCls}-tabs-tabpane`]: {
                        paddingRight: token.paddingXS,
                    },

                    [`${token.componentCls}-tab-list`]: {
                        maxHeight: 400,
                        overflow: 'auto',

                        [`&::-webkit-scrollbar`]: {
                            display: 'none',
                        },

                        [`${token.antCls}-list-footer`]: {
                            paddingBottom: 0,
                        }
                    },

                    [`${token.componentCls}-list-item`]: {
                        borderRadius: token.borderRadius,
                        cursor: 'pointer',
                        paddingRight: token.paddingXS,
                        paddingLeft: token.paddingXS,
                        overflow: 'hidden',
                        transition: 'all 0.3s',

                        [`&&-read`]: {
                            opacity: 0.4,
                        },

                        [`&-avatar`]: {
                            backgroundColor: token.colorBgContainer,
                            marginTop: token.marginXXS,
                        },

                        [`&-icon`]: {
                            fontSize: 32,
                        },

                        [`&-meta`]: {
                            width: '100%',
                        },

                        [`&-title`]: {
                            marginBottom: token.marginXS,
                            fontWeight: 'normal',
                        },

                        [`&-description`]: {
                            fontSize: token.fontSize - 1,
                        },

                        [`&-timestamp`]: {
                            marginTop: token.marginXXS,
                            fontSize: token.fontSizeSM,
                        },

                        [`&-extra`]: {
                            float: 'right',
                            marginTop: -1.5,
                            marginRight: 0,
                            color: token.colorTextSecondary,
                            fontWeight: 'normal',
                        },

                        [`&:hover`]: {
                            backgroundColor: token.controlItemBgActive,
                        },

                        [`&:last-child`]: {
                            borderBottom: 'none !important',
                        }
                    },

                    [`${token.componentCls}-builtin-footer`]: {
                        height: 38,
                        color: token.colorPrimaryText,
                        display: 'flex',
                        alignItems: 'start',
                        textAlign: 'center',
                        borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderRadius: `0 0 ${token.borderRadius}px ${token.borderRadius}px`,
                        transition: 'all 0.3s',

                        [`${token.componentCls}-action-button`]: {
                            display: 'flex',
                            flex: 1,
                            cursor: 'pointer',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            userSelect: 'none',

                            [`&:hover`]: {
                                backgroundColor: token.controlItemBgHover,
                                color: token.colorPrimaryHover,
                            },

                            [`&:only-child:hover`]: {
                                borderBottomLeftRadius: token.borderRadius,
                                borderBottomRightRadius: token.borderRadius,
                            },

                            [`&:not(:only-child):first-child`]: {
                                [`&:hover`]: {
                                    borderBottomLeftRadius: token.borderRadius,
                                }
                            },

                            [`&:not(:only-child):last-child`]: {
                                borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,

                                [`&:hover`]: {
                                    borderBottomRightRadius: token.borderRadius,
                                }
                            }
                        }
                    }
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:NotifyBadge`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
