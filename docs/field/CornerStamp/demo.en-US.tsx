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
import {Card, Divider} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch, ProFormSlider} from '@ant-design/pro-form';
import {CornerStamp} from '@yookue/ant-buddy-pro';
import {type StampPlacement} from 'src/field/CornerStamp';


export default () => {
    const [placement, setPlacement] = React.useState<StampPlacement>('topRight');
    const [showAddon, setShowAddon] = React.useState<boolean>(true);
    const [rotateAddon, setRotateAddon] = React.useState<boolean>(true);
    const [size, setSize] = React.useState<number>(40);

    return (
        <>
            <ProForm
                name='CornerStamp_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Placement'
                    radioType='button'
                    fieldProps={{
                        value: placement,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPlacement(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Top-Left', value: 'topLeft'},
                        {label: 'Top-Right', value: 'topRight'},
                        {label: 'Bottom-Left', value: 'bottomLeft'},
                        {label: 'Bottom-Right', value: 'bottomRight'},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Show Addon'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showAddon,
                            onChange: setShowAddon,
                        }}
                    />
                    <ProFormSwitch
                        label='Rotate Addon'
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
                    label='Size'
                    min={20}
                    max={80}
                    step={10}
                    marks={{
                        20: '20',
                        40: '40',
                        60: '60',
                        80: '80',
                    }}
                    fieldProps={{
                        value: size,
                        onChange: setSize,
                    }}
                />
            </ProForm>
            <Divider/>
            <CornerStamp
                placement={placement}
                size={size}
                addon={!showAddon ? undefined : (
                    <SmileOutlined style={{color: 'white', fontSize: `${8 + size / 5}px`}}/>
                )}
                rotateAddon={rotateAddon}
            >
                <Card
                    title='CornerStamp'
                    headStyle={{textAlign: 'center'}}
                    bodyStyle={{textAlign: 'center'}}
                >
                    The quick brown fox jumps over a lazy dog.
                    <Divider/>
                    I'LL BE BACK
                </Card>
            </CornerStamp>
        </>
    );
}