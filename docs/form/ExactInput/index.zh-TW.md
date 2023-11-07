---
toc: content
---

## ExactInput

ExactInput，提供了壹個帶復選框的文本輸入字段，以便支持精確查詢特性。

### 使用前提

如果您使用默認的 `addonDom` 屬性，要使用此組件，您需要先安裝 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 圖標組件包：

```bash
npm install @ant-design/icons --save
```

### 導入組件

```jsx | pure
import {ExactInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                message.success('您點擊了提交按鈕');
            }}
        >
          <ExactInput
              name='foobar'
              placeholder='請輸入此項'
              tooltipProps={{
                  title: '全字匹配',
              }}
          />
        </ProForm>
    );
}
```

### 組件屬性

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
