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
            display: 'flex',
            backgroundColor: token.colorBgContainer,

            [`&-entry`]: {
                [`${token.antCls}-menu:not(${token.antCls}-menu-horizontal)`]: {
                    [`&${token.componentCls}-ink-bar${token.antCls}-menu-inline ${token.antCls}-menu-item::after`]: {
                        borderInlineEnd: `3px ${token.lineType} ${token.colorPrimary} !important`,
                    },

                    [`&${token.componentCls}-selection-bold ${token.antCls}-menu-item-selected`]: {
                        fontWeight: 'bold',
                    }
                },

                [`${token.antCls}-menu-inline`]: {
                    border: 'none',
                },

                [`${token.antCls}-menu-root:not(${token.antCls}-menu-horizontal)`]: {
                    height: '100%',
                }
            },

            [`&-entry-hidden`]: {
                display: 'none',
            },

            [`&-tab`]: {
                flex: 1,

                [`&-title`]: {
                    fontWeight: 500,
                    fontSize: 20,
                    marginBottom: 12,
                }
            },

            [`&-tab-active`]: {
                display: 'block',
            },

            [`&-tab:not(${token.componentCls}-tab-active)`]: {
                display: 'none',
            },

            [`&${token.componentCls}-padding-0 ${token.componentCls}-tab`]: {
                padding: 0,
            },

            [`&${token.componentCls}-padding-xxs ${token.componentCls}-tab`]: {
                padding: `${token.paddingXXS}px ${token.paddingXXS}px`,
            },

            [`&${token.componentCls}-padding-xs ${token.componentCls}-tab`]: {
                padding: `${token.paddingXS}px ${token.paddingXS}px`,
            },

            [`&${token.componentCls}-padding-sm ${token.componentCls}-tab`]: {
                padding: `${token.paddingSM}px ${token.paddingSM}px`,
            },

            [`&${token.componentCls}-padding-md ${token.componentCls}-tab`]: {
                padding: `${token.paddingMD}px ${token.paddingMD}px`,
            },

            [`&${token.componentCls}-padding-lg ${token.componentCls}-tab`]: {
                padding: `${token.paddingLG}px ${token.paddingLG}px`,
            },

            [`&${token.componentCls}-padding-x-0 ${token.componentCls}-tab`]: {
                paddingLeft: 0,
                paddingRight: 0,
            },

            [`&${token.componentCls}-padding-x-xxs ${token.componentCls}-tab`]: {
                paddingLeft: token.paddingXXS,
                paddingRight: token.paddingXXS,
            },

            [`&${token.componentCls}-padding-x-xs ${token.componentCls}-tab`]: {
                paddingLeft: token.paddingXS,
                paddingRight: token.paddingXS,
            },

            [`&${token.componentCls}-padding-x-sm ${token.componentCls}-tab`]: {
                paddingLeft: token.paddingSM,
                paddingRight: token.paddingSM,
            },

            [`&${token.componentCls}-padding-x-md ${token.componentCls}-tab`]: {
                paddingLeft: token.paddingMD,
                paddingRight: token.paddingMD,
            },

            [`&${token.componentCls}-padding-x-lg ${token.componentCls}-tab`]: {
                paddingLeft: token.paddingLG,
                paddingRight: token.paddingLG,
            },

            [`&${token.componentCls}-padding-y-0 ${token.componentCls}-tab`]: {
                paddingTop: 0,
                paddingBottom: 0,
            },

            [`&${token.componentCls}-padding-y-xxs ${token.componentCls}-tab`]: {
                paddingTop: token.paddingXXS,
                paddingBottom: token.paddingXXS,
            },

            [`&${token.componentCls}-padding-y-xs ${token.componentCls}-tab`]: {
                paddingTop: token.paddingXS,
                paddingBottom: token.paddingXS,
            },

            [`&${token.componentCls}-padding-y-sm ${token.componentCls}-tab`]: {
                paddingTop: token.paddingSM,
                paddingBottom: token.paddingSM,
            },

            [`&${token.componentCls}-padding-y-md ${token.componentCls}-tab`]: {
                paddingTop: token.paddingMD,
                paddingBottom: token.paddingMD,
            },

            [`&${token.componentCls}-padding-y-lg ${token.componentCls}-tab`]: {
                paddingTop: token.paddingLG,
                paddingBottom: token.paddingLG,
            }
        },

        [`@media screen and (max-width:${token.screenMD}px)`]: {
            [`${token.componentCls}`]: {
                flexDirection: 'column',

                [`&-entry`]: {
                    width: '100%',
                    border: 'none',
                },

                [`&-tab`]: {
                    padding: 32,
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:MenuTabs`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
