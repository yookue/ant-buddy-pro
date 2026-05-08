---
title: MaskInput
toc: content
order: 65
---

## 組件說明

MaskInput，提供了壹個可以通过正则表达式来限制输入的文本框。

## 導入組件

```jsx | pure
import {MaskInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性          | 說明                    | 類型                   | 預設值                |
|-------------|-----------------------|----------------------|--------------------|
| clazzPrefix | 組件的 CSS 類名前綴          | `string`             | `'abp-mask-input'` |
| pattern     | 允許值的正則表達式，滿足任意一個即視爲有效 | `RegExp \| RegExp[]` | -                  |
| proField    | 是否使用 ProFormField 控件  | `boolean`            | `true`             |
