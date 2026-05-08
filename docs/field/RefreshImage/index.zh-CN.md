---
title: RefreshImage
toc: content
order: 60
---

## 组件说明

RefreshImage 是一个可点击刷新的图片组件。

典型的场景是配合图形验证码使用，尤其是服务端不使用 Node.js 而生成图形验证码的情况。

## 导入组件

```jsx | pure
import {RefreshImage} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述                  | 类型                                                                                                      | 默认值                   |
|----------------|---------------------|---------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀        | `string`                                                                                                | `'abp-refresh-image'` |
| containerClazz | 容器 div 的 CSS 类名     | `string`                                                                                                | -                     |
| containerStyle | 容器 div 的 CSS 样式     | `React.CSSProperties`                                                                                   | -                     |
| handCursor     | 是否手型鼠标指针样式          | `boolean`                                                                                               | `true`                |
| src            | 图片源                 | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |
| fallback       | 备用图片源               | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |
| onRefresh      | 图片刷新后的回调函数          | `(currentSrc?: string, previousSrc?: string) => void`                                                   | -                     |
| locale         | 组件的语言, e.g. 'zh_CN' | `string`                                                                                                | -                     |
| localeProps    | 多语言属性               | `IntlLocaleProps`                                                                                       | -                     |

> 注：其他属性继承自 Ant Design 的 <a href="https://ant.design/components/image" target="_blank">Image</a> 组件。
