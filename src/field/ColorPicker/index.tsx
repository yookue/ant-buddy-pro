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
import {ConfigProvider, Button, Dropdown, Space, type ButtonProps, type DropdownProps} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {DownOutlined} from '@ant-design/icons';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {ColorUtils, NanoidUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, SketchPicker, SwatchesPicker, TwitterPicker} from 'react-color';
import type {BlockPickerProps, ChromePickerProps, CirclePickerProps, CompactPickerProps, GithubPickerProps, HuePickerProps, MaterialPickerProps, SketchPickerProps, SwatchesPickerProps, TwitterPickerProps} from 'react-color';
import type {Color, ColorResult} from 'react-color';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import './index.less';


export type ColorPickerRef = {
    getColor: () => Color;
    setColor: (hexColor: string) => void;
};


export type PickerType = 'block' | 'chrome' | 'circle' | 'compact' | 'github' | 'hue' | 'material' | 'sketch' | 'swatches' | 'twitter';


export type ColorPickerProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-color-picker'
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
     * @description Whether to close the dropdown div after picked or not
     * @description.zh-CN 选定颜色后是否关闭下拉弹出层
     * @description.zh-TW 選定顏色後是否關閉下拉彈出層
     */
    closeAfterPicked?: boolean;

    /**
     * @description Whether the dropdown div is default open or not
     * @description.zh-CN 是否默认展开下拉弹出层
     * @description.zh-TW 是否默認展開下拉彈出層
     * @default false
     */
    defaultOpen?: boolean;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 下拉弹出层的属性
     * @description.zh-TW 下拉彈出層的屬性
     */
    dropdownProps?: Omit<DropdownProps, 'dropdownRender' | 'menu' | 'open' | 'children'>;

    /**
     * @description The properties of the button
     * @description.zh-CN 按钮的属性
     * @description.zh-TW 按鈕的屬性
     */
    buttonProps?: Omit<ButtonProps, 'disabled' | 'href' | 'htmlType' | 'icon' | 'target' | 'children'>;

    /**
     * @description The icon element
     * @description.zh-CN 图标节点
     * @description.zh-TW 圖標節點
     * @default <DownOutlined/>
     */
    icon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The picker type
     * @description.zh-CN 顔色拾取器的类型
     * @description.zh-TW 顏色拾取器的類型
     * @default 'chrome'
     */
    pickerType?: PickerType;

    /**
     * @description The props of the BlockPicker
     * @description.zh-CN 顔色拾取器 BlockPicker 的属性
     * @description.zh-TW 顔色拾取器 BlockPicker 的屬性
     */
    blockPickerProps?: Omit<BlockPickerProps, 'color' | 'triangle'>;

    /**
     * @description The props of the ChromePicker
     * @description.zh-CN 顔色拾取器 ChromePicker 的属性
     * @description.zh-TW 顔色拾取器 ChromePicker 的屬性
     */
    chromePickerProps?: Omit<ChromePickerProps, 'color'>;

    /**
     * @description The props of the CirclePicker
     * @description.zh-CN 顔色拾取器 CirclePicker 的属性
     * @description.zh-TW 顔色拾取器 CirclePicker 的屬性
     */
    circlePickerProps?: Omit<CirclePickerProps, 'color'>;

    /**
     * @description The props of the CompactPicker
     * @description.zh-CN 顔色拾取器 CompactPicker 的属性
     * @description.zh-TW 顔色拾取器 CompactPicker 的屬性
     */
    compactPickerProps?: Omit<CompactPickerProps, 'color'>;

    /**
     * @description The props of the GithubPicker
     * @description.zh-CN 顔色拾取器 GithubPicker 的属性
     * @description.zh-TW 顔色拾取器 GithubPicker 的屬性
     */
    githubPickerProps?: Omit<GithubPickerProps, 'color' | 'triangle'>;

    /**
     * @description The props of the HuePicker
     * @description.zh-CN 顔色拾取器 HuePicker 的属性
     * @description.zh-TW 顔色拾取器 HuePicker 的屬性
     */
    huePickerProps?: Omit<HuePickerProps, 'color'>;

    /**
     * @description The props of the MaterialPicker
     * @description.zh-CN 顔色拾取器 MaterialPicker 的属性
     * @description.zh-TW 顔色拾取器 MaterialPicker 的屬性
     */
    materialPickerProps?: Omit<MaterialPickerProps, 'color'>;

    /**
     * @description The props of the SketchPicker
     * @description.zh-CN 顔色拾取器 SketchPicker 的属性
     * @description.zh-TW 顔色拾取器 SketchPicker 的屬性
     */
    sketchPickerProps?: Omit<SketchPickerProps, 'color'>;

    /**
     * @description The props of the SwatchesPicker
     * @description.zh-CN 顔色拾取器 SwatchesPicker 的属性
     * @description.zh-TW 顔色拾取器 SwatchesPicker 的屬性
     */
    swatchesPickerProps?: Omit<SwatchesPickerProps, 'color'>;

    /**
     * @description The props of the TwitterPicker
     * @description.zh-CN 顔色拾取器 TwitterPicker 的属性
     * @description.zh-TW 顔色拾取器 TwitterPicker 的屬性
     */
    twitterPickerProps?: Omit<TwitterPickerProps, 'color' | 'triangle'>;

    /**
     * @description The callback function when the color changed
     * @description.zh-CN 顔色值变化时的回调函数
     * @description.zh-TW 顔色值變化時的回調函數
     */
    onChange?: (color?: Color) => void;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value'>;


/**
 * Component for displaying a button which can be clicked to show a color picker
 *
 * @author David Hsing
 * @see "http://casesandberg.github.io/react-color/"
 */
export const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<ColorPickerRef>> = React.forwardRef((props?: ColorPickerProps, ref?: any) => {
    ColorPicker.displayName = 'ColorPicker';

    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const formContext = React.useContext(FormContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-color-picker');

    // Initialize the default props
    const {
        value = '#d9d9d9',
        defaultOpen = false,
        icon = <DownOutlined/>,
        pickerType = 'chrome',
    } = props ?? {};

    ConsoleUtils.warn(ColorUtils.isHex(value as string), true, 'ColorPicker',  `Prop 'value' must be a valid hex color`);

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const fieldRef = React.useRef<HTMLDivElement>(null);
    const [hexColor, setHexColor] = React.useState<Color>(value as string);
    const [menuOpen, setMenuOpen] = React.useState<boolean>(defaultOpen);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getColor: (): Color => {
            return hexColor;
        },
        setColor: (hexColor: string): void => {
            const validHex = ColorUtils.isHex(hexColor);
            ConsoleUtils.warn(validHex, false, 'ColorPicker',  `Value '${hexColor}' for 'setColor' is not a valid hex color`);
            if (validHex) {
                setHexColor(hexColor);
            }
        }
    }));

    React.useEffect(() => {
        if (props?.name && formContext?.form) {
            formContext.form.setFieldValue(props.name, hexColor);
        }
        props?.onChange?.(hexColor);
    }, [hexColor]);

    const buildPickerDom = () => {
        switch (pickerType) {
            case 'block':
                return (
                    <BlockPicker
                        color={hexColor}
                        triangle='hide'
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.blockPickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.blockPickerProps ? {} : omit(props.blockPickerProps, ['onChangeComplete']))}
                    />
                );
            case 'circle':
                return (
                    <CirclePicker
                        color={hexColor}
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.circlePickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.circlePickerProps ? {} : omit(props.circlePickerProps, ['onChangeComplete']))}
                    />
                );
            case 'compact':
                return (
                    <CompactPicker
                        color={hexColor}
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.compactPickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.compactPickerProps ? {} : omit(props.compactPickerProps, ['onChangeComplete']))}
                    />
                );
            case 'github':
                return (
                    <GithubPicker
                        color={hexColor}
                        triangle='hide'
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.githubPickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.githubPickerProps ? {} : omit(props.githubPickerProps, ['onChangeComplete']))}
                    />
                );
            case 'hue':
                return (
                    <HuePicker
                        color={hexColor}
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.huePickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.huePickerProps ? {} : omit(props.huePickerProps, ['onChangeComplete']))}
                    />
                );
            case 'material':
                return (
                    <MaterialPicker
                        color={hexColor}
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.materialPickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.materialPickerProps ? {} : omit(props.materialPickerProps, ['onChangeComplete']))}
                    />
                );
            case 'sketch':
                return (
                    <SketchPicker
                        color={hexColor}
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.sketchPickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.sketchPickerProps ? {} : omit(props.sketchPickerProps, ['onChangeComplete']))}
                    />
                );
            case 'swatches':
                return (
                    <SwatchesPicker
                        color={hexColor}
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.swatchesPickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.swatchesPickerProps ? {} : omit(props.swatchesPickerProps, ['onChangeComplete']))}
                    />
                );
            case 'twitter':
                return (
                    <TwitterPicker
                        color={hexColor}
                        triangle='hide'
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.twitterPickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.twitterPickerProps ? {} : omit(props.twitterPickerProps, ['onChangeComplete']))}
                    />
                );
            case 'chrome':
            default:
                return (
                    <ChromePicker
                        color={hexColor}
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setMenuOpen(false);
                            }
                            props?.chromePickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.chromePickerProps ? {} : omit(props.chromePickerProps, ['onChangeComplete']))}
                    />
                );
        }
    };

    const entryImmutable = editContext.mode === 'read' || props?.dropdownProps?.disabled;
    const omitDropdownProps = !props?.dropdownProps ? {} : omit(props?.dropdownProps, ['className', 'disabled', 'overlayClassName', 'onOpenChange']);
    const omitButtonProps = !props?.buttonProps ? {} : omit(props?.buttonProps, ['className']);

    return (
        <Dropdown
            className={classNames(`${clazzPrefix}-trigger`, props?.dropdownProps?.className)}
            menu={{
                items: [{
                    key: 'picker',
                    label: buildPickerDom(),
                }],
                onClick: () => setMenuOpen(true),
            }}
            disabled={entryImmutable}
            overlayClassName={classNames(`${clazzPrefix}-popup`, `${clazzPrefix}-popup-${fieldId}`, (entryImmutable ? `${clazzPrefix}-immutable` : undefined), props?.dropdownProps?.overlayClassName)}
            open={menuOpen}
            onOpenChange={(open: boolean) => {
                setMenuOpen(open);
                props?.dropdownProps?.onOpenChange?.(open);
            }}
            {...omitDropdownProps}
        >
            <div
                ref={fieldRef}
                className={classNames(clazzPrefix, (props?.buttonProps?.block ? `${clazzPrefix}-width-block` : undefined), props?.containerClazz)}
                style={props?.containerStyle}
                data-color-picker-entry={fieldId}
            >
                <Button
                    className={classNames(`${clazzPrefix}-button`, props?.buttonProps?.className)}
                    {...omitButtonProps}
                    data-buddy-color-picker-id={fieldId}
                >
                    <Space>
                        <div className={`${clazzPrefix}-preview`} style={{backgroundColor: `${hexColor}`}}>
                            <span>&nbsp;</span>
                        </div>
                        {(typeof icon === 'function') ? icon() : icon}
                    </Space>
                </Button>
            </div>
        </Dropdown>
    );
});
