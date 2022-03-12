"use strict";var e=require("@csstools/postcss-progressive-custom-properties"),t=require("postcss-value-parser");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),u=n(t);
/**
 * Simple matrix (and vector) multiplication
 * Warning: No error handling for incompatible dimensions!
 * @author Lea Verou 2020 MIT License
 *
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/multiply-matrices.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/multiply-matrices.js
 */
function a(e,t){const n=e.length;let r,u;r=Array.isArray(e[0])?e:[e],Array.isArray(t[0])||(u=t.map((e=>[e])));const a=u[0].length,o=u[0].map(((e,t)=>u.map((e=>e[t]))));let i=r.map((e=>o.map((t=>Array.isArray(e)?e.reduce(((e,n,r)=>e+n*(t[r]||0)),0):t.reduce(((t,n)=>t+n*e),0)))));return 1===n&&(i=i[0]),1===a?i.map((e=>e[0])):i}
/**
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */const o=[.3457/.3585,1,.2958/.3585];function i(e){return e.map((function(e){const t=e<0?-1:1,n=Math.abs(e);return n<.04045?e/12.92:t*Math.pow((n+.055)/1.055,2.4)}))}function s(e){return e.map((function(e){const t=e<0?-1:1,n=Math.abs(e);return n>.0031308?t*(1.055*Math.pow(n,1/2.4)-.055):12.92*e}))}function l(e){return a([[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],e)}function c(e){return a([[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],e)}function f(e){return i(e)}function p(e){return s(e)}function d(e){return a([[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],e)}function h(e){return a([[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],e)}function v(e){return a([[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]],e)}function m(e){const t=24389/27,n=216/24389,r=[];r[1]=(e[0]+16)/116,r[0]=e[1]/500+r[1],r[2]=r[1]-e[2]/200;return[Math.pow(r[0],3)>n?Math.pow(r[0],3):(116*r[0]-16)/t,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/t,Math.pow(r[2],3)>n?Math.pow(r[2],3):(116*r[2]-16)/t].map(((e,t)=>e*o[t]))}function b(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}function y(e){const t=a([[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],e);return a([[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],t.map((e=>Math.cbrt(e))))}function M(e){const t=a([[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],e);return a([[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],t.map((e=>e**3)))}function g(e){const t=180*Math.atan2(e[2],e[1])/Math.PI;return[e[0],Math.sqrt(e[1]**2+e[2]**2),t>=0?t:t+360]}function x(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}
/**
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js
 */function w(e,t){const[n,r,u]=e,[a,o,i]=t,s=n-a,l=r-o,c=u-i;return Math.sqrt(s**2+l**2+c**2)}function P(e,t,n){return function(e,t,n){let r=0,u=e[1];const a=e;for(;u-r>1e-4;){w(a,n(F(t(a))))-.02<1e-4?r=a[1]:u=a[1],a[1]=(u+r)/2}return F(t([...a]))}(e,t,n)}function F(e){return e.map((e=>e<0?0:e>1?1:e))}function I(e){const[t,n,r]=e;return t>=-1e-4&&t<=1.0001&&n>=-1e-4&&n<=1.0001&&r>=-1e-4&&r<=1.0001}function N(e){const[t,n,r]=e;let u=[Math.min(Math.max(t,0),100),Math.min(Math.max(n,-127),128),Math.min(Math.max(r,-127),128)].slice();u=m(u);let a=u.slice();return a=v(a),a=y(a),a=g(a),u=v(u),u=h(u),u=p(u),I(u)?[F(u),!0]:[P(a,(e=>p(e=h(e=M(e=x(e))))),(e=>g(e=y(e=d(e=f(e)))))),!1]}function S(e){const[t,n,r]=e;let u=[Math.min(Math.max(t,0),100),Math.min(Math.max(n,-127),128),Math.min(Math.max(r,-127),128)].slice();u=m(u);let a=u.slice();return a=v(a),a=y(a),a=g(a),u=v(u),u=c(u),u=s(u),I(u)?F(u).map((e=>Math.round(255*e))):P(a,(e=>s(e=c(e=M(e=x(e))))),(e=>g(e=y(e=l(e=i(e)))))).map((e=>Math.round(255*e)))}function O(e){let t=e.slice();t=b(t),t=m(t);let n=t.slice();return n=v(n),n=y(n),n=g(n),t=v(t),t=h(t),t=p(t),I(t)?[F(t),!0]:[P(n,(e=>p(e=h(e=M(e=x(e))))),(e=>g(e=y(e=d(e=f(e)))))),!1]}function A(e){let t=e.slice();t=b(t),t=m(t);let n=t.slice();return n=v(n),n=y(n),n=g(n),t=v(t),t=c(t),t=s(t),I(t)?F(t).map((e=>Math.round(255*e))):P(n,(e=>s(e=c(e=M(e=x(e))))),(e=>g(e=y(e=l(e=i(e)))))).map((e=>Math.round(255*e)))}function q(e){const t=e.value,n=e.nodes.slice().filter((e=>"comment"!==e.type&&"space"!==e.type));let r=null;if("lab"===t?r=G(n):"lch"===t&&(r=D(n)),!r)return;if(n.length>3&&(!r.slash||!r.alpha))return;e.value="rgb",function(e,t,n){if(!t||!n)return;if(e.value="rgba",t.value=",",t.before="",!function(e){if(!e||"word"!==e.type)return!1;if(!K(e))return!1;const t=u.default.unit(e.value);if(!t)return!1;return!!t.number}(n))return;const r=u.default.unit(n.value);if(!r)return;"%"===r.unit&&(r.number=String(parseFloat(r.number)/100),n.value=String(r.number))}(e,r.slash,r.alpha);const[a,o,i]=z(r),[s,l,c]=H(r),f=("lab"===t?S:A)([s.number,l.number,c.number].map((e=>parseFloat(e))));e.nodes.splice(e.nodes.indexOf(a)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),e.nodes.splice(e.nodes.indexOf(o)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),J(e.nodes,a,{...a,value:String(f[0])}),J(e.nodes,o,{...o,value:String(f[1])}),J(e.nodes,i,{...i,value:String(f[2])})}function B(e){if(!e||"word"!==e.type)return!1;if(!K(e))return!1;const t=u.default.unit(e.value);return!!t&&(!!t.number&&""===t.unit)}function E(e){if(!e||"word"!==e.type)return!1;if(!K(e))return!1;const t=u.default.unit(e.value);return!!t&&"%"===t.unit}function j(e){if(!e||"word"!==e.type)return!1;if(!K(e))return!1;const t=u.default.unit(e.value);return!!t&&("%"===t.unit||""===t.unit)}function k(e){return e&&"function"===e.type&&"calc"===e.value}function C(e){return e&&"function"===e.type&&"var"===e.value}function $(e){return e&&"div"===e.type&&"/"===e.value}function D(e){if(!E(e[0]))return null;if(!B(e[1]))return null;if(!function(e){if(!e||"word"!==e.type)return!1;if(!K(e))return!1;const t=u.default.unit(e.value);return!(!t||!t.number||"deg"!==t.unit&&"grad"!==t.unit&&"rad"!==t.unit&&"turn"!==t.unit&&""!==t.unit)}(e[2]))return null;const t={l:u.default.unit(e[0].value),lNode:e[0],c:u.default.unit(e[1].value),cNode:e[1],h:u.default.unit(e[2].value),hNode:e[2]};return function(e){switch(e.unit){case"deg":return void(e.unit="");case"rad":return e.unit="",void(e.number=(180*parseFloat(e.number)/Math.PI).toString());case"grad":return e.unit="",void(e.number=(.9*parseFloat(e.number)).toString());case"turn":e.unit="",e.number=(360*parseFloat(e.number)).toString()}}(t.h),""!==t.h.unit?null:($(e[3])&&(t.slash=e[3]),(j(e[4])||k(e[4])||C(e[4]))&&(t.alpha=e[4]),t)}function G(e){if(!E(e[0]))return null;if(!B(e[1]))return null;if(!B(e[2]))return null;const t={l:u.default.unit(e[0].value),lNode:e[0],a:u.default.unit(e[1].value),aNode:e[1],b:u.default.unit(e[2].value),bNode:e[2]};return $(e[3])&&(t.slash=e[3]),(j(e[4])||k(e[4])||C(e[4]))&&(t.alpha=e[4]),t}function L(e){return void 0!==e.a}function z(e){return L(e)?[e.lNode,e.aNode,e.bNode]:[e.lNode,e.cNode,e.hNode]}function H(e){return L(e)?[e.l,e.a,e.b]:[e.l,e.c,e.h]}function J(e,t,n){const r=e.indexOf(t);e[r]=n}function K(e){if(!e||!e.value)return!1;try{return!1!==u.default.unit(e.value)}catch(e){return!1}}function Q(e,t,n,r){let a;try{a=u.default(e)}catch(r){t.warn(n,`Failed to parse value '${e}' as a lab or lch function. Leaving the original value intact.`)}if(void 0===a)return;a.walk((e=>{e.type&&"function"===e.type&&("lab"!==e.value&&"lch"!==e.value||q(e))}));const o=String(a);if(o===e)return;const i=u.default(e);i.walk((e=>{e.type&&"function"===e.type&&("lab"!==e.value&&"lch"!==e.value||function(e,t,n,r){const a=u.default.stringify(e),o=e.value,i=e.nodes.slice().filter((e=>"comment"!==e.type&&"space"!==e.type));let s=null;if("lab"===o?s=G(i):"lch"===o&&(s=D(i)),!s)return;if(i.length>3&&(!s.slash||!s.alpha))return;e.value="color";const[l,c,f]=z(s),[p,d,h]=H(s),v="lab"===o?N:O,m=[p.number,d.number,h.number].map((e=>parseFloat(e))),[b,y]=v(m);!y&&r&&t.warn(n,`"${a}" is out of gamut for "display-p3". Given "preserve: true" is set, this will lead to unexpected results in some browsers.`),e.nodes.splice(0,0,{sourceIndex:0,sourceEndIndex:10,value:"display-p3",type:"word"}),e.nodes.splice(1,0,{sourceIndex:0,sourceEndIndex:1,value:" ",type:"space"}),J(e.nodes,l,{...l,value:b[0].toFixed(5)}),J(e.nodes,c,{...c,value:b[1].toFixed(5)}),J(e.nodes,f,{...f,value:b[2].toFixed(5)})}(e,t,n,r))}));return{rgb:o,displayP3:String(i)}}const R=e=>({postcssPlugin:"postcss-lab-function",Declaration:(t,{result:n})=>{if(function(e){const t=e.parent;if(!t)return!1;const n=t.index(e);for(let r=0;r<n;r++){const n=t.nodes[r];if("decl"===n.type&&n.prop===e.prop)return!0}return!1}(t))return;if(function(e){let t=e.parent;for(;t;)if("atrule"===t.type){if("supports"===t.name){if(-1!==t.params.indexOf("lab("))return!0;if(-1!==t.params.indexOf("lch("))return!0}t=t.parent}else t=t.parent;return!1}(t))return;const r=t.value;if(!/(^|[^\w-])(lab|lch)\(/i.test(r))return;const u=Q(r,t,n,e.preserve);void 0!==u&&(e.preserve?(t.cloneBefore({value:u.rgb}),e.subFeatures.displayP3&&t.cloneBefore({value:u.displayP3})):(t.cloneBefore({value:u.rgb}),e.subFeatures.displayP3&&t.cloneBefore({value:u.displayP3}),t.remove()))}});R.postcss=!0;const T=e=>{const t=Object.assign({enableProgressiveCustomProperties:!0,preserve:!1,subFeatures:{displayP3:!0}},e);return t.subFeatures=Object.assign({displayP3:!0},t.subFeatures),t.enableProgressiveCustomProperties&&(t.preserve||t.subFeatures.displayP3)?{postcssPlugin:"postcss-lab-function",plugins:[r.default(),R(t)]}:R(t)};T.postcss=!0,module.exports=T;
