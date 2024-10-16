---
toc: content
---

## CaptchaInput

CaptchaInput，提供了壹個可以獲取驗證碼的按鈕和壹個輸入驗證碼的文本框。

與 [ProComponents](https://procomponents.ant.design/) 的 [ProFormCaptcha](https://procomponents.ant.design/components/field-set#proformcaptcha) 組件類似，但最大的區別是：

  - ProFormCaptcha 提供了 `onGetCaptcha` 函數來實現獲取驗證碼的邏輯，CaptchaInput 的函數名為 `onGenerate`
  - ProFormCaptcha 的 `onGetCaptcha` 函數定義是 `(phone)=>Promise<any>`，CaptchaInput 的 `onGenerate` 函數定義是 `(mobile?: string) => boolean | void | Promise<boolean | void>`，後者支持更豐富的返回數據類型
  - ProFormCaptcha 的 `onGetCaptcha` 函數只能通過拋出異常來中止觸發倒計時的動作，CaptchaInput 的 `onGenerate` 函數可以依據多種類型來自動判斷是否需要啟動倒計時（**這在彈出額外的滑塊驗證碼的時候特別有用**）
  - CaptchaInput 額外提供了 `onTimerBegin` 函數來初始化其他工作；提供了 `onTimerEnd` 函數來進行額外的清理工作

### 導入組件

```jsx | pure
import {CaptchaInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

<code src="./demo.zh-TW.tsx"></code>

### 組件屬性

#### CaptchaInputProps

<API src="@/form/CaptchaInput/index.tsx" hideTitle></API>
