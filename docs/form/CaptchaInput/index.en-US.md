---
toc: content
---

## CaptchaInput

CaptchaInput, provides a text input box and a button with captcha generation capability.

Similar to [ProFormCaptcha](https://procomponents.ant.design/components/field-set#proformcaptcha) of [ProComponents](https://procomponents.ant.design/), the most differences are:

- ProFormCaptcha provides a function named `onGetCaptcha` to trigger the captcha generation, while CaptchaInput named `onGenerate`
- The function declaration of ProFormCaptcha `onGetCaptcha` is `(phone)=>Promise<any>`, while the declaration of CaptchaInput `onGenerate` is `(mobile?: string) => boolean | void | Promise<boolean | void>`, the latter one supports much richer return data types
- The function of ProFormCaptcha `onGetCaptcha` only can stop captcha generation by throwing an exception, while CaptchaInput `onGenerate` provides more return types to automatically decide should start the generation or not (**This is especially useful when popups an extra slider captcha**)
- CaptchaInput provides a function named `onTimerBegin` to initialize additional preparations, and provides a function `onTimerEnd` to do the additional cleanups

### Import

```jsx | pure
import {CaptchaInput} from '@yookue/ant-buddy-pro';
```

### Example

<code src="./demo.en-US.tsx"></code>

### Properties

#### CaptchaInputProps

<API src="@/form/CaptchaInput/index.tsx" hideTitle></API>
