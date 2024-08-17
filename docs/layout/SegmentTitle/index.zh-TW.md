---
toc: content
---

## SegmentTitle

SegmentTitle 組件，可展示壹個帶有裝飾前綴的標題欄，用於分割頁面區域。

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
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='裝飾物位置'
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
                        {label: '無', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='預設樣式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默認', value: 'default'},
                        {label: '成功', value: 'success'},
                        {label: '處理中', value: 'processing'},
                        {label: '警告', value: 'warning'},
                        {label: '錯誤', value: 'error'},
                        {label: '無', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <SegmentTitle
                ornament='1'
                ornamentPos={ornamentPos}
                content='SegmentTitle 標題内容'
                presetStyle={presetStyle}
            />
        </>
    );
}
```

### 組件屬性

##### SegmentTitleProps

<API src="@/layout/SegmentTitle/index.tsx" hideTitle></API>
