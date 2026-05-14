---
title: Fullscreen
toc: content
order: 6
---

## 組件說明

Fullscreen 是壹個用來切換全屏的圖標按鈕。

## 使用前提

>  如果您使用默認的圖標，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 導入組件

```tsx | pure
import {Fullscreen} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述                 | 類型                                                        | 預設值                        |
|----------------|--------------------|-----------------------------------------------------------|----------------------------|
| clazzPrefix    | 組件的 CSS 類名前綴       | `string`                                                  | `'abp-fullscreen'`         |
| containerClazz | 容器 span 的 CSS 類名   | `string`                                                  | -                          |
| containerStyle | 容器 span 的 CSS 樣式   | `React.CSSProperties`                                     | -                          |
| triggerFor     | 要切換全屏的 DOM 元素      | `Element \| null \| (() => Element \| null \| undefined)` | `document.documentElement` |
| onChange       | 全屏更改後的回調函數         | `(fullscreen?: boolean) => void`                          | -                          |
| tooltipCtrl    | 是否使用 Tooltip       | `boolean`                                                 | -                          |
| tooltipProps   | Tooltip 屬性         | `Omit<TooltipProps, 'title'>`                             | -                          |
| locale         | 組件的語言，e.g. 'zh_TW' | `string`                                                  | -                          |
| localeProps    | 多語言屬性              | `IntlLocaleProps`                                         | -                          |

## 組件方法

通過 `ref` 可以訪問以下方法：

| 方法名            | 參數   | 描述      |
|---------------|------|---------|
| isFullscreen  | 無    | 檢查是否處於全屏狀態 |
| enterFullscreen | 無  | 進入全屏    |
| exitFullscreen | 無   | 退出全屏    |
| toggleFullscreen | 無 | 切換全屏狀態  |
