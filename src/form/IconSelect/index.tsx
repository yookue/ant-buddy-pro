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
import {ConfigProvider, Input, Select, Empty, Space, Tooltip, type InputRef, type SelectProps, type RefSelectProps, type TooltipProps} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {type LabeledValue} from 'antd/es/select';
import Wave from 'antd/es/_util/wave';
import {default as Icon} from '@ant-design/icons';
import {type ThemeType as IconThemeType} from '@ant-design/icons-svg/es/types';
import {ProCard} from '@ant-design/pro-card';
import {ProFormSelect} from '@ant-design/pro-form';
import {type FieldProps, type ProFormFieldItemProps} from '@ant-design/pro-form/es/interface';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import {nanoid} from '@ant-design/pro-utils';
import {For, MapIterator} from '@yookue/react-condition';
import {StringUtils, ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import {Scrollbars} from 'rc-scrollbars';
import {type DefaultOptionType} from 'rc-select/es/select';
import omit from 'rc-util/es/omit';
import {allIconTypes, type IconSceneType} from '@/type/antd-icons';
import {MenuTabs} from '@/layout/MenuTabs';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {ElementUtils} from '@/util/ElementUtils';
import {PropsUtils} from '@/util/PropsUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type IconOptionMode = 'icon' | 'text';


export type SelectFieldProps = Omit<ProFormFieldItemProps<SelectProps, RefSelectProps>, 'fieldProps'> & {
    fieldProps?: FieldProps<RefSelectProps> & Omit<SelectProps, 'dropdownRender' | 'menuItemSelectedIcon' | 'filterOption' | 'filterSort' | 'listHeight' | 'loading' | 'optionLabelProp' | 'options' | 'onPopupScroll'>;
};


export type IntlLocaleProps = {
    /**
     * @description Search
     * @description.zh-CN 搜索
     * @description.zh-TW 搜索
     */
    search?: string;

    /**
     * @description Outlined
     * @description.zh-CN 线框风格
     * @description.zh-TW 線框風格
     */
    outlined?: string;

    /**
     * @description Filled
     * @description.zh-CN 实底风格
     * @description.zh-TW 實底風格
     */
    filled?: string;

    /**
     * @description TwoTone
     * @description.zh-CN 双色风格
     * @description.zh-TW 雙色風格
     */
    twotone?: string;

    /**
     * @description Direction
     * @description.zh-CN 方向类
     * @description.zh-TW 方向類
     */
    direction?: string;

    /**
     * @description Suggestion
     * @description.zh-CN 建议类
     * @description.zh-TW 建議類
     */
    suggestion?: string;

    /**
     * @description Editor
     * @description.zh-CN 编辑类
     * @description.zh-TW 編輯類
     */
    editor?: string;

    /**
     * @description Data
     * @description.zh-CN 数据类
     * @description.zh-TW 數據類
     */
    data?: string;

    /**
     * @description Logo
     * @description.zh-CN 品牌类
     * @description.zh-TW 品牌類
     */
    logo?: string;

    /**
     * @description Web
     * @description.zh-CN 网站类
     * @description.zh-TW 網站類
     */
    web?: string;
};


export type IconSelectProps = SelectFieldProps & {
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
    optionMode?: IconOptionMode;

    /**
     * @description Whether to divide the options into groups
     * @description.zh-CN 是否将选项分组
     * @description.zh-TW 是否將選項分組
     * @default true
     */
    optionGroup?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd
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
    themeTypes?: IconThemeType[];

    /**
     * @description The default theme type
     * @description.zh-CN 默认的主题类型
     * @description.zh-TW 默認的主題類型
     * @default 'outlined'
     */
    defaultThemeType?: IconThemeType;

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
    sceneTypes?: IconSceneType[];

    /**
     * @description The default scene type
     * @description.zh-CN 默认的场景类型
     * @description.zh-TW 默認的場景類型
     * @default 'direction'
     */
    defaultSceneType?: IconSceneType;

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
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description Whether to use Tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     * @default false
     */
    tooltipCtrl?: boolean;

    /**
     * @description The props of Antd Tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>;
};


/**
 * Component for displaying a select box with Ant Design icons
 *
 * @author David Hsing
 */
export const IconSelect: React.FC<IconSelectProps> = (props?: IconSelectProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const formContext = React.useContext(FormContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-icon-select');
    const intlType = useIntl();

    ConsoleUtils.warn(!!formContext?.form, true, 'IconSelect',  `Field '${props?.name}' needs a Form instance`);

    // Initialize the default props
    const {
        optionMode = 'icon',
        optionGroup = true,
        proField = true,
        themeTypes = ['outlined', 'filled', 'twotone'],
        defaultThemeType = 'outlined',
        themeInkBar = true,
        sceneTypes = ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'],
        defaultSceneType = 'direction',
        sceneInkBar = true,
        sceneEntryWidth = '150px',
        tooltipCtrl = false,
    } = props ?? {};

    const entryId = nanoid();
    const [dropdownOpen, setDropdownOpen] = React.useState<boolean>((props?.fieldProps?.open || props?.fieldProps?.defaultOpen) ?? false);
    const defaultTheme = (defaultThemeType && themeTypes?.includes(defaultThemeType)) ? defaultThemeType : (themeTypes ? themeTypes[0] : undefined);
    const [activeTab, setActiveTab] = React.useState<IconThemeType | undefined>(defaultTheme);
    const [searchWord, setSearchWord] = React.useState<string | undefined>(props?.fieldProps?.searchValue);
    const [searchDisabled, setSearchDisabled] = React.useState<boolean>(false);
    const searchRef = React.useRef<InputRef>(null);

    const buildTextOptions = () => {
        const result: any[] = [];
        ['outlined', 'filled', 'twotone'].filter(themeType => themeTypes?.includes(themeType as IconThemeType)).forEach(themeType => {
            ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'].filter(sceneType => sceneTypes?.includes(sceneType as IconSceneType)).forEach(sceneType => {
                const collection = allIconTypes.get([themeType, sceneType]);
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
                        ObjectUtils.setProp(optItem, (props?.fieldProps?.fieldNames?.label ?? 'label'), content);
                        ObjectUtils.setProp(optItem, (props?.fieldProps?.fieldNames?.value ?? 'value'), key);
                        children.push(optItem);
                    }
                });
                if (children.length === 0) {
                    return;
                }
                if (optionGroup) {
                    const themeTitle = ObjectUtils.getProp(props?.localeProps, `${themeType}Theme`) || intlLocales.get([intlType.locale, `${themeType}Theme`]) || intlLocales.get(['en_US', `${themeType}Theme`]);
                    const sceneTitle = ObjectUtils.getProp(props?.localeProps, `${sceneType}Scene`) || intlLocales.get([intlType.locale, `${sceneType}Scene`]) || intlLocales.get(['en_US', `${sceneType}Scene`]);
                    const optGroup = {
                        optionType: 'optGroup',
                        children: children,
                    };
                    ObjectUtils.setProp(optGroup, (props?.fieldProps?.fieldNames?.label ?? 'label'), `${themeTitle}-${sceneTitle}`);
                    ObjectUtils.setProp(optGroup, (props?.fieldProps?.fieldNames?.value ?? 'value'), 'optGroup');
                    result.push(optGroup);
                } else {
                    result.push(...children);
                }
            });
        });
        return result;
    };

    const textOptions = React.useMemo(() => {
        return buildTextOptions();
    }, [themeTypes, sceneTypes]);

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
        const elements = document.querySelectorAll<HTMLElement>(`[data-icon-select-dropdown='${entryId}'] [data-icon-select-option]`);
        elements?.forEach(item => ElementUtils.removeClazz(item as HTMLElement, `${clazzPrefix}-icon-selected`));
    };

    const changeIconBadge = (iconName: string, selected: boolean) => {
        if (StringUtils.isBlank(iconName)) {
            return;
        }
        const element = document.querySelector<HTMLElement>(`[data-icon-select-dropdown='${entryId}'] [data-icon-select-option='${iconName}']`);
        if (element) {
            selected ? ElementUtils.addClazz(element, `${clazzPrefix}-icon-selected`) : ElementUtils.removeClazz(element, `${clazzPrefix}-icon-selected`);
        }
    };

    const handleIconClick = (iconName: string) => {
        if (StringUtils.isBlank(iconName)) {
            return;
        }
        if (isIconSelected(iconName)) {
            changeIconBadge(iconName, false);
            if (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') {
                props?.fieldProps?.onDeselect?.(iconName, {
                    label: iconName,
                    value: iconName,
                } as DefaultOptionType);
                const fieldValue = formContext?.form?.getFieldValue(props?.name);
                if (fieldValue) {
                    const result = !props?.fieldProps?.labelInValue ? fieldValue.filter((item: any) => {
                        return !StringUtils.equalsIgnoreCase(item as string, iconName);
                    }) : fieldValue.filter((item: LabeledValue) => {
                        return !StringUtils.equalsIgnoreCase(item?.value as string, iconName);
                    });
                    formContext?.form?.setFieldValue(props?.name, result);
                    props?.fieldProps?.onChange?.(result, {
                        label: iconName,
                        value: iconName,
                    } as DefaultOptionType);
                } else {
                    formContext?.form?.setFieldValue(props?.name, undefined);
                    props?.fieldProps?.onChange?.(undefined, {
                        label: iconName,
                        value: iconName,
                    } as DefaultOptionType);
                }
            } else {
                formContext?.form?.setFieldValue(props?.name, undefined);
                props?.fieldProps?.onChange?.(undefined, {
                    label: iconName,
                    value: iconName,
                } as DefaultOptionType);
                setDropdownOpen(false);
            }
        } else {
            if (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') {
                props?.fieldProps?.onSelect?.(iconName, {
                    label: iconName,
                    value: iconName,
                } as DefaultOptionType);
            } else {
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
                    const newValue = [...fieldValue, value];
                    formContext?.form?.setFieldValue(props?.name, newValue);
                    props?.fieldProps?.onChange?.(newValue, {
                        label: iconName,
                        value: iconName,
                    } as DefaultOptionType);
                } else {
                    const newValue = [...fieldValue, iconName];
                    formContext?.form?.setFieldValue(props?.name, newValue);
                    props?.fieldProps?.onChange?.(newValue, {
                        label: iconName,
                        value: iconName,
                    } as DefaultOptionType);
                }
            } else {
                let newValue: any | any[];
                if (props?.fieldProps?.labelInValue) {
                    const value: LabeledValue = {
                        label: iconName,
                        value: iconName,
                    };
                    newValue = (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') ? [value] : value;
                } else {
                    newValue = (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') ? [iconName] : iconName;
                }
                formContext?.form?.setFieldValue(props?.name, newValue);
                props?.fieldProps?.onChange?.(newValue, {
                    label: iconName,
                    value: iconName,
                } as DefaultOptionType);
            }
            if (props?.fieldProps?.mode !== 'multiple' && props?.fieldProps?.mode !== 'tags') {
                setDropdownOpen(false);
            }
        }
    };

    const buildIconOptions = (themeType: IconThemeType, sceneType: IconSceneType) => {
        const classIcons = allIconTypes.get([themeType, sceneType]);
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
                                    title={!tooltipCtrl ? key : undefined}
                                    style={props?.optionIconStyle}
                                    onClick={() => handleIconClick(key)}
                                >
                                    <Icon component={value}/>
                                </div>
                            </Wave>
                        </div>
                    );
                    return !tooltipCtrl ? content : (
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
                    return (
                        <div className={props?.className} style={{display: 'none'}}></div>
                    );
                }}
                onScroll={event => {
                    // @ts-ignore
                    props?.fieldProps?.onPopupScroll?.(event);
                }}
            >
                {content}
            </Scrollbars>
        );
    };

    const buildIconTabs = (themeType: IconThemeType) => {
        if (optionGroup) {
            return ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'].filter(item => sceneTypes?.includes(item as IconSceneType)).map(item => {
                return {
                    key: item,
                    label: ObjectUtils.getProp(props?.localeProps, `${item}Scene`) || intlLocales.get([intlType.locale, `${item}Scene`]) || intlLocales.get(['en_US', `${item}Scene`]),
                    content: wrapIconOptions(buildIconOptions(themeType, item as IconSceneType)),
                };
            });
        }
        const classified = ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'].filter(item => sceneTypes?.includes(item as IconSceneType)).map(item => {
            return buildIconOptions(themeType, item as IconSceneType);
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

    const buildThemeTabs = (themeType: IconThemeType) => {
        if (!themeTypes?.includes(themeType)) {
            return undefined;
        }
        const menuItems = buildIconTabs(themeType);
        if (!menuItems || menuItems.length === 0) {
            return undefined;
        }
        const activeKey = !optionGroup ? menuItems[0].key : (((defaultSceneType && sceneTypes?.includes(defaultSceneType)) ? defaultSceneType : undefined) || (sceneTypes ? sceneTypes[0] : undefined));
        return (
            <MenuTabs
                menuProps={{
                    items: menuItems,
                    defaultActiveKey: activeKey,
                    defaultActiveFirst: true,
                }}
                entryWidth={sceneEntryWidth}
                entryInkBar={sceneInkBar}
                entrySelectionBold={false}
                entryVisible={optionGroup}
                tabClazz={`${clazzPrefix}-scene-tab`}
                tabTitleVisible={false}
                tabContentClazz={`${clazzPrefix}-scene-tab-content`}
            />
        );
    };

    const themeItems = ['outlined', 'filled', 'twotone'].filter(item => themeTypes?.includes(item as IconThemeType)).map(item => {
        return {
            key: item,
            label: ObjectUtils.getProp(props?.localeProps, `${item}Theme`) || intlLocales.get([intlType.locale, `${item}Theme`]) || intlLocales.get(['en_US', `${item}Theme`]),
            children: buildThemeTabs(item as IconThemeType),
        };
    });

    const renderDropdown = () => {
        return (
            <div
                className={classNames(`${clazzPrefix}-dropdown`, props?.fieldProps?.popupClassName)}
                style={props?.fieldProps?.dropdownStyle}
                onMouseDown={event => {
                    event.preventDefault();
                    event.stopPropagation();
                }}
                onClick={(props?.fieldProps?.showSearch === false) ? undefined : (event) => {
                    if (event.target !== searchRef.current?.input && searchRef.current?.input === document.activeElement) {
                        // Disabled and re-enable the search box to restore non-focus state
                        setSearchDisabled(true);
                        setTimeout(() => setSearchDisabled(false), 50);
                    }
                }}
                data-icon-select-dropdown={entryId}
            >
                <ProCard
                    className={classNames(`${clazzPrefix}-dropdown-card`, (themeInkBar ? `${clazzPrefix}-ink-bar` : undefined))}
                    tabs={{
                        activeKey: activeTab,
                        type: 'card',
                        items: themeItems,
                        onChange: (activeKey: string) => {
                            setActiveTab(activeKey as IconThemeType);
                        },
                        tabBarExtraContent: (props?.fieldProps?.showSearch === false) ? undefined : (
                            <Input.Search
                                ref={searchRef}
                                placeholder={props?.localeProps?.search || intlLocales.get([intlType.locale, 'searchBox']) || intlLocales.get(['en_US', 'searchBox'])}
                                allowClear={true}
                                size='small'
                                disabled={searchDisabled}
                                onSearch={(value: string) => {
                                    setSearchWord(value);
                                    props?.fieldProps?.onSearch?.(value);
                                }}
                            />
                        )
                    }}
                />
            </div>
        );
    };

    const handleOptionClear = () => {
        if (optionMode === 'icon') {
            clearIconsBadge();
        }
    };

    const handleOptionDeselect = (value: string | number | LabeledValue, option: DefaultOptionType) => {
        if (optionMode === 'icon') {
            if (typeof value === 'string' || typeof value === 'number') {
                changeIconBadge(value as string, false);
            } else {
                changeIconBadge(value?.value as string, false);
            }
        }
        props?.fieldProps?.onDeselect?.(value, option);
    };

    const handleDropdownOpenChange = (open: boolean) => {
        setDropdownOpen(open);
        props?.fieldProps?.onDropdownVisibleChange?.(open);
    };

    const entryImmutable = editContext.mode === 'read' || props?.fieldProps?.disabled || props?.proFieldProps?.mode === 'read' || props?.proFieldProps?.readonly;
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'disabled', 'virtual', 'open', 'popupClassName', 'showSearch', 'onClear', 'onDeselect', 'onDropdownVisibleChange']);

    if (proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'optionMode', 'optionGroup', 'proField', 'themeTypes', 'defaultThemeType', 'themeInkBar', 'sceneTypes', 'defaultSceneType', 'sceneInkBar', 'sceneEntryWidth', 'optionWrapperClazz', 'optionWrapperStyle', 'optionIconClazz', 'optionIconStyle', 'localeProps', 'tooltipCtrl', 'tooltipProps']);
        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, props?.fieldProps?.className),
                    ...omitFieldProps,
                    disabled: entryImmutable,
                    dropdownRender: (optionMode === 'text' || !themeTypes || !sceneTypes || entryImmutable) ? undefined : (() => renderDropdown()),
                    options: textOptions,
                    virtual: props?.fieldProps?.virtual ?? false,
                    open: dropdownOpen,
                    popupClassName: (optionMode === 'text' || !themeTypes || !sceneTypes || entryImmutable) ? classNames(`${clazzPrefix}-popup`, props?.fieldProps?.popupClassName) : undefined,
                    showSearch: props?.fieldProps?.showSearch ?? true,
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
                className={classNames(clazzPrefix, props?.fieldProps?.className)}
                {...restProps}
                {...omitFieldProps}
                disabled={entryImmutable}
                dropdownRender={(optionMode === 'text' || !themeTypes || !sceneTypes || entryImmutable) ? undefined : (() => renderDropdown())}
                options={textOptions}
                virtual={props?.fieldProps?.virtual ?? false}
                open={dropdownOpen}
                popupClassName={(optionMode === 'text' || !themeTypes || !sceneTypes || entryImmutable) ? classNames(`${clazzPrefix}-popup`, props?.fieldProps?.popupClassName) : undefined}
                showSearch={props?.fieldProps?.showSearch ?? true}
                onClear={handleOptionClear}
                onDeselect={handleOptionDeselect}
                onDropdownVisibleChange={handleDropdownOpenChange}
            />
        );
    }
};
