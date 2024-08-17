(self["webpackChunk_yookue_ant_buddy_pro"]=self["webpackChunk_yookue_ant_buddy_pro"]||[]).push([[8199],{44926:function(e,t,n){"use strict";n.r(t);var r=n(63804),o=n.n(r),a=n(96089),l=n(40766),i=n(65659),c=o().memo((e=>{e.demos;return o().createElement(o().Fragment,null,o().createElement("div",{className:"markdown"},o().createElement("h2",{id:"loginportal"},o().createElement(a.AnchorLink,{to:"#loginportal","aria-hidden":"true",tabIndex:-1},o().createElement("span",{className:"icon icon-link"})),"LoginPortal"),o().createElement("p",null,"Similar to ",o().createElement(a.Link,{to:"https://github.com/ant-design/pro-components/blob/v1/packages/form/src/components/LoginForm/index.md"},"LoginFormPage")," of ",o().createElement(a.Link,{to:"https://pro.ant.design/"},"Ant Design Pro"),", with more customization for CSS classes and styles."),o().createElement("h3",{id:"snapshot"},o().createElement(a.AnchorLink,{to:"#snapshot","aria-hidden":"true",tabIndex:-1},o().createElement("span",{className:"icon icon-link"})),"Snapshot"),o().createElement("p",null,o().createElement("img",{src:"/ant-buddy-pro/assets/img/snap/login-portal-1.jpg",alt:""})),o().createElement("h3",{id:"import"},o().createElement(a.AnchorLink,{to:"#import","aria-hidden":"true",tabIndex:-1},o().createElement("span",{className:"icon icon-link"})),"Import"),o().createElement(i.Z,{code:"import {LoginPortal} from '@yookue/ant-buddy-pro';",lang:"jsx"}),o().createElement("h3",{id:"example"},o().createElement(a.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},o().createElement("span",{className:"icon icon-link"})),"Example"),o().createElement(i.Z,{code:"import React from 'react';\nimport {LoginForm} from '@ant-design/pro-form';\nimport {LoginPortal, PageFooter} from '@yookue/ant-buddy-pro';\nimport {SelectLang} from '@umijs/max';\n\nexport default () => {\n    const loginForm = (\n        // Customize the following content according to your needs\n        // Typically be a form component\n        <LoginForm/>\n    );\n\n    return (\n        <LoginPortal\n            interactionHeader={(\n                // Customize the following content according to your needs\n                // Here use a language switch dropdown menu\n                <div data-lang='true'>\n                    <SelectLang/>\n                </div>\n            )}\n            interactionContent={loginForm}\n            interactionFooter={(\n                // Customize the following content according to your needs\n                // Typically be a footer component\n                <PageFooter/>\n            )}\n        />\n    );\n}",lang:"jsx"}),o().createElement("h3",{id:"properties"},o().createElement(a.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},o().createElement("span",{className:"icon icon-link"})),"Properties"),o().createElement("h4",{id:"loginportalprops"},o().createElement(a.AnchorLink,{to:"#loginportalprops","aria-hidden":"true",tabIndex:-1},o().createElement("span",{className:"icon icon-link"})),"LoginPortalProps"),o().createElement(l.Z,{src:"@/layout/LoginPortal/index.tsx",hidetitle:"",identifier:"LoginPortal",export:"default"})))}));t["default"]=e=>{var t=o().useContext(a.context),n=t.demos;return o().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o().createElement(c,{demos:n})}},40766:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(63804),o=n.n(r),a=n(96089),l=n(97397),i=n.n(l);n(76645);function c(e,t){return p(e)||s(e,t)||u(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0)if(a.push(r.value),t&&a.length===t)break}catch(c){i=!0,o=c}finally{try{l||null==n["return"]||n["return"]()}finally{if(i)throw o}}return a}}function p(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=(0,r.useRef)(),a=(0,r.useState)(!1),l=c(a,2),m=l[0],u=l[1],d=(0,r.useState)(!1),s=c(d,2),p=s[0],f=s[1];return(0,r.useEffect)((function(){var e=n.current,t=i()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),o().createElement("div",{className:"__dumi-default-table"},o().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":p||void 0},o().createElement("table",null,t)))},h=f,E={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},g=function(e){var t=e.identifier,n=e.export,l=(0,a.useApiData)(t),i=(0,r.useContext)(a.context),c=i.locale,m=/^zh|cn$/i.test(c)?E["zh-CN"]:E["en-US"];return o().createElement(o().Fragment,null,l&&o().createElement(h,null,o().createElement("thead",null,o().createElement("tr",null,o().createElement("th",null,m.name),o().createElement("th",null,m.description),o().createElement("th",null,m.type),o().createElement("th",null,m.default))),o().createElement("tbody",null,l[n].map((function(e){return o().createElement("tr",{key:e.identifier},o().createElement("td",null,e.identifier),o().createElement("td",null,e.description||"--"),o().createElement("td",null,o().createElement("code",null,e.type)),o().createElement("td",null,o().createElement("code",null,e.default||e.required&&m.required||"--")))})))))}},76645:function(){}}]);