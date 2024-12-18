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
import {ConfigProvider, Form, Checkbox, InputNumber, Radio, Space, type RadioChangeEvent} from 'antd';
import {type CheckboxValueType} from 'antd/es/checkbox/Group';
import {useIntl} from '@ant-design/pro-provider';
import {NanoidUtils, NumberUtils, ObjectUtils, StringUtils} from '@yookue/ts-lang-utils';
import {type ValueType as NumberValueType} from 'rc-input-number/es/utils/MiniDecimal';
import {CronInputContext} from '@/form/CronInput/context';
import {intlLocales} from './intl-locales';


export type DayPanelRef = {
    isCompositing: () => boolean;
};


export enum EntryChoiceType {
    BLANK_DAY = 'blank-day',
    EVERY_DAY = 'every-day',
    FROM_TO = 'from-to',
    FROM_INTERVAL = 'from-interval',
    SPECIFY_DAY = 'specific-day',
    LAST_DAY = 'last-day',
    LAST_BEFORE = 'last-before',
    LAST_WORKDAY = 'last-workday',
    NEAREST_WORKDAY = 'nearest-workday',
}


export type IntlLocaleProps = {
    /**
     * @description Blank day
     * @description.zh-CN 不指定
     * @description.zh-TW 不指定
     */
    blankDay?: string;

    /**
     * @description Every Day
     * @description.zh-CN 每天
     * @description.zh-TW 每天
     */
    everyDay?: string;

    /**
     * @description Every day between day
     * @description.zh-CN 每天，开始于
     * @description.zh-TW 每天，開始於
     */
    fromToPrefix?: string;

    /**
     * @description and day
     * @description.zh-CN 天，到第
     * @description.zh-TW 天，到第
     */
    fromToMiddle?: string;

    /**
     * @description ''
     * @description.zh-CN 天
     * @description.zh-TW 天
     */
    fromToSuffix?: string;

    /**
     * @description Starting at day
     * @description.zh-CN 从第
     * @description.zh-TW 從第
     */
    fromIntervalPrefix?: string;

    /**
     * @description and every
     * @description.zh-CN 天开始，每
     * @description.zh-TW 天開始，每
     */
    fromIntervalMiddle?: string;

    /**
     * @description days(s)
     * @description.zh-CN 天
     * @description.zh-TW 天
     */
    fromIntervalSuffix?: string;

    /**
     * @description Specific day(s)
     * @description.zh-CN 到
     * @description.zh-TW 到
     */
    specificDay?: string;

    /**
     * @description The last day of the month
     * @description.zh-CN 月度最后一天
     * @description.zh-TW 月度最後壹天
     */
    monthLastDay?: string;

    /**
     * @description The last
     * @description.zh-CN 月度最后
     * @description.zh-TW 月度最後
     */
    monthLastBeforePrefix?: string;

    /**
     * @description day(s) of the month
     * @description.zh-CN 天
     * @description.zh-TW 天
     */
    monthLastBeforeSuffix?: string;

    /**
     * @description The last workday of the month
     * @description.zh-CN 月度最后一个工作日
     * @description.zh-TW 月度最後壹個工作日
     */
    monthLastWorkday?: string;

    /**
     * @description The nearest workday to the
     * @description.zh-CN 距离
     * @description.zh-TW 距離
     */
    nearestWorkdayPrefix?: string;

    /**
     * @description of the month
     * @description.zh-CN 最近的一个工作日
     * @description.zh-TW 最近的壹個工作日
     */
    nearestWorkdaySuffix?: string;
};


export type DayPanelProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-cron-input-day-panel'
     */
    clazzPrefix?: string;

    /**
     * @description Whether the parent container is currently open or not
     * @description.zh-CN 父容器是否为打开状态
     * @description.zh-TW 父容器是否為打開狀態
     */
    containerOpen?: boolean;

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
 * Component for generating day option for cron expression
 *
 * @author David Hsing
 */
export const DayPanel: React.ForwardRefExoticComponent<DayPanelProps & React.RefAttributes<DayPanelRef>> = React.forwardRef((props?: DayPanelProps, ref?: any) => {
    DayPanel.displayName = 'CronInputDayPanel';

    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const entryContext = React.useContext(CronInputContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-cron-input-day-panel');
    // noinspection DuplicatedCode
    const intlType = useIntl();

    // Initialize the default props
    const {
        locale = intlType.locale,
    } = props ?? {};

    // noinspection DuplicatedCode
    const fieldRef = React.useRef<HTMLDivElement>(null);
    const compositionRef = React.useRef<boolean>(false);
    const [entryChoice, setEntryChoice] = React.useState<EntryChoiceType>();
    const [fromToStart, setFromToStart] = React.useState<NumberValueType | null>();
    const [fromToEnd, setFromToEnd] = React.useState<NumberValueType | null>();
    const [fromIntervalStart, setFromIntervalStart] = React.useState<NumberValueType | null>();
    const [fromIntervalStep, setFromIntervalStep] = React.useState<NumberValueType | null>();
    const [specificDays, setSpecificDays] = React.useState<CheckboxValueType[]>();
    const [lastBeforeDay, setLastBeforeDay] = React.useState<NumberValueType | null>();
    const [nearestWorkday, setNearestWorkday] = React.useState<NumberValueType | null>();
    const [unitExpress, setUnitExpress] = React.useState<string | undefined>(props?.value as string);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isCompositing: (): boolean => {
            return compositionRef.current;
        }
    }));

    React.useEffect(() => {
        const startAlias = NumberUtils.toInteger(fromToStart);
        const endAlias = NumberUtils.toInteger(fromToEnd);
        if (!!startAlias && startAlias < 31 && !!endAlias && startAlias >= endAlias) {
            setFromToEnd(startAlias + 1);
        }
    }, [fromToStart]);

    React.useEffect(() => {
        switch (entryChoice) {
            case EntryChoiceType.BLANK_DAY:
                setUnitExpress('?');
                break;
            case EntryChoiceType.EVERY_DAY:
                setUnitExpress('*');
                break;
            case EntryChoiceType.FROM_TO:
                setUnitExpress(ObjectUtils.anyEmpty([fromToStart, fromToEnd]) ? undefined : `${fromToStart}-${fromToEnd}`);
                break;
            case EntryChoiceType.FROM_INTERVAL:
                setUnitExpress(ObjectUtils.anyEmpty([fromIntervalStart, fromIntervalStep]) ? undefined : `${fromIntervalStart}/${fromIntervalStep}`);
                break;
            case EntryChoiceType.SPECIFY_DAY:
                setUnitExpress(ObjectUtils.isEmpty(specificDays) ? undefined : StringUtils.join(specificDays, ','));
                break;
            case EntryChoiceType.LAST_DAY:
                setUnitExpress('L');
                break;
            case EntryChoiceType.LAST_BEFORE:
                setUnitExpress(ObjectUtils.isEmpty(lastBeforeDay) ? undefined : `L-${lastBeforeDay}`);
                break;
            case EntryChoiceType.LAST_WORKDAY:
                setUnitExpress('LW');
                break;
            case EntryChoiceType.NEAREST_WORKDAY:
                setUnitExpress(ObjectUtils.isEmpty(nearestWorkday) ? undefined : `${nearestWorkday}W`);
                break;
            default:
                break;
        }
    }, [entryChoice, fromToStart, fromToEnd, fromIntervalStart, fromIntervalStep, specificDays, lastBeforeDay, nearestWorkday]);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        props?.onChange?.(unitExpress);
    }, [unitExpress]);

    React.useEffect(() => {
        const income = props?.value as string;
        if (income === '?') {
            setEntryChoice(EntryChoiceType.BLANK_DAY);
        } else if (income === '*') {
            setEntryChoice(EntryChoiceType.EVERY_DAY);
        } else if (income && /^\d+-\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_TO);
            setFromToStart(NumberUtils.toInteger(StringUtils.substringBefore(income, '-')));
            setFromToEnd(NumberUtils.toInteger(StringUtils.substringAfter(income, '-')));
        } else if (income && /^\d+\/\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_INTERVAL);
            setFromIntervalStart(NumberUtils.toInteger(StringUtils.substringBefore(income, '/')));
            setFromIntervalStep(NumberUtils.toInteger(StringUtils.substringAfter(income, '/')));
        } else if (income && /^(\d{1,2})(,\d{1,2})*$/g.test(income)) {
            setEntryChoice(EntryChoiceType.SPECIFY_DAY);
            setSpecificDays(income.includes(',') ? income.split(',').map(item => NumberUtils.toInteger(item) as number) : [NumberUtils.toInteger(income) as number]);
        } else if (income === 'L') {
            setEntryChoice(EntryChoiceType.LAST_DAY);
        } else if (income && /^L-\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.LAST_BEFORE);
            setLastBeforeDay(NumberUtils.toInteger(StringUtils.substringAfter(income, '-')));
        } else if (income === 'LW') {
            setEntryChoice(EntryChoiceType.LAST_WORKDAY);
        } else if (income && /^\d+W$/g.test(income)) {
            setEntryChoice(EntryChoiceType.NEAREST_WORKDAY);
            setNearestWorkday(NumberUtils.toInteger(StringUtils.left(income, income.length - 1)));
        } else {
            setEntryChoice(undefined);
        }
    }, [props?.value]);

    const buildSpecificOptions = () => {
        const result = [];
        for (let i = 1; i < 32; i++) {
            result.push({
                label: (i < 10) ? `0${i}` : i,
                value: i,
            });
        }
        return result;
    };

    // noinspection DuplicatedCode
    return (
        <div ref={fieldRef} className={clazzPrefix}>
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
                            <Radio value={EntryChoiceType.BLANK_DAY}>
                                {props?.localeProps?.blankDay || intlLocales.get([locale, 'blankDay']) || intlLocales.get(['en_US', 'blankDay'])}
                            </Radio>
                            <Radio value={EntryChoiceType.EVERY_DAY}>
                                {props?.localeProps?.everyDay || intlLocales.get([locale, 'everyDay']) || intlLocales.get(['en_US', 'everyDay'])}
                            </Radio>
                            <Radio
                                value={EntryChoiceType.FROM_TO}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.FROM_TO), 50);
                                }}
                            >
                                <Space>
                                    {props?.localeProps?.fromToPrefix || intlLocales.get([locale, 'fromToPrefix']) || intlLocales.get(['en_US', 'fromToPrefix'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromToStart'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_TO}
                                                    min={1}
                                                    max={30}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_TO && (ObjectUtils.isEmpty(fromToStart) || NumberUtils.compare(fromToStart, fromToEnd, true) > 0)) ? 'error' : undefined}
                                                    value={fromToStart}
                                                    onChange={setFromToStart}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {props?.localeProps?.fromToMiddle || intlLocales.get([locale, 'fromToMiddle']) || intlLocales.get(['en_US', 'fromToMiddle'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromToEnd'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_TO}
                                                    min={(NumberUtils.toInteger(fromToStart, 0) as number) + 1}
                                                    max={31}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_TO && (ObjectUtils.isEmpty(fromToEnd) || NumberUtils.compare(fromToStart, fromToEnd, true) > 0)) ? 'error' : undefined}
                                                    value={fromToEnd}
                                                    onChange={setFromToEnd}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {props?.localeProps?.fromToSuffix || intlLocales.get([locale, 'fromToSuffix']) || intlLocales.get(['en_US', 'fromToSuffix'])}
                                </Space>
                            </Radio>
                            <Radio
                                value={EntryChoiceType.FROM_INTERVAL}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.FROM_INTERVAL), 50);
                                }}
                            >
                                <Space>
                                    {props?.localeProps?.fromIntervalPrefix || intlLocales.get([locale, 'fromIntervalPrefix']) || intlLocales.get(['en_US', 'fromIntervalPrefix'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromIntervalStart'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_INTERVAL}
                                                    min={1}
                                                    max={30}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_INTERVAL && ObjectUtils.isEmpty(fromIntervalStart)) ? 'error' : undefined}
                                                    value={fromIntervalStart}
                                                    onChange={setFromIntervalStart}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {props?.localeProps?.fromIntervalMiddle || intlLocales.get([locale, 'fromIntervalMiddle']) || intlLocales.get(['en_US', 'fromIntervalMiddle'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromIntervalStep'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_INTERVAL}
                                                    min={1}
                                                    max={31}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.FROM_INTERVAL && ObjectUtils.isEmpty(fromIntervalStep)) ? 'error' : undefined}
                                                    value={fromIntervalStep}
                                                    onChange={setFromIntervalStep}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {props?.localeProps?.fromIntervalSuffix || intlLocales.get([locale, 'fromIntervalSuffix']) || intlLocales.get(['en_US', 'fromIntervalSuffix'])}
                                </Space>
                            </Radio>
                            <Radio
                                value={EntryChoiceType.SPECIFY_DAY}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_DAY), 50);
                                }}
                            >
                                <Space direction='vertical'>
                                    {props?.localeProps?.specificDay || intlLocales.get([locale, 'specificDay']) || intlLocales.get(['en_US', 'specificDay'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <Checkbox.Group
                                                    name='specificDays'
                                                    disabled={entryChoice !== EntryChoiceType.SPECIFY_DAY}
                                                    options={buildSpecificOptions()}
                                                    value={specificDays}
                                                    onChange={(checks: CheckboxValueType[]) => {
                                                        setSpecificDays(checks);
                                                        if (!checks || !checks.length) {
                                                            window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_DAY), 50);
                                                        }
                                                    }}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                </Space>
                            </Radio>
                            <Radio value={EntryChoiceType.LAST_DAY}>
                                {props?.localeProps?.monthLastDay || intlLocales.get([locale, 'monthLastDay']) || intlLocales.get(['en_US', 'monthLastDay'])}
                            </Radio>
                            <Radio
                                value={EntryChoiceType.LAST_BEFORE}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.LAST_BEFORE), 50);
                                }}
                            >
                                <Space>
                                    {props?.localeProps?.monthLastBeforePrefix || intlLocales.get([locale, 'monthLastBeforePrefix']) || intlLocales.get(['en_US', 'monthLastBeforePrefix'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='lastBeforeDay'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.LAST_BEFORE}
                                                    min={1}
                                                    max={31}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.LAST_BEFORE && ObjectUtils.isEmpty(lastBeforeDay)) ? 'error' : undefined}
                                                    value={lastBeforeDay}
                                                    onChange={setLastBeforeDay}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {props?.localeProps?.monthLastBeforeSuffix || intlLocales.get([locale, 'monthLastBeforeSuffix']) || intlLocales.get(['en_US', 'monthLastBeforeSuffix'])}
                                </Space>
                            </Radio>
                            <Radio value={EntryChoiceType.LAST_WORKDAY}>
                                {props?.localeProps?.monthLastWorkday || intlLocales.get([locale, 'monthLastWorkday']) || intlLocales.get(['en_US', 'monthLastWorkday'])}
                            </Radio>
                            <Radio
                                value={EntryChoiceType.NEAREST_WORKDAY}
                                onClick={() => {
                                    window.setTimeout(() => setEntryChoice(EntryChoiceType.NEAREST_WORKDAY), 50);
                                }}
                            >
                                <Space>
                                    {props?.localeProps?.nearestWorkdayPrefix || intlLocales.get([locale, 'nearestWorkdayPrefix']) || intlLocales.get(['en_US', 'nearestWorkdayPrefix'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='nearestWorkday'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.NEAREST_WORKDAY}
                                                    min={1}
                                                    max={31}
                                                    step={1}
                                                    size='small'
                                                    status={(entryChoice === EntryChoiceType.NEAREST_WORKDAY && ObjectUtils.isEmpty(nearestWorkday)) ? 'error' : undefined}
                                                    value={nearestWorkday}
                                                    onChange={setNearestWorkday}
                                                />
                                            );
                                        }}
                                    </Form.Item>
                                    {props?.localeProps?.nearestWorkdaySuffix || intlLocales.get([locale, 'nearestWorkdaySuffix']) || intlLocales.get(['en_US', 'nearestWorkdaySuffix'])}
                                </Space>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
});
