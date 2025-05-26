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
import {Space, InputNumber} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {ProFormDigit} from '@ant-design/pro-form';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {type ProFormDigitProps} from '@ant-design/pro-form/es/components/Digit';
import {useIntl} from '@ant-design/pro-provider';
import {ArrayUtils, ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {MaskInput, type MaskInputProps} from '@/form/MaskInput';
import {PropUtils} from '@/util/PropUtils';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type ServerTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-server-tuple'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container div
     * @description.zh-CN 容器 div 的 CSS 类名
     * @description.zh-TW 容器 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the container div
     * @description.zh-CN 容器 div 的 CSS 样式
     * @description.zh-TW 容器 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The field name of the child components
     * @description.zh-CN 子组件的名称
     * @description.zh-TW 子組件的名稱
     * @default ['serverHost', 'serverPort']
     */
    name?: [string, string];

    /**
     * @description The props of the host address
     * @description.zh-CN 主机地址的属性
     * @description.zh-TW 主機地址的屬性
     */
    hostProps?: Omit<MaskInputProps, 'proField'>;

    /**
     * @description The props of the port number
     * @description.zh-CN 端口的属性
     * @description.zh-TW 端口的屬性
     */
    portProps?: ProFormDigitProps;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;
};


/**
 * Component for displaying a text input box with a number input box, for server host and port
 *
 * @author David Hsing
 */
export const ServerTuple: React.FC<ServerTupleProps> = (props?: ServerTupleProps) => {
    const editContext = React.useContext(EditOrReadOnlyContext);
    const formContext = React.useContext(FormContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-server-tuple';
    const intlType = useIntl();

    // Initialize the default props
    const {
        name = ['serverHost', 'serverPort'],
        proField = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const buildHostNode = () => {
        const omitProps = !props?.hostProps ? {} : omit(props.hostProps, ['name', 'placeholder', 'pattern']);
        return (
            <MaskInput
                name={props?.hostProps?.name || props?.hostProps?.fieldProps?.name || ArrayUtils.getFirst(name)}
                placeholder={ObjectUtils.firstNotNil(props?.hostProps?.placeholder, intlLocales.get([locale, 'serverHost']), intlLocales.get(['en_US', 'serverHost']))}
                pattern={props?.hostProps?.pattern ?? /^[a-zA-Z0-9-_.:]+$/}
                proField={proField}
                {...omitProps}
            />
        );
    };

    const buildPortNode = () => {
        const omitFieldProps = !props?.portProps?.fieldProps ? {} : omit(props.portProps.fieldProps, ['name', 'placeholder', 'min', 'max', 'maxLength']);
        if (!proField) {
            return (
                <InputNumber
                    {...PropUtils.pickForwardProps(props?.portProps)}
                    name={props?.portProps?.name || props?.portProps?.fieldProps?.name || ArrayUtils.getLast(name)}
                    placeholder={ObjectUtils.firstNotNil(props?.portProps?.placeholder, intlLocales.get([locale, 'serverPort']), intlLocales.get(['en_US', 'serverPort']))}
                    min={props?.portProps?.fieldProps?.min ?? 1}
                    max={props?.portProps?.fieldProps?.max ?? 65535}
                    maxLength={props?.portProps?.fieldProps?.maxLength ?? 5}
                    {...omitFieldProps}
                />
            );
        }
        const omitProps = !props?.portProps ? {} : omit(props.portProps, ['name', 'label', 'placeholder', 'fieldProps']);
        return (
            <ProFormDigit
                name={props?.portProps?.name || props?.portProps?.fieldProps?.name || ArrayUtils.getLast(name)}
                label={props?.portProps?.label ?? (formContext?.vertical ? ' ' : '')}
                placeholder={ObjectUtils.firstNotNil(props?.portProps?.placeholder, intlLocales.get([locale, 'serverPort']), intlLocales.get(['en_US', 'serverPort']))}
                fieldProps={{
                    min: props?.portProps?.fieldProps?.min ?? 1,
                    max: props?.portProps?.fieldProps?.min ?? 65535,
                    maxLength: props?.portProps?.fieldProps?.maxLength ?? 5,
                    ...omitFieldProps,
                }}
                {...omitProps}
            />
        );
    };

    const entryImmutable = editContext.mode === 'read' || props?.hostProps?.fieldProps?.disabled || props?.hostProps?.fieldProps?.readOnly || props?.hostProps?.proFieldProps?.mode === 'read' || props?.hostProps?.proFieldProps?.readonly || props?.portProps?.fieldProps?.disabled || props?.portProps?.fieldProps?.readOnly || props?.portProps?.proFieldProps?.mode === 'read' || props?.portProps?.proFieldProps?.readonly;

    return (
        <div
            className={classNames(clazzPrefix, fieldStyle.hashId, ((proField && !entryImmutable) ? `${clazzPrefix}-pro-field` : undefined), (props?.widthBlock ? `${clazzPrefix}-width-block` : undefined), props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space.Compact>
                {buildHostNode()}
                {buildPortNode()}
            </Space.Compact>
        </div>
    );
};
