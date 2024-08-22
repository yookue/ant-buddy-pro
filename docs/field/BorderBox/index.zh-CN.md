---
toc: content
---

## BorderBox

BorderBox 可以显示一个带边框的控件。

### 导入组件

```jsx | pure
import {BorderBox} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Checkbox, Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {BorderBox} from '@yookue/ant-buddy-pro';

export default () => {
    const [bordered, setBordered] = React.useState(true);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormSwitch
                    label='边框'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: bordered,
                    }}
                    onChange={(value) => {
                        setBordered(value ? true : false);
                    }}
                />
            </ProForm>
            <Divider/>
            <BorderBox bordered={bordered} containerStyle={{padding: '12px'}}>
                <Checkbox>复选框</Checkbox>
            </BorderBox>
        </>
    );
}
```

### 组件属性

#### BorderBoxProps

<API src="@/field/BorderBox/index.tsx" hideTitle></API>
