---
toc: content
---

## MenuTabs

Just like [the live example](https://preview.pro.ant.design/account/settings), `MenuTabs` is a component that similar to [Ant Design Tab](https://4x.ant.design/components/tabs/), integrated with [Ant Design Menu](https://4x.ant.design/components/menu/).

### Import

```jsx | pure
import {MenuTabs} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {MenuTabs} from '@yookue/ant-buddy-pro';

export default () => {
    const [menuTheme, setMenuTheme] = React.useState('light');
    const [inkBar, setInkBar] = React.useState(true);
    const [selectionBold, setSelectionBold] = React.useState(true);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProForm.Group>
                    <ProFormSwitch
                        label='Menu Theme'
                        checkedChildren='Dark'
                        unCheckedChildren='Light'
                        fieldProps={{
                            checked: menuTheme === 'dark',
                        }}
                        onChange={(value) => {
                            setMenuTheme(value ? 'dark' : 'light');
                        }}
                    />
                    <ProFormSwitch
                        label='Ink Bar'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: inkBar,
                        }}
                        onChange={(value) => {
                            setInkBar(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Selection Bold'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: selectionBold,
                        }}
                        onChange={(value) => {
                            setSelectionBold(value ? true : false);
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <MenuTabs
                menuProps={{
                    items: [
                        {
                            key: 'general',
                            label: 'General Settings',
                            content: (
                                <span>Here is the general content</span>
                            )
                        },
                        {
                            key: 'advanced',
                            label: 'Advanced Settings',
                            content: (
                                <span>Here is the advanced content</span>
                            )
                        },
                        {
                            key: 'danger',
                            label: 'Danger Settings',
                            danger: true,
                            content: (
                                <span>Here is the danger content</span>
                            )
                        },
                        {
                            key: 'disabled',
                            label: 'Disabled Settings',
                            disabled: true,
                            content: (
                                <span>Here is the disabled content</span>
                            )
                        }
                    ],
                    defaultActiveKey: 'general',
                    theme: menuTheme,
                }}
                containerStyle={{
                    minHeight: '300px',
                }}
                entryInkBar={inkBar}
                entrySelectionBold={selectionBold}
            />
        </>
    );
}
```

### Properties

#### MenuTabsProps

<API src="@/layout/MenuTabs/index.tsx" hideTitle></API>
