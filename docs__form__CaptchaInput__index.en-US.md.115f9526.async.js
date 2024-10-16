(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[977],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return a.m}});var a=n(9684);n(72255)},57146:function(e,t,n){"use strict";n.r(t);var a=n(63804),r=n.n(a),l=n(96089),o=n(40766),c=n(60400),i=n(65659),u=r().memo((e=>{var t=e.demos,n=t["captchainput-demo.en-us"].component;return r().createElement(r().Fragment,null,r().createElement(r().Fragment,null,r().createElement("div",{className:"markdown"},r().createElement("h2",{id:"captchainput"},r().createElement(l.AnchorLink,{to:"#captchainput","aria-hidden":"true",tabIndex:-1},r().createElement("span",{className:"icon icon-link"})),"CaptchaInput"),r().createElement("p",null,"CaptchaInput, provides a text input box and a button with captcha generation capability."),r().createElement("p",null,"Similar to ",r().createElement(l.Link,{to:"https://procomponents.ant.design/components/field-set#proformcaptcha"},"ProFormCaptcha")," of ",r().createElement(l.Link,{to:"https://procomponents.ant.design/"},"ProComponents"),", the most differences are:"),r().createElement("ul",null,r().createElement("li",null,"ProFormCaptcha provides a function named ",r().createElement("code",null,"onGetCaptcha")," to trigger the captcha generation, while CaptchaInput named ",r().createElement("code",null,"onGenerate")),r().createElement("li",null,"The function declaration of ProFormCaptcha ",r().createElement("code",null,"onGetCaptcha")," is ",r().createElement("code",null,"(phone)=>Promise<any>"),", while the declaration of CaptchaInput ",r().createElement("code",null,"onGenerate")," is ",r().createElement("code",null,"(mobile?: string) => boolean | void | Promise<boolean | void>"),", the latter one supports much richer return data types"),r().createElement("li",null,"The function of ProFormCaptcha ",r().createElement("code",null,"onGetCaptcha")," only can stop captcha generation by throwing an exception, while CaptchaInput ",r().createElement("code",null,"onGenerate")," provides more return types to automatically decide should start the generation or not (",r().createElement("strong",null,"This is especially useful when popups an extra slider captcha"),")"),r().createElement("li",null,"CaptchaInput provides a function named ",r().createElement("code",null,"onTimerBegin")," to initialize additional preparations, and provides a function ",r().createElement("code",null,"onTimerEnd")," to do the additional cleanups")),r().createElement("h3",{id:"import"},r().createElement(l.AnchorLink,{to:"#import","aria-hidden":"true",tabIndex:-1},r().createElement("span",{className:"icon icon-link"})),"Import"),r().createElement(i.Z,{code:"import {CaptchaInput} from '@yookue/ant-buddy-pro';",lang:"jsx"}),r().createElement("h3",{id:"example"},r().createElement(l.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},r().createElement("span",{className:"icon icon-link"})),"Example")),r().createElement(c.default,t["captchainput-demo.en-us"].previewerProps,r().createElement(n,null)),r().createElement("div",{className:"markdown"},r().createElement("h3",{id:"properties"},r().createElement(l.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},r().createElement("span",{className:"icon icon-link"})),"Properties"),r().createElement("h4",{id:"captchainputprops"},r().createElement(l.AnchorLink,{to:"#captchainputprops","aria-hidden":"true",tabIndex:-1},r().createElement("span",{className:"icon icon-link"})),"CaptchaInputProps"),r().createElement(o.Z,{src:"@/form/CaptchaInput/index.tsx",hidetitle:"",identifier:"CaptchaInput",export:"default"}))))}));t["default"]=e=>{var t=r().useContext(l.context),n=t.demos;return r().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r().createElement(u,{demos:n})}},40766:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(63804),r=n.n(a),l=n(96089),o=n(97397),c=n.n(o);n(76645);function i(e,t){return s(e)||p(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var h=function(e){var t=e.children,n=(0,a.useRef)(),l=(0,a.useState)(!1),o=i(l,2),u=o[0],d=o[1],m=(0,a.useState)(!1),p=i(m,2),s=p[0],h=p[1];return(0,a.useEffect)((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r().createElement("div",{className:"__dumi-default-table"},r().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":s||void 0},r().createElement("table",null,t)))},f=h,E={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},v=function(e){var t=e.identifier,n=e.export,o=(0,l.useApiData)(t),c=(0,a.useContext)(l.context),i=c.locale,u=/^zh|cn$/i.test(i)?E["zh-CN"]:E["en-US"];return r().createElement(r().Fragment,null,o&&r().createElement(f,null,r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",null,u.name),r().createElement("th",null,u.description),r().createElement("th",null,u.type),r().createElement("th",null,u.default))),r().createElement("tbody",null,o[n].map((function(e){return r().createElement("tr",{key:e.identifier},r().createElement("td",null,e.identifier),r().createElement("td",null,e.description||"--"),r().createElement("td",null,r().createElement("code",null,e.type)),r().createElement("td",null,r().createElement("code",null,e.default||e.required&&u.required||"--")))})))))}},76645:function(){}}]);