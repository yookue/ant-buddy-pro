---
title: CornerStamp
toc: content
order: 15
---

## 组件说明

CornerStamp 是一个可以显示带角标的控件。

## 导入组件

```jsx | pure
import {CornerStamp} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述                  | 类型                                                         | 默认值                  |
|----------------|---------------------|------------------------------------------------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀        | `string`                                                   | `'abp-corner-stamp'` |
| containerClazz | 容器 div 的 CSS 类名     | `string`                                                   | -                    |
| containerStyle | 容器 div 的 CSS 样式     | `React.CSSProperties`                                      | -                    |
| field          | 字段节点                | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| fieldClazz     | 包裹字段节点 div 的 CSS 类名 | `string`                                                   | -                    |
| fieldStyle     | 包裹字段节点 div 的 CSS 样式 | `React.CSSProperties`                                      | -                    |
| addon          | 附加节点                | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| addonClazz     | 包裹附加节点 div 的 CSS 类名 | `string`                                                   | -                    |
| addonStyle     | 包裹附加节点 div 的 CSS 样式 | `React.CSSProperties`                                      | -                    |
| rotateAddon    | 是否旋转附加节点            | `boolean`                                                  | `true`               |
| placement      | 角标的位置               | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'`         |
| size           | 组件的边长               | `number`                                                   | `16`                 |
| zIndex         | 组件的 Z 轴堆叠顺序         | `number`                                                   | `9`                  |
| color          | 角标的颜色               | `string`                                                   | `'green'`            |
