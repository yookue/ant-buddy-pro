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
import {ConfigProvider, Form, type FormProps, type FormInstance} from 'antd';
import {ProForm, type ProFormProps, type ProFormInstance} from '@ant-design/pro-form';
import {nanoid} from '@ant-design/pro-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type ClickHoverType} from '@/type/declaration';
import './index.less';


export type CollapseFormRef = {
    getFormRef: () => FormInstance<any>;
    getProFormRef: () => React.MutableRefObject<ProFormInstance | null>;
    isFormOpen: () => boolean;
    openForm: () => void;
    closeForm: () => void;
};


export type CollapseFormProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-collapse-form'
     */
    clazzPrefix?: string;

    /**
     * @description Whether to change the cursor automatically
     * @description.zh-CN 是否自动改变鼠标指针样式
     * @description.zh-TW 是否自动改变鼠标指针样式
     */
    autoEntryCursor?: boolean;

    /**
     * @description The entry element when form closed
     * @description.zh-CN 表单关闭时的入口节点
     * @description.zh-TW 表單關閉時的入口節點
     */
    closedEntry?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The CSS class name of the entry element div when form closed
     * @description.zh-CN 表单关闭时的入口节点 div 的 CSS 类名
     * @description.zh-TW 表單關閉時的入口節點 div 的 CSS 類名
     */
    closedEntryClazz?: string;

    /**
     * @description The CSS style of the entry element div when form closed
     * @description.zh-CN 表单关闭时的入口节点 div 的 CSS 样式
     * @description.zh-TW 表單關閉時的入口節點 div 的 CSS 樣式
     */
    closedEntryStyle?: React.CSSProperties;

    /**
     * @description The entry element when form opened
     * @description.zh-CN 表单展开时的入口节点
     * @description.zh-TW 表單展開時的入口節點
     */
    openedEntry?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The CSS class name of the entry element div when form opened
     * @description.zh-CN 表单展开时的入口节点 div 的 CSS 类名
     * @description.zh-TW 表單展開時的入口節點 div 的 CSS 類名
     */
    openedEntryClazz?: string;

    /**
     * @description The CSS style of the entry element div when form opened
     * @description.zh-CN 表单展开时的入口节点 div 的 CSS 样式
     * @description.zh-TW 表單展開時的入口節點 div 的 CSS 樣式
     */
    openedEntryStyle?: React.CSSProperties;

    /**
     * @description The form content
     * @description.zh-CN 表单内容节点
     * @description.zh-TW 表單內容節點
     */
    formContent?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The CSS class name of the form content div
     * @description.zh-CN 表单内容节点 div 的 CSS 类名
     * @description.zh-TW 表單內容節點 div 的 CSS 類名
     */
    formContentClazz?: string;

    /**
     * @description The CSS style of the form content div
     * @description.zh-CN 表单内容节点 div 的 CSS 样式
     * @description.zh-TW 表單內容節點 div 的 CSS 樣式
     */
    formContentStyle?: React.CSSProperties;

    /**
     * @description The props of form
     * @description.zh-CN 表单属性
     * @description.zh-TW 表單屬性
     */
    formProps?: Omit<ProFormProps, 'formRef'> | Omit<FormProps, 'form'>;

    /**
     * @description Whether to close the form after form blur
     * @description.zh-CN 表单失去焦点后是否关闭表单
     * @description.zh-TW 表單失去焦點後是否關閉表單
     * @default true
     */
    closeOnBlur?: boolean;

    /**
     * @description Whether to close the form after submitting successful
     * @description.zh-CN 表单提交成功后是否关闭表单
     * @description.zh-TW 表單提交成功後是否關閉表單
     * @default true
     */
    closeOnFinish?: boolean;

    /**
     * @description Whether the form is default open or not
     * @description.zh-CN 表单是否默认展开
     * @description.zh-TW 表單是否默認展開
     * @default false
     */
    defaultOpen?: boolean;

    /**
     * @description The trigger type when open the form
     * @description.zh-CN 展开表单的触发方式
     * @description.zh-TW 展開表單的觸發方式
     * @default 'click'
     */
    triggerType?: ClickHoverType;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;
}>;


/**
 * Component for displaying a form with collapse capability
 *
 * @author David Hsing
 */
export const CollapseForm: React.ForwardRefExoticComponent<CollapseFormProps & React.RefAttributes<CollapseFormRef>> = React.forwardRef((props?: CollapseFormProps, ref?: any) => {
    CollapseForm.displayName = 'CollapseForm';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-collapse-form');

    // Initialize the default props
    const {
        closeOnBlur = true,
        closeOnFinish = true,
        triggerType = 'click',
        defaultOpen = false,
        proField = true,
    } = props ?? {};

    const [fieldId] = React.useState<string>(nanoid().replace(/-/g, ''));
    const formRef = Form.useFormInstance();
    const proFormRef = React.useRef<ProFormInstance>(null);
    const [formOpen, setFormOpen] = React.useState<boolean>(defaultOpen);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getFormRef: (): FormInstance<any> => {
            return formRef;
        },
        getProFormRef: (): React.MutableRefObject<ProFormInstance | null> => {
            return proFormRef;
        },
        isFormOpen: (): boolean => {
            return formOpen;
        },
        openForm: (): void => {
            setFormOpen(true);
        },
        closeForm: (): void => {
            setFormOpen(false);
        }
    }));

    if (closeOnBlur) {
        React.useLayoutEffect(() => {
            document.addEventListener('keydown', restoreLayout);
            document.addEventListener('mousedown', restoreLayout);
            return () => {
                document.removeEventListener('keydown', restoreLayout);
                document.removeEventListener('mousedown', restoreLayout);
            }
        }, []);
    }

    const restoreLayout = (event: any) => {
        const entry = document.querySelector<HTMLDivElement>(`div[data-collapse-form-entry-id='${fieldId}']`);
        const content = document.querySelector<HTMLDivElement>(`div[data-collapse-form-content-id='${fieldId}']`);
        if (!entry?.contains(event.target) && !content?.contains(event.target)) {
            setFormOpen(false);
        }
    };

    const buildEntryDom = () => {
        if (formOpen) {
            return (
                <div
                    className={classNames(`${clazzPrefix}-entry`, `${clazzPrefix}-entry-open`, (props?.autoEntryCursor ? `${clazzPrefix}-entry-cursor` : undefined), props?.openedEntryClazz)}
                    style={props?.openedEntryStyle}
                    onClick={triggerType !== 'click' ? undefined : () => setFormOpen(false)}
                    onMouseOver={triggerType !== 'hover' ? undefined : () => setFormOpen(false)}
                    data-collapse-form-entry-id={fieldId}
                >
                    {(typeof props?.openedEntry === 'function') ? props.openedEntry() : props?.openedEntry}
                </div>
            );
        }
        return (
            <div
                className={classNames(`${clazzPrefix}-entry`, (props?.autoEntryCursor ? `${clazzPrefix}-entry-cursor` : undefined), props?.closedEntryClazz)}
                style={props?.closedEntryStyle}
                onClick={triggerType !== 'click' ? undefined : () => setFormOpen(true)}
                onMouseOver={triggerType !== 'hover' ? undefined : () => setFormOpen(true)}
                data-collapse-form-entry-id={fieldId}
            >
                {(typeof props?.closedEntry === 'function') ? props.closedEntry() : props?.closedEntry}
            </div>
        );
    };

    const omitFromProps = !props?.formProps ? {} : omit(props.formProps, ['name', 'onFinish']);

    const buildFormDom = () => {
        if (proField) {
            return (
                <ProForm
                    formRef={proFormRef}
                    name={props?.formProps?.name ?? `buddy-collapse-form-${fieldId}`}
                    {...omitFromProps}
                    onFinish={async (values) => {
                        if (closeOnFinish) {
                            setFormOpen(false);
                        }
                        await props?.formProps?.onFinish?.(values);
                    }}
                >
                    {!props?.formContent ? props?.children : ((typeof props?.formContent === 'function') ? props.formContent() : props.formContent)}
                </ProForm>
            );
        }
        return (
            <Form
                form={formRef}
                name={props?.formProps?.name ?? `buddy-collapse-form-${fieldId}`}
                {...omitFromProps}
                onFinish={async (params) => {
                    if (closeOnFinish) {
                        setFormOpen(false);
                    }
                    await props?.formProps?.onFinish?.(params);
                }}
            >
                {!props?.formContent ? props?.children : ((typeof props?.formContent === 'function') ? props.formContent() : props.formContent)}
            </Form>
        );
    };

    return (
        <>
            {buildEntryDom()}
            <div
                className={classNames(`${clazzPrefix}-content`, (!formOpen ? undefined : `${clazzPrefix}-content-open`), props?.formContentClazz)}
                style={props?.formContentStyle}
                data-collapse-form-content-id={fieldId}
            >
                {buildFormDom()}
            </div>
        </>
    );
});
