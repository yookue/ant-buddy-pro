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
import classnames from 'classnames';
import { useFieldStyle } from './styles';


export type BoundShapeType = 'rect' | 'circle';


export type BorderBoxProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-border-box'
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
     * @description The bound shape
     * @description.zh-CN 边框形状
     * @description.zh-TW 邊框形狀
     * @default 'rect'
     */
    boundShape?: BoundShapeType;

    /**
     * @description Whether to show the bound shadow or not
     * @description.zh-CN 是否显示边框阴影
     * @description.zh-TW 是否顯示邊框陰影
     */
    boundShadow?: boolean;

    /**
     * @description Whether to border all
     * @description.zh-CN 是否全部都有边框
     * @description.zh-TW 是否全部都有邊框
     */
    borderAll?: boolean;

    /**
     * @description Whether to border top or not
     * @description.zh-CN 顶部是否有边框
     * @description.zh-TW 頂部是否有邊框
     * @default true
     */
    borderTop?: boolean;

    /**
     * @description Whether to border bottom or not
     * @description.zh-CN 底部是否有边框
     * @description.zh-TW 底部是否有邊框
     * @default true
     */
    borderBottom?: boolean;

    /**
     * @description Whether to border left or not
     * @description.zh-CN 左侧是否有边框
     * @description.zh-TW 左側是否有邊框
     * @default true
     */
    borderLeft?: boolean;

    /**
     * @description Whether to border right or not
     * @description.zh-CN 右侧是否有边框
     * @description.zh-TW 右側是否有邊框
     * @default true
     */
    borderRight?: boolean;
}>;


/**
 * Component for displaying a box with borders
 *
 * @author David Hsing
 */
export const BorderBox: React.FC<BorderBoxProps> = (props?: BorderBoxProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-border-box';

    // Initialize the default props
    const {
        boundShape = 'rect',
        boundShadow = false,
        borderAll = false,
        borderTop = true,
        borderBottom = true,
        borderLeft = true,
        borderRight = true,
    } = props ?? {};

    const [boxClazz, setBoxClazz] = React.useState<string>();

    const fieldStyle = useFieldStyle(clazzPrefix);

    React.useEffect(() => {
        if (boundShape === 'rect') {
            setBoxClazz(classnames({
                [`${clazzPrefix}-bound-rect`]: true,
                [`${clazzPrefix}-bound-shadow`]: boundShadow,
                [`${clazzPrefix}-border-all`]: borderAll,
                [`${clazzPrefix}-border-top`]: !borderAll && borderTop,
                [`${clazzPrefix}-border-bottom`]: !borderAll && borderBottom,
                [`${clazzPrefix}-border-left`]: !borderAll && borderLeft,
                [`${clazzPrefix}-border-right`]: !borderAll && borderRight,
            }));
        } else if (boundShape === 'circle') {
            setBoxClazz(classnames({
                [`${clazzPrefix}-bound-circle`]: true,
                [`${clazzPrefix}-bound-shadow`]: boundShadow,
                [`${clazzPrefix}-border-all`]: borderAll,
            }));
        }
    }, [clazzPrefix, boundShape, boundShadow, borderAll, borderTop, borderBottom, borderLeft, borderRight]);

    return (
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, boxClazz, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {props?.children}
        </div>
    );
};
