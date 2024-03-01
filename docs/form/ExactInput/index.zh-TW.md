---
toc: content
---

## ExactInput

ExactInput，提供了壹個帶復選框的文本輸入字段，以便支持精確查詢特性。

### 使用前提

<Alert type='info'>
  如果您使用默認的 <b><i>`addonDom`</i></b> 屬性，要使用此組件，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
</Alert>

```bash
npm install @ant-design/icons --save
```

### 導入組件

```jsx | pure
import {ExactInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

#### 使用 ProForm，使用前綴

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <ExactInput
                name='foo'
                placeholder='請輸入此項'
                fieldProps={{
                    addonBefore: '前綴',
                }}
            />
        </ProForm>
    );
}
```

#### 不使用 ProForm，使用 Tooltip

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ExactInput
            name='bar'
            placeholder='請輸入此項'
            useTooltip={true}
            proField={false}
        />
    );
}
```

### 組件屬性

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
