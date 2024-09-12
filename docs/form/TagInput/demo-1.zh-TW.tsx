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
    const [readonly, setReadonly] = React.useState<boolean>(true);
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
                        label='只讀'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: readonly,
                            onChange: (value) => {
                                setReadonly(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='TweenOne 動畫'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tweenOneAnim,
                            disabled: readonly,
                            onChange: (value) => {
                                setTweenOneAnim(value);
                            }
                        }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <Button
                        icon={<FireOutlined/>}
                        onClick={() => tagInputRef.current?.setTagContents(['foo', 'bar'])}
                    >
                        設定
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
                    readonly={readonly}
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
                        closable: !readonly,
                    }}
                    request={async () => {
                        return [
                            'request',
                            new Date().getFullYear(),
                        ];
                    }}
                    requestOptionPlace='after'
                    addingInputProps={{
                        placeholder: '標簽',
                        rules: [{
                            type: 'string',
                            max: 30,
                            message: '長度不能大於 30',
                        }],
                    }}
                    onTagContentsChange={(contents: any) => {
                        ConsoleUtils.log(false, false, 'TagInput', '標簽内容是 ' + JSON.stringify(contents));
                    }}
                />
            </ProForm>
        </>
    );
}
