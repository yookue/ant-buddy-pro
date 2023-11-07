---
toc: content
---

## ExactInput

ExactInput，提供了一个带复选框的文本输入字段，以便支持精确查询特性。

### 使用前提

如果您使用默认的 `addonDom` 属性，要使用此组件，您需要先安装 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 图标组件包：

```bash
npm install @ant-design/icons --save
```

### 导入组件

```jsx | pure
import {ExactInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

#### 使用 ProForm

```jsx
import React from 'react';
import {message} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {ExactInput} from '@yookue/ant-buddy-pro';

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
          <ExactInput
              name='foobar'
              placeholder='请输入此项'
              tooltipProps={{
                  title: '全字匹配',
              }}
          />
        </ProForm>
    );
}
```

#### 不使用 ProForm，使用 Tooltip

```jsx
import React from 'react';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ExactInput
            name='foobar'
            placeholder='请输入此项'
            tooltipProps={{
                title: '全字匹配',
            }}
            useTooltip={true}
            proField={false}
        />
    );
}
```

### 组件属性

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
