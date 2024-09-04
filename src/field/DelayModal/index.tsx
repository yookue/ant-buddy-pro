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
import {nanoid} from '@ant-design/pro-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import warning from 'rc-util/es/warning';
import {ModalUtils} from '@/util/ModalUtils';


export type MixinModalProps = Omit<ModalProps, 'open'>;


export type MixinModalFuncProps = Omit<ModalFuncProps, 'open'> & {
    /**
     * @description whether to preprocess the properties (setups the icon, etc.)
     * @description.zh-CN 是否预处理属性（设置图标等）
     * @description.zh-TW 是否預處理屬性（設置圖標等）
     */
    preprocess?: boolean;
};


export type ModalActionType = 'confirm' | 'info' | 'warn' | 'success' | 'error' | 'modal';


export type DelayModalProps = {
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
     * @default 'modal' || 'info'
     */
    actionType?: ModalActionType;

    /**
     * @description Whether to display the modal only once
     * @description.zh-CN 是否只显示一次模态对话框
     * @description.zh-TW 是否只顯示一次模態對話框
     */
    onceOnly?: boolean;

    /**
     * @description The callback to be called when open the modal
     * @description.zh-CN 显示模态对话框后的回调函数
     * @description.zh-TW 顯示模態對話框後的回調函數
     */
    onOpen?: () => void;

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
    timeoutMillis?: number;

    /**
     * @description The target DOM element to trigger the prevent events
     * @description.zh-CN 要触发延迟事件的 DOM 元素
     * @description.zh-TW 要觸發延遲事件的 DOM 元素
     * @default document
     */
    triggerFor?: HTMLElement;

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
};


/**
 * Component for displaying a modal dialog when exceeds timeout
 *
 * @author David Hsing
 */
export const DelayModal: React.FC<DelayModalProps> = (props?: DelayModalProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-delay-modal');

    warning(!!props?.modalProps || !!props?.modalFunProps, `DelayModal must has any props of 'modalProps/modalFunProps' at least`);

    // Initialize the default props
    const {
        preventEvents = ['keydown', 'mousedown', 'scroll'],
        timeoutMillis = 1000 * 60 * 5,
        triggerFor = document,
    } = props ?? {};

    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [onceShown, setOnceShown] = React.useState<boolean>(false);
    const timerIdRef = React.useRef<number>(0)

    const elementId = nanoid();
    const actionType = props?.actionType ?? (props?.modalProps ? 'modal' : 'info');
    const omitFuncProps = !props?.modalFunProps ? {} : omit(props.modalFunProps, ['className', 'preprocess']);
    Object.assign(omitFuncProps, {
        'key': elementId,
        'className': classNames(clazzPrefix, props?.modalFunProps?.className),
    });

    const onTimer = () => {
        if (props?.onceOnly) {
            preventEvents.forEach(item => {
                triggerFor.removeEventListener(item, startTimer);
            });
            clearTimer();
        }
        switch (actionType) {
            case 'confirm':
                ModalUtils.confirm(omitFuncProps, props?.modalFunProps?.preprocess);
                break;
            case 'info':
                ModalUtils.info(omitFuncProps, props?.modalFunProps?.preprocess);
                break;
            case 'warn':
                ModalUtils.warn(omitFuncProps, props?.modalFunProps?.preprocess);
                break;
            case 'success':
                ModalUtils.success(omitFuncProps, props?.modalFunProps?.preprocess);
                break;
            case 'error':
                ModalUtils.error(omitFuncProps, props?.modalFunProps?.preprocess);
                break;
            case 'modal':
                if (!props?.onceOnly || !onceShown) {
                    setModalOpen(true);
                }
                break;
            default:
                break;
        }
        setOnceShown(true);
        props?.onOpen?.();
    };

    const clearTimer = () => {
        if (timerIdRef.current) {
            window.clearTimeout(timerIdRef.current);
            timerIdRef.current = 0;
        }
    };

    const startTimer = () => {
        clearTimer();
        if (!props?.onceOnly || !onceShown) {
            timerIdRef.current = window.setTimeout(onTimer, timeoutMillis);
        }
    };

    React.useEffect(() => {
        preventEvents.forEach(item => {
            triggerFor.addEventListener(item, startTimer);
        });
        startTimer();
        return () => {
            preventEvents.forEach(item => {
                triggerFor.removeEventListener(item, startTimer);
            });
            clearTimer();
        }
    }, [props?.onceOnly]);

    if (actionType !== 'modal') {
        return null;
    }

    const restProps = !props?.modalProps ? {} : omit(props.modalProps, ['wrapClassName', 'onOk', 'onCancel']);
    return (
        <Modal
            key={elementId}
            open={modalOpen}
            wrapClassName={classNames(clazzPrefix, props?.modalProps?.wrapClassName)}
            {...restProps}
            onOk={(event: React.MouseEvent<HTMLElement>) => {
                setModalOpen(false);
                props?.modalProps?.onOk?.(event);
            }}
            onCancel={(event: React.MouseEvent<HTMLElement>) => {
                setModalOpen(false);
                props?.modalProps?.onCancel?.(event);
            }}
        />
    );
};
