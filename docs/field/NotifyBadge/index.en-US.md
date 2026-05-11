---
title: NotifyBadge
toc: content
order: 50
---

## Description

NotifyBadge, provides a badge with dropdown notify list.

The typical scenario is, displaying a small icon with a dropdown which lists notices and tasks.

## Import

```tsx | pure
import {NotifyBadge} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property        | Description                               | Type                                                         | Default              |
|-----------------|-------------------------------------------|--------------------------------------------------------------|----------------------|
| clazzPrefix     | The CSS class prefix of the component     | `string`                                                     | `'abp-notify-badge'` |
| hyperlinkProps  | The properties of the hyperlink           | `HyperlinkProps`                                             | -                    |
| badgeContent    | The content of the badge                  | `React.ReactNode`                                            | `<BellOutlined/>`    |
| badgeProps      | The properties of the badge               | `Omit<BadgeProps, 'children'>`                               | -                    |
| dropdownEnabled | Whether to enable the dropdown div        | `boolean`                                                    | `true`               |
| dropdownProps   | The properties of the dropdown div        | `Omit<DropdownProps, 'popupRender' \| 'menu' \| 'children'>` | -                    |
| tabsProps       | The properties of the tabs                | `MixinTabsProps`                                             | -                    |
| locale          | The locale of the component, e.g. 'en_US' | `string`                                                     | -                    |
| localeProps     | The props of locale                       | `IntlLocaleProps`                                            | -                    |
