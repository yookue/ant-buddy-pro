---
title: BorderBox
toc: content
order: 2
---

## Description

BorderBox component, can display a box with borders.

## Import

```tsx | pure
import {BorderBox} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                    | Type                  | Default             |
|----------------|------------------------------------------------|-----------------------|---------------------|
| clazzPrefix    | The CSS class prefix of the component          | `string`              | `'abp-border-box'`  |
| containerClazz | The CSS class name of the container div        | `string`              | -                   |
| containerStyle | The CSS style of the container div             | `React.CSSProperties` | -                   |
| borderTop      | Whether to border top or not                   | `boolean`             | `true`              |
| borderRight    | Whether to border right or not                 | `boolean`             | `true`              |
| borderBottom   | Whether to border bottom or not                | `boolean`             | `true`              |
| borderLeft     | Whether to border left or not                  | `boolean`             | `true`              |
| boundShadow    | Whether to show the bound shadow or not        | `boolean`             | -                   |
