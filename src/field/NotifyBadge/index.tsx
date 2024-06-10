/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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
import {ConfigProvider, Badge, Dropdown, List, Tabs, type BadgeProps, type DropdownProps, type ListProps, type TabsProps} from 'antd';
import {BellOutlined} from '@ant-design/icons';
import {useIntl} from '@ant-design/pro-provider';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import {type Tab as RcTab} from 'rc-tabs/es/interface';
import omit from 'rc-util/es/omit';
import {intlLocales} from './intl-locales';
import './index.less';


export type HyperlinkProps = {
    /**
     * @description The CSS class name of hyperlink
     * @description.zh-CN 超链接的 CSS 类名
     * @description.zh-TW 超鏈接的 CSS 類名
     */
    clazz?: string;

    /**
     * @description The CSS style of hyperlink
     * @description.zh-CN 超链接的 CSS 样式
     * @description.zh-TW 超鏈接的 CSS 樣式
     */
    style?: React.CSSProperties;

    /**
     * @description The href of hyperlink
     * @description.zh-CN 超链接的地址
     * @description.zh-TW 超鏈接的地址
     */
    href?: string;

    /**
     * @description The target of hyperlink
     * @description.zh-CN 超链接的目标窗口
     * @description.zh-TW 超鏈接的目標窗口
     */
    target?: string;

    /**
     * @description The relation of target to current page
     * @description.zh-CN 超链接地址与当前页面的关系
     * @description.zh-TW 超鏈接地址與當前頁面的關系
     */
    rel?: string;
};


export type MixinTabProps = Omit<RcTab, 'children'> & {
    /**
     * @description The properties of the list
     * @description.zh-CN 列表的属性
     * @description.zh-TW 列表的屬性
     */
    listProps?: ListProps<any>;

    /**
     * @description Whether to display the clear button
     * @description.zh-CN 是否显示清除按钮
     * @description.zh-TW 是否顯示清除按鈕
     */
    showClear?: boolean;

    /**
     * @description Whether to display the more button
     * @description.zh-CN 是否显示更多按钮
     * @description.zh-TW 是否顯示更多按鈕
     */
    showMore?: boolean;

    /**
     * @description The respond function when click the clear button
     * @description.zh-CN 清除按钮的响应函数
     * @description.zh-TW 清除按鈕的響應函數
     */
    onClear?: () => void;

    /**
     * @description The respond function when click the more button
     * @description.zh-CN 更多按钮的响应函数
     * @description.zh-TW 更多按鈕的響應函數
     */
    onMore?: () => void;

    /**
     * @description Whether to use the preset style for the component
     * @description.zh-CN 组件是否使用预设样式
     * @description.zh-TW 組件是否使用預設樣式
     */
    usePresetStyle?: 'notice' | 'task' | false;
};


export type MixinTabsProps = Omit<TabsProps, 'addIcon' | 'hideAdd' | 'items' | 'type' | 'onEdit' | 'editable' | 'getPopupContainer'> & {
    /**
     * @description The properties of the badge
     * @description.zh-CN 徽标的属性
     * @description.zh-TW 徽標的屬性
     */
    items?: MixinTabProps[];
};


export type IntlLocaleProps = {
    /**
     * @description The content of the clear button
     * @description.zh-CN 清空按钮的内容节点
     * @description.zh-TW 清空按鈕的內容節點
     */
    clearButton?: React.ReactNode;

    /**
     * @description The content of the more button
     * @description.zh-CN 更多按钮的内容节点
     * @description.zh-TW 更多按鈕的內容節點
     */
    moreButton?: React.ReactNode;
};


export type NotifyBadgeProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-notify-badge'
     */
    clazzPrefix?: string;

    /**
     * @description The properties of the hyperlink
     * @description.zh-CN 超链接的属性
     * @description.zh-TW 超鏈接的屬性
     */
    hyperlinkProps?: HyperlinkProps;

    /**
     * @description The content of the badge
     * @description.zh-CN 徽标的内容节点
     * @description.zh-TW 徽標的内容節點
     */
    badgeContent?: React.ReactNode;

    /**
     * @description The properties of the badge
     * @description.zh-CN 徽标的属性
     * @description.zh-TW 徽標的屬性
     */
    badgeProps?: Omit<BadgeProps, 'children'>;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 下拉弹出层的属性
     * @description.zh-TW 下拉彈出層的屬性
     */
    dropdownProps?: Pick<DropdownProps, 'arrow' | 'autoAdjustOverflow' | 'autoFocus' | 'destroyPopupOnHide' | 'getPopupContainer' | 'overlayClassName' | 'overlayStyle' | 'placement' | 'trigger' | 'onOpenChange'>;

    /**
     * @description The properties of the tabs
     * @description.zh-CN 标签页的属性
     * @description.zh-TW 標簽頁的屬性
     */
    tabsProps?: MixinTabsProps;

    /**
     * @description The locale props for the component
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
};


/**
 * Component for displaying a badge with notify list
 *
 * @author David Hsing
 */
export const NotifyBadge: React.FC<NotifyBadgeProps> = (props?: NotifyBadgeProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-notify-badge');

    // Initialize the default props
    const {
        badgeContent = <BellOutlined/>,
    } = props ?? {};

    const intlType = useIntl();

    const badgeDom = (
        <Badge className={`${clazzPrefix}-entry-badge`} {...props?.badgeProps}>
            {badgeContent}
        </Badge>
    );

    const hyperlinkDom = !props?.hyperlinkProps ? badgeDom : (
        <a
            className={classNames(`${clazzPrefix}-entry-link`, props.hyperlinkProps.clazz)}
            {...omit(props?.hyperlinkProps, ['clazz'])}
        >
            {badgeDom}
        </a>
    );

    const renderNoticeList = (tab: any): React.ReactNode => {
        if (!tab) {
            return undefined;
        }
        // TODO
        return null;
    };

    const renderTaskList = (tab: any): React.ReactNode => {
        if (!tab) {
            return undefined;
        }
        // TODO
        return null;
    };

    const buildListFooter = (tab: MixinTabProps): React.ReactNode => {
        if (!tab.showClear && !tab.showMore) {
            return tab.listProps?.footer;
        }
        return (
            <>
                {tab.listProps?.footer}
                <div className={`${clazzPrefix}-builtin-footer`}>
                    <If condition={tab.showClear} validation={false}>
                        <div className={`${clazzPrefix}-footer-button`} onClick={tab.onClear}>
                            {props?.localeProps?.clearButton || intlLocales.get([intlType.locale, 'clear']) || intlLocales.get(['en_US', 'clear'])}
                        </div>
                    </If>
                    <If condition={tab.showMore} validation={false}>
                        <div className={`${clazzPrefix}-footer-button`} onClick={tab.onClear}>
                            {props?.localeProps?.moreButton || intlLocales.get([intlType.locale, 'more']) || intlLocales.get(['en_US', 'more'])}
                        </div>
                    </If>
                </div>
            </>
        );
    };

    const detectListRender = (tab: MixinTabProps) => {
        switch (tab.usePresetStyle) {
            case 'notice':
                return renderNoticeList;
            case 'task':
                return renderTaskList;
            default:
                break;
        }
        return undefined;
    };

    const buildTabDom = () => {
        if (!props?.tabsProps?.items) {
            return undefined;
        }
        return props.tabsProps.items.map((tab: MixinTabProps) => {
            const content = (
                <List
                    {...(!tab?.listProps ? {} : omit(tab.listProps, ['footer', 'renderItem']))}
                    footer={buildListFooter(tab)}
                    renderItem={tab.listProps?.renderItem ?? detectListRender(tab)}
                />
            );
            return {
                ...omit(tab, ['listProps', 'showClear', 'showMore', 'onClear', 'onMore', 'usePresetStyle']),
                children: content,
            } as RcTab;
        });
    };

    const dropdownRender = () => {
        return (
            <Tabs
                className={classNames(`${clazzPrefix}-tabs`, props?.tabsProps?.className)}
                items={buildTabDom()}
                {...(!props?.tabsProps ? {} : omit(props.tabsProps, ['className', 'items']))}
            />
        );
    };

    return !props?.tabsProps ? hyperlinkDom : (
        <Dropdown
            dropdownRender={dropdownRender}
            overlayClassName={classNames(`${clazzPrefix}-dropdown`, props?.dropdownProps?.overlayClassName)}
            {...(!props?.dropdownProps ? {} : omit(props?.dropdownProps, ['overlayClassName']))}
        >
            {hyperlinkDom}
        </Dropdown>
    );
};
