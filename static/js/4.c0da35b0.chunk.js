/*! For license information please see 4.c0da35b0.chunk.js.LICENSE.txt */
(this["webpackJsonptruyen-full"]=this["webpackJsonptruyen-full"]||[]).push([[4],{32:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var l=i.apply(null,r);l&&e.push(l)}else if("object"===s)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(3);var r=n(0),i=n.n(r),s=i.a.createContext({});s.Consumer,s.Provider;function l(e,t){var n=Object(r.useContext)(s);return e||n[t]||t}},36:function(e,t,n){"use strict";var r=n(3),i=n(8),s=n(0),l=n.n(s),c=n(37);function a(e){return!e||"#"===e.trim()}var u=l.a.forwardRef((function(e,t){var n=e.as,s=void 0===n?"a":n,u=e.disabled,o=e.onKeyDown,j=Object(i.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=j.href,n=j.onClick;(u||a(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return a(j.href)&&(j.role=j.role||"button",j.href=j.href||"#"),u&&(j.tabIndex=-1,j["aria-disabled"]=!0),l.a.createElement(s,Object(r.a)({ref:t},j,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),o)}))}));u.displayName="SafeAnchor",t.a=u},37:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),null)}},38:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(a){i=!0,s=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return i}))},60:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(38),s=n(0),l=n.n(s),c=n(3),a=n(8),u=n(32),o=n.n(u),j=n(33),d=n(36),h=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,i=e.size,s=e.active,u=e.className,h=e.block,m=e.type,b=e.as,f=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(j.a)(n,"btn"),p=o()(u,y,s&&"active",r&&y+"-"+r,h&&y+"-block",i&&y+"-"+i);if(f.href)return l.a.createElement(d.a,Object(c.a)({},f,{as:b,ref:t,className:o()(p,f.disabled&&"disabled")}));t&&(f.ref=t),m?f.type=m:b||(f.type="button");var g=b||"button";return l.a.createElement(g,Object(c.a)({},f,{className:p}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};var m=h,b=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1];return Object(r.jsx)("div",{className:"menu-header",children:Object(r.jsxs)("div",{className:"pos-relavtive d-flex justify-content-between",children:[Object(r.jsx)(m,{className:"btn-main",onBlur:function(){return l(!1)},onClick:function(){return l(!n)},children:"DANH S\xc1CH LO\u1ea0I TRUY\u1ec6N"}),Object(r.jsxs)("div",{className:"categories",children:[Object(r.jsx)(m,{children:Object(r.jsx)("a",{href:"/truyen_full_client/truyen-ngon-tinh",children:"TRUY\u1ec6N NG\xd4N T\xccNH"})}),Object(r.jsx)(m,{children:Object(r.jsx)("a",{href:"/truyen_full_client/truyen-ngon-tinh",children:"TRUY\u1ec6N KI\u1ebeM HI\u1ec6P"})}),Object(r.jsx)(m,{children:Object(r.jsx)("a",{href:"/truyen_full_client/truyen-ngon-tinh",children:"TRUY\u1ec6N TRINH TH\xc1M"})}),Object(r.jsx)(m,{children:Object(r.jsx)("a",{href:"/truyen_full_client/truyen-ngon-tinh",children:"TI\u1ec2U THUY\u1ebeT"})}),Object(r.jsx)(m,{children:Object(r.jsx)("a",{href:"/truyen_full_client/truyen-ngon-tinh",children:"TRUY\u1ec6N TEEN"})})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox"}),Object(r.jsx)("span",{className:"slider round"})]})}),n&&Object(r.jsxs)("div",{className:"d-flex categories-list",children:[Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ki\u1ebfm hi\u1ec7p"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ng\xf4n t\xecnh"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb gi\u1edbi"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb n\u0103ng"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n qu\xe2n s\u1ef1"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n xuy\xean kh\xf4ng"})]}),Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ki\u1ebfm hi\u1ec7p"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ng\xf4n t\xecnh"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb gi\u1edbi"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb n\u0103ng"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n qu\xe2n s\u1ef1"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n xuy\xean kh\xf4ng"})]}),Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ki\u1ebfm hi\u1ec7p"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ng\xf4n t\xecnh"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb gi\u1edbi"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb n\u0103ng"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n qu\xe2n s\u1ef1"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n xuy\xean kh\xf4ng"})]}),Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ki\u1ebfm hi\u1ec7p"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ng\xf4n t\xecnh"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb gi\u1edbi"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb n\u0103ng"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n qu\xe2n s\u1ef1"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n xuy\xean kh\xf4ng"})]}),Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ki\u1ebfm hi\u1ec7p"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n ng\xf4n t\xecnh"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb gi\u1edbi"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n d\u1ecb n\u0103ng"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n qu\xe2n s\u1ef1"}),Object(r.jsx)("li",{className:"list-group-item",children:"Truy\u1ec7n xuy\xean kh\xf4ng"})]})]})]})})};b.defaultProps={};t.default=b}}]);
//# sourceMappingURL=4.c0da35b0.chunk.js.map