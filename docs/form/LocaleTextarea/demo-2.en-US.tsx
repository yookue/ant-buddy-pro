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
import {Divider, message as messageApi} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {LocaleTextarea} from '@yookue/ant-buddy-pro';
import {type TabsPosition} from '@yookue/ant-buddy-pro/layout/CardTabs';


export default () => {
    const [tabPos, setTabPos] = React.useState<TabsPosition>('top');

    return (
        <>
            <ProForm
                name='LocaleTextarea_demo2.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: 'Submit',
                        resetText: 'Reset',
                    }
                }}
                onFinish={async () => {
                    messageApi.success(`Yep, you've clicked the submit button`);
                }}
            >
                <ProFormRadio.Group
                    label='Tab Position'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setTabPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Top', value: 'top'},
                        {label: 'Bottom', value: 'bottom'},
                        {label: 'Left', value: 'left'},
                        {label: 'Right', value: 'right'},
                        {label: 'Top-End', value: 'top-end'},
                        {label: 'Bottom-End', value: 'bottom-end'},
                    ]}
                />
                <Divider/>
                <LocaleTextarea
                    name='foobar'
                    placeholder='Demo Field Without Validation'
                    fieldProps={{
                        autoSize: {
                            minRows: 6,
                            maxRows: 8,
                        }
                    }}
                    proField={false}
                    tabsProps={{
                        tabPosition: tabPos,
                    }}
                    locale='en_US'
                    switchTextareaProps={[
                        {
                            tag: 'en-US',
                            placeholder: 'Demo Field in English',
                            allowClear: true,
                        },
                        {
                            tag: 'zh-CN',
                            placeholder: 'Demo Field in Simplified Chinese',
                            allowClear: true,
                        },
                        {
                            tag: 'zh-TW',
                            placeholder: 'Demo Field in Traditional Chinese',
                            allowClear: true,
                        }
                    ]}
                    switchProField={false}
                />
                <Divider/>
            </ProForm>
        </>
    );
}
