---
toc: content
---

## ApartTitle

ApartTitle 組件，可展示壹個帶有裝飾圖標的標題欄，用於分割頁面區域。

### Import

```jsx | pure
import {ApartTitle} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {ApartTitle} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');
    const [presetStyle, setPresetStyle] = React.useState('default');

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
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
                        {label: '經典', value: 'classic'},
                        {label: '無', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <ApartTitle
                ornament={<AppstoreOutlined/>}
                ornamentPos={ornamentPos}
                content='ApartTitle 標題内容'
                presetStyle={presetStyle}
            />
        </>
    );
}
```

### 組件屬性

##### ApartTitleProps

<API src="@/layout/ApartTitle/index.tsx" hideTitle></API>
