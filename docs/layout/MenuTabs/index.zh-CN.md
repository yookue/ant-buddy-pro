---
toc: content
---

## MenuTabs

参见 [在线例子](https://preview.pro.ant.design/account/settings)。`MenuTabs` 与 [Ant Design Tab](https://4x.ant.design/components/tabs/) 类似，但是集成了 [Ant Design Menu](https://4x.ant.design/components/menu/)。

### 导入组件

```jsx | pure
import {MenuTabs} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
            <ProForm layout='horizontal' submitter={false}>
                <ProForm.Group>
                    <ProFormSwitch
                        label='菜单主题'
                        checkedChildren='暗夜'
                        unCheckedChildren='明亮'
                        fieldProps={{
                            checked: menuTheme === 'dark',
                        }}
                        onChange={(value) => {
                            setMenuTheme(value ? 'dark' : 'light');
                        }}
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
                    <ProFormSwitch
                        label='选中项加粗'
                        checkedChildren='是'
                        unCheckedChildren='否'
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
                            label: '常规设置',
                            content: (
                                <span>这里是常规设置的内容</span>
                            )
                        },
                        {
                            key: 'advanced',
                            label: '高级设置',
                            content: (
                                <span>这里是高级设置的内容</span>
                            )
                        },
                        {
                            key: 'danger',
                            label: '危险设置',
                            danger: true,
                            content: (
                                <span>这里是危险设置的内容</span>
                            )
                        },
                        {
                            key: 'disabled',
                            label: '禁用设置',
                            disabled: true,
                            content: (
                                <span>这里是禁用设置的内容</span>
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

### 组件属性

#### MenuTabsProps

<API src="@/layout/MenuTabs/index.tsx" hideTitle></API>
