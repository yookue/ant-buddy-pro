---
title: CodePreview
toc: content
order: 15
---

## 組件說明

CodePreview 是一個用於展示代碼預覽的組件，可包含一個標題和一段文本，您也可以通過 `children` 屬性來完全定製它。

## 導入組件

```tsx | pure
import {CodePreview} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                                                                                      | 預設值                  |
|----------------|-----------------|-----------------------------------------------------------------------------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`                                                                                | `'abp-code-preview'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`                                                                                | -                    |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties`                                                                   | -                    |
| preClazz       | pre 節點的 CSS 類名  | `string`                                                                                | -                    |
| preStyle       | pre 節點的 CSS 樣式  | `React.CSSProperties`                                                                   | -                    |
| codeClazz      | code 節點的 CSS 類名 | `string`                                                                                | -                    |
| codeStyle      | code 節點的 CSS 樣式 | `React.CSSProperties`                                                                   | -                    |
| titleContent   | 標題內容            | `React.ReactNode`                                                                       | -                    |
| titleProps     | 標題屬性            | `TitleProps`                                                                            | -                    |
| titleClazz     | 標題的 CSS 類名      | `string`                                                                                | -                    |
| titleStyle     | 標題的 CSS 樣式      | `React.CSSProperties`                                                                   | -                    |
| textContent    | 文本內容            | `React.ReactNode`                                                                       | -                    |
| textProps      | 文本屬性            | `TextProps`                                                                             | -                    |
| textClazz      | 文本的 CSS 類名      | `string`                                                                                | -                    |
| textStyle      | 文本的 CSS 樣式      | `React.CSSProperties`                                                                   | -                    |
| boundBorder    | 是否顯示邊框          | `boolean`                                                                               | `true`               |
| boundShadow    | 是否顯示邊框陰影        | `boolean`                                                                               | -                    |
| presetStyle    | 預設樣式            | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`       |
