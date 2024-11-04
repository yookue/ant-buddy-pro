---
toc: content
---

## LocaleTextarea

LocaleTextarea，提供了壹個可切換多種語言輸入的多行文本輸入框，以便讓您的應用程序支持多語言特性。

### 導入組件

```jsx | pure
import {LocaleTextarea} from '@yookue/ant-buddy-pro';
```

### 使用示例

> `switchTextareaProps` 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 `禁用` 或 `只讀` 狀態。

> `switchQuickTags` 可以簡單快速的自定義語言輸入項。

#### Props 帶校驗

<code src="./demo-1.zh-TW.tsx"></code>

#### Props 無校驗

<code src="./demo-2.zh-TW.tsx"></code>

#### Tags 帶校驗

<code src="./demo-3.zh-TW.tsx"></code>

#### Tags 無校驗，已禁用

<code src="./demo-4.zh-TW.tsx"></code>

### 組件屬性

#### LocaleTextareaProps

<API src="@/form/LocaleTextarea/index.tsx" hideTitle></API>
