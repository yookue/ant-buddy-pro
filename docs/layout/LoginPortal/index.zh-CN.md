---
title: LoginPortal
toc: content
---

## 组件说明

与 [Ant ProComponents](https://procomponents.ant.design) 的 [LoginFormPage](https://github.com/ant-design/pro-components/tree/master/packages/form/src/components/LoginForm/index.md) 类似, 但支持更多的自定义 CSS 样式。

## 效果截图

<code src="./snapshot.tsx"></code>

## 导入组件

```jsx | pure
import {LoginPortal} from '@unikue/ant-buddy-pro';
```

## 使用示例

```jsx | pure
import React from 'react';
import {LoginForm} from '@ant-design/pro-form';
import {LoginPortal, PageFooter} from '@unikue/ant-buddy-pro';
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

## 组件属性

| 属性                  | 描述                                    | 类型                    | 默认值                  |
|---------------------|---------------------------------------|-----------------------|----------------------|
| clazzPrefix         | 组件的 CSS 类名前缀                          | `string`              | `'abp-login-portal'` |
| containerClazz      | 容器 div 的 CSS 类名                       | `string`              | -                    |
| containerStyle      | 容器 div 的 CSS 样式                       | `React.CSSProperties` | -                    |
| containerHeader     | 容器 div 的顶部内容                          | `React.ReactNode`     | -                    |
| containerFooter     | 容器 div 的底部内容                          | `React.ReactNode`     | -                    |
| vesselClazz         | 二级容器 div 的 CSS 类名(容器 div 除去顶部节点和底部节点) | `string`              | -                    |
| vesselStyle         | 二级容器 div 的 CSS 样式(容器 div 除去顶部节点和底部节点) | `React.CSSProperties` | -                    |
| introductionClazz   | 左侧宣传区的 CSS 类名                         | `string`              | -                    |
| introductionStyle   | 左侧宣传区的 CSS 样式                         | `React.CSSProperties` | -                    |
| introductionContent | 左侧宣传区的内容                              | `React.ReactNode`     | -                    |
| interactionClazz    | 右侧交互区的 CSS 类名                         | `string`              | -                    |
| interactionStyle    | 右侧交互区的 CSS 样式                         | `React.CSSProperties` | -                    |
| interactionHeader   | 右侧交互区的顶部内容，通常是切换语言选项                  | `React.ReactNode`     | -                    |
| interactionContent  | 右侧交互区的主要内容，通常是登录表单                    | `React.ReactNode`     | -                    |
| interactionFooter   | 右侧交互区的底部内容，通常是版权声明                    | `React.ReactNode`     | -                    |
| interchangeClazz    | 右侧交互区主要内容的 CSS 类名                     | `string`              | -                    |
| interchangeStyle    | 右侧交互区主要内容的 CSS 样式                     | `React.CSSProperties` | -                    |
