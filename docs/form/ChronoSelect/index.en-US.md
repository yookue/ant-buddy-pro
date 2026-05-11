---
title: ChronoSelect
toc: content
order: 3
---

## Description

ChronoSelect, provides a capability that displaying a select box with chrono units, options come from [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html).

## Import

```tsx | pure
import {ChronoSelect} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property    | Description                                 | Type                 | Default                                                                         |
|-------------|---------------------------------------------|----------------------|---------------------------------------------------------------------------------|
| clazzPrefix | The CSS class prefix of the component       | `string`             | `'abp-chrono-select'`                                                           |
| unitTypes   | The unit types                              | `ChronoUintType[]`   | `['millis', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years']` |
| proField    | Whether to use ProFormField instead of Antd | `boolean`            | `true`                                                                          |
| presetStyle | The preset style of the component           | `WithFalse<'addon'>` | -                                                                               |
| locale      | The locale of the component, e.g. 'en_US'   | `string`             | -                                                                               |
| localeProps | The props of locale                         | `IntlLocaleProps`    | -                                                                               |

> Note: Other properties are inherited from ProFormSelect component.
