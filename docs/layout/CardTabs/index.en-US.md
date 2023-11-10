---
toc: content
---

## CardTabs

Similar to [Tabs](https://4x.ant.design/components/tabs/) of [Ant Design](https://ant.design/), with `card` style and borders.

### Import

```jsx | pure
import {CardTabs} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Radio} from 'antd';
import {CardTabs} from '@yookue/ant-buddy-pro';

export default () => {
    const [tabPosition, setTabPosition] = React.useState('top');

    return (
        <>
            <div>
                <span style={{paddingRight: '20px'}}>Tab Position:</span>
                <Radio.Group
                    value={tabPosition}
                    defaultValue='top'
                    buttonStyle='solid'
                    onChange={event => {
                        setTabPosition(event.target?.value);
                    }}
                >
                    <Radio.Button value='top'>Top</Radio.Button>
                    <Radio.Button value='bottom'>Bottom</Radio.Button>
                    <Radio.Button value='left'>Left</Radio.Button>
                    <Radio.Button value='right'>Right</Radio.Button>
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
