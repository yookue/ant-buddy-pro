---
title: ChronoTuple
toc: content
order: 3
---

## 組件說明

ChronoTuple, 提供了一個可以輸入數值和選擇時間單位的選擇框，選項數據來源於 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

## 導入組件

```tsx | pure
import {ChronoTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 說明                   | 類型                    | 預設值                  |
|----------------|----------------------|-----------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴         | `string`              | `'abp-chrono-tuple'` |
| containerClazz | 容器 div 的 CSS 類名      | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 樣式      | `React.CSSProperties` | -                    |
| digitProps     | 數字組件的屬性              | `ProFormDigitProps`   | -                    |
| selectProps    | 選擇組件的屬性              | `ChronoSelectProps`   | -                    |
| widthBlock     | 是否匹配父節點的寬度           | `boolean`             | `true`               |
| proField       | 是否使用 ProFormField 控件 | `boolean`             | `true`               |
