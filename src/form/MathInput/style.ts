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
import {type ExtraProAliasToken} from '@/type/design-token';
import {PackageConst} from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        // @see "https://mathlive.io/mathfield/guides/customizing/#css-variables"
        [`${token.componentCls}`]: {
            [`math-field`]: {
                '--primary': token.colorPrimary,
                '--correct-color': token.colorSuccessText,
                '--incorrect-color': token.colorErrorText,
                '--highlight-text': 'transparent',
                borderColor: token.colorBorder,
                borderRadius: token.borderRadius,
                paddingLeft: token.paddingXXS,
                paddingRight: token.paddingXXS,
                width: '100%',
                fontSize: 18,
                minHeight: token.controlHeight,
                [`&:focus-within`]: {
                    borderColor: token.colorPrimaryBorderHover,
                    cursor: 'text',
                    outline: 'none',
                },
                [`&::part(virtual-keyboard-toggle), &::part(menu-toggle)`]: {
                    color: token.blue4,
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:MathInput`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
