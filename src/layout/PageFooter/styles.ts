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
            backgroundColor: 'transparent',
            borderRadius: token.borderRadius,
            padding: '0 0',

            [`&&-width-block`]: {
                width: '100%',
            },

            [`&-vessel`]: {
                textAlign: 'center',
            },

            [`&-links`]: {
                marginBottom: token.marginXS,

                [`a`]: {
                    color: token.colorTextTertiary,
                    transition: 'all 0.3s',

                    [`&:not(:last-child)`]: {
                        marginRight: 40,
                    },

                    [`&:hover`]: {
                        color: token.colorInfoTextHover,
                    }
                }
            },

            [`&-copyright`]: {
                color: token.colorTextTertiary,
                fontSize: token.fontSize,
            },

            [`&&-default`]: {
                [`${token.componentCls}-vessel`]: {
                    padding: `24px 50px`,
                }
            },

            [`&&-half`]: {
                [`${token.componentCls}-vessel`]: {
                    padding: `12px 25px`,
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:PageFooter`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
