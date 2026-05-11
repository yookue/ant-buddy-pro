---
title: PageFooter
toc: content
order: 40
---

## Description

Similar to [GlobalFooter](https://github.com/ant-design/pro-components/tree/master/packages/layout/src/components/GlobalFooter/index.tsx) of [Ant ProComponents](https://procomponents.ant.design), with more customization for CSS classes and styles.

## Import

```tsx | pure
import {PageFooter} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                                     | Type                           | Default             |
|----------------|-----------------------------------------------------------------|--------------------------------|---------------------|
| clazzPrefix    | The CSS class prefix of the component                           | `string`                       | `'abp-page-footer'` |
| containerClazz | The CSS class name of the footer div                            | `string`                       | -                   |
| containerStyle | The CSS style of the footer div                                 | `React.CSSProperties`          | -                   |
| vesselClazz    | The CSS class names of the vessel div that under the footer div | `string`                       | -                   |
| vesselStyle    | The CSS style of the vessel div that under the footer div       | `React.CSSProperties`          | -                   |
| links          | The hyperlinks array                                            | `HyperlinkProps[]`             | -                   |
| linksClazz     | The CSS class name of the hyperlinks div                        | `string`                       | -                   |
| linksStyle     | The CSS style of the hyperlinks div                             | `React.CSSProperties`          | -                   |
| linkShareClazz | The sharing CSS class name of the hyperlinks                    | `string`                       | -                   |
| linkShareStyle | The sharing CSS style of the hyperlinks                         | `React.CSSProperties`          | -                   |
| copyright      | The copyright content                                           | `React.ReactNode`              | -                   |
| copyrightIcon  | Whether to display the copyright icon                           | `boolean`                      | `true`              |
| copyrightClazz | The CSS class name of the copyright div                         | `string`                       | -                   |
| copyrightStyle | The CSS style of the copyright div                              | `React.CSSProperties`          | -                   |
| widthBlock     | Whether to match the width of parent element                    | `boolean`                      | -                   |
| presetStyle    | The preset style of the component                               | `'default' \| 'half' \| false` | `'default'`         |
