---
toc: content
---

## DivideSelect

DivideSelect, 提供了一下可以將選項的標簽和值分開顯示的選擇框。

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
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ProFormRadio.Group
                label='顯示選中項'
                radioType='button'
                fieldProps={{
                    value: optionLabel,
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
                label='使用預製樣式'
                radioType='button'
                fieldProps={{
                    value: presetStyle,
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
                        {
                            label: '亞洲',
                            value: 'optGroup',
                            optionType: 'optGroup',
                            children: [
                                {label: '中國', value: '+86'},
                            ]
                        },
                        {
                            label: '美洲',
                            value: 'optGroup',
                            optionType: 'optGroup',
                            children: [
                                {label: '美國', value: '+1'},
                            ]
                        }
                    ]
                }}
                presetStyle={presetStyle}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### DivideSelectProps

<API src="@/form/DivideSelect/index.tsx" hideTitle></API>
