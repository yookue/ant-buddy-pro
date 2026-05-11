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
import {Row, Col, Form, Progress, theme} from 'antd';
import {useIntl} from '@ant-design/pro-provider';
import {ObjectUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import zxcvbn from 'zxcvbn';
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type IntlLocaleProps = {
    /**
     * @description Very Weak
     * @description.zh-CN 非常弱
     * @description.zh-TW 非常弱
     */
    veryWeak?: string;

    /**
     * @description Weak
     * @description.zh-CN 弱
     * @description.zh-TW 弱
     */
    weak?: string;

    /**
     * @description Medium
     * @description.zh-CN 一般
     * @description.zh-TW 一般
     */
    medium?: string;

    /**
     * @description Strong
     * @description.zh-CN 高
     * @description.zh-TW 高
     */
    strong?: string;

    /**
     * @description Very Strong
     * @description.zh-CN 非常高
     * @description.zh-TW 非常高
     */
    veryStrong?: string;
};


export type StrokeColorProps = {
    /**
     * @description Very Weak
     * @description.zh-CN 非常弱
     * @description.zh-TW 非常弱
     */
    veryWeak?: string;

    /**
     * @description Weak
     * @description.zh-CN 弱
     * @description.zh-TW 弱
     */
    weak?: string;

    /**
     * @description Medium
     * @description.zh-CN 一般
     * @description.zh-TW 一般
     */
    medium?: string;

    /**
     * @description Strong
     * @description.zh-CN 高
     * @description.zh-TW 高
     */
    strong?: string;

    /**
     * @description Very Strong
     * @description.zh-CN 非常高
     * @description.zh-TW 非常高
     */
    veryStrong?: string;
};


export type CipherStrengthProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-cipher-strength'
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
     * @description The field name to watch
     * @description.zh-CN 要监听的字段名
     * @description.zh-TW 要監聽的字段名
     * @default 'password'
     */
    watchField?: string;

    /**
     * @description The CSS class name of the progress div
     * @description.zh-CN 进度条 div 的 CSS 类名
     * @description.zh-TW 進度條 div 的 CSS 類名
     */
    progressClazz?: string;

    /**
     * @description The CSS style of the progress div
     * @description.zh-CN 进度条 div 的 CSS 样式
     * @description.zh-TW 進度條 div 的 CSS 樣式
     */
    progressStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the caption div
     * @description.zh-CN 标题 div 的 CSS 类名
     * @description.zh-TW 標題 div 的 CSS 類名
     */
    captionClazz?: string;

    /**
     * @description The CSS style of the caption div
     * @description.zh-CN 标题 div 的 CSS 样式
     * @description.zh-TW 標題 div 的 CSS 樣式
     */
    captionStyle?: React.CSSProperties;

    /**
     * @description The position of caption
     * @description.zh-CN 标题位置
     * @description.zh-TW 標題位置
     * @default 'after'
     */
    captionPos?: WithFalse<BeforeAfterType>;

    /**
     * @description The props of color
     * @description.zh-CN 颜色属性
     * @description.zh-TW 顏色屬性
     */
    colorProps?: StrokeColorProps;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;

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
 * Component for displaying a cipher strength indicator with captions and a progressbar
 *
 * @author David Hsing
 */
export const CipherStrength: React.FC<CipherStrengthProps> = (props?: CipherStrengthProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-cipher-strength';
    const intlType = useIntl();

    const form = Form.useFormInstance();

    ConsoleUtils.warn(!!form, true, 'CipherStrength', `Field needs a Form instance`);

    // Initialize the default props
    const {
        watchField = 'password',
        captionPos = 'after',
        colorProps = {
            veryWeak: '#fa541c',
            weak: '#fa8c16',
            medium: '#fadb14',
            strong: '#a0d911',
            veryStrong: '#52c41a',
        },
        locale = intlType.locale,
    } = props ?? {};

    const {token} = theme.useToken();
    const watchValue = Form.useWatch(watchField, form);
    const fieldStyle = useFieldStyle(clazzPrefix);

    const buildProgressDom = () => {
        const strength = !watchValue ? 0 : (zxcvbn(watchValue).score + 1) * 20;
        return (
            <Progress
                className={classNames(`${clazzPrefix}-progress`, props?.progressClazz)}
                percent={strength}
                steps={5}
                showInfo={false}
                strokeColor={[
                    colorProps.veryWeak ?? token.colorText,
                    colorProps.weak ?? token.colorText,
                    colorProps.medium ?? token.colorText,
                    colorProps.strong ?? token.colorText,
                    colorProps.veryStrong ?? token.colorText,
                ]}
                style={props?.progressStyle}
            />
        );
    };

    const buildCaptionDom = () => {
        const veryWeak = ObjectUtils.firstNotNil(props?.localeProps?.veryWeak, intlLocales.get([locale, 'veryWeak']), intlLocales.get(['en_US', 'veryWeak']));
        const weak = ObjectUtils.firstNotNil(props?.localeProps?.weak, intlLocales.get([locale, 'weak']), intlLocales.get(['en_US', 'weak']));
        const medium = ObjectUtils.firstNotNil(props?.localeProps?.medium, intlLocales.get([locale, 'medium']), intlLocales.get(['en_US', 'medium']));
        const strong = ObjectUtils.firstNotNil(props?.localeProps?.strong, intlLocales.get([locale, 'strong']), intlLocales.get(['en_US', 'strong']));
        const veryStrong = ObjectUtils.firstNotNil(props?.localeProps?.veryStrong, intlLocales.get([locale, 'veryStrong']), intlLocales.get(['en_US', 'veryStrong']));
        return (
            <Row
                className={classNames(`${clazzPrefix}-caption`, props?.captionClazz)}
                justify='space-around'
                style={props?.captionStyle}
            >
                {[veryWeak, weak, medium, strong, veryStrong].map(item => {
                    return (
                        <Col key={item} span={4}>{item}</Col>
                    );
                })}
            </Row>
        );
    };

    return (
        <div
            className={classNames(clazzPrefix, fieldStyle.hashId, (props?.widthBlock ? `${clazzPrefix}-width-block` : undefined), props?.containerClazz)}
            style={props?.containerStyle}
        >
            {captionPos === 'before' && buildCaptionDom()}
            {buildProgressDom()}
            {captionPos === 'after' && buildCaptionDom()}
        </div>
    );
};
