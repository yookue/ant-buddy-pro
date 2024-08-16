---
toc: content
---

## ExactInput

ExactInput，提供了一个带复选框的文本输入字段，以便支持精确查询特性。

### 使用前提

<Alert type='info'>
  如果您使用默认的 <b><i>`addonDom`</i></b> 属性，要使用此组件，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：
</Alert>

```bash
npm install @ant-design/icons --save
```

### 导入组件

```jsx | pure
import {ExactInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {ExactInput} from '@yookue/ant-buddy-pro';

export default () => {
    const [tooltipCtrl, setTooltipCtrl] = React.useState(false);

    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <ProFormSwitch
                label='Tooltip 控件'
                checkedChildren='是'
                unCheckedChildren='否'
                fieldProps={{
                    checked: tooltipCtrl,
                }}
                onChange={(value) => {
                    setTooltipCtrl(value ? true : false);
                }}
            />
            <Divider/>
            <ExactInput
                name='foobar'
                placeholder='请输入此项'
                fieldProps={{
                    addonBefore: '前缀',
                }}
                tooltipCtrl={tooltipCtrl}
            />
        </ProForm>
    );
}
```

### 组件属性

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
