---
title: TooltipField
toc: content
---

## 組件說明

TooltipField 用於顯示壹個帶提示的字段。

## 導入組件

```jsx | pure
import {TooltipField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述                  | 類型                                                        | 預設值                   |
|----------------|---------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴        | `string`                                                  | `'abp-tooltip-field'` |
| containerClazz | 容器 div 的 CSS 類名     | `string`                                                  | -                     |
| containerStyle | 容器 div 的 CSS 樣式     | `React.CSSProperties`                                     | -                     |
| field          | 字段節點                | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| fieldClazz     | 包裹字段節點 div 的 CSS 類名 | `string`                                                  | -                     |
| fieldStyle     | 包裹字段節點 div 的 CSS 樣式 | `React.CSSProperties`                                     | -                     |
| tooltipCtrl    | 是否使用 Tooltip        | `boolean`                                                 | -                     |
| tooltipProps   | Tooltip 屬性          | `TooltipProps`                                            | -                     |
| wrapContainer  | 是否包裹容器 div          | `boolean`                                                 | `true`                |
| wrapField      | 是否包裹字段節點            | `boolean`                                                 | `true`                |
