/*
 * Copyright (c) 2025 Unikue Ltd. All rights reserved.
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
import {ConfigProvider, type TooltipProps} from 'antd';
import {SkinOutlined} from '@ant-design/icons';
import {SettingDrawer as ProSettingDrawer, type SettingDrawerProps as ProSettingDrawerProps, useIntl} from '@ant-design/pro-components';
import {omit} from '@rc-component/util';
import {ObjectUtils} from '@unikue/ts-lang-utils';
import classnames from 'classnames';
import {TooltipRender} from '@/render/TooltipRender';
import {useFieldStyle} from './styles';
import {intlLocales} from './locales';


export type SettingDrawerRef = {
    open: () => void;
};


export type IntlLocaleProps = {
    /**
     * @description Theme
     * @description.zh-CN 主题
     * @description.zh-TW 主題
     */
    theme?: React.ReactNode;
};


export type SettingDrawerProps = ProSettingDrawerProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-setting-drawer'
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
     * @description Custom trigger DOM element
     * @description.zh-CN 自定义触发 DOM 元素
     * @description.zh-TW 自定義觸發 DOM 元素
     * @default <SkinOutlined />
     */
    triggerDom?: React.ReactNode;

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
 * Component for displaying a settings drawer with custom trigger
 *
 * This component wraps pro-components SettingDrawer with a custom trigger.
 * It hides the default settings button and uses a custom trigger DOM instead.
 *
 * @author David Hsing
 */
export const SettingDrawer: React.ForwardRefExoticComponent<SettingDrawerProps & React.RefAttributes<SettingDrawerRef>> = React.forwardRef((props?: SettingDrawerProps, ref?: any) => {
    SettingDrawer.displayName = 'SettingDrawer';

    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-setting-drawer';
    const intlType = useIntl();

    // Initialize the default props
    const {
        triggerDom = <SkinOutlined style={{fontSize: 16}}/>,
        locale = intlType.locale,
    } = props ?? {};

    const handleSelector = `.${configContext.getPrefixCls('pro-setting-drawer-handle')}`;
    const fieldStyle = useFieldStyle(clazzPrefix);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        open: (): void => {
            document.querySelector<HTMLElement>(handleSelector)?.click();
        }
    }));

    const omitProps = !props ? {} : omit(props, ['drawerProps', 'onCollapseChange', 'clazzPrefix', 'containerClazz', 'containerStyle', 'triggerDom', 'tooltipCtrl', 'tooltipProps', 'locale', 'localeProps']);
    const omitDrawerProps = !props?.drawerProps ? {} : omit(props?.drawerProps, ['rootClassName', 'maskClassName']);

    return (
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <div
                className={`${clazzPrefix}-trigger`}
                onClick={() => {
                    document.querySelector<HTMLElement>(handleSelector)?.click();
                }}
            >
                {TooltipRender.renderTooltip(props?.tooltipCtrl, {
                    title: ObjectUtils.firstNotNil(props?.localeProps?.theme, intlLocales.get([locale, 'theme']), intlLocales.get(['en_US', 'theme'])),
                    ...props?.tooltipProps,
                }, triggerDom)}
            </div>
            <ProSettingDrawer
                {...omitProps}
                drawerProps={{
                    ...omitDrawerProps,
                    rootClassName: classnames(props?.drawerProps?.rootClassName, `${clazzPrefix}-popup`),
                    maskClassName: classnames(props?.drawerProps?.maskClassName, `${clazzPrefix}-mask`),
                }}
                onCollapseChange={(open: boolean) => {
                    if (!open) {
                        // Delay 200ms to blur document after drawer closes
                        setTimeout(() => {
                            if (document.activeElement && document.activeElement !== document.body) {
                                (document.activeElement as HTMLElement).blur();
                            }
                        }, 200);
                    }
                    props?.onCollapseChange?.(open);
                }}
            />
        </div>
    );
});
