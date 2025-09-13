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
import {LockOutlined} from '@ant-design/icons';
import {ProForm, ProFormText, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {CipherStrength, type BeforeAfterType} from '@unikue/ant-buddy-pro';


export default () => {
    const [widthBlock, setWidthBlock] = React.useState<boolean>(false);
    const [captionPos, setCaptionPos] = React.useState<BeforeAfterType>('after');

    return (
        <>
            <ProForm
                name='CipherStrength_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='匹配寬度'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: widthBlock,
                        onChange: setWidthBlock,
                    }}
                />
                <ProFormRadio.Group
                    label='標題位置'
                    radioType='button'
                    fieldProps={{
                        value: captionPos,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCaptionPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '後', value: 'after'},
                        {label: '無', value: false},
                    ]}
                />
                <Divider/>
                <ProFormText.Password
                    name='password'
                    label='密碼'
                    placeholder='密碼'
                    fieldProps={{
                        allowClear: true,
                        autoComplete: 'new-password',
                        prefix: <LockOutlined/>
                    }}
                />
                <CipherStrength
                    watchField='password'
                    widthBlock={widthBlock}
                    captionPos={captionPos}
                    locale='zh_TW'
                />
            </ProForm>
        </>
    );
}
