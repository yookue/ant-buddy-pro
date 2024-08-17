---
toc: content
---

## MaskInput

MaskInput，提供了壹個可以通过正则表达式来限制输入的文本框。

### 導入組件

```jsx | pure
import {MaskInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {MaskInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <MaskInput
                name='foobar'
                placeholder='請輸入此項'
                fieldProps={{
                    addonBefore: '數字或字母',
                }}
                patterns={[
                    /^[a-zA-Z0-9]+$/,
                ]}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### MaskInputProps

<API src="@/form/MaskInput/index.tsx" hideTitle></API>
