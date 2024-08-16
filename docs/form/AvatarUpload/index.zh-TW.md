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
                        label='只讀'
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
                        label='啟用裁剪'
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
        </>
    );
}
```

### 組件屬性

#### AvatarUploadProps

<API src="@/form/AvatarUpload/index.tsx" hideTitle></API>
