---
toc: content
---

## ExactInput

ExactInput, provides a text input box with a checkbox, aiming to support exact capability for queries.

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

#### With ProForm

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm
            submitter={{
                searchConfig: {
                    submitText: 'Submit',
                    resetText: 'Rest',
                }
            }}
            onFinish={async (values) => {
                message.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <ExactInput
                name='foo'
                placeholder='Please input this field'
                tooltipProps={{
                    title: 'Match Exactly',
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