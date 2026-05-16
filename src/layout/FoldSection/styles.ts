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
            display: 'flex',
            flexDirection: 'column',
            borderRadius: token.borderRadius,

            [`&&-bound-border`]: {
                border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            },

            [`&-header`]: {
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                borderTopLeftRadius: token.borderRadius,
                borderTopRightRadius: token.borderRadius,
                padding: `${token.paddingXS}px ${token.padding}px`,

                [`&-ornament-before, &-ornament-after`]: {
                    display: 'flex',
                    flex: 'none',
                    width: 22,
                    height: 22,
                },

                [`&-ornament-before`]: {
                    marginRight: token.paddingXXS,
                    justifyContent: 'left',
                },

                [`&-ornament-after`]: {
                    marginLeft: token.marginXXS,
                    justifyContent: 'right',
                },

                [`&-collapse`]: {
                    display: 'flex',
                    flex: 'none',
                    borderRadius: token.borderRadiusSM,
                    width: 28,
                    height: 28,
                    justifyContent: 'center',

                    [`&:hover`]: {
                        backgroundColor: token.controlItemBgHover,
                        cursor: 'pointer',
                        color: token.colorTextSecondary,
                        transition: 'all 0.3s',
                    }
                },

                [`&-collapse-before`]: {
                    marginRight: token.marginXXS,
                },

                [`&-collapse-after`]: {
                    marginLeft: token.marginXXS,
                },

                [`&-content`]: {
                    flex: 1,
                    textOverflow: 'ellipsis',
                }
            },

            [`&-panel`]: {
                padding: token.paddingMD,
            },

            [`&-open &-panel`]: {
                display: 'block',
            },

            [`&-close &-panel`]: {
                display: 'none',
            },

            [`&&-default, &&-success, &&-info, &&-warn, &&-error, &&-classic`]: {
                [`${token.componentCls}-header`]: {
                    fontWeight: 500,
                },

                [`${token.componentCls}-panel`]: {
                    borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                }
            },

            [`&&-default`]: {
                [`${token.componentCls}-header`]: {
                    backgroundColor: token.colorFillAlter,
                }
            },

            [`&&-success`]: {
                [`${token.componentCls}-header`]: {
                    backgroundColor: token.colorSuccessBg,
                }
            },

            [`&&-info`]: {
                [`${token.componentCls}-header`]: {
                    backgroundColor: token.colorInfoBg,
                }
            },

            [`&&-warn`]: {
                [`${token.componentCls}-header`]: {
                    backgroundColor: token.colorWarningBg,
                }
            },

            [`&&-error`]: {
                [`${token.componentCls}-header`]: {
                    backgroundColor: token.colorErrorBg,
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:FoldSection`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
