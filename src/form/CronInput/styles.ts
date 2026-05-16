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


import { useStyle, type UseStyleResult, type GenerateStyle } from '@ant-design/pro-components';
import { type ExtraProAliasToken } from '@/type/design-token';
import { PackageConst } from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}-popup`]: {
            backgroundColor: token.colorBgContainer,
            borderRadius: token.borderRadiusLG,
            boxShadow: token.boxShadow,
            zIndex: token.zIndexPopupBase,

            [`${token.antCls}-form ${token.antCls}-space-item`]: {
                fontSize: token.fontSize - 1,

                [`label`]: {
                    fontSize: token.fontSize - 1,
                }
            },

            [`${token.componentCls}-tabs-extra`]: {
                margin: `${token.marginXXS}px ${token.marginXS}px`,

                [`${token.componentCls}-ok-echo`]: {
                    marginTop: token.marginXXS,
                    minWidth: 44,
                    height: 18,
                    fontSize: token.fontSizeSM,
                }
            },

            [`> ${token.subComponentCls}`]: {
                [`&${token.subComponentCls}-top > ${token.subComponentCls}-content-border > ${token.antCls}-tabs-content-holder`]: {
                    borderTopColor: `${token.colorSplit} !important`,
                    borderTopRightRadius: '0 !important',
                },

                [`&${token.subComponentCls}-bottom > ${token.subComponentCls}-content-border > ${token.antCls}-tabs-content-holder`]: {
                    borderBottomColor: `${token.colorSplit} !important`,
                    borderBottomRightRadius: '0 !important',
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


export function useFieldStyle(prefixCls: string, subPrefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:CronInput`, (token) => {
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
