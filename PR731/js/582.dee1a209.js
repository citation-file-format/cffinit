"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[582],{3957:(n,e,i)=>{i.r(e),i.d(e,{default:()=>y});var A=i(3673);function o(){var n="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinishMinimum.vue",e="adb4719f27082e7ffaa3b2303e2e254a29510471",i=new Function("return this")(),A="__coverage__",t={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinishMinimum.vue",statementMap:{0:{start:{line:2,column:29},end:{line:2,column:60}},1:{start:{line:4,column:0},end:{line:4,column:31}},2:{start:{line:5,column:19},end:{line:5,column:39}},3:{start:{line:6,column:19},end:{line:9,column:1}},4:{start:{line:10,column:19},end:{line:13,column:1}},5:{start:{line:14,column:19},end:{line:14,column:41}},6:{start:{line:15,column:19},end:{line:15,column:29}},7:{start:{line:16,column:32},end:{line:16,column:225}},8:{start:{line:17,column:32},end:{line:17,column:202}},9:{start:{line:18,column:19},end:{line:18,column:35}},10:{start:{line:19,column:19},end:{line:19,column:29}},11:{start:{line:20,column:33},end:{line:20,column:173}},12:{start:{line:21,column:0},end:{line:21,column:13}},13:{start:{line:23,column:35},end:{line:58,column:2}},14:{start:{line:24,column:36},end:{line:24,column:71}},15:{start:{line:25,column:27},end:{line:25,column:53}},16:{start:{line:27,column:2},end:{line:57,column:9}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:23,column:43},end:{line:23,column:44}},loc:{start:{line:23,column:94},end:{line:58,column:1}},line:23}},branchMap:{0:{loc:{start:{line:29,column:6},end:{line:31,column:68}},type:"cond-expr",locations:[{start:{line:30,column:11},end:{line:30,column:76}},{start:{line:31,column:11},end:{line:31,column:67}}],line:29},1:{loc:{start:{line:34,column:6},end:{line:55,column:13}},type:"cond-expr",locations:[{start:{line:35,column:11},end:{line:52,column:12}},{start:{line:53,column:11},end:{line:55,column:12}}],line:34},2:{loc:{start:{line:41,column:41},end:{line:41,column:86}},type:"cond-expr",locations:[{start:{line:41,column:69},end:{line:41,column:81}},{start:{line:41,column:84},end:{line:41,column:86}}],line:41}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},f:{0:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenFinishMinimum.vue"],names:["isValidCFF","q","showAdvanced"],mappings:";;;;qBACS,EAAE,EAAC,YAAY;;EADxB,KAAA;EAGY,KAAK,EAAC,cAAc;;;EAHhC,KAAA;EASY,KAAK,EAAC,cAAc;;qBAOvB,EAAE,EAAC,cAAc;qBAhB1B,KAAA;gCAkBY,aAEI,OAFD,KAAK,EAAC,kBAAkB,IAAC,2IAE5B;gCACA,aAEI,OAFD,KAAK,EAAC,kBAAkB,IAAC,oHAE5B;qBACK,KAAK,EAAC,KAAK;qBAxB5B,KAAA;iCAyCY,aAEI,OAFD,KAAK,EAAC,kBAAkB,IAAC,sFAE5B;;;;;;;wBA3CZ;IACI,aAaM,OAbN,UAaM;OAVQA,eAAU;yBAFpB,aAKK,MALL,UAKK,EAFJ,mBAED;yBACA,aAKK,MALL,UAKK,EAFJ,UAED;;IAGJ,aA6BM,OA7BN,UA6BM;OA5BSA,eAAU;yBAArB,aAsBM,OAvCd;YAkBY,UAEI;YACJ,UAEI;YACJ,aAcM,OAdN,UAcM;cAbF,aAAwC,6BAAxB,KAAK,EAAC,eAAe;cACrC,aAWE;gBAVE,KAAK,GAAC,eAAe,EASPC,MAAC,CAAC,QAAQ,CAAC,EAAE,CAAC,MAAM;gBARlC,KAAK,EAAC,SAAS;gBACf,SAAO,EAAC,cAAc;gBACtB,IAAI,EAAC,mBAAmB;gBACxB,KAAK,EAAC,UAAU;gBAChB,SAAO,EAAP,EAAO;gBACP,IAAI,EAAC,IAAI;gBACT,EAAE,EAAC,cAAc;gBACZ,OAAK,EAAEC,iBAAY;;;;yBAKpC,aAIM,OA5Cd;YAyCY,WAEI",sourcesContent:['\n    <div id="form-title">\n        <h1\n            class="finish-title"\n            v-if="isValidCFF"\n        >\n            Congratulations\n        </h1>\n        <h1\n            class="finish-title"\n            v-else\n        >\n            Uh-oh!\n        </h1>\n    </div>\n\n    <div id="form-content">\n        <div v-if="isValidCFF">\n            <p class="finish-paragraph">\n                You now have a minimal CITATION.cff file. Use the buttons below to download your CITATION.cff file, or continue adding more properties.\n            </p>\n            <p class="finish-paragraph">\n                Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository.\n            </p>\n            <div class="row">\n                <DownloadButton class="col-4 q-ma-lg" />\n                <q-btn\n                    class="col-4 q-ma-lg"\n                    color="primary"\n                    data-cy="btn-add-more"\n                    icon="workspace_premium"\n                    label="Add more"\n                    no-caps\n                    size="xl"\n                    to="/identifiers"\n                    v-on:click="showAdvanced"\n                    v-bind:class="q.platform.is.mobile ? \'full-width\' : \'\'"\n                />\n            </div>\n        </div>\n        <div v-else>\n            <p class="finish-paragraph">\n                Your CITATION.cff is not valid just yet. Go back to the form to make some changes.\n            </p>\n        </div>\n    </div>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"adb4719f27082e7ffaa3b2303e2e254a29510471"},l=i[A]||(i[A]={});l[n]&&l[n].hash===e||(l[n]=t);var a=l[n];return o=function(){return a},a}o();const t=(o().s[0]++,(0,A.HX)("data-v-7f366d52"));o().s[1]++,(0,A.dD)("data-v-7f366d52");const l=(o().s[2]++,{id:"form-title"}),a=(o().s[3]++,{key:0,class:"finish-title"}),c=(o().s[4]++,{key:1,class:"finish-title"}),s=(o().s[5]++,{id:"form-content"}),r=(o().s[6]++,{key:0}),u=(o().s[7]++,(0,A.Wm)("p",{class:"finish-paragraph"}," You now have a minimal CITATION.cff file. Use the buttons below to download your CITATION.cff file, or continue adding more properties. ",-1)),m=(o().s[8]++,(0,A.Wm)("p",{class:"finish-paragraph"}," Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository. ",-1)),d=(o().s[9]++,{class:"row"}),f=(o().s[10]++,{key:1}),C=(o().s[11]++,(0,A.Wm)("p",{class:"finish-paragraph"}," Your CITATION.cff is not valid just yet. Go back to the form to make some changes. ",-1));o().s[12]++,(0,A.Cn)();const p=(o().s[13]++,t(((n,e,i,t,p,h)=>{o().f[0]++;const v=(o().s[14]++,(0,A.up)("DownloadButton")),B=(o().s[15]++,(0,A.up)("q-btn"));return o().s[16]++,(0,A.wg)(),(0,A.j4)(A.HY,null,[(0,A.Wm)("div",l,[n.isValidCFF?(o().b[0][0]++,(0,A.wg)(),(0,A.j4)("h1",a," Congratulations ")):(o().b[0][1]++,(0,A.wg)(),(0,A.j4)("h1",c," Uh-oh! "))]),(0,A.Wm)("div",s,[n.isValidCFF?(o().b[1][0]++,(0,A.wg)(),(0,A.j4)("div",r,[u,m,(0,A.Wm)("div",d,[(0,A.Wm)(v,{class:"col-4 q-ma-lg"}),(0,A.Wm)(B,{class:["col-4 q-ma-lg",n.q.platform.is.mobile?(o().b[2][0]++,"full-width"):(o().b[2][1]++,"")],color:"primary","data-cy":"btn-add-more",icon:"workspace_premium",label:"Add more","no-caps":"",size:"xl",to:"/identifiers",onClick:n.showAdvanced},null,8,["onClick","class"])])])):(o().b[1][1]++,(0,A.wg)(),(0,A.j4)("div",f,[C]))])],64)})));var h=i(9050),v=i(9999),B=i(8825),E=i(8875),b=function(n,e,i,A){function o(n){return n instanceof i?n:new i((function(e){e(n)}))}return new(i||(i=Promise))((function(i,t){function l(n){try{c(A.next(n))}catch(e){t(e)}}function a(n){try{c(A["throw"](n))}catch(e){t(e)}}function c(n){n.done?i(n.value):o(n.value).then(l,a)}c((A=A.apply(n,e||[])).next())}))};const g=(0,A.aZ)({name:"ScreenFinishMinimum",components:{DownloadButton:h.Z},setup(){const{setShowAdvanced:n,setStepName:e}=(0,v.q)(),{errors:i}=(0,E.V)(),o=(0,B.Z)();return{q:o,isValidCFF:(0,A.Fl)((()=>0===i.value.length)),showAdvanced:()=>b(this,void 0,void 0,(function*(){n(!0),yield e("identifiers")}))}}});var w=i(8240),I=i(7518),K=i.n(I);g.render=p,g.__scopeId="data-v-7f366d52";const y=g;K()(g,"components",{QBtn:w.Z})}}]);