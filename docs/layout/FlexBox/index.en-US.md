---
title: FlexBox
toc: content
order: 20
---

## Description

FlexBox component, a flex layout container for alignment.

## Import

```jsx | pure
import {FlexBox} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                                            | Type                                                           | Default          |
|----------------|------------------------------------------------------------------------|----------------------------------------------------------------|------------------|
| clazzPrefix    | The CSS class prefix of the component                                  | `string`                                                       | `'abp-flex-box'` |
| containerClazz | The CSS class name of the container div                                | `string`                                                       | -                |
| containerStyle | The CSS style of the container div                                     | `React.CSSProperties`                                          | -                |
| justifyContent | The space distribution of items along the main axis                    | `React.CSSProperties['justifyContent']`                        | -                |
| justifyItems   | The justifying of items along the main axis                            | `React.CSSProperties['justifyItems']`                          | -                |
| alignContent   | The space distribution of items along the cross axis                   | `React.CSSProperties['alignContent']`                          | -                |
| alignItems     | The justifying of items along the cross axis                           | `React.CSSProperties['alignItems']`                            | -                |
| flex           | How items will grow or shrink to fit the space available               | `React.CSSProperties['flex']`                                  | -                |
| flexBasis      | The initial main size of items on the main axis                        | `React.CSSProperties['flexBasis']`                             | -                |
| flexDirection  | The flex direction of items on the main axis                           | `React.CSSProperties['flexDirection']`                         | -                |
| flexFlow       | The shorthand representation of flex-direction and flex-wrap           | `React.CSSProperties['flexFlow']`                              | -                |
| flexGrow       | The flex grow factor of items on the main axis                         | `React.CSSProperties['flexGrow']`                              | -                |
| flexShrink     | The flex shrink factor of items on the main axis                       | `React.CSSProperties['flexShrink']`                            | -                |
| flexWrap       | Whether items are forced onto one line or can wrap onto multiple lines | `React.CSSProperties['flexWrap']`                              | -                |
| gap            | The gaps between rows and columns                                      | `'small' \| 'middle' \| 'large' \| React.CSSProperties['gap']` | -                |
| boundBorder    | Whether to show the bound border or not                                | `boolean`                                                      | -                |
| boundShadow    | Whether to show the bound shadow or not                                | `boolean`                                                      | -                |
