---
title: CompactTuple
toc: content
order: 3
---

## 组件说明

CompactTuple 可以显示紧凑间距模式下的一个控件和一个附加节点。

典型的应用场景是，显示一个证件类型的日期选取框和一个切换/复选框，用于标记证件是长期有效。

在这种情况下，日期选取框是有边框的，但切换/复选框没有。此控件可以给切换/复选框加上边框，以便统一用户 UI。

## 导入组件

```tsx | pure
import {CompactTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                | 描述                  | 类型                                                        | 默认值                   |
|-------------------|---------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix       | 组件的 CSS 类名前缀        | `string`                                                  | `'abp-compact-tuple'` |
| containerClazz    | 容器 div 的 CSS 类名     | `string`                                                  | -                     |
| containerStyle    | 容器 div 的 CSS 样式     | `React.CSSProperties`                                     | -                     |
| spaceCompactProps | 紧凑间距的属性             | `SpaceCompactProps`                                       | `{block: true}`       |
| field             | 字段节点                | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| fieldClazz        | 包裹字段节点 div 的 CSS 类名 | `string`                                                  | -                     |
| fieldStyle        | 包裹字段节点 div 的 CSS 样式 | `React.CSSProperties`                                     | -                     |
| fieldBorder       | 字段节点是否有边框           | `boolean`                                                 | -                     |
| addon             | 附加节点                | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| addonClazz        | 包裹附加节点 div 的 CSS 类名 | `string`                                                  | -                     |
| addonStyle        | 包裹附加节点 div 的 CSS 样式 | `React.CSSProperties`                                     | -                     |
| addonBorder       | 附加节点是否有边框           | `boolean`                                                 | -                     |
| addonMarginLeft   | 附加节点的左外边距           | `boolean \| number`                                       | -                     |
| addonMarginRight  | 附加节点的右外边距           | `boolean \| number`                                       | -                     |
| addonPos          | 附属节点位置              | `'before' \| 'after' \| false`                            | `'after'`             |
| readonlyBorder    | 只读模式下是否渲染边框         | `boolean`                                                 | `false`               |
| widthBlock        | 是否匹配父节点的宽度          | `boolean`                                                 | -                     |
| presetStyle       | 预设样式                | `'field-prior' \| 'addon-prior' \| false`                 | `'field-prior'`       |
