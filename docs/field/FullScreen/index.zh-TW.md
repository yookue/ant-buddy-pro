---
toc: content
---

## FullScreen

FullScreen 是壹個用來切換文檔全屏的圖標按鈕。

### 使用前提

要使用此組件，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：

```bash
npm install @ant-design/icons --save
```

### 導入組件

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
                enterHint='全屏'
                exitHint='退出全屏'
                tooltipCtrl={tooltipCtrl}
            />
        </>
    );
}
```

### 組件屬性

#### FullScreenProps

<API src="@/field/FullScreen/index.tsx" hideTitle></API>
