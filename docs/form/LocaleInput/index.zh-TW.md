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

#### Props 帶校驗

```jsx
import React from 'react';
import {message as messageApi} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm
            layout='horizontal'
            autoFocusFirstInput={false}
            submitter={{
                searchConfig: {
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('您點擊了提交按鈕');
            }}
        >
            <LocaleInput
                name='foobar'
                placeholder='示例字段-帶校驗'
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
                popupConfirmProps={{
                    message: '設為默認嗎？',
                    ok: '是',
                    cancel: '否',
                }}
            />
        </ProForm>
    );
}
```

#### Props 無校驗

```jsx
import React from 'react';
import {message as messageApi} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm
            layout='horizontal'
            autoFocusFirstInput={false}
            submitter={{
                searchConfig: {
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('您點擊了提交按鈕');
            }}
        >
            <LocaleInput
                name='foobar'
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
                popupProField={false}
                popupConfirmProps={{
                    message: '設為默認嗎？',
                    ok: '是',
                    cancel: '否',
                }}
            />
        </ProForm>
    );
}
```

#### Tags 帶校驗

```jsx
import React from 'react';
import {message as messageApi} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm
            layout='horizontal'
            autoFocusFirstInput={false}
            submitter={{
                searchConfig: {
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('您點擊了提交按鈕');
            }}
        >
            <LocaleInput
                name='foobar'
                placeholder='示例字段-帶校驗'
                popupActionPos='before'
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
                popupConfirmProps={{
                    message: '設為默認嗎？',
                    ok: '是',
                    cancel: '否',
                }}
            />
        </ProForm>
    );
}
```

#### Tags 無校驗，已禁用

```jsx
import React from 'react';
import {message as messageApi} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm
            layout='horizontal'
            autoFocusFirstInput={false}
            submitter={{
                searchConfig: {
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('您點擊了提交按鈕');
            }}
        >
            <LocaleInput
                name='foobar'
                placeholder='示例字段-無校驗'
                disabled
                popupTagPos='after'
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
                popupProField={false}
                popupShareProps={{
                    placeholder: '請輸入此字段',
                }}
                popupConfirmProps={{
                    message: '設為默認嗎？',
                    ok: '是',
                    cancel: '否',
                }}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
