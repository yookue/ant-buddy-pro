---
title: LocaleTextarea
toc: content
order: 12
---

## 组件说明

LocaleTextarea，提供了一个可切换多种语言输入的多行文本输入框，以便让您的应用程序支持多语言特性。

## 导入组件

```tsx | pure
import {LocaleTextarea} from '@unikue/ant-buddy-pro';
```

## 使用示例

> `switchTextareaProps` 属性下的每项，都拥有其独立的属性，这样您可以充分自定义每个语言的特性，比如把某一项或某几项设置为 `禁用` 或 `只读` 状态。

> `switchQuickTags` 可以简单快速的自定义语言输入项。

### Props 带校验

<code src="./demo-1.zh-CN.tsx"></code>

### Props 无校验

<code src="./demo-2.zh-CN.tsx"></code>

### Tags 带校验

<code src="./demo-3.zh-CN.tsx"></code>

### Tags 无校验，已禁用

<code src="./demo-4.zh-CN.tsx"></code>

## 组件属性

| 属性                  | 说明                                            | 类型                      | 默认值                     |
|---------------------|-----------------------------------------------|-------------------------|-------------------------|
| clazzPrefix         | 组件的 CSS 类名前缀                                  | `string`                | `'abp-locale-textarea'` |
| containerClazz      | 容器 div 的 CSS 类名                               | `string`                | -                       |
| containerStyle      | 容器 div 的 CSS 样式                               | `React.CSSProperties`   | -                       |
| tabsProps           | 标签页的属性                                        | `MixinTabsProps`        | -                       |
| multilingual        | 是否启用多语言                                       | `boolean`               | `true`                  |
| proField            | 默认文本框是否使用 ProFormField 控件                     | `boolean`               | `true`                  |
| locale              | 组件的语言, e.g. 'zh_CN'                           | `string`                | -                       |
| localeProps         | 多语言属性                                         | `IntlLocaleProps`       | -                       |
| switchTextareaProps | 多语言输入项的属性(比 `switchQuickTags` 优先级高，更多自定义)     | `SwitchTextareaProps[]` | -                       |
| switchQuickTags     | 多语言输入项的名称(比 `switchTextareaProps` 优先级低，更简单快捷) | `string[]`              | -                       |
| switchShareProps    | 语言输入项的通用属性                                    | `SwitchShareProps`      | -                       |
| switchCloneProps    | 语言输入项的克隆属性                                    | `SwitchCloneProps`      | -                       |
| switchProField      | 语言输入项是否使用 ProFormField 控件                     | `boolean`               | `true`                  |
| forceRender         | 是否强制渲染标签页内容                                   | `boolean`               | `true`                  |
