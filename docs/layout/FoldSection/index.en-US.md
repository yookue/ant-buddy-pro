---
toc: content
---

## FoldSection

Similar to [Collapse](https://4x.ant.design/components/collapse/) of [Ant Design](https://ant.design/), with only one header and one panel.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default <b><i>`headerOpenedDom`/`headerClosedDom`</i></b> attribute:
</Alert>

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {FoldSection} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Empty, Radio, Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {FoldSection} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');
    const [collapsePos, setCollapsePos] = React.useState('after');

    return (
        <>
            <div>
                <span style={{paddingRight: '20px'}}>Ornament Position:</span>
                <Radio.Group
                    name='ornamentPos'
                    value={ornamentPos?.toString()}
                    defaultValue='before'
                    buttonStyle='solid'
                    onChange={event => {
                        setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                    }}
                >
                    <Radio.Button value='before'>Before</Radio.Button>
                    <Radio.Button value='after'>After</Radio.Button>
                    <Radio.Button value='false'>False</Radio.Button>
                </Radio.Group>
            </div>
            <br/>
            <div>
                <span style={{paddingRight: '20px'}}>Collapse Position:</span>
                <Radio.Group
                    name='collapsePos'
                    value={collapsePos?.toString()}
                    defaultValue='after'
                    buttonStyle='solid'
                    onChange={event => {
                        setCollapsePos(event.target?.value === 'false' ? false : event.target?.value);
                    }}
                >
                    <Radio.Button value='before'>Before</Radio.Button>
                    <Radio.Button value='after'>After</Radio.Button>
                    <Radio.Button value='false'>False</Radio.Button>
                </Radio.Group>
            </div>
            <Divider/>
            <FoldSection
                headerOrnament={<AppstoreOutlined/>}
                headerOrnamentPos={ornamentPos}
                headerContent='FoldSection header caption'
                headerCollapsePos={collapsePos}
                headerOpenedHint='Collapse'
                headerClosedHint='Expend'
                panelPlaceholder={<Empty/>}
            />
        </>
    );
}
```

### Properties

##### FoldSectionProps

<API src="@/layout/FoldSection/index.tsx" hideTitle></API>
