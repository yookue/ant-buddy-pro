---
toc: content
---

## LoginPortal

Similar to [LoginFormPage](https://github.com/ant-design/pro-components/blob/master/packages/form/src/components/LoginForm/index.md) of [Ant Design Pro](https://pro.ant.design/), with more customization for CSS classes and styles.

### Snapshot

![](/ant-buddy-pro/assets/img/snap/login-portal-1.jpg)

### Import

```jsx | pure
import {LoginPortal} from '@yookue/ant-buddy-pro';
```

### Example

```jsx | pure
import React from 'react';
import {LoginForm} from '@ant-design/pro-components';
import {LoginPortal, PageFooter} from '@yookue/ant-buddy-pro';
import {SelectLang} from '@umijs/max';

export default () => {
    const loginForm = (
        // Customize the following content according to your needs
        // Typically be a form component
        <LoginForm/>
    );

    return (
        <LoginPortal
            interactionHeader={(
                // Customize the following content according to your needs
                // Here use a language switch dropdown menu
                <div data-lang='true'>
                    <SelectLang/>
                </div>
            )}
            interactionContent={loginForm}
            interactionFooter={(
                // Customize the following content according to your needs
                // Typically be a footer component
                <PageFooter/>
            )}
        />
    );
}
```

### Properties

<API src="@/layout/LoginPortal/index.tsx" hideTitle></API>
