/*
 * Copyright (c) 2023- Yookue Ltd. All rights reserved.
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
import {intlLocales} from './intl-locales';


export type HourPanelRef = {
    isCompositing: () => boolean;
};


export enum EntryChoiceType {
    EVERY_HOUR = 'every-hour',
    FROM_TO = 'from-to',
    FROM_INTERVAL = 'from-interval',
    SPECIFY_HOUR = 'specific-hour',
}


export type IntlLocaleProps = {
    /**
     * @description Every Hour
     * @description.zh-CN 每时
     * @description.zh-TW 每時
     */
    everyHour?: string;

    /**
     * @description Every hour between hour
     * @description.zh-CN 每时，开始于
     * @description.zh-TW 每時，開始於
     */
    fromToPrefix?: string;

    /**
     * @description and hour
     * @description.zh-CN 时，到第
     * @description.zh-TW 時，到第
     */
    fromToMiddle?: string;

    /**
     * @description ''
     * @description.zh-CN 时
     * @description.zh-TW 時
     */
    fromToSuffix?: string;

    /**
     * @description Starting at hour
     * @description.zh-CN 从第
     * @description.zh-TW 從第
     */
    fromIntervalPrefix?: string;

    /**
     * @description and every
     * @description.zh-CN 时开始，每
     * @description.zh-TW 時開始，每
     */
    fromIntervalMiddle?: string;

    /**
     * @description hours(s)
     * @description.zh-CN 时
     * @description.zh-TW 時
     */
    fromIntervalSuffix?: string;

    /**
     * @description Specific hour(s)
     * @description.zh-CN 到
     * @description.zh-TW 到
     */
    specificHour?: string;
};


export type HourPanelProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-cron-input-hour-panel'
     */
    clazzPrefix?: string;

    /**
     * @description The field id of the component
     * @description.zh-CN 组件的 ID
     * @description.zh-TW 組件的 ID
     */
    fieldId?: string;

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
 * Component for generating hour option for cron expression
 *
 * @author David Hsing
 */
export const HourPanel: React.ForwardRefExoticComponent<HourPanelProps & React.RefAttributes<HourPanelRef>> = React.forwardRef((props?: HourPanelProps, ref?: any) => {
    HourPanel.displayName = 'CronInputHourPanel';

    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-cron-input-hour-panel');
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
    const [specificHours, setSpecificHours] = React.useState<CheckboxValueType[]>();
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
        if (!!startAlias && startAlias < 23 && !!endAlias && startAlias >= endAlias) {
            setFromToEnd(startAlias + 1);
        }
    }, [fromToStart]);

    React.useEffect(() => {
        // const choice = entryChoice ?? formInstance.getFieldValue('entryChoice');
        switch (entryChoice) {
            case EntryChoiceType.EVERY_HOUR:
                setUnitExpress('*');
                break;
            case EntryChoiceType.FROM_TO:
                setUnitExpress(ObjectUtils.anyEmpty([fromToStart, fromToEnd]) ? undefined : `${fromToStart}-${fromToEnd}`);
                break;
            case EntryChoiceType.FROM_INTERVAL:
                setUnitExpress(ObjectUtils.anyEmpty([fromIntervalStart, fromIntervalStep]) ? undefined : `${fromIntervalStart}/${fromIntervalStep}`);
                break;
            case EntryChoiceType.SPECIFY_HOUR:
                setUnitExpress(ObjectUtils.isEmpty(specificHours) ? undefined : StringUtils.join(specificHours, ','));
                break;
            default:
                break;
        }
    }, [entryChoice, fromToStart, fromToEnd, fromIntervalStart, fromIntervalStep, specificHours]);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        props?.onChange?.(unitExpress);
    }, [unitExpress]);

    React.useEffect(() => {
        const income = props?.value as string;
        if (income === '*') {
            setEntryChoice(EntryChoiceType.EVERY_HOUR);
        } else if (income && /^\d+-\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_TO);
            setFromToStart(NumberUtils.toInteger(StringUtils.substringBefore(income, '-')));
            setFromToEnd(NumberUtils.toInteger(StringUtils.substringAfter(income, '-')));
        } else if (income && /^\d+\/\d+$/g.test(income)) {
            setEntryChoice(EntryChoiceType.FROM_INTERVAL);
            setFromIntervalStart(StringUtils.substringBefore(income, '/'));
            setFromIntervalStep(StringUtils.substringAfter(income, '/'));
        } else if (income && /^(\d{1,2})(,\d{1,2})*$/g.test(income)) {
            setEntryChoice(EntryChoiceType.SPECIFY_HOUR);
            setSpecificHours(income.includes(',') ? income.split(',').map(item => NumberUtils.toInteger(item) as number) : [NumberUtils.toInteger(income) as number]);
        } else {
            setEntryChoice(undefined);
        }
    }, [props?.value]);

    const buildSpecificOptions = () => {
        const result = [];
        for (let i = 0; i < 24; i++) {
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
                name={`${clazzPrefix}-${props?.fieldId ?? NanoidUtils.getPopularId()}`}
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
                            <Radio value={EntryChoiceType.EVERY_HOUR}>
                                {props?.localeProps?.everyHour || intlLocales.get([locale, 'everyHour']) || intlLocales.get(['en_US', 'everyHour'])}
                            </Radio>
                            <Radio value={EntryChoiceType.FROM_TO} onClick={() => window.setTimeout(() => setEntryChoice(EntryChoiceType.FROM_TO), 50)}>
                                <Space>
                                    {props?.localeProps?.fromToPrefix || intlLocales.get([locale, 'fromToPrefix']) || intlLocales.get(['en_US', 'fromToPrefix'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromToStart'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_TO}
                                                    min={0}
                                                    max={22}
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
                                                    max={23}
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
                            <Radio value={EntryChoiceType.FROM_INTERVAL} onClick={() => window.setTimeout(() => setEntryChoice(EntryChoiceType.FROM_INTERVAL), 50)}>
                                <Space>
                                    {props?.localeProps?.fromIntervalPrefix || intlLocales.get([locale, 'fromIntervalPrefix']) || intlLocales.get(['en_US', 'fromIntervalPrefix'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <InputNumber
                                                    name='fromIntervalStart'
                                                    autoComplete='off'
                                                    disabled={entryChoice !== EntryChoiceType.FROM_INTERVAL}
                                                    min={0}
                                                    max={23}
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
                                                    max={24}
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
                            <Radio value={EntryChoiceType.SPECIFY_HOUR} onClick={() => window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_HOUR), 50)}>
                                <Space direction='vertical'>
                                    {props?.localeProps?.specificHour || intlLocales.get([locale, 'specificHour']) || intlLocales.get(['en_US', 'specificHour'])}
                                    <Form.Item noStyle={true} shouldUpdate={true}>
                                        {() => {
                                            return (
                                                <Checkbox.Group
                                                    name='specificHours'
                                                    disabled={entryChoice !== EntryChoiceType.SPECIFY_HOUR}
                                                    options={buildSpecificOptions()}
                                                    value={specificHours}
                                                    onChange={setSpecificHours}
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
