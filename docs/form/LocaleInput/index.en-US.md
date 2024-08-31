---
toc: content
---

## LocaleInput

LocaleInput, provides a text input box with a dropdown div of locale input boxes, aiming to support multilingual capability for your application.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default <b><i>`actionDom`</i></b> attribute:
</Alert>

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

#### Props with field validation

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
                    submitText: 'Submit',
                    resetText: 'Reset',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='foobar'
                placeholder='Demo Field With Validation'
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
                popupConfirmProps={{
                    message: 'Set as default?',
                    ok: 'Yes',
                    cancel: 'No',
                }}
            />
        </ProForm>
    );
}
```

#### Props without field validation

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
                    submitText: 'Submit',
                    resetText: 'Reset',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='foobar'
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
                popupProField={false}
                popupConfirmProps={{
                    message: 'Set as default?',
                    ok: 'Yes',
                    cancel: 'No',
                }}
            />
        </ProForm>
    );
}
```

#### Tags with field validation

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
                    submitText: 'Submit',
                    resetText: 'Reset',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='foobar'
                placeholder='Demo Field With Validation'
                popupActionPos='before'
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
                popupConfirmProps={{
                    message: 'Set as default?',
                    ok: 'Yes',
                    cancel: 'No',
                }}
            />
        </ProForm>
    );
}
```

#### Tags without field validation, disabled

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
                    submitText: 'Submit',
                    resetText: 'Reset',
                }
            }}
            onFinish={async (values) => {
                messageApi.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <LocaleInput
                name='foobar'
                placeholder='Demo Field Without Validation'
                disabled
                popupTagPos='after'
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
                popupProField={false}
                popupShareProps={{
                    placeholder: 'Please input this field',
                }}
                popupConfirmProps={{
                    message: 'Set as default?',
                    ok: 'Yes',
                    cancel: 'No',
                }}
            />
        </ProForm>
    );
}
```

### Properties

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
