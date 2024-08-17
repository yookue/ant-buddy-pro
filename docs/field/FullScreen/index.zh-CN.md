---
toc: content
---

## FullScreen

FullScreen 是一个用来切换文档全屏的图标按钮。

### 使用前提

要使用此组件，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：

```bash
npm install @ant-design/icons --save
```

### 导入组件

```jsx | pure
import {FullScreen} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    const [tooltipCtrl, setTooltipCtrl] = React.useState(false);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormSwitch
                    label='Tooltip Ctrl'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: tooltipCtrl,
                    }}
                    onChange={(value) => {
                        setTooltipCtrl(value ? true : false);
                    }}
                />
            </ProForm>
            <Divider/>
            <FullScreen
                enterHint='全屏'
                exitHint='退出全屏'
                tooltipCtrl={tooltipCtrl}
            />
        </>
    );
}
```

### 组件属性

#### FullScreenProps

<API src="@/field/FullScreen/index.tsx" hideTitle></API>
