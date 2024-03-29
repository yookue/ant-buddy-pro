---
toc: content
---

## CardTabs

Similar to [Tabs](https://4x.ant.design/components/tabs/) of [Ant Design](https://ant.design/), but `CardTabs` with `card` style and borders.

### Import

```jsx | pure
import {CardTabs} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {CardTabs} from '@yookue/ant-buddy-pro';

export default () => {
    const [tabPos, setTabPos] = React.useState('top');
    const [tabBorder, setTabBorder] = React.useState(true);
    const [contentBorder, setContentBorder] = React.useState(true);
    const [inkBar, setInkBar] = React.useState(true);

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='Tab Position'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setTabPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Top', value: 'top'},
                        {label: 'Bottom', value: 'bottom'},
                        {label: 'Left', value: 'left'},
                        {label: 'Right', value: 'right'},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Tab Border'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: tabBorder,
                        }}
                        onChange={(value) => {
                            setTabBorder(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Content Border'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: contentBorder,
                        }}
                        onChange={(value) => {
                            setContentBorder(value ? true : false);
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
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <CardTabs
                tabPosition={tabPos}
                tabBorder={tabBorder}
                contentBorder={contentBorder}
                inkBar={inkBar}
                items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                    label: `Tab ${id}`,
                    key: id,
                    children: (
                        <>
                            <p>Content of Tab Pane {id}</p>
                            <p>Content of Tab Pane {id}</p>
                            <p>Content of Tab Pane {id}</p>
                        </>
                    ),
                }})}
            />
        </>
    );
}
```

### Properties

#### CardTabsProps

<API src="@/layout/CardTabs/index.tsx" hideTitle></API>
