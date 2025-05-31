/*
 * Copyright (c) 2024 Yookue Ltd. All rights reserved.
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
import {Form, Checkbox, InputNumber, Radio, Space, type RadioChangeEvent} from 'antd';
import {useIntl} from '@ant-design/pro-provider';
import {NanoidUtils, NumberUtils, ObjectUtils, StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import {type ValueType as RcValueType} from 'rc-input-number';
import {CronInputContext} from '@/form/CronInput/context';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type MinutePanelRef = {
    isCompositing: () => boolean;
};


export enum EntryChoiceType {
    EVERY_MINUTE = 'every-minute',
    FROM_TO = 'from-to',
    FROM_INTERVAL = 'from-interval',
    SPECIFY_MINUTE = 'specific-minute',
}


export type IntlLocaleProps = {
    /**
     * @description Every Minute
     * @description.zh-CN 每分
     * @description.zh-TW 每分
     */
    everyMinute?: string;

    /**
     * @description Every minute between minute
     * @description.zh-CN 每分，从
     * @description.zh-TW 每分，從
     */
    fromToPrefix?: string;

    /**
     * @description and minute
     * @description.zh-CN 分，到第
     * @description.zh-TW 分，到第
     */
    fromToMiddle?: string;

    /**
     * @description ''
     * @description.zh-CN 分
     * @description.zh-TW 分
     */
    fromToSuffix?: string;

    /**
     * @description Starting at minute
     * @description.zh-CN 从第
     * @description.zh-TW 從第
     */
    fromIntervalPrefix?: string;

    /**
     * @description and every
     * @description.zh-CN 分开始，每
     * @description.zh-TW 分開始，每
     */
    fromIntervalMiddle?: string;

    /**
     * @description minute(s)
     * @description.zh-CN 分
     * @description.zh-TW 分
     */
    fromIntervalSuffix?: string;

    /**
     * @description Specific minute(s)
     * @description.zh-CN 到
     * @description.zh-TW 到
     */
    specificMinute?: string;
};


export type MinutePanelProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-cron-input-minute'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container div
     * @description.zh-CN 容器 div 的 CSS 类名
     * @description.zh-TW 容器 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the container div
     * @description.zh-CN 容器 div 的 CSS 样式
     * @description.zh-TW 容器 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;

    /**
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description The callback function when the value changed
     * @description.zh-CN 值更改后的回调函数
     * @description.zh-TW 值更改後的回調函數
     */
    onChange?: (value?: string) => void;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'value'>;


/**
 * Component for generating minute option for cron expression
 *
 * @author David Hsing
 */
export const MinutePanel: React.ForwardRefExoticComponent<MinutePanelProps & React.RefAttributes<MinutePanelRef>> = React.forwardRef((props?: MinutePanelProps, ref?: any) => {
    MinutePanel.displayName = 'CronInputMinutePanel';

    const entryContext = React.useContext(CronInputContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-cron-input-minute';
    // noinspection DuplicatedCode
    const intlType = useIntl();

    // Initialize the default props
    const {
        locale = intlType.locale,
    } = props ?? {};

    const fieldRef = React.useRef<HTMLDivElement>(null);
    const compositionRef = React.useRef<boolean>(false);
    const [entryChoice, setEntryChoice] = React.useState<EntryChoiceType>();
    const [fromToStart, setFromToStart] = React.useState<RcValueType | null>();
    const [fromToEnd, setFromToEnd] = React.useState<RcValueType | null>();
    const [fromIntervalStart, setFromIntervalStart] = React.useState<RcValueType | null>();
    const [fromIntervalStep, setFromIntervalStep] = React.useState<RcValueType | null>();
    const [specificMinutes, setSpecificMinutes] = React.useState<any[]>();
    const [unitExpress, setUnitExpress] = React.useState<string | undefined>(props?.value as string);
    const fieldStyle = useFieldStyle(clazzPrefix);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isCompositing: (): boolean => {
            return compositionRef.current;
        }
    }));

    React.useEffect(() => {
        switch (entryChoice) {
            case EntryChoiceType.EVERY_MINUTE:
                setUnitExpress('*');
                break;
            case EntryChoiceType.FROM_TO:
                setUnitExpress(ObjectUtils.anyEmpty([fromToStart, fromToEnd]) ? undefined : `${fromToStart}-${fromToEnd}`);
                break;
            case EntryChoiceType.FROM_INTERVAL:
                setUnitExpress(ObjectUtils.anyEmpty([fromIntervalStart, fromIntervalStep]) ? undefined : `${fromIntervalStart}/${fromIntervalStep}`);
                break;
            case EntryChoiceType.SPECIFY_MINUTE:
                setUnitExpress(ObjectUtils.isEmpty(specificMinutes) ? undefined : StringUtils.join(specificMinutes, ','));
                break;
            default:
                break;
        }
    }, [entryChoice, fromToStart, fromToEnd, fromIntervalStart, fromIntervalStep, specificMinutes]);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        props?.onChange?.(unitExpress);
    }, [unitExpress]);

    React.useEffect(() => {
        const income = props?.value as string;
        if (income === '*') {
            setEntryChoice(EntryChoiceType.EVERY_MINUTE);
        } else if (income && /^\d+-\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_TO);
            setFromToStart(StringUtils.substringBefore(income, '-'));
            setFromToEnd(StringUtils.substringAfter(income, '-'));
        } else if (income && /^\d+\/\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_INTERVAL);
            setFromIntervalStart(StringUtils.substringBefore(income, '/'));
            setFromIntervalStep(StringUtils.substringAfter(income, '/'));
        } else if (income && /^(\d{1,2})(,\d{1,2})*$/g.test(income)) {
            setEntryChoice(EntryChoiceType.SPECIFY_MINUTE);
            setSpecificMinutes(income.includes(',') ? income.split(',') : [income]);
        } else {
            setEntryChoice(undefined);
        }
    }, [props?.value]);

    const buildSpecificOptions = () => {
        const result = [];
        for (let i = 0; i < 60; i++) {
            result.push({
                label: (i < 10) ? `0${i}` : i,
                value: `${i}`,
            });
        }
        return result;
    };

    // noinspection DuplicatedCode
    return (
        <div ref={fieldRef} className={classNames(clazzPrefix, fieldStyle.hashId, props?.containerClazz)} style={props?.containerStyle}>
            <Form
                name={`${clazzPrefix}-${entryContext?.fieldId ?? NanoidUtils.getPopularId()}`}
                disabled={props?.disabled}
                onCompositionStart={() => compositionRef.current = true}
                onCompositionEnd={() => compositionRef.current = false}
            >
                <Form.Item noStyle={true}>
                    <Radio.Group
                        name='entryChoice'
                        value={entryChoice}
                        onChange={(event: RadioChangeEvent) => setEntryChoice(event.target.value)}
                    >
                        <Space direction='vertical'>
                            <Radio value={EntryChoiceType.EVERY_MINUTE}>
                                {ObjectUtils.firstNotNil(props?.localeProps?.everyMinute, intlLocales.get([locale, 'everyMinute']), intlLocales.get(['en_US', 'everyMinute']))}
                            </Radio>
                            <Radio
                                value={EntryChoiceType.FROM_TO}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.FROM_TO), 80);
                                }}
                            >
                                <Space>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.fromToPrefix, intlLocales.get([locale, 'fromToPrefix']), intlLocales.get(['en_US', 'fromToPrefix']))}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromToStart'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_TO}
                                                    min={0}
                                                    max={59}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_TO && (ObjectUtils.isEmpty(fromToStart) || NumberUtils.compare(fromToStart, fromToEnd, true) > 0)) ? 'error' : undefined}
                                                    value={fromToStart}
                                                    onChange={setFromToStart}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.fromToMiddle, intlLocales.get([locale, 'fromToMiddle']), intlLocales.get(['en_US', 'fromToMiddle']))}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromToEnd'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_TO}
                                                    min={fromToStart ?? 0}
                                                    max={59}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_TO && (ObjectUtils.isEmpty(fromToEnd) || NumberUtils.compare(fromToStart, fromToEnd, true) > 0)) ? 'error' : undefined}
                                                    value={fromToEnd}
                                                    onChange={setFromToEnd}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.fromToSuffix, intlLocales.get([locale, 'fromToSuffix']), intlLocales.get(['en_US', 'fromToSuffix']))}
                                </Space>
                            </Radio>
                            <Radio
                                value={EntryChoiceType.FROM_INTERVAL}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.FROM_INTERVAL), 80);
                                }}
                            >
                                <Space>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.fromIntervalPrefix, intlLocales.get([locale, 'fromIntervalPrefix']), intlLocales.get(['en_US', 'fromIntervalPrefix']))}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromIntervalStart'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_INTERVAL}
                                                    min={0}
                                                    max={59}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_INTERVAL && ObjectUtils.isEmpty(fromIntervalStart)) ? 'error' : undefined}
                                                    value={fromIntervalStart}
                                                    onChange={setFromIntervalStart}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.fromIntervalMiddle, intlLocales.get([locale, 'fromIntervalMiddle']), intlLocales.get(['en_US', 'fromIntervalMiddle']))}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromIntervalStep'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_INTERVAL}
                                                    min={1}
                                                    max={60}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_INTERVAL && ObjectUtils.isEmpty(fromIntervalStep)) ? 'error' : undefined}
                                                    value={fromIntervalStep}
                                                    onChange={setFromIntervalStep}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.fromIntervalSuffix, intlLocales.get([locale, 'fromIntervalSuffix']), intlLocales.get(['en_US', 'fromIntervalSuffix']))}
                                </Space>
                            </Radio>
                            <Radio
                                value={EntryChoiceType.SPECIFY_MINUTE}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_MINUTE), 80);
                                }}
                            >
                                <Space direction='vertical'>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.specificMinute, intlLocales.get([locale, 'specificMinute']), intlLocales.get(['en_US', 'specificMinute']))}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <Checkbox.Group
                                                    name='specificMinutes'
                                                    className={`${clazzPrefix}-specific`}
                                                    disabled={entryChoice !== EntryChoiceType.SPECIFY_MINUTE}
                                                    options={buildSpecificOptions()}
                                                    value={specificMinutes}
                                                    onChange={(checks: any[]) => {
                                                        setSpecificMinutes(checks);
                                                        if (!checks || !checks.length) {
                                                            window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_MINUTE), 80);
                                                        }
                                                    }}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                </Space>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
});
