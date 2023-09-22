---
toc: content
---

## RefreshImage

RefreshImage 是一個可點擊刷新的圖片組件。典型的場景是配合圖形驗證碼使用，尤其是服務端不使用 Node.js 而生成圖形驗證碼的情況。

### 導入組件

```jsx | pure
import {RefreshImage} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {message} from 'antd';
import {RefreshImage} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <RefreshImage
            width={120}
            height={120}
            src={() => {
                return `https://yookue.github.io/ant-buddy-pro/assets/ico/logo-icon.svg?timestamp=${Date.now()}`;
            }}
            title='點擊刷新圖片'
            autoCursor={true}
            onRefresh={() => {
                message.success('圖片已刷新');
            }}
        />
    );
}
```

### 組件屬性

<API src="@/field/RefreshImage/index.tsx" hideTitle></API>
