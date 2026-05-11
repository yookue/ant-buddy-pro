---
title: LabelField
toc: content
order: 45
---

## 组件说明

LabelField 可以显示一个带标签的控件。

## 导入组件

```tsx | pure
import {LabelField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                 | 描述               | 类型                                                        | 默认值                 |
|--------------------|------------------|-----------------------------------------------------------|---------------------|
| clazzPrefix        | 组件的 CSS 类名前缀     | `string`                                                  | `'abp-label-field'` |
| containerClazz     | 容器 div 的 CSS 类名  | `string`                                                  | -                   |
| containerStyle     | 容器 div 的 CSS 样式  | `React.CSSProperties`                                     | -                   |
| layout             | 标签和内容的布局样式       | `'horizontal' \| 'vertical'`                              | `'horizontal'`      |
| label              | 标签节点             | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                   |
| labelClazz         | 标签的 CSS 类名       | `string`                                                  | -                   |
| labelStyle         | 标签的 CSS 样式       | `React.CSSProperties`                                     | -                   |
| colon              | 标签和内容之间的分隔符      | `React.ReactNode`                                         | `':'`               |
| labelColon         | 需要显示分隔符          | `boolean`                                                 | `表单上下文为水平布局'`       |
| field              | 字段节点             | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                   |
| fieldClazz         | 字段节点的 CSS 类名     | `string`                                                  | -                   |
| fieldStyle         | 字段节点的 CSS 样式     | `React.CSSProperties`                                     | -                   |
| spaceSize          | 间距大小             | `SpaceSize`                                               | -                   |
| required           | 是否为必填字段          | `boolean`                                                 | -                   |
| tooltip            | 提示框的内容           | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                   |
| widthBlock         | 是否匹配父节点的宽度       | `boolean`                                                 | -                   |
| hideLabelWhenEmpty | 当标签为空时是否隐藏标签和分隔符 | `boolean`                                                 | -                   |
| hideFieldWhenEmpty | 当内容为空时是否隐藏内容     | `boolean`                                                 | -                   |
| presetStyle        | 预设样式             | `'label-prior' \| 'field-prior' \| false`                 | `'field-prior'`     |
