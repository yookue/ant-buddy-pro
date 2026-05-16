/*
 * Copyright (c) 2025 Unikue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
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


import { Avatar, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { CommentCard } from '@unikue/ant-buddy-pro';


export default () => {
    return (
        <Space orientation='vertical' style={{ width: '100%' }} size='large'>
            <CommentCard
                avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' alt='Han Solo'/>}
                author='Han Solo'
                datetime='2小时前'
                content='Ant Design 组件库非常棒，使用起来非常方便！'
                actions={[
                    <span key='like'>
                        <LikeOutlined /> 点赞
                    </span>,
                    <span key='reply'>
                        <MessageOutlined /> 回复
                    </span>,
                ]}
            >
                <CommentCard
                    avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' alt='Luke Skywalker'/>}
                    author='Luke Skywalker'
                    datetime='1小时前'
                    content='同意！特别是 ProComponents 系列，大大提高了开发效率。'
                    actions={[
                        <span key='like'>
                            <LikeOutlined /> 点赞
                        </span>,
                        <span key='reply'>
                            <MessageOutlined /> 回复
                        </span>,
                    ]}
                />
            </CommentCard>

            <CommentCard
                avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=3' alt='Leia Organa'/>}
                author='Leia Organa'
                datetime='30分钟前'
                content={
                    <div>
                        <p>CommentCard 组件支持嵌套评论，可以构建完整的评论系统。</p>
                        <p>还支持自定义头像、作者信息、时间戳和操作项。</p>
                    </div>
                }
                actions={[
                    <span key='like'>
                        <LikeOutlined /> 12
                    </span>,
                    <span key='star'>
                        <StarOutlined /> 收藏
                    </span>,
                    <span key='reply'>
                        <MessageOutlined /> 回复
                    </span>,
                ]}
            />

            <CommentCard
                avatar='https://api.dicebear.com/7.x/miniavs/svg?seed=4'
                author='Chewbacca'
                datetime='刚刚'
                content='也可以直接使用字符串作为头像 URL，非常方便！'
            />
        </Space>
    );
};
