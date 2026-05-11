---
title: LocaleInput
toc: content
order: 12
---

## 組件說明

LocaleInput，提供了壹個包含多種語言下拉框的文本輸入字段，以便讓您的應用程序支持多語言特性。

## 使用前提

> 如果您使用默認的圖標，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 導入組件

```tsx | pure
import {LocaleInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

> `popupInputProps` 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 `禁用` 或 `只讀` 狀態。

> `popupQuickTags` 可以簡單快速的自定義語言輸入項。

### Props 帶校驗

<code src="./demo-1.zh-TW.tsx"></code>

### Props 無校驗

<code src="./demo-2.zh-TW.tsx"></code>

### Tags 帶校驗

<code src="./demo-3.zh-TW.tsx"></code>

### Tags 無校驗，已禁用

<code src="./demo-4.zh-TW.tsx"></code>

## 組件屬性

| 屬性                | 說明                                        | 類型                                                            | 預設值                      |
|-------------------|-------------------------------------------|---------------------------------------------------------------|--------------------------|
| clazzPrefix       | 組件的 CSS 類名前綴                              | `string`                                                      | `'abp-locale-input'`     |
| addon             | 默認文本框的附屬節點內容                              | `React.ReactNode \| (() => React.ReactNode \| undefined)`     | `<TranslationOutlined/>` |
| addonPos          | 默認文本框的附屬節點位置                              | `'before' \| 'after' \| false`                                | `'after'`                |
| defaultOpen       | 是否默認展開彈出層                                 | `boolean`                                                     | -                        |
| triggerProps      | 彈出層的屬性                                    | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>` | -                        |
| multilingual      | 是否啓用多語言                                   | `boolean`                                                     | `true`                   |
| locale            | 組件的語言, e.g. 'zh_TW'                       | `string`                                                      | -                        |
| popupInputProps   | 多語言輸入項的屬性(比 `popupQuickTags` 優先級高，更多自定義)  | `PopupInputProps[]`                                           | -                        |
| popupQuickTags    | 多語言輸入項的名稱(比 `popupInputProps` 優先級低，更簡單快捷) | `string[]`                                                    | -                        |
| popupTagPos       | 語言輸入項的標簽位置                                | `'before' \| 'after' \| false`                                | `'before'`               |
| popupAddon        | 語言輸入項的附屬節點內容                              | `React.ReactNode \| (() => React.ReactNode \| undefined)`     | `<SelectOutlined/>`      |
| popupAddonPos     | 語言輸入項的附屬節點位置                              | `'before' \| 'after' \| false`                                | `'after'`                |
| popupShareProps   | 語言輸入項的通用屬性                                | `PopupShareProps`                                             | -                        |
| popupCloneProps   | 語言輸入項的克隆屬性                                | `PopupCloneProps`                                             | -                        |
| popupConfirmProps | 語言輸入項的動作確認屬性                              | `PopupConfirmProps`                                           | -                        |
| popupProField     | 語言輸入項是否使用 ProFormField 控件                 | `boolean`                                                     | `true`                   |

> 注意: 其他屬性繼承自 AddonInput 組件。
