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
import {Space, type SpaceProps} from 'antd';
import {type SpaceSize} from 'antd/es/space';
import {css} from '@emotion/css';
import {omit} from '@rc-component/util';
import classnames from 'classnames';
import {useFieldStyle} from './styles';


export type SpaceBoundProps = SpaceProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-space-bound'
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
     * @description Whether to border the bound or not
     * @description.zh-CN 外边界是否有边框
     * @description.zh-TW 外邊界是否有邊框
     */
    boundBorder?: boolean;

    /**
     * @description Whether to pad the bound or not
     * @description.zh-CN 外边界是否填充内边距
     * @description.zh-TW 外邊框是否填充內邊距
     * @default true
     */
    boundPad?: boolean;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;
};


/**
 * Component for displaying a div which can keep spaces for children
 *
 * @author David Hsing
 */
export const SpaceBound: React.FC<SpaceBoundProps> = (props?: SpaceBoundProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-space-bound';

    // Initialize the default props
    const {
        size = 'small',
        boundPad = true,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

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

    const [horizontalSize, verticalSize] = React.useMemo(() => {
        return ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map(item => getNumericSize(item));
    }, [size]);

    const buildPadCss = () => {
        return !boundPad ? undefined : css({
            padding: `${verticalSize}px ${horizontalSize}px`,
        });
    };

    const restProps = !props ? {} : omit(props, ['clazzPrefix', 'containerClazz', 'containerStyle', 'boundBorder', 'boundPad', 'widthBlock']);

    return (
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, (!props?.boundBorder ? undefined : `${clazzPrefix}-bound-border`), (!props?.widthBlock ? undefined : `${clazzPrefix}-width-block`), buildPadCss(), props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space {...restProps}>
                {props?.children}
            </Space>
        </div>
    );
};
