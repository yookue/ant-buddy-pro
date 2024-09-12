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
import {ProForm} from '@ant-design/pro-form';
import {SegmentRadio} from '@yookue/ant-buddy-pro';


export default () => {
    return (
        <>
            <ProForm
                name='SegmentRadio_demo2'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <SegmentRadio
                    name='foobar'
                    label='请打分'
                    fieldProps={{
                        defaultValue: 'good',
                        options: [],
                    }}
                    request={async () => [
                        {
                            label: '好',
                            value: 'good',
                        },
                        {
                            label: '很好',
                            value: 'excellent',
                        },
                        {
                            label: '非常好',
                            value: 'perfect',
                        }
                    ]}
                />
            </ProForm>
        </>
    );
}
