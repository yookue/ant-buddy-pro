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
import {SpaceBound} from '@yookue/ant-buddy-pro';


export default () => {
    return (
        <SpaceBound size='middle' containerStyle={{border: '1px solid #f5f2f0'}}>
            <span>Here is the first child content.</span>
            <span>Here is the second child content.</span>
        </SpaceBound>
    );
}
