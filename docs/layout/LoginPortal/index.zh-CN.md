---
toc: content
---

## LoginPortal

与 [Ant Design ProComponents](https://procomponents.ant.design) 的 [LoginFormPage](https://github.com/ant-design/pro-components/blob/v1/packages/form/src/components/LoginForm/index.md) 类似, 但支持更多的自定义 CSS 样式。

### 效果截图

![](/ant-buddy-pro/assets/img/snap/login-portal-1.jpg)

### 导入组件

```jsx | pure
import {LoginPortal} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx | pure
import React from 'react';
import {LoginForm} from '@ant-design/pro-form';
import {LoginPortal, PageFooter} from '@yookue/ant-buddy-pro';
import {SelectLang} from '@umijs/max';

export default () => {
    const loginForm = (
        // 根据您的需要自行定制以下内容
        // 通常是一个登录表单
        <LoginForm/>
    );

    return (
        <LoginPortal
            interactionHeader={(
                // 根据您的需要自行定制以下内容
                // 这里使用一个多语言切换的下拉菜单
                <div data-lang='true'>
                    <SelectLang/>
                </div>
            )}
            interactionContent={loginForm}
            interactionFooter={(
                // 根据您的需要自行定制以下内容
                // 通常是一个页脚
                <PageFooter/>
            )}
        />
    );
}
```

### 组件属性

#### LoginPortalProps

<API src="@/layout/LoginPortal/index.tsx" hideTitle></API>
