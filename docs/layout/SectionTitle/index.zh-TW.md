---
title: SectionTitle
toc: content
order: 19
---

## 組件說明

SectionTitle 組件，可展示壹個帶有裝飾前綴的標題欄，用於分割頁面區域。

## Import

```tsx | pure
import {SectionTitle} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                                                               | 預設值                   |
|----------------|-----------------|------------------------------------------------------------------|-----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`                                                         | `'abp-section-title'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`                                                         | -                     |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties`                                            | -                     |
| boundBorder    | 外邊界是否有邊框        | `boolean`                                                        | `true`                |
| ornament       | 裝飾 div 的內容      | `React.ReactNode`                                                | -                     |
| ornamentClazz  | 裝飾 div 的 CSS 類名 | `string`                                                         | -                     |
| ornamentStyle  | 裝飾 div 的 CSS 樣式 | `React.CSSProperties`                                            | -                     |
| ornamentPos    | 裝飾 div 的位置      | `'before' \| 'after' \| false`                                   | `'before'`            |
| content        | 標題 div 的內容      | `React.ReactNode`                                                | -                     |
| contentClazz   | 標題 div 的 CSS 類名 | `string`                                                         | -                     |
| contentStyle   | 標題 div 的 CSS 樣式 | `React.CSSProperties`                                            | -                     |
| widthBlock     | 是否匹配父節點的寬度      | `boolean`                                                        | -                     |
| presetStyle    | 預設樣式            | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| false` | `'default'`           |
