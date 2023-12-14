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
                label='显示选中项'
                radioType='button'
                fieldProps={{
                    defaultValue: 'label',
                    buttonStyle: 'solid',
                    onChange: (event) => {
                        setOptionLabel(event.target?.value);
                    }
                }}
                options={[
                    {label: '标签', value: 'label'},
                    {label: '值', value: 'value'},
                ]}
            />
            <ProFormRadio.Group
                name='presetStyle'
                label='使用预制样式'
                radioType='button'
                fieldProps={{
                    defaultValue: 'before-prior',
                    buttonStyle: 'solid',
                    onChange: (event) => {
                        setPresetStyle(event.target?.value);
                    }
                }}
                options={[
                    {label: '左侧优先', value: 'before-prior'},
                    {label: '90-10', value: '90-10'},
                    {label: '80-20', value: '80-20'},
                    {label: '70-30', value: '70-30'},
                ]}
            />
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
                usePresetStyle={presetStyle}
            />
        </ProForm>
    );
}
```

### 组件属性

#### DivideSelectProps

<API src="@/form/DivideSelect/index.tsx" hideTitle></API>
