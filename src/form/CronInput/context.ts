/*
 * Copyright (c) 2024 Yookue Ltd. All rights reserved.
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


export type CronInputContextProps = {
    /**
     * @description The field id of the component
     * @description.zh-CN 组件的 ID
     * @description.zh-TW 組件的 ID
     */
    fieldId?: string;

    /**
     * @description Whether to echo express to entry through ok button, otherwise echo in real time
     * @description.zh-CN 是否通过确定按钮来回显，否则将实时回显
     * @description.zh-TW 是否通過確定按鈕來回顯，否則將實時回顯
     */
    allowOkEcho?: boolean;

    /**
     * @description Whether the popup is currently open or not
     * @description.zh-CN 弹出层是否为打开状态
     * @description.zh-TW 彈出層是否為打開狀態
     */
    popupOpen?: boolean;
};


/**
 * Context for the `CronInput` component
 *
 * @author David Hsing
 */
export const CronInputContext = React.createContext<CronInputContextProps>({});
