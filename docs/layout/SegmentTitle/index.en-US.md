---
toc: content
---

## SegmentTitle

SegmentTitle component, displays a title bar and an ornament prefix, in order to separate page areas.

### Import

```jsx | pure
import {SegmentTitle} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {SegmentTitle} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');
    const [presetStyle, setPresetStyle] = React.useState('default');

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='Ornament Position'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Before', value: 'before'},
                        {label: 'After', value: 'after'},
                        {label: 'False', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Preset Style'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Default', value: 'default'},
                        {label: 'Success', value: 'success'},
                        {label: 'Processing', value: 'processing'},
                        {label: 'Warning', value: 'warning'},
                        {label: 'Error', value: 'error'},
                        {label: 'False', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <SegmentTitle
                ornament='1'
                ornamentPos={ornamentPos}
                content='SegmentTitle header content'
                usePresetStyle={presetStyle}
            />
        </>
    );
}
```

### Properties

##### SegmentTitleProps

<API src="@/layout/SegmentTitle/index.tsx" hideTitle></API>
