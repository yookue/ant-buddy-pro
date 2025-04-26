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
import {SpaceBound} from '@yookue/ant-buddy-pro';


export default () => {
    const [boundBorder, setBoundBorder] = React.useState<boolean>(true);
    const [widthBlock, setWidthBlock] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='SpaceBound_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='外邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: boundBorder,
                            onChange: setBoundBorder,
                        }}
                    />
                    <ProFormSwitch
                        label='匹配寬度'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <SpaceBound
                size='middle'
                boundBorder={boundBorder}
                widthBlock={widthBlock}
            >
                <span>這是第一個子節點。</span>
                <span>這是第二個子節點。</span>
            </SpaceBound>
        </>
    );
}
