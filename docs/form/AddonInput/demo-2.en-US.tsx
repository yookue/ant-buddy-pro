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


import {ProForm, ProCard} from '@ant-design/pro-components';
import {AddonInput, SortableList} from '@unikue/ant-buddy-pro';


export default () => {
    return (
        <>
            <ProForm
                name='AddonInput_demo_2.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
                request={async () => {
                    return {
                        demoList: [
                            {
                                website: 'example.com',
                            },
                            {
                                website: 'google.com',
                            }
                        ],
                    };
                }}
            >
                <SortableList
                    name='demoList'
                    creatorButtonProps={false}
                    copyIconProps={false}
                    deleteIconProps={false}
                    itemRender={({listDom, action}) => {
                        return (
                            <ProCard
                                title='Demo Item'
                                variant='outlined'
                                extra={action}
                                style={{
                                    marginBlockEnd: 24,
                                }}
                            >
                                {listDom}
                            </ProCard>
                        );
                    }}
                    locale='en_US'
                >
                    <AddonInput
                        name='website'
                        label='Website URL'
                        placeholder='Enter website URL'
                        addonBefore='https://'
                    />
                </SortableList>
            </ProForm>
        </>
    );
}
