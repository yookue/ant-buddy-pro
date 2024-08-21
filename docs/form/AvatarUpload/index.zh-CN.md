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
        <>
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
                            {label: '圆形', value: 'circle'},
                            {label: '方形', value: 'square'},
                        ]}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormSwitch
                        label='启用上传'
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
                        label='启用裁剪'
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
                        设定
                    </Button>
                    <Button
                        icon={<ClearOutlined/>}
                        onClick={() => avatarUploadRef.current.setImageSrc(undefined)}
                    >
                        清空
                    </Button>
                </ProForm.Group>
            </ProForm>
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
