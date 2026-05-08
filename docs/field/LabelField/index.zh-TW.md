---
title: LabelField
toc: content
---

## 組件說明

LabelField 可以顯示壹個帶標簽的控件。

## 導入組件

```jsx | pure
import {LabelField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                 | 描述               | 類型                                                        | 預設值                          |
|--------------------|------------------|-----------------------------------------------------------|------------------------------|
| clazzPrefix        | 組件的 CSS 類名前綴     | `string`                                                  | `'abp-label-field'`          |
| containerClazz     | 容器 div 的 CSS 類名  | `string`                                                  | -                            |
| containerStyle     | 容器 div 的 CSS 樣式  | `React.CSSProperties`                                     | -                            |
| layout             | 標簽和內容的布局樣式       | `'horizontal' \| 'vertical'`                              | `'horizontal'`               |
| label              | 標簽節點             | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                            |
| labelClazz         | 標簽的 CSS 類名       | `string`                                                  | -                            |
| labelStyle         | 標簽的 CSS 樣式       | `React.CSSProperties`                                     | -                            |
| delimiter          | 標簽和內容之間的分隔符      | `React.ReactNode`                                         | `':'`                        |
| delimiterInLayout  | 需要顯示分隔符的布局樣式     | `'horizontal' \| 'vertical'[] \| false`                   | `['horizontal', 'vertical']` |
| field              | 字段節點             | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                            |
| fieldClazz         | 字段節點的 CSS 類名     | `string`                                                  | -                            |
| fieldStyle         | 字段節點的 CSS 樣式     | `React.CSSProperties`                                     | -                            |
| spaceSize          | 間距大小             | `SpaceSize`                                               | -                            |
| required           | 是否為必填字段          | `boolean`                                                 | -                            |
| tooltip            | 提示框的內容           | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                            |
| widthBlock         | 是否匹配父節點的寬度       | `boolean`                                                 | -                            |
| hideLabelWhenEmpty | 當標簽為空時是否隱藏標簽和分隔符 | `boolean`                                                 | -                            |
| hideFieldWhenEmpty | 當內容為空時是否隱藏內容     | `boolean`                                                 | -                            |
| presetStyle        | 預設樣式             | `'label-prior' \| 'field-prior' \| false`                 | `'field-prior'`              |
