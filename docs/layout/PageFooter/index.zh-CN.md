---
title: PageFooter
toc: content
order: 40
---

## 组件说明

与 [Ant ProComponents](https://procomponents.ant.design) 的 [GlobalFooter](https://github.com/ant-design/pro-components/tree/master/packages/layout/src/components/GlobalFooter/index.tsx) 类似, 但支持更多的自定义 CSS 样式。

## 导入组件

```tsx | pure
import {PageFooter} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述               | 类型                             | 默认值                 |
|----------------|------------------|--------------------------------|---------------------|
| clazzPrefix    | 组件的 CSS 类名前缀     | `string`                       | `'abp-page-footer'` |
| containerClazz | 页脚 div 的 CSS 类名  | `string`                       | -                   |
| containerStyle | 页脚 div 的 CSS 样式  | `React.CSSProperties`          | -                   |
| vesselClazz    | 子容器 div 的 CSS 类名 | `string`                       | -                   |
| vesselStyle    | 子容器 div 的 CSS 样式 | `React.CSSProperties`          | -                   |
| links          | 超链接数组            | `HyperlinkProps[]`             | -                   |
| linksClazz     | 超链接 div 的 CSS 类名 | `string`                       | -                   |
| linksStyle     | 超链接 div 的 CSS 样式 | `React.CSSProperties`          | -                   |
| linkShareClazz | 超链接的通用 CSS 类名    | `string`                       | -                   |
| linkShareStyle | 超链接的通用 CSS 样式    | `React.CSSProperties`          | -                   |
| copyright      | 版权 div 的内容       | `React.ReactNode`              | -                   |
| copyrightIcon  | 是否显示版权图标         | `boolean`                      | `true`              |
| copyrightClazz | 版权 div 的 CSS 类名  | `string`                       | -                   |
| copyrightStyle | 版权 div 的 CSS 样式  | `React.CSSProperties`          | -                   |
| widthBlock     | 是否匹配父节点的宽度       | `boolean`                      | -                   |
| presetStyle    | 预设样式             | `'default' \| 'half' \| false` | `'default'`         |
