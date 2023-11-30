---
toc: content
---

## DivideSelect

DivideSelect, provides a capability that displaying the label of option item, into two parts.

### Import

```jsx | pure
import {DivideSelect} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Radio, Divider} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {DivideSelect} from '@yookue/ant-buddy-pro';

export default () => {
    const [optionLabel, setOptionLabel] = React.useState('label');
    const [originLabel, setOriginLabel] = React.useState(false);

    return (
        <ProForm submitter={false}>
            <div>
                <span style={{paddingRight: '20px'}}>Display Selected Option:</span>
                <Radio.Group
                    name='optionLabel'
                    value={optionLabel}
                    defaultValue='label'
                    buttonStyle='solid'
                    onChange={event => {
                        setOptionLabel(event.target?.value);
                    }}
                >
                    <Radio.Button value='label'>Label</Radio.Button>
                    <Radio.Button value='value'>value</Radio.Button>
                </Radio.Group>
                <br/><br/>
                <span style={{paddingRight: '20px'}}>Display Original Label:</span>
                <Radio.Group
                    name='originLabel'
                    value={originLabel.toString()}
                    defaultValue='false'
                    buttonStyle='solid'
                    onChange={event => {
                        setOriginLabel(event.target?.value === 'true');
                    }}
                >
                    <Radio.Button value='true'>True</Radio.Button>
                    <Radio.Button value='false'>False</Radio.Button>
                </Radio.Group>
            </div>
            <Divider/>
            <DivideSelect
                name='foo'
                placeholder='Please select this field'
                fieldProps={{
                    optionLabelProp: optionLabel,
                    options: [
                        {label: 'China', value: '+86'},
                        {label: 'United States', value: '+1'},
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

### Properties

#### DivideSelectProps

<API src="@/form/DivideSelect/index.tsx" hideTitle></API>
