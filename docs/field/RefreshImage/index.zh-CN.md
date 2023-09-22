---
toc: content
---

## RefreshImage

RefreshImage 是一个可点击刷新的图片组件。典型的场景是配合图形验证码使用，尤其是服务端不使用 Node.js 而生成图形验证码的情况。

### 导入组件

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
            title='点击刷新图片'
            autoCursor={true}
            onRefresh={() => {
                message.success('图片已刷新');
            }}
        />
    );
}
```

### 组件属性

<API src="@/field/RefreshImage/index.tsx" hideTitle></API>
