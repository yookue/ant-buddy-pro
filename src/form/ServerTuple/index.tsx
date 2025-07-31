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
import {ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {MaskInput, type MaskInputProps} from '@/form/MaskInput';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type HostInputProps = Omit<MaskInputProps, 'proField' | 'label'> & {
    /**
     * @description The prefix of name for the host
     * @description.zh-CN 主机名的名称前缀
     * @description.zh-TW 主機名的名稱前綴
     */
    namePrefix?: string;

    /**
     * @description The suffix of name for the host
     * @description.zh-CN 主机名的名称后缀
     * @description.zh-TW 主機名的名稱后綴
     * @default 'Host'
     */
    nameSuffix?: string;
}


export type PortInputProps = Omit<ProFormDigitProps, 'proField'> & {
    /**
     * @description The prefix of name for the port
     * @description.zh-CN 端口号的名称前缀
     * @description.zh-TW 端口號的名稱前綴
     */
    namePrefix?: string;

    /**
     * @description The suffix of name for the port
     * @description.zh-CN 端口号的名称后缀
     * @description.zh-TW 端口號的名稱后綴
     * @default 'Port'
     */
    nameSuffix?: string;
}


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
     * @description The props of the host address
     * @description.zh-CN 主机地址的属性
     * @description.zh-TW 主機地址的屬性
     */
    hostProps?: HostInputProps;

    /**
     * @description The props of the port number
     * @description.zh-CN 端口的属性
     * @description.zh-TW 端口的屬性
     */
    portProps?: PortInputProps;

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
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name'> & Pick<React.OptionHTMLAttributes<HTMLOptionElement>, 'label'>;


/**
 * Component for displaying a text input box with a number input box, for server host and port
 *
 * @author David Hsing
 */
export const ServerTuple: React.FC<ServerTupleProps> = (props?: ServerTupleProps) => {
    const formContext = React.useContext(FormContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-server-tuple';
    const intlType = useIntl();

    // Initialize the default props
    const {
        hostProps = {
            nameSuffix: 'Host',
        },
        portProps = {
            nameSuffix: 'Port',
        },
        proField = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const buildHostNode = () => {
        const omitFieldProps = !hostProps.fieldProps ? {} : omit(hostProps.fieldProps, ['name', 'id']);
        const omitProps = omit(hostProps, ['name', 'placeholder', 'pattern']);
        return (
            <MaskInput
                name={hostProps.name || hostProps.fieldProps?.name || ((hostProps.namePrefix ?? '') + (props?.name ?? '') + (hostProps.nameSuffix ?? 'Host'))}
                label={props?.label}
                placeholder={ObjectUtils.firstNotNil(hostProps.placeholder, intlLocales.get([locale, 'serverHost']), intlLocales.get(['en_US', 'serverHost']))}
                fieldProps={{
                    ...omitFieldProps,
                }}
                pattern={hostProps.pattern ?? /^[a-zA-Z0-9-_.:]+$/}
                proField={proField}
                {...omitProps}
            />
        );
    };

    const buildPortNode = () => {
        const numberName = portProps.name || portProps.fieldProps?.name || ((portProps.namePrefix ?? '') + (props?.name ?? '') + (portProps.nameSuffix ?? 'Port'));
        const omitFieldProps = !portProps.fieldProps ? {} : omit(portProps.fieldProps, ['name', 'id', 'placeholder', 'min', 'max', 'maxLength']);
        if (!proField) {
            const restProps = omit(omitFieldProps, ['onChange']);
            return (
                <InputNumber
                    id={(!formContext?.name ? '' : `${formContext.name}_`) + (numberName ?? '')}
                    placeholder={ObjectUtils.firstNotNil(portProps.placeholder, intlLocales.get([locale, 'serverPort']), intlLocales.get(['en_US', 'serverPort']))}
                    min={portProps.fieldProps?.min ?? 1}
                    max={portProps.fieldProps?.max ?? 65535}
                    maxLength={portProps.fieldProps?.maxLength ?? 5}
                    onChange={value => {
                        if (numberName) {
                            formContext?.form?.setFieldValue(numberName, value);
                        }
                        props?.portProps?.fieldProps?.onChange?.( value);
                    }}
                    {...restProps}
                />
            );
        }
        const omitProps = !props?.portProps ? {} : omit(props.portProps, ['name', 'label', 'placeholder', 'fieldProps']);
        return (
            <ProFormDigit
                name={numberName}
                label={portProps.label ?? (formContext?.vertical ? ' ' : '')}
                placeholder={ObjectUtils.firstNotNil(portProps.placeholder, intlLocales.get([locale, 'serverPort']), intlLocales.get(['en_US', 'serverPort']))}
                fieldProps={{
                    min: portProps.fieldProps?.min ?? 1,
                    max: portProps.fieldProps?.min ?? 65535,
                    maxLength: portProps.fieldProps?.maxLength ?? 5,
                    ...omitFieldProps,
                }}
                {...omitProps}
            />
        );
    };

    const entryImmutable = editContext.mode === 'read' || hostProps.fieldProps?.disabled || hostProps.fieldProps?.readOnly || hostProps.proFieldProps?.mode === 'read' || hostProps.proFieldProps?.readonly || portProps.fieldProps?.disabled || portProps.fieldProps?.readOnly || portProps.proFieldProps?.mode === 'read' || portProps.proFieldProps?.readonly;

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
