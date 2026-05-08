---
title: ExactInput
toc: content
---

## 組件說明

ExactInput，提供了壹個帶復選框的文本輸入字段，以便支持精確查詢特性。

## 使用前提

<Alert showIcon>
  如果您使用默認的圖標，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
</Alert>

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 導入組件

```jsx | pure
import {ExactInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性           | 說明                  | 類型                             | 預設值                 |
|--------------|---------------------|--------------------------------|---------------------|
| clazzPrefix  | 組件的 CSS 類名前綴        | `string`                       | `'abp-exact-input'` |
| addonPos     | 文本框的附屬節點位置          | `'before' \| 'after' \| false` | `'after'`           |
| compactAddon | 文本框的附屬節點是否使用緊凑模式    | `boolean`                      | `true`              |
| checkable    | 是否顯示復選框             | `boolean`                      | `true`              |
| checkProps   | 復選框的屬性              | `AddonCheckProps`              | -                   |
| tooltipCtrl  | 是否使用 Tooltip        | `boolean`                      | -                   |
| tooltipProps | Tooltip 屬性          | `Omit<TooltipProps, 'title'>`  | -                   |
| locale       | 組件的語言, e.g. 'zh_TW' | `string`                       | -                   |
| localeProps  | 多語言屬性               | `IntlLocaleProps`              | -                   |

> 注意: 其他屬性繼承自 AddonInput 組件。
