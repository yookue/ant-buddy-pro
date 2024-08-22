---
toc: content
---

## DelayModal

DelayModal 用于在超时后显示一个模态对话框，如果没有其它事件来阻止（延迟）它的话。

典型的应用场景是，当用户长时间不操作后，显示对话框来提示用户需要重新登录。

### 导入组件

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
                    label='动作类型'
                    radioType='button'
                    fieldProps={{
                        value: actionType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setActionType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '确认', value: 'confirm'},
                        {label: '信息', value: 'info'},
                        {label: '警告', value: 'warn'},
                        {label: '成功', value: 'success'},
                        {label: '错误', value: 'error'},
                        {label: '模态', value: 'modal'},
                    ]}
                />
                <ProFormSwitch
                    label='仅弹出一次'
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
                空闲（鼠标键盘无动作）10 秒钟后弹出。{(onceOnly && onceShown) ? '已弹出' : '请稍候'}。
            </span>
            <DelayModal
                actionType={actionType}
                onceOnly={onceOnly}
                timeoutMillis={1000 * 10}
                modalProps={{
                    title: '搭载 modalProps',
                    children: '咦，这是一条来自 DelayModal 的消息',
                    closable: false,
                    maskClosable: false,
                    okText: '确定',
                    cancelText: '取消',
                }}
                modalFunProps={{
                    title: '搭载 modalFunProps',
                    content: '咦，这是一条来自 DelayModal 的消息',
                    closable: false,
                    okText: '确定',
                    cancelText: '取消',
                    preprocess: true,
                }}
                onOpen={() => setOnceShown(true)}
            />
        </>
    );
}
```

### 组件属性

#### DelayModalProps

<API src="@/field/DelayModal/index.tsx" hideTitle></API>
