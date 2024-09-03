---
toc: content
---

## LocaleInput

LocaleInput，提供了壹個包含多種語言下拉框的文本輸入字段，以便讓您的應用程序支持多語言特性。

### 使用前提

<Alert type='info'>
  如果您使用默認的 <b><i>`actionDom`</i></b> 屬性，要使用此組件，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
</Alert>

```bash
npm install @ant-design/icons --save
```

### 導入組件

```jsx | pure
import {LocaleInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

> `popupInputProps` 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 `禁用` 或 `只讀` 狀態。

> `popupQuickTags` 可以簡單快速的自定義語言輸入項。

#### Props 帶校驗

<code src="./demo-1.zh-TW.tsx"></code>

#### Props 無校驗

<code src="./demo-2.zh-TW.tsx"></code>

#### Tags 帶校驗

<code src="./demo-3.zh-TW.tsx"></code>

#### Tags 無校驗，已禁用

<code src="./demo-4.zh-TW.tsx"></code>

### 組件屬性

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
