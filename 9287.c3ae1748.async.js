(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[9287],{29287:function(o,e,l){"use strict";l.r(e),l.d(e,{CardTabs:function(){return D},ExactInput:function(){return Z},FallbackImage:function(){return p},FullScreen:function(){return h},LocaleInput:function(){return W},LoginPortal:function(){return R},MenuTabs:function(){return _},PageFooter:function(){return M},RefreshImage:function(){return C},SettingDrawer:function(){return G}});var n=l(91896),i=l(2824),d=(l(98336),l(84871)),t=l(63804),r=l.n(t),a=l(49233),u=l.n(a),v=l(36456),c=l(97218);class s{}s.detectSource=(o,e)=>{if(o){if("string"===typeof o)return o;if("function"===typeof o)return s.detectSource(o(),e);if("object"===typeof o&&"[object Promise]"===Object.prototype.toString.call(o)){if(!e)return void console.warn("The argument 'param' is a Promise object, but has none matching argument 'callback'");o.then((o=>e(o)))}}};var p=o=>{var e=r().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-fallback-image"),t=r().useState((()=>s.detectSource(null===o||void 0===o?void 0:o.src,(o=>f(o))))),a=(0,i.default)(t,2),p=a[0],f=a[1],m=e=>{null!==o&&void 0!==o&&o.fallback&&f(s.detectSource(null===o||void 0===o?void 0:o.fallback,(o=>f(o)))),"function"===typeof(null===o||void 0===o?void 0:o.onError)&&(null===o||void 0===o||o.onError(e))},P=o?(0,c.Z)(o,["clazzPrefix","className","src","fallback","onError"]):{};return r().createElement(v.Z,(0,n.Z)({},P,{className:u()(l,null===o||void 0===o?void 0:o.className),src:p,onError:m}))},f=(l(51966),l(95455)),m=l(21444),P=l(38296),y=l(31871),g=l(42192),h=o=>{var e,l,t,a,u=r().useContext(d.ZP.ConfigContext),v=u.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-full-screen");if(null===o||void 0===o||!o.triggerFor)throw SyntaxError("Parameter 'triggerFor' must be a valid element!");var c=r().useState(document.fullscreenElement===(null===o||void 0===o?void 0:o.triggerFor)),s=(0,i.default)(c,2),p=s[0],h=s[1],E=()=>{h(document.fullscreenElement===(null===o||void 0===o?void 0:o.triggerFor))},C=o=>{"Escape"===o.key?h(!1):"F11"===o.key&&h(!p)};r().useLayoutEffect((()=>{var e,l;return null===o||void 0===o||null===(e=o.triggerFor)||void 0===e||e.addEventListener("fullscreenchange",E,!1),null===o||void 0===o||null===(l=o.triggerFor)||void 0===l||l.addEventListener("keydown",C,!1),()=>{var e,l;null===o||void 0===o||null===(e=o.triggerFor)||void 0===e||e.removeEventListener("fullscreenchange",E,!1),null===o||void 0===o||null===(l=o.triggerFor)||void 0===l||l.removeEventListener("keydown",C,!1)}}));var x=()=>{g.Z.isEnabled&&(g.Z.toggle(null===o||void 0===o?void 0:o.triggerFor),h(!p))},z=r().createElement(p?m.Z:P.Z,{className:v,onClick:x});return r().createElement(y.If,{condition:null===o||void 0===o?void 0:o.useTooltip},r().createElement(y.If.Then,null,r().createElement(f.Z,(0,n.Z)({title:p?null===o||void 0===o?void 0:o.exitTitle:null===o||void 0===o?void 0:o.enterTitle},null===o||void 0===o?void 0:o.tooltipProps),r().createElement(y.If,{condition:"string"===typeof(null===o||void 0===o?void 0:o.useWrapper)},r().createElement(null===o||void 0===o?void 0:o.useWrapper,{className:null===o||void 0===o||null===(e=o.wrapperProps)||void 0===e?void 0:e.clazz,style:null===o||void 0===o||null===(l=o.wrapperProps)||void 0===l?void 0:l.style},z)),r().createElement(y.If,{condition:!(null!==o&&void 0!==o&&o.useWrapper)},z))),r().createElement(y.If.Else,null,r().createElement(y.If,{condition:"string"===typeof(null===o||void 0===o?void 0:o.useWrapper)},r().createElement(null===o||void 0===o?void 0:o.useWrapper,{className:null===o||void 0===o||null===(t=o.wrapperProps)||void 0===t?void 0:t.clazz,style:null===o||void 0===o||null===(a=o.wrapperProps)||void 0===a?void 0:a.style,title:p?null===o||void 0===o?void 0:o.exitTitle:null===o||void 0===o?void 0:o.enterTitle},z)),r().createElement(y.If,{condition:!(null!==o&&void 0!==o&&o.useWrapper)},r().createElement(p?m.Z:P.Z,{title:p?null===o||void 0===o?void 0:o.exitTitle:null===o||void 0===o?void 0:o.enterTitle,onClick:x}))))};h.defaultProps={triggerFor:document.documentElement,useTooltip:!1,useWrapper:!1};var E=l(8870),C=o=>{var e=r().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-refresh-image"),t=r().useState((()=>s.detectSource(null===o||void 0===o?void 0:o.src,(o=>f(o))))),a=(0,i.default)(t,2),p=a[0],f=a[1],m=e=>{var l=p;null!==o&&void 0!==o&&o.src&&f(s.detectSource(null===o||void 0===o?void 0:o.src,(o=>f(o))));var n=p;"function"===typeof(null===o||void 0===o?void 0:o.onClick)&&(null===o||void 0===o||o.onClick(e)),"function"===typeof(null===o||void 0===o?void 0:o.onRefresh)&&(null===o||void 0===o||o.onRefresh(l,n))},P=e=>{null!==o&&void 0!==o&&o.fallback&&f(s.detectSource(null===o||void 0===o?void 0:o.fallback,(o=>f(o)))),"function"===typeof(null===o||void 0===o?void 0:o.onError)&&(null===o||void 0===o||o.onError(e))},y=o?(0,c.Z)(o,["clazzPrefix","className","autoCursor","src","fallback","onRefresh","onClick","onError","style"]):{},g=null!==o&&void 0!==o&&o.autoCursor?{cursor:"pointer"}:{};return r().createElement(v.Z,(0,n.Z)({},y,{className:u()(l,null===o||void 0===o?void 0:o.className),src:p,onClick:m,onError:P,style:(0,E.Z)((0,E.Z)({},g),null===o||void 0===o?void 0:o.style)}))},x=(l(89068),l(42091)),z=l(7364),b=l(62925),Z=r().forwardRef(((o,e)=>{var l=r().useContext(d.ZP.ConfigContext),i=l.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-exact-input"),t=o?(0,c.Z)(o,["clazzPrefix","addonDom","addonPos","checkProps","fieldProps"]):{},a=null!==o&&void 0!==o&&o.fieldProps?(0,c.Z)(null===o||void 0===o?void 0:o.fieldProps,["addonBefore","addonAfter"]):{},v=null!==o&&void 0!==o&&o.checkProps?(0,c.Z)(null===o||void 0===o?void 0:o.checkProps,["className","namePrefix","nameSuffix","idPrefix","idSuffix","name","id"]):{},s=function(){var e,l,n,i;return null!==o&&void 0!==o&&null!==(e=o.checkProps)&&void 0!==e&&e.name?null===o||void 0===o||null===(l=o.checkProps)||void 0===l?void 0:l.name:null!==o&&void 0!==o&&o.name?((null===o||void 0===o||null===(n=o.checkProps)||void 0===n?void 0:n.namePrefix)||"")+(null===o||void 0===o?void 0:o.name)+((null===o||void 0===o||null===(i=o.checkProps)||void 0===i?void 0:i.nameSuffix)||""):void 0},p=function(){var e,l,n,i;return null!==o&&void 0!==o&&null!==(e=o.checkProps)&&void 0!==e&&e.id?null===o||void 0===o||null===(l=o.checkProps)||void 0===l?void 0:l.id:null!==o&&void 0!==o&&o.id?((null===o||void 0===o||null===(n=o.checkProps)||void 0===n?void 0:n.idPrefix)||"")+(null===o||void 0===o?void 0:o.id)+((null===o||void 0===o||null===(i=o.checkProps)||void 0===i?void 0:i.idSuffix)||""):void 0},f=s(),m=p(),P=function(){if(null!==o&&void 0!==o&&o.addonPos)return r().createElement(x.Z,(0,n.Z)({name:f,id:m||f},v),null===o||void 0===o?void 0:o.addonDom)},y=P();return r().createElement(b.Z,(0,n.Z)({ref:e},t,{fieldProps:(0,E.Z)((0,E.Z)({className:u()(i,null===o||void 0===o?void 0:o.className)},a),{},{addonBefore:"before"===(null===o||void 0===o?void 0:o.addonPos)?y:void 0,addonAfter:"after"===(null===o||void 0===o?void 0:o.addonPos)?y:void 0})}))}));Z.defaultProps={addonDom:r().createElement(z.Z,null),addonPos:"after",checkProps:{nameSuffix:"Exact"}};l(24694);var k=l(58393),S=(l(59320),l(43879)),I=l(91220),T=(l(21885),l(45733)),N=(l(36326),l(7523)),w=l(75823),L=l(71555),F=l(63746);class A{}A.setInputValue=(o,e,l)=>{if(o){var n=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");if(n){var i=(null===n||void 0===n?void 0:n.get.call(o))||"";n.set.call(o,e||""),o.dispatchEvent(new Event("change",{bubbles:!0})),l&&l(i)}}};l(57170);var W=r().forwardRef(((o,e)=>{var l=r().useContext(d.ZP.ConfigContext),t=l.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-locale-input"),a=(0,F.x)(),v=o=>{var e=document.querySelector('input[data-buddy-locale-id="'.concat(a,'"]')),l=document.querySelector('input[data-buddy-locale-tag="'.concat(o,'"]'));e&&l&&A.setInputValue(e,l.value)},s=function(e,l,n){var i,d,a;if(e&&(null!==o&&void 0!==o&&o.popupTagPos||null!==o&&void 0!==o&&o.popupActionPos)&&(!l||"before"===(null===o||void 0===o?void 0:o.popupTagPos)||"before"===(null===o||void 0===o?void 0:o.popupActionPos))&&(l||"after"===(null===o||void 0===o?void 0:o.popupTagPos)||"after"===(null===o||void 0===o?void 0:o.popupActionPos))){var c=r().createElement(r().Fragment,null,r().createElement(y.If,{condition:l&&"before"===(null===o||void 0===o?void 0:o.popupTagPos)||!l&&"after"===(null===o||void 0===o?void 0:o.popupTagPos)},r().createElement("span",{className:u()("".concat(t,"-tag"),null!==o&&void 0!==o&&o.disabled||null!==o&&void 0!==o&&o.readonly?"".concat(t,"-disabled"):void 0)},e)),r().createElement(y.If,{condition:l&&"before"===(null===o||void 0===o?void 0:o.popupActionPos)||!l&&"after"===(null===o||void 0===o?void 0:o.popupActionPos)},r().createElement(y.If,{condition:null===o||void 0===o?void 0:o.popupConfirmProps},r().createElement(y.If.Then,null,r().createElement(N.Z,{title:null===o||void 0===o||null===(i=o.popupConfirmProps)||void 0===i?void 0:i.message,onConfirm:()=>v(n),okText:null===o||void 0===o||null===(d=o.popupConfirmProps)||void 0===d?void 0:d.ok,cancelText:null===o||void 0===o||null===(a=o.popupConfirmProps)||void 0===a?void 0:a.cancel},r().createElement("span",{className:u()("".concat(t,"-action"),null!==o&&void 0!==o&&o.disabled||null!==o&&void 0!==o&&o.readonly?"".concat(t,"-disabled"):void 0)},null===o||void 0===o?void 0:o.popupActionDom))),r().createElement(y.If.Else,null,r().createElement("span",{className:u()("".concat(t,"-action"),null!==o&&void 0!==o&&o.disabled||null!==o&&void 0!==o&&o.readonly?"".concat(t,"-disabled"):void 0),onClick:()=>v(n)},null===o||void 0===o?void 0:o.popupActionDom)))));return(null===o||void 0===o?void 0:o.popupTagPos)===(null===o||void 0===o?void 0:o.popupActionPos)?r().createElement(T.default,null,c):c}},p=[];if(null!==o&&void 0!==o&&o.popupInputProps){var f,m=(0,I.Z)(null===o||void 0===o?void 0:o.popupInputProps);try{for(m.s();!(f=m.n()).done;){var P,g,h,C,x,z=f.value;if(z&&null!==z&&void 0!==z&&z.tag){var Z=z.tag,w=z.fieldProps,L=z.rules,W=(0,c.Z)(z,["tag","name","id","disabled","readonly","fieldProps","rules"]),j=W,D=w?(0,c.Z)(w,["addonBefore","addonAfter","maxLength","placeholder"]):{},R=(0,F.x)(),O=s(Z,!0,R),B=s(Z,!1,R),_=null!==o&&void 0!==o&&o.popupCloneRules&&null!==o&&void 0!==o&&o.rules?null===o||void 0===o?void 0:o.rules:[],q=r().createElement(y.If,{condition:null===o||void 0===o?void 0:o.popupProField},r().createElement(y.If.Then,null,r().createElement(b.Z,(0,n.Z)({name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(Z,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(Z,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(Z,"]"):void 0,disabled:(null===o||void 0===o?void 0:o.disabled)||(null===z||void 0===z?void 0:z.disabled),readonly:(null===o||void 0===o?void 0:o.readonly)||(null===z||void 0===z?void 0:z.readonly)},W,{fieldProps:(0,E.Z)((0,E.Z)({addonBefore:O,addonAfter:B,maxLength:(null===z||void 0===z?void 0:z.maxLength)||(null===o||void 0===o||null===(P=o.popupShareProps)||void 0===P?void 0:P.maxLength),placeholder:(null===z||void 0===z?void 0:z.placeholder)||(null===o||void 0===o||null===(g=o.popupShareProps)||void 0===g?void 0:g.placeholder)},D),{},{"data-buddy-locale-tag":R}),rules:[..._,...(null===o||void 0===o||null===(h=o.popupShareProps)||void 0===h?void 0:h.rules)||[],...L||[]]}))),r().createElement(y.If.Else,null,r().createElement(S.Z,(0,n.Z)({name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(Z,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(Z,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(Z,"]"):void 0,disabled:(null===o||void 0===o?void 0:o.disabled)||z.disabled,readOnly:(null===o||void 0===o?void 0:o.readonly)||z.readonly,maxLength:(null===z||void 0===z?void 0:z.maxLength)||(null===o||void 0===o||null===(C=o.popupShareProps)||void 0===C?void 0:C.maxLength),placeholder:(null===z||void 0===z?void 0:z.placeholder)||(null===o||void 0===o||null===(x=o.popupShareProps)||void 0===x?void 0:x.placeholder)},j,{addonBefore:O,addonAfter:B},D,{"data-buddy-locale-tag":R}))));p.push({key:z.tag,label:q})}}}catch(so){m.e(so)}finally{m.f()}}else if((null===o||void 0===o||!o.popupInputProps)&&null!==o&&void 0!==o&&o.popupQuickTags){var H,Q=(0,I.Z)(null===o||void 0===o?void 0:o.popupQuickTags);try{for(Q.s();!(H=Q.n()).done;){var K,M,V,G,U,J=H.value;if(J&&0!==J.length){var X=(0,F.x)(),Y=s(J,!0,X),$=s(J,!1,X),oo=null!==o&&void 0!==o&&o.popupCloneRules&&null!==o&&void 0!==o&&o.rules?null===o||void 0===o?void 0:o.rules:[],eo=r().createElement(y.If,{condition:null===o||void 0===o?void 0:o.popupProField},r().createElement(y.If.Then,null,r().createElement(b.Z,{name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(J,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(J,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(J,"]"):void 0,disabled:null===o||void 0===o?void 0:o.disabled,readonly:null===o||void 0===o?void 0:o.readonly,fieldProps:{addonBefore:Y,addonAfter:$,maxLength:null===o||void 0===o||null===(K=o.popupShareProps)||void 0===K?void 0:K.maxLength,placeholder:null===o||void 0===o||null===(M=o.popupShareProps)||void 0===M?void 0:M.placeholder,"data-buddy-locale-tag":X},rules:[...oo,...(null===o||void 0===o||null===(V=o.popupShareProps)||void 0===V?void 0:V.rules)||[]]})),r().createElement(y.If.Else,null,r().createElement(S.Z,{name:null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(J,"]"):void 0,id:null!==o&&void 0!==o&&o.id?"".concat(null===o||void 0===o?void 0:o.id,"[").concat(J,"]"):null!==o&&void 0!==o&&o.name?"".concat(null===o||void 0===o?void 0:o.name,"[").concat(J,"]"):void 0,disabled:null===o||void 0===o?void 0:o.disabled,readOnly:null===o||void 0===o?void 0:o.readonly,maxLength:null===o||void 0===o||null===(G=o.popupShareProps)||void 0===G?void 0:G.maxLength,placeholder:null===o||void 0===o||null===(U=o.popupShareProps)||void 0===U?void 0:U.placeholder,addonBefore:Y,addonAfter:$,"data-buddy-locale-tag":X})));p.push({key:J,label:eo})}}}catch(so){Q.e(so)}finally{Q.f()}}var lo=r().useState(!1),no=(0,i.default)(lo,2),io=no[0],to=no[1],ro=()=>{to(!0)},ao=o=>{to(o)},uo=r().useRef(null),vo=o?(0,c.Z)(o,["clazzPrefix","actionDom","actionPos","popupClazz","popupStyle","popupPlacement","popupInputProps","popupQuickTags","popupTagPos","popupActionDom","popupActionPos","popupConfirmProps","popupShareProps","popupProField"]):{},co=null!==o&&void 0!==o&&o.fieldProps?(0,c.Z)(null===o||void 0===o?void 0:o.fieldProps,["addonBefore","addonAfter"]):{};return r().createElement(k.Z,{menu:{items:p,onClick:ro},placement:null===o||void 0===o?void 0:o.popupPlacement,overlayClassName:u()(t,null===o||void 0===o?void 0:o.popupClazz),overlayStyle:null===o||void 0===o?void 0:o.popupStyle,open:io,onOpenChange:ao,getPopupContainer:()=>(null===uo||void 0===uo?void 0:uo.current)||document.body},r().createElement(S.Z.Group,null,r().createElement(b.Z,(0,n.Z)({ref:e},vo,{fieldProps:(0,E.Z)((0,E.Z)({},co),{},{addonBefore:"before"===(null===o||void 0===o?void 0:o.actionPos)?null===o||void 0===o?void 0:o.actionDom:void 0,addonAfter:"after"===(null===o||void 0===o?void 0:o.actionPos)?null===o||void 0===o?void 0:o.actionDom:void 0,"data-buddy-locale-id":a})})),r().createElement("div",{ref:uo})))}));W.defaultProps={actionDom:r().createElement(w.Z,null),actionPos:"after",popupPlacement:"bottomLeft",popupTagPos:"before",popupActionDom:r().createElement(L.Z,null),popupActionPos:"after",popupProField:!1};l(7826);var j=l(39503),D=(l(71435),o=>{var e=r().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-card-tabs"),i=o?(0,c.Z)(o,["clazzPrefix","containerClazz","containerStyle"]):{};return r().createElement("div",{className:u()(l,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle},r().createElement(j.Z,(0,n.Z)({type:"card"},i)))}),R=(l(43692),o=>{var e=r().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-login-portal");return r().createElement("div",{className:u()(l,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle},null===o||void 0===o?void 0:o.containerHeader,r().createElement("div",{className:u()("".concat(l,"-vessel"),null===o||void 0===o?void 0:o.vesselClazz),style:null===o||void 0===o?void 0:o.vesselStyle},r().createElement("div",{className:u()("".concat(l,"-introduction"),null===o||void 0===o?void 0:o.introductionClazz),style:null===o||void 0===o?void 0:o.introductionStyle},null===o||void 0===o?void 0:o.introductionContent),r().createElement("div",{className:u()("".concat(l,"-interaction"),null===o||void 0===o?void 0:o.interactionClazz),style:null===o||void 0===o?void 0:o.interactionStyle},null===o||void 0===o?void 0:o.interactionHeader,r().createElement("div",{className:u()("".concat(l,"-interchange"),null===o||void 0===o?void 0:o.interchangeClazz),style:null===o||void 0===o?void 0:o.interchangeStyle},null===o||void 0===o?void 0:o.interactionContent),null===o||void 0===o?void 0:o.interactionFooter)),null===o||void 0===o?void 0:o.containerFooter)}),O=(l(37547),l(36707)),B=l(31481),_=(l(34543),o=>{var e,l,t,a,v,s,p,f,m,P,g,h=r().useContext(d.ZP.ConfigContext),E=h.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-menu-tabs"),C="dark"===(null===o||void 0===o||null===(e=o.menuProps)||void 0===e?void 0:e.theme)?"".concat(E,"-dark"):"".concat(E,"-light"),x=r().useRef(),z=r().useState(null===o||void 0===o||null===(l=o.menuProps)||void 0===l?void 0:l.selectedKey),b=(0,i.default)(z,2),Z=b[0],k=b[1],S=r().useState("inline"),I=(0,i.default)(S,2),T=I[0],N=I[1],w=null!==o&&void 0!==o&&null!==(t=o.menuProps)&&void 0!==t&&t.items&&Z?null===o||void 0===o||null===(a=o.menuProps)||void 0===a||null===(v=a.items)||void 0===v?void 0:v.find((o=>(null===o||void 0===o?void 0:o.key)===Z)):void 0;if(null!==o&&void 0!==o&&null!==(s=o.adjustLayoutProps)&&void 0!==s&&s.adjustOnResize){var L=()=>{requestAnimationFrame((()=>{var e,l,n,i;if(null!==x&&void 0!==x&&x.current){var d="inline",t=x.current.offsetWidth;t>((null===o||void 0===o||null===(e=o.adjustLayoutProps)||void 0===e?void 0:e.minOffsetWidth)||400)&&x.current.offsetWidth<((null===o||void 0===o||null===(l=o.adjustLayoutProps)||void 0===l?void 0:l.maxOffsetWidth)||640)&&(d="horizontal"),t>((null===o||void 0===o||null===(n=o.adjustLayoutProps)||void 0===n?void 0:n.minOffsetWidth)||400)&&window.innerWidth<((null===o||void 0===o||null===(i=o.adjustLayoutProps)||void 0===i?void 0:i.maxWindowWidth)||768)&&(d="horizontal"),N(d)}}))};r().useLayoutEffect((()=>(null!==x&&void 0!==x&&x.current&&(window.addEventListener("resize",L),L()),()=>{window.removeEventListener("resize",L)})),[x.current])}var F=null!==o&&void 0!==o&&null!==(p=o.menuProps)&&void 0!==p&&p.items?null===o||void 0===o||null===(f=o.menuProps)||void 0===f||null===(m=f.items)||void 0===m?void 0:m.map((o=>(0,c.Z)(o,["content"]))):[],A=null!==o&&void 0!==o&&o.menuProps?(0,c.Z)(null===o||void 0===o?void 0:o.menuProps,["items","onClick"]):{},W=null!==o&&void 0!==o&&o.entryWidth?(0,B.iv)({width:null===o||void 0===o?void 0:o.entryWidth}):null!==o&&void 0!==o&&null!==(P=o.entryStyle)&&void 0!==P&&P.width?(0,B.iv)({width:null===o||void 0===o||null===(g=o.entryStyle)||void 0===g?void 0:g.width}):void 0,j=null!==o&&void 0!==o&&o.entryStyle?(0,c.Z)(null===o||void 0===o?void 0:o.entryStyle,["width"]):void 0;return r().createElement("div",{className:u()(E,C,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle,ref:o=>{o&&(x.current=o)}},r().createElement("div",{className:u()("".concat(E,"-entry"),null===o||void 0===o?void 0:o.entryClazz,W),style:j},r().createElement(O.Z,(0,n.Z)({items:F,mode:T,multiple:!1,selectedKeys:Z?[Z]:[],onClick:e=>{var l,n;(k(null===e||void 0===e?void 0:e.key),"function"===typeof(null===o||void 0===o||null===(l=o.menuProps)||void 0===l?void 0:l.onClick))&&(null===o||void 0===o||null===(n=o.menuProps)||void 0===n||n.onClick(e))}},A))),r().createElement("div",{className:u()("".concat(E,"-content"),null===o||void 0===o?void 0:o.contentClazz),style:null===o||void 0===o?void 0:o.contentStyle},r().createElement(y.If,{condition:null===o||void 0===o?void 0:o.showContentTitle},r().createElement("div",{className:u()("".concat(E,"-content-title"),null===o||void 0===o?void 0:o.contentTitleClazz),style:null===o||void 0===o?void 0:o.contentTitleStyle},null===w||void 0===w?void 0:w.label)),null===w||void 0===w?void 0:w.content))});_.defaultProps={entryWidth:"208px",showContentTitle:!0,adjustLayoutProps:{adjustOnResize:!0}};l(41387);var q=l(22657),H=l(56858),Q=l(17624),K=(l(24710),q.Z.Footer),M=o=>{var e,l=r().useContext(d.ZP.ConfigContext);if((null===o||void 0===o||!o.linkItems||0===(null===o||void 0===o||null===(e=o.linkItems)||void 0===e?void 0:e.length))&&(null===o||void 0===o||!o.copyright))return null;var n=l.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-page-footer");return r().createElement(K,{className:u()(n,null===o||void 0===o?void 0:o.containerClazz),style:null===o||void 0===o?void 0:o.containerStyle},r().createElement("div",{className:null===o||void 0===o?void 0:o.vesselClazz,style:null===o||void 0===o?void 0:o.vesselStyle},r().createElement(y.If,{condition:null===o||void 0===o?void 0:o.linkItems},r().createElement("div",{className:u()("".concat(n,"-links"),null===o||void 0===o?void 0:o.linksClazz),style:null===o||void 0===o?void 0:o.linksStyle},r().createElement(Q.U,{of:null===o||void 0===o?void 0:o.linkItems,render:o=>r().createElement("a",{key:o.key,className:null===o||void 0===o?void 0:o.clazz,href:null===o||void 0===o?void 0:o.href,title:null===o||void 0===o?void 0:o.title,target:(null===o||void 0===o?void 0:o.target)||"_blank",rel:(null===o||void 0===o?void 0:o.rel)||"noopener noreferrer",style:null===o||void 0===o?void 0:o.style},null===o||void 0===o?void 0:o.content)}))),r().createElement(y.If,{condition:null===o||void 0===o?void 0:o.copyright},r().createElement("div",{className:"".concat(n,"-copyright"),style:null===o||void 0===o?void 0:o.copyrightStyle},r().createElement(r().Fragment,null,r().createElement(H.Z,null)," ",null===o||void 0===o?void 0:o.copyright)))))},V=l(13565),G=(l(66850),o=>{var e=r().useContext(d.ZP.ConfigContext),l=e.getPrefixCls((null===o||void 0===o?void 0:o.clazzPrefix)||"buddy-setting-drawer"),i=e.getPrefixCls("buddy"),t=o?(0,c.Z)(o,["clazzPrefix","entryClazz","prefixCls"]):{};return r().createElement(V.Z,(0,n.Z)({prefixCls:u()((null===o||void 0===o?void 0:o.prefixCls)||l,null===o||void 0===o?void 0:o.entryClazz,(null===o||void 0===o?void 0:o.prefixCls)||i)},t))})},57170:function(){},71435:function(){},43692:function(){},34543:function(){},24710:function(){},66850:function(){}}]);