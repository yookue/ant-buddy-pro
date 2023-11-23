---
toc: content
---

## WrapSpace

与 [Ant Design](https://ant.design/) 的 [Space](https://4x.ant.design/components/space/) 组件类似，`WrapSpace` 用于提供内间距包裹子组件。
但不同的是，`Space` 用于间隔两个或两个以上的组件，`WrapSpace` 可用于间隔任意数量的子组件，哪怕只有一个子组件。

### 导入组件

```jsx | pure
import {WrapSpace} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {WrapSpace} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <WrapSpace size={['small', 'middle']} containerStyle={{border: '1px solid #f5f2f0'}}>
            <span>这里是一个子节点。</span>
        </WrapSpace>
    );
}
```

### 组件属性

#### WrapSpaceProps

<API src="@/layout/WrapSpace/index.tsx" hideTitle></API>
