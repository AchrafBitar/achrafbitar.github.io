import{r as l}from"./index.DiEladB3.js";var c={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function C(){if(p)return u;p=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(a,o,t){var i=null;if(t!==void 0&&(i=""+t),o.key!==void 0&&(i=""+o.key),"key"in o){t={};for(var n in o)n!=="key"&&(t[n]=o[n])}else t=o;return o=t.ref,{$$typeof:e,type:a,key:i,ref:o!==void 0?o:null,props:t}}return u.Fragment=r,u.jsx=s,u.jsxs=s,u}var d;function E(){return d||(d=1,c.exports=C()),c.exports}var L=E();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(...e)=>e.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>{const r=w(e);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:t,iconNode:i,...n},f)=>l.createElement("svg",{ref:f,...k,width:r,height:r,stroke:e,strokeWidth:a?Number(s)*24/Number(r):s,className:m("lucide",o),...!t&&!A(n)&&{"aria-hidden":"true"},...n},[...i.map(([R,v])=>l.createElement(R,v)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,r)=>{const s=l.forwardRef(({className:a,...o},t)=>l.createElement(j,{ref:t,iconNode:r,className:m(`lucide-${h(x(e))}`,`lucide-${e}`,a),...o}));return s.displayName=x(e),s};export{T as c,L as j};
