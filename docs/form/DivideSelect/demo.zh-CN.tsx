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
import {DivideSelect, type LabelValueType} from '@yookue/ant-buddy-pro';
import {type DividePresetStyle} from '@yookue/ant-buddy-pro/form/DivideSelect';


export default () => {
    const [optionLabel, setOptionLabel] = React.useState<LabelValueType>('label');
    const [presetStyle, setPresetStyle] = React.useState<DividePresetStyle>('before-prior');

    return (
        <>
            <ProForm
                name='DivideSelect_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='选项和标签'
                    radioType='button'
                    fieldProps={{
                        value: optionLabel,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOptionLabel(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '标签', value: 'label'},
                        {label: '值', value: 'value'},
                    ]}
                />
                <ProFormRadio.Group
                    label='预设样式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '左侧优先', value: 'before-prior'},
                        {label: '右侧优先', value: 'after-prior'},
                        {label: '90-10', value: '90-10'},
                        {label: '80-20', value: '80-20'},
                        {label: '70-30', value: '70-30'},
                        {label: '60-40', value: '60-40'},
                        {label: '50-50', value: '50-50'},
                        {label: '无', value: false},
                    ]}
                />
                <Divider/>
                <DivideSelect
                    name='foo'
                    placeholder='请选择此项'
                    fieldProps={{
                        optionLabelProp: optionLabel,
                        options: [
                            {
                                label: '亚洲',
                                value: 'optGroup',
                                optionType: 'optGroup',
                                children: [
                                    {label: '中国', value: '+86'},
                                ]
                            },
                            {
                                label: '美洲',
                                value: 'optGroup',
                                optionType: 'optGroup',
                                children: [
                                    {label: '美国', value: '+1'},
                                ]
                            }
                        ]
                    }}
                    valueEnum={{
                        '+7': '俄罗斯',
                    }}
                    presetStyle={presetStyle}
                />
            </ProForm>
        </>
    );
}
