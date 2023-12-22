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
import {DivideSelect} from '@/form/DivideSelect';
import {ExactInput} from '@/form/ExactInput';
import {LocaleInput} from '@/form/LocaleInput';


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
     * @param config the column item config
     * @param form the `FormInstance` to inspect
     *
     * @return the rendered `DivideSelect` DOM for the given schema form column
     */
    public static renderDivideSelect = (schema: any, config?: any, form?: any): React.ReactNode => {
        if (!schema || schema?.hideInForm || schema?.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema?.dataIndex) ? schema?.dataIndex[0] : schema?.dataIndex;
        const fieldValue = form ? (form?.getFieldValue(fieldName) || schema?.initialValue) : schema?.initialValue;
        return (
            <DivideSelect
                name={fieldName}
                value={fieldValue}
                {...schema?.fieldProps}
                proFieldProps={schema?.proFieldProps}
                tooltip={schema?.tooltip}
                dependencies={schema?.dependencies}
                debounceTime={schema?.debounceTime}
                params={schema?.params}
                request={schema?.request}
            />
        );
    }

    /**
     * Returns the rendered `ExactInput` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param config the column item config
     * @param form the `FormInstance` to inspect
     *
     * @return the rendered `ExactInput` DOM for the given schema form column
     */
    public static renderExactInput = (schema: any, config?: any, form?: any): React.ReactNode => {
        if (!schema || schema?.hideInForm || schema?.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema?.dataIndex) ? schema?.dataIndex[0] : schema?.dataIndex;
        const fieldValue = form ? (form?.getFieldValue(fieldName) || schema?.initialValue) : schema?.initialValue;
        return (
            <ExactInput
                name={fieldName}
                value={fieldValue}
                {...schema?.fieldProps}
                proFieldProps={schema?.proFieldProps}
                tooltip={schema?.tooltip}
                dependencies={schema?.dependencies}
                debounceTime={schema?.debounceTime}
                params={schema?.params}
                request={schema?.request}
            />
        );
    }

    /**
     * Returns the rendered `LocaleInput` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param config the column item config
     * @param form the `FormInstance` to inspect
     *
     * @return the rendered `LocaleInput` DOM for the given schema form column
     */
    public static renderLocaleInput = (schema: any, config?: any, form?: any): React.ReactNode => {
        if (!schema || schema?.hideInForm || schema?.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema?.dataIndex) ? schema?.dataIndex[0] : schema?.dataIndex;
        const fieldValue = form ? (form?.getFieldValue(fieldName) || schema?.initialValue) : schema?.initialValue;
        return (
            <LocaleInput
                name={fieldName}
                value={fieldValue}
                {...schema?.fieldProps}
                proFieldProps={schema?.proFieldProps}
                tooltip={schema?.tooltip}
                dependencies={schema?.dependencies}
                debounceTime={schema?.debounceTime}
                params={schema?.params}
                request={schema?.request}
            />
        );
    }
}
