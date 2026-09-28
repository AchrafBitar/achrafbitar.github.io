import{r as d}from"./index.-iFofLld.js";var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function v(){if(h)return c;h=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function o(l,r,a){var e=null;if(a!==void 0&&(e=""+a),r.key!==void 0&&(e=""+r.key),"key"in r){a={};for(var i in r)i!=="key"&&(a[i]=r[i])}else a=r;return r=a.ref,{$$typeof:n,type:l,key:e,ref:r!==void 0?r:null,props:a}}return c.Fragment=t,c.jsx=o,c.jsxs=o,c}var m;function j(){return m||(m=1,u.exports=v()),u.exports}var s=j();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p=(...n)=>n.filter((t,o,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=d.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:r="",children:a,iconNode:e,...i},f)=>d.createElement("svg",{ref:f,...E,width:t,height:t,stroke:n,strokeWidth:l?Number(o)*24/Number(t):o,className:p("lucide",r),...i},[...e.map(([b,y])=>d.createElement(b,y)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(n,t)=>{const o=d.forwardRef(({className:l,...r},a)=>d.createElement(w,{ref:a,iconNode:t,className:p(`lucide-${g(n)}`,l),...r}));return o.displayName=`${n}`,o};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],R=x("Menu",N);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],C=x("Moon",_);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],S=x("Sun",M);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],A=x("X",$),k=[{href:"#about",label:"About"},{href:"#expertise",label:"Expertise"},{href:"#experience",label:"Experience"},{href:"#projects",label:"Projects"},{href:"#contact",label:"Contact"}];function L({initials:n}){const[t,o]=d.useState(!1),[l,r]=d.useState(!0);d.useEffect(()=>{r(document.documentElement.classList.contains("dark"))},[]);const a=()=>{const e=!l;r(e),document.documentElement.classList.toggle("dark",e);try{localStorage.setItem("theme",e?"dark":"light")}catch{}};return s.jsxs("header",{className:"fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/85",children:[s.jsxs("nav",{className:"mx-auto flex h-16 max-w-5xl items-center justify-between px-6",children:[s.jsx("a",{href:"#top",className:"font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white",children:n}),s.jsx("div",{className:"hidden items-center gap-8 md:flex",children:k.map(e=>s.jsx("a",{href:e.href,className:"text-sm text-slate-600 transition-colors hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400",children:e.label},e.href))}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{type:"button",onClick:a,"aria-label":l?"Switch to light theme":"Switch to dark theme",className:"rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800",children:l?s.jsx(S,{size:18}):s.jsx(C,{size:18})}),s.jsx("button",{type:"button",onClick:()=>o(e=>!e),"aria-label":t?"Close menu":"Open menu","aria-expanded":t,className:"rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-200 md:hidden dark:text-slate-400 dark:hover:bg-slate-800",children:t?s.jsx(A,{size:18}):s.jsx(R,{size:18})})]})]}),t&&s.jsx("div",{className:"border-t border-slate-200 bg-slate-50 px-6 py-3 md:hidden dark:border-slate-800 dark:bg-slate-900",children:k.map(e=>s.jsx("a",{href:e.href,onClick:()=>o(!1),className:"block py-2 text-sm text-slate-600 dark:text-slate-400",children:e.label},e.href))})]})}export{L as default};
