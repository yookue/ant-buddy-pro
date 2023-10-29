---
toc: content
---

## MenuTabs

參見 [在線例子](https://preview.pro.ant.design/account/settings)。`MenuTabs` 與 [Ant Design Tab](https://4x.ant.design/components/tabs/) 類似，但是集成了 [Ant Design Menu](https://4x.ant.design/components/menu/)。

### 導入組件

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
                label='菜單主題'
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
                            label: '常規設置',
                            content: (
                                <span>這裏是常規設置的內容</span>
                            )
                        },
                        {
                            key: 'advanced',
                            label: '高級設置',
                            content: (
                                <span>這裏是高級設置的內容</span>
                            )
                        },
                        {
                            key: 'danger',
                            label: '危險設置',
                            danger: true,
                            content: (
                                <span>這裏是危險設置的內容</span>
                            )
                        },
                        {
                            key: 'disabled',
                            label: '禁用設置',
                            disabled: true,
                            content: (
                                <span>這裏是禁用設置的內容</span>
                            )
                        }
                    ],
                    selectedKey: 'general',
                    theme: menuTheme,
                }}
                containerStyle={{
                    width: '100%',
                    height: '300px',
                    border: '1px solid #ddd',
                }}
            />
        </>
    );
}
```

### 組件屬性

#### MenuTabsProps

<API src="@/layout/MenuTabs/index.tsx" hideTitle></API>
