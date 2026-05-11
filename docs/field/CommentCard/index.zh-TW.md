---
title: CommentCard
toc: content
order: 6
---

## 組件說明

CommentCard 是一個可以顯示評論卡片的控件，支持頭像、作者、時間、內容、操作項和嵌套評論。

該組件參考了 Ant Design Compatible 的 Comment 組件，針對 React 19 和 Ant Design v6 進行了重新實現。

## 導入組件

```tsx | pure
import {CommentCard} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                    | 默認值                  |
|----------------|-----------------|-----------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`              | `'abp-comment-card'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties` | -                    |
| avatar         | 顯示為評論頭像的元素      | `React.ReactNode`     | -                    |
| author         | 顯示為評論作者的元素      | `React.ReactNode`     | -                    |
| content        | 評論的主要內容         | `React.ReactNode`     | -                    |
| datetime       | 包含要顯示時間的日期時間元素  | `React.ReactNode`     | -                    |
| actions        | 在評論內容下方呈現的操作項列表 | `React.ReactNode[]`   | -                    |
