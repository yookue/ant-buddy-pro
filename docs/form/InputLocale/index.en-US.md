---
toc: content
---

## InputLocale

InputLocale, provides a text input box with a dropdown div of locale input boxes, aiming to support multilingual capability for your application.

### Premise

Before use this component, you need to install [@ant-design/icons](https://github.com/ant-design/ant-design-icons) package first if you're using the default `addonDom` attribute:

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {InputLocale} from '@yookue/ant-buddy-pro';
```

### Example

> Each `localeProps` item has its own input properties, thus you can control them as you wish, such as marking someone of them to `disabled` or `readonly`, and so on.

#### With field validation

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
                    submitText: 'Submit',
                    resetText: 'Rest',
                }
            }}
            onFinish={async (values) => {
                message.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <InputLocale
                name='localeWithValidation'
                placeholder='Demo Field With Validation'
                popupProField={true}
                localeProps={[
                    {
                        label: 'en-US',
                        placeholder: 'Demo Field in English',
                        allowClear: true,
                    },
                    {
                        label: 'zh-CN',
                        placeholder: 'Demo Field in Simplified Chinese',
                        allowClear: true,
                    },
                    {
                        label: 'zh-TW',
                        placeholder: 'Demo Field in Traditional Chinese',
                        allowClear: true,
                    }
                ]}
                rules={[
                    {
                        required: true,
                        message: 'Please input demo field',
                    },
                ]}
                localeRules={[
                    {
                        type: 'string',
                        min: 2,
                        max: 60,
                        message: 'The value length must between 2 and 60'
                    }
                ]}
            />
        </ProForm>
    );
}
```

#### Without field validation

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
                    submitText: 'Submit',
                    resetText: 'Rest',
                }
            }}
            onFinish={async (values) => {
                message.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <InputLocale
                name='localeWithoutValidation'
                placeholder='Demo Field Without Validation'
                localeProps={[
                    {
                        label: 'en-US',
                        placeholder: 'Demo Field in English',
                        allowClear: true,
                    },
                    {
                        label: 'zh-CN',
                        placeholder: 'Demo Field in Simplified Chinese',
                        allowClear: true,
                    },
                    {
                        label: 'zh-TW',
                        placeholder: 'Demo Field in Traditional Chinese',
                        allowClear: true,
                    }
                ]}
            />
        </ProForm>
    );
}
```

### Properties

<API src="@/form/InputLocale/index.tsx" hideTitle></API>
