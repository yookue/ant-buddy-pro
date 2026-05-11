---
title: LocaleTextarea
toc: content
order: 12
---

## Description

LocaleTextarea, provides a textarea with a tabs that can switch different locales, aiming to support multilingual capability for your application.

## Import

```tsx | pure
import {LocaleTextarea} from '@unikue/ant-buddy-pro';
```

## Example

> Each `switchTextareaProps` item has its own input properties, thus you can control them as you wish, such as marking someone of them to `disabled` or `readonly`, and so on.

> `switchQuickTags` can custom language input items quickly.

### Props with field validation

<code src="./demo-1.en-US.tsx"></code>

### Props without field validation

<code src="./demo-2.en-US.tsx"></code>

### Tags with field validation

<code src="./demo-3.en-US.tsx"></code>

### Tags without field validation, disabled

<code src="./demo-4.en-US.tsx"></code>

## Properties

| Property            | Description                                                                                  | Type                    | Default                 |
|---------------------|----------------------------------------------------------------------------------------------|-------------------------|-------------------------|
| clazzPrefix         | The CSS class prefix of the component                                                        | `string`                | `'abp-locale-textarea'` |
| containerClazz      | The CSS class name of the container div                                                      | `string`                | -                       |
| containerStyle      | The CSS style of the container div                                                           | `React.CSSProperties`   | -                       |
| tabsProps           | The properties of the tabs                                                                   | `MixinTabsProps`        | -                       |
| multilingual        | Whether to enable multilingual or not                                                        | `boolean`               | `true`                  |
| proField            | Whether to use ProFormField instead of Antd for the entry field                              | `boolean`               | `true`                  |
| locale              | The locale of the component, e.g. 'en_US'                                                    | `string`                | -                       |
| localeProps         | The props of locale                                                                          | `IntlLocaleProps`       | -                       |
| switchTextareaProps | The properties of locale items (Higher priority than `switchQuickTags`, more customizations) | `SwitchTextareaProps[]` | -                       |
| switchQuickTags     | The tag of locale items (Lower priority than `switchTextareaProps`, more convenient)         | `string[]`              | -                       |
| switchShareProps    | The sharing properties of the locale items                                                   | `SwitchShareProps`      | -                       |
| switchCloneProps    | The clone properties of the locale items                                                     | `SwitchCloneProps`      | -                       |
| switchProField      | Whether to use ProFormField instead of Antd for the locale items                             | `boolean`               | `true`                  |
| forceRender         | Whether to force render the tab content                                                      | `boolean`               | `true`                  |
