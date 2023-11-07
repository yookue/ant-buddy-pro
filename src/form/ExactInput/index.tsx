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
import {ConfigProvider, Checkbox, type InputProps, type CheckboxProps} from 'antd';
import {AimOutlined} from '@ant-design/icons';
import {ProFormText, type ProFormFieldProps} from '@ant-design/pro-form';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';


type OmitInputProps= Omit<InputProps, 'addonBefore' | 'addonAfter'>;

export type AddonCheckProps = CheckboxProps & {
    /**
     * @description The prefix of name for the checkbox
     * @description.zh-CN 复选框的名称前缀
     * @description.zh-TW 複選框的名稱前綴
     */
    namePrefix?: string;

    /**
     * @description The suffix of name for the checkbox
     * @description.zh-CN 复选框的名称后缀
     * @description.zh-TW 複選框的名稱后綴
     * @default 'Exact'
     */
    nameSuffix?: string;

    /**
     * @description The prefix of id for the checkbox
     * @description.zh-CN 复选框的 id 前缀
     * @description.zh-TW 複選框的 id 前綴
     */
    idPrefix?: string;

    /**
     * @description The suffix of id for the checkbox
     * @description.zh-CN 复选框的名称后缀
     * @description.zh-TW 複選框的名稱后綴
     */
    idSuffix?: string;
};

export type ExactInputProps = React.InputHTMLAttributes<HTMLInputElement> & ProFormFieldProps<OmitInputProps> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-exact-input'
     */
    clazzPrefix?: string;

    /**
     * @description The DOM of addon
     * @description.zh-CN 文本框的附属节点内容
     * @description.zh-TW 文本框的標簽節點內容
     * @default <AimOutlined/>
     */
    addonDom?: React.ReactNode;

    /**
     * @description The position of addon
     * @description.zh-CN 文本框的附属节点位置
     * @description.zh-TW 文本框的附属節點位置
     * @default 'after'
     */
    addonPos?: 'before' | 'after' | false;

    /**
     * @description The checkbox properties of addon
     * @description.zh-CN 复选框的属性
     * @description.zh-TW 複選框的屬性
     */
    checkProps?: AddonCheckProps;
};


export const ExactInput: React.ForwardRefExoticComponent<ExactInputProps & React.RefAttributes<any>> = React.forwardRef((props?: ExactInputProps, ref?: any) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-exact-input');

    const restProps = props ? omit(props, ['clazzPrefix', 'addonDom', 'addonPos', 'checkProps', 'fieldProps']) : {};
    const omitFieldProps = props?.fieldProps ? omit(props?.fieldProps, ['addonBefore', 'addonAfter']) : {};
    const omitCheckProps = props?.checkProps ? omit(props?.checkProps, ['className', 'namePrefix', 'nameSuffix', 'idPrefix', 'idSuffix', 'name', 'id']) : {};

    const generateCheckName = function() {
        if (props?.checkProps?.name) {
            return props?.checkProps?.name;
        }
        if (props?.name) {
            return (props?.checkProps?.namePrefix || '') + props?.name + (props?.checkProps?.nameSuffix || '');
        }
        return undefined;
    };

    const generateCheckId = function() {
        if (props?.checkProps?.id) {
            return props?.checkProps?.id;
        }
        if (props?.id) {
            return (props?.checkProps?.idPrefix || '') + props?.id + (props?.checkProps?.idSuffix || '');
        }
        return undefined;
    };
    const checkboxName = generateCheckName();
    const checkboxId = generateCheckId();

    const buildActionDom = function() {
        if (!props?.addonPos) {
            return undefined;
        }
        return (
            <Checkbox
                name={checkboxName}
                id={checkboxId || checkboxName}
                {...omitCheckProps}
            >
                {props?.addonDom}
            </Checkbox>
        );
    };
    const actionDom = buildActionDom();

    return (
        <ProFormText
            ref={ref}
            {...restProps}
            fieldProps={{
                className: classNames(clazzPrefix, props?.className),
                ...omitFieldProps,
                addonBefore: (props?.addonPos === 'before') ? actionDom : undefined,
                addonAfter: (props?.addonPos === 'after') ? actionDom : undefined,
            }}
        />
    );
});


ExactInput.defaultProps = {
    addonDom: <AimOutlined/>,
    addonPos: 'after',
    checkProps: {
        nameSuffix: 'Exact',
    }
};
