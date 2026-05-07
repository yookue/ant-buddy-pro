---
title: AddonInput
toc: content
---

## 組件說明

AddonInput，提供了一個支持 addonBefore 和 addonAfter 屬性的文本輸入框組件，還原了早期版本 Ant Design Input 組件的 addon 功能。

在新版 Ant Design 中，Input 組件移除了 addonBefore 和 addonAfter 屬性，建議使用 Space.Compact 模式。但在實際使用中，直接使用 Space.Compact 不夠方便，且沒有舊版 addon 的灰色背景效果。AddonInput 組件使用新版 Space.Compact 實現，同時保留了舊版的視覺效果和使用方式。

典型的應用場景是，在輸入框前後添加固定的前綴、後綴、按鈕或其他內容，例如 URL 輸入框添加協議前綴和域名後綴。

## 導入組件

```jsx | pure
import {AddonInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

<API id="AddonInput"></API>
