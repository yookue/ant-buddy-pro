---
toc: content
---

## FallbackImage

FallbackImage 提供了一个加载图片备用源的选项，用以在图片常规源无法加载的时候显示。

### 导入组件

```jsx | pure
import {FallbackImage} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {message} from 'antd';
import {FallbackImage} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <FallbackImage
            width={120}
            height={120}
            src='does-not-exists.png'
            fallback={() => {
                return `https://yookue.github.io/ant-buddy-pro/assets/ico/logo-icon.svg?timestamp=${Date.now()}`;
            }}
        />
    );
}
```

### 组件属性

#### FallbackImageProps

<API src="@/field/FallbackImage/index.tsx" hideTitle></API>
