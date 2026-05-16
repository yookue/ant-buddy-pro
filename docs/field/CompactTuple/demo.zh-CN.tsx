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
import { Row, Col, Divider } from 'antd';
import datePickerLocale from 'antd/es/date-picker/locale/zh_CN';
import { ProForm, ProFormDatePicker, ProFormRadio, ProFormSwitch, ProFormDependency } from '@ant-design/pro-components';
import { CompactTuple, type BeforeAfterType } from '@unikue/ant-buddy-pro';
import { type TuplePresetStyle } from '@unikue/ant-buddy-pro/field/CompactTuple';
import dayjs from 'dayjs';


export default () => {
    // noinspection DuplicatedCode
    const [formReadonly, setFormReadonly] = React.useState<boolean>(false);
    const [widthBlock, setWidthBlock] = React.useState<boolean>(false);
    const [addonPos, setAddonPos] = React.useState<BeforeAfterType>('after');
    const [presetStyle, setPresetStyle] = React.useState<TuplePresetStyle | false>('field-prior');

    return (
        <>
            <ProForm
                name='CompactTuple_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='表单只读'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: formReadonly,
                            onChange: setFormReadonly,
                        }}
                    />
                    <ProFormSwitch
                        label='匹配宽度'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='附加物位置'
                    radioType='button'
                    fieldProps={{
                        value: addonPos,
                        buttonStyle: 'solid',
                        disabled: formReadonly,
                        onChange: (event: any) => {
                            setAddonPos(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '前', value: 'before' },
                        { label: '后', value: 'after' },
                        { label: '无', value: false },
                    ]}
                />
                <ProFormRadio.Group
                    label='预设样式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        disabled: formReadonly,
                        onChange: (event: any) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '字段优先', value: 'field-prior' },
                        { label: '附加物优先', value: 'addon-prior' },
                        { label: '无', value: false },
                    ]}
                />
            </ProForm>
            <Divider />
            <ProForm
                name='CompactTuple_test'
                layout='vertical'
                autoFocusFirstInput={false}
                readonly={formReadonly}
                submitter={false}
            >
                <Row gutter={[12, 0]}>
                    <Col span={12}>
                        <ProFormDatePicker
                            name='identityStart'
                            label='开始日期'
                            placeholder='开始日期'
                            fieldProps={{
                                style: { width: '100%' },
                                locale: datePickerLocale,
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <CompactTuple
                            field={(
                                <ProFormDependency name={['identityStart', 'identityInfinite']} shouldUpdate={true}>
                                    {({ identityStart, identityInfinite }) => {
                                        return (
                                            <ProFormDatePicker
                                                name='identityEnd'
                                                label='结束日期'
                                                placeholder='结束日期'
                                                fieldProps={{
                                                    disabled: identityInfinite,
                                                    disabledDate: (date: any) => date < dayjs(identityStart),
                                                    style: { width: '100%' },
                                                    locale: datePickerLocale,
                                                }}
                                            />
                                        );
                                    }}
                                </ProFormDependency>
                            )}
                            addon={(
                                <ProFormSwitch
                                    name='identityInfinite'
                                    label='长期'
                                    fieldProps={{
                                        defaultChecked: false,
                                        checkedChildren: '是',
                                        unCheckedChildren: '否',
                                        style: {
                                            margin: '2px 6px',
                                        }
                                    }}
                                />
                            )}
                            addonPos={addonPos}
                            addonBorder={true}
                            addonMarginLeft={addonPos === 'after'}
                            addonMarginRight={addonPos === 'before'}
                            widthBlock={widthBlock}
                            presetStyle={presetStyle}
                        />
                    </Col>
                </Row>
            </ProForm>
        </>
    );
}
