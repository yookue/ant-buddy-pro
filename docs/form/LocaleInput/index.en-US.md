---
title: LocaleInput
toc: content
order: 12
---

## Description

LocaleInput, provides a text input box with a dropdown div of locale input boxes, aiming to support multilingual capability for your application.

## Premise

> You need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default icons:

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## Import

```tsx | pure
import {LocaleInput} from '@unikue/ant-buddy-pro';
```

## Example

> Each `popupInputProps` item has its own input properties, thus you can control them as you wish, such as marking someone of them to `disabled` or `readonly`, and so on.

> `popupQuickTags` can custom language input items quickly.

### Props with field validation

<code src="./demo-1.en-US.tsx"></code>

### Props without field validation

<code src="./demo-2.en-US.tsx"></code>

### Tags with field validation

<code src="./demo-3.en-US.tsx"></code>

### Tags without field validation, disabled

<code src="./demo-4.en-US.tsx"></code>

## Properties

| Property          | Description                                                                                 | Type                                                          | Default                  |
|-------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------|--------------------------|
| clazzPrefix       | The CSS class prefix of the component                                                       | `string`                                                      | `'abp-locale-input'`     |
| addon             | The DOM of the addon for the entry field                                                    | `React.ReactNode \| (() => React.ReactNode \| undefined)`     | `<TranslationOutlined/>` |
| addonPos          | The position of the addon for the entry field                                               | `'before' \| 'after' \| false`                                | `'after'`                |
| defaultOpen       | Whether the dropdown div is default open or not                                             | `boolean`                                                     | -                        |
| triggerProps      | The properties of the dropdown div                                                          | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>` | -                        |
| multilingual      | Whether to enable multilingual or not                                                       | `boolean`                                                     | `true`                   |
| locale            | The locale of the component, e.g. 'en_US'                                                   | `string`                                                      | -                        |
| popupInputProps   | The properties of locale items (Higher priority than `popupQuickTags`, more customizations) | `PopupInputProps[]`                                           | -                        |
| popupQuickTags    | The tag of locale items (Lower priority than `popupInputProps`, more convenient)            | `string[]`                                                    | -                        |
| popupTagPos       | The position of language tags for the locale items                                          | `'before' \| 'after' \| false`                                | `'before'`               |
| popupAddon        | The DOM of language addon for the locale items                                              | `React.ReactNode \| (() => React.ReactNode \| undefined)`     | `<SelectOutlined/>`      |
| popupAddonPos     | The position of language addons for the locale items                                        | `'before' \| 'after' \| false`                                | `'after'`                |
| popupShareProps   | The share properties of the locale items                                                    | `PopupShareProps`                                             | -                        |
| popupCloneProps   | The clone properties of the locale items                                                    | `PopupCloneProps`                                             | -                        |
| popupConfirmProps | The confirm properties of the locale items                                                  | `PopupConfirmProps`                                           | -                        |
| popupProField     | Whether to use ProFormField instead of Antd for the locale items                            | `boolean`                                                     | `true`                   |

> Note: Other properties are inherited from AddonInput component.
