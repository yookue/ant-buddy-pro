---
toc: content
---

## FallbackImage

FallbackImage, provides a fallback option when the image source can not be loaded.

### Import

```jsx | pure
import {FallbackImage} from '@yookue/ant-buddy-pro';
```

### Example

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
            fallbackSrc={() => {
                return `https://yookue.github.io/ant-buddy-pro/assets/ico/logo-icon.svg?timestamp=${Date.now()}`;
            }}
        />
    );
}
```

### Properties

<API src="@/field/FallbackImage/index.tsx" hideTitle></API>
