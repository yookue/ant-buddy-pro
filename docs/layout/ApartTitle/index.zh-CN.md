---
title: ApartTitle
toc: content
order: 0
---

## 组件说明

ApartTitle 组件，可展示一个带有装饰图标的标题栏，用于分割页面区域。

## Import

```tsx | pure
import {ApartTitle} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述               | 类型                                                                            | 默认值                 |
|----------------|------------------|-------------------------------------------------------------------------------|---------------------|
| clazzPrefix    | 组件的 CSS 类名前缀     | `string`                                                                      | `'abp-apart-title'` |
| containerClazz | 容器 div 的 CSS 类名  | `string`                                                                      | -                   |
| containerStyle | 容器 div 的 CSS 样式  | `React.CSSProperties`                                                         | -                   |
| ornament       | 装饰 span 的内容      | `React.ReactNode`                                                             | -                   |
| ornamentClazz  | 装饰 span 的 CSS 类名 | `string`                                                                      | -                   |
| ornamentStyle  | 装饰 span 的 CSS 样式 | `React.CSSProperties`                                                         | -                   |
| ornamentPos    | 装饰 span 的位置      | `'before' \| 'after' \| false`                                                | `'before'`          |
| content        | 标题 span 的内容      | `React.ReactNode`                                                             | -                   |
| contentClazz   | 标题 span 的 CSS 类名 | `string`                                                                      | -                   |
| contentStyle   | 标题 span 的 CSS 样式 | `React.CSSProperties`                                                         | -                   |
| boundBorder    | 外边界是否有边框         | `boolean`                                                                     | `true`              |
| widthBlock     | 是否匹配父节点的宽度       | `boolean`                                                                     | -                   |
| presetStyle    | 预设样式             | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| 'classic' \| false` | `'default'`         |
