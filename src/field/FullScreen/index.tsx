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
import classNames from 'classnames';
import screenfull from 'screenfull';


export type FullScreenProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-full-screen'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container span
     * @description.zh-CN 容器 span 的 CSS 类名
     * @description.zh-TW 容器 span 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the container span
     * @description.zh-CN 容器 span 的 CSS 样式
     * @description.zh-TW 容器 span 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The target DOM element to toggle fullscreen
     * @description.zh-CN 要切换全屏模式的 DOM 元素
     * @description.zh-TW 要切換全屏模式的 DOM 元素
     * @default document.documentElement
     */
    triggerFor?: HTMLElement;

    /**
     * @description The hint of entering fullscreen mode
     * @description.zh-CN 进入全屏模式的提示
     * @description.zh-TW 進入全屏模式的提示
     */
    enterHint?: string;

    /**
     * @description The hint of exiting fullscreen mode
     * @description.zh-CN 退出全屏模式的提示
     * @description.zh-TW 退出全屏模式的提示
     */
    exitHint?: string;

    /**
     * @description Whether to use tooltip instead of raw title
     * @description.zh-CN 是否使用 Tooltip 替代 title
     * @description.zh-TW 是否使用 Tooltip 替代 title
     * @default false
     */
    useTooltip?: boolean;

    /**
     * @description The properties of tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>;
};


/**
 * Component for displaying an icon with fullscreen capability
 *
 * @author David Hsing
 */
export const FullScreen: React.FC<FullScreenProps> = (props?: FullScreenProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-full-screen');

    // Initialize the default props
    const {
        triggerFor = document.documentElement,
        useTooltip = false,
    } = props ?? {};

    if (!triggerFor) {
        throw SyntaxError(`Parameter 'triggerFor' must be a valid element!`);
    }

    const [fullscreen, setFullscreen] = React.useState(document.fullscreenElement === triggerFor);

    /**
     * Listens fullscreenchange event for the trigger element
     *
     * @see "https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event"
     */
    const handleScreenChange = () => {
        setFullscreen(document.fullscreenElement === triggerFor);
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
        triggerFor?.addEventListener('fullscreenchange', handleScreenChange, false);
        triggerFor?.addEventListener('keydown', handleKeyDown, false);
        return () => {
            triggerFor?.removeEventListener('fullscreenchange', handleScreenChange, false);
            triggerFor?.removeEventListener('keydown', handleKeyDown, false);
        }
    });

    const handleToggleScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(triggerFor);
            setFullscreen(!fullscreen);
        }
    };

    const buildScreenDom = (tooltip: boolean) => (
        <span className={classNames(clazzPrefix, props?.containerClazz)} style={props?.containerStyle} title={!tooltip ? undefined : (fullscreen ? props?.exitHint : props?.enterHint)}>
            {React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {onClick: handleToggleScreen})}
        </span>
    );

    return !useTooltip ? buildScreenDom(true) : (
        <Tooltip title={fullscreen ? props?.exitHint : props?.enterHint} {...props?.tooltipProps}>
            {buildScreenDom(false)}
        </Tooltip>
    );
};
