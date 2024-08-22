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
    const [bordered, setBordered] = React.useState(true);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormSwitch
                    label='Bordered'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: bordered,
                    }}
                    onChange={(value) => {
                        setBordered(value ? true : false);
                    }}
                />
            </ProForm>
            <Divider/>
            <BorderBox bordered={bordered} containerStyle={{padding: '12px'}}>
                <Checkbox>Checkbox</Checkbox>
            </BorderBox>
        </>
    );
}
```

### Properties

#### BorderBoxProps

<API src="@/field/BorderBox/index.tsx" hideTitle></API>
