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
import {ConfigProvider, Button, Switch, Space, Input, message as messageApi} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {FieldTimeOutlined} from '@ant-design/icons';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import Trigger, {type TriggerProps} from '@rc-component/trigger';
import '@rc-component/trigger/assets/index.less';
import {If} from '@unikue/react-condition';
import {ElementUtils, NanoidUtils, ObjectUtils, StringUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import cronValidate from 'cron-validate';
import {type TabPosition as RcTabPosition} from 'rc-tabs/es/interface';
import omit from 'rc-util/es/omit';
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import {CardTabs, type CardTabsProps} from '@/layout/CardTabs';
import {AddonInput, type AddonInputProps} from '@/form/AddonInput';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {DesignUtils} from '@/util/DesignUtils';
import {StyleUtils} from '@/util/StyleUtils';
import {TriggerUtils} from '@/util/TriggerUtils';
import {CronInputContext, type CronInputContextProps} from './context';
import {SecondPanel, type SecondPanelProps, type SecondPanelRef} from './component/SecondPanel';
import {MinutePanel, type MinutePanelProps, type MinutePanelRef} from './component/MinutePanel';
import {HourPanel, type HourPanelProps, type HourPanelRef} from './component/HourPanel';
import {DayPanel, type DayPanelProps, type DayPanelRef} from './component/DayPanel';
import {MonthPanel, type MonthPanelProps, type MonthPanelRef} from './component/MonthPanel';
import {WeekPanel, type WeekPanelProps, type WeekPanelRef} from './component/WeekPanel';
import {YearPanel, type YearPanelProps, type YearPanelRef} from './component/YearPanel';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type CronInputRef = {
    isShowSecond: () => boolean;
    isShowYear: () => boolean;
    setShowSecond: () => void;
    setShowYear: () => void;
};


export type CronTabProps = Omit<CardTabsProps, 'addIcon' | 'hideAdd' | 'items' | 'onEdit'> & {
    tabPosition?: Omit<RcTabPosition, 'left' | 'right'>;
};


export type IntlLocaleProps = {
    /**
     * @description OK
     * @description.zh-CN 确定
     * @description.zh-TW 確定
     */
    ok?: string;

    /**
     * @description Second
     * @description.zh-CN 秒
     * @description.zh-TW 秒
     */
    second?: string;

    /**
     * @description Minute
     * @description.zh-CN 分
     * @description.zh-TW 分
     */
    minute?: string;

    /**
     * @description Hour
     * @description.zh-CN 时
     * @description.zh-TW 時
     */
    hour?: string;

    /**
     * @description Day
     * @description.zh-CN 天
     * @description.zh-TW 天
     */
    day?: string;

    /**
     * @description Month
     * @description.zh-CN 月
     * @description.zh-TW 月
     */
    month?: string;

    /**
     * @description Week
     * @description.zh-CN 周
     * @description.zh-TW 周
     */
    week?: string;

    /**
     * @description Year
     * @description.zh-CN 年
     * @description.zh-TW 年
     */
    year?: string;

    /**
     * @description Valid Expression
     * @description.zh-CN 表达式有效
     * @description.zh-TW 表達式有效
     */
    validExpress?: string;

    /**
     * @description Invalid Expression
     * @description.zh-CN 表达式无效
     * @description.zh-TW 表達式無效
     */
    invalidExpress?: string;
};


export type CronInputProps = Omit<AddonInputProps, 'clazzPrefix' | 'addonBefore' | 'addonAfter' | 'cursorBefore' | 'cursorAfter' | 'paddingBefore' | 'paddingAfter'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-cron-input'
     */
    clazzPrefix?: string;

    /**
     * @description The DOM of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点内容
     * @description.zh-TW 默認文本框的標簽節點內容
     * @default <FieldTimeOutlined/>
     */
    addon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The position of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点位置
     * @description.zh-TW 默認文本框的附属節點位置
     * @default 'after'
     */
    addonPos?: WithFalse<BeforeAfterType>;

    /**
     * @description Whether the second tab is allowed or not
     * @description.zh-CN 是否允许秒标签页
     * @description.zh-TW 是否允許秒標籤頁
     * @default true
     */
    allowSecond?: boolean;

    /**
     * @description Whether the year tab is allowed or not
     * @description.zh-CN 是否允许年标签页
     * @description.zh-TW 是否允許年標籤頁
     * @default true
     */
    allowYear?: boolean;

    /**
     * @description Whether the dropdown div is default open or not
     * @description.zh-CN 是否默认展开弹出层
     * @description.zh-TW 是否默認展開彈出層
     */
    defaultOpen?: boolean;

    /**
     * @description Whether the second tab is default show or not
     * @description.zh-CN 是否默认显示秒标签页
     * @description.zh-TW 是否默認顯示秒標籤頁
     */
    defaultShowSecond?: boolean;

    /**
     * @description Whether the year tab is default show or not
     * @description.zh-CN 是否默认显示年标签页
     * @description.zh-TW 是否默認顯示年標籤頁
     */
    defaultShowYear?: boolean;

    /**
     * @description Whether to echo the validation error to console or not
     * @description.zh-CN 是否回显验证错误到控制台
     * @description.zh-TW 是否回顯驗證錯誤到控制臺
     */
    echoValidateError?: boolean;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 弹出层的属性
     * @description.zh-TW 彈出層的屬性
     */
    triggerProps?: Omit<TriggerProps, 'popup' | 'popupVisible' | 'children'>;

    /**
     * @description The properties of the tabs
     * @description.zh-CN 标签页的属性
     * @description.zh-TW 標籤頁的屬性
     */
    tabsProps?: CronTabProps;

    /**
     * @description The properties of the second panel
     * @description.zh-CN 秒标签页的属性
     * @description.zh-TW 秒標籤頁的屬性
     */
    secondPanelProps?: SecondPanelProps;

    /**
     * @description The properties of the minute panel
     * @description.zh-CN 分标签页的属性
     * @description.zh-TW 分標籤頁的屬性
     */
    minutePanelProps?: MinutePanelProps;

    /**
     * @description The properties of the hour panel
     * @description.zh-CN 时标签页的属性
     * @description.zh-TW 時標籤頁的屬性
     */
    hourPanelProps?: HourPanelProps;

    /**
     * @description The properties of the day panel
     * @description.zh-CN 天标签页的属性
     * @description.zh-TW 天標籤頁的屬性
     */
    dayPanelProps?: DayPanelProps;

    /**
     * @description The properties of the month panel
     * @description.zh-CN 月标签页的属性
     * @description.zh-TW 月標籤頁的屬性
     */
    monthPanelProps?: MonthPanelProps;

    /**
     * @description The properties of the week panel
     * @description.zh-CN 周标签页的属性
     * @description.zh-TW 周標籤頁的屬性
     */
    weekPanelProps?: WeekPanelProps;

    /**
     * @description The properties of the year panel
     * @description.zh-CN 年标签页的属性
     * @description.zh-TW 年標籤頁的屬性
     */
    yearPanelProps?: YearPanelProps;

    /**
     * @description Whether to validate field with rules
     * @description.zh-CN 是否校验控件
     * @description.zh-TW 是否校驗控件
     * @default true
     */
    validateRule?: boolean;

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
     * @description The callback function when validation error occurred
     * @description.zh-CN 验证错误时的回调函数
     * @description.zh-TW 驗證錯誤時的回調函數
     */
    onValidateError?: (express?: string, errors?: string[], income?: boolean) => void;
} & Pick<CronInputContextProps, 'allowOkEcho'>;


/**
 * Component for displaying a text input box with a dropdown div that can generate cron expression
 *
 * @author David Hsing
 * @see "http://crontab.org/"
 * @see "https://freeformatter.com/cron-expression-generator-quartz.html"
 */
export const CronInput: React.ForwardRefExoticComponent<CronInputProps & React.RefAttributes<CronInputRef>> = React.forwardRef((props?: CronInputProps, ref?: any) => {
    CronInput.displayName = 'CronInput';

    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const formContext = React.useContext(FormContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-cron-input';
    const subClazzPrefix = props?.tabsProps?.clazzPrefix ?? 'abp-card-tabs';
    const intlType = useIntl();

    // Initialize the default props
    const {
        addon = <FieldTimeOutlined/>,
        addonPos = 'after',
        allowSecond = true,
        allowYear = true,
        allowOkEcho = true,
        validateRule = true,
        proField = true,
        locale = intlType.locale,
    } = props ?? {};

    const [messageInvoker, messageContext] = messageApi.useMessage();
    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [showSecond, setShowSecond] = React.useState<boolean>(props?.defaultShowSecond ?? false);
    const [showYear, setShowYear] = React.useState<boolean>(props?.defaultShowYear ?? false);
    const [triggerOpen, setTriggerOpen] = React.useState<boolean>(props?.defaultOpen ?? false);
    const [triggerOffset, setTriggerOffset] = React.useState<number>(4);
    const closeTimerRef = React.useRef<NodeJS.Timeout | null>(null);
    const fieldStyle = useFieldStyle(clazzPrefix, subClazzPrefix);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isShowSecond: (): boolean => {
            return showSecond;
        },
        isShowYear: (): boolean => {
            return showYear;
        },
        setShowSecond: (show: boolean): void => {
            setShowSecond(show);
        },
        setShowYear: (show: boolean): void => {
            setShowYear(show);
        }
    }));

    const secondPanelRef = React.useRef<SecondPanelRef>(null);
    const minutePanelRef = React.useRef<MinutePanelRef>(null);
    const hourPanelRef = React.useRef<HourPanelRef>(null);
    const dayPanelRef = React.useRef<DayPanelRef>(null);
    const monthPanelRef = React.useRef<MonthPanelRef>(null);
    const weekPanelRef = React.useRef<WeekPanelRef>(null);
    const yearPanelRef = React.useRef<YearPanelRef>(null);

    const [secondExpress, setSecondExpress] = React.useState<string>();
    const [minuteExpress, setMinuteExpress] = React.useState<string>();
    const [hourExpress, setHourExpress] = React.useState<string>();
    const [dayExpress, setDayExpress] = React.useState<string>();
    const [monthExpress, setMonthExpress] = React.useState<string>();
    const [weekExpress, setWeekExpress] = React.useState<string>();
    const [yearExpress, setYearExpress] = React.useState<string>();

    const [incomeExpress, setIncomeExpress] = React.useState<string | undefined>(props?.initialValue ?? (props?.fieldProps?.value as string));
    const outcomeExpresses = [secondExpress, minuteExpress, hourExpress, dayExpress, monthExpress, weekExpress, yearExpress];

    const clearSubExpresses = () => {
        setSecondExpress(undefined);
        setMinuteExpress(undefined);
        setHourExpress(undefined);
        setDayExpress(undefined);
        setMonthExpress(undefined);
        setWeekExpress(undefined);
        setYearExpress(undefined);
    };

    const validateOptions = {
        override: {
            useSeconds: allowSecond && showSecond,
            useYears: allowYear && showYear,
            useAliases: true,
            useBlankDay: true,
            useLastDayOfMonth: true,
            useNearestWeekday: true,
            useLastDayOfWeek: true,
            useNthWeekdayOfMonth: true,
        }
    };

    // Monitor ant-form-item-additional changes and update offset
    // noinspection DuplicatedCode
    React.useEffect(() => {
        const entryElement = document.querySelector<HTMLElement>(`.${clazzPrefix}-entry-${fieldId}`);
        if (!entryElement) {
            return;
        }
        const updateOffset = () => {
            const prefixCls = configContext?.getPrefixCls('') ?? 'ant';
            const additionalHeight = DesignUtils.getFormAdditionalHeight(entryElement, prefixCls);
            setTriggerOffset(4 - additionalHeight);
        };
        updateOffset();

        const observer = new MutationObserver(updateOffset);
        observer.observe(entryElement, {childList: true, subtree: true});
        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (!incomeExpress) {
            clearSubExpresses();
            return;
        }
        const validate = cronValidate(incomeExpress, validateOptions);
        if (validate.isError()) {
            ConsoleUtils.warn(!props?.echoValidateError, false, 'CronInput', `Field '${props?.name ?? props?.fieldProps?.name}' validation error: ${validate.error.join('; ')}`);
            clearSubExpresses();
            props?.onValidateError?.(incomeExpress, validate.error, true);
            return;
        }
        const express = validate.getValue();
        setSecondExpress(express.seconds);
        setMinuteExpress(express.minutes);
        setHourExpress(express.hours);
        setDayExpress(express.daysOfMonth);
        setMonthExpress(express.months);
        setWeekExpress(express.daysOfWeek);
        setYearExpress(express.years);
    }, [incomeExpress]);

    const entryImmutable = editContext.mode === 'read' || props?.proFieldProps?.mode === 'read' || props?.fieldProps?.readOnly || props?.proFieldProps?.readonly || props?.disabled || props?.fieldProps?.disabled;

    const echoToEntry = () => {
        if (entryImmutable) {
            return;
        }
        const outcome = StringUtils.join(outcomeExpresses, ' ', (item: any) => !!item);
        if (!outcome) {
            return;
        }
        const validate = cronValidate(outcome, validateOptions);
        if (validate.isError()) {
            ConsoleUtils.warn(!props?.echoValidateError, false, 'CronInput', `Field '${props?.name ?? props?.fieldProps?.name}' validation error: ${validate.error.join('; ')}`);
            props?.onValidateError?.(outcome, validate.error, false);
            return;
        }
        const inspect = document.querySelector<HTMLInputElement>(`[data-cron-input-id='${fieldId}']`);
        ElementUtils.setElementValue(inspect, outcome);
    };

    React.useEffect(() => {
        if (allowOkEcho) {
            return;
        }
        echoToEntry();
    }, [outcomeExpresses, showSecond, showYear]);

    const addonEntryDom = (typeof addon === 'function') ? addon() : addon;
    const buildEntryAddonDom = (before: boolean) => {
        return ((before && addonPos === 'before') || (!before && addonPos === 'after')) ? addonEntryDom : undefined;
    };

    // noinspection DuplicatedCode
    const renderEntryReadonly = (dom: React.ReactNode) => (
        <div className={classNames(clazzPrefix, fieldStyle.hashId, `${clazzPrefix}-entry-readonly`, (addonPos ? `${clazzPrefix}-entry-readonly-${addonPos}` : undefined))}>
            {addonPos === 'before' && (
                <span className={classNames(`${clazzPrefix}-entry-readonly-addon`, `${clazzPrefix}-entry-readonly-addon-${addonPos}`)}>
                    {addonEntryDom}
                </span>
            )}
            <div className={`${clazzPrefix}-entry-readonly-content`}>
                {dom || props?.proFieldProps?.emptyText || '-'}
            </div>
            {addonPos === 'after' && (
                <span className={classNames(`${clazzPrefix}-entry-readonly-addon`, `${clazzPrefix}-entry-readonly-addon-${addonPos}`)}>
                    {addonEntryDom}
                </span>
            )}
        </div>
    );

    const buildEntryDom = () => {
        const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'addonBefore', 'addonAfter', 'onChange']);
        if (proField) {
            const restProps = !props ? {} : omit(props, ['fieldProps', 'proFieldProps', 'rules', 'clazzPrefix', 'defaultOpen', 'triggerProps', 'tabsProps', 'secondPanelProps', 'validateRule', 'proField', 'locale', 'localeProps']);
            return (
                <div className={clazzPrefix}>
                    <AddonInput
                        addonBefore={buildEntryAddonDom(true)}
                        addonAfter={buildEntryAddonDom(false)}
                        cursorBefore={addonPos === 'before' ? 'pointer' : undefined}
                        cursorAfter={addonPos === 'after' ? 'pointer' : undefined}
                        fieldProps={{
                            className: classNames(`${clazzPrefix}-entry-${fieldId}`, props?.className ?? props?.fieldProps?.className),
                            ...omitFieldProps,
                            onChange: (event: any) => {
                                props?.fieldProps?.onChange?.(event);
                                if (!event.isDefaultPrevented()) {
                                    setIncomeExpress(event.target.value);
                                }
                            },
                            'data-cron-input-id': fieldId,
                        }}
                        proField={proField}
                        proFieldProps={{
                            render: (dom: React.ReactNode) => props?.proFieldProps?.render(dom) ?? renderEntryReadonly(dom),
                            ...(!props?.proFieldProps ? {} : omit(props.proFieldProps, ['render']))
                        }}
                        rules={[
                            ...(props?.rules ?? []),
                            !validateRule ? {} : {
                                validator: async (_rule: any, value: string) => {
                                    if (!value) {
                                        return undefined;
                                    }
                                    const validate = cronValidate(value, validateOptions);
                                    if (validate.isValid()) {
                                        return Promise.resolve(ObjectUtils.firstNotNil(props?.localeProps?.validExpress, intlLocales.get([locale, 'validExpress']), intlLocales.get(['en_US', 'validExpress'])));
                                    }
                                    return Promise.reject(ObjectUtils.firstNotNil(props?.localeProps?.invalidExpress, intlLocales.get([locale, 'invalidExpress']), intlLocales.get(['en_US', 'invalidExpress'])));
                                }
                            }
                        ]}
                        {...restProps}
                    />
                </div>
            )
        } else {
            const restProps = omit(omitFieldProps, ['placeholder']);
            return (
                <div className={clazzPrefix}>
                    <Space.Compact className={`${clazzPrefix}-space`} style={{width: '100%'}}>
                        {addonPos === 'before' && (
                            <Space.Addon className={`${clazzPrefix}-compact-before`} style={{cursor: 'pointer'}}>
                                {buildEntryAddonDom(true)}
                            </Space.Addon>
                        )}
                        <Input
                            className={classNames(`${clazzPrefix}-entry-${fieldId}`, props?.className ?? props?.fieldProps?.className)}
                            placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                            data-cron-input-id={fieldId}
                            {...restProps}
                            onChange={(event: any) => {
                                props?.fieldProps?.onChange?.(event);
                                if (event.isDefaultPrevented()) {
                                    return;
                                }
                                if (validateRule && !!event.target.value) {
                                    const validate = cronValidate(event.target.value, validateOptions);
                                    if (validate.isError()) {
                                        messageInvoker.warning(ObjectUtils.firstNotNil(props?.localeProps?.invalidExpress, intlLocales.get([locale, 'invalidExpress']), intlLocales.get(['en_US', 'invalidExpress'])));
                                    }
                                }
                                setIncomeExpress(event.target.value);
                            }}
                            {...omitFieldProps}
                        />
                        {addonPos === 'after' && (
                            <Space.Addon className={`${clazzPrefix}-compact-after`} style={{cursor: 'pointer'}}>
                                {buildEntryAddonDom(false)}
                            </Space.Addon>
                        )}
                    </Space.Compact>
                </div>
            );
        }
    };

    if (entryImmutable) {
        return buildEntryDom();
    }

    // noinspection DuplicatedCode
    const handleWindowResize = () => {
        const inspect = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-entry-${fieldId}`);
        const sponsor = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-popup-${fieldId}`);
        if (inspect && sponsor) {
            StyleUtils.addStyle(sponsor, 'width', `${inspect.offsetWidth}px`);
            StyleUtils.addStyle(sponsor, 'min-width', `${inspect.offsetWidth}px`);
        }
    };

    React.useLayoutEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const buildPopupDom = () => {
        const tabItems: CardTabsProps['items'] = [
            {
                key: 'minute',
                label: ObjectUtils.firstNotNil(props?.localeProps?.minute, intlLocales.get([locale, 'minute']), intlLocales.get(['en_US', 'minute'])),
                children: (
                    <MinutePanel
                        ref={minutePanelRef}
                        disabled={entryImmutable}
                        value={minuteExpress}
                        onChange={(value?: string) => {
                            setMinuteExpress(value);
                            props?.minutePanelProps?.onChange?.(value);
                        }}
                        locale={props?.minutePanelProps?.locale ?? props?.locale}
                        {...(!props?.minutePanelProps ? {} : omit(props.minutePanelProps, ['value', 'onChange', 'locale']))}
                    />
                )
            },
            {
                key: 'hour',
                label: ObjectUtils.firstNotNil(props?.localeProps?.hour, intlLocales.get([locale, 'hour']), intlLocales.get(['en_US', 'hour'])),
                children: (
                    <HourPanel
                        ref={hourPanelRef}
                        disabled={entryImmutable}
                        value={hourExpress}
                        onChange={(value?: string) => {
                            setHourExpress(value);
                            props?.hourPanelProps?.onChange?.(value);
                        }}
                        locale={props?.hourPanelProps?.locale ?? props?.locale}
                        {...(!props?.hourPanelProps ? {} : omit(props.hourPanelProps, ['value', 'onChange', 'locale']))}
                    />
                )
            },
            {
                key: 'day',
                label: ObjectUtils.firstNotNil(props?.localeProps?.day, intlLocales.get([locale, 'day']), intlLocales.get(['en_US', 'day'])),
                children: (
                    <DayPanel
                        ref={dayPanelRef}
                        disabled={entryImmutable}
                        value={dayExpress}
                        onChange={(value?: string) => {
                            setDayExpress(value);
                            props?.dayPanelProps?.onChange?.(value);
                        }}
                        locale={props?.dayPanelProps?.locale ?? props?.locale}
                        {...(!props?.dayPanelProps ? {} : omit(props.dayPanelProps, ['value', 'onChange', 'locale']))}
                    />
                )
            },
            {
                key: 'month',
                label: ObjectUtils.firstNotNil(props?.localeProps?.month, intlLocales.get([locale, 'month']), intlLocales.get(['en_US', 'month'])),
                children: (
                    <MonthPanel
                        ref={monthPanelRef}
                        disabled={entryImmutable}
                        value={monthExpress}
                        onChange={(value?: string) => {
                            setMonthExpress(value);
                            props?.monthPanelProps?.onChange?.(value);
                        }}
                        locale={props?.monthPanelProps?.locale ?? props?.locale}
                        {...(!props?.monthPanelProps ? {} : omit(props.monthPanelProps, ['value', 'onChange', 'locale']))}
                    />
                )
            },
            {
                key: 'week',
                label: ObjectUtils.firstNotNil(props?.localeProps?.week, intlLocales.get([locale, 'week']), intlLocales.get(['en_US', 'week'])),
                children: (
                    <WeekPanel
                        ref={weekPanelRef}
                        disabled={entryImmutable}
                        value={weekExpress}
                        onChange={(value?: string) => {
                            setWeekExpress(value);
                            props?.weekPanelProps?.onChange?.(value);
                        }}
                        locale={props?.weekPanelProps?.locale ?? props?.locale}
                        {...(!props?.weekPanelProps ? {} : omit(props.weekPanelProps, ['value', 'onChange', 'locale']))}
                    />
                )
            }
        ];
        if (allowSecond && showSecond) {
            tabItems.unshift({
                key: 'second',
                label: ObjectUtils.firstNotNil(props?.localeProps?.second, intlLocales.get([locale, 'second']), intlLocales.get(['en_US', 'second'])),
                children: (
                    <SecondPanel
                        ref={secondPanelRef}
                        disabled={entryImmutable}
                        value={secondExpress}
                        onChange={(value?: string) => {
                            setSecondExpress(value);
                            props?.secondPanelProps?.onChange?.(value);
                        }}
                        locale={props?.secondPanelProps?.locale ?? props?.locale}
                        {...(!props?.secondPanelProps ? {} : omit(props.secondPanelProps, ['value', 'onChange', 'locale']))}
                    />
                ),
            });
        }
        if (allowYear && showYear) {
            tabItems.push({
                key: 'year',
                label: ObjectUtils.firstNotNil(props?.localeProps?.year, intlLocales.get([locale, 'year']), intlLocales.get(['en_US', 'year'])),
                children: (
                    <YearPanel
                        ref={yearPanelRef}
                        disabled={entryImmutable}
                        value={yearExpress}
                        onChange={(value?: string) => {
                            setYearExpress(value);
                            props?.yearPanelProps?.onChange?.(value);
                        }}
                        locale={props?.yearPanelProps?.locale ?? props?.locale}
                        {...(!props?.yearPanelProps ? {} : omit(props.yearPanelProps, ['value', 'onChange', 'locale']))}
                    />
                ),
            });
        }
        const omitTabsProps = !props?.tabsProps ? {} : omit(props.tabsProps, ['defaultActiveKey', 'size', 'tabBarExtraContent']);
        return (
            <div
                onMouseEnter={() => {
                    // Cancel close when mouse enters popup
                    if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current);
                        closeTimerRef.current = null;
                    }
                }}
                onMouseLeave={() => {
                    // Delay close to allow mouse to move back to trigger
                    if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current);
                    }
                    closeTimerRef.current = setTimeout(() => {
                        setTriggerOpen(false);
                        props?.triggerProps?.onOpenChange?.(false);
                    }, 200);
                }}
            >
                <CronInputContext.Provider
                    value={{
                        fieldId: fieldId,
                        allowOkEcho: allowOkEcho,
                        popupOpen: triggerOpen,
                    }}
                >
                    <CardTabs
                        items={tabItems}
                        defaultActiveKey={props?.tabsProps?.defaultActiveKey ?? 'minute'}
                        size={props?.tabsProps?.size ?? 'extra-small'}
                        tabBarExtraContent={(
                            <>
                                {props?.tabsProps?.tabBarExtraContent}
                                <If condition={allowSecond || allowYear || allowOkEcho} validation={false}>
                                    <div className={`${clazzPrefix}-tabs-extra`}>
                                        <Space size={'middle'}>
                                            <If condition={allowSecond && !entryImmutable} validation={false}>
                                                <Switch
                                                    checked={showSecond}
                                                    size='small'
                                                    checkedChildren={ObjectUtils.firstNotNil(props?.localeProps?.second, intlLocales.get([locale, 'second']), intlLocales.get(['en_US', 'second']))}
                                                    unCheckedChildren={ObjectUtils.firstNotNil(props?.localeProps?.second, intlLocales.get([locale, 'second']), intlLocales.get(['en_US', 'second']))}
                                                    onChange={(checked: boolean) => {
                                                        setShowSecond(checked);
                                                        const rawName = props?.name ?? props?.fieldProps?.name;
                                                        if (validateRule && rawName && formContext?.form && formContext.form.getFieldValue(rawName)) {
                                                            formContext.form.validateFields([rawName]);
                                                        }
                                                    }}
                                                />
                                            </If>
                                            <If condition={allowYear && !entryImmutable} validation={false}>
                                                <Switch
                                                    checked={showYear}
                                                    size='small'
                                                    checkedChildren={ObjectUtils.firstNotNil(props?.localeProps?.year, intlLocales.get([locale, 'year']), intlLocales.get(['en_US', 'year']))}
                                                    unCheckedChildren={ObjectUtils.firstNotNil(props?.localeProps?.year, intlLocales.get([locale, 'year']), intlLocales.get(['en_US', 'year']))}
                                                    onChange={(checked: boolean) => {
                                                        setShowYear(checked);
                                                        const rawName = props?.name ?? props?.fieldProps?.name;
                                                        if (validateRule && rawName && formContext?.form && formContext.form.getFieldValue(rawName)) {
                                                            formContext.form.validateFields([rawName]);
                                                        }
                                                    }}
                                                />
                                            </If>
                                            <If condition={allowOkEcho && !entryImmutable} validation={false}>
                                                <Button
                                                    className={`${clazzPrefix}-ok-echo`}
                                                    size='small'
                                                    type='primary'
                                                    onClick={() => {
                                                        echoToEntry();
                                                        setTriggerOpen(false);
                                                    }}
                                                >
                                                    {ObjectUtils.firstNotNil(props?.localeProps?.ok, intlLocales.get([locale, 'ok']), intlLocales.get(['en_US', 'ok']))}
                                                </Button>
                                            </If>
                                        </Space>
                                    </div>
                                </If>
                            </>
                        )}
                        {...omitTabsProps}
                    />
                </CronInputContext.Provider>
            </div>
        );
    };

    const omitTriggerProps = !props?.triggerProps ? {} : omit(props?.triggerProps, ['action', 'builtinPlacements', 'getPopupContainer', 'popupAlign', 'popupClassName', 'stretch', 'onOpenChange']);

    return (
        <>
            {messageContext}
            <Trigger
                action={props?.triggerProps?.action ?? (entryImmutable ? ['hover'] : ['click'])}
                builtinPlacements={props?.triggerProps?.builtinPlacements ?? TriggerUtils.buildPlacements()}
                getPopupContainer={(trigger: HTMLElement) => {
                    return props?.triggerProps?.getPopupContainer?.(trigger) || trigger?.closest('form')?.parentElement || document.body;
                }}
                popup={buildPopupDom()}
                popupAlign={(props?.triggerProps?.popupPlacement || props?.triggerProps?.popupAlign) ? props?.triggerProps?.popupAlign : {
                    points: ['tl', 'bl'],
                    offset: [0, triggerOffset],
                }}
                popupClassName={classNames(`${clazzPrefix}-popup`, fieldStyle.hashId, `${clazzPrefix}-popup-${fieldId}`, (!entryImmutable ? undefined : `${clazzPrefix}-popup-immutable`), props?.triggerProps?.popupClassName)}
                popupVisible={triggerOpen}
                stretch={props?.triggerProps?.stretch ?? 'width'}
                onOpenChange={(open: boolean) => {
                    if (!open && (secondPanelRef.current?.isCompositing() || minutePanelRef.current?.isCompositing() || hourPanelRef.current?.isCompositing() || dayPanelRef.current?.isCompositing() || monthPanelRef.current?.isCompositing() || weekPanelRef.current?.isCompositing() || yearPanelRef.current?.isCompositing())) {
                        return;
                    }
                    setTriggerOpen(open);
                    props?.triggerProps?.onOpenChange?.(open);
                }}
                {...omitTriggerProps}
            >
                <div data-cron-input-entry={fieldId}>
                    {buildEntryDom()}
                </div>
            </Trigger>
        </>
    );
});
