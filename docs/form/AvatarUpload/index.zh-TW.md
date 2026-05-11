---
title: AvatarUpload
toc: content
order: 1
---

## 組件說明

AvatarUpload，可以顯示壹個頭像，並支持上傳和裁剪。

## 導入組件

```tsx | pure
import {AvatarUpload} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                  | 說明                  | 類型                                                                                                   | 預設值                   |
|---------------------|---------------------|------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix         | 組件的 CSS 類名前綴        | `string`                                                                                             | `'abp-avatar-upload'` |
| containerClazz      | 容器 div 的 CSS 類名     | `string`                                                                                             | -                     |
| containerStyle      | 容器 div 的 CSS 樣式     | `React.CSSProperties`                                                                                | -                     |
| fieldRef            | 組件的 ref 句柄          | `React.Ref<AvatarUploadRef \| null \| undefined>`                                                    | -                     |
| imageSrc            | 圖片源                 | `string`                                                                                             | -                     |
| fallbackSrc         | 備用圖片源               | `string`                                                                                             | -                     |
| shape               | 組件的形狀               | `'circle' \| 'square'`                                                                               | `'circle'`            |
| avatarProps         | 頭像屬性                | `Omit<AvatarProps, 'src' \| 'srcSet' \| 'shape' \| 'children'>`                                      | -                     |
| imageProps          | 圖像屬性                | `Omit<RcImageProps, 'src' \| 'srcSet' \| 'fallback' \| 'width' \| 'height' \| 'preview' \| 'title'>` | -                     |
| uploadEnabled       | 是否啟用上傳              | `boolean`                                                                                            | `false`               |
| uploadProps         | 上傳屬性                | `FileUploadProps`                                                                                    | -                     |
| cropEnabled         | 是否啟用裁剪              | `boolean`                                                                                            | `true`                |
| cropProps           | 裁剪屬性                | `Omit<ImgCropProps, 'children'>`                                                                     | -                     |
| tooltipCtrl         | 是否使用 Tooltip        | `boolean`                                                                                            | -                     |
| tooltipProps        | Tooltip 屬性          | `TooltipProps`                                                                                       | -                     |
| onImageSrcChange    | 圖片源變化時的回調函數         | `(src?: string) => void`                                                                             | -                     |
| onFallbackSrcChange | 備用圖片源變化時的回調函數       | `(src?: string) => void`                                                                             | -                     |
| locale              | 組件的語言, e.g. 'zh_TW' | `string`                                                                                             | -                     |
| localeProps         | 多語言屬性               | `IntlLocaleProps`                                                                                    | -                     |
