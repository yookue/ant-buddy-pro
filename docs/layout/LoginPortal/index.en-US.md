---
title: LoginPortal
toc: content
order: 30
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

| Property            | Description                                                                                   | Type                  | Default              |
|---------------------|-----------------------------------------------------------------------------------------------|-----------------------|----------------------|
| clazzPrefix         | The CSS class prefix of the component                                                         | `string`              | `'abp-login-portal'` |
| containerClazz      | The CSS class name of the container div                                                       | `string`              | -                    |
| containerStyle      | The CSS style of the container div                                                            | `React.CSSProperties` | -                    |
| containerHeader     | The top element of the container div                                                          | `React.ReactNode`     | -                    |
| containerFooter     | The bottom element of the container div                                                       | `React.ReactNode`     | -                    |
| vesselClazz         | The CSS class name of the vessel div (container excludes containerHeader and containerFooter) | `string`              | -                    |
| vesselStyle         | The CSS style of the vessel div (container excludes containerHeader and containerFooter)      | `React.CSSProperties` | -                    |
| introductionClazz   | The CSS class name of the introduction div (left area)                                        | `string`              | -                    |
| introductionStyle   | The CSS style of the introduction div (left area)                                             | `React.CSSProperties` | -                    |
| introductionContent | The content of the introduction div (left area)                                               | `React.ReactNode`     | -                    |
| interactionClazz    | The CSS class name of the interaction div (right area)                                        | `string`              | -                    |
| interactionStyle    | The CSS style of the interaction div (right area)                                             | `React.CSSProperties` | -                    |
| interactionHeader   | The top element of the interaction div (right area), typically a language switch              | `React.ReactNode`     | -                    |
| interactionContent  | The main element of the interaction div (right area), typically a login form                  | `React.ReactNode`     | -                    |
| interactionFooter   | The bottom element of the interaction div (right area), typically a copyright declaration     | `React.ReactNode`     | -                    |
| interchangeClazz    | The CSS class name of the interchange div (right area main content)                           | `string`              | -                    |
| interchangeStyle    | The CSS style of the interchange div (right area main content)                                | `React.CSSProperties` | -                    |
