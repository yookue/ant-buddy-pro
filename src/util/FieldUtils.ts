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
import {useDebounceFn} from '@ant-design/pro-utils';


export abstract class FieldUtils {
    /**
     * Returns the built array of Ant ProComponents LabeledValue, with locale data
     *
     * @param props the properties object to inspect
     *
     * @returns Returns the built array of Ant ProComponents LabeledValue, with locale data
     */
    public static buildFieldOptionsLocally = (props?: ProFormFieldItemProps<any> & ProFormFieldRemoteProps): LabeledValue[] | undefined => {
        return !props ? undefined : (props?.fieldProps?.options ?? (!props?.valueEnum ? undefined : this.toLabeledValues(props.valueEnum)));
    }

    /**
     * Returns the built array of Ant ProComponents LabeledValue, with remote data
     *
     * @param props the properties object to inspect
     * @param callback the function to execute
     *
     * @returns Returns the built array of Ant ProComponents LabeledValue, with remote data
     */
    public static buildFieldOptionsRemotely = (props?: ProFormFieldItemProps<any> & ProFormFieldRemoteProps, callback?: ((values?: any) => void)): void => {
        if (!props || !props?.request || !callback) {
            return;
        }
        const {run: requestData} = useDebounceFn(props.request, props?.debounceTime ?? 0);
        React.useEffect(() => {
            requestData(props?.params).then(resolve => {
                callback(resolve);
            });
        }, [props.request]);
    }

    /**
     * Returns the converted array of Ant ProComponents LabeledValue
     *
     * @param props the properties object to inspect
     *
     * @returns Returns the converted array of Ant ProComponents LabeledValue
     */
    public static toLabeledValues = (props?: object): LabeledValue[] | undefined => {
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
