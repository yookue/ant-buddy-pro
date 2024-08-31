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
import {ClearOutlined, PictureOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {AvatarUpload} from '@yookue/ant-buddy-pro';

export default () => {
    const [imageShape, setImageShape] = React.useState('circle');
    const [uploadEnabled, setUploadEnabled] = React.useState(false);
    const [cropEnabled, setCropEnabled] = React.useState(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState(false);
    const avatarUploadRef = React.useRef(null);

    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
            <ProForm.Group>
                <ProFormRadio.Group
                    label='Image Shape'
                    radioType='button'
                    fieldProps={{
                        value: imageShape,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setImageShape(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Circle', value: 'circle'},
                        {label: 'Square', value: 'square'},
                    ]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormSwitch
                    label='Upload Enabled'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: uploadEnabled,
                    }}
                    onChange={(value) => {
                        setUploadEnabled(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='Crop Enabled'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: cropEnabled,
                        disabled: !uploadEnabled,
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
            <ProForm.Group>
                <Button
                    icon={<PictureOutlined/>}
                    onClick={() => avatarUploadRef.current.setImageSrc('https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png')}
                >
                    Set
                </Button>
                <Button
                    icon={<ClearOutlined/>}
                    onClick={() => avatarUploadRef.current.setImageSrc(undefined)}
                >
                    Clear
                </Button>
            </ProForm.Group>
            <Divider/>
            <AvatarUpload
                ref={avatarUploadRef}
                imageShape={imageShape}
                uploadEnabled={uploadEnabled}
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
        </ProForm>
    );
}
```

### Properties

#### AvatarUploadProps

<API src="@/form/AvatarUpload/index.tsx" hideTitle></API>
