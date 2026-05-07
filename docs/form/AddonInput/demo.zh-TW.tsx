/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the 'License')
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import React from 'react';
import {Divider, Button, Space} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {AddonInput} from '@unikue/ant-buddy-pro';


export default () => {
    const [widthBlock, setWidthBlock] = React.useState<boolean>(true);
    const [proField, setProField] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='AddonInput_demo.zh-TW'
                layout='vertical'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='匹配寬度'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
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
                <Space direction='vertical' size='middle' style={{width: '100%'}}>
                    <AddonInput
                        name='website'
                        label='網站地址'
                        placeholder='請輸入網址'
                        addonBefore='https://'
                        addonAfter='.com'
                        widthBlock={widthBlock}
                        proField={proField}
                        tooltip='用於顯示的網站 URL'
                        rules={[
                            {
                                required: true,
                                message: '請輸入網站 URL',
                            },
                            {
                                pattern: /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]$/,
                                message: '域名格式不正確',
                            },
                        ]}
                    />
                    <AddonInput
                        name='search'
                        label='搜索'
                        placeholder='請輸入搜索內容'
                        addonAfter={<Button type='primary' icon={<SearchOutlined/>}>搜索</Button>}
                        paddingAfter={0}
                        widthBlock={widthBlock}
                        proField={proField}
                    />
                    <AddonInput
                        name='price'
                        label='價格'
                        placeholder='請輸入價格'
                        addonBefore='¥'
                        addonAfter='元'
                        widthBlock={widthBlock}
                        proField={proField}
                    />
                </Space>
            </ProForm>
        </>
    );
}
