---
title: CommentCard
toc: content
order: 3
---

## 组件说明

CommentCard 是一个可以显示评论卡片的控件，支持头像、作者、时间、内容、操作项和嵌套评论。

该组件参考了 Ant Design Compatible 的 Comment 组件，针对 React 19 和 Ant Design v6 进行了重新实现。

## 导入组件

```tsx | pure
import {CommentCard} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述              | 类型                    | 默认值                  |
|----------------|-----------------|-----------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀    | `string`              | `'abp-comment-card'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties` | -                    |
| avatar         | 显示为评论头像的元素      | `React.ReactNode`     | -                    |
| author         | 显示为评论作者的元素      | `React.ReactNode`     | -                    |
| content        | 评论的主要内容         | `React.ReactNode`     | -                    |
| datetime       | 包含要显示时间的日期时间元素  | `React.ReactNode`     | -                    |
| actions        | 在评论内容下方呈现的操作项列表 | `React.ReactNode[]`   | -                    |
