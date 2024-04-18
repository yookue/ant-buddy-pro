---
toc: content
---

## ChronoTuple

ChronoTuple, provides a capability that displaying a number input box and a select box with chrono units, options come from [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html).

### Import

```jsx | pure
import {ChronoTuple} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {ChronoTuple} from '@yookue/ant-buddy-pro';

export default () => {
    const [widthBlock, setWidthBlock] = React.useState(false);

    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ProForm.Group>
                <ProFormSwitch
                    label='Width Block'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: widthBlock,
                    }}
                    onChange={(value) => {
                        setWidthBlock(value ? true : false);
                    }}
                />
            </ProForm.Group>
            <Divider/>
            <ChronoTuple
                digitProps={{
                    name: 'durationAmount',
                    label: 'Duration',
                    placeholder: 'Amount',
                }}
                selectProps={{
                    name: 'durationUnit',
                    placeholder: 'Unit',
                    localeProps: {
                        millis: 'Millis',
                        seconds: 'Seconds',
                        minutes: 'Minutes',
                        hours: 'Hours',
                        days: 'Days',
                        weeks: 'Weeks',
                        months: 'Months',
                        years: 'Years',
                        forever: 'Forever',
                    }
                }}
                widthBlock={widthBlock}
            />
        </ProForm>
    );
}
```

### Properties

#### ChronoTupleProps

<API src="@/form/ChronoTuple/index.tsx" hideTitle></API>
