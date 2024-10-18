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
import {ConfigProvider, Modal, type ModalProps, type ModalFuncProps} from 'antd';
import {withConfirm, withInfo, withWarn, withSuccess, withError} from 'antd/es/modal/confirm';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {ConsoleUtils} from '@/util/ConsoleUtils';


export type DelayModalRef = {
    isOpening: () => boolean;
    hasOpened: () => boolean;
};


export type MixinModalProps = Omit<ModalProps, 'open'>;


export type MixinModalFuncProps = Omit<ModalFuncProps, 'open'> & {
    /**
     * @description whether to preprocess the properties (setups the icon, etc.)
     * @description.zh-CN 是否预处理属性（设置图标等）
     * @description.zh-TW 是否預處理屬性（設置圖標等）
     */
    preprocess?: boolean;
};


export type ModalActionType = 'confirm' | 'info' | 'warn' | 'success' | 'error' | 'custom';


export type DelayModalProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-delay-modal'
     */
    clazzPrefix?: string;

    /**
     * @description The action type to display the modal
     * @description.zh-CN 显示模态对话框的动作类型
     * @description.zh-TW 顯示模態對話框的動作類型
     * @default 'custom' || 'info'
     */
    actionType?: ModalActionType;

    /**
     * @description Whether to display the modal only once
     * @description.zh-CN 是否只显示一次模态对话框
     * @description.zh-TW 是否只顯示一次模態對話框
     */
    onceOnly?: boolean;

    /**
     * @description The callback function when the opening state changed
     * @description.zh-CN 模态对话框显示状态变化时的回调函数
     * @description.zh-TW 模態對話框顯示狀態變化時的回調函數
     */
    onOpenChange?: (open: boolean) => void;

    /**
     * @description The events that will prevent displaying the modal
     * @description.zh-CN 阻止显示模态对话框的事件
     * @description.zh-TW 阻止显示模态对话框的事件
     * @default ['keydown', 'mousedown', 'scroll']
     */
    preventEvents?: Array<keyof GlobalEventHandlersEventMap>;

    /**
     * @description The timeout that will display the modal, in milliseconds
     * @description.zh-CN 显示模态对话框的超时时间，单位毫秒
     * @description.zh-TW 顯示模態對話框的超時時間，單位毫秒
     * @default 1000 * 60 * 5
     */
    timeout?: number;

    /**
     * @description The target DOM element to trigger the prevent events
     * @description.zh-CN 要触发延迟事件的 DOM 元素
     * @description.zh-TW 要觸發延遲事件的 DOM 元素
     * @default document
     */
    triggerElement?: HTMLElement;

    /**
     * @description The properties of the modal
     * @description.zh-CN 模态对话框的属性
     * @description.zh-TW 模態對話框的屬性
     */
    modalProps?: MixinModalProps;

    /**
     * @description The properties of the functional modal dialog
     * @description.zh-CN 函数型模态对话框的属性
     * @description.zh-TW 函數型模態對話框的屬性
     */
    modalFunProps?: MixinModalFuncProps;
}>;


/**
 * Component for displaying a modal dialog when exceeds timeout
 *
 * @author David Hsing
 */
export const DelayModal: React.ForwardRefExoticComponent<DelayModalProps & React.RefAttributes<DelayModalRef>> = React.forwardRef((props?: DelayModalProps, ref?: any) => {
    DelayModal.displayName = 'DelayModal';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-delay-modal');

    ConsoleUtils.warn(!!props?.modalProps || !!props?.modalFunProps, true, 'DelayModal', ` Any props of 'modalProps/modalFunProps' is required`);

    // Initialize the default props
    const {
        preventEvents = ['keydown', 'mousedown', 'scroll'],
        timeout = 1000 * 60 * 5,
        triggerElement = document,
    } = props ?? {};

    const [opening, setOpening] = React.useState<boolean>(false);
    const openedRef = React.useRef<boolean>(false);
    const timerRef = React.useRef<number>(0);
    const actionType = props?.actionType ?? (props?.modalProps ? 'custom' : 'info');

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isOpening: (): boolean => {
            return opening;
        },
        hasOpened: (): boolean => {
            return openedRef.current;
        }
    }));

    const onTimer = () => {
        if (props?.onceOnly) {
            preventEvents.forEach(item => {
                triggerElement.removeEventListener(item, startTimer);
            });
            clearTimer();
        }
        if (!props?.onceOnly || !openedRef.current) {
            const previous = opening;
            setOpening(true);
            if (actionType !== 'custom' && !previous) {
                popupFuncModal();
            }
        }
        openedRef.current = true;
    };

    const clearTimer = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = 0;
        }
    };

    const startTimer = () => {
        clearTimer();
        if (!props?.onceOnly || !opening) {
            timerRef.current = window.setTimeout(onTimer, timeout);
        }
    };

    React.useEffect(() => {
        preventEvents.forEach(item => {
            triggerElement.addEventListener(item, startTimer);
        });
        startTimer();
        return () => {
            preventEvents.forEach(item => {
                triggerElement.removeEventListener(item, startTimer);
            });
            clearTimer();
        }
    }, [props?.onceOnly, actionType]);

    React.useEffect(() => {
        props?.onOpenChange?.(opening);
    }, [opening]);

    const popupFuncModal = () => {
        const omitProps = !props?.modalFunProps ? {} : omit(props.modalFunProps, ['className', 'wrapClassName', 'afterClose', 'preprocess']);
        const fullProps: ModalFuncProps = {
            className: classNames(clazzPrefix, props?.modalFunProps?.className),
            wrapClassName: classNames(`${clazzPrefix}-wrapper`, props?.modalFunProps?.wrapClassName),
            open: opening,
            afterClose: () => {
                setOpening(false);
                props?.modalFunProps?.afterClose?.();
            },
            ...omitProps,
        };
        const preprocess = props?.modalFunProps?.preprocess ?? true;
        switch (actionType) {
            case 'confirm':
                Modal.confirm(preprocess ? withConfirm(fullProps) : fullProps);
                break;
            case 'info':
                Modal.info(preprocess ? withInfo(fullProps) : fullProps);
                break;
            case 'warn':
                Modal.warn(preprocess ? withWarn(fullProps) : fullProps);
                break;
            case 'success':
                Modal.success(preprocess ? withSuccess(fullProps) : fullProps);
                break;
            case 'error':
                Modal.error(preprocess ? withError(fullProps) : fullProps);
                break;
            default:
                break;
        }
    };

    if (actionType !== 'custom') {
        return null;
    }

    const omitProps = !props?.modalProps ? {} : omit(props.modalProps, ['className', 'wrapClassName', 'onOk', 'onCancel', 'afterClose', 'children']);
    return (
        <Modal
            className={classNames(clazzPrefix, props?.modalProps?.className)}
            wrapClassName={classNames(`${clazzPrefix}-wrapper`, props?.modalProps?.wrapClassName)}
            open={opening}
            onOk={(event: React.MouseEvent<HTMLElement>) => {
                setOpening(false);
                props?.modalProps?.onOk?.(event);
            }}
            onCancel={(event: React.MouseEvent<HTMLElement>) => {
                setOpening(false);
                props?.modalProps?.onCancel?.(event);
            }}
            afterClose={() => {
                setOpening(false);
                props?.modalProps?.afterClose?.();
            }}
            {...omitProps}
        >
            {props?.modalProps?.children ?? props?.children}
        </Modal>
    );
});
