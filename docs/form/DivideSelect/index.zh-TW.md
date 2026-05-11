---
title: DivideSelect
toc: content
order: 40
---

## 組件說明

DivideSelect, 提供了一下可以將選項的標簽和值分開顯示的選擇框。

## 導入組件

```tsx | pure
import {DivideSelect} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                  | 說明                                                 | 類型                                                        | 預設值                   |
|---------------------|----------------------------------------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix         | 組件的 CSS 類名前綴                                       | `string`                                                  | `'abp-divide-select'` |
| optionClazz         | 下拉選項 div 的 CSS 類名                                  | `string`                                                  | -                     |
| optionStyle         | 下拉選項 div 的 CSS 樣式                                  | `React.CSSProperties`                                     | -                     |
| optionBeforeClazz   | 下拉選項左側 span 的 CSS 類名                               | `string`                                                  | -                     |
| optionBeforeStyle   | 下拉選項左側 span 的 CSS 樣式                               | `React.CSSProperties`                                     | -                     |
| optionBeforeContent | 下拉選項左側 span 的內容                                    | `'label' \| 'value' \| 'code' \| false`                   | `'label'`             |
| optionBeforeRender  | 下拉選項左側 span 的渲染方法                                  | `(dom?: React.ReactNode) => React.ReactNode \| undefined` | -                     |
| optionAfterClazz    | 下拉選項右側 span 的 CSS 類名                               | `string`                                                  | -                     |
| optionAfterStyle    | 下拉選項右側 span 的 CSS 樣式                               | `React.CSSProperties`                                     | -                     |
| optionAfterContent  | 下拉選項右側 span 的內容                                    | `'label' \| 'value' \| 'code' \| false`                   | `'value'`             |
| optionAfterRender   | 下拉選項右側 span 的渲染方法                                  | `(dom?: React.ReactNode) => React.ReactNode \| undefined` | -                     |
| requestOptionPlace  | 使用 `request` 數據的同時，是否保留 `options` 或 `valueEnum` 數據 | `'before' \| 'after' \| 'override' \| false`              | -                     |
| proField            | 是否使用 ProFormField 控件                               | `boolean`                                                 | `true`                |
| presetStyle         | 預設樣式                                               | `'before-prior' \| 'after-prior' \| false`                | `'before-prior'`      |
