(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[2662],{59713:function(e,n,o){var t=o(13696);function l(e,n,o){return n=t(n),n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},95318:function(e){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},81109:function(e,n,o){var t=o(59713);function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},8868:function(e,n,o){var t=o(50008).default;function l(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var l=o.call(e,n||"default");if("object"!==t(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},13696:function(e,n,o){var t=o(50008).default,l=o(8868);function r(e){var n=l(e,"string");return"symbol"===t(n)?n:String(n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},50008:function(e){function n(o){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(o)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},22662:function(e,n,o){"use strict";o.r(n),o.d(n,{FallbackImage:function(){return S},FullScreen:function(){return h},InputLocale:function(){return L},LoginPortal:function(){return q},PageFooter:function(){return G},RefreshImage:function(){return O}});o(29151),o(9925);var t=o(95455),l=o(91896),r=o(2824),i=o(63804),u=o.n(i),c=o(21444),d=o(38296),a=function e(n){if(null===n||void 0===n||!n.children)return null;var o=0,t=0;if(u().Children.forEach(n.children,(function(n){var l=n.type;l===e.Then&&o++,l===e.Else&&t++})),o>1||t>1)throw SyntaxError("Each statement of 'If.Then/If.Else' for [If condition='".concat(n.condition,"'] must be a single one at most!"));return u().Children.map(n.children,(function(o){var t=o.type===e.Else;return n.condition&&!t||!n.condition&&t?o:null}))};a.Then=function(e){return null!==e&&void 0!==e&&e.render?null===e||void 0===e?void 0:e.render():null===e||void 0===e?void 0:e.children},a.Else=function(e){return null!==e&&void 0!==e&&e.render?null===e||void 0===e?void 0:e.render():null===e||void 0===e?void 0:e.children};var v=o(74694);function s(e,n){var o="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=(0,v.Z)(e))||n&&e&&"number"===typeof e.length){o&&(e=o);var t=0,l=function(){};return{s:l,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,u=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){u=!0,r=e},f:function(){try{i||null==o["return"]||o["return"]()}finally{if(u)throw r}}}}var f=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],p=function(){if("undefined"===typeof document)return!1;var e,n=f[0],o={},t=s(f);try{for(t.s();!(e=t.n()).done;){var l=e.value,i=null===l||void 0===l?void 0:l[1];if(i in document){var u,c=s(l.entries());try{for(c.s();!(u=c.n()).done;){var d=u.value,a=(0,r.Z)(d,2),v=a[0],p=a[1];o[n[v]]=p}}catch(m){c.e(m)}finally{c.f()}return o}}}catch(m){t.e(m)}finally{t.f()}return!1}(),m={change:p.fullscreenchange,error:p.fullscreenerror},y={request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(o,t){var l=function e(){y.off("change",e),o()};y.on("change",l);var r=e[p.requestFullscreen](n);r instanceof Promise&&r.then(l).catch(t)}))},exit:function(){return new Promise((function(e,n){if(y.isFullscreen){var o=function n(){y.off("change",n),e()};y.on("change",o);var t=document[p.exitFullscreen]();t instanceof Promise&&t.then(o).catch(n)}else e()}))},toggle:function(e,n){return y.isFullscreen?y.exit():y.request(e,n)},onchange:function(e){y.on("change",e)},onerror:function(e){y.on("error",e)},on:function(e,n){var o=m[e];o&&document.addEventListener(o,n,!1)},off:function(e,n){var o=m[e];o&&document.removeEventListener(o,n,!1)},raw:p};Object.defineProperties(y,{isFullscreen:{get:function(){return Boolean(document[p.fullscreenElement])}},element:{enumerable:!0,get:function(){var e;return null!==(e=document[p.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[p.fullscreenEnabled])}}}),p||(y={isEnabled:!1});var b=y,h=e=>{var n=u().useState(!1),o=(0,r.Z)(n,2),i=o[0],v=o[1],s=()=>{b.isEnabled&&(b.toggle(null===e||void 0===e?void 0:e.targetDom),v(!i))};return u().createElement(a,{condition:null===e||void 0===e?void 0:e.useTooltip},u().createElement(a.Then,null,u().createElement(t.Z,(0,l.Z)({title:i?null===e||void 0===e?void 0:e.exitTitle:null===e||void 0===e?void 0:e.enterTitle},null===e||void 0===e?void 0:e.tooltipProps),u().createElement(i?c.Z:d.Z,{onClick:s}))),u().createElement(a.Else,null,u().createElement(i?c.Z:d.Z,{title:i?null===e||void 0===e?void 0:e.exitTitle:null===e||void 0===e?void 0:e.enterTitle,onClick:s})))};h.defaultProps={targetDom:document.documentElement,useTooltip:!1};var g=o(52708),E=o(97218);class P{}P.detectSource=(e,n)=>{if(e){if("string"===typeof e)return e;if("function"===typeof e)return P.detectSource(e(),n);if("object"===typeof e&&"[object Promise]"===Object.prototype.toString.call(e)){if(!n)return void console.warn("The argument 'param' is a Promise object, but has none matching argument 'callback'");e.then((e=>n(e)))}}};var S=e=>{var n=u().useState((()=>P.detectSource(null===e||void 0===e?void 0:e.src,(e=>i(e))))),o=(0,r.Z)(n,2),t=o[0],i=o[1],c=n=>{null!==e&&void 0!==e&&e.fallback&&i(P.detectSource(null===e||void 0===e?void 0:e.fallback,(e=>i(e)))),"function"===typeof(null===e||void 0===e?void 0:e.onError)&&(null===e||void 0===e||e.onError(n))},d=e?(0,E.Z)(e,["src","fallback","onError"]):{};return u().createElement(g.Z,(0,l.Z)({},d,{src:t,onError:e=>c(e)}))};function x(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function k(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function w(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?k(Object(o),!0).forEach((function(n){x(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var O=e=>{var n=u().useState((()=>P.detectSource(null===e||void 0===e?void 0:e.src,(e=>i(e))))),o=(0,r.Z)(n,2),t=o[0],i=o[1],c=n=>{var o=t;null!==e&&void 0!==e&&e.src&&i(P.detectSource(null===e||void 0===e?void 0:e.src,(e=>i(e))));var l=t;"function"===typeof(null===e||void 0===e?void 0:e.onClick)&&(null===e||void 0===e||e.onClick(n)),"function"===typeof(null===e||void 0===e?void 0:e.onRefresh)&&(null===e||void 0===e||e.onRefresh(o,l))},d=n=>{null!==e&&void 0!==e&&e.fallback&&i(P.detectSource(null===e||void 0===e?void 0:e.fallback,(e=>i(e)))),"function"===typeof(null===e||void 0===e?void 0:e.onError)&&(null===e||void 0===e||e.onError(n))},a=e?(0,E.Z)(e,["autoCursor","src","fallback","onRefresh","onClick","onError","style"]):{},v=null!==e&&void 0!==e&&e.autoCursor?{cursor:"pointer"}:{};return u().createElement(g.Z,(0,l.Z)({},a,{src:t,onClick:e=>c(e),onError:e=>d(e),style:w(w({},v),null===e||void 0===e?void 0:e.style)}))},C=(o(38719),o(48122),o(37478),o(21885),o(2291)),Z=(o(97950),o(50532)),F=(o(54735),o(84871)),j=o(28991),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M140 188h584v164h76V144c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h544v-76H140V188z"}},{tag:"path",attrs:{d:"M414.3 256h-60.6c-3.4 0-6.4 2.2-7.6 5.4L219 629.4c-.3.8-.4 1.7-.4 2.6 0 4.4 3.6 8 8 8h55.1c3.4 0 6.4-2.2 7.6-5.4L322 540h196.2L422 261.4a8.42 8.42 0 00-7.7-5.4zm12.4 228h-85.5L384 360.2 426.7 484zM936 528H800v-93c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v93H592c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h136v152c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V752h136c13.3 0 24-10.7 24-24V552c0-13.3-10.7-24-24-24zM728 680h-88v-80h88v80zm160 0h-88v-80h88v80z"}}]},name:"translation",theme:"outlined"},z=_,A=o(27029),T=function(e,n){return i.createElement(A.Z,(0,j.Z)((0,j.Z)({},e),{},{ref:n,icon:z}))};T.displayName="TranslationOutlined";var D=i.forwardRef(T),M=o(62925),N=o(49233),R=o.n(N),L=(o(1044),e=>{var n=u().useContext(F.ZP.ConfigContext),o=n.getPrefixCls("buddy-input-locale"),t=R()(o,null===e||void 0===e?void 0:e.overlayClazz),i=[];if(null!==e&&void 0!==e&&e.localeProps&&Array.isArray(null===e||void 0===e?void 0:e.localeProps)){var c,d=s(null===e||void 0===e?void 0:e.localeProps);try{for(d.s();!(c=d.n()).done;){var v=c.value;if(v&&null!==v&&void 0!==v&&v.label){var f=v.label,p=v.fieldProps,m=v.rules,y=(0,E.Z)(v,["name","id","disabled","readonly","label","fieldProps","rules"]),b=y,h=p?(0,E.Z)(p,["addonBefore","addonAfter"]):{},g=u().createElement(a,{condition:null===e||void 0===e?void 0:e.popupProField},u().createElement(a.Then,null,u().createElement(M.Z,(0,l.Z)({name:null!==e&&void 0!==e&&e.name?"".concat(null===e||void 0===e?void 0:e.name,"[").concat(f,"]"):void 0,id:null!==e&&void 0!==e&&e.id?"".concat(null===e||void 0===e?void 0:e.id,"[").concat(f,"]"):null!==e&&void 0!==e&&e.name?"".concat(null===e||void 0===e?void 0:e.name,"[").concat(f,"]"):void 0,disabled:!(null===e||void 0===e||!e.disabled)||!!v.disabled,readonly:!(null===e||void 0===e||!e.readonly)||!!v.readonly},y,{fieldProps:w({addonBefore:"before"===(null===e||void 0===e?void 0:e.popupAddonPos)?f:void 0,addonAfter:"after"===(null===e||void 0===e?void 0:e.popupAddonPos)?f:void 0},h),rules:[...e.localeRules||[],...m||[]]}))),u().createElement(a.Else,null,u().createElement(Z.Z,(0,l.Z)({name:null!==e&&void 0!==e&&e.name?"".concat(null===e||void 0===e?void 0:e.name,"[").concat(f,"]"):void 0,id:null!==e&&void 0!==e&&e.id?"".concat(null===e||void 0===e?void 0:e.id,"[").concat(f,"]"):null!==e&&void 0!==e&&e.name?"".concat(null===e||void 0===e?void 0:e.name,"[").concat(f,"]"):void 0,disabled:!(null===e||void 0===e||!e.disabled)||!!v.disabled,readOnly:!(null===e||void 0===e||!e.readonly)||!!v.readonly},b,{addonBefore:"before"===(null===e||void 0===e?void 0:e.popupAddonPos)?f:void 0,addonAfter:"after"===(null===e||void 0===e?void 0:e.popupAddonPos)?f:void 0},h))));i.push({key:v.label,label:g})}}}catch(T){d.e(T)}finally{d.f()}}var P=u().useState(!1),S=(0,r.Z)(P,2),x=S[0],k=S[1],O=()=>{k(!0)},j=e=>{k(e)},_=u().useRef(null),z=e?(0,E.Z)(e,["localeProps","localeRules","addonDom","addonPos","overlayClazz","overlayStyle","popupPlacement","popupAddonPos","popupProField"]):{},A=null!==e&&void 0!==e&&e.fieldProps?(0,E.Z)(null===e||void 0===e?void 0:e.fieldProps,["addonBefore","addonAfter"]):{};return u().createElement(C.Z,{menu:{items:i,onClick:O},placement:null===e||void 0===e?void 0:e.popupPlacement,overlayClassName:t,overlayStyle:null===e||void 0===e?void 0:e.overlayStyle,open:x,onOpenChange:j,getPopupContainer:()=>_.current||document.body},u().createElement(Z.Z.Group,null,u().createElement(M.Z,(0,l.Z)({},z,{fieldProps:w({addonBefore:"before"===(null===e||void 0===e?void 0:e.addonPos)?null===e||void 0===e?void 0:e.addonDom:void 0,addonAfter:"after"===(null===e||void 0===e?void 0:e.addonPos)?null===e||void 0===e?void 0:e.addonDom:void 0},A)})),u().createElement("div",{ref:_})))});L.defaultProps={addonDom:u().createElement(D,null),addonPos:"after",popupAddonPos:"before",popupPlacement:"bottomLeft",popupProField:!1};o(43692);var q=e=>{var n=u().useContext(F.ZP.ConfigContext),o=n.getPrefixCls("buddy-login-portal");return u().createElement("div",{className:o,style:null===e||void 0===e?void 0:e.containerStyle},null===e||void 0===e?void 0:e.containerHeader,u().createElement("div",{className:"".concat(o,"-vessel"),style:null===e||void 0===e?void 0:e.vesselStyle},u().createElement("div",{className:"".concat(o,"-introduction"),style:null===e||void 0===e?void 0:e.introductionStyle},null===e||void 0===e?void 0:e.introductionContent),u().createElement("div",{className:"".concat(o,"-interaction"),style:null===e||void 0===e?void 0:e.interactionStyle},null===e||void 0===e?void 0:e.interactionHeader,u().createElement("div",{className:"".concat(o,"-interchange"),style:null===e||void 0===e?void 0:e.interchangeStyle},null===e||void 0===e?void 0:e.interactionContent),null===e||void 0===e?void 0:e.interactionFooter)),null===e||void 0===e?void 0:e.containerFooter)},B=(o(55616),o(22657)),I=o(56858),H=function(e){var n;return null===e||void 0===e||null===(n=e.of)||void 0===n?void 0:n.map((function(n,o){return null!==e&&void 0!==e&&e.render?null===e||void 0===e?void 0:e.render(n,o):null===e||void 0===e?void 0:e.children}))},V=(o(24710),B.Z.Footer),G=e=>{var n,o=u().useContext(F.ZP.ConfigContext);if((null===e||void 0===e||!e.links||0===(null===e||void 0===e||null===(n=e.links)||void 0===n?void 0:n.length))&&(null===e||void 0===e||!e.copyright))return null;var t=o.getPrefixCls((null===e||void 0===e?void 0:e.vesselClazzPrefix)||"buddy-page-footer"),l=R()(t,null===e||void 0===e?void 0:e.vesselAppendClazz);return u().createElement(V,{className:null===e||void 0===e?void 0:e.containerClazz,style:null===e||void 0===e?void 0:e.containerStyle},u().createElement("div",{className:l,style:null===e||void 0===e?void 0:e.vesselStyle},u().createElement(a,{condition:null===e||void 0===e?void 0:e.links},u().createElement("div",{className:"".concat(t,"-links"),style:null===e||void 0===e?void 0:e.linksStyle},u().createElement(H,{of:null===e||void 0===e?void 0:e.links,render:e=>u().createElement("a",{key:e.key,className:null===e||void 0===e?void 0:e.clazz,href:null===e||void 0===e?void 0:e.href,title:null===e||void 0===e?void 0:e.title,target:(null===e||void 0===e?void 0:e.target)||"_blank",rel:"noopener noreferrer",style:null===e||void 0===e?void 0:e.style},null===e||void 0===e?void 0:e.text)}))),u().createElement(a,{condition:null===e||void 0===e?void 0:e.copyright},u().createElement("div",{className:"".concat(t,"-copyright"),style:null===e||void 0===e?void 0:e.copyrightStyle},u().createElement(u().Fragment,null,u().createElement(I.Z,null)," ",null===e||void 0===e?void 0:e.copyright)))))}},21885:function(e,n,o){"use strict";o.r(n);o(29151),o(9249)},97218:function(e,n,o){"use strict";var t=o(95318).default;n.Z=r;var l=t(o(81109));function r(e,n){var o=(0,l.default)({},e);return Array.isArray(n)&&n.forEach((function(e){delete o[e]})),o}},48122:function(){},54735:function(){},38719:function(){},97950:function(){},55616:function(){},37478:function(){},9249:function(){},29151:function(){},9925:function(){},1044:function(){},43692:function(){},24710:function(){}}]);