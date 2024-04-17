---
toc: content
---

## DivideSelect

DivideSelect, 提供了一下可以将选项的标签和值分开显示的选择框。

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
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ProFormRadio.Group
                label='显示选中项'
                radioType='button'
                fieldProps={{
                    value: optionLabel,
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
                label='使用预制样式'
                radioType='button'
                fieldProps={{
                    value: presetStyle,
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
                        {
                            label: '亚洲',
                            value: 'optGroup',
                            optionType: 'optGroup',
                            children: [
                                {label: '中国', value: '+86'},
                            ]
                        },
                        {
                            label: '美洲',
                            value: 'optGroup',
                            optionType: 'optGroup',
                            children: [
                                {label: '美国', value: '+1'},
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

### 组件属性

#### DivideSelectProps

<API src="@/form/DivideSelect/index.tsx" hideTitle></API>
