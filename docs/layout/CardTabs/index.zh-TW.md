---
toc: content
---

## CardTabs

與 [Ant Design Tab](https://4x.ant.design/components/tabs/) 類似，采用了卡片樣式和邊框。

### 導入組件

```jsx | pure
import {CardTabs} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Radio} from 'antd';
import {CardTabs} from '@yookue/ant-buddy-pro';

export default () => {
    const [tabPosition, setTabPosition] = React.useState('top');

    return (
        <>
            <div>
                <span style={{paddingRight: '20px'}}>Tab 位置：</span>
                <Radio.Group
                    value={tabPosition}
                    defaultValue='top'
                    buttonStyle='solid'
                    onChange={event => {
                        setTabPosition(event.target?.value);
                    }}
                >
                    <Radio.Button value='top'>上</Radio.Button>
                    <Radio.Button value='bottom'>下</Radio.Button>
                    <Radio.Button value='left'>左</Radio.Button>
                    <Radio.Button value='right'>右</Radio.Button>
                </Radio.Group>
            </div>
            <br/><br/>
            <CardTabs
                tabPosition={tabPosition}
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
