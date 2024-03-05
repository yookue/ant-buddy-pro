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
import {DivideSelect, type DivideSelectProps} from '@/form/DivideSelect';
import {ExactInput, type ExactInputProps} from '@/form/ExactInput';
import {LocaleInput, type LocaleInputProps} from '@/form/LocaleInput';


export type OmitDivideSelectProps = Omit<DivideSelectProps, 'name' | 'placeholder' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies' | 'debounceTime' | 'params' | 'request'>;
export type OmitExactInputProps = Omit<ExactInputProps, 'name' | 'placeholder' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies'>;
export type OmitLocaleInputProps = Omit<LocaleInputProps, 'name' | 'placeholder' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies'>;


// noinspection DuplicatedCode


/**
 * Utilities for rendering schema
 *
 * @see "https://pro-components.antdigital.dev/components/schema"
 * @see "@ant-design/pro-utils/es/typing.d.ts"
 */
export abstract class SchemaRenders {
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
        const fieldName = !schema?.dataIndex ? undefined : (Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex);
        const fieldValue = schema?.fieldProps?.value ?? schema?.initialValue;
        const valueProps = !fieldValue ? {} : {value: fieldValue};
        const fieldProps = !schema?.fieldProps ? {...valueProps} : {...valueProps, ...omit(schema.fieldProps, ['value'])};
        return (
            <DivideSelect
                name={fieldName}
                fieldProps={{...fieldProps}}
                proFieldProps={schema?.proFieldProps}
                tooltip={schema?.tooltip}
                dependencies={schema?.dependencies}
                debounceTime={schema?.debounceTime}
                params={schema?.params}
                request={schema?.request}
                {...props}
            />
        );
    }

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
        const fieldName = !schema?.dataIndex ? undefined : (Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex);
        const fieldValue = schema?.fieldProps?.value ?? schema?.initialValue;
        const valueProps = !fieldValue ? {} : {value: fieldValue};
        const fieldProps = !schema?.fieldProps ? {...valueProps} : {...valueProps, ...omit(schema.fieldProps, ['value'])};
        return (
            <ExactInput
                name={fieldName}
                fieldProps={{...fieldProps}}
                proFieldProps={schema?.proFieldProps}
                tooltip={schema?.tooltip}
                dependencies={schema?.dependencies}
                {...props}
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
        const fieldName = !schema?.dataIndex ? undefined : (Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex);
        const fieldValue = schema?.fieldProps?.value ?? schema?.initialValue;
        const valueProps = !fieldValue ? {} : {value: fieldValue};
        const fieldProps = !schema?.fieldProps ? {...valueProps} : {...valueProps, ...omit(schema.fieldProps, ['value'])};
        return (
            <LocaleInput
                name={fieldName}
                fieldProps={{...fieldProps}}
                proFieldProps={schema?.proFieldProps}
                tooltip={schema?.tooltip}
                dependencies={schema?.dependencies}
                {...props}
            />
        );
    }
}
