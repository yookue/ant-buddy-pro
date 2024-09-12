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
import {message as messageApi} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleInput} from '@yookue/ant-buddy-pro';


export default () => {
    return (
        <>
            <ProForm
                name='LocaleInput_demo4'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: '提交',
                        resetText: '重置',
                    }
                }}
                onFinish={async () => {
                    messageApi.success('您点击了提交按钮');
                }}
            >
                <LocaleInput
                    name='foobar'
                    placeholder='示例字段-无校验'
                    disabled
                    popupTagPos='after'
                    popupQuickTags={[
                        'en-US',
                        'zh-CN',
                        'zh-TW',
                    ]}
                    popupProField={false}
                    popupShareProps={{
                        placeholder: '请输入此字段',
                    }}
                    popupConfirmProps={{
                        message: '设为默认吗？',
                        ok: '是',
                        cancel: '否',
                    }}
                />
            </ProForm>
        </>
    );
}
