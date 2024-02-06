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


import omit from 'rc-util/es/omit';
import {DesignConst} from '@/constant/DesignConst';


export abstract class PropsUtils {
    /**
     * Returns the omitted record of Ant ProComponents from the given props
     *
     * @param props the properties object to inspect
     *
     * @returns the omitted record of Ant ProComponents from the given props
     */
    public static omitProProps = (props?: object): Record<string, any> => {
        // @ts-ignore
        return !props ? {} : omit(props, [...DesignConst.ProFormFieldItemProps, ...DesignConst.ProFieldSelectProps]);
    }

    /**
     * Returns the forwarded record of Ant ProComponents from the given props
     *
     * @param props the properties object to inspect
     *
     * @returns the forwarded record of Ant ProComponents from the given props
     */
    public static pickForwardProps = (props?: object): Record<string, any> => {
        if (!props) {
            return {};
        }
        const result = {};
        // @ts-ignore
        Object.keys(props).filter(key => DesignConst.ForwardFieldProps.includes(key)).forEach(key => result[key] = props[key]);
        return result;
    }
}
