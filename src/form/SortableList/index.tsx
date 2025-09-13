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
import {Space, Tooltip} from 'antd';
import {type FormListFieldData, type FormListOperation} from 'antd/es/form/FormList';
import {VerticalAlignTopOutlined, VerticalAlignBottomOutlined, ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {ProFormList, type ProFormListProps} from '@ant-design/pro-form';
import {useIntl} from '@ant-design/pro-provider';
import {ObjectUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type IntlLocaleProps = {
    /**
     * @description Move to Top
     * @description.zh-CN 移到顶部
     * @description.zh-TW 移到頂部
     */
    moveToTop?: string;

    /**
     * @description Move to Bottom
     * @description.zh-CN 移到底部
     * @description.zh-TW 移到底部
     */
    moveToBottom?: string;

    /**
     * @description Move Up
     * @description.zh-CN 向上移动
     * @description.zh-TW 向上移動
     */
    moveUp?: string;

    /**
     * @description Move Down
     * @description.zh-CN 向下移动
     * @description.zh-TW 向下移動
     */
    moveDown?: string;
};


export type SortableListProps<T> = ProFormListProps<T> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-sortable-list'
     */
    clazzPrefix?: string;

    /**
     * @description Whether to allow move to top and bottom
     * @description.zh-CN 是否允许移动到顶部和底部
     * @description.zh-TW 是否允許移動到頂部和底部
     * @default true
     */
    allowTopBottom?: boolean;

    /**
     * @description Whether to allow move up and down
     * @description.zh-CN 是否允许向上和向下移动
     * @description.zh-TW 是否允許向上和向下移動
     * @default true
     */
    allowUpDown?: boolean;

    /**
     * @description Whether to allow the default actions, which are copy and delete
     * @description.zh-CN 是否允许默认动作，即复制和删除
     * @description.zh-TW 是否允許默認動作，即復制和刪除
     * @default true
     */
    allowDefaultAction?: boolean;

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
 * Component for displaying a Ant `ProFormList` with sortable capability
 *
 * @author David Hsing
 *
 * @see "https://www.cnblogs.com/zyj-Blogs/p/17882220.html"
 * @see "https://pro-components.antdigital.dev/components/group#%E7%AE%AD%E5%A4%B4%E6%8E%92%E5%BA%8F"
 */
export const SortableList: React.FC<SortableListProps<any>> = (props?: SortableListProps<any>) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-sortable-list';
    const intlType = useIntl();

    // Initialize the default props
    const {
        allowTopBottom = true,
        allowUpDown = true,
        allowDefaultAction = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const renderActionDom = (field: FormListFieldData, action: FormListOperation, defaultActionDom: React.ReactNode[], count: number): React.ReactNode[] => {
        if (props?.actionRender) {
            return props.actionRender(field, action, defaultActionDom, count);
        }
        const topBottomDom: React.ReactNode = !allowTopBottom ? undefined : (
            <Space key='top-bottom' style={!allowUpDown ? undefined : {marginRight: 8}}>
                <Tooltip
                    key='top'
                    title={ObjectUtils.firstNotNil(props?.localeProps?.moveToTop, intlLocales.get([locale, 'moveToTop']), intlLocales.get(['en_US', 'moveToTop']))}
                >
                    <VerticalAlignTopOutlined
                        className={classNames(`${clazzPrefix}-action`, `${clazzPrefix}-action-top`, (field.name > 0) ? undefined : `${clazzPrefix}-action-disabled`)}
                        onClick={() => {
                            if (field.name > 0) {
                                action.move(field.name, 0);
                            }
                        }}
                    />
                </Tooltip>
                <Tooltip
                    key='bottom'
                    title={ObjectUtils.firstNotNil(props?.localeProps?.moveToBottom, intlLocales.get([locale, 'moveToBottom']), intlLocales.get(['en_US', 'moveToBottom']))}
                >
                    <VerticalAlignBottomOutlined
                        className={classNames(`${clazzPrefix}-action`, `${clazzPrefix}-action-bottom`, (field.name < count - 1) ? undefined : `${clazzPrefix}-action-disabled`)}
                        onClick={() => {
                            if (field.name < count - 1) {
                                action.move(field.name, count - 1);
                            }
                        }}
                    />
                </Tooltip>
            </Space>
        );
        const upDownDom: React.ReactNode = !allowUpDown ? undefined : (
            <Space key='up-down'>
                <Tooltip
                    key='up'
                    title={ObjectUtils.firstNotNil(props?.localeProps?.moveUp, intlLocales.get([locale, 'moveUp']), intlLocales.get(['en_US', 'moveUp']))}
                >
                    <ArrowUpOutlined
                        className={classNames(`${clazzPrefix}-action`, `${clazzPrefix}-action-up`, (field.name > 0) ? undefined : `${clazzPrefix}-action-disabled`)}
                        onClick={() => {
                            if (field.name > 0) {
                                action.move(field.name, field.name - 1);
                            }
                        }}
                    />
                </Tooltip>
                <Tooltip
                    key='down'
                    title={ObjectUtils.firstNotNil(props?.localeProps?.moveDown, intlLocales.get([locale, 'moveDown']), intlLocales.get(['en_US', 'moveDown']))}
                >
                    <ArrowDownOutlined
                        className={classNames(`${clazzPrefix}-action`, `${clazzPrefix}-action-down`, (field.name < count - 1) ? undefined : `${clazzPrefix}-action-disabled`)}
                        onClick={() => {
                            if (field.name < count - 1) {
                                action.move(field.name, field.name + 1);
                            }
                        }}
                    />
                </Tooltip>
            </Space>
        );
        return [topBottomDom, upDownDom, ...(!allowDefaultAction ? [] : defaultActionDom)];
    };

    const restProps = !props ? {} : omit(props, ['className', 'name', 'actionRender', 'clazzPrefix', 'allowTopBottom', 'allowUpDown', 'allowDefaultAction', 'locale', 'localeProps']);

    return (
        <ProFormList
            className={classNames(clazzPrefix, fieldStyle.hashId, props?.className)}
            name={props?.name ?? 'formList'}
            actionRender={renderActionDom}
            {...restProps}
        >
            {props?.children}
        </ProFormList>
    );
};
