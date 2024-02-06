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
import {Empty, Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {FoldSection} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');
    const [collapsePos, setCollapsePos] = React.useState('after');

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='裝飾物位置'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '無', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='摺叠區位置'
                    radioType='button'
                    fieldProps={{
                        value: collapsePos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCollapsePos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '無', value: 'false'},
                    ]}
                />
            </ProForm>
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
