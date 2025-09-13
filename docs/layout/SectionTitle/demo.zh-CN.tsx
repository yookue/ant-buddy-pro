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
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {SectionTitle, type BeforeAfterType} from '@unikue/ant-buddy-pro';
import {type TitlePresetStyle} from 'src/layout/SectionTitle';


export default () => {
    const [boundBorder, setBoundBorder] = React.useState<boolean>(true);
    const [ornamentPos, setOrnamentPos] = React.useState<BeforeAfterType>('before');
    const [presetStyle, setPresetStyle] = React.useState<TitlePresetStyle | false>('default');

    return (
        <>
            <ProForm
                name='SectionTitle_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='外边框'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: boundBorder,
                        onChange: setBoundBorder,
                    }}
                />
                <ProFormRadio.Group
                    label='装饰物位置'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos,
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
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默认', value: 'default'},
                        {label: '成功', value: 'success'},
                        {label: '信息', value: 'info'},
                        {label: '警告', value: 'warn'},
                        {label: '错误', value: 'error'},
                        {label: '经典', value: 'classic'},
                        {label: '无', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <SectionTitle
                boundBorder={boundBorder}
                ornament='Ant Buddy'
                ornamentPos={ornamentPos}
                content='SectionTitle 标题内容'
                presetStyle={presetStyle}
            />
        </>
    );
}
