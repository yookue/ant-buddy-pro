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
                fieldProps={{
                    maxLength: 6,
                    prefix: <SafetyCertificateOutlined/>
                }}
                phoneName='mobile'
                onGenerate={() => {
                    message.success('驗證碼發送成功');
                }}
                countDown={29}
                countEnd={1}
                localeProps={{
                    'generate': '獲取驗證碼',
                    'resend': '重新發送',
                }}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### CaptchaInputProps

<API src="@/form/CaptchaInput/alias.tsx" hideTitle></API>