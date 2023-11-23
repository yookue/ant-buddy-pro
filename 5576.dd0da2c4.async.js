(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[5576],{55576:function(o,e,l){"use strict";l.r(e),l.d(e,{ApartTitle:function(){return B},CardTabs:function(){return K},ExactInput:function(){return I},FallbackImage:function(){return p},FoldSection:function(){return H},FullScreen:function(){return E},LocaleInput:function(){return D},LoginPortal:function(){return _},MenuTabs:function(){return q},PageFooter:function(){return X},RefreshImage:function(){return g},SettingDrawer:function(){return $},WrapSpace:function(){return oo}});var n=l(91896),i=l(2824),d=(l(98336),l(84871)),t=l(63804),a=l.n(t),r=l(49233),v=l.n(r),u=l(36456),c=l(97218);class s{}s.detectSource=(o,e)=>{if(o){if("string"===typeof o)return o;if("function"===typeof o)return s.detectSource(o(),e);if("object"===typeof o&&"[object Promise]"===Object.prototype.toString.call(o)){if(!e)return void console.warn("The argument 'param' is a Promise object, but has none matching argument 'callback'");o.then((o=>e(o)))}}};var p=o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-fallback-image"),t=a().useState((()=>s.detectSource(null===o||void 0===o?void 0:o.src,(o=>f(o))))),r=(0,i.default)(t,2),p=r[0],f=r[1],m=e=>{null!==o&&void 0!==o&&o.fallback&&f(s.detectSource(null===o||void 0===o?void 0:o.fallback,(o=>f(o)))),"function"===typeof(null===o||void 0===o?void 0:o.onError)&&(null===o||void 0===o||o.onError(e))},P=o?(0,c.Z)(o,["clazzPrefix","className","src","fallback","onError"]):{};return a().createElement(u.Z,(0,n.Z)({},P,{className:v()(l,null===o||void 0===o?void 0:o.className),src:p,onError:m}))},f=(l(51966),l(95455)),m=l(21444),P=l(38296),y=l(31871),h=l(42192),E=o=>{var e,l,t,r,v=a().useContext(d.ZP.ConfigContext),u=v.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-full-screen");if(null===o||void 0===o||!o.triggerFor)throw SyntaxError("Parameter 'triggerFor' must be a valid element!");var c=a().useState(document.fullscreenElement===(null===o||void 0===o?void 0:o.triggerFor)),s=(0,i.default)(c,2),p=s[0],E=s[1],C=()=>{E(document.fullscreenElement===(null===o||void 0===o?void 0:o.triggerFor))},g=o=>{"Escape"===o.key?E(!1):"F11"===o.key&&E(!p)};a().useLayoutEffect((()=>{var e,l;return null===o||void 0===o||null===(e=o.triggerFor)||void 0===e||e.addEventListener("fullscreenchange",C,!1),null===o||void 0===o||null===(l=o.triggerFor)||void 0===l||l.addEventListener("keydown",g,!1),()=>{var e,l;null===o||void 0===o||null===(e=o.triggerFor)||void 0===e||e.removeEventListener("fullscreenchange",C,!1),null===o||void 0===o||null===(l=o.triggerFor)||void 0===l||l.removeEventListener("keydown",g,!1)}}));var z=()=>{h.Z.isEnabled&&(h.Z.toggle(null===o||void 0===o?void 0:o.triggerFor),E(!p))},x=a().createElement(p?m.Z:P.Z,{className:u,onClick:z});return a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.useTooltip,validation:!1},a().createElement(y.If.Then,null,a().createElement(f.Z,(0,n.Z)({title:p?null===o||void 0===o?void 0:o.exitHint:null===o||void 0===o?void 0:o.enterHint},null===o||void 0===o?void 0:o.tooltipProps),a().createElement(y.If,{condition:"string"===typeof(null===o||void 0===o?void 0:o.useWrapper),validation:!1},a().createElement(null===o||void 0===o?void 0:o.useWrapper,{className:null===o||void 0===o||null===(e=o.wrapperProps)||void 0===e?void 0:e.clazz,style:null===o||void 0===o||null===(l=o.wrapperProps)||void 0===l?void 0:l.style},x)),a().createElement(y.If,{condition:!(null!==o&&void 0!==o&&o.useWrapper),validation:!1},x))),a().createElement(y.If.Else,null,a().createElement(y.If,{condition:"string"===typeof(null===o||void 0===o?void 0:o.useWrapper),validation:!1},a().createElement(null===o||void 0===o?void 0:o.useWrapper,{className:null===o||void 0===o||null===(t=o.wrapperProps)||void 0===t?void 0:t.clazz,style:null===o||void 0===o||null===(r=o.wrapperProps)||void 0===r?void 0:r.style,title:p?null===o||void 0===o?void 0:o.exitHint:null===o||void 0===o?void 0:o.enterHint},x)),a().createElement(y.If,{condition:!(null!==o&&void 0!==o&&o.useWrapper),validation:!1},a().createElement(p?m.Z:P.Z,{title:p?null===o||void 0===o?void 0:o.exitHint:null===o||void 0===o?void 0:o.enterHint,onClick:z}))))};E.defaultProps={triggerFor:document.documentElement,useTooltip:!1,useWrapper:!1};var C=l(8870),g=o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-refresh-image"),t=a().useState((()=>s.detectSource(null===o||void 0===o?void 0:o.src,(o=>f(o))))),r=(0,i.default)(t,2),p=r[0],f=r[1],m=e=>{var l=p;null!==o&&void 0!==o&&o.src&&f(s.detectSource(null===o||void 0===o?void 0:o.src,(o=>f(o))));var n=p;"function"===typeof(null===o||void 0===o?void 0:o.onClick)&&(null===o||void 0===o||o.onClick(e)),"function"===typeof(null===o||void 0===o?void 0:o.onRefresh)&&(null===o||void 0===o||o.onRefresh(l,n))},P=e=>{null!==o&&void 0!==o&&o.fallback&&f(s.detectSource(null===o||void 0===o?void 0:o.fallback,(o=>f(o)))),"function"===typeof(null===o||void 0===o?void 0:o.onError)&&(null===o||void 0===o||o.onError(e))},y=o?(0,c.Z)(o,["clazzPrefix","className","autoCursor","src","fallback","onRefresh","onClick","onError","style"]):{},h=null!==o&&void 0!==o&&o.autoCursor?{cursor:"pointer"}:{};return a().createElement(u.Z,(0,n.Z)({},y,{className:v()(l,null===o||void 0===o?void 0:o.className),src:p,onClick:m,onError:P,style:(0,C.Z)((0,C.Z)({},h),null===o||void 0===o?void 0:o.style)}))},z=(l(59320),l(43879)),x=(l(21885),l(45733)),b=(l(89068),l(42091)),Z=l(7364),S=l(62925);class k{}k.FormItemPropsKeys=["prefixCls","noStyle","style","hasFeedback","validateStatus","hidden","initialValue","messageVariables","tooltip","fieldKey"],k.WarpFormItemPropsKeys=["addonBefore","addonAfter","convertValue"],k.ProFormItemPropsKeys=[...k.FormItemPropsKeys,...k.WarpFormItemPropsKeys,"ignoreFormItem","valueType","transform","dataFormat","lightProps","proFormFieldKey"],k.ExtendsPropsKeys=["secondary","allowClear","bordered","colSize","params","ignoreFormItem","convertValue","formItemProps","filedConfig","fieldRef"],k.ProFormFieldItemPropsKeys=[...k.ProFormItemPropsKeys,...k.ExtendsPropsKeys,"fieldProps","cacheForSwr","proFieldProps","footerRender","colProps"];l(3124);var I=a().forwardRef(((o,e)=>{var l=a().useContext(d.ZP.ConfigContext),i=l.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-exact-input"),t=null!==o&&void 0!==o&&o.checkProps?(0,c.Z)(null===o||void 0===o?void 0:o.checkProps,["namePrefix","nameSuffix","idPrefix","idSuffix","name","id","title"]):{},r=null!==o&&void 0!==o&&o.tooltipProps?(0,c.Z)(null===o||void 0===o?void 0:o.tooltipProps,["title"]):{},u=function(){var e,l,n,i;return null!==o&&void 0!==o&&null!==(e=o.checkProps)&&void 0!==e&&e.name?null===o||void 0===o||null===(l=o.checkProps)||void 0===l?void 0:l.name:null!==o&&void 0!==o&&o.name?((null===o||void 0===o||null===(n=o.checkProps)||void 0===n?void 0:n.namePrefix)||"")+(null===o||void 0===o?void 0:o.name)+((null===o||void 0===o||null===(i=o.checkProps)||void 0===i?void 0:i.nameSuffix)||""):void 0},s=function(){var e,l,n,i;return null!==o&&void 0!==o&&null!==(e=o.checkProps)&&void 0!==e&&e.id?null===o||void 0===o||null===(l=o.checkProps)||void 0===l?void 0:l.id:null!==o&&void 0!==o&&o.id?((null===o||void 0===o||null===(n=o.checkProps)||void 0===n?void 0:n.idPrefix)||"")+(null===o||void 0===o?void 0:o.id)+((null===o||void 0===o||null===(i=o.checkProps)||void 0===i?void 0:i.idSuffix)||""):void 0},p=u(),m=s(),P=function(e){var l,i,d,v,u,c,s,P,h,E,C,g,z;if(!(e&&"before"!==(null===o||void 0===o?void 0:o.addonPos)||!e&&"after"!==(null===o||void 0===o?void 0:o.addonPos))||(!e||null!==o&&void 0!==o&&null!==(l=o.fieldProps)&&void 0!==l&&l.addonBefore)&&(e||null!==o&&void 0!==o&&null!==(i=o.fieldProps)&&void 0!==i&&i.addonAfter)){var Z=a().createElement(b.Z,(0,n.Z)({name:p,id:m||p},t),null===o||void 0===o?void 0:o.addonDom),S=[e&&(null===o||void 0===o||null===(d=o.fieldProps)||void 0===d?void 0:d.addonBefore),!e&&(null===o||void 0===o||null===(v=o.fieldProps)||void 0===v?void 0:v.addonAfter),e&&"before"===(null===o||void 0===o?void 0:o.addonPos)||!e&&"after"===(null===o||void 0===o?void 0:o.addonPos)].filter((o=>!!o)).length;if(0!==S){var k=(null===o||void 0===o||null===(u=o.tooltipProps)||void 0===u?void 0:u.title)||(null===o||void 0===o||null===(c=o.checkProps)||void 0===c?void 0:c.title),I=a().createElement(a().Fragment,null,a().createElement(y.If,{condition:e&&(null===o||void 0===o||null===(s=o.fieldProps)||void 0===s?void 0:s.addonBefore),validation:!1},null===o||void 0===o||null===(P=o.fieldProps)||void 0===P?void 0:P.addonBefore),a().createElement(y.If,{condition:!e&&(null===o||void 0===o||null===(h=o.fieldProps)||void 0===h?void 0:h.addonAfter),validation:!1},null===o||void 0===o||null===(E=o.fieldProps)||void 0===E?void 0:E.addonAfter),a().createElement(y.If,{condition:e&&"before"===(null===o||void 0===o?void 0:o.addonPos)||!e&&"after"===(null===o||void 0===o?void 0:o.addonPos),validation:!1},a().createElement(y.If,{condition:k,validation:!1},a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.useTooltip,validation:!1},a().createElement(f.Z,(0,n.Z)({title:k},r),Z)),a().createElement(y.If,{condition:!(null!==o&&void 0!==o&&o.useTooltip),validation:!1},a().createElement("span",{title:"string"===typeof(null===o||void 0===o||null===(C=o.tooltipProps)||void 0===C?void 0:C.title)?null===o||void 0===o||null===(g=o.tooltipProps)||void 0===g?void 0:g.title:null===o||void 0===o||null===(z=o.checkProps)||void 0===z?void 0:z.title},Z))),a().createElement(y.If,{condition:!k,validation:!1},Z)));return 1===S?I:a().createElement(x.default,null,I)}}},h=P(!0),E=P(!1),g=null!==o&&void 0!==o&&o.fieldProps?(0,c.Z)(null===o||void 0===o?void 0:o.fieldProps,["className","addonBefore","addonAfter"]):{};if(null!==o&&void 0!==o&&o.proField){var Z=o?(0,c.Z)(o,["clazzPrefix","className","addonDom","addonPos","checkProps","fieldProps","tooltipProps","proField"]):{};return a().createElement(S.Z,(0,n.Z)({ref:e},Z,{fieldProps:(0,C.Z)((0,C.Z)({className:v()(i,null===o||void 0===o?void 0:o.className)},g),{},{addonBefore:h,addonAfter:E})}))}var I=o?(0,c.Z)(o,["clazzPrefix","className","addonDom","addonPos","checkProps","fieldProps","tooltipProps","proField",...k.ProFormFieldItemPropsKeys]):{};return a().createElement(z.Z,(0,n.Z)({ref:e,className:v()(i,null===o||void 0===o?void 0:o.className)},I,g,{addonBefore:h,addonAfter:E}))}));I.defaultProps={addonDom:a().createElement(Z.Z,null),addonPos:"after",checkProps:{nameSuffix:"Exact"},useTooltip:!1,proField:!0};l(24694);var N=l(58393),F=l(91220),A=(l(36326),l(7523)),T=l(75823),w=l(71555),O=l(63746);class L{}L.setInputValue=(o,e,l)=>{if(o){var n=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");if(n){var i=(null===n||void 0===n?void 0:n.get.call(o))||"";n.set.call(o,e||""),o.dispatchEvent(new Event("change",{bubbles:!0})),l&&l(i)}}};l(57170);var D=a().forwardRef(((o,e)=>{var l,t,r=a().useContext(d.ZP.ConfigContext),u=r.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-locale-input"),s=(0,O.x)(),p=o=>{var e=document.querySelector('input[data-buddy-locale-id="'.concat(s,'"]')),l=document.querySelector('input[data-buddy-locale-tag="'.concat(o,'"]'));e&&l&&L.setInputValue(e,l.value)},f=function(e,l,n,i){var d,t,r,c,s,f,m,P,h,E,C,g,z,b,Z;if((!l||"before"===(null===o||void 0===o?void 0:o.popupTagPos)||null!==i&&void 0!==i&&null!==(d=i.fieldProps)&&void 0!==d&&d.addonBefore||"before"!==(null===o||void 0===o?void 0:o.popupActionPos)||null!==o&&void 0!==o&&o.popupActionDom)&&(l||"after"===(null===o||void 0===o?void 0:o.popupTagPos)||null!==i&&void 0!==i&&null!==(t=i.fieldProps)&&void 0!==t&&t.addonAfter||"after"!==(null===o||void 0===o?void 0:o.popupActionPos)||null!==o&&void 0!==o&&o.popupActionDom)){var S=(null===o||void 0===o?void 0:o.disabled)||(null===o||void 0===o||null===(r=o.fieldProps)||void 0===r?void 0:r.disabled)||(null===i||void 0===i?void 0:i.disabled)||(null===i||void 0===i||null===(c=i.fieldProps)||void 0===c?void 0:c.disabled),k=(null===o||void 0===o?void 0:o.readOnly)||(null===o||void 0===o||null===(s=o.fieldProps)||void 0===s?void 0:s.readonly)||(null===i||void 0===i?void 0:i.readOnly)||(null===i||void 0===i||null===(f=i.fieldProps)||void 0===f?void 0:f.readonly),I=l&&"before"===(null===o||void 0===o?void 0:o.popupTagPos)||!l&&"after"===(null===o||void 0===o?void 0:o.popupTagPos)?a().createElement("span",{className:v()("".concat(u,"-tag-").concat(null===o||void 0===o?void 0:o.popupTagPos),S||k?"".concat(u,"-disabled"):void 0)},e):void 0,N=v()("".concat(u,"-action-").concat(null===o||void 0===o?void 0:o.popupActionPos),S||k?"".concat(u,"-disabled"):void 0),F=null!==o&&void 0!==o&&o.popupActionDom&&(l&&"before"===(null===o||void 0===o?void 0:o.popupActionPos)||!l&&"after"===(null===o||void 0===o?void 0:o.popupActionPos))?a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.popupConfirmProps,validation:!1},a().createElement(y.If.Then,null,a().createElement(A.Z,{title:null===o||void 0===o||null===(m=o.popupConfirmProps)||void 0===m?void 0:m.message,okText:null===o||void 0===o||null===(P=o.popupConfirmProps)||void 0===P?void 0:P.ok,cancelText:null===o||void 0===o||null===(h=o.popupConfirmProps)||void 0===h?void 0:h.cancel,disabled:S||k,onConfirm:()=>p(n)},a().createElement("span",{className:N},null===o||void 0===o?void 0:o.popupActionDom))),a().createElement(y.If.Else,null,a().createElement("span",{className:N,onClick:()=>p(n)},null===o||void 0===o?void 0:o.popupActionDom))):void 0,T=[l&&(null===i||void 0===i||null===(E=i.fieldProps)||void 0===E?void 0:E.addonBefore),!l&&(null===i||void 0===i||null===(C=i.fieldProps)||void 0===C?void 0:C.addonAfter),I,F].filter((o=>!!o)).length;if(0!==T){var w=a().createElement(a().Fragment,null,a().createElement(y.If,{condition:l&&(null===i||void 0===i||null===(g=i.fieldProps)||void 0===g?void 0:g.addonBefore),validation:!1},null===i||void 0===i||null===(z=i.fieldProps)||void 0===z?void 0:z.addonBefore),a().createElement(y.If,{condition:!l&&(null===i||void 0===i||null===(b=i.fieldProps)||void 0===b?void 0:b.addonAfter),validation:!1},null===i||void 0===i||null===(Z=i.fieldProps)||void 0===Z?void 0:Z.addonAfter),I,F);return 1===T?w:a().createElement(x.default,null,w)}}},m=[];if(null!==o&&void 0!==o&&o.popupInputProps){var P,h=(0,F.Z)(null===o||void 0===o?void 0:o.popupInputProps);try{for(h.s();!(P=h.n()).done;){var E,g,b,Z,I,T,w,D,B,W,K,R,j,H=P.value;if(H&&null!==H&&void 0!==H&&H.tag){var _=H.tag,V=H.fieldProps,Q=H.rules,q=(0,c.Z)(H,["tag","name","id","disabled","readonly","fieldProps","rules"]),M=q,G=V?(0,c.Z)(V,["className","addonBefore","addonAfter","maxLength","placeholder"]):{},U=(0,O.x)(),J=f(_,!0,U,H),X=f(_,!1,U,H),Y=null!==o&&void 0!==o&&o.popupCloneRules&&null!==o&&void 0!==o&&o.rules?null===o||void 0===o?void 0:o.rules:[],$=a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.popupProField,validation:!1},a().createElement(y.If.Then,null,a().createElement(S.Z,(0,n.Z)({name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(_,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(_,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(_,"]"):void 0,disabled:(null===o||void 0===o?void 0:o.disabled)||(null===o||void 0===o||null===(E=o.fieldProps)||void 0===E?void 0:E.disabled)||(null===H||void 0===H?void 0:H.disabled)||(null===H||void 0===H||null===(g=H.fieldProps)||void 0===g?void 0:g.disabled),readonly:(null===o||void 0===o?void 0:o.readOnly)||(null===o||void 0===o||null===(b=o.fieldProps)||void 0===b?void 0:b.readonly)||(null===H||void 0===H?void 0:H.readOnly)||(null===H||void 0===H||null===(Z=H.fieldProps)||void 0===Z?void 0:Z.readonly)},q,{fieldProps:(0,C.Z)((0,C.Z)({className:v()("".concat(u,"-item"),null===V||void 0===V?void 0:V.className),addonBefore:J,addonAfter:X,maxLength:(null===H||void 0===H?void 0:H.maxLength)||(null===o||void 0===o||null===(I=o.popupShareProps)||void 0===I?void 0:I.maxLength),placeholder:(null===H||void 0===H?void 0:H.placeholder)||(null===o||void 0===o||null===(T=o.popupShareProps)||void 0===T?void 0:T.placeholder)},G),{},{"data-buddy-locale-tag":U}),rules:[...Y,...(null===o||void 0===o||null===(w=o.popupShareProps)||void 0===w?void 0:w.rules)||[],...Q||[]]}))),a().createElement(y.If.Else,null,a().createElement(z.Z,(0,n.Z)({className:v()("".concat(u,"-item"),null===V||void 0===V?void 0:V.className),name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(_,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(_,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(_,"]"):void 0,disabled:(null===o||void 0===o?void 0:o.disabled)||(null===o||void 0===o||null===(D=o.fieldProps)||void 0===D?void 0:D.disabled)||H.disabled||(null===H||void 0===H||null===(B=H.fieldProps)||void 0===B?void 0:B.disabled),readOnly:(null===o||void 0===o?void 0:o.readOnly)||(null===o||void 0===o||null===(W=o.fieldProps)||void 0===W?void 0:W.readonly)||H.readOnly||(null===H||void 0===H||null===(K=H.fieldProps)||void 0===K?void 0:K.readonly),maxLength:(null===H||void 0===H?void 0:H.maxLength)||(null===o||void 0===o||null===(R=o.popupShareProps)||void 0===R?void 0:R.maxLength),placeholder:(null===H||void 0===H?void 0:H.placeholder)||(null===o||void 0===o||null===(j=o.popupShareProps)||void 0===j?void 0:j.placeholder)},M,{addonBefore:J,addonAfter:X},G,{"data-buddy-locale-tag":U}))));m.push({key:H.tag,label:$})}}}catch(Ao){h.e(Ao)}finally{h.f()}}else if((null===o||void 0===o||!o.popupInputProps)&&null!==o&&void 0!==o&&o.popupQuickTags){var oo,eo=(0,F.Z)(null===o||void 0===o?void 0:o.popupQuickTags);try{for(eo.s();!(oo=eo.n()).done;){var lo,no,io,to,ao,ro,vo,uo,co,so=oo.value;if(so&&0!==so.length){var po=(0,O.x)(),fo=f(so,!0,po),mo=f(so,!1,po),Po=null!==o&&void 0!==o&&o.popupCloneRules&&null!==o&&void 0!==o&&o.rules?null===o||void 0===o?void 0:o.rules:[],yo=a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.popupProField,validation:!1},a().createElement(y.If.Then,null,a().createElement(S.Z,{name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(so,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(so,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(so,"]"):void 0,disabled:(null===o||void 0===o?void 0:o.disabled)||(null===o||void 0===o||null===(lo=o.fieldProps)||void 0===lo?void 0:lo.disabled),readonly:(null===o||void 0===o?void 0:o.readOnly)||(null===o||void 0===o||null===(no=o.fieldProps)||void 0===no?void 0:no.readonly),fieldProps:{className:"".concat(u,"-item"),addonBefore:fo,addonAfter:mo,maxLength:null===o||void 0===o||null===(io=o.popupShareProps)||void 0===io?void 0:io.maxLength,placeholder:null===o||void 0===o||null===(to=o.popupShareProps)||void 0===to?void 0:to.placeholder,"data-buddy-locale-tag":po},rules:[...Po,...(null===o||void 0===o||null===(ao=o.popupShareProps)||void 0===ao?void 0:ao.rules)||[]]})),a().createElement(y.If.Else,null,a().createElement(z.Z,{className:"".concat(u,"-item"),name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(so,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(so,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(so,"]"):void 0,disabled:(null===o||void 0===o?void 0:o.disabled)||(null===o||void 0===o||null===(ro=o.fieldProps)||void 0===ro?void 0:ro.disabled),readOnly:(null===o||void 0===o?void 0:o.readOnly)||(null===o||void 0===o||null===(vo=o.fieldProps)||void 0===vo?void 0:vo.readonly),maxLength:null===o||void 0===o||null===(uo=o.popupShareProps)||void 0===uo?void 0:uo.maxLength,placeholder:null===o||void 0===o||null===(co=o.popupShareProps)||void 0===co?void 0:co.placeholder,addonBefore:fo,addonAfter:mo,"data-buddy-locale-tag":po})));m.push({key:so,label:yo})}}}catch(Ao){eo.e(Ao)}finally{eo.f()}}var ho=a().useState(!1),Eo=(0,i.default)(ho,2),Co=Eo[0],go=Eo[1],zo=()=>{go(!0)},xo=o=>{go(o)},bo=function(e){var l,n,i,d,t,r,v,u;if((!e||null!==o&&void 0!==o&&null!==(l=o.fieldProps)&&void 0!==l&&l.addonBefore||"before"!==(null===o||void 0===o?void 0:o.actionPos)||null!==o&&void 0!==o&&o.actionDom)&&(e||null!==o&&void 0!==o&&null!==(n=o.fieldProps)&&void 0!==n&&n.addonAfter||"after"!==(null===o||void 0===o?void 0:o.actionPos)||null!==o&&void 0!==o&&o.actionDom)){var c=[e&&(null===o||void 0===o||null===(i=o.fieldProps)||void 0===i?void 0:i.addonBefore),!e&&(null===o||void 0===o||null===(d=o.fieldProps)||void 0===d?void 0:d.addonAfter),(null===o||void 0===o?void 0:o.actionDom)&&(e&&"before"===(null===o||void 0===o?void 0:o.actionPos)||!e&&"after"===(null===o||void 0===o?void 0:o.actionPos))].filter((o=>!!o)).length;if(0!==c){var s=a().createElement(a().Fragment,null,a().createElement(y.If,{condition:e&&(null===o||void 0===o||null===(t=o.fieldProps)||void 0===t?void 0:t.addonBefore),validation:!1},null===o||void 0===o||null===(r=o.fieldProps)||void 0===r?void 0:r.addonBefore),a().createElement(y.If,{condition:!e&&(null===o||void 0===o||null===(v=o.fieldProps)||void 0===v?void 0:v.addonAfter),validation:!1},null===o||void 0===o||null===(u=o.fieldProps)||void 0===u?void 0:u.addonAfter),a().createElement(y.If,{condition:(null===o||void 0===o?void 0:o.actionDom)&&(e&&"before"===(null===o||void 0===o?void 0:o.actionPos)||!e&&"after"===(null===o||void 0===o?void 0:o.actionPos)),validation:!1},null===o||void 0===o?void 0:o.actionDom));return 1===c?s:a().createElement(x.default,null,s)}}},Zo=bo(!0),So=bo(!1),ko=a().useRef(null),Io=o?(0,c.Z)(o,["clazzPrefix","actionDom","actionPos","popupClazz","popupStyle","popupPlacement","popupInputProps","popupQuickTags","popupTagPos","popupActionDom","popupActionPos","popupConfirmProps","popupShareProps","popupProField"]):{},No=o?(0,c.Z)(o,["clazzPrefix","actionDom","actionPos","popupClazz","popupStyle","popupPlacement","popupInputProps","popupQuickTags","popupTagPos","popupActionDom","popupActionPos","popupConfirmProps","popupShareProps","popupProField",...k.ProFormFieldItemPropsKeys]):{},Fo=null!==o&&void 0!==o&&o.fieldProps?(0,c.Z)(null===o||void 0===o?void 0:o.fieldProps,["className","addonBefore","addonAfter"]):{};return a().createElement(N.Z,{menu:{items:m,onClick:zo},placement:null===o||void 0===o?void 0:o.popupPlacement,overlayClassName:v()(u+"-dropdown",null===o||void 0===o?void 0:o.popupClazz),overlayStyle:null===o||void 0===o?void 0:o.popupStyle,open:Co,onOpenChange:xo,getPopupContainer:()=>(null===ko||void 0===ko?void 0:ko.current)||document.body},a().createElement(z.Z.Group,null,a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.proField,validation:!1},a().createElement(y.If.Then,null,a().createElement(S.Z,(0,n.Z)({ref:e},Io,{fieldProps:(0,C.Z)((0,C.Z)({className:v()(u,null===o||void 0===o||null===(l=o.fieldProps)||void 0===l?void 0:l.className)},Fo),{},{addonBefore:Zo,addonAfter:So,"data-buddy-locale-id":s})}))),a().createElement(y.If.Else,null,a().createElement(z.Z,(0,n.Z)({ref:e,className:v()(u,null===o||void 0===o||null===(t=o.fieldProps)||void 0===t?void 0:t.className)},No,Fo,{addonBefore:Zo,addonAfter:So,"data-buddy-locale-id":s})))),a().createElement("div",{ref:ko,className:"".concat(u,"-dropdown-container")})))}));D.defaultProps={actionDom:a().createElement(T.Z,null),actionPos:"after",proField:!0,popupPlacement:"bottomLeft",popupTagPos:"before",popupActionDom:a().createElement(w.Z,null),popupActionPos:"after",popupProField:!1};l(11280);var B=o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-apart-title"),n=function(e){if(null!==o&&void 0!==o&&o.ornament&&null!==o&&void 0!==o&&o.ornamentPos)return a().createElement("span",{className:v()("".concat(l,"-ornament-").concat(e?"before":"after"),null===o||void 0===o?void 0:o.ornamentClazz),style:null===o||void 0===o?void 0:o.ornamentStyle},null===o||void 0===o?void 0:o.ornament)};return a().createElement("div",{className:v()("".concat(l),null===o||void 0===o?void 0:o.containerClazz,null!==o&&void 0!==o&&o.usePresetStyle?"".concat(l,"-").concat(null===o||void 0===o?void 0:o.usePresetStyle):void 0),style:null===o||void 0===o?void 0:o.containerStyle},a().createElement(y.If,{condition:"before"===(null===o||void 0===o?void 0:o.ornamentPos),validation:!1},n(!0)),a().createElement("span",{className:v()("".concat(l,"-content"),null===o||void 0===o?void 0:o.contentClazz),style:null===o||void 0===o?void 0:o.contentStyle},null===o||void 0===o?void 0:o.content),a().createElement(y.If,{condition:"after"===(null===o||void 0===o?void 0:o.ornamentPos),validation:!1},n(!1)))};B.defaultProps={ornamentPos:"before",usePresetStyle:"default"};l(7826);var W=l(39503),K=(l(71435),o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-card-tabs"),i=o?(0,c.Z)(o,["clazzPrefix","containerClazz","containerStyle"]):{};return a().createElement("div",{className:v()(l,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle},a().createElement(W.Z,(0,n.Z)({type:"card"},i)))}),R=l(19729),j=l(79275),H=(l(7129),o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-fold-section"),t=a().useState((null===o||void 0===o?void 0:o.panelInitialOpen)||!0),r=(0,i.default)(t,2),u=r[0],c=r[1],s=function(e){if(null!==o&&void 0!==o&&o.headerOrnament&&null!==o&&void 0!==o&&o.headerOrnamentPos)return a().createElement("span",{className:v()("".concat(l,"-header-ornament-").concat(e?"before":"after"),null===o||void 0===o?void 0:o.headerOrnamentClazz),style:null===o||void 0===o?void 0:o.headerOrnamentStyle},null===o||void 0===o?void 0:o.headerOrnament)},p=function(e){if((null!==o&&void 0!==o&&o.headerOpenedDom||null!==o&&void 0!==o&&o.headerClosedDom)&&null!==o&&void 0!==o&&o.headerCollapsePos){var i=a().createElement("span",{className:v()("".concat(l,"-header-collapse-").concat(e?"before":"after"),null===o||void 0===o?void 0:o.headerCollapseClazz),style:null===o||void 0===o?void 0:o.headerCollapseStyle,title:null!==o&&void 0!==o&&o.useTooltip?void 0:u?null===o||void 0===o?void 0:o.headerOpenedHint:null===o||void 0===o?void 0:o.headerClosedHint,onClick:m},u?null===o||void 0===o?void 0:o.headerOpenedDom:null===o||void 0===o?void 0:o.headerClosedDom);return null!==o&&void 0!==o&&o.useTooltip?a().createElement(f.Z,(0,n.Z)({title:u?null===o||void 0===o?void 0:o.headerOpenedHint:null===o||void 0===o?void 0:o.headerClosedHint},null===o||void 0===o?void 0:o.tooltipProps),i):i}},m=()=>{var e=!u;c(e),"function"===typeof(null===o||void 0===o?void 0:o.onOpenChange)&&window.setTimeout((()=>null===o||void 0===o?void 0:o.onOpenChange(e)),300)};return a().createElement("section",{className:v()(l,null===o||void 0===o?void 0:o.containerClazz,null!==o&&void 0!==o&&o.usePresetStyle?"".concat(l,"-").concat(null===o||void 0===o?void 0:o.usePresetStyle):void 0,"".concat(l,"-").concat(u?"open":"close")),style:null===o||void 0===o?void 0:o.containerStyle},a().createElement("div",{className:v()("".concat(l,"-header"),null===o||void 0===o?void 0:o.headerClazz),style:null===o||void 0===o?void 0:o.headerStyle},a().createElement(y.If,{condition:"before"===(null===o||void 0===o?void 0:o.headerCollapsePos),validation:!1},p(!0)),a().createElement(y.If,{condition:"before"===(null===o||void 0===o?void 0:o.headerOrnamentPos),validation:!1},s(!0)),a().createElement("span",{className:v()("".concat(l,"-header-content"),null===o||void 0===o?void 0:o.headerContentClazz),style:null===o||void 0===o?void 0:o.headerContentStyle},null===o||void 0===o?void 0:o.headerContent),a().createElement(y.If,{condition:"after"===(null===o||void 0===o?void 0:o.headerOrnamentPos),validation:!1},s(!1)),a().createElement(y.If,{condition:"after"===(null===o||void 0===o?void 0:o.headerCollapsePos),validation:!1},p(!1))),a().createElement(y.If,{condition:(null===o||void 0===o?void 0:o.panelContent)||(null===o||void 0===o?void 0:o.panelPlaceholder),validation:!1},a().createElement("div",{className:v()("".concat(l,"-panel"),null===o||void 0===o?void 0:o.panelClazz),style:null===o||void 0===o?void 0:o.panelStyle},a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.panelContent,validation:!1},a().createElement(y.If.Then,null,null===o||void 0===o?void 0:o.panelContent),a().createElement(y.If.Else,null,null===o||void 0===o?void 0:o.panelPlaceholder)))))});H.defaultProps={headerOrnamentPos:"before",headerCollapsePos:"after",headerClosedDom:a().createElement(R.Z,null),headerOpenedDom:a().createElement(j.Z,null),useTooltip:!1,panelInitialOpen:!0,usePresetStyle:"default"};l(43692);var _=o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-login-portal");return a().createElement("div",{className:v()(l,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle},null===o||void 0===o?void 0:o.containerHeader,a().createElement("div",{className:v()("".concat(l,"-vessel"),null===o||void 0===o?void 0:o.vesselClazz),style:null===o||void 0===o?void 0:o.vesselStyle},a().createElement("div",{className:v()("".concat(l,"-introduction"),null===o||void 0===o?void 0:o.introductionClazz),style:null===o||void 0===o?void 0:o.introductionStyle},null===o||void 0===o?void 0:o.introductionContent),a().createElement("div",{className:v()("".concat(l,"-interaction"),null===o||void 0===o?void 0:o.interactionClazz),style:null===o||void 0===o?void 0:o.interactionStyle},null===o||void 0===o?void 0:o.interactionHeader,a().createElement("div",{className:v()("".concat(l,"-interchange"),null===o||void 0===o?void 0:o.interchangeClazz),style:null===o||void 0===o?void 0:o.interchangeStyle},null===o||void 0===o?void 0:o.interactionContent),null===o||void 0===o?void 0:o.interactionFooter)),null===o||void 0===o?void 0:o.containerFooter)},V=(l(37547),l(36707)),Q=l(31481),q=(l(34543),o=>{var e,l,t,r,u,s,p,f,m,P,h,E=a().useContext(d.ZP.ConfigContext),C=E.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-menu-tabs"),g="dark"===(null===o||void 0===o||null===(e=o.menuProps)||void 0===e?void 0:e.theme)?"".concat(C,"-dark"):"".concat(C,"-light"),z=a().useRef(),x=a().useState(null===o||void 0===o||null===(l=o.menuProps)||void 0===l?void 0:l.selectedKey),b=(0,i.default)(x,2),Z=b[0],S=b[1],k=a().useState("inline"),I=(0,i.default)(k,2),N=I[0],F=I[1],A=null!==o&&void 0!==o&&null!==(t=o.menuProps)&&void 0!==t&&t.items&&Z?null===o||void 0===o||null===(r=o.menuProps)||void 0===r||null===(u=r.items)||void 0===u?void 0:u.find((o=>(null===o||void 0===o?void 0:o.key)===Z)):void 0;if(null!==o&&void 0!==o&&null!==(s=o.adjustLayoutProps)&&void 0!==s&&s.adjustOnResize){var T=()=>{requestAnimationFrame((()=>{var e,l,n,i;if(null!==z&&void 0!==z&&z.current){var d="inline",t=z.current.offsetWidth;t>((null===o||void 0===o||null===(e=o.adjustLayoutProps)||void 0===e?void 0:e.minOffsetWidth)||400)&&z.current.offsetWidth<((null===o||void 0===o||null===(l=o.adjustLayoutProps)||void 0===l?void 0:l.maxOffsetWidth)||640)&&(d="horizontal"),t>((null===o||void 0===o||null===(n=o.adjustLayoutProps)||void 0===n?void 0:n.minOffsetWidth)||400)&&window.innerWidth<((null===o||void 0===o||null===(i=o.adjustLayoutProps)||void 0===i?void 0:i.maxWindowWidth)||768)&&(d="horizontal"),F(d)}}))};a().useLayoutEffect((()=>(null!==z&&void 0!==z&&z.current&&(window.addEventListener("resize",T),T()),()=>{window.removeEventListener("resize",T)})),[z.current])}var w=null!==o&&void 0!==o&&null!==(p=o.menuProps)&&void 0!==p&&p.items?null===o||void 0===o||null===(f=o.menuProps)||void 0===f||null===(m=f.items)||void 0===m?void 0:m.map((o=>(0,c.Z)(o,["content"]))):[],O=null!==o&&void 0!==o&&o.menuProps?(0,c.Z)(null===o||void 0===o?void 0:o.menuProps,["items","onClick"]):{},L=null!==o&&void 0!==o&&o.entryWidth?(0,Q.iv)({width:null===o||void 0===o?void 0:o.entryWidth}):null!==o&&void 0!==o&&null!==(P=o.entryStyle)&&void 0!==P&&P.width?(0,Q.iv)({width:null===o||void 0===o||null===(h=o.entryStyle)||void 0===h?void 0:h.width}):void 0,D=null!==o&&void 0!==o&&o.entryStyle?(0,c.Z)(null===o||void 0===o?void 0:o.entryStyle,["width"]):void 0;return a().createElement("div",{className:v()(C,g,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle,ref:o=>{o&&(z.current=o)}},a().createElement("div",{className:v()("".concat(C,"-entry"),null===o||void 0===o?void 0:o.entryClazz,L),style:D},a().createElement(V.Z,(0,n.Z)({items:w,mode:N,multiple:!1,selectedKeys:Z?[Z]:[],onClick:e=>{var l,n;(S(null===e||void 0===e?void 0:e.key),"function"===typeof(null===o||void 0===o||null===(l=o.menuProps)||void 0===l?void 0:l.onClick))&&(null===o||void 0===o||null===(n=o.menuProps)||void 0===n||n.onClick(e))}},O))),a().createElement("div",{className:v()("".concat(C,"-content"),null===o||void 0===o?void 0:o.contentClazz),style:null===o||void 0===o?void 0:o.contentStyle},a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.showContentTitle,validation:!1},a().createElement("div",{className:v()("".concat(C,"-content-title"),null===o||void 0===o?void 0:o.contentTitleClazz),style:null===o||void 0===o?void 0:o.contentTitleStyle},null===A||void 0===A?void 0:A.label)),null===A||void 0===A?void 0:A.content))});q.defaultProps={entryWidth:"208px",showContentTitle:!0,adjustLayoutProps:{adjustOnResize:!0}};l(41387);var M=l(22657),G=l(56858),U=l(17624),J=(l(24710),M.Z.Footer),X=o=>{var e,l=a().useContext(d.ZP.ConfigContext),n=l.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-page-footer");return null!==o&&void 0!==o&&o.links&&0!==(null===o||void 0===o||null===(e=o.links)||void 0===e?void 0:e.length)||null!==o&&void 0!==o&&o.copyright?a().createElement(J,{className:v()(n,null===o||void 0===o?void 0:o.containerClazz,null!==o&&void 0!==o&&o.usePresetStyle?"".concat(n,"-").concat(null===o||void 0===o?void 0:o.usePresetStyle):void 0),style:null===o||void 0===o?void 0:o.containerStyle},a().createElement("div",{className:v()("".concat(n,"-vessel"),null===o||void 0===o?void 0:o.vesselClazz),style:null===o||void 0===o?void 0:o.vesselStyle},a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.links,validation:!1},a().createElement("div",{className:v()("".concat(n,"-links"),null===o||void 0===o?void 0:o.linksClazz),style:null===o||void 0===o?void 0:o.linksStyle},a().createElement(U.U,{of:null===o||void 0===o?void 0:o.links,render:e=>a().createElement("a",{key:e.key,className:v()(null===e||void 0===e?void 0:e.clazz,null===o||void 0===o?void 0:o.linkShareClazz),href:null===e||void 0===e?void 0:e.href,title:null===e||void 0===e?void 0:e.title,target:(null===e||void 0===e?void 0:e.target)||"_blank",rel:(null===e||void 0===e?void 0:e.rel)||"noopener noreferrer",style:(0,C.Z)((0,C.Z)({},(null===e||void 0===e?void 0:e.style)||{}),(null===o||void 0===o?void 0:o.linkShareStyle)||{})},null===e||void 0===e?void 0:e.content)}))),a().createElement(y.If,{condition:null===o||void 0===o?void 0:o.copyright,validation:!1},a().createElement("div",{className:v()("".concat(n,"-copyright"),null===o||void 0===o?void 0:o.copyrightClazz),style:null===o||void 0===o?void 0:o.copyrightStyle},a().createElement(a().Fragment,null,a().createElement(G.Z,null)," ",null===o||void 0===o?void 0:o.copyright))))):null};X.defaultProps={usePresetStyle:"default"};var Y=l(30653),$=(l(66850),o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-setting-drawer"),i=e.getPrefixCls("buddy"),t=o?(0,c.Z)(o,["clazzPrefix","entryClazz","prefixCls"]):{};return a().createElement(Y.Z,(0,n.Z)({prefixCls:v()((null===o||void 0===o?void 0:o.prefixCls)||l,null===o||void 0===o?void 0:o.entryClazz,(null===o||void 0===o?void 0:o.prefixCls)||i)},t))}),oo=o=>{var e=a().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-wrap-space"),n=function(o){if("number"===typeof o)return o;if("string"===typeof o)switch(o){case"small":return 8;case"middle":return 16;case"large":return 24;default:break}return 0},t=a().useMemo((()=>(Array.isArray(null===o||void 0===o?void 0:o.size)?null===o||void 0===o?void 0:o.size:[null===o||void 0===o?void 0:o.size,null===o||void 0===o?void 0:o.size]).map((o=>n(o)))),[null===o||void 0===o?void 0:o.size]),r=(0,i.default)(t,2),u=r[0],c=r[1],s=(0,Q.iv)({padding:"".concat(c,"px ").concat(u,"px ").concat(c,"px ").concat(u,"px")});return a().createElement("div",{className:v()(l,s,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle},null===o||void 0===o?void 0:o.children)};oo.defaultProps={size:"small"}},3124:function(){},57170:function(){},11280:function(){},71435:function(){},7129:function(){},43692:function(){},34543:function(){},24710:function(){},66850:function(){}}]);