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
import {Form, Button, Space, type ButtonProps} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {CloseCircleOutlined, DownOutlined} from '@ant-design/icons';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {ProFormField} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/typing';
import {pickProFormItemProps} from '@ant-design/pro-utils/es/pickProFormItemProps';
import Trigger, {type TriggerProps} from '@rc-component/trigger';
import '@rc-component/trigger/assets/index.less';
import {ColorUtils, NanoidUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, SketchPicker, SwatchesPicker, TwitterPicker} from 'react-color';
import type {BlockPickerProps, ChromePickerProps, CirclePickerProps, CompactPickerProps, GithubPickerProps, HuePickerProps, MaterialPickerProps, SketchPickerProps, SwatchesPickerProps, TwitterPickerProps} from 'react-color';
import type {Color, ColorResult} from 'react-color';
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {TriggerUtils} from '@/util/TriggerUtils';
import {useFieldStyle} from './style';


export type ColorPickerRef = {
    getColor: () => Color;
    setColor: (hexColor: string) => void;
};


export type PickerType = 'block' | 'chrome' | 'circle' | 'compact' | 'github' | 'hue' | 'material' | 'sketch' | 'swatches' | 'twitter';


export type ColorPickerProps = Omit<ProFormFieldItemProps, 'children' | 'fieldRef' | 'fieldProps' | 'placeholder' | 'readonly'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-color-picker'
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
     */
    defaultOpen?: boolean;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 弹出层的属性
     * @description.zh-TW 彈出層的屬性
     */
    triggerProps?: Omit<TriggerProps, 'popup' | 'popupVisible' | 'children'>;

    /**
     * @description The properties of the button
     * @description.zh-CN 按钮的属性
     * @description.zh-TW 按鈕的屬性
     */
    buttonProps?: Omit<ButtonProps, 'block' | 'disabled' | 'href' | 'htmlType' | 'icon' | 'target' | 'children'>;

    /**
     * @description The icon element
     * @description.zh-CN 图标节点
     * @description.zh-TW 圖標節點
     * @default <DownOutlined/>
     */
    icon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The position of the addon for the entry field
     * @description.zh-CN 图标节点的位置
     * @description.zh-TW 圖標節點的位置
     * @default 'after'
     */
    iconPos?: WithFalse<BeforeAfterType>;

    /**
     * @description The picker type
     * @description.zh-CN 顔色拾取器的类型
     * @description.zh-TW 顏色拾取器的類型
     * @default 'chrome'
     */
    pickerType?: PickerType;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;

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
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value'>;


/**
 * Component for displaying a button which can be clicked to show a color picker
 *
 * @author David Hsing
 * @see "http://casesandberg.github.io/react-color/"
 */
export const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<ColorPickerRef>> = React.forwardRef((props?: ColorPickerProps, ref?: any) => {
    ColorPicker.displayName = 'ColorPicker';

    const editContext = React.useContext(EditOrReadOnlyContext);
    const formContext = React.useContext(FormContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-color-picker';

    // Initialize the default props
    const {
        allowClear = true,
        icon = <DownOutlined/>,
        iconPos = 'after',
        pickerType = 'chrome',
        proField = true,
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const fieldRef = React.useRef<HTMLDivElement>(null);
    const fieldValue = (props?.name && formContext?.form) ? Form.useWatch(props.name, formContext.form) : props?.value;
    const [hexColor, setHexColor] = React.useState<Color>();
    const [triggerOpen, setTriggerOpen] = React.useState<boolean>(props?.defaultOpen ?? false);
    const [mouseHover, setMouseHover] = React.useState<boolean>(false);
    const fieldStyle = useFieldStyle(clazzPrefix);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getColor: (): Color | undefined => {
            return hexColor;
        },
        setColor: (hexColor?: string): void => {
            const validHex = ColorUtils.isHex(hexColor);
            ConsoleUtils.warn(!hexColor || validHex, false, 'ColorPicker', `Value '${hexColor}' for 'setColor' is not a valid hex color`);
            setHexColor(validHex ? hexColor : undefined);
        }
    }));

    React.useEffect(() => {
        const validHex = ColorUtils.isHex(fieldValue);
        ConsoleUtils.warn(!fieldValue || validHex, false, 'ColorPicker', `Value '${hexColor}' for '${props?.name}' is not a valid hex color`);
        setHexColor(validHex ? fieldValue : undefined);
    }, [fieldValue]);

    React.useEffect(() => {
        if (props?.name && formContext?.form) {
            formContext.form.setFieldValue(props.name, hexColor);
        }
        props?.onChange?.(hexColor);
    }, [hexColor]);

    const entryImmutable = props?.disabled || editContext.mode === 'read';

    const buildEntryIconDom = (before: boolean) => {
        if (entryImmutable) {
            return undefined;
        }
        return ((!before && allowClear && hexColor && mouseHover && iconPos === false) || (before && iconPos === 'before') || (!before && iconPos === 'after')) ? (
            <span
                className={`${clazzPrefix}-icon`}
                onClick={(!allowClear || !hexColor) ? undefined : (event: any) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setHexColor(undefined);
                }}
            >
                {((allowClear && hexColor && mouseHover) || iconPos === false) ? <CloseCircleOutlined/> : ((typeof icon === 'function') ? icon() : icon)}
            </span>
        ) : undefined;
    };

    const buildEntryDom = () => {
        const omitButtonProps = !props?.buttonProps ? {} : omit(props?.buttonProps, ['className', 'size', 'style']);
        const buttonStyle = !props?.buttonProps?.style ? {} : props.buttonProps.style;
        if (typeof props?.width === 'number') {
            Object.assign(buttonStyle, {
                width: `${props.width}px`,
            });
        }
        return (
            <div
                ref={fieldRef}
                className={classNames(clazzPrefix, fieldStyle.hashId, (!props?.widthBlock ? undefined : `${clazzPrefix}-width-block`), props?.containerClazz)}
                style={props?.containerStyle}
                data-color-picker-entry={fieldId}
                onMouseOver={() => setMouseHover(true)}
                onMouseOut={() => setMouseHover(false)}
            >
                <Button
                    className={classNames(`${clazzPrefix}-button`, (!entryImmutable ? undefined : `${clazzPrefix}-button-immutable`), ((typeof props?.width !== 'string') ? undefined : `${clazzPrefix}-button-${props.width}`), (!iconPos ? undefined : `${clazzPrefix}-icon-${iconPos}`), props?.buttonProps?.className)}
                    disabled={entryImmutable}
                    size={props?.buttonProps?.size ?? 'small'}
                    style={buttonStyle}
                    {...omitButtonProps}
                >
                    <Space>
                        {buildEntryIconDom(true)}
                        <div
                            className={classNames(`${clazzPrefix}-preview`, (hexColor ? undefined : `${clazzPrefix}-preview-empty`))}
                            style={!hexColor ? undefined : {backgroundColor: `${hexColor}`}}
                        >
                            <span>&nbsp;</span>
                        </div>
                        {buildEntryIconDom(false)}
                    </Space>
                </Button>
                {!!props?.name && <input type='hidden' name={props.name}/>}
            </div>
        );
    };

    if (entryImmutable) {
        return buildEntryDom();
    }

    React.useLayoutEffect(() => {
        document.addEventListener('keydown', restoreLayout);
        document.addEventListener('mousedown', restoreLayout);
        return () => {
            document.removeEventListener('keydown', restoreLayout);
            document.removeEventListener('mousedown', restoreLayout);
        }
    }, []);

    const restoreLayout = (event: any) => {
        const inspect = document.querySelector<HTMLDivElement>(`[data-color-picker-entry='${fieldId}']`);
        const sponsor = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-popup-${fieldId}`);
        if (!inspect?.contains(event.target) && !sponsor?.contains(event.target)) {
            setTriggerOpen(false);
        }
    };

    const buildPopupDom = () => {
        switch (pickerType) {
            case 'block':
                return (
                    <BlockPicker
                        color={hexColor}
                        triangle='hide'
                        onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setHexColor(color.hex);
                            if (props?.closeAfterPicked) {
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
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
                                setTriggerOpen(false);
                            }
                            props?.chromePickerProps?.onChangeComplete?.(color, event);
                        }}
                        {...(!props?.chromePickerProps ? {} : omit(props.chromePickerProps, ['onChangeComplete']))}
                    />
                );
        }
    };

    const omitTriggerProps = !props?.triggerProps ? {} : omit(props?.triggerProps, ['action', 'builtinPlacements', 'popupAlign', 'popupClassName', 'onPopupVisibleChange']);

    const triggerDom = (
        <Trigger
            action={props?.triggerProps?.action ?? ['click']}
            builtinPlacements={props?.triggerProps?.builtinPlacements ?? TriggerUtils.buildPlacements()}
            popup={buildPopupDom()}
            popupAlign={(props?.triggerProps?.popupPlacement || props?.triggerProps?.popupAlign) ? props?.triggerProps?.popupAlign : {
                points: ['tl', 'bl'],
                offset: [0, 4],
            }}
            popupClassName={classNames(`${clazzPrefix}-popup`, fieldStyle.hashId, `${clazzPrefix}-popup-${fieldId}`, (!entryImmutable ? undefined : `${clazzPrefix}-popup-immutable`), props?.triggerProps?.popupClassName)}
            popupVisible={triggerOpen}
            onPopupVisibleChange={(open: boolean) => {
                setTriggerOpen(open);
                props?.triggerProps?.onPopupVisibleChange?.(open);
            }}
            {...omitTriggerProps}
        >
            {buildEntryDom()}
        </Trigger>
    );

    if (!props?.name || !formContext?.form) {
        return triggerDom;
    }
    if (!proField) {
        const itemProps = !props ? {} : pickProFormItemProps(props);
        return (
            <Form.Item {...itemProps}>
                {triggerDom}
            </Form.Item>
        );
    }
    const omitProps = !props? {} : omit(props, ['clazzPrefix', 'containerClazz', 'containerStyle', 'closeAfterPicked', 'defaultOpen', 'triggerProps', 'buttonProps', 'icon', 'iconPos', 'pickerType', 'proField', 'widthBlock', 'blockPickerProps', 'chromePickerProps', 'circlePickerProps', 'compactPickerProps', 'githubPickerProps', 'huePickerProps', 'materialPickerProps', 'sketchPickerProps', 'swatchesPickerProps', 'twitterPickerProps', 'onChange']);
    return (
        <ProFormField {...omitProps}>
            {triggerDom}
        </ProFormField>
    );
});
