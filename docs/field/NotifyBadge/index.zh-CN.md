---
title: NotifyBadge
toc: content
order: 50
---

## 组件说明

NotifyBadge，提供了一个带下拉框的徽标。

典型的应用场景是，显示一个小图标，下拉展示通知和任务列表。

## 导入组件

```jsx | pure
import {NotifyBadge} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性              | 描述                  | 类型                                                           | 默认值                  |
|-----------------|---------------------|--------------------------------------------------------------|----------------------|
| clazzPrefix     | 组件的 CSS 类名前缀        | `string`                                                     | `'abp-notify-badge'` |
| hyperlinkProps  | 超链接的属性              | `HyperlinkProps`                                             | -                    |
| badgeContent    | 徽标的内容节点             | `React.ReactNode`                                            | `<BellOutlined/>`    |
| badgeProps      | 徽标的属性               | `Omit<BadgeProps, 'children'>`                               | -                    |
| dropdownEnabled | 是否允许下拉弹出层           | `boolean`                                                    | `true`               |
| dropdownProps   | 下拉弹出层的属性            | `Omit<DropdownProps, 'popupRender' \| 'menu' \| 'children'>` | -                    |
| tabsProps       | 标签页的属性              | `MixinTabsProps`                                             | -                    |
| locale          | 组件的语言, e.g. 'zh_CN' | `string`                                                     | -                    |
| localeProps     | 多语言属性               | `IntlLocaleProps`                                            | -                    |
