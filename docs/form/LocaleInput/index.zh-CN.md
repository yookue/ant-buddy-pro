---
toc: content
---

## LocaleInput

LocaleInput，提供了一个包含多种语言下拉框的文本输入字段，以便让您的应用程序支持多语言特性。

### 使用前提

<Alert type='info'>
  如果您使用默认的 <b><i>`actionDom`</i></b> 属性，要使用此组件，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：
</Alert>

```bash
npm install @ant-design/icons --save
```

### 导入组件

```jsx | pure
import {LocaleInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

> `popupInputProps` 属性下的每项，都拥有其独立的属性，这样您可以充分自定义每个语言的特性，比如把某一项或某几项设置为 `禁用` 或 `只读` 状态。

> `popupQuickTags` 可以简单快速的自定义语言输入项。

#### Props 带校验

<code src="./demo-1.zh-CN.tsx"></code>

#### Props 无校验

<code src="./demo-2.zh-CN.tsx"></code>

#### Tags 带校验

<code src="./demo-3.zh-CN.tsx"></code>

#### Tags 无校验，已禁用

<code src="./demo-4.zh-CN.tsx"></code>

### 组件属性

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
