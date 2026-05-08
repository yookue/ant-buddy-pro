---
title: CompactTuple
toc: content
---

## 組件說明

CompactTuple 可以顯示緊湊間距模式下的壹個控件和壹個附加節點。

典型的應用場景是，顯示壹個證件類型的日期選取框和壹個切換/復選框，用於標記證件是長期有效。

在這種情況下，日期選取框是有邊框的，但切換/復選框沒有。此控件可以給切換/復選框加上邊框，以便統壹用戶 UI。

## 導入組件

```jsx | pure
import {CompactTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                | 描述                  | 類型                                                        | 預設值                   |
|-------------------|---------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix       | 組件的 CSS 類名前綴        | `string`                                                  | `'abp-compact-tuple'` |
| containerClazz    | 容器 div 的 CSS 類名     | `string`                                                  | -                     |
| containerStyle    | 容器 div 的 CSS 樣式     | `React.CSSProperties`                                     | -                     |
| spaceCompactProps | 緊湊間距的屬性             | `SpaceCompactProps`                                       | `{block: true}`       |
| field             | 字段節點                | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| fieldClazz        | 包裹字段節點 div 的 CSS 類名 | `string`                                                  | -                     |
| fieldStyle        | 包裹字段節點 div 的 CSS 樣式 | `React.CSSProperties`                                     | -                     |
| fieldBorder       | 字段節點是否有邊框           | `boolean`                                                 | -                     |
| addon             | 附加節點                | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| addonClazz        | 包裹附加節點 div 的 CSS 類名 | `string`                                                  | -                     |
| addonStyle        | 包裹附加節點 div 的 CSS 樣式 | `React.CSSProperties`                                     | -                     |
| addonBorder       | 附加節點是否有邊框           | `boolean`                                                 | -                     |
| addonMarginLeft   | 附加節點的左外邊距           | `boolean \| number`                                       | -                     |
| addonMarginRight  | 附加節點的右外邊距           | `boolean \| number`                                       | -                     |
| addonPos          | 附屬節點位置              | `'before' \| 'after' \| false`                            | `'after'`             |
| readonlyBorder    | 只讀模式下是否渲染邊框         | `boolean`                                                 | `false`               |
| widthBlock        | 是否匹配父節點的寬度          | `boolean`                                                 | -                     |
| presetStyle       | 預設樣式                | `'field-prior' \| 'addon-prior' \| false`                 | `'field-prior'`       |
