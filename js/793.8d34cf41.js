"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[793],{1793:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var o=t(3673);function i(){var n="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinish.vue",e="b055756d2dcb4a1ffbc775893199a9bb7eda97bd",t=new Function("return this")(),o="__coverage__",A={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinish.vue",statementMap:{0:{start:{line:3,column:19},end:{line:7,column:1}},1:{start:{line:8,column:19},end:{line:12,column:1}},2:{start:{line:13,column:19},end:{line:13,column:29}},3:{start:{line:14,column:32},end:{line:14,column:155}},4:{start:{line:15,column:32},end:{line:15,column:177}},5:{start:{line:16,column:19},end:{line:16,column:62}},6:{start:{line:17,column:19},end:{line:17,column:50}},7:{start:{line:18,column:19},end:{line:18,column:29}},8:{start:{line:19,column:32},end:{line:19,column:147}},9:{start:{line:22,column:36},end:{line:22,column:71}},10:{start:{line:23,column:27},end:{line:23,column:53}},11:{start:{line:25,column:2},end:{line:49,column:9}}},fnMap:{0:{name:"render",decl:{start:{line:21,column:16},end:{line:21,column:22}},loc:{start:{line:21,column:70},end:{line:50,column:1}},line:21}},branchMap:{0:{loc:{start:{line:26,column:4},end:{line:28,column:66}},type:"cond-expr",locations:[{start:{line:27,column:9},end:{line:27,column:74}},{start:{line:28,column:9},end:{line:28,column:65}}],line:26},1:{loc:{start:{line:29,column:4},end:{line:48,column:11}},type:"cond-expr",locations:[{start:{line:30,column:9},end:{line:45,column:10}},{start:{line:46,column:9},end:{line:48,column:10}}],line:29}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinish.vue"],names:["isValidCFF","confirmAndReset"],mappings:";;;EAAA,KAAA;EAEQ,EAAE,EAAC,YAAY;EAEf,QAAQ,EAAC,IAAI;;;EAJrB,KAAA;EASQ,EAAE,EAAC,YAAY;EAEf,QAAQ,EAAC,IAAI;;qBAXrB,KAAA;gCAiBQ,aAEI,WAFD,8FAEH;gCACA,aAEI,WAFD,oHAEH;qBACK,KAAK,EAAC,gCAAgC;qBAGtC,KAAK,EAAC,oBAAoB;qBA1BvC,KAAA;gCAqCQ,aAEI,WAFD,sFAEH;;;;;;wBAvCR;KAGcA,eAAU;uBAFpB,aAMK,MANL,UAMK,EAFJ,mBAED;uBACA,aAMK,MANL,UAMK,EAFJ,UAED;KAEWA,eAAU;uBAArB,aAmBM,OAnCV;UAiBQ,UAEI;UACJ,UAEI;UACJ,aAEM,OAFN,UAEM;YADF,aAAkB;;UAEtB,aAQM,OARN,UAQM;YAPF,aAME;cALE,KAAK,EAAC,yDAAyD;cAC/D,IAAI,EAAC,SAAS;cACd,KAAK,EAAC,YAAY;cAClB,SAAO,EAAP,EAAO;cACF,OAAK,EAAEC,oBAAe;;;;uBAIvC,aAIM,OAxCV;UAqCQ,UAEI",sourcesContent:['\n    <h1\n        id="form-title"\n        v-if="isValidCFF"\n        tabindex="-1"\n    >\n        Congratulations\n    </h1>\n    <h1\n        id="form-title"\n        v-else\n        tabindex="-1"\n    >\n        Uh-oh!\n    </h1>\n\n    <div v-if="isValidCFF">\n        <p>\n            Use the buttons below to download your CITATION.cff file, or reset the form to start over.\n        </p>\n        <p>\n            Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository.\n        </p>\n        <div class="row q-gutter-md justify-center">\n            <DownloadButton />\n        </div>\n        <div class="row justify-center">\n            <q-btn\n                class="q-mt-md q-mb-md rounded-borders bg-secondary text-white"\n                icon="refresh"\n                label="Reset form"\n                no-caps\n                v-on:click="confirmAndReset"\n            />\n        </div>\n    </div>\n    <div v-else>\n        <p>\n            Your CITATION.cff is not valid just yet. Go back to the form to make some changes.\n        </p>\n    </div>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b055756d2dcb4a1ffbc775893199a9bb7eda97bd"},l=t[o]||(t[o]={});l[n]&&l[n].hash===e||(l[n]=A);var r=l[n];return i=function(){return r},r}i();const A=(i().s[0]++,{key:0,id:"form-title",tabindex:"-1"}),l=(i().s[1]++,{key:1,id:"form-title",tabindex:"-1"}),r=(i().s[2]++,{key:2}),s=(i().s[3]++,(0,o.Wm)("p",null," Use the buttons below to download your CITATION.cff file, or reset the form to start over. ",-1)),c=(i().s[4]++,(0,o.Wm)("p",null," Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository. ",-1)),a=(i().s[5]++,{class:"row q-gutter-md justify-center"}),u=(i().s[6]++,{class:"row justify-center"}),d=(i().s[7]++,{key:3}),m=(i().s[8]++,(0,o.Wm)("p",null," Your CITATION.cff is not valid just yet. Go back to the form to make some changes. ",-1));function f(n,e,t,f,C,b){i().f[0]++;const h=(i().s[9]++,(0,o.up)("DownloadButton")),p=(i().s[10]++,(0,o.up)("q-btn"));return i().s[11]++,(0,o.wg)(),(0,o.j4)(o.HY,null,[n.isValidCFF?(i().b[0][0]++,(0,o.wg)(),(0,o.j4)("h1",A," Congratulations ")):(i().b[0][1]++,(0,o.wg)(),(0,o.j4)("h1",l," Uh-oh! ")),n.isValidCFF?(i().b[1][0]++,(0,o.wg)(),(0,o.j4)("div",r,[s,c,(0,o.Wm)("div",a,[(0,o.Wm)(h)]),(0,o.Wm)("div",u,[(0,o.Wm)(p,{class:"q-mt-md q-mb-md rounded-borders bg-secondary text-white",icon:"refresh",label:"Reset form","no-caps":"",onClick:n.confirmAndReset},null,8,["onClick"])])])):(i().b[1][1]++,(0,o.wg)(),(0,o.j4)("div",d,[m]))],64)}var C=t(8763),b=t(9999),h=t(1364),p=t(8825),E=t(8875);const v=(0,o.aZ)({name:"ScreenFinish",components:{DownloadButton:C.Z},setup(){const{setStepName:n,resetState:e}=(0,b.q)(),{reset:t}=(0,h.v)(),{errors:i}=(0,E.V)(),A=(0,p.Z)();return{confirmAndReset:()=>{A.dialog({title:"Confirm",message:"Would you like to reset the form? All changes will be lost.",cancel:!0,persistent:!0}).onOk((()=>{t(),e(),n("start")}))},isValidCFF:(0,o.Fl)((()=>0===i.value.length))}}});var F=t(8240),w=t(7518),B=t.n(w);v.render=f;const g=v;B()(v,"components",{QBtn:F.Z})}}]);