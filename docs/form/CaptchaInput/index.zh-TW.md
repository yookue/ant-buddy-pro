---
toc: content
---

## CaptchaInput

CaptchaInput，提供了壹個可以獲取驗證碼的按鈕和壹個輸入驗證碼的文本框。

### 導入組件

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
                placeholder='手機號'
                rules={[
                    {
                        required: true,
                        message: '此項為必填項',
                    }
                ]}
            />
            <CaptchaInput
                name='captcha'
                placeholder='驗證碼'
                fieldRef={captchaInputRef}
                fieldProps={{
                    maxLength: 6,
                    prefix: <SafetyCertificateOutlined/>
                }}
                phoneName='mobile'
                countDown={29}
                onGenerate={() => {
                    messageApi.success('驗證碼發送成功');
                }}
                onTimer={count => {
                    console.log('CaptchaInput timer count = ' + count);
                }}
                onTimerBegin={() => setTiming(true)}
                onTimerEnd={() => setTiming(false)}
                localeProps={{
                    'generate': '獲取驗證碼',
                    'resend': '重新發送',
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
                手動計時
            </Button>
        </ProForm>
    );
}
```

### 組件屬性

#### CaptchaInputProps

<API src="@/form/CaptchaInput/index.tsx" hideTitle></API>
