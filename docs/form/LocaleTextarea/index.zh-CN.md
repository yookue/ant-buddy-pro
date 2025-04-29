---
title: LocaleTextarea
toc: content
---

## 组件说明

LocaleTextarea，提供了一个可切换多种语言输入的多行文本输入框，以便让您的应用程序支持多语言特性。

## 导入组件

```jsx | pure
import {LocaleTextarea} from '@yookue/ant-buddy-pro';
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

<API id="LocaleTextarea.zh-CN" src="@/form/LocaleTextarea/index.tsx" hideTitle></API>
