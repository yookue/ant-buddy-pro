---
title: AddonInput
toc: content
order: 0
---

## Description

AddonInput, provides a text input box with addonBefore and addonAfter properties, restoring the addon functionality from earlier versions of Ant Design Input component.

In the new version of Ant Design, the Input component removed the addonBefore and addonAfter properties, recommending the use of Space.Compact mode instead. However, in practical use, directly using Space.Compact is not convenient and lacks the gray background effect of the old version's addon. The AddonInput component implements this using the new Space.Compact while preserving the visual effects and usage pattern of the old version.

The typical scenario is adding fixed prefixes, suffixes, buttons or other content before and after the input box, such as adding protocol prefix and domain suffix for URL input.

## Import

```tsx | pure
import {AddonInput} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                    | Type                                                                      | Default              |
|----------------|------------------------------------------------|---------------------------------------------------------------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component          | `string`                                                                  | `'abp-addon-input'`  |
| addonBefore    | The content before the input field             | `React.ReactNode \| (() => React.ReactNode \| undefined)`                 | -                    |
| addonAfter     | The content after the input field              | `React.ReactNode \| (() => React.ReactNode \| undefined)`                 | -                    |
| cursorBefore   | The cursor before the input field              | `string`                                                                  | `'default'`          |
| cursorAfter    | The cursor after the input field               | `string`                                                                  | `'default'`          |
| paddingBefore  | The padding of the addon before                | `number`                                                                  | -                    |
| paddingAfter   | The padding of the addon after                 | `number`                                                                  | -                    |
| widthBlock     | Whether to match the width of parent element   | `boolean`                                                                 | `true`               |
| proField       | Whether to use ProFormField instead of Antd    | `boolean`                                                                 | `true`               |

> Note: Other properties are inherited from Ant Design Pro's ProForm.Item component.
