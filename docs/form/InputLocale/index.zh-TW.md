---
toc: content
---

## InputLocale

InputLocale，提供了壹個包含多種語言下拉框的文本輸入字段，以便讓您的應用程序支持多語言特性。

### 使用前提

如果您使用默認的 `addonDom` 屬性，要使用此組件，您需要先安裝 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 圖標組件包：

```bash
npm install @ant-design/icons --save
```

### 導入組件

```jsx | pure
import {InputLocale} from '@yookue/ant-buddy-pro';
```

### 使用示例

> `localeProps` 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 `禁用` 或 `只讀` 狀態。

#### 字段帶校驗

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-components';
import {InputLocale} from '@yookue/ant-buddy-pro';

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
            <InputLocale
                name='localeWithValidation'
                placeholder='示例字段-帶校驗'
                popupProField={true}
                localeProps={[
                    {
                        label: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-CN',
                        placeholder: '示例字段-簡體中文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-TW',
                        placeholder: '示例字段-繁體中文',
                        allowClear: true,
                    }
                ]}
                rules={[
                    {
                        required: true,
                        message: '請輸入示例字段',
                    },
                ]}
                localeRules={[
                    {
                        type: 'string',
                        min: 2,
                        max: 60,
                        message: '示例字段的長度必須在 2~60 之間'
                    }
                ]}
            />
        </ProForm>
    );
}
```

#### 字段無校驗

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-components';
import {InputLocale} from '@yookue/ant-buddy-pro';

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
            <InputLocale
                name='localeWithoutValidation'
                placeholder='示例字段-無校驗'
                localeProps={[
                    {
                        label: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-CN',
                        placeholder: '示例字段-簡體中文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-TW',
                        placeholder: '示例字段-繁體中文',
                        allowClear: true,
                    }
                ]}
            />
        </ProForm>
    );
}
```

### 組件屬性

<API src="@/form/InputLocale/index.tsx" hideTitle></API>
