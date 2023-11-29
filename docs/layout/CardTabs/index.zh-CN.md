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
import {Radio, Divider} from 'antd';
import {CardTabs} from '@yookue/ant-buddy-pro';

export default () => {
    const [tabPos, setTabPos] = React.useState('top');

    return (
        <>
            <div>
                <span style={{paddingRight: '20px'}}>Tab 位置：</span>
                <Radio.Group
                    value={tabPos}
                    defaultValue='top'
                    buttonStyle='solid'
                    onChange={event => {
                        setTabPos(event.target?.value);
                    }}
                >
                    <Radio.Button value='top'>上</Radio.Button>
                    <Radio.Button value='bottom'>下</Radio.Button>
                    <Radio.Button value='left'>左</Radio.Button>
                    <Radio.Button value='right'>右</Radio.Button>
                </Radio.Group>
            </div>
            <Divider/>
            <CardTabs
                tabPosition={tabPos}
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
