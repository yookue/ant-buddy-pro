---
toc: content
---

## CodePreview

CodePreview 是一个用于展示代码预览的组件，可包含一个标题和一段文本，您也可以通过 `children` 属性来完全定制它。

### 导入组件

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
            <ProForm layout='horizontal' submitter={false}>
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
                        {label: '无', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <CodePreview
                titleContent='如何安装这个包？'
                textContent='npm install @yookue/ant-buddy-pro -S'
                titleProps={{
                    level: 5,
                }}
                textProps={{
                    copyable: true,
                }}
                usePresetStyle={presetStyle}
            />
        </>
    );
}
```

### 组件属性

#### CodePreviewProps

<API src="@/layout/CodePreview/index.tsx" hideTitle></API>
