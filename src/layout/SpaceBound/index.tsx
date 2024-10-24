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
import {ConfigProvider, Space, type SpaceProps} from 'antd';
import {type SpaceSize} from 'antd/es/space';
import {css} from '@emotion/css';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';


export type SpaceBoundProps = SpaceProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-space-bound'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container div
     * @description.zh-CN 容器 div 的 CSS 类名
     * @description.zh-TW 容器 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the container div
     * @description.zh-CN 容器 div 的 CSS 样式
     * @description.zh-TW 容器 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;
};


/**
 * Component for displaying a div which can keep spaces for children
 *
 * @author David Hsing
 */
export const SpaceBound: React.FC<SpaceBoundProps> = (props?: SpaceBoundProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-space-bound');

    // Initialize the default props
    const {
        size = 'small',
    } = props ?? {};

    const getNumericSize = function (space: SpaceSize) {
        // noinspection SuspiciousTypeOfGuard
        if (typeof space === 'number') {
            return space;
        }
        // noinspection SuspiciousTypeOfGuard
        if (typeof space === 'string') {
            switch (space) {
                case 'small':
                    return 8;
                case 'middle':
                    return 16;
                case 'large':
                    return 24;
                default:
                    return 0;
            }
        }
        return 0;
    };

    const [horizontalSize, verticalSize] = React.useMemo(
        () =>
            ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map(item =>
                getNumericSize(item),
            ),
        [size],
    );

    const paddingClazz = css({
        padding: `${verticalSize}px ${horizontalSize}px`,
    });

    const restProps = !props ? {} : omit(props, ['clazzPrefix', 'containerClazz', 'containerStyle']);

    return (
        <div className={classNames(clazzPrefix, paddingClazz, props?.containerClazz)} style={props?.containerStyle}>
            <Space {...restProps}>
                {props?.children}
            </Space>
        </div>
    );
};
