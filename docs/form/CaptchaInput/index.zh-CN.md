---
title: CaptchaInput
toc: content
order: 10
---

## 组件说明

CaptchaInput，提供了一个可以获取验证码的按钮和一个输入验证码的文本框。

与 [ProComponents](https://procomponents.ant.design) 的 [ProFormCaptcha](https://procomponents.ant.design/components/field-set#proformcaptcha) 组件类似，但最大的区别是：

  - ProFormCaptcha 提供了 `onGetCaptcha` 函数来实现获取验证码的逻辑，CaptchaInput 的函数名为 `onGenerate`
  - ProFormCaptcha 的 `onGetCaptcha` 函数定义是 `(phone)=>Promise<any>`，CaptchaInput 的 `onGenerate` 函数定义是 `(mobile?: string) => boolean | void | Promise<boolean | void>`，后者支持更丰富的返回数据类型
  - ProFormCaptcha 的 `onGetCaptcha` 函数只能通过抛出异常来中止触发倒计时的动作，CaptchaInput 的 `onGenerate` 函数可以依据多种类型来自动判断是否需要启动倒计时（**这在弹出额外的滑块验证码的时候特别有用**）
  - CaptchaInput 额外提供了 `onTimerBegin` 函数来初始化其他工作；提供了 `onTimerEnd` 函数来进行额外的清理工作
  - CaptchaInput 额外提供了 `dependName` 用于校验第三方字段，配合 `autoValidate` 来控制是否自动启用此功能，可用于当手机号（和其他字段，例如国际冠码）校验通过才允许点击获取验证码

## 导入组件

```tsx | pure
import {CaptchaInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 说明                            | 类型                                                                 | 默认值                   |
|----------------|-------------------------------|--------------------------------------------------------------------|-----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀                  | `string`                                                           | `'abp-captcha-input'` |
| containerClazz | 容器 div 的 CSS 类名               | `string`                                                           | -                     |
| containerStyle | 容器 div 的 CSS 样式               | `React.CSSProperties`                                              | -                     |
| fieldRef       | 组件的 ref 句柄                    | `React.Ref<CaptchaInputRef \| null \| undefined>`                  | -                     |
| autoValidate   | 是否自动校验 phoneName 和 dependName | `boolean`                                                          | -                     |
| dependName     | 发送验证码之前要校验的字段名                | `NamePath`                                                         | -                     |
| timerInterval  | 计时器的间隔，单位毫秒                   | `number`                                                           | `1000`                |
| onGenerate     | 生成验证码时的回调函数                   | `(mobile?: string) => boolean \| void \| Promise<boolean \| void>` | -                     |
| onTimer        | 计时变化时的回调函数                    | `(count: number) => void`                                          | -                     |
| onTimerBegin   | 计时开始时的回调函数                    | `() => void`                                                       | -                     |
| onTimerEnd     | 计时结束时的回调函数                    | `() => void`                                                       | -                     |
| locale         | 组件的语言, e.g. 'zh_CN'           | `string`                                                           | -                     |
| localeProps    | 多语言属性                         | `IntlLocaleProps`                                                  | -                     |

> 注意: 其他属性继承自 ProFormCaptcha 组件。
