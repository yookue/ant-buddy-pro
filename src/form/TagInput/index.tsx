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
import {ConfigProvider, Form, Input, Tag, type InputProps, type InputRef, type TagProps} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {PlusOutlined} from '@ant-design/icons';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {ArrayUtils, ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import objectHash from 'object-hash';
import omit from 'rc-util/es/omit';
import warning from 'rc-util/es/warning';
import {TweenOneGroup, type IGroupProps as TweenOneGroupProps} from 'rc-tween-one';
import './index.less';


export type TagInputRef = {
    getTagContents: () => string[],
    setTagContents: (contents?: string[] | null) => void,
    addTagContent: (content?: string | null) => void,
    removeTagContent: (content?: string | null) => void,
};


export type TextTagProps = Omit<TagProps, 'children'> & {
    /**
     * @description The text content of the tag
     * @description.zh-CN Tag 的文本内容
     * @description.zh-TW Tag 的文本内容
     */
    content?: string;
};


export type TagInputProps = Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-tag-input'
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
     * @description The props or content of the fulfil tags
     * @description.zh-CN 已完成标签的属性或内容
     * @description.zh-TW 已完成標簽的屬性或內容
     */
    fulfilTagItems?: (TextTagProps | string)[];

    /**
     * @description The shared props of the fulfil tags
     * @description.zh-CN 已完成标签的通用属性
     * @description.zh-TW 已完成標簽的通用屬性
     */
    fulfilTagShareProps?: Omit<TagProps, 'children'>;

    /**
     * @description Whether the tag is addable or not
     * @description.zh-CN 是否可以添加标签
     * @description.zh-TW 是否可以添加標簽
     */
    addable?: boolean;

    /**
     * @description The props of the adding input
     * @description.zh-CN 添加标签的文本框的属性
     * @description.zh-TW 添加標簽的文本框的屬性
     */
    addingInputProps?: Omit<InputProps, 'ref' | 'name' | 'value' | 'type'>;

    /**
     * @description The props of the adding tag
     * @description.zh-CN 添加标签的属性
     * @description.zh-TW 添加標簽的屬性
     */
    addingTagProps?: TagProps;

    /**
     * @description Whether the tween-one animation is enabled
     * @description.zh-CN 是否启用 tween-one 动画
     * @description.zh-TW 是否啟用 tween-one 動畫
     * @default true
     */
    tweenOneEnabled?: boolean;

    /**
     * @description The props of the tween-one animation
     * @description.zh-CN tween-one 动画的属性
     * @description.zh-TW tween-one 動畫的屬性
     */
    tweenOneProps?: TweenOneGroupProps;

    /**
     * @description Whether to perform as submit fields
     * @description.zh-CN 是否作为表单项提交
     * @description.zh-TW 是否作為表單項提交
     * @default true
     */
    performSubmit?: boolean;
};


/**
 * Component for displaying tags with a text input box with addable capability
 *
 * @author David Hsing
 */
export const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<TagInputRef>> = React.forwardRef((props?: TagInputProps, ref?: any) => {
    TagInput.displayName = 'TagInput';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const formContext = React.useContext(FormContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-tag-input');

    // Initialize the default props
    const {
        tweenOneEnabled = true,
        performSubmit = true,
    } = props ?? {};

    const fieldRef = React.useRef<HTMLDivElement>();
    const inputRef = React.useRef<InputRef>(null);
    const [inputValue, setInputValue] = React.useState<string>();
    const [inputVisible, setInputVisible] = React.useState<boolean>(false);
    const [tagContents, setTagContents] = React.useState<string[]>(() => {
        const result = [...new Set(props?.fulfilTagItems?.map(item => (typeof item === 'string') ? item : item?.content))] as string[];
        warning(result.length === props?.fulfilTagItems?.length, `TagInput '${props?.name}' must includes unique contents`);
        return result;
    });

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getTagContents: () => {
            return tagContents;
        },
        setTagContents: (contents?: string[] | null) => {
            setTagContents([...new Set(contents)]);
        },
        addTagContent: (content?: string | null) => {
            if (!ArrayUtils.includes(tagContents, content)) {
                setTagContents(ArrayUtils.add(tagContents, content) ?? []);
            }
        },
        removeTagContent: (content?: string | null) => {
            if (ArrayUtils.includes(tagContents, content)) {
                setTagContents(ArrayUtils.remove(tagContents, content) ?? []);
            }
        }
    }));

    React.useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    });

    const buildTweenOneProps = () => {
        return props?.tweenOneProps ?? {
            appear: false,
            enter: {
                scale: 0.8,
                opacity: 0,
                type: 'from',
                duration: 100,
            },
            leave: {
                opacity: 0,
                width: 0,
                scale: 0,
                duration: 200,
            },
            onEnd: (event) => {
                if (event.type === 'appear' || event.type === 'enter') {
                    (event.target as any).style = 'display: inline-block';
                }
            }
        };
    };

    const buildFulfilDom = () => {
        const tagsDom = tagContents?.map((content, index) => {
            const handleClose = () => {
                const contents = tagContents.filter(item => item !== content);
                setTagContents(contents);
                if (props?.name && props?.performSubmit && formContext?.form) {
                    formContext.form.setFieldValue(props.name, contents);
                }
            };
            const origin = props?.fulfilTagItems?.find(item => (typeof item === 'string') ? item === content : item.content === content);
            const omitShareProps = !props?.fulfilTagShareProps ? {} : omit(props.fulfilTagShareProps, ['className', 'onClose']);
            if (!origin || typeof origin === 'string') {
                return (
                    <span key={`${index}_${objectHash(content)}`} className={`${clazzPrefix}-fulfil-span`}>
                        <Tag
                            className={classNames(`${clazzPrefix}-fulfil-tag`, props?.fulfilTagShareProps?.className)}
                            onClose={event => {
                                if (props?.fulfilTagShareProps?.onClose) {
                                    props.fulfilTagShareProps.onClose(event);
                                }
                                if (!event.isDefaultPrevented()) {
                                    handleClose();
                                }
                            }}
                            {...omitShareProps}
                        >
                            {content}
                        </Tag>
                    </span>
                );
            }
            const omitOriginProps = omit(origin, ['className', 'onClose']);
            const mergedProps = ObjectUtils.defaultProps(omitOriginProps, omitShareProps, false);
            return (
                <span key={`${index}_${objectHash(content)}`} className={`${clazzPrefix}-fulfil-span`}>
                    <Tag
                        className={classNames(`${clazzPrefix}-fulfil-tag`, origin.className, props?.fulfilTagShareProps?.className)}
                        onClose={event => {
                            if (origin.onClose) {
                                origin.onClose(event);
                            }
                            if (props?.fulfilTagShareProps?.onClose) {
                                props.fulfilTagShareProps.onClose(event);
                            }
                            if (!event.isDefaultPrevented()) {
                                handleClose();
                            }
                        }}
                        {...mergedProps}
                    >
                        {content}
                    </Tag>
                </span>
            );
        });
        const wrapDom = !tweenOneEnabled ? tagsDom : (
            <TweenOneGroup {...buildTweenOneProps()}>
                {tagsDom}
            </TweenOneGroup>
        );
        return (
            <div className={`${clazzPrefix}-fulfil`}>
                {wrapDom}
            </div>
        );
    };

    const buildActionDom = () => {
        if (!props?.addable || editContext.mode === 'read') {
            return undefined;
        }
        if (inputVisible) {
            const handleConfirm = () => {
                if (inputValue && tagContents?.indexOf(inputValue) === -1) {
                    const contents = [...tagContents, inputValue];
                    setTagContents(contents);
                    if (props?.name && props?.performSubmit && formContext?.form) {
                        formContext.form.setFieldValue(props.name, contents);
                    }
                }
                setInputVisible(false);
                setInputValue(undefined);
            };
            const omitProps = !props?.addingInputProps ? {} : omit(props.addingInputProps, ['className', 'size', 'style', 'onChange', 'onPressEnter', 'onBlur']);
            return (
                <div className={`${clazzPrefix}-action`}>
                    <Input
                        ref={inputRef}
                        className={classNames(`${clazzPrefix}-action-input`, props?.addingInputProps?.className)}
                        type='text'
                        value={inputValue}
                        size={props?.addingInputProps?.size ?? 'small'}
                        style={props?.addingInputProps?.style ?? {width: '80px'}}
                        onChange={event => {
                            setInputValue(event.target.value);
                            if (props?.addingInputProps?.onChange) {
                                props.addingInputProps.onChange(event);
                            }
                        }}
                        onPressEnter={event => {
                            handleConfirm();
                            if (props?.addingInputProps?.onPressEnter) {
                                props.addingInputProps.onPressEnter(event);
                            }
                        }}
                        onBlur={event => {
                            handleConfirm();
                            if (props?.addingInputProps?.onBlur) {
                                props.addingInputProps.onBlur(event);
                            }
                        }}
                        {...omitProps}
                    />
                </div>
            );
        } else {
            const omitProps = !props?.addingTagProps ? {} : omit(props.addingTagProps, ['className', 'onClick', 'children']);
            return (
                <div className={`${clazzPrefix}-action`}>
                    <Tag
                        className={classNames(`${clazzPrefix}-action-tag`, props?.addingTagProps?.className)}
                        onClick={event => {
                            setInputVisible(true);
                            if (props?.addingTagProps?.onClick) {
                                props.addingTagProps.onClick(event);
                            }
                        }}
                        {...omitProps}
                    >
                        {props?.addingTagProps?.children ?? <PlusOutlined/>}
                    </Tag>
                </div>
            );
        }
    };

    const buildSubmitDom = () => {
        if (!performSubmit || !props?.name) {
            return undefined;
        }
        return (
            <div className={`${clazzPrefix}-submit`}>
                <Form.List name={props.name} initialValue={tagContents}>
                    {fields =>
                        fields.map(field => (
                            <Form.Item hidden={true} {...field}>
                                <Input type='hidden'/>
                            </Form.Item>
                        ))
                    }
                </Form.List>
            </div>
        );
    };

    return (
        <div
            ref={ref => fieldRef.current = ref ?? undefined}
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildFulfilDom()}
            {buildActionDom()}
            {buildSubmitDom()}
        </div>
    );
});
