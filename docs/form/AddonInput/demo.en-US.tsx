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
                name='AddonInput_demo.en-US'
                layout='vertical'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='Width Block'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
                        }}
                    />
                    <ProFormSwitch
                        label='Use ProField'
                        checkedChildren='True'
                        unCheckedChildren='False'
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
                        label='Website'
                        placeholder='Please enter URL'
                        addonBefore='https://'
                        addonAfter='.com'
                        widthBlock={widthBlock}
                        proField={proField}
                        tooltip='Website URL for display'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter website URL',
                            },
                            {
                                pattern: /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]$/,
                                message: 'Invalid domain name format',
                            },
                        ]}
                    />
                    <AddonInput
                        name='search'
                        label='Search'
                        placeholder='Please enter search content'
                        addonAfter={<Button type='primary' icon={<SearchOutlined/>}>Search</Button>}
                        paddingAfter={0}
                        widthBlock={widthBlock}
                        proField={proField}
                    />
                    <AddonInput
                        name='price'
                        label='Price'
                        placeholder='Please enter price'
                        addonBefore='$'
                        addonAfter='USD'
                        widthBlock={widthBlock}
                        proField={proField}
                    />
                </Space>
            </ProForm>
        </>
    );
}
