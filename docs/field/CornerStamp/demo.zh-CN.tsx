/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import { Card, Divider } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { ProForm, ProFormRadio, ProFormSwitch, ProFormSlider } from '@ant-design/pro-components';
import { CornerStamp, type RectZenithPlace } from '@unikue/ant-buddy-pro';


export default () => {
    const [placement, setPlacement] = React.useState<RectZenithPlace>('topRight');
    const [showAddon, setShowAddon] = React.useState<boolean>(true);
    const [rotateAddon, setRotateAddon] = React.useState<boolean>(true);
    const [size, setSize] = React.useState<number>(40);

    return (
        <>
            <ProForm
                name='CornerStamp_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='位置'
                    radioType='button'
                    fieldProps={{
                        value: placement,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setPlacement(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '左上角', value: 'topLeft' },
                        { label: '右上角', value: 'topRight' },
                        { label: '左下角', value: 'bottomLeft' },
                        { label: '右下角', value: 'bottomRight' },
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='显示附加物'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showAddon,
                            onChange: setShowAddon,
                        }}
                    />
                    <ProFormSwitch
                        label='旋转附加物'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: rotateAddon,
                            disabled: !showAddon,
                            onChange: setRotateAddon,
                        }}
                    />
                </ProForm.Group>
                <ProFormSlider
                    label='大小'
                    min={20}
                    max={100}
                    step={10}
                    marks={{
                        20: '20',
                        30: '30',
                        40: '40',
                        50: '50',
                        60: '60',
                        70: '70',
                        80: '80',
                        90: '90',
                        100: '100',
                    }}
                    fieldProps={{
                        value: size,
                        onChange: setSize,
                    }}
                />
            </ProForm>
            <Divider />
            <CornerStamp
                placement={placement}
                size={size}
                addon={!showAddon ? undefined : (
                    <SmileOutlined style={{ color: 'white', fontSize: 8 + size / 5 }} />
                )}
                rotateAddon={rotateAddon}
            >
                <Card
                    title='CornerStamp'
                    styles={{
                        header: {
                            textAlign: 'center'
                        },
                        body: {
                            textAlign: 'center'
                        }
                    }}
                >
                    一只棕色敏捷的狐狸跳过了一只懒洋洋的狗。
                    <Divider />
                    I'LL BE BACK
                </Card>
            </CornerStamp>
        </>
    );
}
