---
toc: content
---

## BorderBox

BorderBox 可以顯示壹個帶邊框的控件。

### 導入組件

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
                    label='邊框'
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
                <Checkbox>復選框</Checkbox>
            </BorderBox>
        </>
    );
}
```

### 組件屬性

#### BorderBoxProps

<API src="@/field/BorderBox/index.tsx" hideTitle></API>
