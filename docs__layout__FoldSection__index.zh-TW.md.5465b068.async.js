(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[9475],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},5744:function(e,t,n){"use strict";n.r(t);var r=n(63804),l=n.n(r),a=n(96089),o=n(35713),i=n(40766),c=n(64895),d=n(65659),u=l().memo((e=>{var t=e.demos,n=t["FoldSection.zh-TW-demo"].component;return l().createElement(l().Fragment,null,l().createElement(l().Fragment,null,l().createElement("div",{className:"markdown"},l().createElement("h2",{id:"foldsection"},l().createElement(a.AnchorLink,{to:"#foldsection","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"FoldSection"),l().createElement("p",null,"\u8207 ",l().createElement(a.Link,{to:"https://ant.design/"},"Ant Design")," \u7684 ",l().createElement(a.Link,{to:"https://4x.ant.design/components/collapse/"},"Collapse")," \u7d44\u4ef6\u985e\u4f3c\uff0c\u4f46\u53ea\u6709\u4e00\u500b\u6a19\u984c\u6b04\u548c\u4e00\u500b\u9762\u677f\u3002"),l().createElement("h3",{id:"premise"},l().createElement(a.AnchorLink,{to:"#premise","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Premise"),l().createElement(o.Z,{type:"info"},"\u5982\u679c\u60a8\u4f7f\u7528\u9ed8\u8a8d\u7684 ",l().createElement("b",null,l().createElement("i",null,"`headerOpenedDom`/`headerClosedDom`"))," \u5c6c\u6027\uff0c\u8981\u4f7f\u7528\u6b64\u7d44\u4ef6\uff0c\u60a8\u9700\u8981\u5148\u5b89\u88dd ",l().createElement(a.Link,{to:"https://github.com/ant-design/ant-design-icons",target:"_blank"},"@ant-design/icons")," \u5716\u6a19\u7d44\u4ef6\u5305\uff1a"),l().createElement(d.Z,{code:"npm install @ant-design/icons --save",lang:"bash"}),l().createElement("h3",{id:"import"},l().createElement(a.AnchorLink,{to:"#import","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Import"),l().createElement(d.Z,{code:"import {FoldSection} from '@yookue/ant-buddy-pro';",lang:"jsx"}),l().createElement("h3",{id:"example"},l().createElement(a.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Example")),l().createElement(c.default,t["FoldSection.zh-TW-demo"].previewerProps,l().createElement(n,null)),l().createElement("div",{className:"markdown"},l().createElement("h3",{id:"properties"},l().createElement(a.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"Properties"),l().createElement("h5",{id:"foldsectionprops"},l().createElement(a.AnchorLink,{to:"#foldsectionprops","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"FoldSectionProps"),l().createElement(i.Z,{src:"@/layout/FoldSection/index.tsx",hidetitle:"",identifier:"FoldSection",export:"default"}))))}));t["default"]=e=>{var t=l().useContext(a.context),n=t.demos;return l().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l().createElement(u,{demos:n})}},40766:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(63804),l=n.n(r),a=n(96089),o=n(97397),i=n.n(o);n(76645);function c(e,t){return p(e)||m(e,t)||u(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(c){i=!0,l=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw l}}return a}}function p(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=(0,r.useRef)(),a=(0,r.useState)(!1),o=c(a,2),d=o[0],u=o[1],s=(0,r.useState)(!1),m=c(s,2),p=m[0],f=m[1];return(0,r.useEffect)((function(){var e=n.current,t=i()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l().createElement("div",{className:"__dumi-default-table"},l().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":d||void 0,"data-right-folded":p||void 0},l().createElement("table",null,t)))},E=f,h={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},v=function(e){var t=e.identifier,n=e.export,o=(0,a.useApiData)(t),i=(0,r.useContext)(a.context),c=i.locale,d=/^zh|cn$/i.test(c)?h["zh-CN"]:h["en-US"];return l().createElement(l().Fragment,null,o&&l().createElement(E,null,l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,d.name),l().createElement("th",null,d.description),l().createElement("th",null,d.type),l().createElement("th",null,d.default))),l().createElement("tbody",null,o[n].map((function(e){return l().createElement("tr",{key:e.identifier},l().createElement("td",null,e.identifier),l().createElement("td",null,e.description||"--"),l().createElement("td",null,l().createElement("code",null,e.type)),l().createElement("td",null,l().createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},76645:function(){}}]);