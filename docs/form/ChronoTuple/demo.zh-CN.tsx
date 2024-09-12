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
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {ChronoTuple} from '@yookue/ant-buddy-pro';


export default () => {
    const [widthBlock, setWidthBlock] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='ChronoTuple_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='匹配宽度'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: (value) => {
                                setWidthBlock(value);
                            }
                        }}
                    />
                </ProForm.Group>
                <Divider/>
                <ChronoTuple
                    digitProps={{
                        name: 'durationAmount',
                        label: '时间间隔',
                        placeholder: '数值',
                    }}
                    selectProps={{
                        name: 'durationUnit',
                        placeholder: '单位',
                        localeProps: {
                            millis: '毫秒',
                            seconds: '秒',
                            minutes: '分',
                            hours: '小时',
                            days: '天',
                            weeks: '周',
                            months: '月',
                            years: '年',
                            forever: '永久',
                        }
                    }}
                    widthBlock={widthBlock}
                />
            </ProForm>
        </>
    );
}
