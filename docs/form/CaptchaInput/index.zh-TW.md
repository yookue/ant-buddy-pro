---
title: CaptchaInput
toc: content
---

## 組件說明

CaptchaInput，提供了壹個可以獲取驗證碼的按鈕和壹個輸入驗證碼的文本框。

與 [ProComponents](https://procomponents.ant.design) 的 [ProFormCaptcha](https://procomponents.ant.design/components/field-set#proformcaptcha) 組件類似，但最大的區別是：

  - ProFormCaptcha 提供了 `onGetCaptcha` 函數來實現獲取驗證碼的邏輯，CaptchaInput 的函數名為 `onGenerate`
  - ProFormCaptcha 的 `onGetCaptcha` 函數定義是 `(phone)=>Promise<any>`，CaptchaInput 的 `onGenerate` 函數定義是 `(mobile?: string) => boolean | void | Promise<boolean | void>`，後者支持更豐富的返回數據類型
  - ProFormCaptcha 的 `onGetCaptcha` 函數只能通過拋出異常來中止觸發倒計時的動作，CaptchaInput 的 `onGenerate` 函數可以依據多種類型來自動判斷是否需要啟動倒計時（**這在彈出額外的滑塊驗證碼的時候特別有用**）
  - CaptchaInput 額外提供了 `onTimerBegin` 函數來初始化其他工作；提供了 `onTimerEnd` 函數來進行額外的清理工作
  - CaptchaInput 額外提供了 `dependName` 用于校驗第三方字段，配合 `autoValidate` 來控制是否自動啟用此功能，可用于當手機號（和其他字段，例如國際冠碼）校驗通過才允許點擊獲取驗證碼

## 導入組件

```jsx | pure
import {CaptchaInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 說明                            | 類型                                                                 | 預設值                   |
|----------------|-------------------------------|--------------------------------------------------------------------|-----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴                  | `string`                                                           | `'abp-captcha-input'` |
| containerClazz | 容器 div 的 CSS 類名               | `string`                                                           | -                     |
| containerStyle | 容器 div 的 CSS 樣式               | `React.CSSProperties`                                              | -                     |
| fieldRef       | 組件的 ref 句柄                    | `React.Ref<CaptchaInputRef \| null \| undefined>`                  | -                     |
| autoValidate   | 是否自動校驗 phoneName 和 dependName | `boolean`                                                          | -                     |
| dependName     | 發送驗證碼之前要校驗的字段名                | `NamePath`                                                         | -                     |
| timerInterval  | 計時器的間隔，單位毫秒                   | `number`                                                           | `1000`                |
| onGenerate     | 生成驗證碼時的回調函數                   | `(mobile?: string) => boolean \| void \| Promise<boolean \| void>` | -                     |
| onTimer        | 計時變化時的回調函數                    | `(count: number) => void`                                          | -                     |
| onTimerBegin   | 計時開始時的回調函數                    | `() => void`                                                       | -                     |
| onTimerEnd     | 計時結束時的回調函數                    | `() => void`                                                       | -                     |
| locale         | 組件的語言, e.g. 'zh_TW'           | `string`                                                           | -                     |
| localeProps    | 多語言屬性                         | `IntlLocaleProps`                                                  | -                     |

> 注意: 其他屬性繼承自 ProFormCaptcha 組件。
