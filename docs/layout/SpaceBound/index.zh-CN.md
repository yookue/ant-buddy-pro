---
toc: content
---

## SpaceBound

与 [Ant Design](https://ant.design/) 的 [Space](https://4x.ant.design/components/space/) 组件类似，`SpaceBound` 用于提供内间距包裹子组件。
但不同的是，`Space` 用于间隔两个或两个以上的组件，`SpaceBound` 可用于间隔任意数量的子组件，哪怕只有一个子组件。

### 导入组件

```jsx | pure
import {SpaceBound} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {SpaceBound} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <SpaceBound size='middle' containerStyle={{border: '1px solid #f5f2f0'}}>
            <span>这是第一个子节点。</span>
            <span>这是第二个子节点。</span>
        </SpaceBound>
    );
}
```

### 组件属性

#### SpaceBoundProps

<API src="@/layout/SpaceBound/index.tsx" hideTitle></API>
