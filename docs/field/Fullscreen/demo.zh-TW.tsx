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
import {Fullscreen} from '@yookue/ant-buddy-pro';


export default () => {
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='Fullscreen_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='Tooltip 控件'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: tooltipCtrl,
                        onChange: setTooltipCtrl,
                    }}
                />
            </ProForm>
            <Divider/>
            <Fullscreen
                tooltipCtrl={tooltipCtrl}
                localeProps={{
                    requestFullscreen: '全屏',
                    exitFullscreen: '退出全屏',
                }}
            />
        </>
    );
}
