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
import {ConfigProvider} from 'antd';
import {SettingDrawer as ProSettingDrawer, type SettingDrawerProps as ProSettingDrawerProps} from '@ant-design/pro-layout';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import './index.less';


export type SettingDrawerProps = ProSettingDrawerProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-setting-drawer'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the entry div
     * @description.zh-CN 入口 div 的 CSS 类名
     * @description.zh-TW 入口 div 的 CSS 類名
     */
    entryClazz?: string;
};


/**
 * Component for displaying an icon which can be used to change the layout settings
 *
 * @author David Hsing
 */
export const SettingDrawer: React.FC<SettingDrawerProps> = (props?: SettingDrawerProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-setting-drawer');
    // noinspection JSUnresolvedReference
    const handlePrefix = configContext.getPrefixCls('buddy');

    const omitProps = !props ? {} : omit(props, ['clazzPrefix', 'entryClazz', 'prefixCls']);

    return (
        <ProSettingDrawer
            prefixCls={classNames((props?.prefixCls ?? clazzPrefix), props?.entryClazz, (props?.prefixCls ?? handlePrefix))}
            {...omitProps}
        />
    );
};
