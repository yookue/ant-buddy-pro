---
toc: content
---

## AvatarUpload

AvatarUpload，可以顯示壹個頭像，並支持上傳和裁剪。

### 導入組件

```jsx | pure
import {AvatarUpload} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
                        {label: '圓形', value: 'circle'},
                        {label: '方形', value: 'square'},
                    ]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormSwitch
                    label='啟用上傳'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: uploadEnabled,
                    }}
                    onChange={(value) => {
                        setUploadEnabled(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='啟用裁剪'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: cropEnabled,
                        disabled: !uploadEnabled,
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
            </ProForm.Group>
            <ProForm.Group>
                <Button
                    icon={<PictureOutlined/>}
                    onClick={() => avatarUploadRef.current.setImageSrc('https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png')}
                >
                    設定
                </Button>
                <Button
                    icon={<ClearOutlined/>}
                    onClick={() => avatarUploadRef.current.setImageSrc(undefined)}
                >
                    清空
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
                    modalOk: '確定',
                    modalCancel: '取消',
                }}
                tooltipCtrl={tooltipCtrl}
                tooltipProps={{
                    title: '用戶頭像',
                }}
                localeProps={{
                    'upload': '上傳',
                    'maxFileSize': '文件大小不能超過 {}{}',
                    'typesDisallowed': '文件類型不允許',
                    'typesDisallowedDetail': '只允許 {} 類型的文件',
                    'cropModalTitle': '頭像裁剪',
                }}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### AvatarUploadProps

<API src="@/form/AvatarUpload/index.tsx" hideTitle></API>
