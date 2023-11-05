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
import {ProFormSwitch} from '@ant-design/pro-form';
import {MenuTabs} from '@yookue/ant-buddy-pro';

export default () => {
    const [menuTheme, setMenuTheme] = React.useState('light');

    return (
        <>
            <ProFormSwitch
                label='菜单主题'
                checkedChildren='暗夜'
                unCheckedChildren='明亮'
                fieldProps={{
                    checked: menuTheme === 'dark',
                    defaultChecked: false,
                }}
                onChange={(value) => {
                    setMenuTheme(value ? 'dark' : 'light');
                }}
            />
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
                    selectedKey: 'general',
                    theme: menuTheme,
                }}
                containerStyle={{
                    width: '100%',
                    height: '300px',
                }}
            />
        </>
    );
}
```

### 组件属性

#### MenuTabsProps

<API src="@/layout/MenuTabs/index.tsx" hideTitle></API>
