---
title: LoginPortal
toc: content
---

## Description

Similar to [LoginFormPage](https://github.com/ant-design/pro-components/tree/master/packages/form/src/components/LoginForm/index.md) of [Ant ProComponents](https://procomponents.ant.design), with more customization for CSS classes and styles.

## Snapshot

<code src="./snapshot.tsx"></code>

## Import

```jsx | pure
import {LoginPortal} from '@unikue/ant-buddy-pro';
```

## Example

```jsx | pure
import React from 'react';
import {LoginForm} from '@ant-design/pro-form';
import {LoginPortal, PageFooter} from '@unikue/ant-buddy-pro';
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

## Properties

<API id="LoginPortal"></API>
