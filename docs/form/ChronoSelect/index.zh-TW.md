---
title: ChronoSelect
toc: content
order: 15
---

## 組件說明

ChronoSelect, 提供了一個可以選擇時間單位的選擇框，選項數據來源於 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

## 導入組件

```jsx | pure
import {ChronoSelect} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性          | 說明                   | 類型                   | 預設值                                                                             |
|-------------|----------------------|----------------------|---------------------------------------------------------------------------------|
| clazzPrefix | 組件的 CSS 類名前綴         | `string`             | `'abp-chrono-select'`                                                           |
| unitTypes   | 單位類型                 | `ChronoUintType[]`   | `['millis', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years']` |
| proField    | 是否使用 ProFormField 控件 | `boolean`            | `true`                                                                          |
| presetStyle | 預設樣式                 | `WithFalse<'addon'>` | -                                                                               |
| locale      | 組件的語言, e.g. 'zh_TW'  | `string`             | -                                                                               |
| localeProps | 多語言屬性                | `IntlLocaleProps`    | -                                                                               |

> 注意: 其他屬性繼承自 ProFormSelect 組件。
