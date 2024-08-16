---
toc: content
---

## FullScreen

FullScreen, provides an icon with the ability to toggle document full screen mode.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first:
</Alert>

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {FullScreen} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    const [tooltipCtrl, setTooltipCtrl] = React.useState(false);

    return (
        <>
            <ProForm autoFocusFirstInput={false} submitter={false}>
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
                enterHint='Fullscreen'
                exitHint='Exit Fullscreen'
                tooltipCtrl={tooltipCtrl}
            />
        </>
    );
}
```

### Properties

#### FullScreenProps

<API src="@/field/FullScreen/index.tsx" hideTitle></API>
