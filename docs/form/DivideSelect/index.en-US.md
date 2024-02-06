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
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ProFormRadio.Group
                label='Display Selected Option'
                radioType='button'
                fieldProps={{
                    value: optionLabel,
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
                label='Use Preset Style'
                radioType='button'
                fieldProps={{
                    value: presetStyle,
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
                    options: [
                        {
                            label: 'Asia',
                            value: 'optGroup',
                            optionType: 'optGroup',
                            children: [
                                {label: 'China', value: '+86'},
                            ]
                        },
                        {
                            label: 'America',
                            value: 'optGroup',
                            optionType: 'optGroup',
                            children: [
                                {label: 'United States', value: '+1'},
                            ]
                        }
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
