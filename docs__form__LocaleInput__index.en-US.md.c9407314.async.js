(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[7423],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return a.m}});var a=n(9684);n(72255)},25314:function(e,t,n){"use strict";n.r(t);var a=n(63804),l=n.n(a),r=n(96089),i=n(35713),o=n(40766),c=n(60400),d=n(65659),u=l().memo((e=>{var t=e.demos,n=t["LocaleInput.en-US-demo"].component,a=t["LocaleInput.en-US-demo-1"].component,u=t["LocaleInput.en-US-demo-2"].component,m=t["LocaleInput.en-US-demo-3"].component;return l().createElement(l().Fragment,null,l().createElement(l().Fragment,null,l().createElement("div",{className:"markdown"},l().createElement("h2",{id:"localeinput"},l().createElement(r.AnchorLink,{to:"#localeinput","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"LocaleInput"),l().createElement("p",null,"LocaleInput, provides a text input box with a dropdown div of locale input boxes, aiming to support multilingual capability for your application."),l().createElement("h3",{id:"premise"},l().createElement(r.AnchorLink,{to:"#premise","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Premise"),l().createElement(i.Z,{type:"info"},"Before use this component, you need to install ",l().createElement(r.Link,{to:"https://github.com/ant-design/ant-design-icons",target:"_blank"},"@ant-design/icons")," package first if you're using the default ",l().createElement("b",null,l().createElement("i",null,"`actionDom`"))," attribute:"),l().createElement(d.Z,{code:"npm install @ant-design/icons --save",lang:"bash"}),l().createElement("h3",{id:"import"},l().createElement(r.AnchorLink,{to:"#import","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Import"),l().createElement(d.Z,{code:"import {LocaleInput} from '@yookue/ant-buddy-pro';",lang:"jsx"}),l().createElement("h3",{id:"example"},l().createElement(r.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Example"),l().createElement("blockquote",null,l().createElement("p",null,"Each ",l().createElement("code",null,"popupInputProps")," item has its own input properties, thus you can control them as you wish, such as marking someone of them to ",l().createElement("code",null,"disabled")," or ",l().createElement("code",null,"readonly"),", and so on.")),l().createElement("blockquote",null,l().createElement("p",null,l().createElement("code",null,"popupQuickTags")," can custom language input items quickly.")),l().createElement("h4",{id:"props-with-field-validation"},l().createElement(r.AnchorLink,{to:"#props-with-field-validation","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Props with field validation")),l().createElement(c.default,t["LocaleInput.en-US-demo"].previewerProps,l().createElement(n,null)),l().createElement("div",{className:"markdown"},l().createElement("h4",{id:"props-without-field-validation"},l().createElement(r.AnchorLink,{to:"#props-without-field-validation","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Props without field validation")),l().createElement(c.default,t["LocaleInput.en-US-demo-1"].previewerProps,l().createElement(a,null)),l().createElement("div",{className:"markdown"},l().createElement("h4",{id:"tags-with-field-validation"},l().createElement(r.AnchorLink,{to:"#tags-with-field-validation","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Tags with field validation")),l().createElement(c.default,t["LocaleInput.en-US-demo-2"].previewerProps,l().createElement(u,null)),l().createElement("div",{className:"markdown"},l().createElement("h4",{id:"tags-without-field-validation-disabled"},l().createElement(r.AnchorLink,{to:"#tags-without-field-validation-disabled","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Tags without field validation, disabled")),l().createElement(c.default,t["LocaleInput.en-US-demo-3"].previewerProps,l().createElement(m,null)),l().createElement("div",{className:"markdown"},l().createElement("h3",{id:"properties"},l().createElement(r.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Properties"),l().createElement("h4",{id:"localeinputprops"},l().createElement(r.AnchorLink,{to:"#localeinputprops","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"LocaleInputProps"),l().createElement(o.Z,{src:"@/form/LocaleInput/index.tsx",hidetitle:"",identifier:"LocaleInput",export:"default"}))))}));t["default"]=e=>{var t=l().useContext(r.context),n=t.demos;return l().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l().createElement(u,{demos:n})}},40766:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(63804),l=n.n(a),r=n(96089),i=n(97397),o=n.n(i);n(76645);function c(e,t){return p(e)||s(e,t)||u(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(r.push(a.value),t&&r.length===t)break}catch(c){o=!0,l=c}finally{try{i||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function p(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=(0,a.useRef)(),r=(0,a.useState)(!1),i=c(r,2),d=i[0],u=i[1],m=(0,a.useState)(!1),s=c(m,2),p=s[0],E=s[1];return(0,a.useEffect)((function(){var e=n.current,t=o()((function(){u(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l().createElement("div",{className:"__dumi-default-table"},l().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":d||void 0,"data-right-folded":p||void 0},l().createElement("table",null,t)))},f=E,h={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},v=function(e){var t=e.identifier,n=e.export,i=(0,r.useApiData)(t),o=(0,a.useContext)(r.context),c=o.locale,d=/^zh|cn$/i.test(c)?h["zh-CN"]:h["en-US"];return l().createElement(l().Fragment,null,i&&l().createElement(f,null,l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,d.name),l().createElement("th",null,d.description),l().createElement("th",null,d.type),l().createElement("th",null,d.default))),l().createElement("tbody",null,i[n].map((function(e){return l().createElement("tr",{key:e.identifier},l().createElement("td",null,e.identifier),l().createElement("td",null,e.description||"--"),l().createElement("td",null,l().createElement("code",null,e.type)),l().createElement("td",null,l().createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},76645:function(){}}]);