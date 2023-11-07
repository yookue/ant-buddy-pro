---
toc: content
---

## LocaleInput

LocaleInput, provides a text input box with a dropdown div of locale input boxes, aiming to support multilingual capability for your application.

### Premise

Before use this component, you need to install [@ant-design/icons](https://github.com/ant-design/ant-design-icons) package first if you're using the default `actionDom` attribute:

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {LocaleInput} from '@yookue/ant-buddy-pro';
```

### Example

> Each `popupInputProps` item has its own input properties, thus you can control them as you wish, such as marking someone of them to `disabled` or `readonly`, and so on.

> `popupQuickTags` can custom language input items quickly.

#### LocaleProps with field validation

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
                    submitText: 'Submit',
                    resetText: 'Rest',
                }
            }}
            onFinish={async (values) => {
                message.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='localeWithValidation'
                placeholder='Demo Field With Validation'
                popupProField={true}
                rules={[
                    {
                        required: true,
                        message: 'Please input demo field',
                    },
                ]}
                popupInputProps={[
                    {
                        tag: 'en-US',
                        placeholder: 'Demo Field in English',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-CN',
                        placeholder: 'Demo Field in Simplified Chinese',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-TW',
                        placeholder: 'Demo Field in Traditional Chinese',
                        allowClear: true,
                    }
                ]}
                popupConfirmProps={{
                    message: 'Set as default?',
                    ok: 'Yes',
                    cancel: 'No',
                }}
                popupShareProps={{
                    rules: [
                        {
                            type: 'string',
                            min: 2,
                            max: 60,
                            message: 'The value length must between 2 and 60',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### LocaleProps without field validation

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
                    submitText: 'Submit',
                    resetText: 'Rest',
                }
            }}
            onFinish={async (values) => {
                message.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='localeWithoutValidation'
                placeholder='Demo Field Without Validation'
                popupInputProps={[
                    {
                        tag: 'en-US',
                        placeholder: 'Demo Field in English',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-CN',
                        placeholder: 'Demo Field in Simplified Chinese',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-TW',
                        placeholder: 'Demo Field in Traditional Chinese',
                        allowClear: true,
                    }
                ]}
            />
        </ProForm>
    );
}
```

#### LocaleTags with field validation

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
                    submitText: 'Submit',
                    resetText: 'Rest',
                }
            }}
            onFinish={async (values) => {
                message.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='localeWithValidation'
                placeholder='Demo Field With Validation'
                popupActionPos='before'
                popupProField={true}
                rules={[
                    {
                        required: true,
                        message: 'Please input demo field',
                    },
                ]}
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
                popupShareProps={{
                    placeholder: 'Please input this field',
                    rules: [
                        {
                            type: 'string',
                            min: 2,
                            max: 60,
                            message: 'The value length must between 2 and 60',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### LocaleTags without field validation, disabled

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
                    submitText: 'Submit',
                    resetText: 'Rest',
                }
            }}
            onFinish={async (values) => {
                message.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='localeWithoutValidation'
                placeholder='Demo Field Without Validation'
                disabled
                popupTagPos='after'
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
                popupShareProps={{
                    placeholder: 'Please input this field',
                }}
            />
        </ProForm>
    );
}
```

### Properties

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
