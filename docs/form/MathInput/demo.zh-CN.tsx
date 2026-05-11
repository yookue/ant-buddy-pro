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


import {ProForm} from '@ant-design/pro-components';
import {MathInput} from '@unikue/ant-buddy-pro';


export default () => {
    return (
        <>
            <ProForm
                name='MathInput_demo.zh-CN'
                layout='vertical'
                autoFocusFirstInput={false}
                initialValues={{
                    foobar: '\\sqrt{x^2+y^2}',
                }}
                submitter={false}
            >
                <MathInput
                    name='foobar'
                    label='公式'
                    placeholder='公式'
                    locale='zh_CN'
                />
            </ProForm>
        </>
    );
}
