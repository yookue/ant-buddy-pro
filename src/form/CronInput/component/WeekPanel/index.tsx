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
import { Form, Checkbox, InputNumber, Radio, Switch, Tooltip, Space, type RadioChangeEvent } from 'antd';
import { useIntl } from '@ant-design/pro-components';
import { type ValueType as RcValueType } from '@rc-component/input-number';
import { MapUtils, NanoidUtils, NumberUtils, ObjectUtils, RegexUtils, StringUtils } from '@unikue/ts-lang-utils';
import classnames from 'classnames';
import { BadgeRibbon } from '@/field/BadgeRibbon';
import { CronInputContext } from '@/form/CronInput/context';
import { intlLocales } from './locales';
import { useFieldStyle } from './styles';


export type WeekPanelRef = {
    isCompositing: () => boolean;
};


const weekAliases: ReadonlyMap<string, string> = new Map<string, string>([
    ['1', 'MON'],
    ['2', 'TUE'],
    ['3', 'WED'],
    ['4', 'THU'],
    ['5', 'FRI'],
    ['6', 'SAT'],
    ['7', 'SUN'],
]);


export enum EntryChoiceType {
    BLANK_WEEK = 'blank-week',
    EVERY_WEEK = 'every-week',
    FROM_TO = 'from-to',
    FROM_INTERVAL = 'from-interval',
    SPECIFY_WEEK = 'specific-week',
    LAST_WEEK = 'last-week',
    ORDER_WEEK = 'order-week',
}


export type IntlLocaleProps = {
    /**
     * @description Alias
     * @description.zh-CN 别名
     * @description.zh-TW 別名
     */
    semanticAlias?: string;

    /**
     * @description Monday
     * @description.zh-CN 周一
     * @description.zh-TW 周一
     */
    monday?: string;

    /**
     * @description Tuesday
     * @description.zh-CN 周二
     * @description.zh-TW 周二
     */
    tuesday?: string;

    /**
     * @description Wednesday
     * @description.zh-CN 周三
     * @description.zh-TW 周三
     */
    wednesday?: string;

    /**
     * @description Thursday
     * @description.zh-CN 周四
     * @description.zh-TW 周四
     */
    thursday?: string;

    /**
     * @description Friday
     * @description.zh-CN 周五
     * @description.zh-TW 周五
     */
    friday?: string;

    /**
     * @description Saturday
     * @description.zh-CN 周六
     * @description.zh-TW 周六
     */
    saturday?: string;

    /**
     * @description Sunday
     * @description.zh-CN 周日
     * @description.zh-TW 周日
     */
    sunday?: string;

    /**
     * @description Blank week
     * @description.zh-CN 不指定
     * @description.zh-TW 不指定
     */
    blankWeek?: string;

    /**
     * @description Every week
     * @description.zh-CN 每周
     * @description.zh-TW 每周
     */
    everyWeek?: string;

    /**
     * @description Every week between week
     * @description.zh-CN 每周，从
     * @description.zh-TW 每周，從
     */
    fromToPrefix?: string;

    /**
     * @description and week
     * @description.zh-CN ，到
     * @description.zh-TW ，到
     */
    fromToMiddle?: string;

    /**
     * @description Starting at week
     * @description.zh-CN 从
     * @description.zh-TW 從
     */
    fromIntervalPrefix?: string;

    /**
     * @description and every
     * @description.zh-CN 开始，每
     * @description.zh-TW 開始，每
     */
    fromIntervalMiddle?: string;

    /**
     * @description day(s)
     * @description.zh-CN 天
     * @description.zh-TW 天
     */
    fromIntervalSuffix?: string;

    /**
     * @description Specific week(s)
     * @description.zh-CN 到
     * @description.zh-TW 到
     */
    specificWeek?: string;

    /**
     * @description The last
     * @description.zh-CN 月度的最后一个
     * @description.zh-TW 月度的最後壹個
     */
    monthLastWeekPrefix?: string;

    /**
     * @description of the month
     * @description.zh-CN ''
     * @description.zh-TW ''
     */
    monthLastWeekSuffix?: string;

    /**
     * @description The
     * @description.zh-CN 月度的第
     * @description.zh-TW 月度的第
     */
    monthOrderWeekPrefix?: string;

    /**
     * @description ''
     * @description.zh-CN '个'
     * @description.zh-TW '個'
     */
    monthOrderWeekMiddle?: string;

    /**
     * @description of the month
     * @description.zh-CN ''
     * @description.zh-TW ''
     */
    monthOrderWeekSuffix?: string;
};


export type WeekPanelProps = {
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
     * @default true
     */
    defaultShowAlias?: boolean;

    /**
     * @description Whether the sunday is treated as 0, otherwise as 7
     * @description.zh-CN 是否将周日当作 0
     * @description.zh-TW 是否將周日當作 0
     */
    sundayAsZero?: boolean;

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
 * Component for generating week option for cron expression
 *
 * @author David Hsing
 */
export const WeekPanel: React.ForwardRefExoticComponent<WeekPanelProps & React.RefAttributes<WeekPanelRef>> = React.forwardRef((props?: WeekPanelProps, ref?: any) => {
    WeekPanel.displayName = 'CronInputWeekPanel';

    // noinspection DuplicatedCode
    const entryContext = React.useContext(CronInputContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-cron-input-week';
    const intlType = useIntl();

    // Initialize the default props
    const {
        allowAlias = true,
        defaultShowAlias = true,
        locale = intlType.locale,
    } = props ?? {};

    const compositionRef = React.useRef<boolean>(false);
    const [showAlias, setShowAlias] = React.useState<boolean>(defaultShowAlias);
    // noinspection DuplicatedCode
    const [entryChoice, setEntryChoice] = React.useState<EntryChoiceType>();
    const [fromToStart, setFromToStart] = React.useState<RcValueType | null>();
    const [fromToEnd, setFromToEnd] = React.useState<RcValueType | null>();
    const [fromIntervalStart, setFromIntervalStart] = React.useState<RcValueType | null>();
    const [fromIntervalStep, setFromIntervalStep] = React.useState<RcValueType | null>();
    const [specificWeeks, setSpecificWeeks] = React.useState<any[]>();
    const [lastWeek, setLastWeek] = React.useState<RcValueType | null>();
    const [orderWeekSort, setOrderWeekSort] = React.useState<RcValueType | null>();
    const [orderWeekValue, setOrderWeekValue] = React.useState<RcValueType | null>();
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
            case EntryChoiceType.BLANK_WEEK:
                setUnitExpress('?');
                break;
            case EntryChoiceType.EVERY_WEEK:
                setUnitExpress('*');
                break;
            case EntryChoiceType.FROM_TO:
                if (ObjectUtils.anyEmpty([fromToStart, fromToEnd])) {
                    setUnitExpress(undefined);
                    break;
                }
                // @ts-ignore
                setUnitExpress((allowAlias && showAlias) ? `${weekAliases.get(fromToStart.toString())}-${weekAliases.get(fromToEnd.toString())}` : `${fromToStart}-${fromToEnd}`);
                break;
            case EntryChoiceType.FROM_INTERVAL:
                if (ObjectUtils.anyEmpty([fromIntervalStart, fromIntervalStep])) {
                    setUnitExpress(undefined);
                    break;
                }
                // @ts-ignore
                setUnitExpress((allowAlias && showAlias) ? `${weekAliases.get(fromIntervalStart.toString())}/${fromIntervalStep}` : `${fromIntervalStart}/${fromIntervalStep}`);
                break;
            case EntryChoiceType.SPECIFY_WEEK:
                if (!specificWeeks || !specificWeeks.length) {
                    setUnitExpress(undefined);
                    break;
                }
                if (!allowAlias || !showAlias) {
                    setUnitExpress(StringUtils.join(specificWeeks.map(item => ((item === 7 || item === '7') && props?.sundayAsZero) ? '0' : item), ','));
                } else {
                    setUnitExpress(StringUtils.join(specificWeeks.map(item => weekAliases.get(item.toString())), ','));
                }
                break;
            case EntryChoiceType.LAST_WEEK:
                setUnitExpress(!lastWeek ? undefined : `${lastWeek}L`);
                break;
            case EntryChoiceType.ORDER_WEEK:
                if (!orderWeekSort || !orderWeekValue) {
                    setUnitExpress(undefined);
                    break;
                }
                if (!allowAlias || !showAlias) {
                    setUnitExpress(`${((orderWeekValue === 7 || orderWeekValue === '7') && props?.sundayAsZero) ? '0' : orderWeekValue}#${orderWeekSort}`);
                } else {
                    setUnitExpress(`${weekAliases.get(orderWeekValue.toString())}#${orderWeekSort}`);
                }
                break;
            default:
                break;
        }
    }, [entryChoice, fromToStart, fromToEnd, fromIntervalStart, fromIntervalStep, specificWeeks, lastWeek, orderWeekSort, orderWeekValue, showAlias]);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        props?.onChange?.(unitExpress);
    }, [unitExpress]);

    React.useEffect(() => {
        const income = props?.value as string;
        if (income === '?') {
            setEntryChoice(EntryChoiceType.BLANK_WEEK);
        } else if (income === '*') {
            setEntryChoice(EntryChoiceType.EVERY_WEEK);
        }  else if (income && (/^\d+-\d+$/g.test(income) || /^[A-Z]{3}-[A-Z]{3}$/g.test(income))) {
            setEntryChoice(EntryChoiceType.FROM_TO);
            const start = StringUtils.substringBefore(income, '-'), end = StringUtils.substringAfter(income, '-');
            setFromToStart(RegexUtils.isNumeric(start) ? start : MapUtils.getKey(weekAliases, start));
            setFromToEnd(RegexUtils.isNumeric(end) ? end : MapUtils.getKey(weekAliases, end));
        } else if (income && (/^\d+\/\d+$/g.test(income) || /^[A-Z]{3}\/\d+$/g.test(income))) {
            setEntryChoice(EntryChoiceType.FROM_INTERVAL);
            const start = StringUtils.substringBefore(income, '/');
            setFromIntervalStart(RegexUtils.isNumeric(start) ? start : MapUtils.getKey(weekAliases, start));
            setFromIntervalStep(StringUtils.substringAfter(income, '/'));
        } else if (income && (/^(\d+)(,\d+)*$/g.test(income) || /^([A-Z]{3})(,[A-Z]{3})*$/g.test(income))) {
            setEntryChoice(EntryChoiceType.SPECIFY_WEEK);
            if (/^(\d+)(,\d+)*$/g.test(income)) {
                setSpecificWeeks(income.split(',').map(item => (item === '0') ? '7' : item));
            } else {
                setSpecificWeeks(income.split(',').map(item => MapUtils.getKey(weekAliases, item) as string));
            }
        } else if (income && /^\d+L$/g.test(income)) {
            setEntryChoice(EntryChoiceType.LAST_WEEK);
            setLastWeek(StringUtils.left(income, income.length - 1) as string);
        } else if (income && (/^\d+#\d+$/g.test(income) || /^[A-Z]{3}#\d+$/g.test(income))) {
            setEntryChoice(EntryChoiceType.ORDER_WEEK);
            setOrderWeekSort(StringUtils.substringAfter(income, '#'));
            const valueAlias = StringUtils.substringBefore(income, '#');
            if (RegexUtils.isNumeric(valueAlias)) {
                setOrderWeekValue((valueAlias === '0') ? '7' : valueAlias);
            } else {
                setOrderWeekValue(MapUtils.getKey(weekAliases, valueAlias));
            }
        } else {
            setEntryChoice(undefined);
        }
    }, [props?.value]);

    const weekSemantics: ReadonlyMap<string, string | undefined> = new Map<string, string | undefined>([
        ['1', ObjectUtils.firstNotNil(props?.localeProps?.monday, intlLocales.get([locale, 'monday']), intlLocales.get(['en_US', 'monday']))],
        ['2', ObjectUtils.firstNotNil(props?.localeProps?.tuesday, intlLocales.get([locale, 'tuesday']), intlLocales.get(['en_US', 'tuesday']))],
        ['3', ObjectUtils.firstNotNil(props?.localeProps?.wednesday, intlLocales.get([locale, 'wednesday']), intlLocales.get(['en_US', 'wednesday']))],
        ['4', ObjectUtils.firstNotNil(props?.localeProps?.thursday, intlLocales.get([locale, 'thursday']), intlLocales.get(['en_US', 'thursday']))],
        ['5', ObjectUtils.firstNotNil(props?.localeProps?.friday, intlLocales.get([locale, 'friday']), intlLocales.get(['en_US', 'friday']))],
        ['6', ObjectUtils.firstNotNil(props?.localeProps?.saturday, intlLocales.get([locale, 'saturday']), intlLocales.get(['en_US', 'saturday']))],
        ['7', ObjectUtils.firstNotNil(props?.localeProps?.sunday, intlLocales.get([locale, 'sunday']), intlLocales.get(['en_US', 'sunday']))],
    ]);

    const buildWeekOptions = () => {
        return Array.from(weekSemantics.entries()).map(([k, v]) => ({
            label: v,
            value: k,
        }));
    };

    // noinspection DuplicatedCode
    return (
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, props?.containerClazz)}
            style={props?.containerStyle}
        >
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
                                <Radio value={EntryChoiceType.BLANK_WEEK}>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.blankWeek, intlLocales.get([locale, 'blankWeek']), intlLocales.get(['en_US', 'blankWeek']))}
                                </Radio>
                                <Radio value={EntryChoiceType.EVERY_WEEK}>
                                    {ObjectUtils.firstNotNil(props?.localeProps?.everyWeek, intlLocales.get([locale, 'everyWeek']), intlLocales.get(['en_US', 'everyWeek']))}
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
                                                    <Tooltip
                                                        title={MapUtils.getValue(weekSemantics, fromToStart?.toString())}
                                                        getPopupContainer={(trigger: HTMLElement) => {
                                                            return trigger?.parentElement || document.body;
                                                        }}
                                                    >
                                                        <InputNumber
                                                            name='fromToStart'
                                                            autoComplete='off'
                                                            disabled={entryChoice !== EntryChoiceType.FROM_TO}
                                                            min={1}
                                                            max={7}
                                                            step={1}
                                                            size='small'
                                                            status={(entryChoice === EntryChoiceType.FROM_TO && (ObjectUtils.isEmpty(fromToStart) || NumberUtils.compare(fromToStart, fromToEnd, true) > 0)) ? 'error' : undefined}
                                                            value={fromToStart}
                                                            onChange={setFromToStart}
                                                        />
                                                    </Tooltip>
                                                );
                                            }}
                                        </Form.Item>
                                        {ObjectUtils.firstNotNil(props?.localeProps?.fromToMiddle, intlLocales.get([locale, 'fromToMiddle']), intlLocales.get(['en_US', 'fromToMiddle']))}
                                        <Form.Item noStyle={true} shouldUpdate={true}>
                                            {() => {
                                                return (
                                                    <Tooltip
                                                        title={MapUtils.getValue(weekSemantics, fromToEnd?.toString())}
                                                        getPopupContainer={(trigger: HTMLElement) => {
                                                            return trigger?.parentElement || document.body;
                                                        }}
                                                    >
                                                        <InputNumber
                                                            name='fromToEnd'
                                                            autoComplete='off'
                                                            disabled={entryChoice !== EntryChoiceType.FROM_TO}
                                                            min={1}
                                                            max={7}
                                                            step={1}
                                                            size='small'
                                                            status={(entryChoice === EntryChoiceType.FROM_TO && (ObjectUtils.isEmpty(fromToEnd) || NumberUtils.compare(fromToStart, fromToEnd, true) > 0)) ? 'error' : undefined}
                                                            value={fromToEnd}
                                                            onChange={setFromToEnd}
                                                        />
                                                    </Tooltip>
                                                );
                                            }}
                                        </Form.Item>
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
                                                    <Tooltip
                                                        title={MapUtils.getValue(weekSemantics, fromIntervalStart?.toString())}
                                                        getPopupContainer={(trigger: HTMLElement) => {
                                                            return trigger?.parentElement || document.body;
                                                        }}
                                                    >
                                                        <InputNumber
                                                            name='fromIntervalStart'
                                                            autoComplete='off'
                                                            disabled={entryChoice !== EntryChoiceType.FROM_INTERVAL}
                                                            min={1}
                                                            max={7}
                                                            step={1}
                                                            size='small'
                                                            status={(entryChoice === EntryChoiceType.FROM_INTERVAL && ObjectUtils.isEmpty(fromIntervalStart)) ? 'error' : undefined}
                                                            value={fromIntervalStart}
                                                            onChange={setFromIntervalStart}
                                                        />
                                                    </Tooltip>
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
                                                        max={7}
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
                                    value={EntryChoiceType.SPECIFY_WEEK}
                                    onClick={() => {
                                        window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_WEEK), 80);
                                    }}
                                >
                                    <Space orientation='vertical'>
                                        {ObjectUtils.firstNotNil(props?.localeProps?.specificWeek, intlLocales.get([locale, 'specificWeek']), intlLocales.get(['en_US', 'specificWeek']))}
                                        <Form.Item noStyle={true} shouldUpdate={true}>
                                            {() => {
                                                return (
                                                    <Checkbox.Group
                                                        name='specificWeeks'
                                                        className={`${clazzPrefix}-specific`}
                                                        disabled={entryChoice !== EntryChoiceType.SPECIFY_WEEK}
                                                        options={buildWeekOptions()}
                                                        value={specificWeeks}
                                                        onChange={(checks: any[]) => {
                                                            setSpecificWeeks(checks);
                                                            if (!checks || !checks.length) {
                                                                window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_WEEK), 80);
                                                            }
                                                        }}
                                                    />
                                                );
                                            }}
                                        </Form.Item>
                                    </Space>
                                </Radio>
                                <Radio
                                    value={EntryChoiceType.LAST_WEEK}
                                    onClick={() => {
                                        window.setTimeout(() => setEntryChoice(EntryChoiceType.LAST_WEEK), 80);
                                    }}
                                >
                                    <Space>
                                        {ObjectUtils.firstNotNil(props?.localeProps?.monthLastWeekPrefix, intlLocales.get([locale, 'monthLastWeekPrefix']), intlLocales.get(['en_US', 'monthLastWeekPrefix']))}
                                        <Form.Item noStyle={true} shouldUpdate={true}>
                                            {() => {
                                                return (
                                                    <Tooltip
                                                        title={MapUtils.getValue(weekSemantics, lastWeek?.toString())}
                                                        getPopupContainer={(trigger: HTMLElement) => {
                                                            return trigger?.parentElement || document.body;
                                                        }}
                                                    >
                                                        <InputNumber
                                                            name='lastWeek'
                                                            autoComplete='off'
                                                            disabled={entryChoice !== EntryChoiceType.LAST_WEEK}
                                                            min={1}
                                                            max={7}
                                                            step={1}
                                                            size='small'
                                                            status={(entryChoice === EntryChoiceType.LAST_WEEK && ObjectUtils.isEmpty(lastWeek)) ? 'error' : undefined}
                                                            value={lastWeek}
                                                            onChange={setLastWeek}
                                                        />
                                                    </Tooltip>
                                                );
                                            }}
                                        </Form.Item>
                                        {ObjectUtils.firstNotNil(props?.localeProps?.monthLastWeekSuffix, intlLocales.get([locale, 'monthLastWeekSuffix']), intlLocales.get(['en_US', 'monthLastWeekSuffix']))}
                                    </Space>
                                </Radio>
                                <Radio
                                    value={EntryChoiceType.ORDER_WEEK}
                                    onClick={() => {
                                        window.setTimeout(() => setEntryChoice(EntryChoiceType.ORDER_WEEK), 80);
                                    }}
                                >
                                    <Space orientation='vertical'>
                                        <Space>
                                            {ObjectUtils.firstNotNil(props?.localeProps?.monthOrderWeekPrefix, intlLocales.get([locale, 'monthOrderWeekPrefix']), intlLocales.get(['en_US', 'monthOrderWeekPrefix']))}
                                            <Form.Item noStyle={true} shouldUpdate={true}>
                                                {() => {
                                                    return (
                                                        <InputNumber
                                                            name='orderWeekSort'
                                                            autoComplete='off'
                                                            disabled={entryChoice !== EntryChoiceType.ORDER_WEEK}
                                                            min={1}
                                                            max={5}
                                                            step={1}
                                                            size='small'
                                                            status={(entryChoice === EntryChoiceType.ORDER_WEEK && ObjectUtils.isEmpty(orderWeekSort)) ? 'error' : undefined}
                                                            value={orderWeekSort}
                                                            onChange={setOrderWeekSort}
                                                        />
                                                    );
                                                }}
                                            </Form.Item>
                                            {ObjectUtils.firstNotNil(props?.localeProps?.monthOrderWeekMiddle, intlLocales.get([locale, 'monthOrderWeekMiddle']), intlLocales.get(['en_US', 'monthOrderWeekMiddle']))}
                                            <Form.Item noStyle={true} shouldUpdate={true}>
                                                {() => {
                                                    return (
                                                        <Tooltip
                                                            title={MapUtils.getValue(weekSemantics, orderWeekValue?.toString())}
                                                            getPopupContainer={(trigger: HTMLElement) => {
                                                                return trigger?.parentElement || document.body;
                                                            }}
                                                        >
                                                            <InputNumber
                                                                name='orderWeekValue'
                                                                autoComplete='off'
                                                                disabled={entryChoice !== EntryChoiceType.ORDER_WEEK}
                                                                min={1}
                                                                max={7}
                                                                step={1}
                                                                size='small'
                                                                status={(entryChoice === EntryChoiceType.ORDER_WEEK && ObjectUtils.isEmpty(orderWeekValue)) ? 'error' : undefined}
                                                                value={orderWeekValue}
                                                                onChange={setOrderWeekValue}
                                                            />
                                                        </Tooltip>
                                                    );
                                                }}
                                            </Form.Item>
                                            {ObjectUtils.firstNotNil(props?.localeProps?.monthOrderWeekSuffix, intlLocales.get([locale, 'monthOrderWeekSuffix']), intlLocales.get(['en_US', 'monthOrderWeekSuffix']))}
                                        </Space>
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
