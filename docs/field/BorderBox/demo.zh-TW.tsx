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
import {Checkbox, Divider} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {BorderBox} from '@yookue/ant-buddy-pro';


export default () => {
    const [borderTop, setBorderTop] = React.useState<boolean>(true);
    const [borderRight, setBorderRight] = React.useState<boolean>(true);
    const [borderBottom, setBorderBottom] = React.useState<boolean>(true);
    const [borderLeft, setBorderLeft] = React.useState<boolean>(true);

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
                        label='頂部邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderTop,
                            onChange: setBorderTop,
                        }}
                    />
                    <ProFormSwitch
                        label='右側邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderRight,
                            onChange: setBorderRight,
                        }}
                    />
                    <ProFormSwitch
                        label='底部邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderBottom,
                            onChange: setBorderBottom,
                        }}
                    />
                    <ProFormSwitch
                        label='左側邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderLeft,
                            onChange: setBorderLeft,
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <BorderBox
                borderTop={borderTop}
                borderRight={borderRight}
                borderBottom={borderBottom}
                borderLeft={borderLeft}
                containerStyle={{padding: '12px'}}
            >
                <Checkbox>復選框</Checkbox>
            </BorderBox>
        </>
    );
}
