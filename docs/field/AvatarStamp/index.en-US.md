---
title: AvatarStamp
toc: content
order: 1
---

## Description

AvatarStamp component, can display an avatar with a corner stamp.

## Import

```tsx | pure
import {AvatarStamp} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                    | Type                                                       | Default              |
|----------------|------------------------------------------------|------------------------------------------------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component          | `string`                                                   | `'abp-avatar-stamp'` |
| containerClazz | The CSS class name of the container div        | `string`                                                   | -                    |
| containerStyle | The CSS style of the container div             | `React.CSSProperties`                                      | -                    |
| addon          | The addon element                              | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| addonClazz     | The CSS class name of the addon wrapper div    | `string`                                                   | -                    |
| addonStyle     | The CSS style of the addon wrapper div         | `React.CSSProperties`                                      | -                    |
| offset         | The offset of the addon wrapper div, in pixels | `[number, number]`                                         | -                    |
| placement      | The placement of the stamp                     | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'bottomRight'`      |

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/avatar" target="_blank">Avatar</a> component.
