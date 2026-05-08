---
title: FallbackImage
toc: content
---

## Description

FallbackImage, provides a fallback option when the image source can not be loaded.

## Import

```jsx | pure
import {FallbackImage} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.tsx"></code>

## Properties

| Property    | Description                           | Type                                                                                                    | Default                |
|-------------|---------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------|
| clazzPrefix | The CSS class prefix of the component | `string`                                                                                                | `'abp-fallback-image'` |
| src         | The source of the image               | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                      |
| fallback    | The fallback source of the image      | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                      |

> Note: Other properties are inherited from rc-image's Image component.
