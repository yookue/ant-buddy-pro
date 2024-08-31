---
toc: content
---

## BorderBox

BorderBox component, can display a box with borders.

### Import

```jsx | pure
import {BorderBox} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Checkbox, Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {BorderBox} from '@yookue/ant-buddy-pro';

export default () => {
    const [borderTop, setBorderTop] = React.useState(true);
    const [borderRight, setBorderRight] = React.useState(true);
    const [borderBottom, setBorderBottom] = React.useState(true);
    const [borderLeft, setBorderLeft] = React.useState(true);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProForm.Group>
                    <ProFormSwitch
                        label='Border Top'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderTop,
                        }}
                        onChange={(value) => {
                            setBorderTop(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Border Right'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderRight,
                        }}
                        onChange={(value) => {
                            setBorderRight(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Border Bottom'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderBottom,
                        }}
                        onChange={(value) => {
                            setBorderBottom(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Border Left'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderLeft,
                        }}
                        onChange={(value) => {
                            setBorderLeft(value ? true : false);
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <BorderBox
                borderTop={borderTop}
                borderRight={borderRight}
                borderBottom={borderBottom}
                borderLeft={borderLeft}
                containerStyle={{padding: '12px'}}
            >
                <Checkbox>Checkbox</Checkbox>
            </BorderBox>
        </>
    );
}
```

### Properties

#### BorderBoxProps

<API src="@/field/BorderBox/index.tsx" hideTitle></API>
