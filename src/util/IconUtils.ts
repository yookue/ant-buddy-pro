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
import {type ThemeType} from '@ant-design/icons-svg/es/types';
import {type MenuDataItem} from '@ant-design/pro-layout';
import {StringUtils} from '@yookue/ts-lang-utils';
import * as iconTypes from '@/type/antd-icons';


/**
 * Utilities for Ant Design icons
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class IconUtils {
    /**
     * Returns the icon that first matches the given icon name with theme types and icon types
     *
     * @param iconName the name of the icon
     * @param themeTypes the theme types to filter, missing means all theme types
     * @param sceneTypes the icon types to filter, missing means all icon types
     *
     * @returns the icon that first matches the given icon name with theme types and icon types
     *
     * @example
     * React.createElement(IconUtils.findIcon('SettingOutlined'));
     */
    public static findIcon(iconName?: string, themeTypes?: ThemeType[], sceneTypes?: iconTypes.IconSceneType[]): React.ComponentType<any> | undefined {
        const icons = this.findIcons(iconName, themeTypes, sceneTypes);
        return !icons ? undefined : (Array.isArray(icons) ? icons[0] : icons);
    }

    /**
     * Returns the icons that matches the given icon name with theme types and icon types
     *
     * @param iconName the name of the icon
     * @param themeTypes the theme types to filter, missing means all theme types
     * @param sceneTypes the icon types to filter, missing means all icon types
     *
     * @returns the icons that matches the given icon name with theme types and icon types
     */
    public static findIcons(iconName?: string, themeTypes?: ThemeType[], sceneTypes?: iconTypes.IconSceneType[]): React.ComponentType<any>[] | undefined {
        if (StringUtils.isBlank(iconName)) {
            return undefined;
        }
        if (!themeTypes) {
            if (StringUtils.endsWithIgnoreCase(iconName, 'outlined')) {
                themeTypes = ['outlined'];
            } else if (StringUtils.endsWithIgnoreCase(iconName, 'filled')) {
                themeTypes = ['filled'];
            } else if (StringUtils.endsWithIgnoreCase(iconName, 'twotone')) {
                themeTypes = ['twotone'];
            }
        }
        const result: React.ComponentType<any>[] = [];
        const camelName = StringUtils.toCamelCase(iconName);
        const kebabName = StringUtils.toKebabCase(iconName);
        const collections = this.getIconCollections(themeTypes, sceneTypes);
        collections.forEach((map) => {
            map.forEach((value, key) => {
                if (StringUtils.equalsAnyIgnoreCase(key, [iconName, camelName, kebabName])) {
                    result.unshift(value);
                    return;
                }
                if (StringUtils.includesAnyIgnoreCase(key, [iconName, camelName, kebabName])) {
                    result.push(value);
                }
            });
        });
        return (result.length === 0) ? undefined : result;
    }

    /**
     * Returns the icon that matches the given icon name with theme type and icon type
     *
     * @param iconName the name of the icon
     * @param themeType the theme type to filter
     * @param sceneType the icon type to filter
     *
     * @returns the icon that matches the given icon name with theme type and icon type
     */
    public static getIcon(iconName?: string, themeType?: ThemeType, sceneType?: iconTypes.IconSceneType): React.ComponentType<any> | undefined {
        if (!iconName || !sceneType) {
            return undefined;
        }
        if (!themeType) {
            if (StringUtils.endsWithIgnoreCase(iconName, 'outlined')) {
                themeType = 'outlined';
            } else if (StringUtils.endsWithIgnoreCase(iconName, 'filled')) {
                themeType = 'filled';
            } else if (StringUtils.endsWithIgnoreCase(iconName, 'twotone')) {
                themeType = 'twotone';
            }
        }
        if (!themeType) {
            return undefined;
        }
        const map = iconTypes.allIconTypes.get([themeType, sceneType]);
        return !map ? undefined : map.get(iconName);
    }

    /**
     * Returns the collections that filtered by the given theme types and icon types
     *
     * @param themeTypes the theme types to filter, missing means all theme types
     * @param sceneTypes the icon types to filter, missing means all icon types
     *
     * @returns the collections that filtered by the given theme types and icon types
     */
    public static getIconCollections(themeTypes?: ThemeType[], sceneTypes?: iconTypes.IconSceneType[]): ReadonlyMap<string, React.ComponentType<any>>[] {
        const result: ReadonlyMap<string, React.ComponentType<any>>[] = [];
        if (!themeTypes) {
            if (!sceneTypes) {
                result.push(...iconTypes.outlinedAllIcons);
                result.push(...iconTypes.filledAllIcons);
                result.push(...iconTypes.twotoneAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(...iconTypes.directionAllIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(...iconTypes.suggestionAllIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(...iconTypes.editorAllIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(...iconTypes.dataAllIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(...iconTypes.logoAllIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(...iconTypes.webAllIcons);
            }
        } else if (themeTypes?.includes('outlined')) {
            if (!sceneTypes) {
                result.push(...iconTypes.outlinedAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(iconTypes.outlinedDirectionIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(iconTypes.outlinedSuggestionIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(iconTypes.outlinedEditorIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(iconTypes.outlinedDataIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(iconTypes.outlinedLogoIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(iconTypes.outlinedWebIcons);
            }
        } else if (themeTypes?.includes('filled')) {
            if (!sceneTypes) {
                result.push(...iconTypes.filledAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(iconTypes.filledDirectionIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(iconTypes.filledSuggestionIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(iconTypes.filledEditorIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(iconTypes.filledDataIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(iconTypes.filledLogoIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(iconTypes.filledWebIcons);
            }
        } else if (themeTypes?.includes('twotone')) {
            if (!sceneTypes) {
                result.push(...iconTypes.twotoneAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(iconTypes.twotoneDirectionIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(iconTypes.twotoneSuggestionIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(iconTypes.twotoneEditorIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(iconTypes.twotoneDataIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(iconTypes.twotoneLogoIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(iconTypes.twotoneWebIcons);
            }
        }
        return result;
    }

    /**
     * Returns the menu items that has been resolved icons from string to component
     *
     * @param items the menu items to inspect
     *
     * @returns the menu items that has been resolved icons from string to component
     */
    public static resolveMenuIcons(items?: MenuDataItem[]): MenuDataItem[] | undefined {
        if (!items || items.length === 0) {
            return undefined;
        }
        return items.map(item => {
            if (typeof item?.icon === 'string') {
                const icon = this.findIcon(item.icon as string, undefined, undefined);
                if (icon) {
                    item.icon = React.createElement(icon);
                }
            }
            if (item?.children) {
                item.children = this.resolveMenuIcons(item.children);
            }
            return item;
        });
    }
}
