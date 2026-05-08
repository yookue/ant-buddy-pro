---
title: CodePreview
toc: content
order: 15
---

## Description

CodePreview component, provides a simple segment for displaying code snippet, with a title and a text, and also you can customize it completely with the `children` prop.

## Import

```jsx | pure
import {CodePreview} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                             | Type                                                                                    | Default              |
|----------------|-----------------------------------------|-----------------------------------------------------------------------------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component   | `string`                                                                                | `'abp-code-preview'` |
| containerClazz | The CSS class name of the container div | `string`                                                                                | -                    |
| containerStyle | The CSS style of the container div      | `React.CSSProperties`                                                                   | -                    |
| preClazz       | The CSS class name of the pre node      | `string`                                                                                | -                    |
| preStyle       | The CSS style of the pre node           | `React.CSSProperties`                                                                   | -                    |
| codeClazz      | The CSS class name of the code node     | `string`                                                                                | -                    |
| codeStyle      | The CSS style of the code node          | `React.CSSProperties`                                                                   | -                    |
| titleContent   | The content of the title                | `React.ReactNode`                                                                       | -                    |
| titleProps     | The properties of the title             | `TitleProps`                                                                            | -                    |
| titleClazz     | The CSS class name of the title         | `string`                                                                                | -                    |
| titleStyle     | The CSS style of the title              | `React.CSSProperties`                                                                   | -                    |
| textContent    | The content of the text                 | `React.ReactNode`                                                                       | -                    |
| textProps      | The properties of the text              | `TextProps`                                                                             | -                    |
| textClazz      | The CSS class name of the text          | `string`                                                                                | -                    |
| textStyle      | The CSS style of the text               | `React.CSSProperties`                                                                   | -                    |
| boundBorder    | Whether to show the bound border or not | `boolean`                                                                               | `true`               |
| boundShadow    | Whether to show the bound shadow or not | `boolean`                                                                               | -                    |
| presetStyle    | The preset style of the component       | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`       |
