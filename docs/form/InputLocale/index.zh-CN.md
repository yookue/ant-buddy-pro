---
toc: content
---

## InputLocale

InputLocale，提供了一个包含多种语言下拉框的文本输入字段，以便让您的应用程序支持多语言特性。

### 使用前提

如果您使用默认的 `addonDom` 属性，要使用此组件，您需要先安装 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 图标组件包：

```bash
npm install @ant-design/icons --save
```

### 导入组件

```jsx | pure
import {InputLocale} from '@yookue/ant-buddy-pro';
```

### 使用示例

> `localeProps` 属性下的每项，都拥有其独立的属性，这样您可以充分自定义每个语言的特性，比如把某一项或某几项设置为 `禁用` 或 `只读` 状态。

#### 字段带校验

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-components';
import {InputLocale} from '@yookue/ant-buddy-pro';

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
            <InputLocale
                name='localeWithValidation'
                placeholder='示例字段-带校验'
                popupProField={true}
                localeProps={[
                    {
                        label: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-CN',
                        placeholder: '示例字段-简体中文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-TW',
                        placeholder: '示例字段-繁体中文',
                        allowClear: true,
                    }
                ]}
                rules={[
                    {
                        required: true,
                        message: '请输入示例字段',
                    },
                ]}
                localeRules={[
                    {
                        type: 'string',
                        min: 2,
                        max: 60,
                        message: '示例字段的长度必须在 2~60 之间'
                    }
                ]}
            />
        </ProForm>
    );
}
```

#### 字段无校验

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-components';
import {InputLocale} from '@yookue/ant-buddy-pro';

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
            <InputLocale
                name='localeWithoutValidation'
                placeholder='示例字段-无校验'
                localeProps={[
                    {
                        label: 'en-US',
                        placeholder: '示例字段-英文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-CN',
                        placeholder: '示例字段-简体中文',
                        allowClear: true,
                    },
                    {
                        label: 'zh-TW',
                        placeholder: '示例字段-繁体中文',
                        allowClear: true,
                    }
                ]}
            />
        </ProForm>
    );
}
```

### 组件属性

<API src="@/form/InputLocale/index.tsx" hideTitle></API>
