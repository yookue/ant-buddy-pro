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
import {Button, Divider, message as messageApi} from 'antd';
import {MobileOutlined, SafetyCertificateOutlined, ClockCircleOutlined} from '@ant-design/icons';
import {ProForm, ProFormText} from '@ant-design/pro-form';
import {CaptchaInput, ConsoleUtils, type CaptchaInputRef} from '@yookue/ant-buddy-pro';


export default () => {
    const [timing, setTiming] = React.useState<boolean>(false);
    const captchaInputRef = React.useRef<CaptchaInputRef>(null);

    return (
        <>
            <ProForm
                name='CaptchaInput_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormText
                    name='mobile'
                    fieldProps={{
                        prefix: <MobileOutlined/>
                    }}
                    placeholder='手机号'
                    rules={[
                        {
                            required: true,
                            message: '此项为必填项',
                        }
                    ]}
                />
                <CaptchaInput
                    name='captcha'
                    placeholder='验证码'
                    fieldRef={captchaInputRef}
                    fieldProps={{
                        maxLength: 6,
                        prefix: <SafetyCertificateOutlined/>
                    }}
                    phoneName='mobile'
                    countDown={29}
                    onGenerate={() => {
                        messageApi.success('验证码发送成功');
                    }}
                    onTimer={count => {
                        ConsoleUtils.log(false, false, 'CaptchaInput', '计时器倒数 ' + count);
                    }}
                    onTimerBegin={() => setTiming(true)}
                    onTimerEnd={() => setTiming(false)}
                    localeProps={{
                        'generate': '获取验证码',
                        'resend': '重新发送',
                    }}
                />
                <Divider/>
                <Button
                    icon={<ClockCircleOutlined/>}
                    disabled={timing}
                    onClick={() => {
                        if (!captchaInputRef.current?.isTiming()) {
                            captchaInputRef.current?.startTimer();
                        }
                    }}
                >
                    手动计时
                </Button>
            </ProForm>
        </>
    );
}
