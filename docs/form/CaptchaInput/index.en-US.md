---
title: CaptchaInput
toc: content
---

## Description

CaptchaInput, provides a text input box and a button with captcha generation capability.

Similar to [ProFormCaptcha](https://procomponents.ant.design/components/field-set#proformcaptcha) of [ProComponents](https://procomponents.ant.design), the most differences are:

- ProFormCaptcha provides a function named `onGetCaptcha` to trigger the captcha generation, while CaptchaInput named `onGenerate`
- The function declaration of ProFormCaptcha `onGetCaptcha` is `(phone)=>Promise<any>`, while the declaration of CaptchaInput `onGenerate` is `(mobile?: string) => boolean | void | Promise<boolean | void>`, the latter one supports much richer return data types
- The function of ProFormCaptcha `onGetCaptcha` only can stop captcha generation by throwing an exception, while CaptchaInput `onGenerate` provides more return types to automatically decide should start the generation or not (**This is especially useful when popups an extra slider captcha**)
- CaptchaInput provides a function named `onTimerBegin` to initialize additional preparations, and provides a function `onTimerEnd` to do the additional cleanups
- CaptchaInput also provides `dependName` to verify the third-party field, and `autoValidate` to control whether this function is automatically enabled. It can be used to allow clicking to obtain the verification code only when the mobile phone number (and other fields, such as dialing code) are verified

## Import

```jsx | pure
import {CaptchaInput} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                       | Type                                                               | Default               |
|----------------|---------------------------------------------------|--------------------------------------------------------------------|-----------------------|
| clazzPrefix    | The CSS class prefix of the component             | `string`                                                           | `'abp-captcha-input'` |
| containerClazz | The CSS class name of the container div           | `string`                                                           | -                     |
| containerStyle | The CSS style of the container div                | `React.CSSProperties`                                              | -                     |
| fieldRef       | The ref of the component                          | `React.Ref<CaptchaInputRef \| null \| undefined>`                  | -                     |
| autoValidate   | Whether to auto validate phoneName and dependName | `boolean`                                                          | -                     |
| dependName     | The field name(s) to validate before sending      | `NamePath`                                                         | -                     |
| timerInterval  | The timer interval, in milliseconds               | `number`                                                           | `1000`                |
| onGenerate     | The callback function when generating captcha     | `(mobile?: string) => boolean \| void \| Promise<boolean \| void>` | -                     |
| onTimer        | The callback function when the timer changed      | `(count: number) => void`                                          | -                     |
| onTimerBegin   | The callback function when the timer begin        | `() => void`                                                       | -                     |
| onTimerEnd     | The callback function when the timer end          | `() => void`                                                       | -                     |
| locale         | The locale of the component                       | `string`                                                           | -                     |
| localeProps    | The props of locale                               | `IntlLocaleProps`                                                  | -                     |

> Note: Other properties are inherited from ProFormCaptcha component.
