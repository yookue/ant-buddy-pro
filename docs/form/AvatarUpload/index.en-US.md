---
title: AvatarUpload
toc: content
order: 5
---

## Description

AvatarUpload, provides an avtar with upload and crop capability.

## Import

```tsx | pure
import {AvatarUpload} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property            | Description                                       | Type                                                                                                 | Default               |
|---------------------|---------------------------------------------------|------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix         | The CSS class prefix of the component             | `string`                                                                                             | `'abp-avatar-upload'` |
| containerClazz      | The CSS class name of the container div           | `string`                                                                                             | -                     |
| containerStyle      | The CSS style of the container div                | `React.CSSProperties`                                                                                | -                     |
| fieldRef            | The ref of the component                          | `React.Ref<AvatarUploadRef \| null \| undefined>`                                                    | -                     |
| imageSrc            | The source of the image                           | `string`                                                                                             | -                     |
| fallbackSrc         | The fallback source of the image                  | `string`                                                                                             | -                     |
| shape               | The shape of the component                        | `'circle' \| 'square'`                                                                               | `'circle'`            |
| avatarProps         | The props of the avatar                           | `Omit<AvatarProps, 'src' \| 'srcSet' \| 'shape' \| 'children'>`                                      | -                     |
| imageProps          | The props of the image                            | `Omit<RcImageProps, 'src' \| 'srcSet' \| 'fallback' \| 'width' \| 'height' \| 'preview' \| 'title'>` | -                     |
| uploadEnabled       | Whether to enable upload                          | `boolean`                                                                                            | `false`               |
| uploadProps         | The props of uploading                            | `FileUploadProps`                                                                                    | -                     |
| cropEnabled         | Whether to enable crop                            | `boolean`                                                                                            | `true`                |
| cropProps           | The props of cropping                             | `Omit<ImgCropProps, 'children'>`                                                                     | -                     |
| tooltipCtrl         | Whether to use Tooltip                            | `boolean`                                                                                            | -                     |
| tooltipProps        | The props of Antd Tooltip                         | `TooltipProps`                                                                                       | -                     |
| onImageSrcChange    | The callback function when image source changed   | `(src?: string) => void`                                                                             | -                     |
| onFallbackSrcChange | The callback function when fallback image changed | `(src?: string) => void`                                                                             | -                     |
| locale              | The locale of the component                       | `string`                                                                                             | -                     |
| localeProps         | The props of locale                               | `IntlLocaleProps`                                                                                    | -                     |
