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
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {SectionTitle, type BeforeAfterType} from '@yookue/ant-buddy-pro';
import {type TitlePresetStyle} from 'src/layout/SectionTitle';


export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState<BeforeAfterType>('before');
    const [presetStyle, setPresetStyle] = React.useState<TitlePresetStyle>('default');

    return (
        <>
            <ProForm
                name='SectionTitle_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='装饰物位置'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOrnamentPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '无', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='预设样式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默认', value: 'default'},
                        {label: '成功', value: 'success'},
                        {label: '处理中', value: 'processing'},
                        {label: '警告', value: 'warning'},
                        {label: '错误', value: 'error'},
                        {label: '无', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <SectionTitle
                ornament='1'
                ornamentPos={ornamentPos}
                content='SectionTitle 标题内容'
                presetStyle={presetStyle}
            />
        </>
    );
}