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
import {FireOutlined, ClearOutlined} from '@ant-design/icons';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {TagInput, ConsoleUtils, type TagInputRef} from '@yookue/ant-buddy-pro';


export default () => {
    const tagInputRef = React.useRef<TagInputRef>(null);
    const [addable, setAddable] = React.useState<boolean>(false);
    const [removable, setRemovable] = React.useState<boolean>(false);
    const [tweenOneAnim, setTweenOneAnim] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='TagInput_demo1'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='可添加'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: addable,
                            onChange: setAddable,
                        }}
                    />
                    <ProFormSwitch
                        label='可移除'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: removable,
                            onChange: setRemovable,
                        }}
                    />
                    <ProFormSwitch
                        label='TweenOne 动画'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tweenOneAnim,
                            disabled: !removable,
                            onChange: setTweenOneAnim,
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
                    fieldRef={tagInputRef}
                    name='foobar'
                    valuePropName='fulfilTagItems'
                    trigger='onTagContentsChange'
                    addable={addable}
                    tweenOneAnim={tweenOneAnim}
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
                    fulfilTagProps={{
                        closable: removable,
                    }}
                    request={async () => {
                        return [
                            'request',
                            new Date().getFullYear(),
                        ];
                    }}
                    requestOptionPlace='after'
                    addingInputProps={{
                        placeholder: '标签',
                        rules: [{
                            type: 'string',
                            max: 30,
                            message: '长度不能大于 30',
                        }],
                    }}
                    onTagContentsChange={(contents: any) => {
                        ConsoleUtils.logTimestamp(false, false, 'TagInput', 'onTagContentsChange contents = ' + JSON.stringify(contents));
                    }}
                />
            </ProForm>
        </>
    );
}
