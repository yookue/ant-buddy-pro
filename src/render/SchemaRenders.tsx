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
import omit from 'rc-util/es/omit';
import {ExactInput, type ExactInputProps} from '@/form/ExactInput';
import {LocaleInput, type LocaleInputProps} from '@/form/LocaleInput';
import {DivideSelect, type DivideSelectProps} from '@/form/DivideSelect';
import {IconSelect, type IconSelectProps} from '@/form/IconSelect';


export type OmitExactInputProps = Omit<ExactInputProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies'>;
export type OmitLocaleInputProps = Omit<LocaleInputProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies'>;
export type OmitDivideSelectProps = Omit<DivideSelectProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies' | 'debounceTime' | 'params' | 'request' | 'valueEnum'>;
export type OmitIconSelectProps = Omit<IconSelectProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies' | 'debounceTime' | 'params' | 'request' | 'valueEnum'>;


/**
 * Renders for rendering schema
 *
 * @see "https://pro-components.antdigital.dev/components/schema"
 * @see "@ant-design/pro-utils/es/typing.d.ts"
 *
 * @author David Hsing
 */
export abstract class SchemaRenders {
    /**
     * Returns the rendered `ExactInput` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `ExactInputProps` to inspect
     *
     * @return the rendered `ExactInput` DOM for the given schema form column
     */
    public static renderExactInput = (schema: any, props?: OmitExactInputProps): React.ReactNode => {
        if (!schema || schema?.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema?.dataIndex) ? schema.dataIndex.join('.') : schema?.dataIndex;
        const restProps = {
            proField: props?.proField ?? false,
            ...(!props ? {} : omit(props, ['proField'])),
        };
        return (
            <ExactInput
                name={fieldName}
                fieldProps={{
                    defaultValue: schema?.initialValue ?? schema?.fieldProps?.defaultValue,
                    ...(!schema?.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue'])),
                }}
                proFieldProps={schema?.proFieldProps}
                dependencies={schema?.dependencies}
                {...restProps}
            />
        );
    }

    /**
     * Returns the rendered `LocaleInput` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `LocaleInputProps` to inspect
     *
     * @return the rendered `LocaleInput` DOM for the given schema form column
     */
    public static renderLocaleInput = (schema: any, props?: OmitLocaleInputProps): React.ReactNode => {
        if (!schema || schema?.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema?.dataIndex) ? schema.dataIndex.join('.') : schema?.dataIndex;
        const restProps = {
            proField: props?.proField ?? false,
            ...(!props ? {} : omit(props, ['proField'])),
        };
        return (
            <LocaleInput
                name={fieldName}
                fieldProps={{
                    defaultValue: schema?.initialValue ?? schema?.fieldProps?.defaultValue,
                    ...(!schema?.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue'])),
                }}
                proFieldProps={schema?.proFieldProps}
                dependencies={schema?.dependencies}
                {...restProps}
            />
        );
    }

    /**
     * Returns the rendered `DivideSelect` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `DivideSelectProps` to inspect
     *
     * @return the rendered `DivideSelect` DOM for the given schema form column
     */
    public static renderDivideSelect = (schema: any, props?: OmitDivideSelectProps): React.ReactNode => {
        if (!schema || schema?.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema?.dataIndex) ? schema.dataIndex.join('.') : schema?.dataIndex;
        const restProps = {
            proField: props?.proField ?? false,
            ...(!props ? {} : omit(props, ['proField'])),
        };
        return (
            <DivideSelect
                name={fieldName}
                fieldProps={{
                    defaultValue: schema?.initialValue ?? schema?.fieldProps?.defaultValue,
                    ...(!schema?.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue'])),
                }}
                proFieldProps={schema?.proFieldProps}
                dependencies={schema?.dependencies}
                debounceTime={schema?.debounceTime}
                params={schema?.params}
                request={schema?.request}
                valueEnum={schema?.valueEnum}
                {...restProps}
            />
        );
    }

    /**
     * Returns the rendered `IconSelect` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `IconSelectProps` to inspect
     *
     * @return the rendered `IconSelect` DOM for the given schema form column
     */
    public static renderIconSelect = (schema: any, props?: OmitIconSelectProps): React.ReactNode => {
        if (!schema || schema?.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema?.dataIndex) ? schema.dataIndex.join('.') : schema?.dataIndex;
        const restProps = {
            proField: props?.proField ?? false,
            ...(!props ? {} : omit(props, ['proField'])),
        };
        return (
            <IconSelect
                name={fieldName}
                fieldProps={{
                    defaultValue: schema?.initialValue ?? schema?.fieldProps?.defaultValue,
                    ...(!schema?.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue'])),
                }}
                proFieldProps={schema?.proFieldProps}
                dependencies={schema?.dependencies}
                debounceTime={schema?.debounceTime}
                params={schema?.params}
                request={schema?.request}
                valueEnum={schema?.valueEnum}
                {...restProps}
            />
        );
    }
}
