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
import {StringUtils} from '@yookue/ts-lang-utils';
import * as icons from '@/type/antd-icons';
import {allIconClasses} from '@/type/antd-icons';


export abstract class IconUtils {
    /**
     * Returns the collections that filtered by the given theme types and icon types
     *
     * @param themeTypes the theme types to filter, missing means all theme types
     * @param sceneTypes the icon types to filter, missing means all icon types
     *
     * @return the collections that filtered by the given theme types and icon types
     */
    public static getCollections(themeTypes?: ThemeType[], sceneTypes?: icons.SceneType[]): ReadonlyMap<string, React.ComponentType<any>>[] {
        const result: ReadonlyMap<string, React.ComponentType<any>>[] = [];
        if (!themeTypes) {
            if (!sceneTypes) {
                result.push(...icons.outlinedAllIcons);
                result.push(...icons.filledAllIcons);
                result.push(...icons.twotoneAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(...icons.directionAllIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(...icons.suggestionAllIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(...icons.editorAllIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(...icons.dataAllIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(...icons.logoAllIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(...icons.webAllIcons);
            }
        } else if (themeTypes?.includes('outlined')) {
            if (!sceneTypes) {
                result.push(...icons.outlinedAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(icons.outlinedDirectionIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(icons.outlinedSuggestionIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(icons.outlinedEditorIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(icons.outlinedDataIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(icons.outlinedLogoIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(icons.outlinedWebIcons);
            }
        } else if (themeTypes?.includes('filled')) {
            if (!sceneTypes) {
                result.push(...icons.filledAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(icons.filledDirectionIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(icons.filledSuggestionIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(icons.filledEditorIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(icons.filledDataIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(icons.filledLogoIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(icons.filledWebIcons);
            }
        } else if (themeTypes?.includes('twotone')) {
            if (!sceneTypes) {
                result.push(...icons.twotoneAllIcons);
            } else if (sceneTypes?.includes('direction')) {
                result.push(icons.twotoneDirectionIcons);
            } else if (sceneTypes?.includes('suggestion')) {
                result.push(icons.twotoneSuggestionIcons);
            } else if (sceneTypes?.includes('editor')) {
                result.push(icons.twotoneEditorIcons);
            } else if (sceneTypes?.includes('data')) {
                result.push(icons.twotoneDataIcons);
            } else if (sceneTypes?.includes('logo')) {
                result.push(icons.twotoneLogoIcons);
            } else if (sceneTypes?.includes('web')) {
                result.push(icons.twotoneWebIcons);
            }
        }
        return result;
    }

    /**
     * Returns the icon that matches the given icon name with theme type and icon type
     *
     * @param iconName the name of the icon
     * @param themeType the theme type to filter
     * @param sceneType the icon type to filter
     *
     * @return the icon that matches the given icon name with theme type and icon type
     */
    public static getIcon(themeType?: ThemeType, sceneType?: icons.SceneType, iconName?: string): React.ComponentType<any> | undefined {
        if (!themeType || !sceneType || !iconName) {
            return undefined;
        }
        const map: ReadonlyMap<string, React.ComponentType<any>> = allIconClasses.get([themeType, sceneType]);
        return !map ? undefined : map.get(iconName);
    }

    /**
     * Returns the icons that matches the given icon name with theme types and icon types
     *
     * @param iconName the name of the icon, can be camel-case or kebab-case
     * @param themeTypes the theme types to filter, missing means all theme types
     * @param sceneTypes the icon types to filter, missing means all icon types
     *
     * @return the icons that matches the given icon name with theme types and icon types
     */
    public static findIcons(iconName?: string, themeTypes?: ThemeType[], sceneTypes?: icons.SceneType[]): React.ComponentType<any>[] | undefined {
        if (StringUtils.isBlank(iconName)) {
            return undefined;
        }
        const result: React.ComponentType<any>[] = [];
        const camelName = StringUtils.toCamelCase(iconName) ;
        const collections = this.getCollections(themeTypes, sceneTypes);
        collections.forEach((map) => {
            map.forEach((value, key) => {
                if (StringUtils.includesAnyIgnoreCase(key, [iconName, camelName])) {
                    result.push(value);
                }
            });
        });
        return (result.length === 0) ? undefined : result;
    }
}
