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
import {type LabeledValue} from 'antd/es/select';
import {type ProFormFieldItemProps, type ProFormFieldRemoteProps} from '@ant-design/pro-form/es/interface';
import {type RequestOptionsType, useDebounceFn} from '@ant-design/pro-utils';
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
     * @param callback the function to execute
     * @param deps the dependencies for effect
     */
    public static fetchRemoteRequest = (props?: ProFormFieldItemProps<any> & ProFormFieldRemoteProps, callback?: ((values?: RequestOptionsType[]) => void), deps?: React.DependencyList): void => {
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
     * Returns the built array of Ant ProComponents LabeledValue, with locale data
     *
     * @param props the properties object to inspect
     *
     * @returns Returns the built array of Ant ProComponents LabeledValue, with locale data
     */
    public static optionsToLabeledValues = (props?: ProFormFieldItemProps<any> & ProFormFieldRemoteProps): LabeledValue[] | undefined => {
        if (!props) {
            return undefined;
        }
        if (ObjectUtils.isNotEmpty(props?.fieldProps?.options)) {
            return props.fieldProps.options;
        }
        return ObjectUtils.isEmpty(props?.valueEnum) ? undefined : this.propsToLabeledValues(props.valueEnum);
    }

    /**
     * Returns the converted array of Ant ProComponents LabeledValue
     *
     * @param props the properties object to inspect
     *
     * @returns Returns the converted array of Ant ProComponents LabeledValue
     */
    public static propsToLabeledValues = (props?: object): LabeledValue[] | undefined => {
        if (!props) {
            return undefined;
        }
        const result: LabeledValue[] = [];
        Object.keys(props).filter(key => Object.prototype.hasOwnProperty.call(props, key)).forEach(key => {
            // @ts-ignore
            result.push({label: props[key], value: key});
        });
        return result;
    }
}
