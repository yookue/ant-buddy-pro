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
import {ConfigProvider, Input, Select, Empty, Space, Tooltip, type InputRef, type TooltipProps} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {type LabeledValue} from 'antd/es/select';
import Wave from 'antd/es/_util/wave';
import {default as Icon} from '@ant-design/icons';
import {type ThemeType} from '@ant-design/icons-svg/es/types';
import {ProCard} from '@ant-design/pro-card';
import {ProFormSelect} from '@ant-design/pro-form';
import {type ProFormSelectProps} from '@ant-design/pro-form/es/components/Select';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import {nanoid} from '@ant-design/pro-utils';
import {For, MapIterator} from '@yookue/react-condition';
import {StringUtils, ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import {Scrollbars} from 'rc-scrollbars';
import {type DefaultOptionType} from 'rc-select/es/select';
import omit from 'rc-util/es/omit';
import {allIconClasses, type SceneType} from '@/type/antd-icons';
import {MenuTabs} from '@/layout/MenuTabs';
import {ElementUtils} from '@/util/ElementUtils';
import {PropsUtils} from '@/util/PropsUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type IntlLocaleProps = {
    /**
     * @description The placeholder of the search box
     * @description.zh-CN 搜索框的占位符
     * @description.zh-TW 搜索框的占位符
     */
    searchBox?: string,

    /**
     * @description The display name of 'Outlined' theme type
     * @description.zh-CN 线框风格的显示名称
     * @description.zh-TW 線框風格的顯示名稱
     */
    outlinedTheme?: string,

    /**
     * @description The display name of 'Filled' theme type
     * @description.zh-CN 实底风格的显示名称
     * @description.zh-TW 實底風格的顯示名稱
     */
    filledTheme?: string,

    /**
     * @description The display name of 'TwoTone' theme type
     * @description.zh-CN 双色风格的显示名称
     * @description.zh-TW 雙色風格的顯示名稱
     */
    twotoneTheme?: string,

    /**
     * @description The display name of 'Direction' scene type
     * @description.zh-CN 方向场景的显示名称
     * @description.zh-TW 方向場景的顯示名稱
     */
    directionScene?: string,

    /**
     * @description The display name of 'Suggestion' scene type
     * @description.zh-CN 建议场景的显示名称
     * @description.zh-TW 建議場景的顯示名稱
     */
    suggestionScene?: string,

    /**
     * @description The display name of 'Editor' scene type
     * @description.zh-CN 编辑场景的显示名称
     * @description.zh-TW 編輯場景的顯示名稱
     */
    editorScene?: string,

    /**
     * @description The display name of 'Data' scene type
     * @description.zh-CN 数据场景的显示名称
     * @description.zh-TW 數據場景的顯示名稱
     */
    dataScene?: string,

    /**
     * @description The display name of 'Logo' scene type
     * @description.zh-CN 品牌场景的显示名称
     * @description.zh-TW 品牌場景的顯示名稱
     */
    logoScene?: string,

    /**
     * @description The display name of 'Web' scene type
     * @description.zh-CN 网站场景的显示名称
     * @description.zh-TW 網站場景的顯示名稱
     */
    webScene?: string,
};


export type IconSelectProps = ProFormSelectProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-icon-select'
     */
    clazzPrefix?: string;

    /**
     * @description The option mode, text means normal
     * @description.zh-CN 选项模式，文本或图标
     * @description.zh-TW 選項模式，文本或圖標
     * @default 'icon'
     */
    optionMode?: 'text' | 'icon';

    /**
     * @description Whether to divide the options into groups
     * @description.zh-CN 是否将选项分组
     * @description.zh-TW 是否將選項分組
     * @default true
     */
    optionGroup?: boolean;

    /**
     * @description Whether to use ProFormField instead of Input
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The theme types
     * @description.zh-CN 主题类型
     * @description.zh-TW 主題類型
     * @default ['outlined', 'filled', 'twotone']
     */
    themeTypes?: ThemeType[];

    /**
     * @description The default theme type
     * @description.zh-CN 默认的主题类型
     * @description.zh-TW 默認的主題類型
     * @default 'outlined'
     */
    defaultThemeType?: ThemeType;

    /**
     * @description Whether to display the ink bar for the theme types
     * @description.zh-CN 是否显示主题类型的活跃指示条
     * @description.zh-TW 是否顯示主題類型的活躍指示條
     * @default true
     */
    themeInkBar?: boolean;

    /**
     * @description The scene types
     * @description.zh-CN 场景类型
     * @description.zh-TW 場景類型
     * @default ['direction', 'suggestion', 'editor', 'data', 'logo', 'web']
     */
    sceneTypes?: SceneType[];

    /**
     * @description The default scene type
     * @description.zh-CN 默认的场景类型
     * @description.zh-TW 默認的場景類型
     * @default 'direction'
     */
    defaultSceneType?: SceneType;

    /**
     * @description Whether to display the ink bar for the scene types
     * @description.zh-CN 是否显示场景类型的活跃指示条
     * @description.zh-TW 是否顯示場景類型的活躍指示條
     * @default true
     */
    sceneInkBar?: boolean;

    /**
     * @description The width of scene title
     * @description.zh-CN 場景类型的宽度
     * @description.zh-TW 場景類型的寬度
     * @default '150px'
     */
    sceneEntryWidth?: string;

    /**
     * @description The CSS class name of the icon option wrapper
     * @description.zh-CN 包裹图标选项 div 的 CSS 类名
     * @description.zh-TW 包裹圖標選項 div 的 CSS 類名
     */
    optionWrapperClazz?: string;

    /**
     * @description The CSS style of the icon option wrapper
     * @description.zh-CN 包裹图标选项 div 的 CSS 样式
     * @description.zh-TW 包裹圖標選項 div 的 CSS 樣式
     */
    optionWrapperStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the icon option
     * @description.zh-CN 图标选项的 CSS 类名
     * @description.zh-TW 圖標選項的 CSS 類名
     */
    optionIconClazz?: string;

    /**
     * @description The CSS style of the icon option
     * @description.zh-CN 图标选项的 CSS 样式
     * @description.zh-TW 圖標選項的 CSS 樣式
     */
    optionIconStyle?: React.CSSProperties;

    /**
     * @description Whether to display the search box
     * @description.zh-CN 是否显示搜索框
     * @description.zh-TW 是否顯示搜索框
     * @default true
     */
    searchBox?: boolean;

    /**
     * @description The locale props for displaying icons dropdown
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description Whether to use tooltip instead of raw title
     * @description.zh-CN 是否使用 Tooltip 替代 title
     * @description.zh-TW 是否使用 Tooltip 替代 title
     * @default false
     */
    useTooltip?: boolean;

    /**
     * @description The properties of tooltip for checkbox
     * @description.zh-CN 图标选项的 Tooltip 属性
     * @description.zh-TW 圖標選項的 Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>,
};


export const IconSelect: React.FC<IconSelectProps> = (props?: IconSelectProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const formContext = React.useContext(FormContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-icon-select');

    const [dropdownOpen, setDropdownOpen] = React.useState(props?.fieldProps?.open);
    const defaultTheme = (props?.defaultThemeType && props?.themeTypes?.includes(props?.defaultThemeType)) ? props.defaultThemeType : (props?.themeTypes ? props.themeTypes[0] : undefined);
    const [activeTab, setActiveTab] = React.useState(defaultTheme);
    const searchRef = React.useRef<InputRef>(null);
    const [searchWord, setSearchWord] = React.useState(props?.fieldProps?.searchValue);
    const [searchDisabled, setSearchDisabled] = React.useState(false);
    const entryId = nanoid();
    const intlType = useIntl();

    const buildTextOptions = () => {
        const result: any[] = [];
        ['outlined', 'filled', 'twotone'].filter(themeType => props?.themeTypes?.includes(themeType as ThemeType)).forEach(themeType => {
            ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'].filter(sceneType => props?.sceneTypes?.includes(sceneType as SceneType)).forEach(sceneType => {
                const collection: ReadonlyMap<string, React.ComponentType<any>> = allIconClasses.get([themeType, sceneType]);
                if (!collection) {
                    return;
                }
                const children: any[] = [];
                collection.forEach((value, key) => {
                    if (StringUtils.isBlank(searchWord) || StringUtils.includesIgnoreCase(key, searchWord)) {
                        const optItem = {};
                        const content = (
                            <Space>
                                <Icon component={value}/>
                                <span>{key}</span>
                            </Space>
                        );
                        ObjectUtils.setProperty(optItem, (props?.fieldProps?.fieldNames?.label ?? 'label'), content);
                        ObjectUtils.setProperty(optItem, (props?.fieldProps?.fieldNames?.value ?? 'value'), key);
                        children.push(optItem);
                    }
                });
                if (children.length === 0) {
                    return;
                }
                if (props?.optionGroup) {
                    const themeTitle = ObjectUtils.getProperty(props?.localeProps, `${themeType}Theme`) || intlLocales.get([intlType.locale, `${themeType}Theme`]) || intlLocales.get(['en_US', `${themeType}Theme`]);
                    const sceneTitle = ObjectUtils.getProperty(props?.localeProps, `${sceneType}Scene`) || intlLocales.get([intlType.locale, `${sceneType}Scene`]) || intlLocales.get(['en_US', `${sceneType}Scene`]);
                    const optGroup = {
                        optionType: 'optGroup',
                        children: children,
                    };
                    ObjectUtils.setProperty(optGroup, (props?.fieldProps?.fieldNames?.label ?? 'label'), `${themeTitle}-${sceneTitle}`);
                    ObjectUtils.setProperty(optGroup, (props?.fieldProps?.fieldNames?.value ?? 'value'), 'optGroup');
                    result.push(optGroup);
                } else {
                    result.push(...children);
                }
            });
        });
        return result;
    };

    const isIconSelected = (iconName?: string) => {
        const fieldValue = formContext?.form?.getFieldValue(props?.name);
        if (!fieldValue || StringUtils.isBlank(iconName)) {
            return false;
        }
        if (Array.isArray(fieldValue)) {
            return fieldValue.some(item => props?.fieldProps?.labelInValue ? StringUtils.equalsIgnoreCase(item?.value as string, iconName) : StringUtils.equalsIgnoreCase(item as string, iconName));
        }
        return props?.fieldProps?.labelInValue ? StringUtils.equalsIgnoreCase(fieldValue?.value, iconName) : StringUtils.equalsIgnoreCase(fieldValue, iconName);
    };

    const clearIconsBadge = () => {
        const elements = document.querySelectorAll(`[data-icon-select-dropdown='${entryId}'] [data-icon-select-option]`);
        elements?.forEach(item => ElementUtils.removeClassName(item as HTMLElement, `${clazzPrefix}-icon-selected`));
    };

    const changeIconBadge = (iconName: string, selected: boolean) => {
        if (StringUtils.isBlank(iconName)) {
            return;
        }
        const element = document.querySelector(`[data-icon-select-dropdown='${entryId}'] [data-icon-select-option='${iconName}']`) as HTMLElement;
        if (element) {
            selected ? ElementUtils.appendClassName(element, `${clazzPrefix}-icon-selected`) : ElementUtils.removeClassName(element, `${clazzPrefix}-icon-selected`);
        }
    };

    const handleIconClick = (iconName: string) => {
        if (StringUtils.isBlank(iconName)) {
            return;
        }
        if (isIconSelected(iconName)) {
            if (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') {
                changeIconBadge(iconName, false);
                const fieldValue = formContext?.form?.getFieldValue(props?.name);
                if (fieldValue) {
                    const result = !props?.fieldProps?.labelInValue ? fieldValue.filter((item: any) => {
                        return !StringUtils.equalsIgnoreCase(item as string, iconName);
                    }) : fieldValue.filter((item: LabeledValue) => {
                        return !StringUtils.equalsIgnoreCase(item?.value as string, iconName);
                    });
                    formContext?.form?.setFieldValue(props?.name, result);
                } else {
                    formContext?.form?.setFieldValue(props?.name, undefined);
                }
            } else {
                setDropdownOpen(false);
            }
        } else {
            if (props?.fieldProps?.mode !== 'multiple' && props?.fieldProps?.mode !== 'tags') {
                clearIconsBadge();
            }
            changeIconBadge(iconName, true);
            const fieldValue = formContext?.form?.getFieldValue(props?.name);
            if (fieldValue && (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags')) {
                if (props?.fieldProps?.labelInValue) {
                    const value: LabeledValue = {
                        label: iconName,
                        value: iconName,
                    };
                    formContext?.form?.setFieldValue(props?.name, [...fieldValue, value]);
                } else {
                    formContext?.form?.setFieldValue(props?.name, [...fieldValue, iconName]);
                }
            } else {
                if (props?.fieldProps?.labelInValue) {
                    const value: LabeledValue = {
                        label: iconName,
                        value: iconName,
                    };
                    const result = (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') ? [value] : value;
                    formContext?.form?.setFieldValue(props?.name, result);
                } else {
                    const result = (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') ? [iconName] : iconName;
                    formContext?.form?.setFieldValue(props?.name, result);
                }
            }
            if (props?.fieldProps?.mode !== 'multiple' && props?.fieldProps?.mode !== 'tags') {
                setDropdownOpen(false);
            }
        }
    };

    const buildIconOptions = (themeType: ThemeType, sceneType: SceneType) => {
        const classIcons: ReadonlyMap<string, React.ComponentType<any>> = allIconClasses.get([themeType, sceneType]);
        if (!classIcons || (StringUtils.isNotBlank(searchWord) && !Array.from(classIcons.keys()).find(key => StringUtils.includesIgnoreCase(key, searchWord)))) {
            return undefined;
        }
        return (
            <MapIterator
                of={classIcons}
                render={(value: any, key: any) => {
                    if (StringUtils.isNotBlank(searchWord) && !StringUtils.includesIgnoreCase(key, searchWord)) {
                        return undefined;
                    }
                    const selected = isIconSelected(key);
                    const content = (
                        <div
                            key={key}
                            className={classNames(`${clazzPrefix}-icon-wrapper`, props?.optionWrapperClazz, (selected ? `${clazzPrefix}-icon-selected` : undefined))}
                            style={props?.optionWrapperStyle}
                            data-icon-select-option={key}
                        >
                            <Wave>
                                <div
                                    className={classNames(`${clazzPrefix}-icon-option`, props?.optionIconClazz)}
                                    title={!props?.useTooltip ? key : undefined}
                                    style={props?.optionIconStyle}
                                    onClick={() => handleIconClick(key)}
                                >
                                    <Icon component={value}/>
                                </div>
                            </Wave>
                        </div>
                    );
                    return !props?.useTooltip ? content : (
                        <Tooltip title={key} {...props?.tooltipProps}>
                            {content}
                        </Tooltip>
                    );
                }}
            />
        );
    };

    const wrapIconOptions = (content?: React.ReactNode) => {
        if (!content) {
            return (
                <div className={`${clazzPrefix}-search-mismatch`}>
                    {props?.fieldProps?.notFoundContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
                </div>
            );
        }
        return (
            <Scrollbars
                className={`${clazzPrefix}-scroll-area`}
                autoHide={true}
                autoHeight={true}
                autoHeightMax={276}
                hideTracksWhenNotNeeded={true}
                renderView={props => {
                    const style: React.CSSProperties = {
                        display: 'flex',
                        flexFlow: 'row wrap',
                        overflowX: 'hidden',
                        overflowY: 'scroll',
                        ...(!props?.style ? {} : omit(props.style, ['overflow', 'marginBottom'])),
                    };
                    return (
                        <div className={props?.className} style={style}>
                            {props?.children}
                        </div>
                    );
                }}
                renderTrackHorizontal={props => {
                    const style: React.CSSProperties = {
                        display: 'none',
                        visibility: 'hidden',
                    };
                    return (
                        <div className={props?.className} style={style}>
                            {props?.children}
                        </div>
                    );
                }}
                onScroll={ev => {
                    if (typeof props?.fieldProps?.onPopupScroll === 'function') {
                        // @ts-ignore
                        props.fieldProps.onPopupScroll(ev);
                    }
                }}
            >
                {content}
            </Scrollbars>
        );
    };

    const buildIconTabs = (themeType: ThemeType) => {
        if (props?.optionGroup) {
            return ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'].filter(item => props?.sceneTypes?.includes(item as SceneType)).map(item => {
                return {
                    key: item,
                    label: ObjectUtils.getProperty(props?.localeProps, `${item}Scene`) || intlLocales.get([intlType.locale, `${item}Scene`]) || intlLocales.get(['en_US', `${item}Scene`]),
                    content: wrapIconOptions(buildIconOptions(themeType, item as SceneType)),
                };
            });
        }
        const classified = ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'].filter(item => props?.sceneTypes?.includes(item as SceneType)).map(item => {
            return buildIconOptions(themeType, item as SceneType);
        });
        if (!classified || classified.length === 0 || classified.every(item => ObjectUtils.isNil(item))) {
            return [{
                key: `${themeType}-all`,
                content: (
                    <div className={`${clazzPrefix}-search-mismatch`}>
                        {props?.fieldProps?.notFoundContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
                    </div>
                ),
            }];
        }
        const merged = (
            <>
                <For
                    of={classified}
                    render={(item: React.ReactNode) => {
                        return (
                            <>{item}</>
                        );
                    }}
                />
            </>
        );
        return [{
            key: `${themeType}-all`,
            content: wrapIconOptions(merged),
        }];
    };

    const buildThemeTabs = (themeType: ThemeType) => {
        if (!props?.themeTypes?.includes(themeType)) {
            return undefined;
        }
        const menuItems = buildIconTabs(themeType);
        if (!menuItems || menuItems.length === 0) {
            return undefined;
        }
        const activeKey = !props?.optionGroup ? menuItems[0].key : (((props?.defaultSceneType && props?.sceneTypes?.includes(props?.defaultSceneType)) ? props.defaultSceneType : undefined) || (props?.sceneTypes ? props.sceneTypes[0] : undefined));
        return (
            <MenuTabs
                menuProps={{
                    items: menuItems,
                    defaultActiveKey: activeKey,
                    defaultActiveFirst: true,
                }}
                entryWidth={props?.sceneEntryWidth}
                entryInkBar={props?.sceneInkBar}
                entrySelectionBold={false}
                entryVisible={props?.optionGroup}
                tabClazz={`${clazzPrefix}-scene-tab`}
                tabTitleVisible={false}
                tabContentClazz={`${clazzPrefix}-scene-tab-content`}
            />
        );
    };

    const themeItems = ['outlined', 'filled', 'twotone'].filter(item => props?.themeTypes?.includes(item as ThemeType)).map(item => {
        return {
            key: item,
            label: ObjectUtils.getProperty(props?.localeProps, `${item}Theme`) || intlLocales.get([intlType.locale, `${item}Theme`]) || intlLocales.get(['en_US', `${item}Theme`]),
            children: buildThemeTabs(item as ThemeType),
        };
    });

    const renderDropdown = () => {
        return (
            <div
                className={classNames(`${clazzPrefix}-dropdown`, props?.fieldProps?.popupClassName)}
                style={props?.fieldProps?.dropdownStyle}
                onMouseDown={ev => {
                    ev.preventDefault();
                    ev.stopPropagation();
                }}
                onClick={!props?.searchBox ? undefined : (ev) => {
                    if (ev.target !== searchRef.current?.input && searchRef.current?.input === document.activeElement) {
                        // Disabled and re-enable the search box to restore non-focus state
                        setSearchDisabled(true);
                        setTimeout(() => setSearchDisabled(false), 50);
                    }
                }}
                data-icon-select-dropdown={entryId}
            >
                <ProCard
                    className={classNames(props?.themeInkBar ? `${clazzPrefix}-ink-bar` : undefined)}
                    tabs={{
                        activeKey: activeTab,
                        type: 'card',
                        items: themeItems,
                        onChange: (activeKey: string) => {
                            setActiveTab(activeKey as ThemeType);
                        },
                        tabBarExtraContent: !props?.searchBox ? undefined : (
                            <Input.Search
                                ref={searchRef}
                                placeholder={props?.localeProps?.searchBox || intlLocales.get([intlType.locale, 'searchBox']) || intlLocales.get(['en_US', 'searchBox'])}
                                allowClear={true}
                                size='small'
                                disabled={searchDisabled}
                                onSearch={(value: string) => {
                                    setSearchWord(value);
                                    if (typeof props?.fieldProps?.onSearch === 'function') {
                                        props.fieldProps.onSearch(value);
                                    }
                                }}
                            />
                        )
                    }}
                />
            </div>
        );
    };

    const handleOptionClear = () => {
        if (props?.optionMode === 'icon') {
            clearIconsBadge();
        }
    };

    const handleOptionDeselect = (value: string | number | LabeledValue, option: DefaultOptionType) => {
        if (props?.optionMode === 'icon') {
            if (typeof value === 'string' || typeof value === 'number') {
                changeIconBadge(value as string, false);
            } else {
                changeIconBadge(value?.value as string, false);
            }
        }
        if (typeof props?.fieldProps?.onDeselect === 'function') {
            props.fieldProps.onDeselect(value, option);
        }
    };

    const handleDropdownOpenChange = (open: boolean) => {
        setDropdownOpen(open);
        if (typeof props?.fieldProps?.onDropdownVisibleChange === 'function') {
            props.fieldProps.onDropdownVisibleChange(open);
        }
    };

    const entryImmutable = (editContext.mode === 'read') || (props?.proFieldProps?.mode === 'read') || props?.fieldProps?.disabled;
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'dropdownRender', 'options', 'optionFilterProp', 'virtual', 'open', 'onClear', 'onDeselect', 'onDropdownVisibleChange']);

    if (props?.proField) {
        const restProps = !props ? {} : omit(props, ['clazzPrefix', 'className', 'optionMode', 'optionGroup', 'themeTypes', 'defaultThemeType', 'themeInkBar', 'sceneTypes', 'defaultSceneType', 'sceneInkBar', 'sceneEntryWidth', 'optionWrapperClazz', 'optionWrapperStyle', 'optionIconClazz', 'optionIconStyle', 'localeProps', 'useTooltip', 'tooltipProps', 'proField', 'fieldProps']);
        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, props?.className),
                    ...omitFieldProps,
                    dropdownRender: (props?.optionMode === 'text' || !props?.themeTypes || !props?.sceneTypes || entryImmutable) ? undefined : (() => renderDropdown()),
                    options: props?.fieldProps?.options ?? ((props?.request || props?.valueEnum) ? undefined : buildTextOptions()),
                    optionFilterProp: props?.fieldProps?.optionFilterProp || props?.fieldProps?.fieldNames?.value || 'value',
                    virtual: props?.fieldProps?.virtual ?? false,
                    open: dropdownOpen,
                    onClear: handleOptionClear,
                    onDeselect: handleOptionDeselect,
                    onDropdownVisibleChange: handleDropdownOpenChange,
                }}
            />
        );
    } else {
        const restProps = PropsUtils.pickForwardProps(props);
        return (
            <Select
                className={classNames(clazzPrefix, props?.className)}
                {...restProps}
                {...omitFieldProps}
                dropdownRender={(props?.optionMode === 'text' || !props?.themeTypes || !props?.sceneTypes || entryImmutable) ? undefined : (() => renderDropdown())}
                options={props?.fieldProps?.options ?? ((props?.request || props?.valueEnum) ? undefined : buildTextOptions())}
                optionFilterProp={props?.fieldProps?.optionFilterProp || props?.fieldProps?.fieldNames?.value || 'value'}
                virtual={props?.fieldProps?.virtual ?? false}
                open={dropdownOpen}
                onClear={handleOptionClear}
                onDeselect={handleOptionDeselect}
                onDropdownVisibleChange={handleDropdownOpenChange}
            />
        );
    }
};


IconSelect.defaultProps = {
    optionMode: 'icon',
    optionGroup: true,
    proField: true,
    themeTypes: ['outlined', 'filled', 'twotone'],
    defaultThemeType: 'outlined',
    themeInkBar: true,
    sceneTypes: ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'],
    defaultSceneType: 'direction',
    sceneInkBar: true,
    sceneEntryWidth: '150px',
    searchBox: true,
    useTooltip: false,
};
