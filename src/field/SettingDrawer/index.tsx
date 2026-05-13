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
import {ConfigProvider} from 'antd';
import {SkinOutlined} from '@ant-design/icons';
import {SettingDrawer as ProSettingDrawer, type SettingDrawerProps as ProSettingDrawerProps} from '@ant-design/pro-components';
import {omit} from '@rc-component/util';
import classnames from 'classnames';
import {useFieldStyle} from './styles';


export type SettingDrawerRef = {
    open: () => void;
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
     * @description Custom trigger DOM element
     * @description.zh-CN 自定义触发 DOM 元素
     * @description.zh-TW 自定義觸發 DOM 元素
     * @default <SkinOutlined />
     */
    triggerDom?: React.ReactNode;
};


/**
 * Component for displaying a settings drawer with custom trigger
 *
 * This component wraps pro-components SettingDrawer with a custom trigger.
 * It hides the default settings button and uses a custom trigger DOM instead.
 *
 * @author David Hsing
 * @reference Ant Design ProComponents SettingDrawer
 */
export const SettingDrawer: React.ForwardRefExoticComponent<SettingDrawerProps & React.RefAttributes<SettingDrawerRef>> = React.forwardRef((props?: SettingDrawerProps, ref?: any) => {
    SettingDrawer.displayName = 'SettingDrawer';

    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-setting-drawer';

    // Initialize the default props
    const {
        triggerDom = <SkinOutlined style={{fontSize: 16}}/>,
    } = props ?? {};

    const handleSelector = `.${configContext.getPrefixCls('pro-setting-drawer-handle')}`;
    const fieldStyle = useFieldStyle(clazzPrefix);
    const omitProps = !props ? {} : omit(props, ['clazzPrefix', 'triggerDom', 'getContainer']);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        open: (): void => {
            document.querySelector<HTMLElement>(handleSelector)?.click();
        }
    }));

    return (
        <div className={classnames(clazzPrefix, fieldStyle.hashId)}>
            <div
                className={`${clazzPrefix}-trigger`}
                onClick={() => {
                    document.querySelector<HTMLElement>(handleSelector)?.click();
                }}
            >
                {triggerDom}
            </div>
            <ProSettingDrawer
                {...omitProps}
                getContainer={props?.getContainer ?? `.${clazzPrefix}`}
            />
        </div>
    );
});
