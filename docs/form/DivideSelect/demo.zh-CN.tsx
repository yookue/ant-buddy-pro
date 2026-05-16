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
import { Divider } from 'antd';
import { ProForm, ProFormRadio } from '@ant-design/pro-components';
import { DivideSelect, type LabelMixinType } from '@unikue/ant-buddy-pro';
import { type DividePresetStyle } from '@unikue/ant-buddy-pro/form/DivideSelect';


export default () => {
    const [optionLabel, setOptionLabel] = React.useState<LabelMixinType>('label');
    const [optionBeforeContent, setOptionBeforeContent] = React.useState<LabelMixinType>('label');
    const [optionAfterContent, setOptionAfterContent] = React.useState<LabelMixinType>('value');
    const [presetStyle, setPresetStyle] = React.useState<DividePresetStyle | false>('before-prior');

    return (
        <>
            <ProForm
                name='DivideSelect_demo.zh-CN'
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
                        onChange: (event: any) => {
                            setOptionLabel(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '标签', value: 'label' },
                        { label: '值', value: 'value' },
                        { label: '编码', value: 'code' },
                    ]}
                />
                <ProFormRadio.Group
                    label='选项左侧内容'
                    radioType='button'
                    fieldProps={{
                        value: optionBeforeContent,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setOptionBeforeContent(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '标签', value: 'label' },
                        { label: '值', value: 'value' },
                        { label: '编码', value: 'code' },
                        { label: '无', value: false },
                    ]}
                />
                <ProFormRadio.Group
                    label='选项右侧内容'
                    radioType='button'
                    fieldProps={{
                        value: optionAfterContent,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setOptionAfterContent(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '标签', value: 'label' },
                        { label: '值', value: 'value' },
                        { label: '编码', value: 'code' },
                        { label: '无', value: false },
                    ]}
                />
                <ProFormRadio.Group
                    label='预设样式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '左侧优先', value: 'before-prior' },
                        { label: '右侧优先', value: 'after-prior' },
                        { label: '无', value: false },
                    ]}
                />
                <Divider />
                <DivideSelect
                    name='foo'
                    placeholder='请选择此项'
                    fieldProps={{
                        optionLabelProp: optionLabel,
                        options: [
                            {
                                label: '亚洲',
                                value: 'optGroup-asia',
                                optionType: 'optGroup',
                                children: [
                                    { label: '中国', value: '+86', code: 'CN' },
                                ]
                            },
                            {
                                label: '美洲',
                                value: 'optGroup-america',
                                optionType: 'optGroup',
                                children: [
                                    { label: '美国', value: '+1', code: 'US' },
                                ]
                            }
                        ]
                    }}
                    valueEnum={{
                        '+7': '俄罗斯',
                    }}
                    optionBeforeContent={optionBeforeContent}
                    optionAfterContent={optionAfterContent}
                    presetStyle={presetStyle}
                />
            </ProForm>
        </>
    );
}
