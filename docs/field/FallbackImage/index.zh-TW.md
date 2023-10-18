---
toc: content
---

## FallbackImage

FallbackImage 提供了一個加載圖片備用源的選項，用以在圖片常規源無法加載的時候顯示。

### 導入組件

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

### 組件屬性

#### FallbackImageProps

<API src="@/field/FallbackImage/index.tsx" hideTitle></API>
