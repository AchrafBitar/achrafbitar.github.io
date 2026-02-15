import{c as d,j as e}from"./createLucideIcon.K_D3khf4.js";import{r as o}from"./index.DiEladB3.js";/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],m=d("menu",l);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],i=d("moon",h);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],p=d("sun",x);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],u=d("x",k);function c(){const[a,r]=o.useState("light");o.useEffect(()=>{const t=localStorage.getItem("theme");t?(r(t),document.documentElement.classList.toggle("dark",t==="dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(r("dark"),document.documentElement.classList.add("dark"))},[]);const n=()=>{const t=a==="light"?"dark":"light";r(t),localStorage.setItem("theme",t),document.documentElement.classList.toggle("dark")};return e.jsx("button",{onClick:n,className:"p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors","aria-label":"Toggle Dark Mode",children:a==="light"?e.jsx(i,{size:20}):e.jsx(p,{size:20})})}function g(){const[a,r]=o.useState(!1),n=()=>r(!a),t=[{name:"About",href:"#about"},{name:"Expertise",href:"#expertise"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}];return e.jsxs("header",{className:"sticky top-0 z-50 bg-cream-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex-shrink-0 flex items-center",children:e.jsx("a",{href:"#",className:"font-serif text-2xl font-bold text-slate-900 dark:text-cream-50",children:"AB"})}),e.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[e.jsx("nav",{children:e.jsx("ul",{className:"flex space-x-6",children:t.map(s=>e.jsx("li",{children:e.jsx("a",{href:s.href,className:"text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-sm font-medium",children:s.name})},s.name))})}),e.jsx(c,{})]}),e.jsxs("div",{className:"md:hidden flex items-center",children:[e.jsx(c,{}),e.jsx("button",{onClick:n,className:"ml-4 p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none",children:a?e.jsx(u,{size:24}):e.jsx(m,{size:24})})]})]})}),a&&e.jsx("div",{className:"md:hidden bg-cream-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800",children:e.jsx("nav",{className:"px-2 pt-2 pb-4 space-y-1 sm:px-3",children:t.map(s=>e.jsx("a",{href:s.href,className:"block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800",onClick:()=>r(!1),children:s.name},s.name))})})]})}export{g as default};
