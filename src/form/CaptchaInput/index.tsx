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
import {ConfigProvider, Form, Input, Button} from 'antd';
import {type ProFormCaptchaProps} from '@ant-design/pro-form/es/components/Captcha';
import {useIntl} from '@ant-design/pro-provider';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import warning from 'rc-util/es/warning';
import {intlLocales} from './intl-locales';
import './index.less';


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


export type CaptchaInputProps = Omit<ProFormCaptchaProps, 'onGetCaptcha'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-captcha-input'
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
     * @description The timer end point, in seconds
     * @description.zh-CN 计时器的结束点，单位秒
     * @description.zh-TW 計時器的結束點，單位秒
     * @default 0
     */
    countEnd?: number;

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
    onGenerate?: (mobile: string) => Promise<boolean | void>;

    /**
     * @description The callback function when the timer changed
     * @description.zh-CN 计时变化时的回调函数
     * @description.zh-TW 計時變化時的回調函數
     */
    onTimer?: (count: number) => void;

    /**
     * @description The locale props for the component
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
};


export type CaptchaInputRef = {
    startTiming: () => never;
    endTiming: () => never;
    isLoading: () => boolean;
    isTiming: () => boolean;
};


/**
 * Component for displaying a text input box with captcha capability
 *
 * @author David Hsing
 */
export const CaptchaInputField: React.FC<CaptchaInputProps> = React.forwardRef((props?: CaptchaInputProps, ref?: any) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-captcha-input');
    const intlType = useIntl();

    const form = Form.useFormInstance();
    warning(!!form, `CaptchaInput needs a Form instance`);

    // Initialize the default props
    const {
        captchaTextRender = (timing: boolean, count: number) => {
            const generate = props?.localeProps?.generate || intlLocales.get([intlType.locale, 'generate']) || intlLocales.get(['en_US', 'generate']);
            const resend = props?.localeProps?.resend || intlLocales.get([intlType.locale, 'resend']) || intlLocales.get(['en_US', 'resend']);
            return (timing && count > 0) ? `${resend}(${count})` : generate;
        },
        countDown = 59,
        countEnd = 0,
        timerInterval = 1000,
    } = props ?? {};

    warning(countEnd >= 0, `CaptchaInput prop 'countEnd' must be greater than or equal to 0`);
    warning(countDown >= countEnd, `CaptchaInput prop 'countDown' must be greater than or equal to prop 'countEnd'`);
    warning(timerInterval > 0, `CaptchaInput prop 'timerInterval' must be greater than 0`);

    const [count, setCount] = React.useState<number>(countDown);
    const [loading, setLoading] = React.useState<boolean>();
    const [timing, setTiming] = React.useState(false);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        startTiming: () => {
            setTiming(true);
        },

        endTiming: () => {
            setTiming(false);
        },

        isLoading: () => {
            return loading;
        },

        isTiming: () => {
            return timing;
        }
    }));

    React.useEffect(() => {
        let interval = 0;
        const seconds = countDown;
        if (timing) {
            interval = window.setInterval(() => {
                setCount((previous) => {
                    if (previous <= countEnd) {
                        setTiming(false);
                        window.clearInterval(interval);
                        return seconds ?? 59;
                    }
                    return previous - 1;
                });
            }, timerInterval);
        }
        return () => window.clearInterval(interval);
    });

    React.useEffect(() => {
        if (timing && props?.onTimer) {
            props.onTimer(count);
        }
    });

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

    const handleClick = async () => {
        try {
            if (props?.phoneName) {
                await form?.validateFields([props.phoneName].flat(1));
            }
            const mobile = (!form || !props?.phoneName) ? undefined : form?.getFieldValue([props.phoneName].flat(1));
            await buildCaptcha(mobile);
        } catch (ignored) {
        }
    }

    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'value', 'onChange']);
    return (
        <div ref={ref} className={classNames(`${clazzPrefix}-container`, props?.containerClazz)} style={props?.containerStyle}>
            <Input
                className={classNames(clazzPrefix, props?.className)}
                value={props?.value ?? props?.fieldProps?.value}
                onChange={props?.onChange ?? props?.fieldProps?.onChange}
                {...omitFieldProps}
            />
            <Button
                className={`${clazzPrefix}-action`}
                disabled={timing}
                loading={loading}
                {...props?.captchaProps}
                onClick={handleClick}
            >
                {captchaTextRender(timing, count)}
            </Button>
        </div>
    );
});
