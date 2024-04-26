---
toc: content
---

## MaskInput

MaskInput，提供了一个可以通过正则表达式来限制输入的文本框。

### 导入组件

```jsx | pure
import {MaskInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {MaskInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <MaskInput
                name='foobar'
                placeholder='请输入此项'
                fieldProps={{
                    addonBefore: '数字或字母',
                }}
                patterns={[
                    /^[a-zA-Z0-9]+$/,
                ]}
            />
        </ProForm>
    );
}
```

### 组件属性

#### MaskInputProps

<API src="@/form/MaskInput/index.tsx" hideTitle></API>
