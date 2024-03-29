---
toc: content
---

## CardTabs

與 [Ant Design](https://ant.design/) 的 [Tabs](https://4x.ant.design/components/tabs/) 組件類似，但 `CardTabs` 采用了卡片樣式和邊框。

### 導入組件

```jsx | pure
import {CardTabs} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
                    label='Tab 位置'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setTabPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '上', value: 'top'},
                        {label: '下', value: 'bottom'},
                        {label: '左', value: 'left'},
                        {label: '右', value: 'right'},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='標簽邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tabBorder,
                        }}
                        onChange={(value) => {
                            setTabBorder(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='内容區邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: contentBorder,
                        }}
                        onChange={(value) => {
                            setContentBorder(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='活躍指示條'
                        checkedChildren='是'
                        unCheckedChildren='否'
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
                            <p>Tab 面板 {id} 的內容</p>
                            <p>Tab 面板 {id} 的內容</p>
                            <p>Tab 面板 {id} 的內容</p>
                        </>
                    ),
                }})}
            />
        </>
    );
}
```

### 組件屬性

#### CardTabsProps

<API src="@/layout/CardTabs/index.tsx" hideTitle></API>
