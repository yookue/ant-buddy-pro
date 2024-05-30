(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[7527],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},97276:function(e,t,n){"use strict";n.r(t);var r=n(63804),a=n.n(r),l=n(96089),i=n(95049),o=n(27632),c=n(65704),u=a().memo((e=>{var t=e.demos,n=t["MaskInput.en-US-demo"].component;return a().createElement(a().Fragment,null,a().createElement(a().Fragment,null,a().createElement("div",{className:"markdown"},a().createElement("h2",{id:"maskinput"},a().createElement(l.AnchorLink,{to:"#maskinput","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"MaskInput"),a().createElement("p",null,"MaskInput, provides a text input box with regular expression validation capability."),a().createElement("h3",{id:"import"},a().createElement(l.AnchorLink,{to:"#import","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"Import"),a().createElement(c.Z,{code:"import {MaskInput} from '@yookue/ant-buddy-pro';",lang:"jsx"}),a().createElement("h3",{id:"example"},a().createElement(l.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"Example")),a().createElement(o.default,t["MaskInput.en-US-demo"].previewerProps,a().createElement(n,null)),a().createElement("div",{className:"markdown"},a().createElement("h3",{id:"properties"},a().createElement(l.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"Properties"),a().createElement("h4",{id:"maskinputprops"},a().createElement(l.AnchorLink,{to:"#maskinputprops","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"MaskInputProps"),a().createElement(i.Z,{src:"@/form/MaskInput/index.tsx",hidetitle:"",identifier:"MaskInput",export:"default"}))))}));t["default"]=e=>{var t=a().useContext(l.context),n=t.demos;return a().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a().createElement(u,{demos:n})}},95049:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(63804),a=n.n(r),l=n(96089),i=n(97397),o=n.n(i);n(6651);function c(e,t){return p(e)||m(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(l.push(r.value),t&&l.length===t)break}catch(c){o=!0,a=c}finally{try{i||null==n["return"]||n["return"]()}finally{if(o)throw a}}return l}}function p(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),i=c(l,2),u=i[0],d=i[1],s=(0,r.useState)(!1),m=c(s,2),p=m[0],f=m[1];return(0,r.useEffect)((function(){var e=n.current,t=o()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a().createElement("div",{className:"__dumi-default-table"},a().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":p||void 0},a().createElement("table",null,t)))},E=f,h={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},v=function(e){var t=e.identifier,n=e.export,i=(0,l.useApiData)(t),o=(0,r.useContext)(l.context),c=o.locale,u=/^zh|cn$/i.test(c)?h["zh-CN"]:h["en-US"];return a().createElement(a().Fragment,null,i&&a().createElement(E,null,a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,u.name),a().createElement("th",null,u.description),a().createElement("th",null,u.type),a().createElement("th",null,u.default))),a().createElement("tbody",null,i[n].map((function(e){return a().createElement("tr",{key:e.identifier},a().createElement("td",null,e.identifier),a().createElement("td",null,e.description||"--"),a().createElement("td",null,a().createElement("code",null,e.type)),a().createElement("td",null,a().createElement("code",null,e.default||e.required&&u.required||"--")))})))))}},6651:function(){}}]);