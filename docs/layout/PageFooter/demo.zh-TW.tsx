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
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {PageFooter} from '@yookue/ant-buddy-pro';
import {type FooterPresetStyle} from '@yookue/ant-buddy-pro/layout/PageFooter';


export default () => {
    const [presetStyle, setPresetStyle] = React.useState<FooterPresetStyle>('compact');
    const [copyrightIcon, setCopyrightIcon] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='PageFooter_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='版權圖標'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: copyrightIcon,
                        onChange: setCopyrightIcon,
                    }}
                />
                <ProFormRadio.Group
                    label='預設樣式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默認', value: 'default'},
                        {label: '緊凑', value: 'compact'},
                        {label: '無', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <PageFooter
                links={[
                    {
                        key: 'ant-buddy-pro',
                        content: 'Ant Buddy Pro',
                        href: 'https://github.com/yookue/ant-buddy-pro',
                        style: {
                            color: '#eba77a',
                        }
                    }
                ]}
                copyright={`${new Date().getFullYear()} Yookue Ltd`}
                copyrightIcon={copyrightIcon}
                containerStyle={{
                    backgroundColor: '#e5f7ff',
                }}
                copyrightStyle={{
                    color: '#443300',
                }}
                presetStyle={presetStyle}
            />
        </>
    );
}
