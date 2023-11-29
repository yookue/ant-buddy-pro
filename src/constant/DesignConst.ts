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


export abstract class DesignConst {
    // @see "antd/es/form/FormItem/index.d.ts"
    public static FormItemProps = ['prefixCls', 'noStyle', 'style', 'hasFeedback', 'validateStatus', 'hidden', 'initialValue', 'messageVariables', 'tooltip', 'fieldKey'];

    // @see "@ant-design/pro-form/es/components/FormItem/index.d.ts"
    public static WarpFormItemProps = ['addonBefore', 'addonAfter', 'convertValue'];

    // @see "@ant-design/pro-form/es/components/FormItem/index.d.ts"
    public static ProFormItemProps = [...DesignConst.FormItemProps, ...DesignConst.WarpFormItemProps, 'ignoreFormItem', 'valueType', 'transform', 'dataFormat', 'lightProps', 'proFormFieldKey'];

    // @see "@ant-design/pro-form/es/interface.d.ts"
    public static ProFormExtendProps = ['secondary', 'allowClear', 'bordered', 'colSize', 'params', 'ignoreFormItem', 'convertValue', 'formItemProps', 'filedConfig', 'fieldRef'];

    // @see "@ant-design/pro-form/es/interface.d.ts"
    public static ProFormFieldItemProps = [...DesignConst.ProFormItemProps, ...DesignConst.ProFormExtendProps, 'fieldProps', 'cacheForSwr', 'proFieldProps', 'footerRender', 'colProps'];

    // @see "@ant-design/pro-field/es/components/Select/index.d.ts"
    public static ProFieldSelectProps = ['valueEnum', 'debounceTime', 'request', 'params'];
}
