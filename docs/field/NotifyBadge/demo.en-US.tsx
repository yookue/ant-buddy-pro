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
                        label: 'Notice',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6, 6],
                        },
                        listProps: {
                            dataSource: [
                                {
                                    id: '001',
                                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                                    title: 'You\'ve received 12 reports',
                                    timestamp: '2024-01-01',
                                },
                                {
                                    id: '002',
                                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                                    title: 'The person who you recommended has passed the interview',
                                    description: 'This notice has been read already',
                                    timestamp: '2024-01-02',
                                    read: true,
                                },
                            ],
                        },
                        listPlaceholder: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No data'/>,
                        showClear: true,
                        showMore: true,
                        presetStyle: 'notice',
                        onClick: (_ev, id) => {
                            messageApi.info(`You've clicked the notice ${id} item`);
                        },
                        onClear: () => {
                            messageApi.info(`You've clicked the clear notices button`);
                        },
                        onMore: () => {
                            messageApi.info(`You've clicked the more notices button`);
                        }
                    },
                    {
                        key: 'task',
                        label: 'Task',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6, 6],
                        },
                        listProps: {
                            dataSource: [
                                {
                                    id: '001',
                                    title: 'Start unit test',
                                    description: 'You should start it in the next 3 days',
                                    extra: <Tag color='red'>Not started</Tag>,
                                    timestamp: '2024-02-01',
                                },
                                {
                                    id: '002',
                                    title: 'Emergent bug fix',
                                    description: 'This task has been done already',
                                    extra: <Tag color='green'>Done</Tag>,
                                    timestamp: '2024-02-02',
                                    read: true,
                                },
                            ],
                        },
                        listPlaceholder: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No data'/>,
                        showClear: true,
                        showMore: true,
                        presetStyle: 'task',
                        onClick: (_ev, id) => {
                            messageApi.info(`You've clicked the task ${id} item`);
                        },
                        onClear: () => {
                            messageApi.info(`You've clicked the clear tasks button`);
                        },
                        onMore: () => {
                            messageApi.info(`You've clicked the more tasks button`);
                        }
                    }
                ],
                onChange: (activeKey) => {
                    ConsoleUtils.logTimestamp(false, false, 'NotifyBadge', 'Tabs switched to ' + activeKey);
                }
            }}
            localeProps={{
                clear: 'Clear',
                more: 'More',
            }}
        />
    );
}
