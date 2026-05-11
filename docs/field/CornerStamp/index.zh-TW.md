---
title: CornerStamp
toc: content
order: 15
---

## 組件說明

CornerStamp 是一個可以顯示帶角標的控件。

## 導入組件

```tsx | pure
import {CornerStamp} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述                  | 類型                                                         | 預設值                  |
|----------------|---------------------|------------------------------------------------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴        | `string`                                                   | `'abp-corner-stamp'` |
| containerClazz | 容器 div 的 CSS 類名     | `string`                                                   | -                    |
| containerStyle | 容器 div 的 CSS 樣式     | `React.CSSProperties`                                      | -                    |
| field          | 字段節點                | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| fieldClazz     | 包裹字段節點 div 的 CSS 類名 | `string`                                                   | -                    |
| fieldStyle     | 包裹字段節點 div 的 CSS 樣式 | `React.CSSProperties`                                      | -                    |
| addon          | 附加節點                | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| addonClazz     | 包裹附加節點 div 的 CSS 類名 | `string`                                                   | -                    |
| addonStyle     | 包裹附加節點 div 的 CSS 樣式 | `React.CSSProperties`                                      | -                    |
| rotateAddon    | 是否旋轉附加節點            | `boolean`                                                  | `true`               |
| placement      | 角標的位置               | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'`         |
| size           | 組件的邊長               | `number`                                                   | `16`                 |
| zIndex         | 組件的 Z 軸堆疊順序         | `number`                                                   | `9`                  |
| color          | 角標的顏色               | `string`                                                   | `'green'`            |
