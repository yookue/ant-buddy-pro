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
import {Input, Divider} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {LabelField, type AxisDirectionType} from '@yookue/ant-buddy-pro';
import {type LabelPresetStyle} from '@yookue/ant-buddy-pro/field/LabelField';


export default () => {
    const [layout, setLayout] = React.useState<AxisDirectionType>('horizontal');
    const [required, setRequired] = React.useState<boolean>(false);
    const [presetStyle, setPresetStyle] = React.useState<LabelPresetStyle>('after-prior');

    return (
        <>
            <ProForm
                name='LabelField_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='布局'
                    radioType='button'
                    fieldProps={{
                        value: layout,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setLayout(event.target?.value);
                            if (event.target?.value === 'vertical') {
                                setPresetStyle(false);
                            }
                        }
                    }}
                    options={[
                        {label: '水平', value: 'horizontal'},
                        {label: '垂直', value: 'vertical'},
                    ]}
                />
                <ProFormSwitch
                    label='必填'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: required,
                        onChange: (value) => {
                            setRequired(value);
                        }
                    }}
                />
                <ProFormRadio.Group
                    label='预设样式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        disabled: layout !== 'horizontal',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '左侧优先', value: 'before-prior'},
                        {label: '右侧优先', value: 'after-prior'},
                        {label: '无', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <LabelField
                label='用户名'
                layout={layout}
                required={required}
                presetStyle={presetStyle}
            >
                <Input placeholder='用户名'/>
            </LabelField>
        </>
    );
}
