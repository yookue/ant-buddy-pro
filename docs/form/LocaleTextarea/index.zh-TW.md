---
title: LocaleTextarea
toc: content
order: 60
---

## 組件說明

LocaleTextarea，提供了壹個可切換多種語言輸入的多行文本輸入框，以便讓您的應用程序支持多語言特性。

## 導入組件

```jsx | pure
import {LocaleTextarea} from '@unikue/ant-buddy-pro';
```

## 使用示例

> `switchTextareaProps` 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 `禁用` 或 `只讀` 狀態。

> `switchQuickTags` 可以簡單快速的自定義語言輸入項。

### Props 帶校驗

<code src="./demo-1.zh-TW.tsx"></code>

### Props 無校驗

<code src="./demo-2.zh-TW.tsx"></code>

### Tags 帶校驗

<code src="./demo-3.zh-TW.tsx"></code>

### Tags 無校驗，已禁用

<code src="./demo-4.zh-TW.tsx"></code>

## 組件屬性

| 屬性                  | 說明                                            | 類型                      | 預設值                     |
|---------------------|-----------------------------------------------|-------------------------|-------------------------|
| clazzPrefix         | 組件的 CSS 類名前綴                                  | `string`                | `'abp-locale-textarea'` |
| containerClazz      | 容器 div 的 CSS 類名                               | `string`                | -                       |
| containerStyle      | 容器 div 的 CSS 樣式                               | `React.CSSProperties`   | -                       |
| tabsProps           | 標簽頁的屬性                                        | `MixinTabsProps`        | -                       |
| multilingual        | 是否啓用多語言                                       | `boolean`               | `true`                  |
| proField            | 默認文本框是否使用 ProFormField 控件                     | `boolean`               | `true`                  |
| locale              | 組件的語言, e.g. 'zh_TW'                           | `string`                | -                       |
| localeProps         | 多語言屬性                                         | `IntlLocaleProps`       | -                       |
| switchTextareaProps | 多語言輸入項的屬性(比 `switchQuickTags` 優先級高，更多自定義)     | `SwitchTextareaProps[]` | -                       |
| switchQuickTags     | 多語言輸入項的名稱(比 `switchTextareaProps` 優先級低，更簡單快捷) | `string[]`              | -                       |
| switchShareProps    | 語言輸入項的通用屬性                                    | `SwitchShareProps`      | -                       |
| switchCloneProps    | 語言輸入項的克隆屬性                                    | `SwitchCloneProps`      | -                       |
| switchProField      | 語言輸入項是否使用 ProFormField 控件                     | `boolean`               | `true`                  |
| forceRender         | 是否強制渲染標簽頁內容                                   | `boolean`               | `true`                  |
