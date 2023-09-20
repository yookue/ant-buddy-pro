/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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


import React from 'react';
import {Tooltip, type TooltipProps} from 'antd';
import {FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';
import {If} from '@yookue/react-condition';
import screenfull from 'screenfull';


type OmitTooltipProps = Omit<TooltipProps, 'title'>

export type FullScreenProps = {
    /**
     * @description The target DOM element to toggle fullscreen mode
     * @description.zh-CN 要切换全屏模式的 DOM 元素
     * @description.zh-TW 要切換全屏模式的 DOM 元素
     * @default document.documentElement
     */
    targetDom?: HTMLElement,

    /**
     * @description Whether to use Tooltip instead of raw Title
     * @description.zh-CN 是否使用 Tooltip 替代 Title
     * @description.zh-TW 否使用 Tooltip 替代 Title
     * @default false
     */
    useTooltip?: boolean;

    /**
     * @description The properties for Tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: OmitTooltipProps,

    /**
     * @description The title of entering fullscreen mode
     * @description.zh-CN 进入全屏模式的提示
     * @description.zh-TW 進入全屏模式的提示
     */
    enterTitle?: string,

    /**
     * @description The title of exiting fullscreen mode
     * @description.zh-CN 退出全屏模式的提示
     * @description.zh-TW 退出全屏模式的提示
     */
    exitTitle?: string,
}

export const FullScreen: React.FC<FullScreenProps> = (props?: FullScreenProps) => {
    const [fullscreen, setFullscreen] = React.useState(false);

    const toggleScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(props?.targetDom);
            setFullscreen(!fullscreen);
        }
    };

    return (
        <If condition={props?.useTooltip}>
            <If.Then>
                <Tooltip title={fullscreen ? props?.exitTitle : props?.enterTitle} {...props?.tooltipProps}>
                    {
                        React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
                            onClick: toggleScreen,
                        })
                    }
                </Tooltip>
            </If.Then>
            <If.Else>
                {
                    React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
                        title: fullscreen ? props?.exitTitle : props?.enterTitle,
                        onClick: toggleScreen,
                    })
                }
            </If.Else>
        </If>
    );
};

FullScreen.defaultProps = {
    targetDom: document.documentElement,
    useTooltip: false,
}
