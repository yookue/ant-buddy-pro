---
toc: content
---

## ExactInput

ExactInput, provides a text input box with a checkbox, aiming to support exact capability for queries.

### Premise

Before use this component, you need to install [@ant-design/icons](https://github.com/ant-design/ant-design-icons) package first if you're using the default `addonDom` attribute:

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
                name='foobar'
                placeholder='Please input this field'
                tooltipProps={{
                    title: 'Match Exactly',
                }}
            />
        </ProForm>
    );
}
```

### Properties

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
