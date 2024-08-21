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
import {Button, Divider, message as messageApi} from 'antd';
import {MobileOutlined, SafetyCertificateOutlined, ClockCircleOutlined} from '@ant-design/icons';
import {ProForm, ProFormText} from '@ant-design/pro-form';
import {CaptchaInput} from '@yookue/ant-buddy-pro';

export default () => {
    const [timing, setTiming] = React.useState(false);
    const captchaInputRef = React.useRef(null);

    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
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
                fieldRef={captchaInputRef}
                fieldProps={{
                    maxLength: 6,
                    prefix: <SafetyCertificateOutlined/>
                }}
                phoneName='mobile'
                countDown={29}
                onGenerate={() => {
                    messageApi.success('Captcha sent successfully');
                }}
                onTimer={count => setTiming(count > 1)}
                localeProps={{
                    'generate': 'Get Captcha',
                    'resend': 'Resend',
                }}
            />
            <Divider/>
            <Button
                icon={<ClockCircleOutlined/>}
                disabled={timing}
                onClick={() => {
                    if (!captchaInputRef.current.isTiming()) {
                        captchaInputRef.current.startTimer();
                        setTiming(true);
                    }
                }}
            >
                Manual Start
            </Button>
        </ProForm>
    );
}
```

### Properties

#### CaptchaInputProps

<API src="@/form/CaptchaInput/index.tsx" hideTitle></API>
