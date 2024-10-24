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
import {Button, Divider} from 'antd';
import {LikeOutlined, DislikeOutlined} from '@ant-design/icons';
import {ProForm} from '@ant-design/pro-form';
import {ThumbTuple, type ThumbTupleRef} from '@yookue/ant-buddy-pro';


export default () => {
    const thumbTupleRef = React.useRef<ThumbTupleRef>(null);

    return (
        <>
            <ProForm
                name='ThumbTuple_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <Button
                        icon={<LikeOutlined/>}
                        onClick={() => thumbTupleRef.current?.getThumbLikeRef()?.current?.toggleChecked()}
                    >
                        切换喜欢
                    </Button>
                    <Button
                        icon={<DislikeOutlined/>}
                        onClick={() => thumbTupleRef.current?.getThumbDislikeRef()?.current?.toggleChecked()}
                    >
                        切换不喜欢
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <ThumbTuple
                ref={thumbTupleRef}
                thumbLikeProps={{
                    checkable: true,
                    tooltipCtrl: true,
                    localeProps: {
                        like: '喜欢',
                        dislike: '不喜欢',
                    }
                }}
                thumbDislikeProps={{
                    checkable: true,
                    tooltipCtrl: true,
                    localeProps: {
                        like: '喜欢',
                        dislike: '不喜欢',
                    }
                }}
            />
        </>
    );
}
