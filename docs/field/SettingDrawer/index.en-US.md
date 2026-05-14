---
title: SettingDrawer
toc: content
order: 19
---

## Description

SettingDrawer is a component that wraps pro-components SettingDrawer with a custom trigger, replacing the default gear icon.

**Core Design Principles**:
- ✅ **Full Reuse** - Inherits all properties and features from pro-components SettingDrawer
- ✅ **Hide Default Button** - Automatically hides the default settings button from pro-components
- ✅ **Complete Features** - All native features remain intact: theme configuration, layout switching, dark mode, etc.

## Import

```tsx | pure
import {SettingDrawer} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

SettingDrawer inherits all properties from pro-components SettingDrawer and adds these new properties:

| Property       | Description                               | Type                          | Default                                   |
|----------------|-------------------------------------------|-------------------------------|-------------------------------------------|
| clazzPrefix    | CSS class prefix of the component         | `string`                      | `'abp-setting-drawer'`                    |
| containerClazz | The CSS class name of the container span  | `string`                      | -                                         |
| containerStyle | The CSS style of the container span       | `React.CSSProperties`         | -                                         |
| triggerDom     | Custom trigger DOM element                | `React.ReactNode`             | `<SkinOutlined style={{fontSize: 16}} />` |
| tooltipCtrl    | Whether to use Tooltip                    | `boolean`                     | -                                         |
| tooltipProps   | The props of Antd Tooltip                 | `Omit<TooltipProps, 'title'>` | -                                         |
| locale         | The locale of the component, e.g. 'en_US' | `string`                      | -                                         |
| localeProps    | The props of locale                       | `IntlLocaleProps`             | -                                         |

In addition, it supports all other properties of pro-components SettingDrawer, such as:
- `settings` - Current settings
- `onSettingChange` - Callback when settings change
- `hideHintAlert` - Hide hint button
- `hideCopyButton` - Hide copy button
- And more...
