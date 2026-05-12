---
title: StretchInput
toc: content
order: 19
---

## 组件说明

StretchInput，提供了一个可以动态拉伸的文本框。

典型的应用场景是，显示一个小的搜索框或搜索图标，当点击它时拉伸显示它。

## 导入组件

```tsx | pure
import {StretchInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性              | 说明                   | 类型                            | 默认值                   |
|-----------------|----------------------|-------------------------------|-----------------------|
| clazzPrefix     | 组件的 CSS 类名前缀         | `string`                      | `'abp-stretch-input'` |
| containerClazz  | 容器 div 的 CSS 类名      | `string`                      | -                     |
| containerStyle  | 容器 div 的 CSS 样式      | `React.CSSProperties`         | -                     |
| miniature       | 文本框折叠（失去焦点）时的替代节点内容  | `React.ReactNode`             | -                     |
| stretchClazz    | 拉伸状态时的 CSS 类名        | `string`                      | -                     |
| stretchStyle    | 拉伸状态时的 CSS 样式        | `React.CSSProperties`         | -                     |
| triggerType     | 当需要拉伸已折叠的 DOM 时的触发方式 | `'click' \| 'hover'`          | `'click'`             |
| proField        | 是否使用 ProFormField 控件 | `boolean`                     | -                     |
| onStretchChange | 拉伸状态变化时的回调函数         | `(stretch?: boolean) => void` | -                     |
