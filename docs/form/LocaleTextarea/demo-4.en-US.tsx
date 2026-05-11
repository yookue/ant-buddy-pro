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


import {Divider, message as messageApi} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleTextarea} from '@unikue/ant-buddy-pro';


export default () => {
    const [messageInvoker, messageContext] = messageApi.useMessage();
    return (
        <>
            {messageContext}
            <ProForm
                name='LocaleTextarea_demo4.en-US'
                layout='vertical'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: 'Submit',
                        resetText: 'Reset',
                    }
                }}
                onFinish={async () => {
                    messageInvoker.success(`Yep, you've clicked the submit button`);
                }}
            >
                <LocaleTextarea
                    name='foobar'
                    placeholder='Demo Field Without Validation'
                    fieldProps={{
                        disabled: true,
                    }}
                    proField={false}
                    locale='en_US'
                    switchQuickTags={[
                        'en-US',
                        'zh-CN',
                        'zh-TW',
                    ]}
                    switchProField={false}
                    switchShareProps={{
                        placeholder: 'Please input this field',
                    }}
                />
                <Divider/>
            </ProForm>
        </>
    );
}
