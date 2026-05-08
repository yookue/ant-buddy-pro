---
title: SegmentRadio
toc: content
---

## 組件說明

SegmentRadio 與 [Ant Design](https://ant.design) 的 [Segmented](https://ant.design/components/segmented) 類似，但是包裝了一層 [ProForm](https://github.com/ant-design/pro-components/tree/master/packages/form) 的特有屬性。

## 導入組件

```jsx | pure
import {SegmentRadio} from '@unikue/ant-buddy-pro';
```

## 使用示例

### 使用 options

<code src="./demo-1.zh-TW.tsx"></code>

### 使用 request

<code src="./demo-2.zh-TW.tsx"></code>

### 使用 valueEnum

<code src="./demo-3.zh-TW.tsx"></code>

## 組件屬性

| 屬性                  | 說明                                   | 類型                                                                                                                         | 預設值                   |
|---------------------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix         | 組件的 CSS 類名前綴                         | `string`                                                                                                                   | `'abp-segment-radio'` |
| containerClazz      | 容器 div 的 CSS 類名                      | `string`                                                                                                                   | -                     |
| containerStyle      | 容器 div 的 CSS 樣式                      | `React.CSSProperties`                                                                                                      | -                     |
| request             | 遠程數據請求                               | `(params?: Record<string, any>, props?: Record<string, any>) => Promise<(SegmentedRawOption \| SegmentedLabeledOption)[]>` | -                     |
| requestOptionPlace  | 使用 `request` 數據的同時，是否保留 `options` 數據 | `'before' \| 'after' \| 'override' \| false`                                                                               | -                     |
| proField            | 是否使用 ProFormField 控件                 | `boolean`                                                                                                                  | `true`                |
| onOptionItemsChange | 選項變化時的回調函數                           | `(options?: (SegmentedRawOption \| SegmentedLabeledOption)[]) => void`                                                     | -                     |
