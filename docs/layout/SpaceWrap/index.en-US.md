---
toc: content
---

## SpaceWrap

Similar to [Space](https://4x.ant.design/components/space/) of [Ant Design](https://ant.design/), `SpaceWrap` provides padding spaces.
The difference is that, the `Space` provides spaces between more than one component, the `SpaceWrap` wraps it's child/children component(s), even there is a single child.

### Import

```jsx | pure
import {SpaceWrap} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {SpaceWrap} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <SpaceWrap size={['small', 'middle']} containerStyle={{border: '1px solid #f5f2f0'}}>
            <span>Here is a child content.</span>
        </SpaceWrap>
    );
}
```

### Properties

#### SpaceWrapProps

<API src="@/layout/SpaceWrap/index.tsx" hideTitle></API>
