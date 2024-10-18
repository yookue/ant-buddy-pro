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
import {Empty, Tag, message as messageApi} from 'antd';
import {NotifyBadge, ConsoleUtils} from '@yookue/ant-buddy-pro';


export default () => {
    return (
        <NotifyBadge
            badgeProps={{
                dot: true,
            }}
            dropdownProps={{
                arrow: true,
                overlayStyle: {
                    minWidth: '320px',
                }
            }}
            tabsProps={{
                tabPosition: 'top',
                items: [
                    {
                        key: 'notice',
                        label: '通知',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6, 6],
                        },
                        listProps: {
                            dataSource: [
                                {
                                    id: '001',
                                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                                    title: '您收到了 12 份報告',
                                    timestamp: '2024-01-01',
                                },
                                {
                                    id: '002',
                                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                                    title: '您推薦的人員已經通過了面試',
                                    description: '此通知是已讀',
                                    timestamp: '2024-01-02',
                                    read: true,
                                },
                            ],
                        },
                        listPlaceholder: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>,
                        showClear: true,
                        showMore: true,
                        presetStyle: 'notice',
                        onClick: (_ev, id) => {
                            messageApi.info(`您點擊了通知項 ${id}`);
                        },
                        onClear: () => {
                            messageApi.info('您點擊了清除通知按鈕');
                        },
                        onMore: () => {
                            messageApi.info('您點擊了更多通知按鈕');
                        }
                    },
                    {
                        key: 'task',
                        label: '任務',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6, 6],
                        },
                        listProps: {
                            dataSource: [
                                {
                                    id: '001',
                                    title: '開始單元測試',
                                    description: '您應該在 3 天內啟動此任務',
                                    extra: <Tag color='red'>未開始</Tag>,
                                    timestamp: '2024-02-01',
                                },
                                {
                                    id: '002',
                                    title: '緊急缺陷修復',
                                    description: '此任務項已完成',
                                    extra: <Tag color='green'>已完成</Tag>,
                                    timestamp: '2024-02-02',
                                    read: true,
                                },
                            ],
                        },
                        listPlaceholder: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>,
                        showClear: true,
                        showMore: true,
                        presetStyle: 'task',
                        onClick: (_ev, id) => {
                            messageApi.info(`您點擊了通知任務項 ${id}`);
                        },
                        onClear: () => {
                            messageApi.info('您點擊了清除任務按鈕');
                        },
                        onMore: () => {
                            messageApi.info('您點擊了更多任務按鈕');
                        }
                    }
                ],
                onChange: (activeKey) => {
                    ConsoleUtils.logTimestamp(false, false, 'NotifyBadge', '標籤頁切換到 ' + activeKey);
                }
            }}
            localeProps={{
                clear: '清除',
                more: '更多',
            }}
        />
    );
}
