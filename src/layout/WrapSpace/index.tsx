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
import {type SpaceSize} from 'antd/es/space';
import {css} from '@emotion/css';
import classNames from 'classnames';


export type WrapSpaceProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-wrap-space'
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

    /**
     * @description The padding size of the wrapper div
     * @description.zh-CN 容器 div 的内间距大小
     * @description.zh-TW 容器 div 的内間距大小
     * @default 'small'
     */
    size?: SpaceSize | [SpaceSize, SpaceSize];
};


export const WrapSpace: React.FC<React.PropsWithChildren<WrapSpaceProps>> = (props?: React.PropsWithChildren<WrapSpaceProps>) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-wrap-space');

    const getNumericSize = function (size: SpaceSize) {
        // noinspection SuspiciousTypeOfGuard
        if (typeof size === 'number') {
            return size;
        }
        // noinspection SuspiciousTypeOfGuard
        if (typeof size === 'string') {
            switch (size) {
                case 'small':
                    return 8;
                case 'middle':
                    return 16;
                case 'large':
                    return 24;
                default:
                    break;
            }
        }
        return 0;
    }

    const [horizontalSize, verticalSize] = React.useMemo(
        () =>
            ((Array.isArray(props?.size) ? props?.size : [props?.size, props?.size]) as [SpaceSize, SpaceSize]).map(item =>
                getNumericSize(item),
            ),
        [props?.size],
    );

    const paddingClazz = css({
        padding: `${verticalSize}px ${horizontalSize}px ${verticalSize}px ${horizontalSize}px`,
    });

    return (
        <div className={classNames(clazzPrefix, paddingClazz, props?.containerClazz)} style={props?.containerStyle}>
            {props?.children}
        </div>
    );
};


WrapSpace.defaultProps = {
    size: 'small',
};
