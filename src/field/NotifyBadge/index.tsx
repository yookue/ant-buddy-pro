/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import {Avatar, Badge, Dropdown, Empty, List, Tabs, type BadgeProps, type DropdownProps, type ListProps, type MenuProps, type TabsProps} from 'antd';
import {ListItemMetaProps} from 'antd/es/list/Item';
import {type TabPlacement} from 'antd/es/tabs';
import {BellOutlined} from '@ant-design/icons';
import {useIntl} from '@ant-design/pro-components';
import {type Tab as RcTab} from '@rc-component/tabs/es/interface';
import {omit} from '@rc-component/util';
import {If} from '@unikue/react-condition';
import {ArrayUtils, BooleanUtils, ObjectUtils} from '@unikue/ts-lang-utils';
import classnames from 'classnames';
import {type WithFalse, type ReadonlyTabsType} from '@/type/declaration';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type NotifyPresetStyle = WithFalse<'notice' | 'task'>;

export type NotifyTabPosition = Exclude<TabPlacement, 'bottom'>;

export type NotifyDataItem = Omit<ListItemMetaProps, 'children'> & {
    /**
     * @description The ID of the item
     * @description.zh-CN 条目的 ID
     * @description.zh-TW 條目的 ID
     */
    id?: string;

    /**
     * @description The extra node of the item
     * @description.zh-CN 条目额外的节点内容
     * @description.zh-TW 條目額外的節點内容
     */
    extra?: React.ReactNode;

    /**
     * @description Whether the item has been read
     * @description.zh-CN 条目是否为已读
     * @description.zh-TW 條目是否爲已讀
     */
    read?: boolean;

    /**
     * @description The timestamp of the item
     * @description.zh-CN 条目的时间戳
     * @description.zh-TW 條目的時間戳
     */
    timestamp?: string;
};


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
     * @description The properties of the label badge
     * @description.zh-CN 标签页徽标的属性
     * @description.zh-TW 標籤頁徽標的屬性
     */
    labelBadgeProps?: Omit<BadgeProps, 'children'>;

    /**
     * @description The properties of the list
     * @description.zh-CN 列表的属性
     * @description.zh-TW 列表的屬性
     */
    listProps?: ListProps<any>;

    /**
     * @description The DOM of placeholder for the list
     * @description.zh-CN 列表的占位符
     * @description.zh-TW 列表的佔位符
     */
    listPlaceholder?: React.ReactNode;

    /**
     * @description Whether to display the clear button
     * @description.zh-CN 是否显示清除按钮
     * @description.zh-TW 是否顯示清除按鈕
     */
    showClear?: boolean | (() => boolean);

    /**
     * @description Whether to display the more button
     * @description.zh-CN 是否显示更多按钮
     * @description.zh-TW 是否顯示更多按鈕
     */
    showMore?: boolean | (() => boolean);

    /**
     * @description The respond function when click the the item
     * @description.zh-CN 条目的点击响应函数
     * @description.zh-TW 條目的點擊響應函數
     */
    onClick?: (event: any, key: string) => void;

    /**
     * @description The respond function when click the clear button
     * @description.zh-CN 清除按钮的响应函数
     * @description.zh-TW 清除按鈕的響應函數
     */
    onClear?: (event: any, key: string) => void;

    /**
     * @description The respond function when click the more button
     * @description.zh-CN 更多按钮的响应函数
     * @description.zh-TW 更多按鈕的響應函數
     */
    onMore?: (event: any, key: string) => void;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     */
    presetStyle?: NotifyPresetStyle;
};


export type MixinTabsProps = Omit<TabsProps, 'activeKey' | 'addIcon' | 'hideAdd' | 'items' | 'tabPlacement' | 'type' | 'onEdit' | 'children'> & {
    /**
     * @description The contents of the tabs
     * @description.zh-CN 标签页的内容
     * @description.zh-TW 標籤頁的内容
     */
    items?: MixinTabProps[];

    /**
     * @description The type of the tab labels
     * @description.zh-CN 标签页的类型
     * @description.zh-TW 標籤頁的類型
     * @default 'line'
     */
    type?: ReadonlyTabsType;

    /**
     * @description The position of the tab labels
     * @description.zh-CN 标签页的位置
     * @description.zh-TW 標籤頁的位置
     * @default 'top'
     */
    tabPlacement?: NotifyTabPosition;
};


export type IntlLocaleProps = {
    /**
     * @description Clear
     * @description.zh-CN 清空
     * @description.zh-TW 清空
     */
    clear?: React.ReactNode;

    /**
     * @description More
     * @description.zh-CN 更多
     * @description.zh-TW 更多
     */
    more?: React.ReactNode;
};


export type NotifyBadgeProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-notify-badge'
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
     * @description Whether to enable the dropdown div
     * @description.zh-CN 是否允许下拉弹出层
     * @description.zh-TW 是否允許下拉彈出層
     * @default true
     */
    dropdownEnabled?: boolean;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 下拉弹出层的属性
     * @description.zh-TW 下拉彈出層的屬性
     */
    dropdownProps?: Omit<DropdownProps, 'popupRender' | 'menu' | 'children'>;

    /**
     * @description The properties of the tabs
     * @description.zh-CN 标签页的属性
     * @description.zh-TW 標簽頁的屬性
     */
    tabsProps?: MixinTabsProps;

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
 * Component for displaying a badge with notify list
 *
 * @author David Hsing
 */
export const NotifyBadge: React.FC<NotifyBadgeProps> = (props?: NotifyBadgeProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-notify-badge';
    const intlType = useIntl();

    // Initialize the default props
    const {
        badgeContent = <BellOutlined style={{cursor: 'pointer'}}/>,
        dropdownEnabled = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const badgeDom = (
        <Badge className={`${clazzPrefix}-entry-badge`} {...props?.badgeProps}>
            {badgeContent}
        </Badge>
    );

    const hyperlinkDom = !props?.hyperlinkProps ? badgeDom : (
        <a
            className={classnames(`${clazzPrefix}-entry-link`, props.hyperlinkProps.clazz)}
            {...omit(props?.hyperlinkProps, ['clazz'])}
        >
            {badgeDom}
        </a>
    );

    const renderTabLabel = (tab: MixinTabProps): React.ReactNode => {
        const unreadCount = tab.labelBadgeProps?.count ?? ArrayUtils.count(tab.listProps?.dataSource, (item: any) => BooleanUtils.isNotTrue(item.read));
        const omitProps = !tab.labelBadgeProps ? {} : omit(tab.labelBadgeProps, ['count']);
        if (tab.label) {
            return !tab.labelBadgeProps ? tab.label : (
                <Badge count={unreadCount} {...omitProps}>
                    {tab.label}
                </Badge>
            );
        }
        if (tab.presetStyle !== 'notice' && tab.presetStyle !== 'task') {
            return undefined;
        }
        const label = intlLocales.get([locale, tab.presetStyle]) ?? intlLocales.get(['en_US', tab.presetStyle]);
        return !tab.labelBadgeProps ? label : (
            <Badge count={unreadCount} {...omitProps}>
                {label}
            </Badge>
        );
    };

    const renderPresetList = (item: any, index: number, tab: MixinTabProps): React.ReactNode => {
        const avatar = !item.avatar ? undefined : (
            <>
                <If condition={typeof item.avatar === 'string'} validation={false}>
                    <If.Then>
                        <Avatar className={`${clazzPrefix}-list-item-avatar`} src={item.avatar}/>
                    </If.Then>
                    <If.Else>
                        <span className={`${clazzPrefix}-list-item-icon`}>{item.avatar}</span>
                    </If.Else>
                </If>
            </>
        );
        return (
            <List.Item
                key={item.key || item.id || index}
                className={classnames(`${clazzPrefix}-list-item`, `${clazzPrefix}-list-item-${item.read ? 'read' : 'unread'}`)}
                onClick={event => tab.onClick?.(event, item.key || item.id || index)}
            >
                <List.Item.Meta
                    className={`${clazzPrefix}-list-item-meta`}
                    avatar={avatar}
                    title={
                        <div className={`${clazzPrefix}-list-item-title`}>
                            {item.title}
                            <If condition={item.extra} validation={false}>
                                <div className={`${clazzPrefix}-list-item-extra`}>
                                    {item.extra}
                                </div>
                            </If>
                        </div>
                    }
                    description={
                        <>
                            <If condition={item.description} validation={false}>
                                <div className={`${clazzPrefix}-list-item-description`}>
                                    {item.description}
                                </div>
                            </If>
                            <If condition={item.timestamp} validation={false}>
                                <div className={`${clazzPrefix}-list-item-timestamp`}>
                                    {item.timestamp}
                                </div>
                            </If>
                        </>
                    }
                />
            </List.Item>
        );
    };

    const renderListFooter = (tab: MixinTabProps): React.ReactNode => {
        const showClear = BooleanUtils.isTrue(tab.showClear);
        const showMore = BooleanUtils.isTrue(tab.showMore);
        if (!showClear && !showMore) {
            return tab.listProps?.footer;
        }
        return (
            <>
                {tab.listProps?.footer}
                <div className={`${clazzPrefix}-builtin-footer`}>
                    <If condition={showClear} validation={false}>
                        <div
                            className={`${clazzPrefix}-action-button`}
                            onClick={event => tab.onClear?.(event, tab.key ?? tab.presetStyle)}
                        >
                            {ObjectUtils.firstNotNil(props?.localeProps?.clear, intlLocales.get([locale, 'clear']), intlLocales.get(['en_US', 'clear']))}
                        </div>
                    </If>
                    <If condition={showMore} validation={false}>
                        <div
                            className={`${clazzPrefix}-action-button`}
                            onClick={event => tab.onMore?.(event, tab.key ?? tab.presetStyle)}
                        >
                            {ObjectUtils.firstNotNil(props?.localeProps?.more, intlLocales.get([locale, 'more']), intlLocales.get(['en_US', 'more']))}
                        </div>
                    </If>
                </div>
            </>
        );
    };

    const buildTabDom = () => {
        if (!props?.tabsProps?.items) {
            return undefined;
        }
        return props.tabsProps.items.map((tab: MixinTabProps) => {
            const empty = !tab.listProps?.dataSource || (Array.isArray(tab.listProps.dataSource) && !tab.listProps.dataSource.length);
            const placeholder = tab.listPlaceholder ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>;
            const content = empty ? placeholder : (
                <List
                    className={classnames(`${clazzPrefix}-tab-list`, tab.listProps?.className)}
                    {...(!tab?.listProps ? {} : omit(tab.listProps, ['className', 'footer', 'renderItem']))}
                    footer={renderListFooter(tab)}
                    renderItem={(item: any, index: number) => {
                        if (tab.listProps?.renderItem) {
                            return tab.listProps.renderItem(item, index);
                        }
                        return (tab.presetStyle === 'notice' || tab.presetStyle === 'task') ? renderPresetList(item, index, tab) : undefined;
                    }}
                />
            );
            return {
                key: tab.key ?? tab.presetStyle,
                label: renderTabLabel(tab),
                ...omit(tab, ['key', 'label', 'labelBadgeProps', 'listProps', 'showClear', 'showMore', 'onClick', 'onClear', 'onMore', 'presetStyle']),
                children: content,
            };
        });
    };

    const menuItems: MenuProps['items'] = [{
        key: 'tabs',
        label: (
            <Tabs
                className={classnames(`${clazzPrefix}-tabs`, props?.tabsProps?.className)}
                items={buildTabDom()}
                {...(!props?.tabsProps ? {} : omit(props.tabsProps, ['className', 'items']))}
            />
        )
    }];

    return !dropdownEnabled ? hyperlinkDom : (
        <Dropdown
            menu={{items: menuItems}}
            classNames={{
                // @ts-ignore
                root: classnames(`${clazzPrefix}-trigger`, `${clazzPrefix}-popup`, fieldStyle.hashId, props?.dropdownProps?.classNames?.root)
            }}
            {...(!props?.dropdownProps ? {} : omit(props?.dropdownProps, ['className', 'classNames']))}
        >
            {hyperlinkDom}
        </Dropdown>
    );
};
