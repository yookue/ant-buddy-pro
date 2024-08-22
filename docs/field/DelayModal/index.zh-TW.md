---
toc: content
---

## DelayModal

DelayModal 用於在超時後顯示一個模態對話框，如果沒有其它事件來阻止（延遲）它的話。

典型的應用場景是，當用戶長時間不操作後，顯示對話框來提示用戶需要重新登錄。

### 導入組件

```jsx | pure
import {DelayModal} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {DelayModal} from '@yookue/ant-buddy-pro';

export default () => {
    const [actionType, setActionType] = React.useState('info');
    const [onceOnly, setOnceOnly] = React.useState(true);
    const [onceShown, setOnceShown] = React.useState(false);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='動作類型'
                    radioType='button'
                    fieldProps={{
                        value: actionType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setActionType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '確認', value: 'confirm'},
                        {label: '信息', value: 'info'},
                        {label: '警告', value: 'warn'},
                        {label: '成功', value: 'success'},
                        {label: '錯誤', value: 'error'},
                        {label: '模態', value: 'modal'},
                    ]}
                />
                <ProFormSwitch
                    label='僅彈出一次'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: onceOnly,
                    }}
                    onChange={(value) => {
                        setOnceOnly(value ? true : false);
                    }}
                />
            </ProForm>
            <Divider/>
            <span>
                空閑（鼠標鍵盤無動作）10 秒鐘後彈出。{(onceOnly && onceShown) ? '已彈出' : '請稍候'}。
            </span>
            <DelayModal
                actionType={actionType}
                onceOnly={onceOnly}
                timeoutMillis={1000 * 10}
                modalProps={{
                    title: '搭載 modalProps',
                    children: '咦，這是一條來自 DelayModal 的消息',
                    closable: false,
                    maskClosable: false,
                    okText: '確定',
                    cancelText: '取消',
                }}
                modalFunProps={{
                    title: '搭載 modalFunProps',
                    content: '咦，這是一條來自 DelayModal 的消息',
                    closable: false,
                    okText: '確定',
                    cancelText: '取消',
                    preprocess: true,
                }}
                onOpen={() => setOnceShown(true)}
            />
        </>
    );
}
```

### 組件屬性

#### DelayModalProps

<API src="@/field/DelayModal/index.tsx" hideTitle></API>
