---
title: FoldSection
toc: content
order: 25
---

## 組件說明

與 [Ant Design](https://ant.design) 的 [Collapse](https://ant.design/components/collapse) 組件類似，但只有一個標題欄和一個面板。

## Premise

<Alert showIcon>
  如果您使用默認的圖標，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
</Alert>

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## Import

```jsx | pure
import {FoldSection} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                  | 描述                       | 類型                                                                            | 預設值                  |
|---------------------|--------------------------|-------------------------------------------------------------------------------|----------------------|
| clazzPrefix         | 組件的 CSS 類名前綴             | `string`                                                                      | `'abp-fold-section'` |
| containerClazz      | 容器 div 的 CSS 類名          | `string`                                                                      | -                    |
| containerStyle      | 容器 div 的 CSS 樣式          | `React.CSSProperties`                                                         | -                    |
| boundBorder         | 外邊界是否有邊框                 | `boolean`                                                                     | `true`               |
| headerClazz         | 頭部 div 的 CSS 類名          | `string`                                                                      | -                    |
| headerStyle         | 頭部 div 的 CSS 樣式          | `React.CSSProperties`                                                         | -                    |
| headerOrnament      | 頭部裝飾 span 的內容            | `React.ReactNode`                                                             | -                    |
| headerOrnamentPos   | 頭部裝飾 span 的位置            | `'before' \| 'after' \| false`                                                | `'before'`           |
| headerContent       | 頭部標題 span 的內容            | `React.ReactNode`                                                             | -                    |
| headerCollapse      | 頭部摺叠 span 的節點內容(面板展開時)   | `React.ReactNode`                                                             | `<DownOutlined/>`    |
| headerCollapsePos   | 頭部摺叠 span 的位置            | `'before' \| 'after' \| false`                                                | `'after'`            |
| headerExpand        | 頭部摺叠 span 的節點內容(面板摺叠時)   | `React.ReactNode`                                                             | `<UpOutlined/>`      |
| tooltipCtrl         | 是否使用 Tooltip             | `boolean`                                                                     | -                    |
| tooltipProps        | Tooltip 屬性               | `Omit<TooltipProps, 'title'>`                                                 | -                    |
| panelClazz          | 面板 div 的 CSS 類名          | `string`                                                                      | -                    |
| panelStyle          | 面板 div 的 CSS 樣式          | `React.CSSProperties`                                                         | -                    |
| panelContent        | 面板 div 的內容               | `React.ReactNode`                                                             | -                    |
| panelForceRender    | 面板 div 無内容也無佔位符時，是否强制渲染它 | `boolean`                                                                     | `false`              |
| panelDestroyOnClose | 關閉面板 div 時是否銷毀它          | `boolean`                                                                     | `false`              |
| panelPlaceholder    | 面板 div 的佔位符              | `React.ReactNode`                                                             | `<Empty/>`           |
| defaultOpen         | 是否默認展開面板 div             | `boolean`                                                                     | `true`               |
| onOpenChange        | 面板 div 折疊展開狀態變化時的回調函數    | `(open: boolean) => void`                                                     | -                    |
| presetStyle         | 預設樣式                     | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| 'classic' \| false` | `'default'`          |
| locale              | 組件的語言, e.g. 'zh_TW'      | `string`                                                                      | -                    |
| localeProps         | 多語言屬性                    | `IntlLocaleProps`                                                             | -                    |
