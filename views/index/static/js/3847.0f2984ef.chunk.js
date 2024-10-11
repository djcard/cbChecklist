/*! For license information please see 3847.0f2984ef.chunk.js.LICENSE.txt */
(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[3847],{3847:function(t,e,n){"use strict";n.r(e);var r=n(3360),i=(n(2791),n(4452)),a=n(184);e.default=function(t){var e=t.click?t.click:i.closeModal;return(0,a.jsx)(r.Z,{variant:"secondary",onClick:function(){e(t.dismisser)},id:"modalCloseButton",children:"Close"})}},5341:function(t,e,n){"use strict";n.d(e,{FT:function(){return u}});var r=n(885),i=n(2791),a=n(184),o=["as","disabled"];function u(t){var e=t.tagName,n=t.disabled,r=t.href,i=t.target,a=t.rel,o=t.role,u=t.onClick,s=t.tabIndex,c=void 0===s?0:s,l=t.type;e||(e=null!=r||null!=i||null!=a?"a":"button");var f={tagName:e};if("button"===e)return[{type:l||"button",disabled:n},f];var d=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==u||u(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:n?void 0:c,href:r,target:"a"===e?i:void 0,"aria-disabled":n||void 0,rel:"a"===e?a:void 0,onClick:d,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),d(t))}},f]}var s=i.forwardRef((function(t,e){var n=t.as,i=t.disabled,s=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,o),c=u(Object.assign({tagName:n,disabled:i},s)),l=(0,r.Z)(c,2),f=l[0],d=l[1].tagName;return(0,a.jsx)(d,Object.assign({},s,f,{ref:e}))}));s.displayName="Button",e.ZP=s},1694:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&t.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},3360:function(t,e,n){"use strict";var r=n(1413),i=n(885),a=n(5987),o=n(1694),u=n.n(o),s=n(2791),c=n(5341),l=n(162),f=n(184),d=["as","bsPrefix","variant","size","active","disabled","className"],v=s.forwardRef((function(t,e){var n=t.as,o=t.bsPrefix,s=t.variant,v=void 0===s?"primary":s,p=t.size,b=t.active,g=void 0!==b&&b,m=t.disabled,x=void 0!==m&&m,y=t.className,h=(0,a.Z)(t,d),k=(0,l.vE)(o,"btn"),C=(0,c.FT)((0,r.Z)({tagName:n,disabled:x},h)),j=(0,i.Z)(C,2),O=j[0],Z=j[1].tagName;return(0,f.jsx)(Z,(0,r.Z)((0,r.Z)((0,r.Z)({},O),h),{},{ref:e,disabled:x,className:u()(y,k,g&&"active",v&&"".concat(k,"-").concat(v),p&&"".concat(k,"-").concat(p),h.href&&x&&"disabled")}))}));v.displayName="Button",e.Z=v},162:function(t,e,n){"use strict";n.d(e,{SC:function(){return c},pi:function(){return u},vE:function(){return o},zG:function(){return s}});var r=n(2791),i=(n(184),["xxl","xl","lg","md","sm","xs"]),a=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});a.Consumer,a.Provider;function o(t,e){var n=(0,r.useContext)(a).prefixes;return t||n[e]||e}function u(){return(0,r.useContext)(a).breakpoints}function s(){return(0,r.useContext)(a).minBreakpoint}function c(){return"rtl"===(0,r.useContext)(a).dir}},5987:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(3366);function i(t,e){if(null==t)return{};var n,i,a=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}}}]);
//# sourceMappingURL=3847.0f2984ef.chunk.js.map