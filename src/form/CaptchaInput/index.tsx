/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import {Input, Button} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {type NamePath} from 'antd/es/form/interface';
import {type ProFormCaptchaProps} from '@ant-design/pro-form/es/components/Captcha';
import {ProForm} from '@ant-design/pro-form';
import {createField} from '@ant-design/pro-form/es/BaseForm/createField';
import {useIntl} from '@ant-design/pro-provider';
import {ArrayUtils, ObjectUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type CaptchaInputRef = {
    isLoading: boolean;
    isTiming: () => boolean;
    startTimer: () => void;
    stopTimer: () => void;
};


export type IntlLocaleProps = {
    /**
     * @description Get captcha
     * @description.zh-CN 获取验证码
     * @description.zh-TW 獲取驗證碼
     */
    generate?: string;

    /**
     * @description Resend
     * @description.zh-CN 重新发送
     * @description.zh-TW 重新發送
     */
    resend?: string;
};


export type CaptchaInputProps = Omit<ProFormCaptchaProps, 'children' | 'fieldRef' | 'onGetCaptcha'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-captcha-input'
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
     * @description The ref of the component
     * @description.zh-CN 组件的 ref 句柄
     * @description.zh-TW 組件的 ref 句柄
     */
    fieldRef?: React.Ref<CaptchaInputRef | null | undefined>;

    /**
     * @description Whether to auto validate the `phoneName` and `dependName`
     * @description.zh-CN 是否自动校验 `phoneName` 和 `dependName`
     * @description.zh-TW 是否自動校驗 `phoneName` 和 `dependName`
     */
    autoValidate?: boolean;

    /**
     * @description The field name(s) to validate before sending the captcha
     * @description.zh-CN 发送验证码之前要校验的字段名
     * @description.zh-TW 發送驗證碼之前要校驗的字段名
     */
    dependName?: NamePath;

    /**
     * @description The timer interval, in milliseconds
     * @description.zh-CN 计时器的间隔，单位毫秒
     * @description.zh-TW 計時器的間隔，單位毫秒
     * @default 1000
     */
    timerInterval?: number;

    /**
     * @description The callback function when generating the captcha, returns false will interrupt the timer interval
     * @description.zh-CN 生成验证码时的回调函数，返回 false 将会中断计时器
     * @description.zh-TW 生成驗證碼時的回調函數，返回 false 將會中斷計時器
     */
    onGenerate?: (mobile?: string) => boolean | void | Promise<boolean | void>;

    /**
     * @description The callback function when the timer changed
     * @description.zh-CN 计时变化时的回调函数
     * @description.zh-TW 計時變化時的回調函數
     */
    onTimer?: (count: number) => void;

    /**
     * @description The callback function when the timer begin
     * @description.zh-CN 计时开始时的回调函数
     * @description.zh-TW 計時開始時的回調函數
     */
    onTimerBegin?: () => void;

    /**
     * @description The callback function when the timer end
     * @description.zh-CN 计时结束时的回调函数
     * @description.zh-TW 計時結束時的回調函數
     */
    onTimerEnd?: () => void;

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
};


/**
 * Component for displaying a text input box with captcha capability
 *
 * @author David Hsing
 */
const CaptchaInputField: React.ForwardRefExoticComponent<CaptchaInputProps & React.RefAttributes<CaptchaInputRef>> = React.forwardRef((props?: CaptchaInputProps, ref?: any) => {
    CaptchaInputField.displayName = 'CaptchaInput';

    const formContext = React.useContext(FormContext);
    const [submittable, setSubmittable] = React.useState<boolean>(true);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-captcha-input';
    const intlType = useIntl();

    ConsoleUtils.warn(!!formContext?.form, true, 'CaptchaInput', `Field '${props?.name ?? props?.fieldProps?.name}' needs a Form instance`);

    // Initialize the default props
    const {
        captchaTextRender = (timing: boolean, count: number) => {
            const generate = ObjectUtils.firstNotNil(props?.localeProps?.generate, intlLocales.get([locale, 'generate']), intlLocales.get(['en_US', 'generate']));
            const resend = ObjectUtils.firstNotNil(props?.localeProps?.resend, intlLocales.get([locale, 'resend']), intlLocales.get(['en_US', 'resend']));
            return (timing && count > 0) ? `${resend}(${count})` : generate;
        },
        countDown = 59,
        timerInterval = 1000,
        locale = intlType.locale,
    } = props ?? {};

    ConsoleUtils.warn(countDown > 0, true, 'CaptchaInput', `Field '${props?.name ?? props?.fieldProps?.name}' prop 'countDown' must be greater than 0`);
    ConsoleUtils.warn(timerInterval > 0, true, 'CaptchaInput', `Field '${props?.name ?? props?.fieldProps?.name}' prop 'timerInterval' must be greater than 0`);

    const fieldRef = React.useRef<HTMLDivElement>(null);
    const [counting, setCounting] = React.useState<number>(countDown);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [timing, setTiming] = React.useState<boolean>(false);
    const fieldStyle = useFieldStyle(clazzPrefix);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isLoading: (): boolean => {
            return loading;
        },
        isTiming: (): boolean => {
            return timing;
        },
        startTimer: (): void => {
            validateDependFields().then(() => {
                setTiming(true);
            }).catch(() => {});
        },
        stopTimer: (): void => {
            setTiming(false);
        }
    }));

    React.useEffect(() => {
        let interval = 0;
        const seconds = countDown;
        if (timing) {
            props?.onTimerBegin?.();
            interval = window.setInterval(() => {
                setCounting((previous) => {
                    if (previous <= 1) {
                        setTiming(false);
                        window.clearInterval(interval);
                        props?.onTimerEnd?.();
                        return seconds ?? 59;
                    }
                    return previous - 1;
                });
            }, timerInterval);
        }
        return () => window.clearInterval(interval);
    }, [timing]);

    React.useEffect(() => {
        if (timing) {
            props?.onTimer?.(counting);
        }
    }, [timing, counting]);

    const watchFields = React.useMemo(() => {
        return [props?.phoneName, props?.dependName].flat().filter((item: any) => !!item);
    }, [props?.phoneName, props?.dependName]);

    const watchValues = !props?.autoValidate ? [] : ProForm.useWatch([], {form: formContext?.form, preserve: true});

    const checkSubmittable = () => {
        if (ArrayUtils.isNotEmpty(watchFields)) {
            formContext?.form?.validateFields([...watchFields], {
                validateOnly: true,
            }).then(() => setSubmittable(true)).catch(() => setSubmittable(false));
        }
    };

    React.useEffect(() => {
        if (props?.autoValidate) {
            checkSubmittable();
        }
    }, [props?.autoValidate, formContext?.form, watchValues]);

    const buildCaptcha = async (mobile?: string) => {
        if (!mobile || !props?.onGenerate) {
            setLoading(false);
            setTiming(false);
            return;
        }
        setLoading(true);
        const value = await props.onGenerate(mobile);
        setTiming(value === true || value === undefined || value === null);
        setLoading(false);
    };

    const validateDependFields = async () => {
        let result = true;
        if (props?.phoneName) {
            try {
                await formContext?.form?.validateFields([props.phoneName].flat());
            } catch {
                result = false;
            }
        }
        if (props?.dependName) {
            try {
                await formContext?.form?.validateFields([props.dependName].flat());
            } catch {
                result = false;
            }
        }
        return result;
    };

    const handleClick = async (event?: any) => {
        const validated = await validateDependFields();
        if (!validated) {
            return;
        }
        await buildCaptcha((!formContext?.form || !props?.phoneName) ? undefined : formContext.form.getFieldValue([props.phoneName].flat()));
        props?.captchaProps?.onClick?.(event);
    }

    const omitFieldProps = !props?.fieldProps ? {} : omit(props.fieldProps, ['className', 'value', 'onChange']);
    const omitCaptchaProps = !props?.captchaProps ? {} : omit(props.captchaProps, ['className', 'disabled', 'loading']);

    return (
        <div
            ref={fieldRef}
            className={classNames(`${clazzPrefix}-container`, fieldStyle.hashId, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Input
                className={classNames(clazzPrefix, props?.className)}
                value={ObjectUtils.firstNotNil(props?.initialValue, props?.value, props?.fieldProps?.value)}
                onChange={props?.onChange ?? props?.fieldProps?.onChange}
                {...omitFieldProps}
            />
            <Button
                className={classNames(`${clazzPrefix}-action`, props?.captchaProps?.className)}
                disabled={timing || !submittable || props?.captchaProps?.disabled}
                loading={loading || props?.captchaProps?.loading}
                {...omitCaptchaProps}
                onClick={handleClick}
            >
                {captchaTextRender(timing, counting)}
            </Button>
        </div>
    );
});


// @ts-ignore
export const CaptchaInput = createField(CaptchaInputField) as typeof CaptchaInputField;
