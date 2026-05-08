---
title: TagInput
toc: content
order: 95
---

## Description

TagInput, provides some tags with a text input box with addable capability.

## Import

```jsx | pure
import {TagInput} from '@unikue/ant-buddy-pro';
```

## Example

### Initialize With Props

<code src="./demo-1.en-US.tsx"></code>

### Initialize With Form

<code src="./demo-2.en-US.tsx"></code>

## Properties

| Property            | Description                                     | Type                                                                                                           | Default           |
|---------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------|
| clazzPrefix         | The CSS class prefix of the component           | `string`                                                                                                       | `'abp-tag-input'` |
| containerClazz      | The CSS class name of the container div         | `string`                                                                                                       | -                 |
| containerStyle      | The CSS style of the container div              | `React.CSSProperties`                                                                                          | -                 |
| fieldRef            | The ref of the component                        | `React.Ref<TagInputRef \| null \| undefined>`                                                                  | -                 |
| request             | The remote request                              | `(params?: Record<string, any>, props?: Record<string, any>) => Promise<(string \| number \| TextTagProps)[]>` | -                 |
| requestOptionPlace  | Whether to keep the data when using request     | `'before' \| 'after' \| 'override' \| false`                                                                   | -                 |
| fulfilTagItems      | The props or content of the fulfil tags         | `(string \| number \| TextTagProps)[]`                                                                         | -                 |
| fulfilTagProps      | The shared props of the fulfil tags             | `Omit<TagProps, 'children'>`                                                                                   | -                 |
| addable             | Whether the tag is addable                      | `boolean`                                                                                                      | `false`           |
| addingInputProps    | The props of the adding input                   | `AddingInputProps`                                                                                             | -                 |
| addingTagProps      | The props of the adding tag                     | `TagProps`                                                                                                     | -                 |
| compactMargin       | Whether to use compact margin                   | `boolean`                                                                                                      | -                 |
| tweenOneAnim        | Whether the tween-one animation is enabled      | `boolean`                                                                                                      | `true`            |
| tweenOneProps       | The props of the tween-one animation            | `TweenOneGroupProps`                                                                                           | -                 |
| warnExists          | Whether to warn if the tag already exists       | `boolean`                                                                                                      | `true`            |
| proField            | Whether to use ProFormField instead of Antd     | `boolean`                                                                                                      | `true`            |
| onTagContentsChange | The callback function when tag contents changed | `(contents?: (string \| number)[]) => void`                                                                    | -                 |
| locale              | The locale of the component                     | `string`                                                                                                       | -                 |
| localeProps         | The props of locale                             | `IntlLocaleProps`                                                                                              | -                 |
