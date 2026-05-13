---
title: SettingDrawer
toc: content
order: 19
---

## Description

SettingDrawer is a component that wraps pro-components SettingDrawer with a custom trigger, replacing the default gear icon.

**Core Design Principles**:
- ✅ **Full Reuse** - Inherits all properties and features from pro-components SettingDrawer
- ✅ **Minimal Extension** - Only adds 2 new properties: `clazzPrefix` and `triggerDom`
- ✅ **Hide Default Button** - Automatically hides the default settings button from pro-components
- ✅ **Complete Features** - All native features remain intact: theme configuration, layout switching, dark mode, etc.

## Import

```tsx | pure
import {SettingDrawer} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

SettingDrawer inherits all properties from pro-components SettingDrawer and adds 2 new properties:

| Property    | Description                       | Type              | Default                                   |
|-------------|-----------------------------------|-------------------|-------------------------------------------|
| clazzPrefix | CSS class prefix of the component | `string`          | `'abp-setting-drawer'`                    |
| triggerDom  | Custom trigger DOM element        | `React.ReactNode` | `<SkinOutlined style={{fontSize: 16}} />` |

In addition, it supports all other properties of pro-components SettingDrawer, such as:
- `settings` - Current settings
- `onSettingChange` - Callback when settings change
- `hideHintAlert` - Hide hint button
- `hideCopyButton` - Hide copy button
- And more...
