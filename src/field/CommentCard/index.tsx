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
import {Space} from 'antd';
import classnames from 'classnames';
import {useFieldStyle} from './styles';


export type CommentCardProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-comment-card'
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
     * @description List of action items rendered below the comment content
     * @description.zh-CN 在评论内容下方呈现的操作项列表
     * @description.zh-TW 在評論內容下方呈現的操作項列表
     */
    actions?: React.ReactNode[];

    /**
     * @description The element to display as the comment author
     * @description.zh-CN 显示为评论作者的元素
     * @description.zh-TW 顯示為評論作者的元素
     */
    author?: React.ReactNode;

    /**
     * @description The element to display as the comment avatar - generally an antd Avatar
     * @description.zh-CN 显示为评论头像的元素 - 通常是 antd Avatar
     * @description.zh-TW 顯示為評論頭像的元素 - 通常是 antd Avatar
     */
    avatar?: React.ReactNode;

    /**
     * @description The main content of the comment
     * @description.zh-CN 评论的主要内容
     * @description.zh-TW 評論的主要內容
     */
    content: React.ReactNode;

    /**
     * @description A datetime element containing the time to be displayed
     * @description.zh-CN 包含要显示时间的日期时间元素
     * @description.zh-TW 包含要顯示時間的日期時間元素
     */
    datetime?: React.ReactNode;
}>;


/**
 * Component for displaying a comment card with avatar, author, content, actions and nested comments
 *
 * @author David Hsing
 * @reference Ant Design Compatible Comment
 */
export const CommentCard: React.FC<CommentCardProps> = (props?: CommentCardProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-comment-card';
    const fieldStyle = useFieldStyle(clazzPrefix);

    const renderNested = (nestedChildren: React.ReactNode) => (
        <div className={classnames(`${clazzPrefix}-nested`)}>{nestedChildren}</div>
    );

    const avatarDom = !props?.avatar ? undefined : (
        <div className={`${clazzPrefix}-avatar`}>
            {typeof props.avatar === 'string' ? <img src={props.avatar} alt="comment-avatar"/> : props.avatar}
        </div>
    );

    const actionDom = (!props?.actions || !props.actions.length) ? undefined : (
        <Space size='middle' className={`${clazzPrefix}-actions`}>
            {props.actions.map((action, index) => (
                <span key={`action-${index}`}>{action}</span>
            ))}
        </Space>
    );

    const authorContent = (props?.author || props?.datetime) && (
        <div className={`${clazzPrefix}-content-author`}>
            {props?.author && <span className={`${clazzPrefix}-content-author-name`}>{props.author}</span>}
            {props?.datetime && <span className={`${clazzPrefix}-content-author-time`}>{props.datetime}</span>}
        </div>
    );

    const contentDom = (
        <div className={`${clazzPrefix}-content`}>
            {authorContent}
            <div className={`${clazzPrefix}-content-detail`}>{props?.content}</div>
            {actionDom}
        </div>
    );

    return (
        <div className={classnames(clazzPrefix, fieldStyle.hashId, props?.containerClazz)} style={props?.containerStyle}>
            <div className={`${clazzPrefix}-inner`}>
                {avatarDom}
                {contentDom}
            </div>
            {props?.children ? renderNested(props.children) : null}
        </div>
    );
};
