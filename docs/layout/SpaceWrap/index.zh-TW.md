---
toc: content
---

## SpaceWrap

與 [Ant Design](https://ant.design/) 的 [Space](https://4x.ant.design/components/space/) 組件類似，`SpaceWrap` 用於提供內間距包裹子組件。
但不同的是，`Space` 用於間隔兩個或兩個以上的組件，`SpaceWrap` 可用於間隔任意數量的子組件，哪怕只有壹個子組件。

### 導入組件

```jsx | pure
import {SpaceWrap} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {SpaceWrap} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <SpaceWrap size={['small', 'middle']} containerStyle={{border: '1px solid #f5f2f0'}}>
            <span>這裏是壹個子節點。</span>
        </SpaceWrap>
    );
}
```

### 組件屬性

#### SpaceWrapProps

<API src="@/layout/SpaceWrap/index.tsx" hideTitle></API>
