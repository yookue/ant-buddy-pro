---
title: CipherStrength
toc: content
order: 3
---

## Description

CipherStrength, provides a cipher strength indicator with captions and a progressbar.

## Import

```tsx | pure
import {CipherStrength} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                  | Type                           | Default                 |
|----------------|----------------------------------------------|--------------------------------|-------------------------|
| clazzPrefix    | The CSS class prefix of the component        | `string`                       | `'abp-cipher-strength'` |
| containerClazz | The CSS class name of the container div      | `string`                       | -                       |
| containerStyle | The CSS style of the container div           | `React.CSSProperties`          | -                       |
| watchField     | The field name to watch                      | `string`                       | `'password'`            |
| progressClazz  | The CSS class name of the progress div       | `string`                       | -                       |
| progressStyle  | The CSS style of the progress div            | `React.CSSProperties`          | -                       |
| captionClazz   | The CSS class name of the caption div        | `string`                       | -                       |
| captionStyle   | The CSS style of the caption div             | `React.CSSProperties`          | -                       |
| captionPos     | The position of caption                      | `'before' \| 'after' \| false` | `'after'`               |
| colorProps     | The props of color                           | `StrokeColorProps`             | -                       |
| widthBlock     | Whether to match the width of parent element | `boolean`                      | -                       |
| locale         | The locale of the component, e.g. 'en_US'    | `string`                       | -                       |
| localeProps    | The props of locale                          | `IntlLocaleProps`              | -                       |
