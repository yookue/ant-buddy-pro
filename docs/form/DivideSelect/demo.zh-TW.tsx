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
import {DivideSelect, type LabelMixinType} from '@yookue/ant-buddy-pro';
import {type DividePresetStyle} from '@yookue/ant-buddy-pro/form/DivideSelect';


export default () => {
    const [optionLabel, setOptionLabel] = React.useState<LabelMixinType>('label');
    const [optionBeforeContent, setOptionBeforeContent] = React.useState<LabelMixinType>('label');
    const [optionAfterContent, setOptionAfterContent] = React.useState<LabelMixinType>('value');
    const [presetStyle, setPresetStyle] = React.useState<DividePresetStyle | false>('before-prior');

    return (
        <>
            <ProForm
                name='DivideSelect_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='選項和標簽'
                    radioType='button'
                    fieldProps={{
                        value: optionLabel,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOptionLabel(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '標簽', value: 'label'},
                        {label: '值', value: 'value'},
                        {label: '編碼', value: 'code'},
                    ]}
                />
                <ProFormRadio.Group
                    label='選項左側內容'
                    radioType='button'
                    fieldProps={{
                        value: optionBeforeContent,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOptionBeforeContent(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '標簽', value: 'label'},
                        {label: '值', value: 'value'},
                        {label: '編碼', value: 'code'},
                        {label: '無', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='選項右側內容'
                    radioType='button'
                    fieldProps={{
                        value: optionAfterContent,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOptionAfterContent(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '標簽', value: 'label'},
                        {label: '值', value: 'value'},
                        {label: '編碼', value: 'code'},
                        {label: '無', value: false},
                    ]}
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
                        {label: '左側優先', value: 'before-prior'},
                        {label: '右側優先', value: 'after-prior'},
                        {label: '無', value: false},
                    ]}
                />
                <Divider/>
                <DivideSelect
                    name='foo'
                    placeholder='請選擇此項'
                    fieldProps={{
                        optionLabelProp: optionLabel,
                        options: [
                            {
                                label: '亞洲',
                                value: 'optGroup',
                                optionType: 'optGroup',
                                children: [
                                    {label: '中國', value: '+86', code: 'CN'},
                                ]
                            },
                            {
                                label: '美洲',
                                value: 'optGroup',
                                optionType: 'optGroup',
                                children: [
                                    {label: '美國', value: '+1', code: 'US'},
                                ]
                            }
                        ]
                    }}
                    valueEnum={{
                        '+7': '俄羅斯',
                    }}
                    optionBeforeContent={optionBeforeContent}
                    optionAfterContent={optionAfterContent}
                    presetStyle={presetStyle}
                />
            </ProForm>
        </>
    );
}
