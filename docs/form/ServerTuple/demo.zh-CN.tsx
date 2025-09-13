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
import {ServerTuple, ConsoleUtils} from '@unikue/ant-buddy-pro';


export default () => {
    const [form] = ProForm.useForm();
    const [widthBlock, setWidthBlock] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                form={form}
                name='ServerTuple_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='匹配宽度'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: widthBlock,
                        onChange: setWidthBlock,
                    }}
                />
                <Divider/>
                <ServerTuple
                    name='server'
                    label='服务器'
                    widthBlock={widthBlock}
                    hostProps={{
                        fieldProps: {
                            onChange: () => {
                                const values = form.getFieldsValue(['serverHost', 'serverPort']);
                                ConsoleUtils.logTimestamp(false, false, 'ServerTuple', 'host onChange host/port 的值 = ' + values.serverHost + '/' + values.serverPort);
                            },
                        },
                    }}
                    portProps={{
                        fieldProps: {
                            onChange: () => {
                                const values = form.getFieldsValue(['serverHost', 'serverPort']);
                                ConsoleUtils.logTimestamp(false, false, 'ServerTuple', 'port onChange host/port 的值 = ' + values.serverHost + '/' + values.serverPort);
                            },
                        },
                    }}
                    locale='zh_CN'
                />
            </ProForm>
        </>
    );
}
