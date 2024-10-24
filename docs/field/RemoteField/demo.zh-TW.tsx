/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
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


import React from 'react';
import {Avatar, Button, Comment, Divider, Space, Tooltip} from 'antd';
import {FieldStringOutlined, RedoOutlined} from '@ant-design/icons';
import {RemoteField, ConsoleUtils, type RemoteFieldRef} from '@yookue/ant-buddy-pro';
import {RandomUtils} from '@yookue/ts-lang-utils';


export default () => {
    const remoteFieldRef = React.useRef<RemoteFieldRef>(null);
    const avatars = [
        'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    ];

    return (
        <>
            <Space size='middle'>
                <Button
                    icon={<FieldStringOutlined/>}
                    onClick={() => {
                        ConsoleUtils.logTimestamp(false, false, 'RemoteField', 'outcome = ' + JSON.stringify(remoteFieldRef.current?.getOutcome()));
                    }}
                >
                    打印日志
                </Button>
                <Button
                    icon={<RedoOutlined/>}
                    onClick={() => {
                        remoteFieldRef.current?.refreshOutcome();
                    }}
                >
                    刷新請求
                </Button>
            </Space>
            <Divider/>
            <RemoteField
                ref={remoteFieldRef}
                request={async () => {
                    return {
                        status: 200,
                        message: '獲取成功',
                        data: {
                            avatar: RandomUtils.randomElement(avatars),
                            author: 'David Hsing',
                            content: `壹只棕色敏捷的狐貍跳過了壹只懶洋洋的狗。${RandomUtils.randomString(6)}`,
                            timestamp: `2024-10-${RandomUtils.randomInteger(10, 32)} ${RandomUtils.randomInteger(10, 24)}:35:36`,
                        }
                    };
                }}
                render={(outcome: any) => {
                    if (outcome?.status !== 200) {
                        return undefined;
                    }
                    return (
                        <Comment
                            avatar={(
                                <Avatar src={outcome?.data?.avatar}/>
                            )}
                            author={outcome?.data?.author}
                            content={outcome?.data?.content}
                            datetime={(
                                <Tooltip title={outcome?.data?.timestamp}>
                                    <span>{RandomUtils.randomInteger(1, 60)} 分鐘前</span>
                                </Tooltip>
                            )}
                        />
                    );
                }}
            />
        </>
    );
}
