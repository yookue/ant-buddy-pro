/*
 * Copyright (c)  Unikue Ltd. All rights reserved.
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
import {omit} from '@rc-component/util';
import {ExactInput, type ExactInputProps} from '@/form/ExactInput';
import {MaskInput, type MaskInputProps} from '@/form/MaskInput';
import {DivideSelect, type DivideSelectProps} from '@/form/DivideSelect';
import {IconSelect, type IconSelectProps} from '@/form/IconSelect';
import {ServerTuple, type ServerTupleProps} from '@/form/ServerTuple';


export type OmitExactInputProps = Omit<ExactInputProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies'>;
export type OmitMaskInputProps = Omit<MaskInputProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies'>;
export type OmitDivideSelectProps = Omit<DivideSelectProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies' | 'debounceTime' | 'params' | 'request' | 'valueEnum'>;
export type OmitIconSelectProps = Omit<IconSelectProps, 'name' | 'label' | 'placeholder' | 'initialValue' | 'fieldProps' | 'proFieldProps' | 'tooltip' | 'dependencies'>;


// noinspection DuplicatedCode


/**
 * Renders for rendering schema
 *
 * @see "https://pro-components.antdigital.dev/components/schema"
 * @see "@ant-design/pro-utils/lib/typing.d.ts"
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class SchemaRender {
    /**
     * Returns the rendered `ExactInput` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `ExactInputProps` to inspect
     *
     * @returns the rendered `ExactInput` DOM for the given schema form column
     */
    public static renderExactInput = (schema: any, props?: OmitExactInputProps): React.ReactNode => {
        if (!schema || schema.ignoreFormItem || !schema.dataIndex) {
            return undefined;
        }
        const fieldName = Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex;
        const rawFieldProps = !schema.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue', 'onChange']);
        const extCheckProps = !props?.checkProps ? {} : omit(props.checkProps, ['name', 'value', 'onChange']);
        const extRestProps = !props ? {} : omit(props, ['proField']);
        return (
            <ExactInput
                name={fieldName}
                fieldProps={{
                    defaultValue: schema.initialValue ?? schema.fieldProps?.defaultValue,
                    onChange: (event: any) => {
                        schema.fieldProps?.onChange?.(event);
                    },
                    ...rawFieldProps,
                }}
                checkProps={extCheckProps}
                proField={props?.proField ?? false}
                proFieldProps={schema.proFieldProps}
                dependencies={schema.dependencies}
                {...extRestProps}
            />
        );
    }

    /**
     * Returns the rendered `MaskInput` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `MaskInputProps` to inspect
     *
     * @returns the rendered `MaskInput` DOM for the given schema form column
     */
    public static renderMaskInput = (schema: any, props?: OmitMaskInputProps): React.ReactNode => {
        if (!schema || schema.ignoreFormItem || !schema.dataIndex) {
            return undefined;
        }
        const fieldName = Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex;
        const rawFieldProps = !schema.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue', 'onChange']);
        const extRestProps = !props ? {} : omit(props, ['proField']);
        return (
            <MaskInput
                name={fieldName}
                fieldProps={{
                    defaultValue: schema.initialValue ?? schema.fieldProps?.defaultValue,
                    onChange: (event: any) => {
                        schema.fieldProps?.onChange?.(event);
                    },
                    ...rawFieldProps,
                }}
                proField={props?.proField ?? false}
                proFieldProps={schema.proFieldProps}
                dependencies={schema.dependencies}
                {...extRestProps}
            />
        );
    }

    /**
     * Returns the rendered `DivideSelect` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `DivideSelectProps` to inspect
     *
     * @returns the rendered `DivideSelect` DOM for the given schema form column
     */
    public static renderDivideSelect = (schema: any, props?: OmitDivideSelectProps): React.ReactNode => {
        if (!schema || schema.ignoreFormItem || !schema.dataIndex) {
            return undefined;
        }
        const fieldName = Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex;
        const rawFieldProps = !schema.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue', 'onChange']);
        const extRestProps = !props ? {} : omit(props, ['proField']);
        return (
            <DivideSelect
                name={fieldName}
                fieldProps={{
                    defaultValue: schema.initialValue ?? schema.fieldProps?.defaultValue,
                    onChange: (event: any) => {
                        schema.fieldProps?.onChange?.(event);
                    },
                    ...rawFieldProps,
                }}
                proField={props?.proField ?? false}
                proFieldProps={schema.proFieldProps}
                dependencies={schema.dependencies}
                valueEnum={schema.valueEnum}
                debounceTime={schema.debounceTime}
                params={schema.params}
                request={schema.request}
                {...extRestProps}
            />
        );
    }

    /**
     * Returns the rendered `IconSelect` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `IconSelectProps` to inspect
     *
     * @returns the rendered `IconSelect` DOM for the given schema form column
     */
    public static renderIconSelect = (schema: any, props?: OmitIconSelectProps): React.ReactNode => {
        if (!schema || schema.ignoreFormItem || !schema.dataIndex) {
            return undefined;
        }
        const fieldName = Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex;
        const rawFieldProps = !schema.fieldProps ? {} : omit(schema.fieldProps , ['defaultValue', 'onChange']);
        const extRestProps = !props ? {} : omit(props, ['proField']);
        return (
            <IconSelect
                name={fieldName}
                fieldProps={{
                    defaultValue: schema.initialValue ?? schema.fieldProps?.defaultValue,
                    onChange: (event: any) => {
                        schema.fieldProps?.onChange?.(event);
                    },
                    ...rawFieldProps,
                }}
                proField={props?.proField ?? false}
                proFieldProps={schema.proFieldProps}
                dependencies={schema.dependencies}
                {...extRestProps}
            />
        );
    }

    /**
     * Returns the rendered `ServerTuple` DOM for the given schema form column
     *
     * @param schema the column item of `ProSchema` to render
     * @param props the `ServerTupleProps` to inspect
     * @param defaultNames whether to use the default names of `serverHost` and `serverPort`
     *
     * @returns the rendered `ServerTuple` DOM for the given schema form column
     */
    public static renderServerTuple = (schema: any, props?: ServerTupleProps, defaultNames?: boolean): React.ReactNode => {
        if (!schema || schema.ignoreFormItem) {
            return undefined;
        }
        const fieldName = Array.isArray(schema.dataIndex) ? schema.dataIndex.join('.') : schema.dataIndex;
        const extRestProps = !props ? {} : omit(props, ['proField']);
        if (defaultNames !== true) {
            return (
                <ServerTuple
                    name={fieldName}
                    proField={props?.proField ?? false}
                    {...extRestProps}
                />
            );
        }
        const omitRestProps = omit(extRestProps, ['hostProps', 'portProps']);
        return (
            <ServerTuple
                name={fieldName}
                hostProps={{
                    name: extRestProps.hostProps?.name ?? 'serverHost',
                    ...(!extRestProps.hostProps ? {} : omit(extRestProps.hostProps, ['name'])),
                }}
                portProps={{
                    name: extRestProps.portProps?.name ?? 'serverPort',
                    ...(!extRestProps.portProps ? {} : omit(extRestProps.portProps, ['name'])),
                }}
                proField={props?.proField ?? false}
                {...omitRestProps}
            />
        );
    }
}
