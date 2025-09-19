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


import React from 'react';
import {Button, Divider, message as messageApi} from 'antd';
import {RedoOutlined} from '@ant-design/icons';
import {RefreshImage, type RefreshImageRef} from '@unikue/ant-buddy-pro';
import {RandomUtils} from '@unikue/ts-lang-utils';


export default () => {
    const [messageInvoker, messageContext] = messageApi.useMessage();
    const refreshImageRef = React.useRef<RefreshImageRef>(null);

    return (
        <>
            {messageContext}
            <Button
                icon={<RedoOutlined/>}
                onClick={() => {
                    refreshImageRef.current?.refresh();
                }}
            >
                刷新圖片
            </Button>
            <Divider/>
            <RefreshImage
                ref={refreshImageRef}
                width={120}
                height={120}
                src={() => {
                    const images = [
                        `https://unikueltd.github.io/ant-buddy-pro/assets/ico/logo-icon.svg?timestamp=${Date.now()}`,
                        `https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png?timestamp=${Date.now()}`,
                        `https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg?timestamp=${Date.now()}`,
                    ];
                    return RandomUtils.randomElement(images);
                }}
                fallback='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                title='點擊刷新圖片'
                handCursor={true}
                onRefresh={() => {
                    messageInvoker.success('圖片已刷新');
                }}
            />
        </>
    );
}
