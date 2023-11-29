---
toc: content
---

## FoldSection

與 [Ant Design](https://ant.design/) 的 [Collapse](https://4x.ant.design/components/collapse/) 組件類似，但只有一個標題欄和一個面板。

### Premise

<Alert type='info'>
  如果您使用默認的 <b><i>`headerOpenedDom`/`headerClosedDom`</i></b> 屬性，要使用此組件，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
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
                <span style={{paddingRight: '20px'}}>裝飾物位置：</span>
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
                    <Radio.Button value='false'>無</Radio.Button>
                </Radio.Group>
            </div>
            <br/>
            <div>
                <span style={{paddingRight: '20px'}}>摺叠區位置：</span>
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
                    <Radio.Button value='false'>無</Radio.Button>
                </Radio.Group>
            </div>
            <Divider/>
            <FoldSection
                headerOrnament={<AppstoreOutlined/>}
                headerOrnamentPos={ornamentPos}
                headerContent='FoldSection 頭部標題'
                headerCollapsePos={collapsePos}
                headerOpenedHint='摺叠'
                headerClosedHint='展開'
                panelPlaceholder={<Empty/>}
            />
        </>
    );
}
```

### 組件屬性

##### FoldSectionProps

<API src="@/layout/FoldSection/index.tsx" hideTitle></API>
