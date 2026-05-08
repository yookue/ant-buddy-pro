---
title: ThumbTuple
toc: content
order: 75
---

## Description

ThumbTuple component, can display two thumbs with counts.

The typical scenario is, displaying two thumbs which acted as `like` and `dislike`.

## Import

```jsx | pure
import {ThumbTuple} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property          | Description                             | Type                                            | Default             |
|-------------------|-----------------------------------------|-------------------------------------------------|---------------------|
| clazzPrefix       | The CSS class prefix of the component   | `string`                                        | `'abp-thumb-tuple'` |
| containerClazz    | The CSS class name of the container div | `string`                                        | -                   |
| containerStyle    | The CSS style of the container div      | `React.CSSProperties`                           | -                   |
| spaceProps        | The props of the space                  | `SpaceProps`                                    | -                   |
| thumbLikeProps    | The props of liking                     | `Omit<ThumbToggleProps, 'ref' \| 'actionType'>` | -                   |
| thumbDislikeProps | The props of disliking                  | `Omit<ThumbToggleProps, 'ref' \| 'actionType'>` | -                   |
