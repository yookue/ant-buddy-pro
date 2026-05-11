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


import React from 'react';
import {Input, Divider} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {LabelField, type AxisDirectionType} from '@unikue/ant-buddy-pro';
import {type LabelPresetStyle} from '@unikue/ant-buddy-pro/field/LabelField';


export default () => {
    const [layout, setLayout] = React.useState<AxisDirectionType>('vertical');
    const [required, setRequired] = React.useState<boolean>(false);
    const [presetStyle, setPresetStyle] = React.useState<LabelPresetStyle | false>('field-prior');

    return (
        <>
            <ProForm
                name='LabelField_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='佈局'
                    radioType='button'
                    fieldProps={{
                        value: layout,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setLayout(event.target?.value);
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
                        onChange: setRequired,
                    }}
                />
                <ProFormRadio.Group
                    label='預設樣式'
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
                        {label: '標簽優先', value: 'label-prior'},
                        {label: '字段優先', value: 'field-prior'},
                        {label: '無', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <ProForm
                name='LabelField_demo.zh-TW.Test'
                layout={layout}
                autoFocusFirstInput={false}
                submitter={false}
            >
                <LabelField
                    label='用戶名'
                    required={required}
                    tooltip='用于顯示的提示'
                    presetStyle={presetStyle}
                >
                    <Input placeholder='用戶名'/>
                </LabelField>
            </ProForm>
        </>
    );
}
