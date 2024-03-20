---
toc: content
---

## SegmentRadio

Similar to [Segmented](https://4x.ant.design/components/segmented/) of [Ant Design](https://ant.design/), but wraps it with [ProForm](https://github.com/ant-design/pro-components/tree/v1/packages/form) features.

### Import

```jsx | pure
import {SegmentRadio} from '@yookue/ant-buddy-pro';
```

### Example

#### With options

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {SegmentRadio} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <SegmentRadio
                name='foobar'
                label='Rate this'
                fieldProps={{
                    defaultValue: 'good',
                    options: [
                        {
                            label: 'Good',
                            value: 'good',
                        },
                        {
                            label: 'Excellent',
                            value: 'excellent',
                        },
                        {
                            label: 'Perfect',
                            value: 'perfect',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### With request

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {SegmentRadio} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <SegmentRadio
                name='foobar'
                label='Rate this'
                fieldProps={{
                    defaultValue: 'good',
                }}
                request={async () => [
                    {
                        label: 'Good',
                        value: 'good',
                    },
                    {
                        label: 'Excellent',
                        value: 'excellent',
                    },
                    {
                        label: 'Perfect',
                        value: 'perfect',
                    }
                ]}
            />
        </ProForm>
    );
}
```

#### With valueEnum

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {SegmentRadio} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <SegmentRadio
                name='foobar'
                label='Rate this'
                fieldProps={{
                    defaultValue: 'good',
                }}
                valueEnum={{
                    good: 'Good',
                    excellent: 'Excellent',
                    perfect: 'Perfect',
                }}
            />
        </ProForm>
    );
}
```

### Properties

#### SegmentRadioProps

<API src="@/form/SegmentRadio/index.tsx" hideTitle></API>
