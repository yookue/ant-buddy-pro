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
    const [collapseType, setCollapseType] = React.useState<string>('default');

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='折叠类型'
                    radioType='button'
                    fieldProps={{
                        value: collapseType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCollapseType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默认', value: 'default'},
                        {label: '自定义', value: 'custom'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <div style={{textAlign: 'right'}}>
                <StretchInput
                    name='foobar'
                    placeholder='请点击此项'
                    fieldProps={{
                        prefix: <SearchOutlined/>,
                        style: {
                            borderRadius: '16px',
                            width: '50%',
                        }
                    }}
                    collapseDom={collapseType !== 'custom' ? undefined : (
                        <span style={{cursor: 'pointer'}}>
                            <SearchOutlined style={{width: '32px', height: '32px'}}/>
                        </span>
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
