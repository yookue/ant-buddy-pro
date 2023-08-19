---
toc: content
---

## LoginPortal

與 [Ant Design Pro](https://pro.ant.design/) 的 [LoginFormPage](https://github.com/ant-design/pro-components/blob/master/packages/form/src/components/LoginForm/index.md) 類似, 但支持更多的自定義 CSS 樣式。

### 效果截圖

![](/ant-buddy-pro/assets/img/snap/login-portal-1.jpg)

### 導入組件

```jsx | pure
import {LoginPortal} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx | pure
import React from 'react';
import {LoginForm} from '@ant-design/pro-components';
import {LoginPortal, PageFooter} from '@yookue/ant-buddy-pro';
import {SelectLang} from '@umijs/max';

export default () => {
    const loginForm = (
        // 根據您的需要自行定製以下內容
        // 通常是一個登錄表單
        <LoginForm/>
    );

    return (
        <LoginPortal
            interactionHeader={(
                // 根據您的需要自行定製以下內容
                // 這裏使用一個多語言切換的下拉菜單
                <div data-lang='true'>
                    <SelectLang/>
                </div>
            )}
            interactionContent={loginForm}
            interactionFooter={(
                // 根據您的需要自行定製以下內容
                // 通常是一個頁腳
                <PageFooter/>
            )}
        />
    );
}
```

### 組件屬性

<API src="@/layouts/LoginPortal/index.tsx" hideTitle></API>
