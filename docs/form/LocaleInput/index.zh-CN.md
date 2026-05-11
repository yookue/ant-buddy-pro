---
title: LocaleInput
toc: content
order: 55
---

## 组件说明

LocaleInput，提供了一个包含多种语言下拉框的文本输入字段，以便让您的应用程序支持多语言特性。

## 使用前提

> 如果您使用默认的图标，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 导入组件

```tsx | pure
import {LocaleInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

> `popupInputProps` 属性下的每项，都拥有其独立的属性，这样您可以充分自定义每个语言的特性，比如把某一项或某几项设置为 `禁用` 或 `只读` 状态。

> `popupQuickTags` 可以简单快速的自定义语言输入项。

### Props 带校验

<code src="./demo-1.zh-CN.tsx"></code>

### Props 无校验

<code src="./demo-2.zh-CN.tsx"></code>

### Tags 带校验

<code src="./demo-3.zh-CN.tsx"></code>

### Tags 无校验，已禁用

<code src="./demo-4.zh-CN.tsx"></code>

## 组件属性

| 属性                | 说明                                        | 类型                                                            | 默认值                      |
|-------------------|-------------------------------------------|---------------------------------------------------------------|--------------------------|
| clazzPrefix       | 组件的 CSS 类名前缀                              | `string`                                                      | `'abp-locale-input'`     |
| addon             | 默认文本框的附属节点内容                              | `React.ReactNode \| (() => React.ReactNode \| undefined)`     | `<TranslationOutlined/>` |
| addonPos          | 默认文本框的附属节点位置                              | `'before' \| 'after' \| false`                                | `'after'`                |
| defaultOpen       | 是否默认展开弹出层                                 | `boolean`                                                     | -                        |
| triggerProps      | 弹出层的属性                                    | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>` | -                        |
| multilingual      | 是否启用多语言                                   | `boolean`                                                     | `true`                   |
| locale            | 组件的语言, e.g. 'zh_CN'                       | `string`                                                      | -                        |
| popupInputProps   | 多语言输入项的属性(比 `popupQuickTags` 优先级高，更多自定义)  | `PopupInputProps[]`                                           | -                        |
| popupQuickTags    | 多语言输入项的名称(比 `popupInputProps` 优先级低，更简单快捷) | `string[]`                                                    | -                        |
| popupTagPos       | 语言输入项的标签位置                                | `'before' \| 'after' \| false`                                | `'before'`               |
| popupAddon        | 语言输入项的附属节点内容                              | `React.ReactNode \| (() => React.ReactNode \| undefined)`     | `<SelectOutlined/>`      |
| popupAddonPos     | 语言输入项的附属节点位置                              | `'before' \| 'after' \| false`                                | `'after'`                |
| popupShareProps   | 语言输入项的通用属性                                | `PopupShareProps`                                             | -                        |
| popupCloneProps   | 语言输入项的克隆属性                                | `PopupCloneProps`                                             | -                        |
| popupConfirmProps | 语言输入项的动作确认属性                              | `PopupConfirmProps`                                           | -                        |
| popupProField     | 语言输入项是否使用 ProFormField 控件                 | `boolean`                                                     | `true`                   |

> 注意: 其他属性继承自 AddonInput 组件。
