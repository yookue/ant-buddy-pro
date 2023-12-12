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
import {ConfigProvider, Select} from 'antd';
import {ProFormSelect} from '@ant-design/pro-form';
import {type ProFormSelectProps} from '@ant-design/pro-form/es/components/Select';
import {useDebounceFn} from '@ant-design/pro-utils';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {DesignConst} from '@/constant/DesignConst';
import './index.less';


export type DivideSelectProps = ProFormSelectProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-divide-select'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the select option div
     * @description.zh-CN 下拉选项 div 的 CSS 类名
     * @description.zh-TW 下拉選項 div 的 CSS 類名
     */
    optionClazz?: string;

    /**
     * @description The CSS style of the option item div
     * @description.zh-CN 下拉选项 div 的 CSS 样式
     * @description.zh-TW 下拉選項 div 的 CSS 樣式
     */
    optionStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the option item before
     * @description.zh-CN 下拉选项左侧 span 的 CSS 类名
     * @description.zh-TW 下拉選項左側 span 的 CSS 類名
     */
    optionBeforeClazz?: string;

    /**
     * @description The CSS style of the option item before
     * @description.zh-CN 下拉选项左侧 span 的 CSS 样式
     * @description.zh-TW 下拉選項左側 span 的 CSS 樣式
     */
    optionBeforeStyle?: React.CSSProperties;

    /**
     * @description The content of the option item before
     * @description.zh-CN 下拉选项左侧 span 的内容
     * @description.zh-TW 下拉選項左側 span 的内容
     * @default 'value'
     */
    optionBeforeContent?: 'label' | 'value' | false;

    /**
     * @description The CSS class name of the option item after
     * @description.zh-CN 下拉选项右侧 span 的 CSS 类名
     * @description.zh-TW 下拉選項右側 span 的 CSS 類名
     */
    optionAfterClazz?: string;

    /**
     * @description The CSS style of the option item after
     * @description.zh-CN 下拉选项右侧 span 的 CSS 样式
     * @description.zh-TW 下拉選項右側 span 的 CSS 樣式
     */
    optionAfterStyle?: React.CSSProperties;

    /**
     * @description The content of the option item after
     * @description.zh-CN 下拉选项右侧 span 的内容
     * @description.zh-TW 下拉選項右側 span 的内容
     * @default 'label'
     */
    optionAfterContent?: 'label' | 'value' | false;

    /**
     * @description Whether to use the original label when `optionLabelProp` is 'label'
     * @description.zh-CN 当 `optionLabelProp` 为 'label' 时，是否使用原始的标签值
     * @description.zh-TW 當 `optionLabelProp` 為 'label' 時，是否使用原始的標簽值
     * @default true
     */
    selectOriginLabel?: boolean;

    /**
     * @description Whether to use ProFormField instead of Input
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description Whether to use the preset style for the component
     * @description.zh-CN 组件是否使用预设样式
     * @description.zh-TW 組件是否使用預設樣式
     * @default false
     */
    usePresetStyle?: 'before-prior' | 'after-prior' | 'fifty-fifty' | false;
};


export const DivideSelect: React.FC<DivideSelectProps> = (props?: DivideSelectProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-divide-select');
    const [optionItems, setOptionItems] = React.useState<any[]>();

    const emptyRequest = async () => [];
    const {run: fetchRequestData} = useDebounceFn(props?.request || emptyRequest, props?.debounceTime || 0);
    React.useEffect(() => {
        if (props?.fieldProps?.options) {
            setOptionItems(props?.fieldProps?.options);
        } else {
            if (props?.request) {
                fetchRequestData(props?.params).then(resolve => {
                    setOptionItems(resolve);
                });
            }
        }
    }, []);

    const rebuildOption = (item: any, key?: string) => {
        return {
            value: item?.value,
            label: (
                <div key={key} className={classNames(`${clazzPrefix}-option`, props?.optionClazz, (props?.usePresetStyle ? `${clazzPrefix}-${props?.usePresetStyle}` : undefined))} style={props?.optionStyle}>
                    <If condition={props?.optionBeforeContent} validation={false}>
                        <span key={`${key}-before`} className={classNames(`${clazzPrefix}-option-before`, props?.optionBeforeClazz)} style={props?.optionBeforeStyle}>
                            {(props?.optionBeforeContent === 'value') ? item?.value : item?.label}
                        </span>
                    </If>
                    <If condition={props?.optionAfterContent} validation={false}>
                        <span key={`${key}-after`} className={classNames(`${clazzPrefix}-option-after`, props?.optionAfterClazz)} style={props?.optionAfterStyle}>
                            {(props?.optionAfterContent === 'value') ? item?.value : item?.label}
                        </span>
                    </If>
                </div>
            ),
            labelOrigin: item?.label,
        };
    }

    const rebuildOptions = () => {
        if (!optionItems) {
            return [];
        }
        if (!props?.usePresetStyle) {
            return optionItems;
        }
        return optionItems.map((item: any, index: number) => {
            if (item?.options && Array.isArray(item?.options)) {
                return {
                    label: item?.label,
                    labelOrigin: item?.label,
                    options: item?.options?.map((subItem: any, subIndex: number) => rebuildOption(subItem, `group-${index}-option-${subIndex}`)),
                };
            }
            return rebuildOption(item, `option-${index}`);
        });
    };

    const omitFieldProps = props?.fieldProps ? omit(props?.fieldProps, ['className', 'options', 'optionLabelProp']) : {};

    if (props?.proField) {
        const restProps = props ? omit(props, ['clazzPrefix', 'className', 'optionClazz', 'optionStyle', 'optionBeforeClazz', 'optionBeforeStyle', 'optionBeforeContent', 'optionAfterClazz', 'optionAfterStyle', 'optionAfterContent', 'fieldProps', 'selectOriginLabel', 'proField', 'usePresetStyle', 'mode', 'request', 'params', 'debounceTime']) : {};
        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, props?.className),
                    ...omitFieldProps,
                    options: rebuildOptions(),
                    optionLabelProp: (props?.selectOriginLabel && props?.fieldProps?.optionLabelProp === 'label') ? 'labelOrigin' : props?.fieldProps?.optionLabelProp,
                }}
            />
        );
    } else {
        // @ts-ignore
        const restProps = props ? omit(props, ['clazzPrefix', 'className', 'optionClazz', 'optionStyle', 'optionBeforeClazz', 'optionBeforeStyle', 'optionBeforeContent', 'optionAfterClazz', 'optionAfterStyle', 'optionAfterContent', 'fieldProps', 'selectOriginLabel', 'proField', 'usePresetStyle', 'mode', 'request', 'params', 'debounceTime', 'valueEnum', ...DesignConst.ProFormFieldItemProps, ...DesignConst.ProFieldSelectProps]) : {};
        return (
            <Select
                className={classNames(clazzPrefix, props?.className)}
                {...restProps}
                {...omitFieldProps}
                options={rebuildOptions()}
                optionLabelProp={(props?.selectOriginLabel && props?.fieldProps?.optionLabelProp === 'label') ? 'labelOrigin' : props?.fieldProps?.optionLabelProp}
            />
        );
    }
};


DivideSelect.defaultProps = {
    optionBeforeContent: 'value',
    optionAfterContent: 'label',
    selectOriginLabel: true,
    proField: true,
    usePresetStyle: false,
};
