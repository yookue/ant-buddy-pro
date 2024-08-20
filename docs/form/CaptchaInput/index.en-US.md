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
    const captchaRef = React.useRef(null);

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
                ref={captchaRef}
                name='captcha'
                placeholder='Captcha Code'
                fieldProps={{
                    maxLength: 6,
                    prefix: <SafetyCertificateOutlined/>
                }}
                phoneName='mobile'
                countDown={29}
                onGenerate={() => {
                    messageApi.success('Captcha sent successfully');
                }}
                onTimer={count => {
                    if (count === 1) {
                        setTiming(false);
                    }
                }}
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
                    if (!captchaRef.current.isTiming()) {
                        captchaRef.current.startTiming();
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
