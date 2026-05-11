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


import {Avatar, Space} from 'antd';
import {LikeOutlined, MessageOutlined, StarOutlined} from '@ant-design/icons';
import {CommentCard} from '@unikue/ant-buddy-pro';


export default () => {
    return (
        <Space orientation='vertical' style={{width: '100%'}} size='large'>
            <CommentCard
                avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' alt='Han Solo'/>}
                author='Han Solo'
                datetime='2小時前'
                content='Ant Design 組件庫非常棒，使用起來非常方便！'
                actions={[
                    <span key='like'>
                        <LikeOutlined/> 點讚
                    </span>,
                    <span key='reply'>
                        <MessageOutlined/> 回覆
                    </span>,
                ]}
            >
                <CommentCard
                    avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' alt='Luke Skywalker'/>}
                    author='Luke Skywalker'
                    datetime='1小時前'
                    content='同意！特別是 ProComponents 系列，大大提高了開發效率。'
                    actions={[
                        <span key='like'>
                            <LikeOutlined/> 點讚
                        </span>,
                        <span key='reply'>
                            <MessageOutlined/> 回覆
                        </span>,
                    ]}
                />
            </CommentCard>

            <CommentCard
                avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=3' alt='Leia Organa'/>}
                author='Leia Organa'
                datetime='30分鐘前'
                content={
                    <div>
                        <p>CommentCard 組件支持嵌套評論，可以構建完整的評論系統。</p>
                        <p>還支持自定義頭像、作者信息、時間戳和操作項。</p>
                    </div>
                }
                actions={[
                    <span key='like'>
                        <LikeOutlined/> 12
                    </span>,
                    <span key='star'>
                        <StarOutlined/> 收藏
                    </span>,
                    <span key='reply'>
                        <MessageOutlined/> 回覆
                    </span>,
                ]}
            />

            <CommentCard
                avatar='https://api.dicebear.com/7.x/miniavs/svg?seed=4'
                author='Chewbacca'
                datetime='剛剛'
                content='也可以直接使用字符串作為頭像 URL，非常方便！'
            />
        </Space>
    );
};
