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
import {intlLocales} from './intl-locales';


export type FullscreenRef = {
    isFullscreen: () => boolean;
    requestFullscreen: () => void;
    exitFullscreen: () => void;
    toggleFullscreen: () => void;
};


export type IntlLocaleProps = {
    /**
     * @description Fullscreen
     * @description.zh-CN 全屏
     * @description.zh-TW 全屏
     */
    requestFullscreen?: string;

    /**
     * @description Exit Fullscreen
     * @description.zh-CN 退出全屏
     * @description.zh-TW 退出全屏
     */
    exitFullscreen?: string;
};


export type FullscreenProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-fullscreen'
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
     * @description The callback function when the fullscreen changed
     * @description.zh-CN 全屏更改后的回调函数
     * @description.zh-TW 全屏更改後的回調函數
     */
    onChange?: (fullscreen?: boolean) => void;

    /**
     * @description The target DOM element to toggle fullscreen
     * @description.zh-CN 要切换全屏的 DOM 元素
     * @description.zh-TW 要切換全屏的 DOM 元素
     * @default document.documentElement
     */
    triggerElement?: HTMLElement;

    /**
     * @description Whether to use tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     * @default false
     */
    tooltipCtrl?: boolean;

    /**
     * @description The prop for tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>;

    /**
     * @description The props for locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
};


/**
 * Component for displaying an icon with fullscreen capability
 *
 * @author David Hsing
 */
export const Fullscreen: React.ForwardRefExoticComponent<FullscreenProps & React.RefAttributes<FullscreenRef>> = React.forwardRef((props?: FullscreenProps, ref?: any) => {
    Fullscreen.displayName = 'Fullscreen';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-fullscreen');
    const intlType = useIntl();

    // Initialize the default props
    const {
        triggerElement = document.documentElement,
        tooltipCtrl = false,
    } = props ?? {};

    const fieldRef = React.useRef<HTMLDivElement>();
    const [fullscreen, setFullscreen] = React.useState<boolean>(document.fullscreenElement === triggerElement);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isFullscreen: (): boolean => {
            return fullscreen;
        },
        requestFullscreen: (): void => {
            if (screenfull.isEnabled) {
                screenfull.request();
                setFullscreen(true);
            }
        },
        exitFullscreen: (): void => {
            if (screenfull.isEnabled) {
                screenfull.exit();
                setFullscreen(false);
            }
        },
        toggleFullscreen: (): void => {
            handleToggleScreen();
        }
    }));

    React.useEffect(() => {
        props?.onChange?.(fullscreen);
    }, [fullscreen]);

    /**
     * Listens fullscreenchange event for the trigger element
     *
     * @see "https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event"
     */
    const handleScreenChange = () => {
        setFullscreen(document.fullscreenElement === triggerElement);
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
        triggerElement.addEventListener('fullscreenchange', handleScreenChange, false);
        triggerElement.addEventListener('keydown', handleKeyDown, false);
        return () => {
            triggerElement.removeEventListener('fullscreenchange', handleScreenChange, false);
            triggerElement.removeEventListener('keydown', handleKeyDown, false);
        }
    }, []);

    const handleToggleScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(triggerElement);
            setFullscreen(!fullscreen);
        }
    };

    const iconDom = React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
        onClick: handleToggleScreen,
    });

    const buildIconWrap = () => {
        const requestFullscreen = intlLocales.get([intlType.locale, 'requestFullscreen']) || intlLocales.get(['en_US', 'requestFullscreen']);
        const exitFullscreen = intlLocales.get([intlType.locale, 'exitFullscreen']) || intlLocales.get(['en_US', 'exitFullscreen']);
        if (!tooltipCtrl) {
            return (
                <span title={fullscreen ? (props?.localeProps?.exitFullscreen ?? exitFullscreen) : (props?.localeProps?.requestFullscreen ?? requestFullscreen)}>
                    {iconDom}
                </span>
            );
        }
        return (
            <Tooltip
                title={fullscreen ? (props?.localeProps?.exitFullscreen ?? exitFullscreen) : (props?.localeProps?.requestFullscreen ?? requestFullscreen)}
                {...props?.tooltipProps}
            >
                {iconDom}
            </Tooltip>
        );
    };

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildIconWrap()}
        </div>
    );
});
