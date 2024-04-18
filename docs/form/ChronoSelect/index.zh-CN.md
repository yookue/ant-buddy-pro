---
toc: content
---

## ChronoSelect

ChronoSelect, 提供了一个可以选择时间单位的选择框，选项数据来源于 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

### 导入组件

```jsx | pure
import {ChronoSelect} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {ChronoSelect} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ChronoSelect
                name='foobar'
                placeholder='请选择此项'
                localeProps={{
                    millis: '毫秒',
                    seconds: '秒',
                    minutes: '分',
                    hours: '小时',
                    days: '天',
                    weeks: '周',
                    months: '月',
                    years: '年',
                    forever: '永久',
                }}
            />
        </ProForm>
    );
}
```

### 组件属性

#### ChronoSelectProps

<API src="@/form/ChronoSelect/index.tsx" hideTitle></API>
