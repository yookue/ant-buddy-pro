---
title: ThumbToggle
toc: content
order: 70
---

## 组件说明

ThumbToggle 用于显示一个带计数的拇指图标，并可以切换。

## 导入组件

```jsx | pure
import {ThumbToggle} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述                  | 类型                                                                                                       | 默认值                  |
|----------------|---------------------|----------------------------------------------------------------------------------------------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀        | `string`                                                                                                 | `'abp-thumb-toggle'` |
| containerClazz | 容器 div 的 CSS 类名     | `string`                                                                                                 | -                    |
| containerStyle | 容器 div 的 CSS 样式     | `React.CSSProperties`                                                                                    | -                    |
| actionType     | 动作类型                | `'like' \| 'dislike' \| 'favorite'`                                                                      | `'like'`             |
| checkable      | 是否可选中图标             | `boolean`                                                                                                | `false`              |
| checkedClazz   | 图标选中时的 CSS 类名       | `string`                                                                                                 | -                    |
| checkedStyle   | 图标选中时的 CSS 样式       | `React.CSSProperties`                                                                                    | -                    |
| uncheckedClazz | 图标未选中时的 CSS 类名      | `string`                                                                                                 | -                    |
| uncheckedStyle | 图标未选中时的 CSS 样式      | `React.CSSProperties`                                                                                    | -                    |
| count          | 计数                  | `number`                                                                                                 | `0`                  |
| countProps     | 计数的属性               | `Omit<BadgeProps, 'color' \| 'count' \| 'dot' \| 'showZero' \| 'size' \| 'status' \| 'text'>`            | -                    |
| layout         | 图标和内容的布局样式          | `'horizontal' \| 'vertical'`                                                                             | `'horizontal'`       |
| showCount      | 是否显示计数              | `boolean`                                                                                                | `true`               |
| tooltipCtrl    | 是否使用 Tooltip        | `boolean`                                                                                                | -                    |
| tooltipProps   | Tooltip 属性          | `Omit<TooltipProps, 'title'>`                                                                            | -                    |
| onChange       | 选中状态或计数更改后的回调函数     | `(checked?: boolean, count?: number) => void`                                                            | -                    |
| onToggle       | 计数的触发更新函数           | `(checked?: boolean, count?: number) => boolean \| number \| void \| Promise<boolean \| number \| void>` | -                    |
| locale         | 组件的语言, e.g. 'zh_CN' | `string`                                                                                                 | -                    |
| localeProps    | 多语言属性               | `IntlLocaleProps`                                                                                        | -                    |
| checked        | 图标是否选中              | `boolean`                                                                                                | -                    |
| defaultChecked | 默认选中状态              | `boolean`                                                                                                | -                    |
| showZero       | 是否显示零计数             | `boolean`                                                                                                | `true`               |
