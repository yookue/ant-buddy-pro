---
toc: content
---

## ChronoTuple

ChronoTuple, 提供了一個可以輸入數值和選擇時間單位的選擇框，選項數據來源於 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

### 導入組件

```jsx | pure
import {ChronoTuple} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {ChronoTuple} from '@yookue/ant-buddy-pro';

export default () => {
    const [widthBlock, setWidthBlock] = React.useState(true);

    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ProForm.Group>
                <ProFormSwitch
                    label='匹配寬度'
                    checkedChildren='是'
                    unCheckedChildren='否'
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
                    label: '時間間隔',
                    placeholder: '數值',
                }}
                selectProps={{
                    name: 'durationUnit',
                    placeholder: '單位',
                    localeProps: {
                        millis: '毫秒',
                        seconds: '秒',
                        minutes: '分',
                        hours: '小時',
                        days: '天',
                        weeks: '周',
                        months: '月',
                        years: '年',
                        forever: '永久',
                    }
                }}
                widthBlock={widthBlock}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### ChronoTupleProps

<API src="@/form/ChronoTuple/index.tsx" hideTitle></API>
