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
import {ExactInput} from '@yookue/ant-buddy-pro';


export default () => {
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='ExactInput_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
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
                <Divider/>
                <ExactInput
                    name='foobar'
                    placeholder='Please input this field'
                    fieldProps={{
                        addonBefore: 'Prefix',
                    }}
                    tooltipCtrl={tooltipCtrl}
                />
            </ProForm>
        </>
    );
}
