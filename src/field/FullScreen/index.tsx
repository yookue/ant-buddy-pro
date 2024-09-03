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
import {useIntl} from '@ant-design/pro-provider';
import classNames from 'classnames';
import screenfull from 'screenfull';
import {NodeUtils} from '@/util/NodeUtils';
import {intlLocales} from './intl-locales';


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
    enterHint?: React.ReactNode;

    /**
     * @description The hint of exiting fullscreen mode
     * @description.zh-CN 退出全屏模式的提示
     * @description.zh-TW 退出全屏模式的提示
     */
    exitHint?: React.ReactNode;

    /**
     * @description Whether to use tooltip control
     * @description.zh-CN 是否使用 Tooltip 控件
     * @description.zh-TW 是否使用 Tooltip 控件
     * @default false
     */
    tooltipCtrl?: boolean;

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
    const intlType = useIntl();

    // Initialize the default props
    const {
        triggerFor = document.documentElement,
        tooltipCtrl = false,
    } = props ?? {};

    const [fullscreen, setFullscreen] = React.useState<boolean>(document.fullscreenElement === triggerFor);

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

    React.useEffect(() => {
        triggerFor.addEventListener('fullscreenchange', handleScreenChange, false);
        triggerFor.addEventListener('keydown', handleKeyDown, false);
        return () => {
            triggerFor.removeEventListener('fullscreenchange', handleScreenChange, false);
            triggerFor.removeEventListener('keydown', handleKeyDown, false);
        }
    }, []);

    const handleToggleScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(triggerFor);
            setFullscreen(!fullscreen);
        }
    };

    const enterHint = intlLocales.get([intlType.locale, 'enterHint']) || intlLocales.get(['en_US', 'enterHint']);
    const exitHint = intlLocales.get([intlType.locale, 'exitHint']) || intlLocales.get(['en_US', 'exitHint']);

    const buildScreenDom = () => (
        <span
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
            title={tooltipCtrl ? undefined : (NodeUtils.toString(fullscreen ? props?.exitHint : props?.enterHint) ?? (fullscreen ? exitHint : enterHint))}
        >
            {React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {onClick: handleToggleScreen})}
        </span>
    );

    if (!tooltipCtrl) {
        return buildScreenDom();
    }

    return (
        <Tooltip
            title={(fullscreen ? props?.exitHint : props?.enterHint) ?? (fullscreen ? exitHint : enterHint)}
            {...props?.tooltipProps}
        >
            {buildScreenDom()}
        </Tooltip>
    );
};
