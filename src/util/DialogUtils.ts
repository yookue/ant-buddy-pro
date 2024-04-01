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


import {Modal, type ModalFuncProps} from 'antd';
import {withWarn, withInfo, withSuccess, withError, withConfirm} from 'antd/es/modal/confirm';


export abstract class DialogUtils {
    /**
     * Popups a warn modal dialog
     *
     * @param props the properties object to inspect
     * @param preprocess whether to preprocess the properties (replaces the icon, etc.)
     */
    public static modalWarn = (props?: ModalFuncProps, preprocess?: boolean): void => {
        if (props) {
            Modal.warning(preprocess ? withWarn(props) : props);
        }
    }

    /**
     * Popups an info modal dialog
     *
     * @param props the properties object to inspect
     * @param preprocess whether to preprocess the properties (replaces the icon, etc.)
     */
    public static modalInfo = (props?: ModalFuncProps, preprocess?: boolean): void => {
        if (props) {
            Modal.info(preprocess ? withInfo(props) : props);
        }
    }

    /**
     * Popups a success modal dialog
     *
     * @param props the properties object to inspect
     * @param preprocess whether to preprocess the properties (replaces the icon, etc.)
     */
    public static modalSuccess = (props?: ModalFuncProps, preprocess?: boolean): void => {
        if (props) {
            Modal.success(preprocess ? withSuccess(props) : props);
        }
    }

    /**
     * Popups an error modal dialog
     *
     * @param props the properties object to inspect
     * @param preprocess whether to preprocess the properties (replaces the icon, etc.)
     */
    public static modalError = (props?: ModalFuncProps, preprocess?: boolean): void => {
        if (props) {
            Modal.error(preprocess ? withError(props) : props);
        }
    }

    /**
     * Popups a confirm modal dialog
     *
     * @param props the properties object to inspect
     * @param preprocess whether to preprocess the properties (replaces the icon, etc.)
     */
    public static modalConfirm = (props?: ModalFuncProps, preprocess?: boolean): void => {
        if (props) {
            Modal.confirm(preprocess ? withConfirm(props) : props);
        }
    }
}
