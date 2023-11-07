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
import {ConfigProvider, Tooltip, type TooltipProps} from 'antd';
import {FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';
import {If} from '@yookue/react-condition';
import screenfull from 'screenfull';


type OmitTooltipProps = Omit<TooltipProps, 'title'>;

export type WrapperProps = {
    /**
     * @description The CSS class name for the wrapper element
     * @description.zh-CN 包裹的 div 或 span 的 CSS 类名
     * @description.zh-TW 包裹的 div 或 span 的 CSS 類名
     */
    clazz?: string;

    /**
     * @description The CSS style for the wrapper element
     * @description.zh-CN 包裹的 div 或 span 的 CSS 样式
     * @description.zh-TW 包裹的 div 或 span 的 CSS 樣式
     */
    style?: React.CSSProperties;
};

export type FullScreenProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-full-screen'
     */
    clazzPrefix?: string;

    /**
     * @description The target DOM element to toggle fullscreen
     * @description.zh-CN 要切换全屏模式的 DOM 元素
     * @description.zh-TW 要切換全屏模式的 DOM 元素
     * @default document.documentElement
     */
    triggerFor?: HTMLElement,

    /**
     * @description Whether to use tooltip instead of raw title
     * @description.zh-CN 是否使用 Tooltip 替代 Title
     * @description.zh-TW 否使用 Tooltip 替代 Title
     * @default false
     */
    useTooltip?: boolean;

    /**
     * @description The properties of tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: OmitTooltipProps,

    /**
     * @description Whether to wrap with a div or span element
     * @description.zh-CN 是否包裹一个 div 或 span
     * @description.zh-TW 是否包裹一個 div 或 span
     * @default false
     */
    useWrapper?: 'div' | 'span' | 'p' | false;

    /**
     * @description The properties for the wrapper element
     * @description.zh-CN 包裹的 div 或 span 的属性
     * @description.zh-TW 包裹的 div 或 span 的屬性
     */
    wrapperProps?: WrapperProps,

    /**
     * @description The hint title of entering fullscreen mode
     * @description.zh-CN 进入全屏模式的提示
     * @description.zh-TW 進入全屏模式的提示
     */
    enterHint?: string,

    /**
     * @description The hint title of exiting fullscreen mode
     * @description.zh-CN 退出全屏模式的提示
     * @description.zh-TW 退出全屏模式的提示
     */
    exitHint?: string,
};


export const FullScreen: React.FC<FullScreenProps> = (props?: FullScreenProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-full-screen');

    if (!props?.triggerFor) {
        throw SyntaxError(`Parameter 'triggerFor' must be a valid element!`);
    }

    const [fullscreen, setFullscreen] = React.useState<boolean>(document.fullscreenElement === props?.triggerFor);

    /**
     * Listens fullscreenchange event for the trigger element
     *
     * @see "https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event"
     */
    const handleScreenChange = () => {
        setFullscreen(document.fullscreenElement === props?.triggerFor);
    };

    /**
     * Listens keydown event for the trigger element
     *
     * @see "https://developer.mozilla.org/en-US/docs/web/api/ui_events/keyboard_event_key_values"
     * @see "https://www.toptal.com/developers/keycode"
     */
    const handleKeyDown = (event: any) => {
        if (event.key === 'Escape') {
            setFullscreen(false);
        } else if (event.key === 'F11') {
            setFullscreen(!fullscreen);
        }
    };

    React.useLayoutEffect(() => {
        props?.triggerFor?.addEventListener('fullscreenchange', handleScreenChange, false);
        props?.triggerFor?.addEventListener('keydown', handleKeyDown, false);
        return () => {
            props?.triggerFor?.removeEventListener('fullscreenchange', handleScreenChange, false);
            props?.triggerFor?.removeEventListener('keydown', handleKeyDown, false);
        }
    });

    const handleToggleScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(props?.triggerFor);
            setFullscreen(!fullscreen);
        }
    };

    const screenElement = React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
        className: clazzPrefix,
        onClick: handleToggleScreen,
    });

    return (
        <If condition={props?.useTooltip}>
            <If.Then>
                <Tooltip title={fullscreen ? props?.exitHint : props?.enterHint} {...props?.tooltipProps}>
                    <If condition={typeof props?.useWrapper === 'string'}>
                        {
                            React.createElement((props?.useWrapper as string), {
                                className: props?.wrapperProps?.clazz,
                                style: props?.wrapperProps?.style,
                            }, screenElement)
                        }
                    </If>
                    <If condition={!props?.useWrapper}>
                        {screenElement}
                    </If>
                </Tooltip>
            </If.Then>
            <If.Else>
                <If condition={typeof props?.useWrapper === 'string'}>
                    {
                        React.createElement((props?.useWrapper as string), {
                            className: props?.wrapperProps?.clazz,
                            style: props?.wrapperProps?.style,
                            title: fullscreen ? props?.exitHint : props?.enterHint,
                        }, screenElement)
                    }
                </If>
                <If condition={!props?.useWrapper}>
                    {
                        React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
                            title: fullscreen ? props?.exitHint : props?.enterHint,
                            onClick: handleToggleScreen,
                        })
                    }
                </If>
            </If.Else>
        </If>
    );
};


FullScreen.defaultProps = {
    triggerFor: document.documentElement,
    useTooltip: false,
    useWrapper: false,
};
