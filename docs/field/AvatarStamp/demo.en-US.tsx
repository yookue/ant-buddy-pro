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
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {AvatarStamp, type RectZenithPlace} from '@yookue/ant-buddy-pro';


export default () => {
    const [placement, setPlacement] = React.useState<RectZenithPlace>('bottomRight');

    return (
        <>
            <ProForm
                name='AvatarStamp_demo'
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
