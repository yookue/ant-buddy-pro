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
import {ConfigProvider, Typography} from 'antd';
import {type TitleProps} from 'antd/es/typography/Title';
import {type TextProps} from 'antd/es/typography/Text';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import './index.less';


export type CodePreviewProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-code-preview'
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
     * @description The CSS class name of the pre node
     * @description.zh-CN pre 节点的 CSS 类名
     * @description.zh-TW pre 節點的 CSS 類名
     */
    preClazz?: string;

    /**
     * @description The CSS style of the pre node
     * @description.zh-CN pre 节点的 CSS 样式
     * @description.zh-TW pre 節點的 CSS 樣式
     */
    preStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the code node
     * @description.zh-CN code 节点的 CSS 类名
     * @description.zh-TW code 節點的 CSS 類名
     */
    codeClazz?: string;

    /**
     * @description The CSS style of the code node
     * @description.zh-CN code 节点的 CSS 样式
     * @description.zh-TW code 節點的 CSS 樣式
     */
    codeStyle?: React.CSSProperties;

    /**
     * @description The content of the title
     * @description.zh-CN 标题内容
     * @description.zh-TW 標題內容
     */
    titleContent?: React.ReactNode;

    /**
     * @description The properties of the title
     * @description.zh-CN 标题属性
     * @description.zh-TW 標題屬性
     */
    titleProps?: TitleProps;

    /**
     * @description The CSS class name of the title
     * @description.zh-CN 标题的 CSS 类名
     * @description.zh-TW 標題的 CSS 類名
     */
    titleClazz?: string;

    /**
     * @description The CSS style of the title
     * @description.zh-CN 标题的 CSS 样式
     * @description.zh-TW 標題的 CSS 樣式
     */
    titleStyle?: React.CSSProperties;

    /**
     * @description The content of the text
     * @description.zh-CN 文本内容
     * @description.zh-TW 文本內容
     */
    textContent?: React.ReactNode;

    /**
     * @description The properties of the text
     * @description.zh-CN 文本属性
     * @description.zh-TW 文本屬性
     */
    textProps?: TextProps;

    /**
     * @description The CSS class name of the text
     * @description.zh-CN 文本的 CSS 类名
     * @description.zh-TW 文本的 CSS 類名
     */
    textClazz?: string;

    /**
     * @description The CSS style of the text
     * @description.zh-CN 文本的 CSS 样式
     * @description.zh-TW 文本的 CSS 樣式
     */
    textStyle?: React.CSSProperties;

    /**
     * @description Whether to use the preset style for the component
     * @description.zh-CN 组件是否使用预设样式
     * @description.zh-TW 組件是否使用預設樣式
     * @default 'default'
     */
    usePresetStyle?: 'default' | false;
}>;


export const CodePreview: React.FC<CodePreviewProps> = (props?: CodePreviewProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-code-preview');

    return (
        <div
            className={classNames(clazzPrefix, props?.containerClazz, (props?.usePresetStyle ? `${clazzPrefix}-${props?.usePresetStyle}` : undefined))}
            style={props?.containerStyle}
        >
            <pre className={classNames(`${clazzPrefix}-pre`, props?.preClazz)} style={props?.preStyle}>
                <code className={classNames(`${clazzPrefix}-code`, props?.codeClazz)} style={props?.codeStyle}>
                    <If condition={props?.titleContent} validation={false}>
                        <Typography.Title
                            className={classNames(`${clazzPrefix}-title`, props?.titleClazz)}
                            style={props?.titleStyle}
                            {...props?.titleProps}
                        >
                            {props?.titleContent}
                        </Typography.Title>
                    </If>
                    <If condition={props?.textContent} validation={false}>
                        <Typography.Text
                            className={classNames(`${clazzPrefix}-text`, props?.textClazz)}
                            style={props?.textStyle}
                            {...props?.textProps}
                        >
                            {props?.textContent}
                        </Typography.Text>
                    </If>
                    <If condition={props?.children} validation={false}>
                        {props?.children}
                    </If>
                </code>
            </pre>
        </div>
    );
};


CodePreview.defaultProps = {
    usePresetStyle: 'default',
};
