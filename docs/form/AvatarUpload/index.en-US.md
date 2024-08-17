---
toc: content
---

## AvatarUpload

AvatarUpload, provides an avtar with upload and crop capability.

### Import

```jsx | pure
import {AvatarUpload} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Button, Divider} from 'antd';
import {RollbackOutlined} from '@ant-design/icons';
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
                        label='Readonly'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: readonly,
                        }}
                        onChange={(value) => {
                            setReadonly(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Crop Enabled'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: cropEnabled,
                            disabled: readonly,
                        }}
                        onChange={(value) => {
                            setCropEnabled(value ? true : false);
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip Ctrl'
                        checkedChildren='True'
                        unCheckedChildren='False'
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
                        Restore
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
                    modalOk: 'OK',
                    modalCancel: 'Cancel',
                }}
                tooltipCtrl={tooltipCtrl}
                tooltipProps={{
                    title: 'User Avatar',
                }}
                localeProps={{
                    'upload': 'Upload',
                    'maxFileSize': 'File size cant not be greater than {}{}',
                    'typesDisallowed': 'File type is disallowed',
                    'typesDisallowedDetail': 'Only allowed {} files',
                    'cropModalTitle': 'Avatar Crop',
                }}
            />
        </>
    );
}
```

### Properties

#### AvatarUploadProps

<API src="@/form/AvatarUpload/index.tsx" hideTitle></API>
