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


/**
 * Constants for Ant Design & ProComponents
 *
 * @author David Hsing
 */
export abstract class DesignConst {
    // @see "antd/lib/form/FormItemLabel.d.ts"
    public static FORM_ITEM_LABEL_PROPS = ['colon', 'htmlFor', 'label', 'labelAlign', 'labelCol', 'tooltip', 'vertical'];

    // @see "antd/lib/form/FormItemInput.d.ts"
    public static FORM_ITEM_INPUT_PROPS = ['labelCol', 'wrapperCol', 'extra', 'status', 'help', 'fieldId', 'label'];

    // @see "antd/lib/form/FormItem/index.d.ts"
    public static FORM_ITEM_PROPS = [...DesignConst.FORM_ITEM_LABEL_PROPS, ...DesignConst.FORM_ITEM_INPUT_PROPS, 'dependencies', 'prefixCls', 'noStyle', 'style', 'hasFeedback', 'validateStatus', 'hidden', 'initialValue', 'messageVariables', 'tooltip', 'fieldKey'];

    // @see "@ant-design/pro-form/lib/components/FormItem/index.d.ts"
    public static WARP_FORM_ITEM_PROPS = ['addonBefore', 'addonAfter', 'convertValue'];

    // @see "@ant-design/pro-form/lib/components/FormItem/index.d.ts"
    public static PRO_FORM_ITEM_PROPS = [...DesignConst.FORM_ITEM_PROPS, ...DesignConst.WARP_FORM_ITEM_PROPS, 'ignoreFormItem', 'valueType', 'transform', 'dataFormat', 'lightProps', 'proFormFieldKey'];

    // @see "@ant-design/pro-form/lib/interface.d.ts"
    public static PRO_FORM_EXTEND_PROPS = ['secondary', 'allowClear', 'variant', 'colSize', 'params', 'ignoreFormItem', 'convertValue', 'formItemProps', 'filedConfig', 'fieldRef'];

    // @see "@ant-design/pro-form/lib/interface.d.ts"
    public static PRO_FORM_FIELD_ITEM_PROPS = [...DesignConst.PRO_FORM_ITEM_PROPS, ...DesignConst.PRO_FORM_EXTEND_PROPS, 'fieldProps', 'proFieldProps', 'cacheForSwr', 'footerRender', 'colProps'];

    public static FORWARD_FIELD_PROPS = ['name', 'id', 'placeholder'];

    // @see "@ant-design/pro-field/lib/components/Select/index.d.ts"
    public static PRO_FIELD_SELECT_PROPS = ['valueEnum', 'debounceTime', 'params', 'request'];
}
