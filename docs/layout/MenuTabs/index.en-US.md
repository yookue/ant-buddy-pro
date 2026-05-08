---
title: MenuTabs
toc: content
order: 35
---

## Description

Just like [the live example](https://preview.pro.ant.design/account/settings), `MenuTabs` is a component that similar to [Ant Design Tab](https://ant.design/components/tabs), integrated with [Ant Design Menu](https://ant.design/components/menu).

## Import

```jsx | pure
import {MenuTabs} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property           | Description                                             | Type                                                                                    | Default           |
|--------------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------|-------------------|
| clazzPrefix        | The CSS class prefix of the component                   | `string`                                                                                | `'abp-menu-tabs'` |
| menuProps          | The properties of the menu                              | `MixinMenuProps`                                                                        | -                 |
| containerClazz     | The CSS class name of the container div                 | `string`                                                                                | -                 |
| containerStyle     | The CSS style of the container div                      | `React.CSSProperties`                                                                   | -                 |
| entryClazz         | The CSS class name of the entry div                     | `string`                                                                                | -                 |
| entryStyle         | The CSS style of the entry div                          | `React.CSSProperties`                                                                   | -                 |
| entryWidth         | The width of the entry div                              | `string`                                                                                | `'208px'`         |
| entryInkBar        | Whether to display the ink bar of the entry div         | `boolean`                                                                               | `true`            |
| entrySelectionBold | Whether to bold the selected menu item of the entry div | `boolean`                                                                               | `true`            |
| entryVisible       | Whether to show the entry div                           | `boolean`                                                                               | `true`            |
| tabClazz           | The CSS class name of the tab div                       | `string`                                                                                | -                 |
| tabStyle           | The CSS style of the tab div                            | `React.CSSProperties`                                                                   | -                 |
| tabTitleClazz      | The CSS class name of the tab title                     | `string`                                                                                | -                 |
| tabTitleStyle      | The CSS style of the tab title                          | `React.CSSProperties`                                                                   | -                 |
| tabTitleRender     | The DOM render of the tab title content                 | `(dom?: React.ReactNode) => React.ReactNode \| undefined`                               | -                 |
| tabTitleVisible    | Whether to show the title of the tab div                | `boolean`                                                                               | `true`            |
| tabContentClazz    | The CSS class name of the tab content                   | `string`                                                                                | -                 |
| tabContentStyle    | The CSS style of the tab content                        | `React.CSSProperties`                                                                   | -                 |
| adjustLayoutProps  | The properties for auto adjust the layout               | `AdjustLayoutProps`                                                                     | -                 |
| presetStyle        | The preset style of the component                       | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`    |

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/menu" target="_blank">Menu</a> component.
