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
        [`${token.componentCls}`]: {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            borderRadius: token.borderRadius,
            [`&&-bound-border`]: {
                border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            },
            [`&&-width-block`]: {
                width: '100%',
            },
            [`&-ornament`]: {
                display: 'flex',
                flex: 'none',
                width: 'fit-content',
                alignItems: 'center',
                justifyContent: 'center',
            },
            [`&-ornament-before &-ornament`]: {
                marginRight: token.marginXXS,
                borderTopLeftRadius: token.borderRadius,
                borderBottomLeftRadius: token.borderRadius,
            },
            [`&-ornament-after &-ornament`]: {
                marginLeft: token.marginXXS,
                borderTopRightRadius: token.borderRadius,
                borderBottomRightRadius: token.borderRadius,
            },
            [`&-content`]: {
                flex: 1,
                textOverflow: 'ellipsis',
            },
            [`&&-default, &&-success, &&-info, &&-warn, &&-error, &&-classic`]: {
                [`${token.componentCls}-ornament`]: {
                    fontWeight: 300,
                    fontSize: token.fontSize + 1,
                    padding: `${token.paddingXXS}px ${token.paddingMD}px`,
                },
                [`&${token.componentCls}-ornament-before ${token.componentCls}-content, &${token.componentCls}-ornament-after ${token.componentCls}-content`]: {
                    alignItems: 'center',
                    padding: `0 ${token.paddingSM}px`,
                },
                [`&:not(${token.componentCls}-ornament-before):not(${token.componentCls}-ornament-after) ${token.componentCls}-content`]: {
                    padding: `5px ${token.paddingSM}px`,
                }
            },
            [`&&-default`]: {
                backgroundColor: token.colorFillAlter,
                [`${token.componentCls}-ornament`]: {
                    backgroundColor: token.colorBgContainerDisabled,
                }
            },
            [`&&-success`]: {
                backgroundColor: token.colorSuccessBg,
                [`${token.componentCls}-ornament`]: {
                    backgroundColor: token.green2,
                }
            },
            [`&&-info`]: {
                backgroundColor: token.colorInfoBg,
                [`${token.componentCls}-ornament`]: {
                    backgroundColor: token.blue2,
                }
            },
            [`&&-warn`]: {
                backgroundColor: token.colorWarningBg,
                [`${token.componentCls}-ornament`]: {
                    backgroundColor: token.orange2,
                }
            },
            [`&&-error`]: {
                backgroundColor: token.colorErrorBg,
                [`${token.componentCls}-ornament`]: {
                    backgroundColor: token.red2,
                }
            },
            [`&&-classic`]: {
                [`&${token.componentCls}-ornament-before ${token.componentCls}-ornament`]: {
                    borderRight: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                },
                [`&${token.componentCls}-ornament-after ${token.componentCls}-ornament`]: {
                    borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:SectionTitle`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
