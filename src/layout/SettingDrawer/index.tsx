/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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
import {SettingDrawer as ProSettingDrawer, type SettingDrawerProps} from '@ant-design/pro-layout';
import './index.less';


export const SettingDrawer: React.FC<SettingDrawerProps> = (props?: SettingDrawerProps) => {
    const {prefixCls, ...restProps} = props || {};

    return (
        <ProSettingDrawer
            prefixCls={prefixCls || 'ant-buddy'}
            {...restProps}
        />
    );
};
