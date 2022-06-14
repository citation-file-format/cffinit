(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var a=t(8880),r=t(3525),o=t(3673);function i(e,n,t,a,r,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}const l={name:"App"};l.render=i;const s=l;var d=t(9999),c=t(9582),p=t(7083);const u=[{path:"/",component:()=>Promise.all([t.e(736),t.e(499)]).then(t.bind(t,3499))},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(499)]).then(t.bind(t,3499))},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(584)]).then(t.bind(t,4741))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(564)]).then(t.bind(t,7871))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(555)]).then(t.bind(t,4904))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(730)]).then(t.bind(t,6872))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(683)]).then(t.bind(t,9373))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(687)]).then(t.bind(t,1884))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(359)]).then(t.bind(t,3926))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(982)]).then(t.bind(t,6351))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(703)]).then(t.bind(t,5884))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(283)]).then(t.bind(t,3283)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(654)]).then(t.bind(t,5797))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],h=u,f=(0,p.BC)((()=>{const e=c.r5,n=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/cff-initializer-javascript/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,d.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,a=e(s);return a.use(r.Z,n),{app:a,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",prose:"#333",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F9E3A4"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(a.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>h});var a=t(1959),r=t(3673),o=t(9582),i=function(e,n,t,a){function r(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{s(a.next(e))}catch(n){o(n)}}function l(e){try{s(a["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):r(e.value).then(i,l)}s((a=a.apply(e,n||[])).next())}))};const l=(0,a.iH)({showAdvanced:!1,stepIndex:0}),s=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],d=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),c=0,p=(0,r.Fl)((()=>l.value.showAdvanced?s.indexOf("finish-advanced"):s.indexOf("finish-minimum"))),u=(0,r.Fl)((()=>s[l.value.stepIndex])),h=()=>{const e=(0,o.tv)();return{cannotGoBack:(0,r.Fl)((()=>l.value.stepIndex===c)),cannotGoForward:(0,r.Fl)((()=>l.value.stepIndex===p.value)),lastStepIndex:p,showAdvanced:(0,r.Fl)((()=>l.value.showAdvanced)),stepName:u,navigateDirect:e=>{s.includes(e)&&(d.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=s.indexOf(e))},setStepName:n=>i(void 0,void 0,void 0,(function*(){l.value.stepIndex=s.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(void 0,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===u.value&&l.value.stepIndex++,l.value.stepIndex<p.value&&(l.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(void 0,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===u.value&&l.value.stepIndex--,l.value.stepIndex>c&&(l.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(n,a,r,o)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){for(var[a,r,o]=e[c],l=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](a[s])))?a.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=r();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,a)=>(t.f[a](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"a5951638",209:"f01261f2",283:"3dfa8eb2",359:"aa9542bc",499:"ce9e2a3a",555:"13ad42ed",564:"08b878a4",584:"00901bd9",654:"bae84a55",683:"2277ea00",687:"d502b273",703:"b6dd2eff",730:"c554a7f6",982:"709cb93d"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{283:"ad03b2ea",359:"b9ec7213",499:"33c8ae6b",555:"da226717",564:"b0d10fad",584:"4d68915b",654:"cbcb5c12",683:"f11b6b21",687:"f11b6b21",703:"f11b6b21",730:"747347f0",736:"540f306d",982:"f11b6b21"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(a,r,o,i)=>{if(e[a])e[a].push(r);else{var l,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==n+o){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+o),l.src=a),e[a]=[r];var u=(n,t)=>{l.onerror=l.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(t))),n)return n(t)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/cff-initializer-javascript/"})(),(()=>{var e=(e,n,t,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=o=>{if(r.onerror=r.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode.removeChild(r),a(s)}};return r.onerror=r.onload=o,r.href=n,document.head.appendChild(r),r},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var r=t[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===n))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===n)return r}},a=a=>new Promise(((r,o)=>{var i=t.miniCssF(a),l=t.p+i;if(n(i,l))return r();e(a,l,r,o)})),r={143:0};t.f.miniCss=(e,n)=>{var t={283:1,359:1,499:1,555:1,564:1,584:1,654:1,683:1,687:1,703:1,730:1,982:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=a(e).then((()=>{r[e]=0}),(n=>{throw delete r[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,a)=>{var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise(((t,a)=>r=e[n]=[t,a]));a.push(r[2]=o);var i=t.p+t.u(n),l=new Error,s=a=>{if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,a)=>{var r,o,[i,l,s]=a,d=0;for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var c=s(t);for(n&&n(a);d<i.length;d++)o=i[d],t.o(e,o)&&e[o]&&e[o][0](),e[i[d]]=0;return t.O(c)},a=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})();var a=t.O(void 0,[736],(()=>t(7122)));a=t.O(a)})();