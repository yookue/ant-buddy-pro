---
title: CountField
toc: content
order: 20
---

## 組件說明

CountField 用於顯示壹個帶計數的字段。

## 導入組件

```tsx | pure
import {CountField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                                                                                                          | 預設值                 |
|----------------|-----------------|-------------------------------------------------------------------------------------------------------------|---------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`                                                                                                    | `'abp-count-field'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`                                                                                                    | -                   |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties`                                                                                       | -                   |
| field          | 字段節點            | `React.ReactNode \| (() => React.ReactNode \| undefined)`                                                   | -                   |
| count          | 計數              | `number`                                                                                                    | `0`                 |
| countProps     | 計數的屬性           | `Omit<BadgeProps, 'children' \| 'color' \| 'count' \| 'dot' \| 'showZero' \| 'size' \| 'status' \| 'text'>` | -                   |
| layout         | 標簽和內容的布局樣式      | `'horizontal' \| 'vertical'`                                                                                | `'horizontal'`      |
| showCount      | 是否顯示計數          | `boolean`                                                                                                   | `true`              |
| spaceSize      | 間距大小            | `SpaceSize`                                                                                                 | -                   |
| tooltipCtrl    | 是否使用 Tooltip    | `boolean`                                                                                                   | -                   |
| tooltipProps   | Tooltip 屬性      | `TooltipProps`                                                                                              | -                   |
| onChange       | 計數更改後的回調函數      | `(count?: number) => void`                                                                                  | -                   |
| showZero       | 是否顯示零計數         | `boolean`                                                                                                   | `true`              |
