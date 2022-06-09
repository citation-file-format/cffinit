(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),a=t(3525),o=t(3673);function i(e,n,t,r,a,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}const l={name:"App"};l.render=i;const c=l;var s=t(9999),d=t(9582),p=t(7083);const u=[{path:"/",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(417)]).then(t.bind(t,9417))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(915)]).then(t.bind(t,8586))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(854)]).then(t.bind(t,7635))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(111)]).then(t.bind(t,8133))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(275)]).then(t.bind(t,4819))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(685)]).then(t.bind(t,9373))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(139)]).then(t.bind(t,1884))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(923)]).then(t.bind(t,3926))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(110)]).then(t.bind(t,8165))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(229)]).then(t.bind(t,5966))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(228)]).then(t.bind(t,6228)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(172)]).then(t.bind(t,5724))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],h=u,f=(0,p.BC)((()=>{const e=d.r5,n=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/PR552/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,s.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(c);return r.use(a.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",prose:"#333",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>h});var r=t(1959),a=t(3673),o=t(9582),i=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{c(r.next(e))}catch(n){o(n)}}function l(e){try{c(r["throw"](e))}catch(n){o(n)}}function c(e){e.done?t(e.value):a(e.value).then(i,l)}c((r=r.apply(e,n||[])).next())}))};const l=(0,r.iH)({showAdvanced:!1,stepIndex:0}),c=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],s=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),d=0,p=(0,a.Fl)((()=>l.value.showAdvanced?c.indexOf("finish-advanced"):c.indexOf("finish-minimum"))),u=(0,a.Fl)((()=>c[l.value.stepIndex])),h=()=>{const e=(0,o.tv)();return{cannotGoBack:(0,a.Fl)((()=>l.value.stepIndex===d)),cannotGoForward:(0,a.Fl)((()=>l.value.stepIndex===p.value)),lastStepIndex:p,showAdvanced:(0,a.Fl)((()=>l.value.showAdvanced)),stepName:u,navigateDirect:e=>{c.includes(e)&&(s.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=c.indexOf(e))},setStepName:n=>i(void 0,void 0,void 0,(function*(){l.value.stepIndex=c.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(void 0,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===u.value&&l.value.stepIndex++,l.value.stepIndex<p.value&&(l.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(void 0,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===u.value&&l.value.stepIndex--,l.value.stepIndex>d&&(l.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,r,a,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](r[c])))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(d--,1);var s=a();void 0!==s&&(n=s)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"ccf6c381",110:"0564e577",111:"7b49af4c",139:"3b7c800e",172:"b0c7f4ba",209:"f01261f2",228:"decba67f",229:"c153dd9a",275:"43a00c34",417:"6bcd590e",685:"13ace9db",854:"aae16eeb",915:"f5cffae3",923:"9e9cf4d5"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{110:"9c2c9059",111:"4846017f",139:"9c2c9059",172:"e1f41091",228:"6d5c499b",229:"9c2c9059",275:"1fa2fc14",417:"e3c90584",685:"9c2c9059",736:"540f306d",854:"fee29f1b",915:"7fab432b",923:"3037bc29"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var p=s[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+o){l=p;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+o),l.src=r),e[r]=[a];var u=(n,t)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(t))),n)return n(t)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/PR552/"})(),(()=>{var e=(e,n,t,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===n)return a}},r=r=>new Promise(((a,o)=>{var i=t.miniCssF(r),l=t.p+i;if(n(i,l))return a();e(r,l,a,o)})),a={143:0};t.f.miniCss=(e,n)=>{var t={110:1,111:1,139:1,172:1,228:1,229:1,275:1,417:1,685:1,854:1,915:1,923:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=r(e).then((()=>{a[e]=0}),(n=>{throw delete a[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((t,r)=>a=e[n]=[t,r]));r.push(a[2]=o);var i=t.p+t.u(n),l=new Error,c=r=>{if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var a,o,[i,l,c]=r,s=0;for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(c)var d=c(t);for(n&&n(r);s<i.length;s++)o=i[s],t.o(e,o)&&e[o]&&e[o][0](),e[i[s]]=0;return t.O(d)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();