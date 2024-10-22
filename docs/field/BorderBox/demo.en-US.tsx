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
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {BorderBox} from '@yookue/ant-buddy-pro';


export default () => {
    const [borderTop, setBorderTop] = React.useState<boolean>(true);
    const [borderRight, setBorderRight] = React.useState<boolean>(true);
    const [borderBottom, setBorderBottom] = React.useState<boolean>(true);
    const [borderLeft, setBorderLeft] = React.useState<boolean>(true);
    const [boxShadow, setBoxShadow] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='BorderBox_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='Border Top'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderTop,
                            onChange: setBorderTop,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Right'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderRight,
                            onChange: setBorderRight,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Bottom'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderBottom,
                            onChange: setBorderBottom,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Left'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderLeft,
                            onChange: setBorderLeft,
                        }}
                    />
                </ProForm.Group>
                <ProFormSwitch
                    label='Box Shadow'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: boxShadow,
                        onChange: setBoxShadow,
                    }}
                />
            </ProForm>
            <Divider/>
            <BorderBox
                borderTop={borderTop}
                borderRight={borderRight}
                borderBottom={borderBottom}
                borderLeft={borderLeft}
                boxShadow={boxShadow}
                containerStyle={{padding: '12px'}}
            >
                The quick brown fox jumps over a lazy dog.
            </BorderBox>
        </>
    );
}
