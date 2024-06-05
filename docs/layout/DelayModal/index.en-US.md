---
toc: content
---

## DelayModal

DelayModal component, can display a modal dialog after specified timeout, when there aren't any events to prevent it.

The typical scenario is, displaying a dialog to notice user that user hasn't operates anything for a several time, needs to re-login.

### Import

```jsx | pure
import {DelayModal} from '@yookue/ant-buddy-pro';
```

### Example

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
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='Action Type'
                    radioType='button'
                    fieldProps={{
                        value: actionType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setActionType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Confirm', value: 'confirm'},
                        {label: 'Info', value: 'info'},
                        {label: 'Warn', value: 'warn'},
                        {label: 'Success', value: 'success'},
                        {label: 'Error', value: 'error'},
                        {label: 'Modal', value: 'modal'},
                    ]}
                />
                <ProFormSwitch
                    label='Once Only'
                    checkedChildren='True'
                    unCheckedChildren='False'
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
                Popup a modal dialog after idle 10 seconds. {(onceOnly && onceShown) ? 'Already shown' : 'Please wait'}.
            </span>
            <DelayModal
                actionType={actionType}
                onceOnly={onceOnly}
                timeoutMillis={1000 * 10}
                modalProps={{
                    title: 'With modalProps',
                    children: 'Oops! This is a message from DelayModal',
                    closable: false,
                    maskClosable: false,
                    okText: 'OK',
                    cancelText: 'Cancel',
                }}
                modalFunProps={{
                    title: 'With modalFunProps',
                    content: 'Oops! This is a message from DelayModal',
                    closable: false,
                    okText: 'OK',
                    cancelText: 'Cancel',
                    preprocess: true,
                }}
                onOpen={() => setOnceShown(true)}
            />
        </>
    );
}
```

### Properties

#### DelayModalProps

<API src="@/layout/DelayModal/index.tsx" hideTitle></API>
