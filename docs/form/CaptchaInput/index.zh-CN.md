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
                fieldProps={{
                    maxLength: 6,
                    prefix: <SafetyCertificateOutlined/>
                }}
                phoneName='mobile'
                onGenerate={() => {
                    message.success('验证码发送成功');
                }}
                countDown={29}
                countEnd={1}
                localeProps={{
                    'generate': '获取验证码',
                    'resend': '重新发送',
                }}
            />
        </ProForm>
    );
}
```

### 组件属性

#### CaptchaInputProps

<API src="@/form/CaptchaInput/alias.tsx" hideTitle></API>
