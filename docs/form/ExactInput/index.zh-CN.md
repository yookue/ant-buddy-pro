---
title: ExactInput
toc: content
---

## 组件说明

ExactInput，提供了一个带复选框的文本输入字段，以便支持精确查询特性。

## 使用前提

<Alert showIcon>
  如果您使用默认的图标，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：
</Alert>

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 导入组件

```jsx | pure
import {ExactInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性           | 说明                  | 类型                             | 默认值                 |
|--------------|---------------------|--------------------------------|---------------------|
| clazzPrefix  | 组件的 CSS 类名前缀        | `string`                       | `'abp-exact-input'` |
| addonPos     | 文本框的附属节点位置          | `'before' \| 'after' \| false` | `'after'`           |
| compactAddon | 文本框的附属节点是否使用紧凑模式    | `boolean`                      | `true`              |
| checkable    | 是否显示复选框             | `boolean`                      | `true`              |
| checkProps   | 复选框的属性              | `AddonCheckProps`              | -                   |
| tooltipCtrl  | 是否使用 Tooltip        | `boolean`                      | -                   |
| tooltipProps | Tooltip 属性          | `Omit<TooltipProps, 'title'>`  | -                   |
| locale       | 组件的语言, e.g. 'zh_CN' | `string`                       | -                   |
| localeProps  | 多语言属性               | `IntlLocaleProps`              | -                   |

> 注意: 其他属性继承自 AddonInput 组件。
