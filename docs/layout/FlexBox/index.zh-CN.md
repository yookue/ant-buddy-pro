---
toc: content
---

## FlexBox

FlexBox 组件，一个用于对齐的弹性布局容器。

### 导入组件

```jsx | pure
import {FlexBox} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Button, Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {FlexBox} from '@yookue/ant-buddy-pro';

export default () => {
    const [justifyContent, setJustifyContent] = React.useState('center');
    const [alignItems, setAlignItems] = React.useState('center');
    const [gap, setGap] = React.useState('middle');

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='主轴空间'
                    radioType='button'
                    fieldProps={{
                        value: justifyContent,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setJustifyContent(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Start', value: 'start'},
                        {label: 'Center', value: 'center'},
                        {label: 'End', value: 'end'},
                        {label: 'Space-Between', value: 'space-between'},
                        {label: 'Apace-Around', value: 'space-around'},
                        {label: 'Space-Evenly', value: 'space-evenly'},
                    ]}
                />
                <ProFormRadio.Group
                    label='交叉轴对齐'
                    radioType='button'
                    fieldProps={{
                        value: alignItems,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setAlignItems(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Start', value: 'start'},
                        {label: 'Center', value: 'center'},
                        {label: 'End', value: 'end'},
                        {label: 'Stretch', value: 'stretch'},
                    ]}
                />
                <ProFormRadio.Group
                    label='间隙'
                    radioType='button'
                    fieldProps={{
                        value: gap,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setGap(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '小', value: 'small'},
                        {label: '中', value: 'middle'},
                        {label: '大', value: 'large'},
                        {label: '自定义', value: '48px'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <FlexBox
                justifyContent={justifyContent}
                alignItems={alignItems}
                gap={gap}
                containerStyle={{
                    height: '160px',
                }}
            >
                <Button disabled={true}>按钮</Button>
                <Button disabled={true}>按钮</Button>
                <Button disabled={true}>按钮</Button>
                <Button disabled={true}>按钮</Button>
            </FlexBox>
        </>
    );
}
```

### 组件属性

#### FlexBoxProps

<API src="@/layout/FlexBox/index.tsx" hideTitle></API>
