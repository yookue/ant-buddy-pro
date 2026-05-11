---
title: PageFooter
toc: content
order: 16
---

## 組件說明

與 [Ant ProComponents](https://procomponents.ant.design) 的 [GlobalFooter](https://github.com/ant-design/pro-components/tree/master/packages/layout/src/components/GlobalFooter/index.tsx) 類似, 但支持更多的自定義 CSS 樣式。

## 導入組件

```tsx | pure
import {PageFooter} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述               | 類型                             | 預設值                 |
|----------------|------------------|--------------------------------|---------------------|
| clazzPrefix    | 組件的 CSS 類名前綴     | `string`                       | `'abp-page-footer'` |
| containerClazz | 頁腳 div 的 CSS 類名  | `string`                       | -                   |
| containerStyle | 頁腳 div 的 CSS 樣式  | `React.CSSProperties`          | -                   |
| vesselClazz    | 子容器 div 的 CSS 類名 | `string`                       | -                   |
| vesselStyle    | 子容器 div 的 CSS 樣式 | `React.CSSProperties`          | -                   |
| links          | 超鏈接數組            | `HyperlinkProps[]`             | -                   |
| linksClazz     | 超鏈接 div 的 CSS 類名 | `string`                       | -                   |
| linksStyle     | 超鏈接 div 的 CSS 樣式 | `React.CSSProperties`          | -                   |
| linkShareClazz | 超鏈接的通用 CSS 類名    | `string`                       | -                   |
| linkShareStyle | 超鏈接的通用 CSS 樣式    | `React.CSSProperties`          | -                   |
| copyright      | 版權 div 的內容       | `React.ReactNode`              | -                   |
| copyrightIcon  | 是否顯示版權圖標         | `boolean`                      | `true`              |
| copyrightClazz | 版權 div 的 CSS 類名  | `string`                       | -                   |
| copyrightStyle | 版權 div 的 CSS 樣式  | `React.CSSProperties`          | -                   |
| widthBlock     | 是否匹配父節點的寬度       | `boolean`                      | -                   |
| presetStyle    | 預設樣式             | `'default' \| 'half' \| false` | `'default'`         |
