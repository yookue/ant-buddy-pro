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
import {useStyle, type UseStyleResult, type GenerateStyle} from '@ant-design/pro-provider';
import {type ExtraProAliasToken} from '@/type/design-token';
import {PackageConst} from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}`]: {
            [`&&-width-block`]: {
                display: 'block',
                [`${token.componentCls}-button`]: {
                    width: '100% !important',
                },
            },
            [`&:not(&-width-block)`]: {
                display: 'inline-block',
            },
            [`&-button`]: {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                [`&${token.componentCls}-button-immutable`]: {
                    backgroundColor: token.colorBgContainerDisabled,
                    cursor: 'default',
                    [`${token.componentCls}-preview`]: {
                        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    }
                },
                [`&&-xs`]: {
                    width: 104,
                },
                [`&&-sm`]: {
                    width: 216,
                },
                [`&&-md`]: {
                    width: 328,
                },
                [`&&-lg`]: {
                    width: 440,
                },
                [`&&-xl`]: {
                    width: 552,
                },
                [`&${token.componentCls}-icon-before > ${token.antCls}-space`]: {
                    flex: 1,
                    [`> ${token.antCls}-space-item:last-of-type`]: {
                        flex: 1,
                    }
                },
                [`&${token.componentCls}-icon-after, &:not(${token.componentCls}-icon-before):not(${token.componentCls}-icon-after)`]: {
                    [`> ${token.antCls}-space`]: {
                        flex: 1,
                        [`> ${token.antCls}-space-item:first-of-type`]: {
                            flex: 1,
                        }
                    }
                },
                [`${token.componentCls}-preview`]: {
                    border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    borderRadius: token.borderRadiusSM,
                    minHeight: 12,
                    [`&-empty`]: {
                        background: `linear-gradient(to bottom right, rgba(247,89,171,0) 0%, rgba(247,89,171,0) calc(50% - 1.5px), rgba(247,89,171,1) 50%, rgba(247,89,171,0) calc(50% + 1.5px), rgba(247,89,171,0) 100%)`,
                    }
                },
                [`&${token.antCls}-btn-lg`]: {
                    paddingLeft: token.paddingXS,
                    paddingRight: token.paddingXS,
                    [`${token.componentCls}-preview`]: {
                        fontSize: token.fontSize,
                        minHeight: 26,
                    },
                    [`${token.componentCls}-icon`]: {
                        fontSize: token.fontSizeLG,
                    }
                },
                [`&${token.antCls}-btn-sm`]: {
                    paddingLeft: 6,
                    paddingRight: 6,
                    [`${token.componentCls}-preview`]: {
                        fontSize: token.fontSizeSM - 4,
                        minHeight: 14,
                    },
                    [`${token.componentCls}-icon`]: {
                        fontSize: token.fontSizeSM,
                    }
                },
                [`&:not(${token.antCls}-btn-lg):not(${token.antCls}-btn-sm)`]: {
                    paddingLeft: token.paddingXS,
                    paddingRight: token.paddingXS,
                    [`${token.componentCls}-preview`]: {
                        fontSize: token.fontSizeSM,
                        minHeight: 20,
                    },
                    [`${token.componentCls}-icon`]: {
                        fontSize: token.fontSize,
                    }
                }
            }
        },
        [`${token.componentCls}-popup`]: {
            backgroundColor: token.colorBgContainer,
            boxShadow: token.boxShadow,
            zIndex: token.zIndexPopupBase,
            [`.block-picker`]: {
                borderRadius: `${token.borderRadius}px !important`,
                [`> div:nth-of-type(2)`]: {
                    borderTopLeftRadius: `${token.borderRadius}px !important`,
                    borderTopRightRadius: `${token.borderRadius}px !important`,
                },
                [`> div:last-of-type > div:first-of-type > span > div`]: {
                    borderRadius: `${token.borderRadius}px !important`,
                },
                [`> div:last-of-type input`]: {
                    border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder} !important`,
                    boxShadow: 'none !important',
                    borderRadius: `${token.borderRadius}px !important`,
                    [`&:focus, &:hover`]: {
                        borderColor: `${token.colorPrimaryBorderHover} !important`,
                    }
                }
            },
            [`.chrome-picker`]: {
                [`input`]: {
                    border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder} !important`,
                    boxShadow: 'none !important',
                    [`&:focus, &:hover`]: {
                        borderColor: `${token.colorPrimaryBorderHover} !important`,
                        outline: 'none !important',
                    }
                },
                [`svg`]: {
                    borderRadius: `${token.borderRadius}px !important`,
                    [`&:hover`]: {
                        backgroundColor: token.colorPrimaryBgHover,
                        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorPrimaryBorderHover} !important`,
                    }
                }
            },
            [`.github-picker`]: {
                [`> span > div`]: {
                    width: `26px !important`,
                    height: `26px !important`,
                }
            },
            [`.material-picker`]: {
                width: `112px !important`,
                height: `104px !important`,
                padding: `8px !important`,
            },
            [`.sketch-picker`]: {
                borderRadius: `${token.borderRadius}px !important`,
                boxShadow: 'none !important',
                [`> div:last-of-type > div > span > div`]: {
                    borderRadius: `${token.borderRadius}px !important`,
                },
                [`> div:nth-of-type(3) > div`]: {
                    [`&:first-of-type > div`]: {
                        marginRight: 12,
                    },
                    [`&:not(:first-of-type) > div`]: {
                        marginRight: 6,
                    },
                    [`> div input`]: {
                        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder} !important`,
                        boxShadow: 'none !important',
                        borderRadius: `${token.borderRadius}px !important`,
                        width: `100% !important`,
                        [`&:focus, &:hover`]: {
                            borderColor: `${token.colorPrimaryBorderHover} !important`,
                            outline: 'none !important',
                        },
                        [`.flexbox-fix:last-of-type > div > span > div`]: {
                            [`&:focus, &:hover`]: {
                                border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorPrimaryBorderHover} !important`,
                            }
                        }
                    }
                }
            },
            [`.swatches-picker`]: {
                maxWidth: 280,
                [`> div > div:last-of-type > div`]: {
                    [`&::-webkit-scrollbar`]: {
                        height: 8,
                        width: 8,
                    },
                    [`&::-webkit-scrollbar-track`]: {
                        borderRadius: token.borderRadius,
                        backgroundColor: '#f5f5f5',
                    },
                    [`&::-webkit-scrollbar-track:hover, &::-webkit-scrollbar-track:active`]: {
                        backgroundColor: '#f5f5f5',
                    },
                    [`&::-webkit-scrollbar-thumb`]: {
                        borderRadius: token.borderRadius,
                        backgroundColor: '#bfbfbf',
                    },
                    [`&::-webkit-scrollbar-thumb:hover, &::-webkit-scrollbar-thumb:active`]: {
                        backgroundColor: '#8c8c8c',
                    }
                }
            },
            [`.twitter-picker`]: {
                borderRadius: `${token.borderRadius}px !important`,
                [`> div:last-of-type`]: {
                    [`> span > div`]: {
                        borderRadius: `${token.borderRadius}px !important`,
                    },
                    [`> div:first-of-type`]: {
                        borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder} !important`,
                        borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder} !important`,
                        borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder} !important`,
                        borderTopLeftRadius: `${token.borderRadius}px !important`,
                        borderBottomLeftRadius: `${token.borderRadius}px !important`,
                    },
                    [`> div:nth-of-type(2) input`]: {
                        height: '30px !important',
                        boxShadow: 'none !important',
                        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder} !important`,
                        borderTopRightRadius: `${token.borderRadius}px !important`,
                        borderBottomRightRadius: `${token.borderRadius}px !important`,
                        [`&:focus, &:hover`]: {
                            borderColor: `${token.colorPrimaryBorderHover} !important`,
                            outline: 'none !important',
                        }
                    }
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:ColorPicker`, (token) => {
        const mesh: ExtraProAliasToken = {
            prefixCls,
            componentCls: `.${prefixCls}`,
            ...token,
        };
        return [buildFieldStyle(mesh)];
    });
}
