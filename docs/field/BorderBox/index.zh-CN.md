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
    const [borderTop, setBorderTop] = React.useState(true);
    const [borderRight, setBorderRight] = React.useState(true);
    const [borderBottom, setBorderBottom] = React.useState(true);
    const [borderLeft, setBorderLeft] = React.useState(true);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProForm.Group>
                    <ProFormSwitch
                        label='顶部边框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderTop,
                        }}
                        onChange={(value) => {
                            setBorderTop(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='右侧边框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderRight,
                        }}
                        onChange={(value) => {
                            setBorderRight(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='底部边框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderBottom,
                        }}
                        onChange={(value) => {
                            setBorderBottom(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='左侧边框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderLeft,
                        }}
                        onChange={(value) => {
                            setBorderLeft(value ? true : false);
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <BorderBox
                borderTop={borderTop}
                borderRight={borderRight}
                borderBottom={borderBottom}
                borderLeft={borderLeft}
                containerStyle={{padding: '12px'}}
            >
                <Checkbox>复选框</Checkbox>
            </BorderBox>
        </>
    );
}
```

### 组件属性

#### BorderBoxProps

<API src="@/field/BorderBox/index.tsx" hideTitle></API>
