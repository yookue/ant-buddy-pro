(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[5631],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},79344:function(e,t,n){"use strict";n.r(t);var r=n(63804),a=n.n(r),l=n(96089),c=n(40766),i=n(60400),o=n(65659),u=a().memo((e=>{var t=e.demos,n=t["FallbackImage.zh-CN-demo"].component;return a().createElement(a().Fragment,null,a().createElement(a().Fragment,null,a().createElement("div",{className:"markdown"},a().createElement("h2",{id:"fallbackimage"},a().createElement(l.AnchorLink,{to:"#fallbackimage","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"FallbackImage"),a().createElement("p",null,"FallbackImage \u63d0\u4f9b\u4e86\u4e00\u4e2a\u52a0\u8f7d\u56fe\u7247\u5907\u7528\u6e90\u7684\u9009\u9879\uff0c\u7528\u4ee5\u5728\u56fe\u7247\u5e38\u89c4\u6e90\u65e0\u6cd5\u52a0\u8f7d\u7684\u65f6\u5019\u663e\u793a\u3002"),a().createElement("h3",{id:"\u5bfc\u5165\u7ec4\u4ef6"},a().createElement(l.AnchorLink,{to:"#\u5bfc\u5165\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u5bfc\u5165\u7ec4\u4ef6"),a().createElement(o.Z,{code:"import {FallbackImage} from '@yookue/ant-buddy-pro';",lang:"jsx"}),a().createElement("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},a().createElement(l.AnchorLink,{to:"#\u4f7f\u7528\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u793a\u4f8b")),a().createElement(i.default,t["FallbackImage.zh-CN-demo"].previewerProps,a().createElement(n,null)),a().createElement("div",{className:"markdown"},a().createElement("h3",{id:"\u7ec4\u4ef6\u5c5e\u6027"},a().createElement(l.AnchorLink,{to:"#\u7ec4\u4ef6\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u5c5e\u6027"),a().createElement("h4",{id:"fallbackimageprops"},a().createElement(l.AnchorLink,{to:"#fallbackimageprops","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"FallbackImageProps"),a().createElement(c.Z,{src:"@/field/FallbackImage/index.tsx",hidetitle:"",identifier:"FallbackImage",export:"default"}))))}));t["default"]=e=>{var t=a().useContext(l.context),n=t.demos;return a().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a().createElement(u,{demos:n})}},40766:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(63804),a=n.n(r),l=n(96089),c=n(97397),i=n.n(c);n(76645);function o(e,t){return f(e)||s(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0)if(l.push(r.value),t&&l.length===t)break}catch(o){i=!0,a=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}}function f(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),c=o(l,2),u=c[0],d=c[1],m=(0,r.useState)(!1),s=o(m,2),f=s[0],E=s[1];return(0,r.useEffect)((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a().createElement("div",{className:"__dumi-default-table"},a().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},a().createElement("table",null,t)))},h=E,p={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},b=function(e){var t=e.identifier,n=e.export,c=(0,l.useApiData)(t),i=(0,r.useContext)(l.context),o=i.locale,u=/^zh|cn$/i.test(o)?p["zh-CN"]:p["en-US"];return a().createElement(a().Fragment,null,c&&a().createElement(h,null,a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,u.name),a().createElement("th",null,u.description),a().createElement("th",null,u.type),a().createElement("th",null,u.default))),a().createElement("tbody",null,c[n].map((function(e){return a().createElement("tr",{key:e.identifier},a().createElement("td",null,e.identifier),a().createElement("td",null,e.description||"--"),a().createElement("td",null,a().createElement("code",null,e.type)),a().createElement("td",null,a().createElement("code",null,e.default||e.required&&u.required||"--")))})))))}},76645:function(){}}]);