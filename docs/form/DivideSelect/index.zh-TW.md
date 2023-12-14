---
toc: content
---

## DivideSelect

DivideSelect, provides a capability that displaying the label of option item, into two parts.

### 導入組件

```jsx | pure
import {DivideSelect} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {DivideSelect} from '@yookue/ant-buddy-pro';

export default () => {
    const [optionLabel, setOptionLabel] = React.useState('label');
    const [presetStyle, setPresetStyle] = React.useState('before-prior');

    return (
        <ProForm layout='horizontal' submitter={false}>
            <ProFormRadio.Group
                name='optionLabel'
                label='顯示選中項'
                radioType='button'
                fieldProps={{
                    defaultValue: 'label',
                    buttonStyle: 'solid',
                    onChange: (event) => {
                        setOptionLabel(event.target?.value);
                    }
                }}
                options={[
                    {label: '標簽', value: 'label'},
                    {label: '值', value: 'value'},
                ]}
            />
            <ProFormRadio.Group
                name='presetStyle'
                label='使用預製樣式'
                radioType='button'
                fieldProps={{
                    defaultValue: 'before-prior',
                    buttonStyle: 'solid',
                    onChange: (event) => {
                        setPresetStyle(event.target?.value);
                    }
                }}
                options={[
                    {label: '左側優先', value: 'before-prior'},
                    {label: '90-10', value: '90-10'},
                    {label: '80-20', value: '80-20'},
                    {label: '70-30', value: '70-30'},
                ]}
            />
            <Divider/>
            <DivideSelect
                name='foo'
                placeholder='請選擇此項'
                fieldProps={{
                    optionLabelProp: optionLabel,
                    options: [
                        {label: '中國', value: '+86'},
                        {label: '美國', value: '+1'},
                    ]
                }}
                usePresetStyle={presetStyle}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### DivideSelectProps

<API src="@/form/DivideSelect/index.tsx" hideTitle></API>
