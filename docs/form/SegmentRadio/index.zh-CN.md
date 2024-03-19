---
toc: content
---

## SegmentRadio

与 [Ant Design](https://ant.design/) 的 [Segmented](https://4x.ant.design/components/segmented/) 类似，但是包装了一层 [ProForm](https://github.com/ant-design/pro-components/tree/v1/packages/form) 的特有属性。

### 导入组件

```jsx | pure
import {SegmentRadio} from '@yookue/ant-buddy-pro';
```

### 使用示例

#### 使用 fieldProps options，不使用 request

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {SegmentRadio} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <SegmentRadio
                name='foobar'
                label='请打分'
                fieldProps={{
                    defaultValue: 'good',
                    options: [
                        {
                            label: '好',
                            value: 'good',
                        },
                        {
                            label: '很好',
                            value: 'excellent',
                        },
                        {
                            label: '非常好',
                            value: 'perfect',
                        }
                    ]
                }}
            />
        </ProForm>
    );
}
```

#### 使用 request, 不使用 fieldProps options

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {SegmentRadio} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm autoFocusFirstInput={false} submitter={false}>
            <SegmentRadio
                name='foobar'
                label='请打分'
                fieldProps={{
                    defaultValue: 'good',
                }}
                request={async () => [
                    {
                        label: '好',
                        value: 'good',
                    },
                    {
                        label: '很好',
                        value: 'excellent',
                    },
                    {
                        label: '非常好',
                        value: 'perfect',
                    }
                ]}
            />
        </ProForm>
    );
}
```

### 组件属性

#### SegmentRadioProps

<API src="@/form/SegmentRadio/index.tsx" hideTitle></API>
