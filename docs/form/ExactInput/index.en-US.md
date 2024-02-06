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

#### With ProForm, with prefix

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <ExactInput
                name='foo'
                placeholder='Please input this field'
                tooltipProps={{
                    title: 'Match Exactly',
                }}
                fieldProps={{
                    addonBefore: 'Prefix',
                }}
            />
        </ProForm>
    );
}
```

#### Without ProForm, with Tooltip

```jsx
import React from 'react';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ExactInput
            name='bar'
            placeholder='Please input this field'
            tooltipProps={{
                title: 'Match Exactly',
            }}
            useTooltip={true}
            proField={false}
        />
    );
}
```

### Properties

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
