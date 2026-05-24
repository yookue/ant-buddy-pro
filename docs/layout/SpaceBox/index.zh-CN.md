---
title: SpaceBox
toc: content
order: 19
---

## 组件说明

与 [Ant Design](https://ant.design) 的 [Space](https://ant.design/components/space) 组件类似，`SpaceBox` 用于提供内间距包裹子组件。
但不同的是，`Space` 用于间隔两个或两个以上的组件，`SpaceBox` 可用于间隔任意数量的子组件，哪怕只有一个子组件。

## 导入组件

```tsx | pure
import {SpaceBox} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述              | 类型                    | 默认值               |
|----------------|-----------------|-----------------------|-------------------|
| clazzPrefix    | 组件的 CSS 类名前缀    | `string`              | `'abp-space-box'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`              | -                 |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties` | -                 |
| boundBorder    | 外边界是否有边框        | `boolean`             | -                 |
| boundPadding   | 外边界是否填充内边距      | `boolean`             | `true`            |
| widthBlock     | 是否匹配父节点的宽度      | `boolean`             | -                 |

> 注意: 其他属性继承自 Ant Design 的 <a href="https://ant.design/components/space" target="_blank">Space</a> 组件。
