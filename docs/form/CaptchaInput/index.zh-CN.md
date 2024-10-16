---
toc: content
---

## CaptchaInput

CaptchaInput，提供了一个可以获取验证码的按钮和一个输入验证码的文本框。

与 [ProComponents](https://procomponents.ant.design/) 的 [ProFormCaptcha](https://procomponents.ant.design/components/field-set#proformcaptcha) 组件类似，但最大的区别是：

  - ProFormCaptcha 提供了 `onGetCaptcha` 函数来实现获取验证码的逻辑，CaptchaInput 的函数名为 `onGenerate`
  - ProFormCaptcha 的 `onGetCaptcha` 函数定义是 `(phone)=>Promise<any>`，CaptchaInput 的 `onGenerate` 函数定义是 `(mobile?: string) => boolean | void | Promise<boolean | void>`，后者支持更丰富的返回数据类型
  - ProFormCaptcha 的 `onGetCaptcha` 函数只能通过抛出异常来中止触发倒计时的动作，CaptchaInput 的 `onGenerate` 函数可以依据多种类型来自动判断是否需要启动倒计时（**这在弹出额外的滑块验证码的时候特别有用**）
  - CaptchaInput 额外提供了 `onTimerBegin` 函数来初始化其他工作；提供了 `onTimerEnd` 函数来进行额外的清理工作

### 导入组件

```jsx | pure
import {CaptchaInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

<code src="./demo.zh-CN.tsx"></code>

### 组件属性

#### CaptchaInputProps

<API src="@/form/CaptchaInput/index.tsx" hideTitle></API>
