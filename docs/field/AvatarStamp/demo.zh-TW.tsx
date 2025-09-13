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
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {AvatarStamp, type RectZenithPlace} from '@unikue/ant-buddy-pro';


export default () => {
    const [placement, setPlacement] = React.useState<RectZenithPlace>('bottomRight');

    return (
        <>
            <ProForm
                name='AvatarStamp_demo.zh-TW'
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
                        onChange: (event) => {
                            setPlacement(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '左上角', value: 'topLeft'},
                        {label: '右上角', value: 'topRight'},
                        {label: '左下角', value: 'bottomLeft'},
                        {label: '右下角', value: 'bottomRight'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <AvatarStamp
                src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
                placement={placement}
                size={96}
                addon={(
                    <span
                        style={{
                            color: '#fff',
                            backgroundColor: '#ffc53d',
                            fontSize: '12px',
                            borderRadius: '16px',
                            padding: '2px 6px',
                        }}
                    >
                        VIP
                    </span>
                )}
            />
        </>
    );
}
