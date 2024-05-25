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


import {type Route} from '@ant-design/pro-layout/es/typings';
import {StringUtils} from '@yookue/ts-lang-utils';
// @ts-ignore
import {dynamic} from '@umijs/runtime';


/**
 * Utilities for route
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class RouteUtils {
    /**
     * Returns the merged routes by resolving the given routes and loading the template path
     *
     * @param routes the routes to inspect
     * @param template the module template path to load, the identifier '{component}' represents the route component
     *
     * @returns the merged routes by resolving the given routes and loading the template path
     */
    public static mergeRoutes = (routes?: Route[], template: string = `../pages/{component}/index.tsx`): Route[] | undefined => {
        if (!routes) {
            return undefined;
        }
        if (!template || template.length === 0) {
            return routes;
        }
        return routes.map(route => {
            if (route?.component) {
                route.component = (component => {
                    if (typeof component === 'object') {
                        return component;
                    }
                    const path = StringUtils.formatPlaceholder(template, {component: route.component}) as string;
                    return dynamic({
                        // @ts-ignore
                        loader: () => import(path),
                    });
                })(route.component);
            }
            if (route.routes) {
                route.routes = this.mergeRoutes(route.routes, template);
            }
            return route;
        });
    }
}
