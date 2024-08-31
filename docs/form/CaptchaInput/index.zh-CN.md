---
toc: content
---

## CaptchaInput

CaptchaInput，提供了一个可以获取验证码的按钮和一个输入验证码的文本框。

### 导入组件

```jsx | pure
import {CaptchaInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
                placeholder='手机号'
                rules={[
                    {
                        required: true,
                        message: '此项为必填项',
                    }
                ]}
            />
            <CaptchaInput
                name='captcha'
                placeholder='验证码'
                fieldRef={captchaInputRef}
                fieldProps={{
                    maxLength: 6,
                    prefix: <SafetyCertificateOutlined/>
                }}
                phoneName='mobile'
                countDown={29}
                onGenerate={() => {
                    messageApi.success('验证码发送成功');
                }}
                onTimer={count => {
                    console.log('CaptchaInput timer count = ' + count);
                }}
                onTimerBegin={() => setTiming(true)}
                onTimerEnd={() => setTiming(false)}
                localeProps={{
                    'generate': '获取验证码',
                    'resend': '重新发送',
                }}
            />
            <Divider/>
            <Button
                icon={<ClockCircleOutlined/>}
                disabled={timing}
                onClick={() => {
                    if (!captchaInputRef.current.isTiming()) {
                        captchaInputRef.current.startTiming();
                    }
                }}
            >
                手动计时
            </Button>
        </ProForm>
    );
}
```

### 组件属性

#### CaptchaInputProps

<API src="@/form/CaptchaInput/index.tsx" hideTitle></API>
