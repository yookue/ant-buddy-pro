---
toc: content
---

## NotifyBadge

NotifyBadge，提供了一個帶下拉框的徽標。

典型的應用場景是，顯示一個小圖標，下拉展示通知和任務列表。

### 導入組件

```jsx | pure
import {NotifyBadge} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
                        onClick: (ev, id) => {
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
                            offset: [6],
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
                        onClick: (ev, id) => {
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
                    console.log('標籤頁切換到 ' + activeKey);
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

### 組件屬性

#### NotifyBadgeProps

<API src="@/field/NotifyBadge/index.tsx" hideTitle></API>
