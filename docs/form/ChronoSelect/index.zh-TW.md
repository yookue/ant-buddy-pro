---
toc: content
---

## ChronoSelect

ChronoSelect, 提供了一個可以選擇時間單位的選擇框，選項數據來源於 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

### 導入組件

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
                placeholder='請選擇此項'
                localeProps={{
                    millis: '毫秒',
                    seconds: '秒',
                    minutes: '分',
                    hours: '小時',
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

### 組件屬性

#### ChronoSelectProps

<API src="@/form/ChronoSelect/index.tsx" hideTitle></API>
