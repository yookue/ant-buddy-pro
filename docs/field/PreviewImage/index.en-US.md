---
title: PreviewImage
toc: content
---

## Description

PreviewImage, provides a preview image component with fallback capability.

## Import

```jsx | pure
import {PreviewImage} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property    | Description                           | Type                                                                                                    | Default               |
|-------------|---------------------------------------|---------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix | The CSS class prefix of the component | `string`                                                                                                | `'abp-preview-image'` |
| src         | The source of the image               | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |
| fallback    | The fallback source of the image      | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/image" target="_blank">Image</a> component.
