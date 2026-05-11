---
title: LoginPortal
toc: content
order: 30
---

## 組件說明

與 [Ant ProComponents](https://procomponents.ant.design) 的 [LoginFormPage](https://github.com/ant-design/pro-components/tree/master/packages/form/src/components/LoginForm/index.md) 類似, 但支持更多的自定義 CSS 樣式。

## 效果截圖

<code src="./snapshot.tsx"></code>

## 導入組件

```tsx | pure
import {LoginPortal} from '@unikue/ant-buddy-pro';
```

## 使用示例

```tsx | pure
import React from 'react';
import {LoginForm} from '@ant-design/pro-form';
import {LoginPortal, PageFooter} from '@unikue/ant-buddy-pro';
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

## 組件屬性

| 屬性                  | 描述                                    | 類型                    | 預設值                  |
|---------------------|---------------------------------------|-----------------------|----------------------|
| clazzPrefix         | 組件的 CSS 類名前綴                          | `string`              | `'abp-login-portal'` |
| containerClazz      | 容器 div 的 CSS 類名                       | `string`              | -                    |
| containerStyle      | 容器 div 的 CSS 樣式                       | `React.CSSProperties` | -                    |
| containerHeader     | 容器 div 的頂部內容                          | `React.ReactNode`     | -                    |
| containerFooter     | 容器 div 的底部內容                          | `React.ReactNode`     | -                    |
| vesselClazz         | 二級容器 div 的 CSS 類名(容器 div 除去頂部節點和底部節點) | `string`              | -                    |
| vesselStyle         | 二級容器 div 的 CSS 樣式(容器 div 除去頂部節點和底部節點) | `React.CSSProperties` | -                    |
| introductionClazz   | 左側宣傳區的 CSS 類名                         | `string`              | -                    |
| introductionStyle   | 左側宣傳區的 CSS 樣式                         | `React.CSSProperties` | -                    |
| introductionContent | 左側宣傳區的內容                              | `React.ReactNode`     | -                    |
| interactionClazz    | 右側交互區的 CSS 類名                         | `string`              | -                    |
| interactionStyle    | 右側交互區的 CSS 樣式                         | `React.CSSProperties` | -                    |
| interactionHeader   | 右側交互區的頂部內容，通常是切換語言選項                  | `React.ReactNode`     | -                    |
| interactionContent  | 右側交互區的主要內容，通常是登錄表單                    | `React.ReactNode`     | -                    |
| interactionFooter   | 右側交互區的底部內容，通常是版權聲明                    | `React.ReactNode`     | -                    |
| interchangeClazz    | 右側交互區主要內容的 CSS 類名                     | `string`              | -                    |
| interchangeStyle    | 右側交互區主要內容的 CSS 樣式                     | `React.CSSProperties` | -                    |
