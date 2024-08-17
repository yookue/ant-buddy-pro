---
toc: content
---

## AvatarUpload

AvatarUpload，可以显示一个头像，并支持上传和裁剪。

### 导入组件

```jsx | pure
import {AvatarUpload} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Button, Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {AvatarUpload} from '@yookue/ant-buddy-pro';

export default () => {
    const [readonly, setReadonly] = React.useState(false);
    const [cropEnabled, setCropEnabled] = React.useState(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState(false);
    const avatarRef = React.useRef(null);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProForm.Group>
                    <ProFormSwitch
                        label='只读'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: readonly,
                        }}
                        onChange={(value) => {
                            setReadonly(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='启用裁剪'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: cropEnabled,
                            disabled: readonly,
                        }}
                        onChange={(value) => {
                            setCropEnabled(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip 控件'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tooltipCtrl,
                        }}
                        onChange={(value) => {
                            setTooltipCtrl(value ? true : false);
                        }}
                    />
                    <Button
                        icon={<RollbackOutlined/>}
                        onClick={() => avatarRef.current.setImageSrc('https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png')}
                    >
                        恢复
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <AvatarUpload
                ref={avatarRef}
                imageSrc='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
                readonly={readonly}
                uploadProps={{
                    name: 'avatar',
                    allowedFileTypes: [
                        'image/jpeg',
                        'image/png',
                    ],
                    warnWithTypes: true,
                    maxFileSize: 1,
                    fileSizeUint: 'MB',
                }}
                cropEnabled={cropEnabled}
                cropProps={{
                    minZoom: 0.8,
                    modalOk: '确定',
                    modalCancel: '取消',
                }}
                tooltipCtrl={tooltipCtrl}
                tooltipProps={{
                    title: '用户头像',
                }}
                localeProps={{
                    'upload': '上传',
                    'maxFileSize': '文件大小不能超过 {}{}',
                    'typesDisallowed': '文件类型不允许',
                    'typesDisallowedDetail': '只允许 {} 类型的文件',
                    'cropModalTitle': '头像裁剪',
                }}
            />
        </>
    );
}
```

### 组件属性

#### AvatarUploadProps

<API src="@/form/AvatarUpload/index.tsx" hideTitle></API>
