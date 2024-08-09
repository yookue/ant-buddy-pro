---
toc: content
---

## CaptchaInput

CaptchaInput, provides a text input box and a button with captcha generation capability.

### Import

```jsx | pure
import {CaptchaInput} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {message} from 'antd';
import {MobileOutlined, SafetyCertificateOutlined} from '@ant-design/icons';
import {ProForm, ProFormText} from '@ant-design/pro-form';
import {CaptchaInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <ProFormText
                name='mobile'
                fieldProps={{
                    prefix: <MobileOutlined/>
                }}
                placeholder='Mobile Number'
                rules={[
                    {
                        required: true,
                        message: 'This field is required',
                    }
                ]}
            />
            <CaptchaInput
                name='captcha'
                placeholder='Captcha Code'
                fieldProps={{
                    maxLength: 6,
                    prefix: <SafetyCertificateOutlined/>
                }}
                phoneName='mobile'
                onGenerate={() => {
                    message.success('Captcha sent successfully');
                }}
                countDown={29}
                localeProps={{
                    'generate': 'Get Captcha',
                    'resend': 'Resend',
                }}
            />
        </ProForm>
    );
}
```

### Properties

#### CaptchaInputProps

<API src="@/form/CaptchaInput/index.tsx" hideTitle></API>
