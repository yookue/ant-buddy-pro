---
title: ApartTitle
toc: content
order: 1
---

## 組件說明

ApartTitle 組件，可展示壹個帶有裝飾圖標的標題欄，用於分割頁面區域。

## Import

```tsx | pure
import {ApartTitle} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述               | 類型                                                                            | 預設值                 |
|----------------|------------------|-------------------------------------------------------------------------------|---------------------|
| clazzPrefix    | 組件的 CSS 類名前綴     | `string`                                                                      | `'abp-apart-title'` |
| containerClazz | 容器 div 的 CSS 類名  | `string`                                                                      | -                   |
| containerStyle | 容器 div 的 CSS 樣式  | `React.CSSProperties`                                                         | -                   |
| ornament       | 裝飾 span 的內容      | `React.ReactNode`                                                             | -                   |
| ornamentClazz  | 裝飾 span 的 CSS 類名 | `string`                                                                      | -                   |
| ornamentStyle  | 裝飾 span 的 CSS 樣式 | `React.CSSProperties`                                                         | -                   |
| ornamentPos    | 裝飾 span 的位置      | `'before' \| 'after' \| false`                                                | `'before'`          |
| content        | 標題 span 的內容      | `React.ReactNode`                                                             | -                   |
| contentClazz   | 標題 span 的 CSS 類名 | `string`                                                                      | -                   |
| contentStyle   | 標題 span 的 CSS 樣式 | `React.CSSProperties`                                                         | -                   |
| boundBorder    | 外邊界是否有邊框         | `boolean`                                                                     | `true`              |
| widthBlock     | 是否匹配父節點的寬度       | `boolean`                                                                     | -                   |
| presetStyle    | 預設樣式             | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| 'classic' \| false` | `'default'`         |
