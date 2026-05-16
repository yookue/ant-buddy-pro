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
import { Divider } from 'antd';
import { ProForm, ProFormRadio } from '@ant-design/pro-components';
import { ChronoSelect, type AxisDirectionType } from '@unikue/ant-buddy-pro';


export default () => {
    const [layout, setLayout] = React.useState<AxisDirectionType>('vertical');

    return (
        <>
            <ProForm
                name='ChronoSelect_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='佈局'
                    radioType='button'
                    fieldProps={{
                        value: layout,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setLayout(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '水平', value: 'horizontal' },
                        { label: '垂直', value: 'vertical' },
                    ]}
                />
            </ProForm>
            <Divider />
            <ProForm
                name='ChronoSelect_demo.zh-TW.Test'
                layout={layout}
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ChronoSelect
                    name='foobar'
                    label='選擇期間'
                    placeholder='請選擇此項'
                    locale='zh_TW'
                />
            </ProForm>
        </>
    );
}
