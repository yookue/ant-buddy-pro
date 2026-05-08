---
title: MenuTabs
toc: content
order: 35
---

## 组件说明

参见 [在线例子](https://preview.pro.ant.design/account/settings)。`MenuTabs` 与 [Ant Design Tab](https://ant.design/components/tabs) 类似，但是集成了 [Ant Design Menu](https://ant.design/components/menu)。

## 导入组件

```jsx | pure
import {MenuTabs} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                 | 描述                   | 类型                                                                                      | 默认值               |
|--------------------|----------------------|-----------------------------------------------------------------------------------------|-------------------|
| clazzPrefix        | 组件的 CSS 类名前缀         | `string`                                                                                | `'abp-menu-tabs'` |
| menuProps          | 菜单属性                 | `MixinMenuProps`                                                                        | -                 |
| containerClazz     | 容器 div 的 CSS 类名      | `string`                                                                                | -                 |
| containerStyle     | 容器 div 的 CSS 样式      | `React.CSSProperties`                                                                   | -                 |
| entryClazz         | 菜单栏 div 的 CSS 类名     | `string`                                                                                | -                 |
| entryStyle         | 菜单栏 div 的 CSS 样式     | `React.CSSProperties`                                                                   | -                 |
| entryWidth         | 菜单栏 div 的宽度          | `string`                                                                                | `'208px'`         |
| entryInkBar        | 是否显示菜单栏 div 的活跃指示条   | `boolean`                                                                               | `true`            |
| entrySelectionBold | 是否加粗显示菜单栏 div 选中的菜单项 | `boolean`                                                                               | `true`            |
| entryVisible       | 是否显示菜单栏 div          | `boolean`                                                                               | `true`            |
| tabClazz           | 选项卡 div 的 CSS 类名     | `string`                                                                                | -                 |
| tabStyle           | 选项卡 div 的 CSS 样式     | `React.CSSProperties`                                                                   | -                 |
| tabTitleClazz      | 选项卡标题 div 的 CSS 类名   | `string`                                                                                | -                 |
| tabTitleStyle      | 选项卡标题 div 的 CSS 样式   | `React.CSSProperties`                                                                   | -                 |
| tabTitleRender     | 选项卡标题内容的渲染方式         | `(dom?: React.ReactNode) => React.ReactNode \| undefined`                               | -                 |
| tabTitleVisible    | 是否显示选项卡 div 的标题      | `boolean`                                                                               | `true`            |
| tabContentClazz    | 选项卡内容 div 的 CSS 类名   | `string`                                                                                | -                 |
| tabContentStyle    | 选项卡内容 div 的 CSS 样式   | `React.CSSProperties`                                                                   | -                 |
| adjustLayoutProps  | 自动调整布局的属性            | `AdjustLayoutProps`                                                                     | -                 |
| presetStyle        | 预设样式                 | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`    |

> 注意: 其他属性继承自 Ant Design 的 <a href="https://ant.design/components/menu" target="_blank">Menu</a> 组件。
