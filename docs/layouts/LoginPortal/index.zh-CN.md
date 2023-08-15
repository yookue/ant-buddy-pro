## LoginPortal

与 [Ant Design Pro](https://pro.ant.design/) 的 [LoginFormPage](https://github.com/ant-design/pro-components/blob/master/packages/form/src/components/LoginForm/index.md) 类似, 但支持更多的自定义 CSS 样式。

### 效果截图

![](/assets/img/snap/login-portal-1.jpg)

### 导入组件

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

<API src="@/layouts/LoginPortal/index.tsx" hideTitle></API>
