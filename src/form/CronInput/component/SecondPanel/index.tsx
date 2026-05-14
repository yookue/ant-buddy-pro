/*
 * Copyright (c) 2024 Unikue Ltd. All rights reserved.
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
import {Form, Checkbox, InputNumber, Radio, Space, type RadioChangeEvent, type CheckboxOptionType} from 'antd';
import {useIntl} from '@ant-design/pro-components';
import {type ValueType as RcValueType} from '@rc-component/input-number';
import {NanoidUtils, NumberUtils, ObjectUtils, StringUtils} from '@unikue/ts-lang-utils';
import classnames from 'classnames';
import {CronInputContext} from '@/form/CronInput/context';
import {intlLocales} from './locales';
import {useFieldStyle} from './styles';


export type SecondPanelRef = {
    isCompositing: () => boolean;
};


export enum EntryChoiceType {
    EVERY_SECOND = 'every-second',
    FROM_TO = 'from-to',
    FROM_INTERVAL = 'from-interval',
    SPECIFY_SECOND = 'specific-second',
}


export type IntlLocaleProps = {
    /**
     * @description Every Second
     * @description.zh-CN 每秒
     * @description.zh-TW 每秒
     */
    everySecond?: string;

    /**
     * @description Every second between second
     * @description.zh-CN 每秒，从
     * @description.zh-TW 每秒，從
     */
    fromToPrefix?: string;

    /**
     * @description and second
     * @description.zh-CN 秒，到第
     * @description.zh-TW 秒，到第
     */
    fromToMiddle?: string;

    /**
     * @description ''
     * @description.zh-CN 秒
     * @description.zh-TW 秒
     */
    fromToSuffix?: string;

    /**
     * @description Starting at second
     * @description.zh-CN 从第
     * @description.zh-TW 從第
     */
    fromIntervalPrefix?: string;

    /**
     * @description and every
     * @description.zh-CN 秒开始，每
     * @description.zh-TW 秒開始，每
     */
    fromIntervalMiddle?: string;

    /**
     * @description second(s)
     * @description.zh-CN 秒
     * @description.zh-TW 秒
     */
    fromIntervalSuffix?: string;

    /**
     * @description Specific second(s)
     * @description.zh-CN 到
     * @description.zh-TW 到
     */
    specificSecond?: string;
};


export type SecondPanelProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-cron-input-month'
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
 * Component for generating second option for cron expression
 *
 * @author David Hsing
 */
export const SecondPanel: React.ForwardRefExoticComponent<SecondPanelProps & React.RefAttributes<SecondPanelRef>> = React.forwardRef((props?: SecondPanelProps, ref?: any) => {
    SecondPanel.displayName = 'CronInputSecondPanel';

    // noinspection DuplicatedCode
    const entryContext = React.useContext(CronInputContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-cron-input-second';
    // noinspection DuplicatedCode
    const intlType = useIntl();

    // Initialize the default props
    const {
        locale = intlType.locale,
    } = props ?? {};

    // noinspection DuplicatedCode
    const compositionRef = React.useRef<boolean>(false);
    const [entryChoice, setEntryChoice] = React.useState<EntryChoiceType>();
    const [fromToStart, setFromToStart] = React.useState<RcValueType | null>();
    const [fromToEnd, setFromToEnd] = React.useState<RcValueType | null>();
    const [fromIntervalStart, setFromIntervalStart] = React.useState<RcValueType | null>();
    const [fromIntervalStep, setFromIntervalStep] = React.useState<RcValueType | null>();
    const [specificSeconds, setSpecificSeconds] = React.useState<any[]>();
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
            case EntryChoiceType.EVERY_SECOND:
                setUnitExpress('*');
                break;
            case EntryChoiceType.FROM_TO:
                setUnitExpress(ObjectUtils.anyEmpty([fromToStart, fromToEnd]) ? undefined : `${fromToStart}-${fromToEnd}`);
                break;
            case EntryChoiceType.FROM_INTERVAL:
                setUnitExpress(ObjectUtils.anyEmpty([fromIntervalStart, fromIntervalStep]) ? undefined : `${fromIntervalStart}/${fromIntervalStep}`);
                break;
            case EntryChoiceType.SPECIFY_SECOND:
                setUnitExpress(ObjectUtils.isEmpty(specificSeconds) ? undefined : StringUtils.join(specificSeconds, ','));
                break;
            default:
                break;
        }
    }, [entryChoice, fromToStart, fromToEnd, fromIntervalStart, fromIntervalStep, specificSeconds]);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        props?.onChange?.(unitExpress);
    }, [unitExpress]);

    React.useEffect(() => {
        const income = props?.value as string;
        if (income === '*') {
            setEntryChoice(EntryChoiceType.EVERY_SECOND);
        } else if (income && /^\d+-\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_TO);
            setFromToStart(StringUtils.substringBefore(income, '-'));
            setFromToEnd(StringUtils.substringAfter(income, '-'));
        } else if (income && /^\d+\/\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_INTERVAL);
            setFromIntervalStart(StringUtils.substringBefore(income, '/'));
            setFromIntervalStep(StringUtils.substringAfter(income, '/'));
        } else if (income && /^(\d{1,2})(,\d{1,2})*$/g.test(income)) {
            setEntryChoice(EntryChoiceType.SPECIFY_SECOND);
            setSpecificSeconds(income.includes(',') ? income.split(',') : [income]);
        } else {
            setEntryChoice(undefined);
        }
    }, [props?.value]);

    const buildSpecificOptions = () => {
        const result: CheckboxOptionType[] = [];
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
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, props?.containerClazz)}
            style={props?.containerStyle}
        >
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
                        <Space orientation='vertical'>
                            <Radio value={EntryChoiceType.EVERY_SECOND}>
                                {ObjectUtils.firstNotNil(props?.localeProps?.everySecond, intlLocales.get([locale, 'everySecond']), intlLocales.get(['en_US', 'everySecond']))}
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
                                value={EntryChoiceType.SPECIFY_SECOND}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_SECOND), 80);
                                }}
                            >
                                <Space orientation='vertical'>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.specificSecond, intlLocales.get([locale, 'specificSecond']), intlLocales.get(['en_US', 'specificSecond']))}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <Checkbox.Group
                                                    name='specificSeconds'
                                                    className={`${clazzPrefix}-specific`}
                                                    disabled={entryChoice !== EntryChoiceType.SPECIFY_SECOND}
                                                    options={buildSpecificOptions()}
                                                    value={specificSeconds}
                                                    onChange={(checks: any[]) => {
                                                        setSpecificSeconds(checks);
                                                        if (!checks || !checks.length) {
                                                            window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_SECOND), 80);
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
