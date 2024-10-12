/*
 * Copyright (c)  Yookue Ltd. All rights reserved.
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
import {type LabeledValue} from 'antd/es/select';


/**
 * Renders for rendering select
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class SelectRender {
    /**
     * Returns the rendered DOM for the given select option, value first, label align right
     *
     * @param item the option item to render
     *
     * @returns the rendered DOM for the given select option, value first, label align right
     */
    public static renderLabelPriorAfter = (item: LabeledValue): React.ReactNode => {
        return (
            <div key={item?.value} style={{display: 'flex', flexFlow: 'row nowrap'}}>
                <span style={{flex: 'none', width: 'fit-content'}}>
                    {item?.value}
                </span>
                <span style={{flex: '1', paddingLeft: '4px', textAlign: 'right'}}>
                    {item?.label}
                </span>
            </div>
        );
    }

    /**
     * Returns the rendered DOM for the given select option, label first
     *
     * @param item the option item to render
     *
     * @returns the rendered DOM for the given select option, label first
     */
    public static renderLabelPriorBefore = (item: LabeledValue): React.ReactNode => {
        return (
            <div key={item?.value} style={{display: 'flex', flexFlow: 'row nowrap'}}>
                <span style={{flex: '1', paddingRight: '4px'}}>
                    {item?.label}
                </span>
                <span style={{flex: 'none', width: 'fit-content'}}>
                    {item?.value}
                </span>
            </div>
        );
    }
}
