---
toc: content
---

## ChronoSelect

ChronoSelect, provides a capability that displaying a select box with chrono units, options come from [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html).

### Import

```jsx | pure
import {ChronoSelect} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {ProForm} from '@ant-design/pro-form';
import {ChronoSelect} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ChronoSelect
                name='foobar'
                placeholder='Please select this field'
                localeProps={{
                    millis: 'Millis',
                    seconds: 'Seconds',
                    minutes: 'Minutes',
                    hours: 'Hours',
                    days: 'Days',
                    weeks: 'Weeks',
                    months: 'Months',
                    years: 'Years',
                    forever: 'Forever',
                }}
            />
        </ProForm>
    );
}
```

### Properties

#### ChronoSelectProps

<API src="@/form/ChronoSelect/index.tsx" hideTitle></API>
