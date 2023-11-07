---
toc: content
---

## LocaleInput

LocaleInput，提供了一个包含多种语言下拉框的文本输入字段，以便让您的应用程序支持多语言特性。

### 使用前提

如果您使用默认的 `actionDom` 属性，要使用此组件，您需要先安装 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 图标组件包：

```bash
npm install @ant-design/icons --save
```

### 导入组件

```jsx | pure
import {LocaleInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

> `popupInputProps` 属性下的每项，都拥有其独立的属性，这样您可以充分自定义每个语言的特性，比如把某一项或某几项设置为 `禁用` 或 `只读` 状态。

> `popupQuickTags` 可以简单快速的自定义语言输入项。

#### LocaleProps 带校验

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
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                message.success('您点击了提交按钮');
            }}
        >
            <LocaleInput
                name='localeWithValidation'
                placeholder='示例字段-带校验'
                popupProField={true}
                rules={[
                    {
                        required: true,
                        message: '请输入示例字段',
                    },
                ]}
                popupInputProps={[
                    {
                        tag: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-CN',
                        placeholder: '示例字段-简体中文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-TW',
                        placeholder: '示例字段-繁体中文',
                        allowClear: true,
                    }
                ]}
                popupConfirmProps={{
                    message: '设为默认吗？',
                    ok: '是',
                    cancel: '否',
                }}
                popupShareProps={{
                    rules: [
                        {
                            type: 'string',
                            min: 2,
                            max: 60,
                            message: '示例字段的长度必须在 2~60 之间',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### LocaleProps 无校验

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
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                message.success('您点击了提交按钮');
            }}
        >
            <LocaleInput
                name='localeWithoutValidation'
                placeholder='示例字段-无校验'
                popupInputProps={[
                    {
                        tag: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-CN',
                        placeholder: '示例字段-简体中文',
                        allowClear: true,
                    },
                    {
                        tag: 'zh-TW',
                        placeholder: '示例字段-繁体中文',
                        allowClear: true,
                    }
                ]}
            />
        </ProForm>
    );
}
```

#### LocaleTags 带校验

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
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                message.success('您点击了提交按钮');
            }}
        >
            <LocaleInput
                name='localeWithValidation'
                placeholder='示例字段-带校验'
                popupActionPos='before'
                popupProField={true}
                rules={[
                    {
                        required: true,
                        message: '请输入示例字段',
                    },
                ]}
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
                popupShareProps={{
                    rules: [
                        {
                            type: 'string',
                            min: 2,
                            max: 60,
                            message: '示例字段的长度必须在 2~60 之间',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### LocaleTags 无校验，已禁用

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
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                message.success('您点击了提交按钮');
            }}
        >
            <LocaleInput
                name='localeWithoutValidation'
                placeholder='示例字段-无校验'
                disabled
                popupTagPos='after'
                popupQuickTags={[
                    'en-US',
                    'zh-CN',
                    'zh-TW',
                ]}
            />
        </ProForm>
    );
}
```

### 组件属性

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
