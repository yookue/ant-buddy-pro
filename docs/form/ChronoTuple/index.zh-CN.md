---
toc: content
---

## ChronoTuple

ChronoTuple, 提供了一个可以输入数值和选择时间单位的选择框，选项数据来源于 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

### 导入组件

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
    const [widthBlock, setWidthBlock] = React.useState(false);

    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ProForm.Group>
                <ProFormSwitch
                    label='匹配宽度'
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
                    label: '时间间隔',
                    placeholder: '数值',
                }}
                selectProps={{
                    name: 'durationUnit',
                    placeholder: '单位',
                    localeProps: {
                        millis: '毫秒',
                        seconds: '秒',
                        minutes: '分',
                        hours: '小时',
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

### 组件属性

#### ChronoTupleProps

<API src="@/form/ChronoTuple/index.tsx" hideTitle></API>
