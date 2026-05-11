---
title: TooltipField
toc: content
order: 80
---

## 组件说明

TooltipField 用于显示一个带提示的字段。

## 导入组件

```tsx | pure
import {TooltipField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述                  | 类型                                                        | 默认值                   |
|----------------|---------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀        | `string`                                                  | `'abp-tooltip-field'` |
| containerClazz | 容器 div 的 CSS 类名     | `string`                                                  | -                     |
| containerStyle | 容器 div 的 CSS 样式     | `React.CSSProperties`                                     | -                     |
| field          | 字段节点                | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| fieldClazz     | 包裹字段节点 div 的 CSS 类名 | `string`                                                  | -                     |
| fieldStyle     | 包裹字段节点 div 的 CSS 样式 | `React.CSSProperties`                                     | -                     |
| tooltipCtrl    | 是否使用 Tooltip        | `boolean`                                                 | -                     |
| tooltipProps   | Tooltip 属性          | `TooltipProps`                                            | -                     |
| wrapContainer  | 是否包裹容器 div          | `boolean`                                                 | `true`                |
| wrapField      | 是否包裹字段节点            | `boolean`                                                 | `true`                |
