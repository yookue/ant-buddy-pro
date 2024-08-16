---
toc: content
---

## ExactInput

ExactInput, provides a text input box with a checkbox, aiming to support exact capability for enquiries.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default <b><i>`addonDom`</i></b> attribute:
</Alert>

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {ExactInput} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    const [useTooltip, setUseTooltip] = React.useState(false);

    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <ProFormSwitch
                label='Use Tooltip'
                checkedChildren='True'
                unCheckedChildren='False'
                fieldProps={{
                    checked: useTooltip,
                }}
                onChange={(value) => {
                    setUseTooltip(value ? true : false);
                }}
            />
            <Divider/>
            <ExactInput
                name='foobar'
                placeholder='Please input this field'
                fieldProps={{
                    addonBefore: 'Prefix',
                }}
                useTooltip={useTooltip}
            />
        </ProForm>
    );
}
```

### Properties

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
