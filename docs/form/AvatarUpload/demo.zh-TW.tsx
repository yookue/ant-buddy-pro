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
                        label='形狀'
                        radioType='button'
                        fieldProps={{
                            value: shape,
                            buttonStyle: 'solid',
                            onChange: (event) => {
                                setShape(event.target?.value);
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
                            onChange: setUploadEnabled,
                        }}
                    />
                    <ProFormSwitch
                        label='啟用裁剪'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: cropEnabled,
                            disabled: !uploadEnabled,
                            onChange: setCropEnabled,
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip 控件'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tooltipCtrl,
                            onChange: setTooltipCtrl,
                        }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <Button
                        icon={<PictureOutlined/>}
                        onClick={() => avatarUploadRef.current?.setImageSrc('https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png')}
                    >
                        設定
                    </Button>
                    <Button
                        icon={<ClearOutlined/>}
                        onClick={() => avatarUploadRef.current?.setImageSrc(undefined)}
                    >
                        清空
                    </Button>
                </ProForm.Group>
                <Divider/>
                <AvatarUpload
                    fieldRef={avatarUploadRef}
                    name='avatar'
                    valuePropName='imageSrc'
                    trigger='onImageSrcChange'
                    shape={shape}
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
                        modalOk: '確定',
                        modalCancel: '取消',
                    }}
                    tooltipCtrl={tooltipCtrl}
                    tooltipProps={{
                        title: '用戶頭像',
                    }}
                    localeProps={{
                        'upload': '上傳',
                        'allowTypes': '只允許 {} 類型的文件',
                        'disallowType': '文件類型不允許',
                        'cropModalTitle': '頭像裁剪',
                        'maxFileSize': '文件大小不能超過 {}{}',
                    }}
                    onImageSrcChange={() => {
                        ConsoleUtils.log(false, false, 'AvatarUpload', '圖片源已更改');
                    }}
                />
            </ProForm>
        </>
    );
}
