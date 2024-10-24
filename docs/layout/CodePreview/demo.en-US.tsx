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
import {CodePreview} from '@yookue/ant-buddy-pro';
import {type PreviewPresetStyle} from '@yookue/ant-buddy-pro/layout/CodePreview';


export default () => {
    const [presetStyle, setPresetStyle] = React.useState<PreviewPresetStyle>('default');

    return (
        <>
            <ProForm
                name='CodePreview_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Preset Style'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Default', value: 'default'},
                        {label: 'False', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <CodePreview
                titleContent='How to install this package?'
                textContent='npm install @yookue/ant-buddy-pro -S'
                titleProps={{
                    level: 5,
                }}
                textProps={{
                    copyable: true,
                }}
                presetStyle={presetStyle}
            />
        </>
    );
}
