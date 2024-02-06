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
                    label='装饰物位置'
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
                        {label: '无', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='折叠区位置'
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
                        {label: '无', value: 'false'},
                    ]}
                />
            </ProForm>
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
