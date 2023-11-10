---
toc: content
---

## LocaleInput

LocaleInput，提供了壹個包含多種語言下拉框的文本輸入字段，以便讓您的應用程序支持多語言特性。

### 使用前提

<Alert type='info'>
  如果您使用默認的 <b><i>`actionDom`</i></b> 屬性，要使用此組件，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
</Alert>

```bash
npm install @ant-design/icons --save
```

### 導入組件

```jsx | pure
import {LocaleInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

> `popupInputProps` 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 `禁用` 或 `只讀` 狀態。

> `popupQuickTags` 可以簡單快速的自定義語言輸入項。

#### LocaleProps 帶校驗

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

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
            <LocaleInput
                name='localeWithValidation'
                placeholder='示例字段-帶校驗'
                popupProField={true}
                rules={[
                    {
                        required: true,
                        message: '請輸入示例字段',
                    },
                ]}
                popupInputProps={[
                    {
                        tag: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-CN',
                        placeholder: '示例字段-簡體中文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-TW',
                        placeholder: '示例字段-繁體中文',
                        allowClear: true,
                    }
                ]}
                popupConfirmProps={{
                    message: '設為默認嗎？',
                    ok: '是',
                    cancel: '否',
                }}
                popupShareProps={{
                    rules: [
                        {
                            type: 'string',
                            min: 2,
                            max: 60,
                            message: '示例字段的長度必須在 2~60 之間',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### LocaleProps 無校驗

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

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
            <LocaleInput
                name='localeWithoutValidation'
                placeholder='示例字段-無校驗'
                popupInputProps={[
                    {
                        tag: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-CN',
                        placeholder: '示例字段-簡體中文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-TW',
                        placeholder: '示例字段-繁體中文',
                        allowClear: true,
                    }
                ]}
            />
        </ProForm>
    );
}
```

#### LocaleTags 帶校驗

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

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
            <LocaleInput
                name='localeWithValidation'
                placeholder='示例字段-帶校驗'
                popupActionPos='before'
                popupProField={true}
                rules={[
                    {
                        required: true,
                        message: '請輸入示例字段',
                    },
                ]}
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
                popupShareProps={{
                    placeholder: '請輸入此字段',
                    rules: [
                        {
                            type: 'string',
                            min: 2,
                            max: 60,
                            message: '示例字段的長度必須在 2~60 之間',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### LocaleTags 無校驗，已禁用

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

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
            <LocaleInput
                name='localeWithoutValidation'
                placeholder='示例字段-無校驗'
                disabled
                popupTagPos='after'
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
                popupShareProps={{
                    placeholder: '請輸入此字段',
                }}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
