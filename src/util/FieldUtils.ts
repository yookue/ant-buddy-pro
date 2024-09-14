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
import {type DefaultOptionType} from 'antd/es/select';
import {type SegmentedLabeledOption} from 'antd/es/segmented';
import {type ProSchemaValueEnumObj, type ProSchemaValueEnumMap, useDebounceFn} from '@ant-design/pro-utils';
import {type ProSchemaValueEnumType} from '@ant-design/pro-utils/es/typing';
import {ObjectUtils} from '@yookue/ts-lang-utils';


/**
 * Utilities for Ant Design fields
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class FieldUtils {
    /**
     * Fetches the request data with the given field, with debounce capable
     *
     * @param props the properties object to inspect
     * @param callback the function to execute, the `values` default type is `RequestOptionsType`
     * @param deps the dependencies for effect
     */
    public static fetchRemoteRequest = (props?: {request?: any, params?: any, debounceTime?: number}, callback?: ((values?: any) => void), deps?: React.DependencyList): void => {
        if (!props || !props?.request || !callback) {
            return;
        }
        const {run: requestFn} = useDebounceFn(props.request, props?.debounceTime ?? 0);
        React.useEffect(() => {
            requestFn(props?.params).then(resolve => {
                callback(resolve);
            });
        }, deps);
    }

    /**
     * Returns the converted array of Ant DefaultOptionType
     *
     * @param source the properties object to inspect
     *
     * @returns Returns the converted array of Ant DefaultOptionType
     */
    public static valueEnumToSelectOptions = (source?: ProSchemaValueEnumMap | ProSchemaValueEnumObj | ((params: any) => ProSchemaValueEnumMap | ProSchemaValueEnumObj)): DefaultOptionType[] | undefined => {
        if (!source) {
            return undefined;
        }
        const extractLabel = (value: ProSchemaValueEnumType | React.ReactNode) => {
            return ObjectUtils.isPlain(value) ? (value as ProSchemaValueEnumType).text : value;
        };
        const convertOption = (value: ProSchemaValueEnumMap | ProSchemaValueEnumObj) => {
            if (value instanceof Map) {
                const result: DefaultOptionType[] = [];
                (value as ProSchemaValueEnumMap).forEach((v, k) => {
                    result.push({
                        label: extractLabel(v),
                        value: k,
                    } as DefaultOptionType);
                });
                return result;
            }
            return ObjectUtils.mapEachProp(value, (k: string) => {
                return {
                    label: extractLabel(value[k]),
                    value: k,
                } as DefaultOptionType;
            });
        };
        return (typeof source === 'function') ? this.valueEnumToSelectOptions(source({})) : convertOption(source);
    }

    /**
     * Returns the converted array of Ant SegmentedLabeledOption
     *
     * @param source the properties object to inspect
     *
     * @returns Returns the converted array of Ant SegmentedLabeledOption
     */
    public static valueEnumToSegmentOptions = (source?: ProSchemaValueEnumMap | ProSchemaValueEnumObj | ((params: any) => ProSchemaValueEnumMap | ProSchemaValueEnumObj)): SegmentedLabeledOption[] | undefined => {
        if (!source) {
            return undefined;
        }
        const extractLabel = (value: React.ReactNode | ProSchemaValueEnumType) => {
            return ObjectUtils.isPlain(value) ? (value as ProSchemaValueEnumType).text : value;
        };
        const extractDisabled = (value: React.ReactNode | ProSchemaValueEnumType) => {
            return ObjectUtils.isPlain(value) ? (value as ProSchemaValueEnumType).disabled : undefined;
        };
        const convertOption = (value: ProSchemaValueEnumMap | ProSchemaValueEnumObj) => {
            if (value instanceof Map) {
                const result: SegmentedLabeledOption[] = [];
                (value as ProSchemaValueEnumMap).forEach((v, k) => {
                    result.push({
                        label: extractLabel(v),
                        value: k,
                        disabled: extractDisabled(v),
                    } as SegmentedLabeledOption);
                });
                return result;
            }
            return ObjectUtils.mapEachProp(value, (k: string) => {
                return {
                    label: extractLabel(value[k]),
                    value: k,
                    disabled: extractDisabled(value[k]),
                } as SegmentedLabeledOption;
            });
        };
        return (typeof source === 'function') ? this.valueEnumToSegmentOptions(source({})) : convertOption(source);
    }
}
