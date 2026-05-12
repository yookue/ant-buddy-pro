---
title: BorderBox
toc: content
order: 2
---

## 组件说明

BorderBox 可以显示一个带边框的控件。

## 导入组件

```tsx | pure
import {BorderBox} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述              | 类型                    | 默认值                |
|----------------|-----------------|-----------------------|--------------------|
| clazzPrefix    | 组件的 CSS 类名前缀    | `string`              | `'abp-border-box'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`              | -                  |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties` | -                  |
| boundShape     | 边框形状            | `'rect' \| 'circle'`  | `'rect'`           |
| boundShadow    | 是否显示边框阴影        | `boolean`             | -                  |
| borderAll      | 是否全部都有边框        | `boolean`             | -                  |
| borderTop      | 顶部是否有边框         | `boolean`             | `true`             |
| borderBottom   | 底部是否有边框         | `boolean`             | `true`             |
| borderLeft     | 左侧是否有边框         | `boolean`             | `true`             |
| borderRight    | 右侧是否有边框         | `boolean`             | `true`             |
