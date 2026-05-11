---
title: MathInput
toc: content
order: 13
---

## 組件說明

MathInput，提供了一個可以輸入數學公式的的錄入框。

## 導入組件

```tsx | pure
import {MathInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 說明                   | 類型                          | 預設值                |
|----------------|----------------------|-----------------------------|--------------------|
| clazzPrefix    | 組件的 CSS 類名前綴         | `string`                    | `'abp-math-input'` |
| containerClazz | 容器 div 的 CSS 類名      | `string`                    | -                  |
| containerStyle | 容器 div 的 CSS 樣式      | `React.CSSProperties`       | -                  |
| mathOptions    | Mathfield 的選項        | `Partial<MathfieldOptions>` | -                  |
| validation     | 是否增加公式校驗規則           | `boolean`                   | `true`             |
| onChange       | 值更改後的回調函數            | `(value?: string) => void`  | -                  |
| proField       | 是否使用 ProFormField 控件 | `boolean`                   | -                  |
| locale         | 組件的語言, e.g. 'zh_TW'  | `string`                    | -                  |
| localeProps    | 多語言屬性                | `IntlLocaleProps`           | -                  |
| value          | 輸入框的值                | `string`                    | -                  |
