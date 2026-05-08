---
title: ThumbToggle
toc: content
order: 70
---

## 組件說明

ThumbToggle 用於顯示壹個帶計數的拇指圖標，並可以切換。

## 導入組件

```jsx | pure
import {ThumbToggle} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述                 | 類型                                                                                                       | 預設值                  |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴       | `string`                                                                                                 | `'abp-thumb-toggle'` |
| containerClazz | 容器 div 的 CSS 類名    | `string`                                                                                                 | -                    |
| containerStyle | 容器 div 的 CSS 樣式    | `React.CSSProperties`                                                                                    | -                    |
| actionType     | 動作類型               | `'like' \| 'dislike' \| 'favorite'`                                                                      | `'like'`             |
| checkable      | 是否可選中圖標            | `boolean`                                                                                                | `false`              |
| checkedClazz   | 圖標選中時的 CSS 類名      | `string`                                                                                                 | -                    |
| checkedStyle   | 圖標選中時的 CSS 樣式      | `React.CSSProperties`                                                                                    | -                    |
| uncheckedClazz | 圖標未選中時的 CSS 類名     | `string`                                                                                                 | -                    |
| uncheckedStyle | 圖標未選中時的 CSS 樣式     | `React.CSSProperties`                                                                                    | -                    |
| count          | 計數                 | `number`                                                                                                 | `0`                  |
| countProps     | 計數的屬性              | `Omit<BadgeProps, 'color' \| 'count' \| 'dot' \| 'showZero' \| 'size' \| 'status' \| 'text'>`            | -                    |
| layout         | 圖標和內容的布局樣式         | `'horizontal' \| 'vertical'`                                                                             | `'horizontal'`       |
| showCount      | 是否顯示計數             | `boolean`                                                                                                | `true`               |
| tooltipCtrl    | 是否使用 Tooltip       | `boolean`                                                                                                | -                    |
| tooltipProps   | Tooltip 屬性         | `Omit<TooltipProps, 'title'>`                                                                            | -                    |
| onChange       | 選中狀態或計數更改後的回調函數    | `(checked?: boolean, count?: number) => void`                                                            | -                    |
| onToggle       | 計數的觸發更新函數          | `(checked?: boolean, count?: number) => boolean \| number \| void \| Promise<boolean \| number \| void>` | -                    |
| locale         | 組件的語言，e.g. 'zh_TW' | `string`                                                                                                 | -                    |
| localeProps    | 多語言屬性              | `IntlLocaleProps`                                                                                        | -                    |
| checked        | 圖標是否選中             | `boolean`                                                                                                | -                    |
| defaultChecked | 默認選中狀態             | `boolean`                                                                                                | -                    |
| showZero       | 是否顯示零計數            | `boolean`                                                                                                | `true`               |
