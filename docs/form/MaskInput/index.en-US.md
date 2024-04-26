---
toc: content
---

## MaskInput

MaskInput, provides a text input box with regular expression validation capability.

### Import

```jsx | pure
import {MaskInput} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {MaskInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <MaskInput
                name='foobar'
                placeholder='Please input this field'
                fieldProps={{
                    addonBefore: 'Alphanumeric',
                }}
                patterns={[
                    /^[a-zA-Z0-9]+$/,
                ]}
            />
        </ProForm>
    );
}
```

### Properties

#### MaskInputProps

<API src="@/form/MaskInput/index.tsx" hideTitle></API>
