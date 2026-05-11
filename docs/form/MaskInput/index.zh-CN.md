---
title: MaskInput
toc: content
order: 13
---

## 组件说明

MaskInput，提供了一个可以通过正则表达式来限制输入的文本框。

## 导入组件

```tsx | pure
import {MaskInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性          | 说明                    | 类型                   | 默认值                |
|-------------|-----------------------|----------------------|--------------------|
| clazzPrefix | 组件的 CSS 类名前缀          | `string`             | `'abp-mask-input'` |
| pattern     | 允许值的正则表达式，满足任意一个即视为有效 | `RegExp \| RegExp[]` | -                  |
| proField    | 是否使用 ProFormField 控件  | `boolean`            | `true`             |
