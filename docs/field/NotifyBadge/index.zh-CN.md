---
toc: content
---

## NotifyBadge

NotifyBadge，提供了一个带下拉框的徽标。

典型的应用场景是，显示一个小图标，下拉展示通知和任务列表。

### 导入组件

```jsx | pure
import {NotifyBadge} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Empty, Tag, message} from 'antd';
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
                        label: '通知',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6],
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
                        usePresetStyle: 'notice',
                        onClick: (ev, id) => {
                            message.info(`您点击了通知项 ${id}`);
                        },
                        onClear: () => {
                            message.info('您点击了清除通知按钮');
                        },
                        onMore: () => {
                            message.info('您点击了更多通知按钮');
                        }
                    },
                    {
                        key: 'task',
                        label: '任务',
                        labelBadgeProps: {
                            size: 'small',
                            offset: [6],
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
                        usePresetStyle: 'task',
                        onClick: (ev, id) => {
                            message.info(`您点击了任务项 ${id}`);
                        },
                        onClear: () => {
                            message.info('您点击了清除任务按钮');
                        },
                        onMore: () => {
                            message.info('您点击了更多任务按钮');
                        }
                    }
                ],
                onChange: (activeKey) => {
                    console.log('标签页切换到 ' + activeKey);
                }
            }}
            localeProps={{
                clearButton: '清除',
                moreButton: '更多',
            }}
        />
    );
}
```

### 组件属性

#### NotifyBadgeProps

<API src="@/field/NotifyBadge/index.tsx" hideTitle></API>
