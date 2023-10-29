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
import {ProFormSwitch} from '@ant-design/pro-form';
import {MenuTabs} from '@yookue/ant-buddy-pro';

export default () => {
    const [menuTheme, setMenuTheme] = React.useState('light');

    return (
        <>
            <ProFormSwitch
                label='Menu Theme'
                checkedChildren='Dark'
                unCheckedChildren='Light'
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

### Properties

#### MenuTabsProps

<API src="@/layout/MenuTabs/index.tsx" hideTitle></API>
