(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[5424],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},2893:function(e,t,n){"use strict";n.r(t);var r=n(63804),l=n.n(r),a=n(96089),o=n(40766),i=n(60400),c=n(65659),u=l().memo((e=>{var t=e.demos,n=t["FlexBox.zh-CN-demo"].component;return l().createElement(l().Fragment,null,l().createElement(l().Fragment,null,l().createElement("div",{className:"markdown"},l().createElement("h2",{id:"flexbox"},l().createElement(a.AnchorLink,{to:"#flexbox","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"FlexBox"),l().createElement("p",null,"FlexBox \u7ec4\u4ef6\uff0c\u4e00\u4e2a\u7528\u4e8e\u5bf9\u9f50\u7684\u5f39\u6027\u5e03\u5c40\u5bb9\u5668\u3002"),l().createElement("h3",{id:"\u5bfc\u5165\u7ec4\u4ef6"},l().createElement(a.AnchorLink,{to:"#\u5bfc\u5165\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"\u5bfc\u5165\u7ec4\u4ef6"),l().createElement(c.Z,{code:"import {FlexBox} from '@yookue/ant-buddy-pro';",lang:"jsx"}),l().createElement("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},l().createElement(a.AnchorLink,{to:"#\u4f7f\u7528\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u793a\u4f8b")),l().createElement(i.default,t["FlexBox.zh-CN-demo"].previewerProps,l().createElement(n,null)),l().createElement("div",{className:"markdown"},l().createElement("h3",{id:"\u7ec4\u4ef6\u5c5e\u6027"},l().createElement(a.AnchorLink,{to:"#\u7ec4\u4ef6\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u5c5e\u6027"),l().createElement("h4",{id:"flexboxprops"},l().createElement(a.AnchorLink,{to:"#flexboxprops","aria-hidden":"true",tabIndex:-1},l().createElement("span",{className:"icon icon-link"})),"FlexBoxProps"),l().createElement(o.Z,{src:"@/layout/FlexBox/index.tsx",hidetitle:"",identifier:"FlexBox",export:"default"}))))}));t["default"]=e=>{var t=l().useContext(a.context),n=t.demos;return l().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l().createElement(u,{demos:n})}},40766:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(63804),l=n.n(r),a=n(96089),o=n(97397),i=n.n(o);n(76645);function c(e,t){return f(e)||s(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(c){i=!0,l=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw l}}return a}}function f(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=(0,r.useRef)(),a=(0,r.useState)(!1),o=c(a,2),u=o[0],d=o[1],m=(0,r.useState)(!1),s=c(m,2),f=s[0],E=s[1];return(0,r.useEffect)((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l().createElement("div",{className:"__dumi-default-table"},l().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},l().createElement("table",null,t)))},h=E,p={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},x=function(e){var t=e.identifier,n=e.export,o=(0,a.useApiData)(t),i=(0,r.useContext)(a.context),c=i.locale,u=/^zh|cn$/i.test(c)?p["zh-CN"]:p["en-US"];return l().createElement(l().Fragment,null,o&&l().createElement(h,null,l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,u.name),l().createElement("th",null,u.description),l().createElement("th",null,u.type),l().createElement("th",null,u.default))),l().createElement("tbody",null,o[n].map((function(e){return l().createElement("tr",{key:e.identifier},l().createElement("td",null,e.identifier),l().createElement("td",null,e.description||"--"),l().createElement("td",null,l().createElement("code",null,e.type)),l().createElement("td",null,l().createElement("code",null,e.default||e.required&&u.required||"--")))})))))}},76645:function(){}}]);