---
title: MenuTabs
toc: content
order: 13
---

## 組件說明

參見 [在線例子](https://preview.pro.ant.design/account/settings)。`MenuTabs` 與 [Ant Design Tab](https://ant.design/components/tabs) 類似，但是集成了 [Ant Design Menu](https://ant.design/components/menu)。

## 導入組件

```tsx | pure
import {MenuTabs} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                 | 描述                   | 類型                                                                                      | 預設值               |
|--------------------|----------------------|-----------------------------------------------------------------------------------------|-------------------|
| clazzPrefix        | 組件的 CSS 類名前綴         | `string`                                                                                | `'abp-menu-tabs'` |
| menuProps          | 菜單屬性                 | `MixinMenuProps`                                                                        | -                 |
| containerClazz     | 容器 div 的 CSS 類名      | `string`                                                                                | -                 |
| containerStyle     | 容器 div 的 CSS 樣式      | `React.CSSProperties`                                                                   | -                 |
| entryClazz         | 菜單欄 div 的 CSS 類名     | `string`                                                                                | -                 |
| entryStyle         | 菜單欄 div 的 CSS 樣式     | `React.CSSProperties`                                                                   | -                 |
| entryWidth         | 菜單欄 div 的寬度          | `string`                                                                                | `'208px'`         |
| entryInkBar        | 是否顯示菜單欄 div 的活躍指示條   | `boolean`                                                                               | `true`            |
| entrySelectionBold | 是否加粗顯示菜單欄 div 選中的菜單項 | `boolean`                                                                               | `true`            |
| entryVisible       | 是否顯示菜單欄 div          | `boolean`                                                                               | `true`            |
| tabClazz           | 選項卡 div 的 CSS 類名     | `string`                                                                                | -                 |
| tabStyle           | 選項卡 div 的 CSS 樣式     | `React.CSSProperties`                                                                   | -                 |
| tabTitleClazz      | 選項卡標題 div 的 CSS 類名   | `string`                                                                                | -                 |
| tabTitleStyle      | 選項卡標題 div 的 CSS 樣式   | `React.CSSProperties`                                                                   | -                 |
| tabTitleRender     | 選項卡標題內容的渲染方式         | `(dom?: React.ReactNode) => React.ReactNode \| undefined`                               | -                 |
| tabTitleVisible    | 是否顯示選項卡 div 的標題      | `boolean`                                                                               | `true`            |
| tabContentClazz    | 選項卡內容 div 的 CSS 類名   | `string`                                                                                | -                 |
| tabContentStyle    | 選項卡內容 div 的 CSS 樣式   | `React.CSSProperties`                                                                   | -                 |
| adjustLayoutProps  | 自動調整布局的屬性            | `AdjustLayoutProps`                                                                     | -                 |
| presetStyle        | 預設樣式                 | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`    |

> 注意: 其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/menu" target="_blank">Menu</a> 組件。
