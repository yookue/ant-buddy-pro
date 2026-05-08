---
title: AvatarUpload
toc: content
order: 5
---

## 组件说明

AvatarUpload，可以显示一个头像，并支持上传和裁剪。

## 导入组件

```jsx | pure
import {AvatarUpload} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                  | 说明                  | 类型                                                                                                   | 默认值                   |
|---------------------|---------------------|------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix         | 组件的 CSS 类名前缀        | `string`                                                                                             | `'abp-avatar-upload'` |
| containerClazz      | 容器 div 的 CSS 类名     | `string`                                                                                             | -                     |
| containerStyle      | 容器 div 的 CSS 样式     | `React.CSSProperties`                                                                                | -                     |
| fieldRef            | 组件的 ref 句柄          | `React.Ref<AvatarUploadRef \| null \| undefined>`                                                    | -                     |
| imageSrc            | 图片源                 | `string`                                                                                             | -                     |
| fallbackSrc         | 备用图片源               | `string`                                                                                             | -                     |
| shape               | 组件的形状               | `'circle' \| 'square'`                                                                               | `'circle'`            |
| avatarProps         | 头像属性                | `Omit<AvatarProps, 'src' \| 'srcSet' \| 'shape' \| 'children'>`                                      | -                     |
| imageProps          | 图像属性                | `Omit<RcImageProps, 'src' \| 'srcSet' \| 'fallback' \| 'width' \| 'height' \| 'preview' \| 'title'>` | -                     |
| uploadEnabled       | 是否启用上传              | `boolean`                                                                                            | `false`               |
| uploadProps         | 上传属性                | `FileUploadProps`                                                                                    | -                     |
| cropEnabled         | 是否启用裁剪              | `boolean`                                                                                            | `true`                |
| cropProps           | 裁剪属性                | `Omit<ImgCropProps, 'children'>`                                                                     | -                     |
| tooltipCtrl         | 是否使用 Tooltip        | `boolean`                                                                                            | -                     |
| tooltipProps        | Tooltip 属性          | `TooltipProps`                                                                                       | -                     |
| onImageSrcChange    | 图片源变化时的回调函数         | `(src?: string) => void`                                                                             | -                     |
| onFallbackSrcChange | 备用图片源变化时的回调函数       | `(src?: string) => void`                                                                             | -                     |
| locale              | 组件的语言, e.g. 'zh_CN' | `string`                                                                                             | -                     |
| localeProps         | 多语言属性               | `IntlLocaleProps`                                                                                    | -                     |
