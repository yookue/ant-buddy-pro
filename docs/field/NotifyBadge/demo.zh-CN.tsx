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
                                    title: '您收到了 12 份报告',
                                    timestamp: '2024-01-01',
                                },
                                {
                                    id: '002',
                                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                                    title: '您推荐的人员已经通过了面试',
                                    description: '此通知是已读',
                                    timestamp: '2024-01-02',
                                    read: true,
                                },
                            ],
                        },
                        listPlaceholder: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='无数据'/>,
                        showClear: true,
                        showMore: true,
                        presetStyle: 'notice',
                        onClick: (_ev, id) => {
                            messageApi.info(`您点击了通知项 ${id}`);
                        },
                        onClear: () => {
                            messageApi.info('您点击了清除通知按钮');
                        },
                        onMore: () => {
                            messageApi.info('您点击了更多通知按钮');
                        }
                    },
                    {
                        key: 'task',
                        label: '任务',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6, 6],
                        },
                        listProps: {
                            dataSource: [
                                {
                                    id: '001',
                                    title: '开始单元测试',
                                    description: '您应该在 3 天内启动此任务',
                                    extra: <Tag color='red'>未开始</Tag>,
                                    timestamp: '2024-02-01',
                                },
                                {
                                    id: '002',
                                    title: '紧急缺陷修复',
                                    description: '此任务项已完成',
                                    extra: <Tag color='green'>已完成</Tag>,
                                    timestamp: '2024-02-02',
                                    read: true,
                                },
                            ],
                        },
                        listPlaceholder: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='无数据'/>,
                        showClear: true,
                        showMore: true,
                        presetStyle: 'task',
                        onClick: (_ev, id) => {
                            messageApi.info(`您点击了任务项 ${id}`);
                        },
                        onClear: () => {
                            messageApi.info('您点击了清除任务按钮');
                        },
                        onMore: () => {
                            messageApi.info('您点击了更多任务按钮');
                        }
                    }
                ],
                onChange: (activeKey) => {
                    ConsoleUtils.logTimestamp(false, false, 'NotifyBadge', '标签页切换到 ' + activeKey);
                }
            }}
            localeProps={{
                clear: '清除',
                more: '更多',
            }}
        />
    );
}
