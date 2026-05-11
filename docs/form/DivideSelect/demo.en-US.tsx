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
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-components';
import {DivideSelect, type LabelMixinType} from '@unikue/ant-buddy-pro';
import {type DividePresetStyle} from '@unikue/ant-buddy-pro/form/DivideSelect';


export default () => {
    const [optionLabel, setOptionLabel] = React.useState<LabelMixinType>('label');
    const [optionBeforeContent, setOptionBeforeContent] = React.useState<LabelMixinType>('label');
    const [optionAfterContent, setOptionAfterContent] = React.useState<LabelMixinType>('value');
    const [presetStyle, setPresetStyle] = React.useState<DividePresetStyle | false>('before-prior');

    return (
        <>
            <ProForm
                name='DivideSelect_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Option Label'
                    radioType='button'
                    fieldProps={{
                        value: optionLabel,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setOptionLabel(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Label', value: 'label'},
                        {label: 'Value', value: 'value'},
                        {label: 'Code', value: 'code'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Option Before Content'
                    radioType='button'
                    fieldProps={{
                        value: optionBeforeContent,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setOptionBeforeContent(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Label', value: 'label'},
                        {label: 'Value', value: 'value'},
                        {label: 'Code', value: 'code'},
                        {label: 'False', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='Option After Content'
                    radioType='button'
                    fieldProps={{
                        value: optionAfterContent,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setOptionAfterContent(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Label', value: 'label'},
                        {label: 'Value', value: 'value'},
                        {label: 'Code', value: 'code'},
                        {label: 'False', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='Preset Style'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Before-Prior', value: 'before-prior'},
                        {label: 'After-Prior', value: 'after-prior'},
                        {label: 'False', value: false},
                    ]}
                />
                <Divider/>
                <DivideSelect
                    name='foo'
                    placeholder='Please select this field'
                    fieldProps={{
                        optionLabelProp: optionLabel,
                        options: [
                            {
                                label: 'Asia',
                                value: 'optGroup-asia',
                                optionType: 'optGroup',
                                children: [
                                    {label: 'China', value: '+86', code: 'CN'},
                                ]
                            },
                            {
                                label: 'America',
                                value: 'optGroup-america',
                                optionType: 'optGroup',
                                children: [
                                    {label: 'United States', value: '+1', code: 'US'},
                                ]
                            }
                        ]
                    }}
                    valueEnum={{
                        '+7': 'Russia',
                    }}
                    optionBeforeContent={optionBeforeContent}
                    optionAfterContent={optionAfterContent}
                    presetStyle={presetStyle}
                />
            </ProForm>
        </>
    );
}
