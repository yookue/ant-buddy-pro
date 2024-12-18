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
import {ConfigProvider, Form, Checkbox, InputNumber, Radio, Switch, Space, type RadioChangeEvent} from 'antd';
import {type CheckboxValueType} from 'antd/es/checkbox/Group';
import {useIntl} from '@ant-design/pro-provider';
import {MapUtils, NanoidUtils, NumberUtils, ObjectUtils, RegexUtils, StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import {type ValueType as NumberValueType} from 'rc-input-number/es/utils/MiniDecimal';
import {BadgeRibbon} from '@/field/BadgeRibbon';
import {CronInputContext} from '@/form/CronInput/context';
import {intlLocales} from './intl-locales';


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
     * @description Specific week(s)
     * @description.zh-CN 到
     * @description.zh-TW 到
     */
    specificWeek?: string;

    /**
     * @description The last bellowing of the month
     * @description.zh-CN 月度的最后一个
     * @description.zh-TW 月度的最後壹個
     */
    monthLastWeek?: string;

    /**
     * @description The
     * @description.zh-CN 月度的第
     * @description.zh-TW 月度的第
     */
    monthOrderWeekPrefix?: string;

    /**
     * @description bellowing of the month
     * @description.zh-CN '个'
     * @description.zh-TW '個'
     */
    monthOrderWeekSuffix?: string;
};


export type WeekPanelProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-cron-input-month-panel'
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
     * @description Whether the parent container is currently open or not
     * @description.zh-CN 父容器是否为打开状态
     * @description.zh-TW 父容器是否為打開狀態
     */
    containerOpen?: boolean;

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
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const entryContext = React.useContext(CronInputContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-cron-input-month-panel');
    const intlType = useIntl();

    // Initialize the default props
    const {
        allowAlias = true,
        defaultShowAlias = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldRef = React.useRef<HTMLDivElement>(null);
    const compositionRef = React.useRef<boolean>(false);
    const [showAlias, setShowAlias] = React.useState<boolean>(defaultShowAlias);
    const [entryChoice, setEntryChoice] = React.useState<EntryChoiceType>();
    const [specificWeeks, setSpecificWeeks] = React.useState<CheckboxValueType[]>();
    const [lastWeek, setLastWeek] = React.useState<string>();
    const [orderWeekSort, setOrderWeekSort] = React.useState<NumberValueType | null>();
    const [orderWeekValue, setOrderWeekValue] = React.useState<NumberValueType | null>();
    const [unitExpress, setUnitExpress] = React.useState<string | undefined>(props?.value as string);

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
            case EntryChoiceType.SPECIFY_WEEK:
                if (!specificWeeks || !specificWeeks.length) {
                    setUnitExpress(undefined);
                    break;
                }
                if (!allowAlias || !showAlias) {
                    setUnitExpress(StringUtils.join(specificWeeks.map(item => ((item === 7 || item === '7') && props?.sundayAsZero) ? 0 : item), ','));
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
                    setUnitExpress(`${((orderWeekValue === 7 || orderWeekValue === '7') && props?.sundayAsZero) ? 0 : orderWeekValue}#${orderWeekSort}`);
                } else {
                    setUnitExpress(`${weekAliases.get(orderWeekValue.toString())}#${orderWeekSort}`);
                }
                break;
            default:
                break;
        }
    }, [entryChoice, specificWeeks, lastWeek, orderWeekSort, orderWeekValue, allowAlias, showAlias]);

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
        } else if (income && (/^\d+$/g.test(income) || /^[A-Z]{3}$/g.test(income) || income.includes(','))) {
            setEntryChoice(EntryChoiceType.SPECIFY_WEEK);
            if (/^\d+$/g.test(income)) {
                setSpecificWeeks([NumberUtils.toInteger(income) as number]);
            } else if (/^[A-Z]{3}$/g.test(income)) {
                setSpecificWeeks([NumberUtils.toInteger(MapUtils.getKey(weekAliases, income)) as number]);
            } else {
                setSpecificWeeks(income.split(',').map(item => {
                    if (RegexUtils.isNumeric(item)) {
                        return (item === '0') ? 7 : NumberUtils.toInteger(item) as number;
                    }
                    return NumberUtils.toInteger(MapUtils.getKey(weekAliases, item)) as number;
                }));
            }
        } else if (income && /^\d+L$/g.test(income)) {
            setEntryChoice(EntryChoiceType.LAST_WEEK);
            setLastWeek(StringUtils.left(income, income.length - 1) as string);
        } else if (income && (/^\d+#\d+$/g.test(income) || /^[A-Z]{3}#\d+$/g.test(income))) {
            setEntryChoice(EntryChoiceType.ORDER_WEEK);
            setOrderWeekSort(NumberUtils.toInteger(StringUtils.substringAfter(income, '#')));
            const valueAlias = StringUtils.substringBefore(income, '#');
            if (RegexUtils.isNumeric(valueAlias)) {
                setOrderWeekValue((valueAlias === '0') ? 7 : NumberUtils.toInteger(valueAlias));
            } else {
                setOrderWeekValue(NumberUtils.toInteger(MapUtils.getKey(weekAliases, valueAlias)));
            }
        } else {
            setEntryChoice(undefined);
        }
    }, [props?.value]);

    const buildWeekOptions = () => {
        return [
            {
                label: props?.localeProps?.monday || intlLocales.get([locale, 'monday']) || intlLocales.get(['en_US', 'monday']),
                value: 1,
            },
            {
                label: props?.localeProps?.tuesday || intlLocales.get([locale, 'tuesday']) || intlLocales.get(['en_US', 'tuesday']),
                value: 2,
            },
            {
                label: props?.localeProps?.wednesday || intlLocales.get([locale, 'wednesday']) || intlLocales.get(['en_US', 'wednesday']),
                value: 3,
            },
            {
                label: props?.localeProps?.thursday || intlLocales.get([locale, 'thursday']) || intlLocales.get(['en_US', 'thursday']),
                value: 4,
            },
            {
                label: props?.localeProps?.friday || intlLocales.get([locale, 'friday']) || intlLocales.get(['en_US', 'friday']),
                value: 5,
            },
            {
                label: props?.localeProps?.saturday || intlLocales.get([locale, 'saturday']) || intlLocales.get(['en_US', 'saturday']),
                value: 6,
            },
            {
                label: props?.localeProps?.sunday || intlLocales.get([locale, 'sunday']) || intlLocales.get(['en_US', 'sunday']),
                value: 7,
            }
        ];
    };

    // noinspection DuplicatedCode
    return (
        <div ref={fieldRef} className={classNames(clazzPrefix, props?.containerClazz)} style={props?.containerStyle}>
            <BadgeRibbon
                text={!allowAlias ? undefined : (
                    <Switch
                        className={`${clazzPrefix}-switch-alias`}
                        checked={showAlias}
                        disabled={props?.disabled}
                        size='small'
                        checkedChildren={props?.localeProps?.semanticAlias || intlLocales.get([locale, 'semanticAlias']) || intlLocales.get(['en_US', 'semanticAlias'])}
                        unCheckedChildren={props?.localeProps?.semanticAlias || intlLocales.get([locale, 'semanticAlias']) || intlLocales.get(['en_US', 'semanticAlias'])}
                        onChange={setShowAlias}
                    />
                )}
                transparent={true}
                style={{
                    marginTop: '-20px',
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
                            <Space direction='vertical'>
                                <Radio value={EntryChoiceType.BLANK_WEEK}>
                                    {props?.localeProps?.blankWeek || intlLocales.get([locale, 'blankWeek']) || intlLocales.get(['en_US', 'blankWeek'])}
                                </Radio>
                                <Radio value={EntryChoiceType.EVERY_WEEK}>
                                    {props?.localeProps?.everyWeek || intlLocales.get([locale, 'everyWeek']) || intlLocales.get(['en_US', 'everyWeek'])}
                                </Radio>
                                <Radio
                                    value={EntryChoiceType.SPECIFY_WEEK}
                                    onClick={() => {
                                        window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_WEEK), 50);
                                    }}
                                >
                                    <Space direction='vertical'>
                                        {props?.localeProps?.specificWeek || intlLocales.get([locale, 'specificWeek']) || intlLocales.get(['en_US', 'specificWeek'])}
                                        <Form.Item noStyle={true} shouldUpdate={true}>
                                            {() => {
                                                return (
                                                    <Checkbox.Group
                                                        name='specificWeeks'
                                                        disabled={entryChoice !== EntryChoiceType.SPECIFY_WEEK}
                                                        options={buildWeekOptions()}
                                                        value={specificWeeks}
                                                        onChange={(checks: CheckboxValueType[]) => {
                                                            setSpecificWeeks(checks);
                                                            if (!checks || !checks.length) {
                                                                window.setTimeout(() => setEntryChoice(EntryChoiceType.SPECIFY_WEEK), 50);
                                                            }
                                                        }}
                                                    />
                                                );
                                            }}
                                        </Form.Item>
                                    </Space>
                                </Radio>
                                <Radio value={EntryChoiceType.LAST_WEEK} onClick={() => window.setTimeout(() => setEntryChoice(EntryChoiceType.LAST_WEEK), 50)}>
                                    <Space direction='vertical'>
                                        {props?.localeProps?.monthLastWeek || intlLocales.get([locale, 'monthLastWeek']) || intlLocales.get(['en_US', 'monthLastWeek'])}
                                        <Form.Item noStyle={true} shouldUpdate={true}>
                                            {() => {
                                                return (
                                                    <Radio.Group
                                                        name='lastWeek'
                                                        disabled={entryChoice !== EntryChoiceType.LAST_WEEK}
                                                        options={buildWeekOptions()}
                                                        value={lastWeek}
                                                        onChange={(event: RadioChangeEvent) => setLastWeek(event.target.value)}
                                                    />
                                                );
                                            }}
                                        </Form.Item>
                                    </Space>
                                </Radio>
                                <Radio
                                    value={EntryChoiceType.ORDER_WEEK}
                                    onClick={() => {
                                        window.setTimeout(() => setEntryChoice(EntryChoiceType.ORDER_WEEK), 50);
                                    }}
                                >
                                    <Space direction='vertical'>
                                        <Space>
                                            {props?.localeProps?.monthOrderWeekPrefix || intlLocales.get([locale, 'monthOrderWeekPrefix']) || intlLocales.get(['en_US', 'monthOrderWeekPrefix'])}
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
                                            {props?.localeProps?.monthOrderWeekSuffix || intlLocales.get([locale, 'monthOrderWeekSuffix']) || intlLocales.get(['en_US', 'monthOrderWeekSuffix'])}
                                        </Space>
                                        <Form.Item noStyle={true} shouldUpdate={true}>
                                            {() => {
                                                return (
                                                    <Radio.Group
                                                        name='orderWeekValue'
                                                        disabled={entryChoice !== EntryChoiceType.ORDER_WEEK}
                                                        options={buildWeekOptions()}
                                                        value={orderWeekValue}
                                                        onChange={(event: RadioChangeEvent) => setOrderWeekValue(event.target.value)}
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
