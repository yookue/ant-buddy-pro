---
toc: content
---

## SpaceBound

Similar to [Space](https://4x.ant.design/components/space/) of [Ant Design](https://ant.design/), `SpaceBound` provides padding spaces.
The difference is that, the `Space` provides spaces between more than one component, the `SpaceBound` wraps it's child/children component(s), even there is a single child.

### Import

```jsx | pure
import {SpaceBound} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {SpaceBound} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <SpaceBound size='middle' containerStyle={{border: '1px solid #f5f2f0'}}>
            <span>Here is the first child content.</span>
            <span>Here is the second child content.</span>
        </SpaceBound>
    );
}
```

### Properties

#### SpaceBoundProps

<API src="@/layout/SpaceBound/index.tsx" hideTitle></API>
