---
toc: content
---

## FoldSection

与 [Ant Design](https://ant.design/) 的 [Collapse](https://4x.ant.design/components/collapse/) 组件类似，但只有一个标题栏和一个面板。

### Premise

<Alert type='info'>
  如果您使用默认的 <b><i>`headerOpenedDom`/`headerClosedDom`</i></b> 属性，要使用此组件，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：
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
                <span style={{paddingRight: '20px'}}>装饰物位置：</span>
                <Radio.Group
                    name='ornamentPos'
                    value={ornamentPos?.toString()}
                    defaultValue='before'
                    buttonStyle='solid'
                    onChange={event => {
                        setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                    }}
                >
                    <Radio.Button value='before'>前</Radio.Button>
                    <Radio.Button value='after'>后</Radio.Button>
                    <Radio.Button value='false'>无</Radio.Button>
                </Radio.Group>
            </div>
            <br/>
            <div>
                <span style={{paddingRight: '20px'}}>折叠区位置：</span>
                <Radio.Group
                    name='collapsePos'
                    value={collapsePos?.toString()}
                    defaultValue='after'
                    buttonStyle='solid'
                    onChange={event => {
                        setCollapsePos(event.target?.value === 'false' ? false : event.target?.value);
                    }}
                >
                    <Radio.Button value='before'>前</Radio.Button>
                    <Radio.Button value='after'>后</Radio.Button>
                    <Radio.Button value='false'>无</Radio.Button>
                </Radio.Group>
            </div>
            <Divider/>
            <FoldSection
                headerOrnament={<AppstoreOutlined/>}
                headerOrnamentPos={ornamentPos}
                headerContent='FoldSection 头部标题'
                headerCollapsePos={collapsePos}
                headerOpenedHint='折叠'
                headerClosedHint='展开'
                panelPlaceholder={<Empty/>}
            />
        </>
    );
}
```

### 组件属性

##### FoldSectionProps

<API src="@/layout/FoldSection/index.tsx" hideTitle></API>
