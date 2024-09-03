---
toc: content
---

## LocaleInput

LocaleInput, provides a text input box with a dropdown div of locale input boxes, aiming to support multilingual capability for your application.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default <b><i>`actionDom`</i></b> attribute:
</Alert>

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {LocaleInput} from '@yookue/ant-buddy-pro';
```

### Example

> Each `popupInputProps` item has its own input properties, thus you can control them as you wish, such as marking someone of them to `disabled` or `readonly`, and so on.

> `popupQuickTags` can custom language input items quickly.

#### Props with field validation

<code src="./demo-1.en-US.tsx"></code>

#### Props without field validation

<code src="./demo-2.en-US.tsx"></code>

#### Tags with field validation

<code src="./demo-3.en-US.tsx"></code>

#### Tags without field validation, disabled

<code src="./demo-4.en-US.tsx"></code>

### Properties

#### LocaleInputProps

<API src="@/form/LocaleInput/index.tsx" hideTitle></API>
