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
import {Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {AvatarUpload} from '@yookue/ant-buddy-pro';

export default () => {
    const [readonly, setReadonly] = React.useState(false);
    const [cropEnabled, setCropEnabled] = React.useState(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState(false);

    return (
        <>
            <ProForm autoFocusFirstInput={false} submitter={false}>
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
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <AvatarUpload
                name='avatar'
                readonly={readonly}
                imageSrc='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
                uploadProps={{
                    allowedFileTypes: [
                        'image/jpeg',
                        'image/png',
                    ],
                    warnWithTypes: true,
                    maxFileSize: 500,
                    fileSizeUint: 'KB',
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
