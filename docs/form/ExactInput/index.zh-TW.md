---
toc: content
---

## ExactInput

ExactInput，提供了壹個帶復選框的文本輸入字段，以便支持精確查詢特性。

### 使用前提

<Alert type='info'>
  如果您使用默認的 <b><i>`addonDom`</i></b> 屬性，要使用此組件，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
</Alert>

```bash
npm install @ant-design/icons --save
```

### 導入組件

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
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
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
                placeholder='請輸入此項'
                fieldProps={{
                    addonBefore: '前綴',
                }}
                tooltipCtrl={tooltipCtrl}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### ExactInputProps

<API src="@/form/ExactInput/index.tsx" hideTitle></API>
