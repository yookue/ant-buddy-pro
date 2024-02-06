---
toc: content
---

## CardTabs

与 [Ant Design](https://ant.design/) 的 [Tabs](https://4x.ant.design/components/tabs/) 组件类似，但 `CardTabs` 采用了卡片样式和边框。

### 导入组件

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
                <ProFormSwitch
                    label='活跃指示条'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: inkBar,
                    }}
                    onChange={(value) => {
                        setInkBar(value ? true : false);
                    }}
                />
            </ProForm>
            <Divider/>
            <CardTabs
                tabPosition={tabPos}
                inkBar={inkBar}
                items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                    label: `Tab ${id}`,
                    key: id,
                    children: (
                        <>
                            <p>Tab 面板 {id} 的内容</p>
                            <p>Tab 面板 {id} 的内容</p>
                            <p>Tab 面板 {id} 的内容</p>
                        </>
                    ),
                }})}
            />
        </>
    );
}
```

### 组件属性

#### CardTabsProps

<API src="@/layout/CardTabs/index.tsx" hideTitle></API>
