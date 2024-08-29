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
import {ConfigProvider, Avatar, Image, Tooltip, Upload, type AvatarProps, type TooltipProps, type UploadProps, message as messageApi} from 'antd';
import {type RcFile} from 'antd/es/upload/interface';
import {UserOutlined, LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import {StringUtils, NumberUtils} from '@yookue/ts-lang-utils';
import ImgCrop, {type ImgCropProps} from 'antd-img-crop';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {FileUtils} from '@/util/FileUtils';
import {NodeUtils} from '@/util/NodeUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type AvatarUploadRef = {
    isLoading: () => boolean;
    getImageSrc: () => string;
    setImageSrc: (src?: string) => void;
};


export type FileUploadProps = UploadProps & {
    /**
     * @description The allowed file types
     * @description.zh-CN 允许上传的文件类型
     * @description.zh-TW 允許上傳的文件類型
     */
    allowedFileTypes?: string[];

    /**
     * @description The allowed file types
     * @description.zh-CN 允许上传的文件类型
     * @description.zh-TW 允許上傳的文件類型
     */
    warnWithTypes?: boolean;

    /**
     * @description The max allowed file size
     * @description.zh-CN 允许上传的最大文件大小
     * @description.zh-TW 允許上傳的最大文件大小
     */
    maxFileSize?: number;

    /**
     * @description The unit of max allowed file size
     * @description.zh-CN 允许上传的最大文件大小的单位
     * @description.zh-TW 允許上傳的最大文件大小的單位
     */
    fileSizeUint?: 'KB' | 'MB' | 'GB';

    /**
     * @description The upload placeholder
     * @description.zh-CN 上传组件的占位符
     * @description.zh-TW 上傳組件的占位符
     */
    placeholder?: React.ReactNode | (() => React.ReactNode);
};


export type IntlLocaleProps = {
    /**
     * @description Upload
     * @description.zh-CN 上传
     * @description.zh-TW 上傳
     */
    upload?: string;

    /**
     * @description File size cant not be greater than {}{}
     * @description.zh-CN 文件大小不能超过 {}{}
     * @description.zh-TW 文件大小不能超過 {}{}
     */
    maxFileSize?: string;

    /**
     * @description File type is disallowed
     * @description.zh-CN 文件类型不允许
     * @description.zh-TW 文件類型不允許
     */
    typesDisallowed?: string;

    /**
     * @description Only allowed some files
     * @description.zh-CN 只允许特定类型的文件
     * @description.zh-TW 只允許特定類型的文件
     */
    typesDisallowedDetail?: string;

    /**
     * @description The title of image crop modal
     * @description.zh-CN 头像裁剪对话框的标题
     * @description.zh-TW 頭像裁剪對話框的標題
     */
    cropModalTitle?: string;
};


export type AvatarUploadProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-avatar-upload'
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
     * @description The image source
     * @description.zh-CN 图片源
     * @description.zh-TW 圖片源
     */
    imageSrc?: string;

    /**
     * @description The shape of the image
     * @description.zh-CN 头像的形状
     * @description.zh-TW 頭像的形狀
     * @default 'circle'
     */
    imageShape?: 'circle' | 'square';

    /**
     * @description Whether to enable crop or not
     * @description.zh-CN 是否启用裁剪
     * @description.zh-TW 是否啟用裁剪
     * @default true
     */
    cropEnabled?: boolean;

    /**
     * @description The crop props for the component
     * @description.zh-CN 裁剪属性
     * @description.zh-TW 裁剪屬性
     */
    cropProps?: ImgCropProps;

    /**
     * @description The props for the avatar
     * @description.zh-CN 头像属性
     * @description.zh-TW 頭像屬性
     */
    avatarProps?: Omit<AvatarProps, 'src' | 'srcSet' | 'shape'>;

    /**
     * @description Whether to enable upload or not
     * @description.zh-CN 是否启用上传
     * @description.zh-TW 是否啟用上傳
     */
    uploadEnabled?: boolean;

    /**
     * @description The upload props for the component
     * @description.zh-CN 上传属性
     * @description.zh-TW 上傳屬性
     */
    uploadProps?: FileUploadProps;

    /**
     * @description The locale props for the component
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description Whether to use tooltip control
     * @description.zh-CN 是否使用 Tooltip 控件
     * @description.zh-TW 是否使用 Tooltip 控件
     * @default false
     */
    tooltipCtrl?: boolean;

    /**
     * @description The properties of tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: TooltipProps;
};


/**
 * Component for displaying an avtar with upload and crop capability
 *
 * @author David Hsing
 */
export const AvatarUpload: React.ForwardRefExoticComponent<AvatarUploadProps & React.RefAttributes<AvatarUploadRef>> = React.forwardRef((props?: AvatarUploadProps, ref?: any) => {
    AvatarUpload.displayName = 'AvatarUpload';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-avatar-upload');
    const intlType = useIntl();

    // Initialize the default props
    const {
        imageShape = 'circle',
        cropEnabled = true,
        tooltipCtrl = false,
    } = props ?? {};

    const [loading, setLoading] = React.useState(false);
    const [imageSrc, setImageSrc] = React.useState(props?.imageSrc);
    const fieldRef = React.useRef<HTMLDivElement>();

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isLoading: () => {
            return loading;
        },
        getImageSrc: () => {
            return imageSrc;
        },
        setImageSrc: (src?: string) => {
            setImageSrc(src);
        }
    }));

    const handleBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
        if (props?.uploadProps?.allowedFileTypes && !props.uploadProps.allowedFileTypes.some(item => file.type === item)) {
            if (!props?.uploadProps?.warnWithTypes) {
                messageApi.error(props?.localeProps?.typesDisallowed || intlLocales.get([intlType.locale, 'typesDisallowed']) || intlLocales.get(['en_US', 'typesDisallowed']));
            } else {
                const template = props?.localeProps?.typesDisallowedDetail || intlLocales.get([intlType.locale, 'typesDisallowedDetail']) || intlLocales.get(['en_US', 'typesDisallowedDetail']);
                const types = StringUtils.joinWith(props.uploadProps.allowedFileTypes.map(item => (item === 'image/jpeg') ? 'jpg' : StringUtils.substringAfterLast(item, '/')) as string[], '/');
                messageApi.error(StringUtils.formatBrace(template, types));
            }
            return false;
        }
        if (NumberUtils.isPositive(props?.uploadProps?.maxFileSize) && props?.uploadProps?.fileSizeUint) {
            let fileSize = file.size;
            switch (props.uploadProps.fileSizeUint) {
                case 'KB':
                    fileSize /= 1024;
                    break;
                case 'MB':
                    fileSize /= 1024 * 1024;
                    break;
                case 'GB':
                    fileSize /= 1024 * 1024 * 1024;
                    break;
                default:
                    break;
            }
            // @ts-ignore
            if (fileSize > props.uploadProps.maxFileSize) {
                const template = props?.localeProps?.maxFileSize || intlLocales.get([intlType.locale, 'maxFileSize']) || intlLocales.get(['en_US', 'maxFileSize']);
                messageApi.error(StringUtils.formatBrace(template, props.uploadProps.maxFileSize, props.uploadProps.fileSizeUint));
                return false;
            }
        }
        if (props?.uploadProps?.beforeUpload) {
            return props.uploadProps.beforeUpload(file, fileList);
        }
    };

    const handleUploadChange: UploadProps['onChange'] = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            FileUtils.readAsDataUrl(info.file.originFileObj as RcFile, url => {
                setLoading(false);
                setImageSrc(url);
            });
        }
        if (props?.uploadProps?.onChange) {
            props.uploadProps.onChange(info);
        }
    };

    const buildAvatarPlaceholder = () => {
        if (props?.avatarProps?.icon) {
            return props.avatarProps.icon;
        }
        return !tooltipCtrl ? (
            <span className={`${clazzPrefix}-icon-placeholder`} title={NodeUtils.toString(props?.tooltipProps?.title)}>
                <UserOutlined/>
            </span>
        ) : (
            <Tooltip {...props?.tooltipProps}>
                <span className={`${clazzPrefix}-icon-placeholder`}>
                    <UserOutlined/>
                </span>
            </Tooltip>
        );
    };

    const buildUploadPlaceholder = () => {
        if (typeof props?.uploadProps?.placeholder === 'function') {
            return props.uploadProps.placeholder();
        }
        if (props?.uploadProps?.placeholder) {
            return props.uploadProps.placeholder;
        }
        const innerDom = (
            <>
                {loading ? <LoadingOutlined/> : <PlusOutlined/>}
                <div style={{marginTop: 8}}>
                    {props?.localeProps?.upload || intlLocales.get([intlType.locale, 'upload']) || intlLocales.get(['en_US', 'upload'])}
                </div>
            </>
        );
        return !tooltipCtrl ? (
            <span className={`${clazzPrefix}-action-placeholder`} title={NodeUtils.toString(props?.tooltipProps?.title)}>
                {innerDom}
            </span>
        ) : (
            <Tooltip {...props?.tooltipProps}>
                <span className={`${clazzPrefix}-action-placeholder`}>
                    {innerDom}
                </span>
            </Tooltip>
        );
    };

    const buildImageDom = () => {
        if (!imageSrc) {
            return undefined;
        }
        return !tooltipCtrl ? (
            <Image src={imageSrc} rootClassName={`${clazzPrefix}-image`} preview={false} style={{width: '100%'}} title={NodeUtils.toString(props?.tooltipProps?.title)}/>
        ) : (
            <Tooltip {...props?.tooltipProps}>
                <Image src={imageSrc} rootClassName={`${clazzPrefix}-image`} preview={false} style={{width: '100%'}}/>
            </Tooltip>
        );
    };

    const buildAvatarDom = () => {
        if (!props?.uploadEnabled || editContext.mode === 'read') {
            const omitAvatarProps = !props?.avatarProps ? {} : omit(props.avatarProps, ['className', 'size', 'icon']);
            return (
                <Avatar
                    className={classNames(`${clazzPrefix}-avatar`, props?.avatarProps?.className)}
                    shape={imageShape}
                    size={props?.avatarProps?.size ?? {xs: 24, sm: 32, md: 48, lg: 64, xl: 104, xxl: 128}}
                    icon={buildAvatarPlaceholder()}
                    src={buildImageDom()}
                    {...omitAvatarProps}
                />
            );
        }
        const omitUploadProps = !props?.uploadProps ? {} : omit(props.uploadProps, ['className', 'name', 'fileList', 'listType', 'maxCount', 'showUploadList', 'onChange', 'allowedFileTypes', 'warnWithTypes', 'maxFileSize', 'fileSizeUint', 'placeholder']);
        const uploadDom = (
            <Upload
                className={classNames(`${clazzPrefix}-action-${imageShape}`, props?.uploadProps?.className)}
                name={props?.uploadProps?.name ?? 'avatar'}
                listType={props?.uploadProps?.listType ?? 'picture-card'}
                maxCount={props?.uploadProps?.maxCount ?? 1}
                showUploadList={props?.uploadProps?.showUploadList ?? false}
                beforeUpload={handleBeforeUpload}
                onChange={handleUploadChange}
                {...omitUploadProps}
            >
                {imageSrc ? buildImageDom() : buildUploadPlaceholder()}
            </Upload>
        );
        if (!cropEnabled) {
            return uploadDom;
        }
        const omitCropProps = !props?.cropProps ? {} : omit(props.cropProps, ['modalClassName', 'modalTitle', 'rotationSlider']);
        const cropModalTitle = props?.localeProps?.cropModalTitle || intlLocales.get([intlType.locale, 'cropModalTitle']) || intlLocales.get(['en_US', 'cropModalTitle']);
        return (
            <ImgCrop
                modalClassName={classNames(`${clazzPrefix}-crop`, props?.cropProps?.modalClassName)}
                modalTitle={props?.cropProps?.modalTitle ?? cropModalTitle}
                rotationSlider={props?.cropProps?.rotationSlider ?? true}
                {...omitCropProps}
            >
                {uploadDom}
            </ImgCrop>
        );
    };

    return (
        <div
            ref={ref => fieldRef.current = ref ?? undefined}
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildAvatarDom()}
        </div>
    );
});
