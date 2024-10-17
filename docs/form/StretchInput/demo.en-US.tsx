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
import {SearchOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {StretchInput} from '@yookue/ant-buddy-pro';


export default () => {
    const [miniatureType, setMiniatureType] = React.useState<string>('default');

    return (
        <>
            <ProForm
                name='StretchInput_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Miniature Type'
                    radioType='button'
                    fieldProps={{
                        value: miniatureType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setMiniatureType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Default', value: 'default'},
                        {label: 'Custom', value: 'custom'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <div style={{textAlign: 'right'}}>
                <StretchInput
                    name='foobar'
                    placeholder='Please click this field'
                    fieldProps={{
                        prefix: <SearchOutlined/>,
                        style: {
                            borderRadius: '16px',
                            width: '50%',
                        }
                    }}
                    miniature={miniatureType !== 'custom' ? undefined : (
                        <SearchOutlined style={{width: '32px', height: '32px'}}/>
                    )}
                    stretchStyle={{
                        borderRadius: '16px',
                        width: '100%',
                    }}
                />
            </div>
        </>
    );
}
