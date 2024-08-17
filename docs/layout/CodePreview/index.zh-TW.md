---
toc: content
---

## CodePreview

CodePreview 是一個用於展示代碼預覽的組件，可包含一個標題和一段文本，您也可以通過 `children` 屬性來完全定製它。

### 導入組件

```jsx | pure
import {CodePreview} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {CodePreview} from '@yookue/ant-buddy-pro';

export default () => {
    const [presetStyle, setPresetStyle] = React.useState('default');

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
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
                        {label: '無', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <CodePreview
                titleContent='如何安裝這個包？'
                textContent='npm install @yookue/ant-buddy-pro -S'
                titleProps={{
                    level: 5,
                }}
                textProps={{
                    copyable: true,
                }}
                presetStyle={presetStyle}
            />
        </>
    );
}
```

### 組件屬性

#### CodePreviewProps

<API src="@/layout/CodePreview/index.tsx" hideTitle></API>
