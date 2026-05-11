---
title: IconSelect
toc: content
order: 9
---

## 組件說明

IconSelect，提供了一個可選擇圖標的下拉框。

## 使用前提

> 如果您使用默認的圖標，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 導入組件

```tsx | pure
import {IconSelect} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                 | 說明                   | 類型                            | 預設值                                                            |
|--------------------|----------------------|-------------------------------|----------------------------------------------------------------|
| clazzPrefix        | 組件的 CSS 類名前綴         | `string`                      | `'abp-icon-select'`                                            |
| optionMode         | 選項模式，文本或圖標           | `'icon' \| 'text'`            | `'icon'`                                                       |
| optionGroup        | 是否將選項分組              | `boolean`                     | `true`                                                         |
| proField           | 是否使用 ProFormField 控件 | `boolean`                     | `true`                                                         |
| tabsProps          | 標簽頁的屬性               | `MixinTabsProps`              | -                                                              |
| themeTypes         | 主題類型                 | `IconThemeType[]`             | `['outlined', 'filled', 'twotone']`                            |
| defaultThemeType   | 默認的主題類型              | `IconThemeType`               | `'outlined'`                                                   |
| themeInkBar        | 是否顯示主題類型的活躍指示條       | `boolean`                     | `true`                                                         |
| sceneTypes         | 場景類型                 | `IconSceneType[]`             | `['direction', 'suggestion', 'editor', 'data', 'logo', 'web']` |
| defaultSceneType   | 默認的場景類型              | `IconSceneType`               | `'direction'`                                                  |
| sceneInkBar        | 是否顯示場景類型的活躍指示條       | `boolean`                     | `true`                                                         |
| sceneEntryWidth    | 場景類型的寬度              | `string`                      | `'150px'`                                                      |
| optionWrapperClazz | 包裹圖標選項 div 的 CSS 類名  | `string`                      | -                                                              |
| optionWrapperStyle | 包裹圖標選項 div 的 CSS 樣式  | `React.CSSProperties`         | -                                                              |
| optionIconClazz    | 圖標選項的 CSS 類名         | `string`                      | -                                                              |
| optionIconStyle    | 圖標選項的 CSS 樣式         | `React.CSSProperties`         | -                                                              |
| searchBox          | 是否顯示搜索框              | `boolean`                     | `true`                                                         |
| tooltipCtrl        | 是否使用 Tooltip         | `boolean`                     | `false`                                                        |
| tooltipProps       | Tooltip 屬性           | `Omit<TooltipProps, 'title'>` | -                                                              |
| locale             | 組件的語言, e.g. 'zh_TW'  | `string`                      | -                                                              |
| localeProps        | 多語言屬性                | `IntlLocaleProps`             | -                                                              |
