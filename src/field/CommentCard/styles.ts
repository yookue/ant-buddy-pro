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
            display: 'flex',
            flexDirection: 'column',
            paddingTop: unit(token.padding),

            // Avatar
            [`&-avatar`]: {
                display: 'inline-block',
                flexShrink: 0,
                marginRight: token.marginSM,

                img: {
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                },
            },

            // Content
            [`&-content`]: {
                display: 'flex',
                flex: 'auto',
                flexDirection: 'column',
                minWidth: 0,

                // Author
                [`&-author`]: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginBottom: token.marginXS,

                    [`&-name`]: {
                        color: token.colorTextSecondary,
                        fontSize: token.fontSizeSM,
                        lineHeight: token.lineHeightSM,
                        marginRight: token.marginXS,
                    },

                    [`&-time`]: {
                        color: token.colorTextTertiary,
                        fontSize: token.fontSizeSM,
                        lineHeight: token.lineHeightSM,
                    },
                },

                // Detail
                [`&-detail`]: {
                    marginBottom: token.marginSM,
                    color: token.colorText,
                    wordBreak: 'break-word',
                },

                // Actions
                [`${token.componentCls}-actions`]: {
                    marginTop: 'auto',
                    marginBottom: 0,
                    paddingLeft: 0,
                    listStyle: 'none',
                    color: token.colorTextTertiary,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: token.marginSM,
                }
            },

            // Nested comments
            [`&-nested`]: {
                marginLeft: 44,
                display: 'flex',
                flexDirection: 'column',
            },

            // Inner layout
            [`&-inner`]: {
                display: 'flex',
                width: '100%',
            },

            // RTL support
            [`&&-rtl`]: {
                direction: 'rtl',

                [`&-avatar`]: {
                    marginRight: 0,
                    marginLeft: token.marginSM,
                },

                [`&-nested`]: {
                    marginLeft: 0,
                    marginRight: 44,
                },

                [`&-content-author-name`]: {
                    marginRight: 0,
                    marginLeft: token.marginXS,
                },

                [`&-content-actions`]: {
                    justifyContent: 'flex-end',
                },
            },
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:CommentCard`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
