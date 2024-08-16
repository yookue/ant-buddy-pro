---
toc: content
---

## SegmentTitle

SegmentTitle 组件，可展示一个带有装饰前缀的标题栏，用于分割页面区域。

### Import

```jsx | pure
import {SegmentTitle} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {SegmentTitle} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');
    const [presetStyle, setPresetStyle] = React.useState('default');

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='装饰物位置'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '无', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='预设样式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默认', value: 'default'},
                        {label: '成功', value: 'success'},
                        {label: '处理中', value: 'processing'},
                        {label: '警告', value: 'warning'},
                        {label: '错误', value: 'error'},
                        {label: '无', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <SegmentTitle
                ornament='1'
                ornamentPos={ornamentPos}
                content='SegmentTitle 标题内容'
                presetStyle={presetStyle}
            />
        </>
    );
}
```

### 组件属性

##### SegmentTitleProps

<API src="@/layout/SegmentTitle/index.tsx" hideTitle></API>
