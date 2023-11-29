---
toc: content
---

## DivideSelect

DivideSelect, provides a capability that displaying the label of option item, into two parts.

### 导入组件

```jsx | pure
import {DivideSelect} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Radio, Divider} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {DivideSelect} from '@yookue/ant-buddy-pro';

export default () => {
    const [optionLabel, setOptionLabel] = React.useState('label');
    const [originLabel, setOriginLabel] = React.useState(false);

    return (
        <ProForm
            submitter={{
                render: (props, doms) => {
                    return [];
                }
            }}
        >
            <div>
                <span style={{paddingRight: '20px'}}>显示选中项：</span>
                <Radio.Group
                    name='optionLabel'
                    value={optionLabel}
                    defaultValue='label'
                    buttonStyle='solid'
                    onChange={event => {
                        setOptionLabel(event.target?.value);
                    }}
                >
                    <Radio.Button value='label'>标签</Radio.Button>
                    <Radio.Button value='value'>值</Radio.Button>
                </Radio.Group>
                <br/><br/>
                <span style={{paddingRight: '20px'}}>显示原始标签值：</span>
                <Radio.Group
                    name='originLabel'
                    value={originLabel.toString()}
                    defaultValue='false'
                    buttonStyle='solid'
                    onChange={event => {
                        setOriginLabel(event.target?.value === 'true');
                    }}
                >
                    <Radio.Button value='true'>是</Radio.Button>
                    <Radio.Button value='false'>否</Radio.Button>
                </Radio.Group>
            </div>
            <Divider/>
            <DivideSelect
                name='foo'
                placeholder='请选择此项'
                fieldProps={{
                    optionLabelProp: optionLabel,
                    options: [
                        {label: '中国', value: '+86'},
                        {label: '美国', value: '+1'},
                    ]
                }}
                optionBeforeContent='label'
                optionAfterContent='value'
                optionAfterStyle={{
                    textAlign: 'right',
                }}
                selectOriginLabel={originLabel}
                usePresetStyle='before-prior'
            />
        </ProForm>
    );
}
```

### 组件属性

#### DivideSelectProps

<API src="@/form/DivideSelect/index.tsx" hideTitle></API>
