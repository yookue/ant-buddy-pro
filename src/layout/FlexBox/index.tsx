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
import {css} from '@emotion/css';
import {StringUtils, ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import './index.less';


export type FlexBoxProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-flex-box''
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
     * @description The space distribution of items along the main axis
     * @description.zh-CN 内部元素在主轴上的分配空间的方式
     * @description.zh-TW 內部元素在主軸上的分配空間的方式
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    justifyContent?: React.CSSProperties['justifyContent'];

    /**
     * @description The justifying of items along the main axis
     * @description.zh-CN 内部元素在主轴上的对齐方式
     * @description.zh-TW 內部元素在主軸上的對齊方式
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     */
    justifyItems?: React.CSSProperties['justifyItems'];

    /**
     * @description The space distribution of items along the cross axis
     * @description.zh-CN 内部元素在交叉轴上的分配空间的方式
     * @description.zh-TW 內部元素在交叉軸上的分配空間的方式
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     */
    alignContent?: React.CSSProperties['alignContent'];

    /**
     * @description The justifying of items along the cross axis
     * @description.zh-CN 内部元素在交叉轴上的对齐方式
     * @description.zh-TW 內部元素在交叉軸上的對齊方式
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    alignItems?: React.CSSProperties['alignItems'];

    /**
     * @description How items will grow or shrink to fit the space available in its container
     * @description.zh-CN 内部元素如何增大或缩小以适应容器中可用的空间
     * @description.zh-TW 內部元素如何增大或縮小以適應容器中可用的空間
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
     */
    flex?: React.CSSProperties['flex'];

    /**
     * @description The initial main size of items on the main axis
     * @description.zh-CN 内部元素在主轴方向上的初始大小
     * @description.zh-TW 內部元素在主軸方向上的初始大小
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     */
    flexBasis?: React.CSSProperties['flexBasis'];

    /**
     * @description The flex direction of items on the main axis
     * @description.zh-CN 内部元素在容器中的主轴方向
     * @description.zh-TW 內部元素在容器中的主軸方向
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
     */
    flexDirection?: React.CSSProperties['flexDirection'];

    /**
     * @description The shorthand representation of flex-direction and flex-wrap
     * @description.zh-CN 属性 flex-direction 和 flex-wrap 的简写形式
     * @description.zh-TW 屬性 flex-direction 和 flex-wrap 的簡寫形式
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
     */
    flexFlow?: React.CSSProperties['flexFlow'];

    /**
     * @description The flex grow factor of items on the main axis
     * @description.zh-CN 内部元素在主轴上的 flex 增长系数
     * @description.zh-TW 內部元素在主軸上的 flex 增長系數
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     */
    flexGrow?: React.CSSProperties['flexGrow'];

    /**
     * @description The flex shrink factor of items on the main axis
     * @description.zh-CN 内部元素在主轴上的 flex 收缩系数
     * @description.zh-TW 內部元素在主軸上的 flex 收縮系數
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    flexShrink?: React.CSSProperties['flexShrink'];

    /**
     * @description Whether items are forced onto one line or can wrap onto multiple lines
     * @description.zh-CN 内部元素是单行显示还是多行显示
     * @description.zh-TW 內部元素是單行顯示還是多行顯示
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     */
    flexWrap?: React.CSSProperties['flexWrap'];

    /**
     * @description The gaps between rows and columns
     * @description.zh-CN 行与列之间的间隙
     * @description.zh-TW 行與列之間的間隙
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
     */
    gap?: 'small' | 'middle' | 'large' | React.CSSProperties['gap'];
}>;


/**
 * Component for displaying a title apart
 *
 * @author David Hsing
 */
export const FlexBox: React.FC<FlexBoxProps> = (props?: FlexBoxProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-flex-box');

    const buildClazz = () => {
        if (!props) {
            return undefined;
        }
        const result = {};
        Object.keys(props).filter(item => StringUtils.startsWithAny(item, ['align', 'justify', 'flex'])).forEach(item => {
            ObjectUtils.setProp(result, item, props[item as keyof FlexBoxProps]);
        });
        if (props.gap) {
            let size = props.gap;
            switch (props.gap) {
                case 'small':
                    size = '8px';
                    break;
                case 'middle':
                    size = '16px';
                    break;
                case 'large':
                    size = '24px';
                    break;
                default:
                    break;
            }
            ObjectUtils.setProp(result, 'gap', size);
        }
        return css(result);
    };

    return (
        <div
            className={classNames(`${clazzPrefix}`, buildClazz(), props?.containerClazz)}
            style={props?.containerStyle}
        >
            {props?.children}
        </div>
    );
};
