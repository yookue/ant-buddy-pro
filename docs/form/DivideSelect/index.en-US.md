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
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {DivideSelect} from '@yookue/ant-buddy-pro';

export default () => {
    const [optionLabel, setOptionLabel] = React.useState('label');
    const [presetStyle, setPresetStyle] = React.useState('before-prior');

    return (
        <ProForm layout='horizontal' submitter={false} readonly={true}>
            <ProFormRadio.Group
                name='optionLabel'
                label='Display Selected Option'
                radioType='button'
                fieldProps={{
                    defaultValue: 'label',
                    buttonStyle: 'solid',
                    onChange: (event) => {
                        setOptionLabel(event.target?.value);
                    }
                }}
                options={[
                    {label: 'Label', value: 'label'},
                    {label: 'Value', value: 'value'},
                ]}
            />
            <ProFormRadio.Group
                name='presetStyle'
                label='Use Preset Style'
                radioType='button'
                fieldProps={{
                    defaultValue: 'before-prior',
                    buttonStyle: 'solid',
                    onChange: (event) => {
                        setPresetStyle(event.target?.value);
                    }
                }}
                options={[
                    {label: 'Before-Prior', value: 'before-prior'},
                    {label: '90-10', value: '90-10'},
                    {label: '80-20', value: '80-20'},
                    {label: '70-30', value: '70-30'},
                ]}
            />
            <Divider/>
            <DivideSelect
                name='foo'
                placeholder='Please select this field'
                fieldProps={{
                    optionLabelProp: optionLabel,
                    value: '+86',
                    options: [
                        {label: 'China', value: '+86'},
                        {label: 'United States', value: '+1'},
                    ]
                }}
                usePresetStyle={presetStyle}
            />
        </ProForm>
    );
}
```

### Properties

#### DivideSelectProps

<API src="@/form/DivideSelect/index.tsx" hideTitle></API>
