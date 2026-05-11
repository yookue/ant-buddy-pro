---
title: CodePreview
toc: content
order: 15
---

## 组件说明

CodePreview 是一个用于展示代码预览的组件，可包含一个标题和一段文本，您也可以通过 `children` 属性来完全定制它。

## 导入组件

```tsx | pure
import {CodePreview} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述              | 类型                                                                                      | 默认值                  |
|----------------|-----------------|-----------------------------------------------------------------------------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀    | `string`                                                                                | `'abp-code-preview'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`                                                                                | -                    |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties`                                                                   | -                    |
| preClazz       | pre 节点的 CSS 类名  | `string`                                                                                | -                    |
| preStyle       | pre 节点的 CSS 样式  | `React.CSSProperties`                                                                   | -                    |
| codeClazz      | code 节点的 CSS 类名 | `string`                                                                                | -                    |
| codeStyle      | code 节点的 CSS 样式 | `React.CSSProperties`                                                                   | -                    |
| titleContent   | 标题内容            | `React.ReactNode`                                                                       | -                    |
| titleProps     | 标题属性            | `TitleProps`                                                                            | -                    |
| titleClazz     | 标题的 CSS 类名      | `string`                                                                                | -                    |
| titleStyle     | 标题的 CSS 样式      | `React.CSSProperties`                                                                   | -                    |
| textContent    | 文本内容            | `React.ReactNode`                                                                       | -                    |
| textProps      | 文本属性            | `TextProps`                                                                             | -                    |
| textClazz      | 文本的 CSS 类名      | `string`                                                                                | -                    |
| textStyle      | 文本的 CSS 样式      | `React.CSSProperties`                                                                   | -                    |
| boundBorder    | 是否显示边框          | `boolean`                                                                               | `true`               |
| boundShadow    | 是否显示边框阴影        | `boolean`                                                                               | -                    |
| presetStyle    | 预设样式            | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`       |
