---
title: BadgeRibbon
toc: content
---

## 组件说明

BadgeRibbon 组件可以显示一个缎带。

与 [Ant Design](https://ant.design) 的 [Badge](https://ant.design/components/badge/#components-badge-demo-ribbbon) 类似，但不同的是，`BadgeRibbon` 提供了一个选项，当属性 `text` 为空时是否渲染缎带。

## 导入组件

```jsx | pure
import {BadgeRibbon} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述              | 类型                    | 默认值                  |
|----------------|-----------------|-----------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀    | `string`              | `'abp-badge-ribbon'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties` | -                    |
| transparent    | 是否透明色           | `boolean`             | -                    |

> 注：其他属性继承自 Ant Design 的 <a href="https://ant.design/components/badge" target="_blank">Badge.Ribbon</a> 组件。
