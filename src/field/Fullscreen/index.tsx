/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import {type TooltipProps} from 'antd';
import {FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';
import {useIntl} from '@ant-design/pro-components';
import {ObjectUtils} from '@unikue/ts-lang-utils';
import {useFullscreen} from 'ahooks';
import classnames from 'classnames';
import {TooltipRender} from '@/render/TooltipRender';
import {intlLocales} from './locales';


export type FullscreenRef = {
    isFullscreen: () => boolean;
    enterFullscreen: () => void;
    exitFullscreen: () => void;
    toggleFullscreen: () => void;
};


export type IntlLocaleProps = {
    /**
     * @description Fullscreen
     * @description.zh-CN 全屏
     * @description.zh-TW 全屏
     */
    enterFullscreen?: React.ReactNode;

    /**
     * @description Exit Fullscreen
     * @description.zh-CN 退出全屏
     * @description.zh-TW 退出全屏
     */
    exitFullscreen?: React.ReactNode;
};


export type FullscreenProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-fullscreen'
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
    triggerFor?: Element | null | (() => Element | null | undefined);

    /**
     * @description Whether to use Tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     */
    tooltipCtrl?: boolean;

    /**
     * @description The props of Antd Tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>;

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;

    /**
     * @description The props of locale
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

    const clazzPrefix = props?.clazzPrefix ?? 'abp-fullscreen';
    const intlType = useIntl();

    // Initialize the default props
    const {
        locale = intlType.locale,
    } = props ?? {};

    const triggerForRef = React.useRef<Element>((typeof props?.triggerFor === 'function' ? props.triggerFor() : null) ?? document.documentElement);
    const [fullscreen, {enterFullscreen, exitFullscreen, toggleFullscreen}] = useFullscreen(triggerForRef.current);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isFullscreen: (): boolean => {
            return fullscreen;
        },
        enterFullscreen: (): void => {
            enterFullscreen();
        },
        exitFullscreen: (): void => {
            exitFullscreen();
        },
        toggleFullscreen: (): void => {
            toggleFullscreen();
        }
    }));

    React.useEffect(() => {
        props?.onChange?.(fullscreen);
    }, [fullscreen]);

    const buildIconDom = () => {
        const enterFullscreen = ObjectUtils.firstNotNil(props?.localeProps?.enterFullscreen, intlLocales.get([locale, 'enterFullscreen']), intlLocales.get(['en_US', 'enterFullscreen']));
        const exitFullscreen = ObjectUtils.firstNotNil(props?.localeProps?.exitFullscreen, intlLocales.get([locale, 'exitFullscreen']), intlLocales.get(['en_US', 'exitFullscreen']));
        const innerDom = React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
            onClick: toggleFullscreen,
        });
        return TooltipRender.renderTooltip(props?.tooltipCtrl, {
            title: fullscreen ? exitFullscreen : enterFullscreen,
            ...props?.tooltipProps,
        }, innerDom);
    };

    return (
        <div
            className={classnames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildIconDom()}
        </div>
    );
});
