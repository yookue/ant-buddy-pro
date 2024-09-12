/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import React from 'react';
import {Button, Divider} from 'antd';
import {ClearOutlined, PictureOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {AvatarUpload, ConsoleUtils, type AvatarUploadRef, type CircleSquareShape} from '@yookue/ant-buddy-pro';


export default () => {
    const avatarUploadRef = React.useRef<AvatarUploadRef>(null);
    const [shape, setShape] = React.useState<CircleSquareShape>('circle');
    const [uploadEnabled, setUploadEnabled] = React.useState<boolean>(false);
    const [cropEnabled, setCropEnabled] = React.useState<boolean>(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='AvatarUpload_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
                initialValues={{
                    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
            >
                <ProForm.Group>
                    <ProFormRadio.Group
                        label='Image Shape'
                        radioType='button'
                        fieldProps={{
                            value: shape,
                            buttonStyle: 'solid',
                            onChange: (event) => {
                                setShape(event.target?.value);
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
                            onChange: (value) => {
                                setUploadEnabled(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Crop Enabled'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: cropEnabled,
                            disabled: !uploadEnabled,
                            onChange: (value) => {
                                setCropEnabled(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip Ctrl'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: tooltipCtrl,
                            onChange: (value) => {
                                setTooltipCtrl(value);
                            }
                        }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <Button
                        icon={<PictureOutlined/>}
                        onClick={() => avatarUploadRef.current?.setImageSrc('https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png')}
                    >
                        Set
                    </Button>
                    <Button
                        icon={<ClearOutlined/>}
                        onClick={() => avatarUploadRef.current?.setImageSrc(undefined)}
                    >
                        Clear
                    </Button>
                </ProForm.Group>
                <Divider/>
                <AvatarUpload
                    fieldRef={avatarUploadRef}
                    name='avatar'
                    shape={shape}
                    valuePropName='imageSrc'
                    uploadEnabled={uploadEnabled}
                    uploadProps={{
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
                        'allowTypes': 'Only allowed {} files',
                        'disallowType': 'File type is disallowed',
                        'cropModalTitle': 'Avatar Crop',
                        'maxFileSize': 'File size cant not be greater than {}{}',
                    }}
                    onImageSrcChange={() => {
                        ConsoleUtils.log(false, false, 'AvatarUpload', 'Image source changed');
                    }}
                />
            </ProForm>
        </>
    );
}
