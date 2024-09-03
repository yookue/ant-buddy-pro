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
import {Button, Divider, message as messageApi} from 'antd';
import {FireOutlined, ClearOutlined} from '@ant-design/icons';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {TagInput, type TagInputRef} from '@yookue/ant-buddy-pro';


export default () => {
    const [addable, setAddable] = React.useState<boolean>(false);
    const [removable, setRemovable] = React.useState<boolean>(false);
    const [performSubmit, setPerformSubmit] = React.useState<boolean>(true);
    const tagInputRef = React.useRef<TagInputRef>(null);

    return (
        <ProForm
            layout='horizontal'
            autoFocusFirstInput={false}
            submitter={{
                render: (props) => {
                    return [
                        <Button type='primary' onClick={() => props.form?.submit?.()}>提交</Button>
                    ];
                }
            }}
            onFinish={async (values) => {
                console.log(values);
                messageApi.success('您点击了提交按钮');
            }}
        >
            <ProForm.Group>
                <ProFormSwitch
                    label='可增加'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: addable,
                        onChange: (value) => {
                            setAddable(value);
                        }
                    }}
                />
                <ProFormSwitch
                    label='可移除'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: removable,
                        onChange: (value) => {
                            setRemovable(value);
                        }
                    }}
                />
                <ProFormSwitch
                    label='可提交'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    tooltip='查看 DOM 结构来区分不同'
                    fieldProps={{
                        checked: performSubmit,
                        onChange: (value) => {
                            setPerformSubmit(value);
                        }
                    }}
                />
            </ProForm.Group>
            <ProForm.Group>
                <Button
                    icon={<FireOutlined/>}
                    onClick={() => tagInputRef.current?.setTagContents(['foo', 'bar'])}
                >
                    设定
                </Button>
                <Button
                    icon={<ClearOutlined/>}
                    onClick={() => tagInputRef.current?.setTagContents(undefined)}
                >
                    清空
                </Button>
            </ProForm.Group>
            <Divider/>
            <TagInput
                ref={tagInputRef}
                name='foobar'
                addable={addable}
                performSubmit={performSubmit}
                fulfilTagItems={[
                    {
                        color: 'volcano',
                        content: 'foo',
                    },
                    {
                        color: 'orange',
                        content: 'bar',
                    },
                    {
                        color: 'green',
                        content: 'hello',
                    },
                    {
                        color: 'blue',
                        content: 'world',
                    }
                ]}
                fulfilTagShareProps={{
                    closable: removable,
                }}
            />
            <Divider/>
        </ProForm>
    );
}
