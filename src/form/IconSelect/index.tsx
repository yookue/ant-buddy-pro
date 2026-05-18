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
import { ConfigProvider, Input, Select, Empty, Space, Tooltip, type InputRef, type SelectProps, type RefSelectProps, type TooltipProps, Form } from 'antd';
import { type LabeledValue } from 'antd/es/select';
import Wave from 'antd/es/_util/wave';
import { default as Icon } from '@ant-design/icons';
import { type ThemeType as IconThemeType } from '@ant-design/icons-svg/es/types';
import { ProFormSelect, useIntl } from '@ant-design/pro-components';
import { type FieldProps, type ProFormFieldItemProps } from '@ant-design/pro-components/es/form/typing';
import { EditOrReadOnlyContext } from '@ant-design/pro-components/es/form/BaseForm/EditOrReadOnlyContext';
import { omit } from '@rc-component/util';
import { If, For, MapIterator } from '@unikue/react-condition';
import { NanoidUtils, ObjectUtils, StringUtils } from '@unikue/ts-lang-utils';
import { useEventListener } from 'ahooks';
import classnames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars-4';
import { allIconTypes, type IconSceneType } from '@/type/design-icon';
import { type ReadonlyTabsType } from '@/type/declaration';
import { CardTabs, type CardTabsProps } from '@/layout/CardTabs';
import { MenuTabs } from '@/layout/MenuTabs';
import { ConsoleUtils } from '@/util/ConsoleUtils';
import { StyleUtils } from '@/util/StyleUtils';
import { intlLocales } from './locales';
import { useFieldStyle } from './styles';


export type IconOptionMode = 'icon' | 'text';


export type SelectFieldProps = Omit<ProFormFieldItemProps<SelectProps, RefSelectProps>, 'fieldProps'> & {
    fieldProps?: FieldProps<RefSelectProps> & Omit<SelectProps, 'popupRender' | 'menuItemSelectedIcon' | 'filterOption' | 'filterSort' | 'listHeight' | 'loading' | 'optionLabelProp' | 'options' | 'showSearch' | 'onPopupScroll'>;
};


export type MixinTabsProps = Omit<CardTabsProps, 'activeKey' | 'addIcon' | 'defaultActiveKey' | 'hideAdd' | 'inkBar' | 'items' | 'onEdit' | 'children'> & {
    /**
     * @description The type of the tabs
     * @description.zh-CN 标签页的类型
     * @description.zh-TW 標簽頁的類型
     */
    type?: ReadonlyTabsType;
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


export type IconSelectProps = Omit<SelectFieldProps, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-icon-select'
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
     * @description The properties of the tabs
     * @description.zh-CN 标签页的属性
     * @description.zh-TW 標簽頁的屬性
     */
    tabsProps?: MixinTabsProps;

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
     * @description Whether to display the search box or not
     * @description.zh-CN 是否显示搜索框
     * @description.zh-TW 是否顯示搜索框
     * @default true
     */
    searchBox?: boolean;

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
 * Component for displaying a select box with Ant Design icons
 *
 * @author David Hsing
 */
export const IconSelect: React.FC<IconSelectProps> = (props?: IconSelectProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-icon-select';
    const subClazzPrefix = props?.tabsProps?.clazzPrefix ?? 'abp-card-tabs';
    const intlType = useIntl();

    const form = Form.useFormInstance();

    ConsoleUtils.warn(!!form, true, 'IconSelect', `Field '${props?.name}' needs a Form instance`);

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
        searchBox = true,
        tooltipCtrl = false,
        locale = intlType.locale,
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [dropdownOpen, setDropdownOpen] = React.useState<boolean>((props?.fieldProps?.open || props?.fieldProps?.defaultOpen) ?? false);
    const [searchWord, setSearchWord] = React.useState<string>();
    const [searchDisabled, setSearchDisabled] = React.useState<boolean>(false);
    const searchRef = React.useRef<InputRef>(null);
    const fieldStyle = useFieldStyle(clazzPrefix, subClazzPrefix);

    // noinspection DuplicatedCode
    const handleWindowResize = () => {
        const inspect = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-entry-${fieldId}`);
        const sponsor = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-popup-${fieldId}`);
        if (inspect && sponsor) {
            StyleUtils.addStyle(sponsor, 'width', `${inspect.offsetWidth}px`);
            StyleUtils.addStyle(sponsor, 'min-width', `${inspect.offsetWidth}px`);
        }
    };
    useEventListener('resize', handleWindowResize);

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
                                <Icon component={value} />
                                <span>{key}</span>
                            </Space>
                        );
                        ObjectUtils.setProp(optItem, (props?.fieldProps?.fieldNames?.label ?? 'label'), content);
                        ObjectUtils.setProp(optItem, (props?.fieldProps?.fieldNames?.value ?? 'value'), key);
                        children.push(optItem);
                    }
                });
                if (!children.length) {
                    return;
                }
                if (optionGroup) {
                    const themeTitle = ObjectUtils.firstNotNil(ObjectUtils.getProp(props?.localeProps, `${themeType}Theme`), intlLocales.get([locale, `${themeType}Theme`]), intlLocales.get(['en_US', `${themeType}Theme`]));
                    const sceneTitle = ObjectUtils.firstNotNil(ObjectUtils.getProp(props?.localeProps, `${sceneType}Scene`), intlLocales.get([locale, `${sceneType}Scene`]), intlLocales.get(['en_US', `${sceneType}Scene`]));
                    const optGroup = {
                        optionType: 'optGroup',
                        children: children,
                    };
                    ObjectUtils.setProp(optGroup, (props?.fieldProps?.fieldNames?.label ?? 'label'), `${themeTitle}-${sceneTitle}`);
                    ObjectUtils.setProp(optGroup, (props?.fieldProps?.fieldNames?.value ?? 'value'), `optGroup-${themeType}-${sceneType}`);
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
    }, [themeTypes, sceneTypes, searchWord]);

    const isIconSelected = (iconName?: string) => {
        const fieldValue = form?.getFieldValue(props?.name);
        if (!fieldValue || StringUtils.isBlank(iconName)) {
            return false;
        }
        if (Array.isArray(fieldValue)) {
            return fieldValue.some(item => props?.fieldProps?.labelInValue ? StringUtils.equalsIgnoreCase(item?.value as string, iconName) : StringUtils.equalsIgnoreCase(item as string, iconName));
        }
        return props?.fieldProps?.labelInValue ? StringUtils.equalsIgnoreCase(fieldValue?.value, iconName) : StringUtils.equalsIgnoreCase(fieldValue, iconName);
    };

    const clearIconsBadge = () => {
        const inspects = document.querySelectorAll<HTMLElement>(`[data-icon-select-popup-wrapper='${fieldId}'] [data-icon-select-option]`);
        inspects?.forEach(item => StyleUtils.removeClazz(item as HTMLElement, `${clazzPrefix}-icon-selected`));
    };

    const changeIconBadge = (iconName: string, selected: boolean) => {
        if (StringUtils.isBlank(iconName)) {
            return;
        }
        const inspect = document.querySelector<HTMLElement>(`[data-icon-select-popup-wrapper='${fieldId}'] [data-icon-select-option='${iconName}']`);
        if (inspect) {
            if (selected) {
                StyleUtils.addClazz(inspect, `${clazzPrefix}-icon-selected`)
            } else {
                StyleUtils.removeClazz(inspect, `${clazzPrefix}-icon-selected`);
            }
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
                });
                const fieldValue = form?.getFieldValue(props?.name);
                if (fieldValue) {
                    const result = !props?.fieldProps?.labelInValue ? fieldValue.filter((item: any) => {
                        return !StringUtils.equalsIgnoreCase(item as string, iconName);
                    }) : fieldValue.filter((item: LabeledValue) => {
                        return !StringUtils.equalsIgnoreCase(item?.value as string, iconName);
                    });
                    if (form && props?.name) {
                        form.setFieldValue(props.name, result);
                        form.validateFields([props.name]);
                    }
                    props?.fieldProps?.onChange?.(result, {
                        label: iconName,
                        value: iconName,
                    });
                } else {
                    if (form && props?.name) {
                        form.setFieldValue(props.name, undefined);
                        form.validateFields([props.name]);
                    }
                    props?.fieldProps?.onChange?.(undefined, {
                        label: iconName,
                        value: iconName,
                    });
                }
            } else {
                if (form && props?.name) {
                    form.setFieldValue(props.name, undefined);
                    form.validateFields([props.name]);
                }
                props?.fieldProps?.onChange?.(undefined, {
                    label: iconName,
                    value: iconName,
                });
                setDropdownOpen(false);
            }
        } else {
            if (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags') {
                props?.fieldProps?.onSelect?.(iconName, {
                    label: iconName,
                    value: iconName,
                });
            } else {
                clearIconsBadge();
            }
            changeIconBadge(iconName, true);
            const fieldValue = form?.getFieldValue(props?.name);
            if (fieldValue && (props?.fieldProps?.mode === 'multiple' || props?.fieldProps?.mode === 'tags')) {
                if (props?.fieldProps?.labelInValue) {
                    const value: LabeledValue = {
                        label: iconName,
                        value: iconName,
                    };
                    const newValue = [...fieldValue, value];
                    if (form && props?.name) {
                        form.setFieldValue(props.name, newValue);
                        form.validateFields([props.name]);
                    }
                    props?.fieldProps?.onChange?.(newValue, {
                        label: iconName,
                        value: iconName,
                    });
                } else {
                    const newValue = [...fieldValue, iconName];
                    if (form && props?.name) {
                        form.setFieldValue(props.name, newValue);
                        form.validateFields([props.name]);
                    }
                    props?.fieldProps?.onChange?.(newValue, {
                        label: iconName,
                        value: iconName,
                    });
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
                if (form && props?.name) {
                    form.setFieldValue(props.name, newValue);
                    form.validateFields([props.name]);
                }
                props?.fieldProps?.onChange?.(newValue, {
                    label: iconName,
                    value: iconName,
                });
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
                            className={classnames(`${clazzPrefix}-icon-wrapper`, props?.optionWrapperClazz, (selected ? `${clazzPrefix}-icon-selected` : undefined))}
                            style={props?.optionWrapperStyle}
                            data-icon-select-option={key}
                        >
                            <Wave>
                                <div
                                    className={classnames(`${clazzPrefix}-icon-option`, props?.optionIconClazz)}
                                    title={!tooltipCtrl ? key : undefined}
                                    style={props?.optionIconStyle}
                                    onClick={() => handleIconClick(key)}
                                >
                                    <Icon component={value} />
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
                    {props?.fieldProps?.notFoundContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
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
                        <div className={props?.className} style={{ display: 'none' }}></div>
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
                    label: ObjectUtils.firstNotNil(ObjectUtils.getProp(props?.localeProps, `${item}Scene`), intlLocales.get([locale, `${item}Scene`]), intlLocales.get(['en_US', `${item}Scene`])),
                    children: wrapIconOptions(buildIconOptions(themeType, item as IconSceneType)),
                };
            });
        }
        const classified = ['direction', 'suggestion', 'editor', 'data', 'logo', 'web'].filter(item => sceneTypes?.includes(item as IconSceneType)).map(item => {
            return buildIconOptions(themeType, item as IconSceneType);
        });
        if (!classified || !classified.length || classified.every(item => ObjectUtils.isNil(item))) {
            return [{
                key: `${themeType}-all`,
                children: (
                    <div className={`${clazzPrefix}-search-mismatch`}>
                        {props?.fieldProps?.notFoundContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
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
            children: wrapIconOptions(merged),
        }];
    };

    const buildThemeTabs = (themeType: IconThemeType) => {
        if (!themeTypes?.includes(themeType)) {
            return undefined;
        }
        const menuItems = buildIconTabs(themeType);
        if (!menuItems || !menuItems.length) {
            return undefined;
        }
        return (
            <MenuTabs
                menuProps={{
                    items: menuItems,
                    defaultActiveKey: defaultSceneType,
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
            label: ObjectUtils.firstNotNil(ObjectUtils.getProp(props?.localeProps, `${item}Theme`), intlLocales.get([locale, `${item}Theme`]), intlLocales.get(['en_US', `${item}Theme`])),
            children: buildThemeTabs(item as IconThemeType),
        };
    });

    const renderDropdown = () => {
        return (
            <div
                className={`${clazzPrefix}-popup-wrapper`}
                onMouseDown={event => {
                    event.preventDefault();
                    event.stopPropagation();
                }}
                onClick={!searchBox ? undefined : (event: any) => {
                    if (event.target !== searchRef.current?.input && searchRef.current?.input === document.activeElement) {
                        // Disabled and re-enable the search box to restore non-focus state
                        setSearchDisabled(true);
                        window.setTimeout(() => setSearchDisabled(false), 100);
                    }
                }}
                data-icon-select-popup-wrapper={fieldId}
            >
                <CardTabs
                    className={classnames(`${clazzPrefix}-popup-tabs`, props?.tabsProps?.className)}
                    defaultActiveKey={defaultThemeType}
                    items={themeItems}
                    inkBar={themeInkBar}
                    tabBarExtraContent={(
                        <>
                            <If condition={searchBox} validation={false}>
                                <Input.Search
                                    ref={searchRef}
                                    placeholder={ObjectUtils.firstNotNil(props?.localeProps?.search, intlLocales.get([locale, 'searchBox']), intlLocales.get(['en_US', 'searchBox']))}
                                    allowClear={true}
                                    size='small'
                                    disabled={searchDisabled}
                                    onFocus={() => {
                                        const inspect = searchRef.current?.input?.closest(`.${configContext.getPrefixCls('input-affix-wrapper')}`) as HTMLElement;
                                        window.setTimeout(() => StyleUtils.removeClazz(inspect, configContext.getPrefixCls('input-affix-wrapper-status-error')), 100);
                                    }}
                                    onSearch={setSearchWord}
                                    data-icon-select-search={fieldId}
                                />
                            </If>
                            {props?.tabsProps?.tabBarExtraContent}
                        </>
                    )}
                    presetStyle={props?.tabsProps?.presetStyle ?? 'padding-0'}
                    {...(!props?.tabsProps ? {} : omit(props.tabsProps, ['className', 'tabBarExtraContent', 'presetStyle']))}
                />
            </div>
        );
    };

    const handleOptionClear = () => {
        if (optionMode === 'icon') {
            clearIconsBadge();
        }
    };

    const handleOptionDeselect = (value: string | number | LabeledValue, option: any) => {
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
        props?.fieldProps?.onOpenChange?.(open);
    };

    const entryImmutable = editContext.mode === 'read' || props?.fieldProps?.disabled || props?.proFieldProps?.mode === 'read' || props?.proFieldProps?.readonly;
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['classNames', 'disabled', 'open', 'virtual', 'onClear', 'onDeselect', 'onOpenChange']);

    if (proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'optionMode', 'optionGroup', 'proField', 'tabsProps', 'themeTypes', 'defaultThemeType', 'themeInkBar', 'sceneTypes', 'defaultSceneType', 'sceneInkBar', 'sceneEntryWidth', 'optionWrapperClazz', 'optionWrapperStyle', 'optionIconClazz', 'optionIconStyle', 'searchBox', 'tooltipCtrl', 'tooltipProps', 'locale', 'localeProps']);
        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    classNames: {
                        // @ts-ignore
                        root: classnames(clazzPrefix, `${clazzPrefix}-entry-${fieldId}`, props?.fieldProps?.classNames?.root),
                        popup: {
                            root: classnames(`${clazzPrefix}-popup`, fieldStyle.hashId, `${clazzPrefix}-popup-${fieldId}`, props?.fieldProps?.classNames?.popup?.root),
                        }
                    },
                    disabled: entryImmutable,
                    popupRender: (optionMode === 'text' || !themeTypes || !sceneTypes || entryImmutable) ? undefined : (() => renderDropdown()),
                    options: textOptions,
                    virtual: props?.fieldProps?.virtual ?? false,
                    open: dropdownOpen,
                    showSearch: false,
                    onClear: handleOptionClear,
                    onDeselect: handleOptionDeselect,
                    onOpenChange: handleDropdownOpenChange,
                    ...omitFieldProps,
                    // @ts-ignore
                    'data-icon-select-id': fieldId,
                }}
            />
        );
    } else {
        const restProps = omit(omitFieldProps, ['id', 'placeholder', 'onChange']);
        return (
            <Select
                classNames={{
                    // @ts-ignore
                    root: classnames(clazzPrefix, `${clazzPrefix}-entry-${fieldId}`, props?.fieldProps?.classNames?.root),
                    popup: {
                        root: classnames(`${clazzPrefix}-popup`, fieldStyle.hashId, `${clazzPrefix}-popup-${fieldId}`, props?.fieldProps?.classNames?.popup?.root),
                    }
                }}
                placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                disabled={entryImmutable}
                popupRender={(optionMode === 'text' || !themeTypes || !sceneTypes || entryImmutable) ? undefined : (() => renderDropdown())}
                options={textOptions}
                virtual={props?.fieldProps?.virtual ?? false}
                open={dropdownOpen}
                showSearch={false}
                onClear={handleOptionClear}
                onDeselect={handleOptionDeselect}
                onOpenChange={handleDropdownOpenChange}
                onChange={(event: any) => {
                    if (props?.name) {
                        form?.setFieldValue(props.name, event.target.value);
                    }
                    props?.fieldProps?.onChange?.(event);
                }}
                {...restProps}
                data-icon-select-id={fieldId}
            />
        );
    }
};
