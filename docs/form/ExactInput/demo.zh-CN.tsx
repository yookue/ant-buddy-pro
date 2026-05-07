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
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {ExactInput, ConsoleUtils} from '@unikue/ant-buddy-pro';


export default () => {
    const [form] = ProForm.useForm();
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(true);
    const [proField, setProField] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                form={form}
                name='ExactInput_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='Tooltip 控件'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tooltipCtrl,
                            onChange: setTooltipCtrl,
                        }}
                    />
                    <ProFormSwitch
                        label='使用 ProField'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: proField,
                            onChange: setProField,
                        }}
                    />
                </ProForm.Group>
                <Divider/>
                <ExactInput
                    name='foobar'
                    placeholder='请输入此项'
                    checkProps={{
                        onChange: () => {
                            const values = form.getFieldsValue(['foobar', 'foobarExact']);
                            ConsoleUtils.logTimestamp(false, false, 'ExactInput', 'onChange input/checkbox 的值 = ' + values.foobar + '/' + values.foobarExact);
                        }
                    }}
                    tooltipCtrl={tooltipCtrl}
                    locale='zh_CN'
                    proField={proField}
                />
            </ProForm>
        </>
    );
}
