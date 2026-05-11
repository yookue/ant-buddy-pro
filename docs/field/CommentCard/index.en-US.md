---
title: CommentCard
toc: content
order: 6
---

## Description

CommentCard is a component that displays comment cards, supporting avatar, author, datetime, content, actions and nested comments.

This component is referenced from Ant Design Compatible's Comment component and has been reimplemented for React 19 and Ant Design v6.

## Import Component

```tsx | pure
import {CommentCard} from '@unikue/ant-buddy-pro';
```

## Usage Examples

<code src="./demo.en-US.tsx"></code>

## Component Properties

| Property         | Description                                      | Type                    | Default                |
|------------------|--------------------------------------------------|-------------------------|------------------------|
| clazzPrefix      | The CSS class prefix of the component            | `string`                | `'abp-comment-card'`   |
| containerClazz   | The CSS class name of the container div          | `string`                | -                      |
| containerStyle   | The CSS style of the container div               | `React.CSSProperties`   | -                      |
| avatar           | The element to display as the comment avatar     | `React.ReactNode`       | -                      |
| author           | The element to display as the comment author     | `React.ReactNode`       | -                      |
| content          | The main content of the comment                  | `React.ReactNode`       | -                      |
| datetime         | A datetime element containing the time           | `React.ReactNode`       | -                      |
| actions          | List of action items rendered below the content  | `React.ReactNode[]`     | -                      |
