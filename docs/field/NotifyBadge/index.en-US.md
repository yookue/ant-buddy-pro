---
toc: content
---

## NotifyBadge

NotifyBadge, provides a badge with dropdown notify list.

The typical scenario is, displaying a small icon with a dropdown which lists notices and tasks.

### Import

```jsx | pure
import {NotifyBadge} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Empty, Tag, message as messageApi} from 'antd';
import {NotifyBadge} from '@yookue/ant-buddy-pro';

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
                            offset: [6],
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
                        onClick: (ev, id) => {
                            messageApi.info(`You\'ve clicked the notice ${id} item`);
                        },
                        onClear: () => {
                            messageApi.info('You\'ve clicked the clear notices button');
                        },
                        onMore: () => {
                            messageApi.info('You\'ve clicked the more notices button');
                        }
                    },
                    {
                        key: 'task',
                        label: 'Task',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6],
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
                        onClick: (ev, id) => {
                            messageApi.info(`You\'ve clicked the task ${id} item`);
                        },
                        onClear: () => {
                            messageApi.info('You\'ve clicked the clear tasks button');
                        },
                        onMore: () => {
                            messageApi.info('You\'ve clicked the more tasks button');
                        }
                    }
                ],
                onChange: (activeKey) => {
                    console.log('Tabs switched to ' + activeKey);
                }
            }}
            localeProps={{
                clearButton: 'Clear',
                moreButton: 'More',
            }}
        />
    );
}
```

### Properties

#### NotifyBadgeProps

<API src="@/field/NotifyBadge/index.tsx" hideTitle></API>
