---
title: RemoteField
toc: content
order: 65
---

## Description

RemoteField component, can render a field with fetching remote data.

The reason for the appeal is, not all the components of [Ant Design](https://ant.design) are wrapped by [Ant ProComponents](https://procomponents.ant.design), this component provides an ability to render field with remote request support.

## Import

```jsx | pure
import {RemoteField} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                      | Type                                                                   | Default              |
|----------------|--------------------------------------------------|------------------------------------------------------------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component            | `string`                                                               | `'abp-remote-field'` |
| containerClazz | The CSS class name of the container div          | `string`                                                               | -                    |
| containerStyle | The CSS style of the container div               | `React.CSSProperties`                                                  | -                    |
| request        | The remote request                               | `(params?: any) => Promise<any>`                                       | -                    |
| render         | The callback function after fetching remote data | `React.ReactNode \| ((outcome?: any) => React.ReactNode \| undefined)` | -                    |
| fallback       | The fallback of the component                    | `React.ReactNode \| (() => React.ReactNode \| undefined)`              | `<Spin/>`            |
| autoStart      | Whether auto start the fetching request          | `boolean`                                                              | `true`               |

> Note: Other properties are inherited from Pro Components' ProFormFieldRemoteProps.
