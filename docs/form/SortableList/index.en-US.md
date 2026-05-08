---
title: SortableList
toc: content
order: 85
---

## Description

SortableList, provides a capability that displaying some sort actions for a Ant `ProFormList`.

## Import

```jsx | pure
import {SortableList} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property           | Description                                            | Type              | Default               |
|--------------------|--------------------------------------------------------|-------------------|-----------------------|
| clazzPrefix        | The CSS class prefix of the component                  | `string`          | `'abp-sortable-list'` |
| allowTopBottom     | Whether to allow move to top and bottom                | `boolean`         | `true`                |
| allowUpDown        | Whether to allow move up and down                      | `boolean`         | `true`                |
| allowDefaultAction | Whether to allow the default actions (copy and delete) | `boolean`         | `true`                |
| locale             | The locale of the component, e.g. 'en_US'              | `string`          | -                     |
| localeProps        | The props of locale                                    | `IntlLocaleProps` | -                     |

> Note: Other properties are inherited from ProFormList component.
