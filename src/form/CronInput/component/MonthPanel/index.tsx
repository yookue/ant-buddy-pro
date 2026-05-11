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
import {Form, Checkbox, InputNumber, Radio, Switch, Space, type RadioChangeEvent, type CheckboxOptionType} from 'antd';
import {useIntl} from '@ant-design/pro-provider';
import {type ValueType as RcValueType} from '@rc-component/input-number';
import {MapUtils, NanoidUtils, NumberUtils, ObjectUtils, RegexUtils, StringUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import {BadgeRibbon} from '@/field/BadgeRibbon';
import {CronInputContext} from '@/form/CronInput/context';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type MonthPanelRef = {
    isCompositing: () => boolean;
};


const monthAliases: ReadonlyMap<string, string> = new Map<string, string>([
    ['1', 'JAN'],
    ['2', 'FEB'],
    ['3', 'MAR'],
    ['4', 'APR'],
    ['5', 'MAY'],
    ['6', 'JUN'],
    ['7', 'JUL'],
    ['8', 'AUG'],
    ['9', 'SEP'],
    ['10', 'OCT'],
    ['11', 'NOV'],
    ['12', 'DEC'],
]);


export enum EntryChoiceType {
    EVERY_MONTH = 'every-month',
    FROM_TO = 'from-to',
    FROM_INTERVAL = 'from-interval',
    SPECIFY_MONTH = 'specific-month',
}


export type IntlLocaleProps = {
    /**
     * @description Alias
     * @description.zh-CN 别名
     * @description.zh-TW 別名
     */
    semanticAlias?: string;

    /**
     * @description Every Month
     * @description.zh-CN 每月
     * @description.zh-TW 每月
     */
    everyMonth?: string;

    /**
     * @description Every month between month
     * @description.zh-CN 每月，从
     * @description.zh-TW 每月，從
     */
    fromToPrefix?: string;

    /**
     * @description and month
     * @description.zh-CN 月，到第
     * @description.zh-TW 月，到第
     */
    fromToMiddle?: string;

    /**
     * @description ''
     * @description.zh-CN 月
     * @description.zh-TW 月
     */
    fromToSuffix?: string;

    /**
     * @description Starting at month
     * @description.zh-CN 从第
     * @description.zh-TW 從第
     */
    fromIntervalPrefix?: string;

    /**
     * @description and every
     * @description.zh-CN 月开始，每
     * @description.zh-TW 月開始，每
     */
    fromIntervalMiddle?: string;

    /**
     * @description month(s)
     * @description.zh-CN 月
     * @description.zh-TW 月
     */
    fromIntervalSuffix?: string;

    /**
     * @description Specific month(s)
     * @description.zh-CN 到
     * @description.zh-TW 到
     */
    specificMonth?: string;
};


export type MonthPanelProps = {
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
     * @description Whether the alias is allowed or not
     * @description.zh-CN 是否使用别名
     * @description.zh-TW 是否使用別名
     * @default true
     */
    allowAlias?: boolean;

    /**
     * @description Whether the alias is default show or not
     * @description.zh-CN 是否默认显示别名
     * @description.zh-TW 是否默認顯示别名
     */
    defaultShowAlias?: boolean;

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
 * Component for generating month option for cron expression
 *
 * @author David Hsing
 */
export const MonthPanel: React.ForwardRefExoticComponent<MonthPanelProps & React.RefAttributes<MonthPanelRef>> = React.forwardRef((props?: MonthPanelProps, ref?: any) => {
    MonthPanel.displayName = 'CronInputMonthPanel';

    // noinspection DuplicatedCode
    const entryContext = React.useContext(CronInputContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-cron-input-month';
    const intlType = useIntl();

    // Initialize the default props
    const {
        allowAlias = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldRef = React.useRef<HTMLDivElement>(null);
    const compositionRef = React.useRef<boolean>(false);
    const [showAlias, setShowAlias] = React.useState<boolean>(props?.defaultShowAlias ?? false);
    // noinspection DuplicatedCode
    const [entryChoice, setEntryChoice] = React.useState<EntryChoiceType>();
    const [fromToStart, setFromToStart] = React.useState<RcValueType | null>();
    const [fromToEnd, setFromToEnd] = React.useState<RcValueType | null>();
    const [fromIntervalStart, setFromIntervalStart] = React.useState<RcValueType | null>();
    const [fromIntervalStep, setFromIntervalStep] = React.useState<RcValueType | null>();
    const [specificMonths, setSpecificMonths] = React.useState<any[]>();
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
            case EntryChoiceType.EVERY_MONTH:
                setUnitExpress('*');
                break;
            case EntryChoiceType.FROM_TO:
                if (ObjectUtils.anyEmpty([fromToStart, fromToEnd])) {
                    setUnitExpress(undefined);
                    break;
                }
                // @ts-ignore
                setUnitExpress((allowAlias && showAlias) ? `${monthAliases.get(fromToStart.toString())}-${monthAliases.get(fromToEnd.toString())}` : `${fromToStart}-${fromToEnd}`);
                break;
            case EntryChoiceType.FROM_INTERVAL:
                if (ObjectUtils.anyEmpty([fromIntervalStart, fromIntervalStep])) {
                    setUnitExpress(undefined);
                    break;
                }
                // @ts-ignore
                setUnitExpress((allowAlias && showAlias) ? `${monthAliases.get(fromIntervalStart.toString())}/${fromIntervalStep}` : `${fromIntervalStart}/${fromIntervalStep}`);
                break;
            case EntryChoiceType.SPECIFY_MONTH:
                if (!specificMonths || !specificMonths.length) {
                    setUnitExpress(undefined);
                    break;
                }
                setUnitExpress(StringUtils.join((!allowAlias || !showAlias) ? specificMonths : specificMonths.map(item => monthAliases.get(item.toString())), ','));
                break;
            default:
                break;
        }
    }, [entryChoice, fromToStart, fromToEnd, fromIntervalStart, fromIntervalStep, specificMonths, showAlias]);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        props?.onChange?.(unitExpress);
    }, [unitExpress]);

    React.useEffect(() => {
        const income = props?.value as string;
        if (income === '*') {
            setEntryChoice(EntryChoiceType.EVERY_MONTH);
        } else if (income && (/^\d+-\d+$/g.test(income) || /^[A-Z]{3}-[A-Z]{3}$/g.test(income))) {
            setEntryChoice(EntryChoiceType.FROM_TO);
            const start = StringUtils.substringBefore(income, '-'), end = StringUtils.substringAfter(income, '-');
            setFromToStart(RegexUtils.isNumeric(start) ? start : MapUtils.getKey(monthAliases, start));
            setFromToEnd(RegexUtils.isNumeric(end) ? end : MapUtils.getKey(monthAliases, end));
        } else if (income && (/^\d+\/\d+$/g.test(income) || /^[A-Z]{3}\/\d+$/g.test(income))) {
            setEntryChoice(EntryChoiceType.FROM_INTERVAL);
            const start = StringUtils.substringBefore(income, '/');
            setFromIntervalStart(RegexUtils.isNumeric(start) ? start : MapUtils.getKey(monthAliases, start));
            setFromIntervalStep(StringUtils.substringAfter(income, '/'));
        } else if (income && (/^(\d+)(,\d+)*$/g.test(income) || /^([A-Z]{3})(,[A-Z]{3})*$/g.test(income))) {
            setEntryChoice(EntryChoiceType.SPECIFY_MONTH);
            if (/^(\d+)(,\d+)*$/g.test(income)) {
                setSpecificMonths(income.split(','));
            } else {
                setSpecificMonths(income.split(',').map(item => MapUtils.getKey(monthAliases, item) as string));
            }
        } else {
            setEntryChoice(undefined);
        }
    }, [props?.value]);

    const buildSpecificOptions = () => {
        const result: CheckboxOptionType[] = [];
        for (let i = 1; i < 13; i++) {
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
            <BadgeRibbon
                text={!allowAlias ? undefined : (
                    <Switch
                        className={`${clazzPrefix}-switch-alias`}
                        checked={showAlias}
                        disabled={props?.disabled}
                        size='small'
                        checkedChildren={ObjectUtils.firstNotNil(props?.localeProps?.semanticAlias, intlLocales.get([locale, 'semanticAlias']), intlLocales.get(['en_US', 'semanticAlias']))}
                        unCheckedChildren={ObjectUtils.firstNotNil(props?.localeProps?.semanticAlias, intlLocales.get([locale, 'semanticAlias']), intlLocales.get(['en_US', 'semanticAlias']))}
                        onChange={setShowAlias}
                    />
                )}
                transparent={true}
                style={{
                    marginTop: -20,
                    paddingRight: 0,
                }}
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
                                <Radio value={EntryChoiceType.EVERY_MONTH}>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.everyMonth, intlLocales.get([locale, 'everyMonth']), intlLocales.get(['en_US', 'everyMonth']))}
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
                                                        min={1}
                                                        max={12}
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
                                                        max={12}
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
                                                        min={1}
                                                        max={12}
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
                                                        max={12}
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
                                    value={EntryChoiceType.SPECIFY_MONTH}
                                    onClick={() => {
                                        window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_MONTH), 80);
                                    }}
                                >
                                    <Space orientation='vertical'>
                                        {ObjectUtils.firstNotNil(props?.localeProps?.specificMonth, intlLocales.get([locale, 'specificMonth']), intlLocales.get(['en_US', 'specificMonth']))}
                                        <Form.Item noStyle={true} shouldUpdate={true}>
                                            {() => {
                                                return (
                                                    <Checkbox.Group
                                                        name='specificMonths'
                                                        className={`${clazzPrefix}-specific`}
                                                        disabled={entryChoice !== EntryChoiceType.SPECIFY_MONTH}
                                                        options={buildSpecificOptions()}
                                                        value={specificMonths}
                                                        onChange={(checks: any[]) => {
                                                            setSpecificMonths(checks);
                                                            if (!checks || !checks.length) {
                                                                window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_MONTH), 80);
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
            </BadgeRibbon>
        </div>
    );
});
