---
toc: content
---

## FlexBox

FlexBox 組件，一個用於對齊的彈性布局容器。

### 導入組件

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
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='主軸空間'
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
                    label='交叉軸對齊'
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
                    label='間隙'
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
                        {label: '自定義', value: '48px'},
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
                <Button disabled={true}>按鈕</Button>
                <Button disabled={true}>按鈕</Button>
                <Button disabled={true}>按鈕</Button>
                <Button disabled={true}>按鈕</Button>
            </FlexBox>
        </>
    );
}
```

### 組件屬性

#### FlexBoxProps

<API src="@/layout/FlexBox/index.tsx" hideTitle></API>