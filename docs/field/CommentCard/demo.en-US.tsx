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
                datetime='2 hours ago'
                content='Ant Design component library is awesome and very convenient to use!'
                actions={[
                    <span key='like'>
                        <LikeOutlined /> Like
                    </span>,
                    <span key='reply'>
                        <MessageOutlined /> Reply
                    </span>,
                ]}
            >
                <CommentCard
                    avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' alt='Luke Skywalker'/>}
                    author='Luke Skywalker'
                    datetime='1 hour ago'
                    content='Agreed! Especially the ProComponents series, which greatly improves development efficiency.'
                    actions={[
                        <span key='like'>
                            <LikeOutlined /> Like
                        </span>,
                        <span key='reply'>
                            <MessageOutlined /> Reply
                        </span>,
                    ]}
                />
            </CommentCard>

            <CommentCard
                avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=3' alt='Leia Organa'/>}
                author='Leia Organa'
                datetime='30 minutes ago'
                content={
                    <div>
                        <p>CommentCard component supports nested comments and can build a complete comment system.</p>
                        <p>It also supports custom avatars, author information, timestamps and action items.</p>
                    </div>
                }
                actions={[
                    <span key='like'>
                        <LikeOutlined /> 12
                    </span>,
                    <span key='star'>
                        <StarOutlined /> Star
                    </span>,
                    <span key='reply'>
                        <MessageOutlined /> Reply
                    </span>,
                ]}
            />

            <CommentCard
                avatar='https://api.dicebear.com/7.x/miniavs/svg?seed=4'
                author='Chewbacca'
                datetime='just now'
                content='You can also use a string directly as the avatar URL, which is very convenient!'
            />
        </Space>
    );
};
