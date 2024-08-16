(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[2868],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},22688:function(e,t,n){"use strict";n.r(t);var r=n(63804),l=n.n(r),a=n(96089),i=n(35713),c=n(40766),o=n(60400),u=n(65659),d=l().memo((e=>{var t=e.demos,n=t["FullScreen.en-US-demo"].component;return l().createElement(l().Fragment,null,l().createElement(l().Fragment,null,l().createElement("div",{className:"markdown"},l().createElement("h2",{id:"fullscreen"},l().createElement(a.AnchorLink,{to:"#fullscreen","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"FullScreen"),l().createElement("p",null,"FullScreen, provides an icon with the ability to toggle document full screen mode."),l().createElement("h3",{id:"premise"},l().createElement(a.AnchorLink,{to:"#premise","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Premise"),l().createElement(i.Z,{type:"info"},"Before use this component, you need to install ",l().createElement(a.Link,{to:"https://github.com/ant-design/ant-design-icons",target:"_blank"},"@ant-design/icons")," package first:"),l().createElement(u.Z,{code:"npm install @ant-design/icons --save",lang:"bash"}),l().createElement("h3",{id:"import"},l().createElement(a.AnchorLink,{to:"#import","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Import"),l().createElement(u.Z,{code:"import {FullScreen} from '@yookue/ant-buddy-pro';",lang:"jsx"}),l().createElement("h3",{id:"example"},l().createElement(a.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Example")),l().createElement(o.default,t["FullScreen.en-US-demo"].previewerProps,l().createElement(n,null)),l().createElement("div",{className:"markdown"},l().createElement("h3",{id:"properties"},l().createElement(a.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Properties"),l().createElement("h4",{id:"fullscreenprops"},l().createElement(a.AnchorLink,{to:"#fullscreenprops","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"FullScreenProps"),l().createElement(c.Z,{src:"@/field/FullScreen/index.tsx",hidetitle:"",identifier:"FullScreen",export:"default"}))))}));t["default"]=e=>{var t=l().useContext(a.context),n=t.demos;return l().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l().createElement(d,{demos:n})}},40766:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(63804),l=n.n(r),a=n(96089),i=n(97397),c=n.n(i);n(76645);function o(e,t){return f(e)||m(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(a.push(r.value),t&&a.length===t)break}catch(o){c=!0,l=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw l}}return a}}function f(e){if(Array.isArray(e))return e}var p=function(e){var t=e.children,n=(0,r.useRef)(),a=(0,r.useState)(!1),i=o(a,2),u=i[0],d=i[1],s=(0,r.useState)(!1),m=o(s,2),f=m[0],p=m[1];return(0,r.useEffect)((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l().createElement("div",{className:"__dumi-default-table"},l().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},l().createElement("table",null,t)))},E=p,h={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},v=function(e){var t=e.identifier,n=e.export,i=(0,a.useApiData)(t),c=(0,r.useContext)(a.context),o=c.locale,u=/^zh|cn$/i.test(o)?h["zh-CN"]:h["en-US"];return l().createElement(l().Fragment,null,i&&l().createElement(E,null,l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,u.name),l().createElement("th",null,u.description),l().createElement("th",null,u.type),l().createElement("th",null,u.default))),l().createElement("tbody",null,i[n].map((function(e){return l().createElement("tr",{key:e.identifier},l().createElement("td",null,e.identifier),l().createElement("td",null,e.description||"--"),l().createElement("td",null,l().createElement("code",null,e.type)),l().createElement("td",null,l().createElement("code",null,e.default||e.required&&u.required||"--")))})))))}},76645:function(){}}]);