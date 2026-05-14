---
title: CollapseForm
toc: content
order: 3
---

## Description

CollapseForm, provides a form with collapse capability.

The typical scenario is, replying to someone under a comment.

## Import

```tsx | pure
import {CollapseForm} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property         | Description                                                  | Type                                                       | Default               |
|------------------|--------------------------------------------------------------|------------------------------------------------------------|-----------------------|
| clazzPrefix      | The CSS class prefix of the component                        | `string`                                                   | `'abp-collapse-form'` |
| autoEntryCursor  | Whether to change the cursor automatically                   | `boolean`                                                  | -                     |
| closedEntry      | The entry element when form closed                           | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| closedEntryClazz | The CSS class name of the entry element div when form closed | `string`                                                   | -                     |
| closedEntryStyle | The CSS style of the entry element div when form closed      | `React.CSSProperties`                                      | -                     |
| openedEntry      | The entry element when form opened                           | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| openedEntryClazz | The CSS class name of the entry element div when form opened | `string`                                                   | -                     |
| openedEntryStyle | The CSS style of the entry element div when form opened      | `React.CSSProperties`                                      | -                     |
| formContent      | The form content                                             | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| formContentClazz | The CSS class name of the form content div                   | `string`                                                   | -                     |
| formContentStyle | The CSS style of the form content div                        | `React.CSSProperties`                                      | -                     |
| formProps        | The props of form                                            | `Omit<ProFormProps, 'formRef'> \| Omit<FormProps, 'form'>` | -                     |
| closeOnBlur      | Whether to close the form after form blur                    | `boolean`                                                  | `true`                |
| closeOnFinish    | Whether to close the form after submitting successful        | `boolean`                                                  | `true`                |
| defaultOpen      | Whether the form is default open or not                      | `boolean`                                                  | -                     |
| triggerType      | The trigger type when open the form                          | `'click' \| 'hover'`                                       | `'click'`             |
| proField         | Whether to use ProFormField instead of Antd                  | `boolean`                                                  | `true`                |

## Methods

The following methods can be accessed via `ref`:

| Method     | Parameters | Description              |
|------------|------------|--------------------------|
| getForm    | None       | Get form instance        |
| getFormRef | None       | Get form ref reference   |
| isFormOpen | None       | Check if form is open    |
| openForm   | None       | Open the form            |
| closeForm  | None       | Close the form           |
