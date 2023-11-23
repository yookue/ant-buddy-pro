---
toc: content
---

## WrapSpace

Similar to [Space](https://4x.ant.design/components/space/) of [Ant Design](https://ant.design/), `WrapSpace` provides padding spaces.
The difference is that, the `Space` provides spaces between more than one component, the `WrapSpace` wraps it's child/children component(s), even there is a single child.

### Import

```jsx | pure
import {WrapSpace} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {WrapSpace} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <WrapSpace size={['small', 'middle']} containerStyle={{border: '1px solid #f5f2f0'}}>
            <span>Here is a child content.</span>
        </WrapSpace>
    );
}
```

### Properties

#### WrapSpaceProps

<API src="@/layout/WrapSpace/index.tsx" hideTitle></API>
