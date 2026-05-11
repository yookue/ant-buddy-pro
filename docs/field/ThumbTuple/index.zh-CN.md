---
title: ThumbTuple
toc: content
order: 75
---

## 组件说明

ThumbTuple 用于显示两个拇指图标和计数。

典型的应用场景是，显示两个拇指，分别为 `喜欢` 和 `不喜欢`。

## 导入组件

```tsx | pure
import {ThumbTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                | 描述                   | 类型                                              | 默认值                  |
|-------------------|----------------------|-------------------------------------------------|----------------------|
| clazzPrefix       | 组件的 CSS 类名前缀         | `string`                                        | `'abp-thumb-tuple'`  |
| containerClazz    | 容器 div 的 CSS 类名      | `string`                                        | -                    |
| containerStyle    | 容器 div 的 CSS 样式      | `React.CSSProperties`                           | -                    |
| spaceProps        | 间距的属性                | `SpaceProps`                                    | -                    |
| thumbLikeProps    | 喜欢的属性                | `Omit<ThumbToggleProps, 'ref' \| 'actionType'>` | -                    |
| thumbDislikeProps | 不喜欢的属性               | `Omit<ThumbToggleProps, 'ref' \| 'actionType'>` | -                    |
