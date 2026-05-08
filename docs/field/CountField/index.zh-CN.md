---
title: CountField
toc: content
---

## 组件说明

CountField 用于显示一个带计数的字段。

## 导入组件

```jsx | pure
import {CountField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述              | 类型                                                                                                          | 默认值                 |
|----------------|-----------------|-------------------------------------------------------------------------------------------------------------|---------------------|
| clazzPrefix    | 组件的 CSS 类名前缀    | `string`                                                                                                    | `'abp-count-field'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`                                                                                                    | -                   |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties`                                                                                       | -                   |
| field          | 字段节点            | `React.ReactNode \| (() => React.ReactNode \| undefined)`                                                   | -                   |
| count          | 计数              | `number`                                                                                                    | `0`                 |
| countProps     | 计数的属性           | `Omit<BadgeProps, 'children' \| 'color' \| 'count' \| 'dot' \| 'showZero' \| 'size' \| 'status' \| 'text'>` | -                   |
| layout         | 标签和内容的布局样式      | `'horizontal' \| 'vertical'`                                                                                | `'horizontal'`      |
| showCount      | 是否显示计数          | `boolean`                                                                                                   | `true`              |
| spaceSize      | 间距大小            | `SpaceSize`                                                                                                 | -                   |
| tooltipCtrl    | 是否使用 Tooltip    | `boolean`                                                                                                   | -                   |
| tooltipProps   | Tooltip 属性      | `TooltipProps`                                                                                              | -                   |
| onChange       | 计数更改后的回调函数      | `(count?: number) => void`                                                                                  | -                   |
| showZero       | 是否显示零计数         | `boolean`                                                                                                   | `true`              |
