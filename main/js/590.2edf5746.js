"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[590],{9590:(n,e,o)=>{o.r(e),o.d(e,{default:()=>I});var A=o(3673);function l(){var n="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenKeywords.vue",e="4d68ea648d4206070532411e29c8ba9f39dd4271",o=new Function("return this")(),A="__coverage__",r={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenKeywords.vue",statementMap:{0:{start:{line:3,column:32},end:{line:6,column:20}},1:{start:{line:7,column:32},end:{line:7,column:86}},2:{start:{line:8,column:32},end:{line:8,column:83}},3:{start:{line:9,column:32},end:{line:9,column:65}},4:{start:{line:12,column:32},end:{line:12,column:63}},5:{start:{line:13,column:29},end:{line:13,column:57}},6:{start:{line:14,column:27},end:{line:14,column:53}},7:{start:{line:15,column:41},end:{line:15,column:81}},8:{start:{line:17,column:2},end:{line:55,column:9}},9:{start:{line:27,column:10},end:{line:37,column:117}},10:{start:{line:33,column:35},end:{line:33,column:88}},11:{start:{line:34,column:33},end:{line:34,column:84}},12:{start:{line:35,column:40},end:{line:35,column:65}},13:{start:{line:36,column:33},end:{line:36,column:63}},14:{start:{line:49,column:30},end:{line:51,column:7}}},fnMap:{0:{name:"render",decl:{start:{line:11,column:16},end:{line:11,column:22}},loc:{start:{line:11,column:70},end:{line:56,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:26,column:84},end:{line:26,column:85}},loc:{start:{line:26,column:104},end:{line:38,column:9}},line:26},2:{name:"(anonymous_2)",decl:{start:{line:33,column:24},end:{line:33,column:25}},loc:{start:{line:33,column:35},end:{line:33,column:88}},line:33},3:{name:"(anonymous_3)",decl:{start:{line:34,column:22},end:{line:34,column:23}},loc:{start:{line:34,column:33},end:{line:34,column:84}},line:34},4:{name:"(anonymous_4)",decl:{start:{line:35,column:29},end:{line:35,column:30}},loc:{start:{line:35,column:40},end:{line:35,column:65}},line:35},5:{name:"(anonymous_5)",decl:{start:{line:36,column:22},end:{line:36,column:23}},loc:{start:{line:36,column:33},end:{line:36,column:63}},line:36},6:{name:"(anonymous_6)",decl:{start:{line:49,column:24},end:{line:49,column:25}},loc:{start:{line:49,column:30},end:{line:51,column:7}},line:49}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/ScreenKeywords.vue"],names:["keywords","moveDown","setKeywords","moveUp","removeKeyword","setKeyword","addKeyword","keywordsErrors"],mappings:";;gCAAA,aAKS;EAJD,EAAE,EAAC,YAAY;EACf,QAAQ,EAAC,IAAI;GAChB,YAED;gCALJ,iBAOO,oCAEC;gCAGA,aAAuB,UAAjB,KAAK,EAAC,QAAQ;gCAZ5B,iBAmCK,eAED;;;;;;;;wBArCJ;IAAA,UAKS;IAEL,aAGI;MAVR;MASQ,aAA8B,yBAAlB,IAAI,EAAC,UAAU;;IAE/B,aAgBM;MAfF,UAAuB;MACvB,aAaM;2BAZF,aAWE,iBAzBd,YAoB2CA,aAAQ,EApBnD,CAoBwB,OAAO,EAAE,KAAK;gCAN1B,aAWE;YAVE,KAAK,EAAC,SAAS;YACR,GAAG,EAAE,KAAK;YACV,OAAO,EAAE,OAAO;YAChB,KAAK,EAAE,KAAK;YACZ,cAAY,EAAEA,aAAQ,CAAC,MAAM;YAE/B,UAAQ,aAAEC,aAAQ,CAAC,KAAK,EAAED,aAAQ,EAAEE,gBAAW;YAC/C,QAAM,aAAEC,WAAM,CAAC,KAAK,EAAEH,aAAQ,EAAEE,gBAAW;YAC3C,eAAa,aAAEE,kBAAa,CAAC,KAAK;YAClC,QAAM,aAAEC,eAAU,CAAC,KAAK,EAAE,MAAM;;;;;IAIjD,aASQ;MARJ,KAAK,EAAC,iCAAiC;MACvC,KAAK,EAAC,WAAW;MACjB,SAAO,EAAC,iBAAiB;MACzB,SAAO,EAAP,EAAO;MACP,KAA0B,EAA1B,uBAA0B;MACrB,OAAK,EAAEC,eAAU;;MAlC9B,kBAmCK,CAED;QArCJ;;MAAA,GAAA;;IAuCI,aAA8D,kCAAlC,gBAAc,EAAEC,mBAAc",sourcesContent:['<h1\n        id="form-title"\n        tabindex="-1"\n    >\n        Keywords\n    </h1>\n\n    <p>\n        What keywords describe the work?\n        <InfoDialog name="keywords" />\n    </p>\n    <div>\n        <span class="bottom" />\n        <div>\n            <Keyword\n                class="q-mr-lg"\n                v-bind:key="index"\n                v-bind:keyword="keyword"\n                v-bind:index="index"\n                v-bind:num-keywords="keywords.length"\n                v-for="(keyword, index) in keywords"\n                v-on:moveDown="moveDown(index, keywords, setKeywords)"\n                v-on:moveUp="moveUp(index, keywords, setKeywords)"\n                v-on:removePressed="removeKeyword(index)"\n                v-on:update="setKeyword(index, $event)"\n            />\n        </div>\n    </div>\n    <q-btn\n        class="q-mt-md q-mb-md rounded-borders"\n        color="secondary"\n        data-cy="btn-add-keyword"\n        no-caps\n        style="width: max-content"\n        v-on:click="addKeyword"\n    >\n        Add keyword\n    </q-btn>\n\n    <BannerErrorMessages v-bind:error-messages="keywordsErrors" />']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4d68ea648d4206070532411e29c8ba9f39dd4271"},a=o[A]||(o[A]={});a[n]&&a[n].hash===e||(a[n]=r);var i=a[n];return l=function(){return i},i}l();const r=(l().s[0]++,(0,A.Wm)("h1",{id:"form-title",tabindex:"-1"}," Keywords ",-1)),a=(l().s[1]++,(0,A.Uk)(" What keywords describe the work? ")),i=(l().s[2]++,(0,A.Wm)("span",{class:"bottom"},null,-1)),t=(l().s[3]++,(0,A.Uk)(" Add keyword "));function d(n,e,o,d,c,s){l().f[0]++;const m=(l().s[4]++,(0,A.up)("InfoDialog")),u=(l().s[5]++,(0,A.up)("Keyword")),v=(l().s[6]++,(0,A.up)("q-btn")),y=(l().s[7]++,(0,A.up)("BannerErrorMessages"));return l().s[8]++,(0,A.wg)(),(0,A.j4)(A.HY,null,[r,(0,A.Wm)("p",null,[a,(0,A.Wm)(m,{name:"keywords"})]),(0,A.Wm)("div",null,[i,(0,A.Wm)("div",null,[((0,A.wg)(!0),(0,A.j4)(A.HY,null,(0,A.Ko)(n.keywords,((e,o)=>(l().f[1]++,l().s[9]++,(0,A.wg)(),(0,A.j4)(u,{class:"q-mr-lg",key:o,keyword:e,index:o,"num-keywords":n.keywords.length,onMoveDown:e=>(l().f[2]++,l().s[10]++,n.moveDown(o,n.keywords,n.setKeywords)),onMoveUp:e=>(l().f[3]++,l().s[11]++,n.moveUp(o,n.keywords,n.setKeywords)),onRemovePressed:e=>(l().f[4]++,l().s[12]++,n.removeKeyword(o)),onUpdate:e=>(l().f[5]++,l().s[13]++,n.setKeyword(o,e))},null,8,["keyword","index","num-keywords","onMoveDown","onMoveUp","onRemovePressed","onUpdate"])))),128))])]),(0,A.Wm)(v,{class:"q-mt-md q-mb-md rounded-borders",color:"secondary","data-cy":"btn-add-keyword","no-caps":"",style:{width:"max-content"},onClick:n.addKeyword},{default:(0,A.w5)((()=>(l().f[6]++,l().s[14]++,[t]))),_:1},8,["onClick"]),(0,A.Wm)(y,{"error-messages":n.keywordsErrors},null,8,["error-messages"])],64)}var c=o(7996),s=o(2064),m=o(9894),u=o(7180);function v(){var n="/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/Keyword.vue",e="8ba6adb3bcb3fd07d9a73f164576e42a6bf493b0",o=new Function("return this")(),A="__coverage__",l={path:"/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/Keyword.vue",statementMap:{0:{start:{line:2,column:29},end:{line:2,column:60}},1:{start:{line:4,column:0},end:{line:4,column:31}},2:{start:{line:5,column:19},end:{line:5,column:43}},3:{start:{line:6,column:19},end:{line:6,column:35}},4:{start:{line:7,column:0},end:{line:7,column:13}},5:{start:{line:9,column:35},end:{line:59,column:2}},6:{start:{line:10,column:29},end:{line:10,column:57}},7:{start:{line:11,column:27},end:{line:11,column:53}},8:{start:{line:13,column:2},end:{line:58,column:5}},9:{start:{line:25,column:68},end:{line:25,column:96}},10:{start:{line:36,column:52},end:{line:36,column:72}},11:{start:{line:46,column:52},end:{line:46,column:74}},12:{start:{line:56,column:52},end:{line:56,column:79}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:43},end:{line:9,column:44}},loc:{start:{line:9,column:94},end:{line:59,column:1}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:25,column:57},end:{line:25,column:58}},loc:{start:{line:25,column:68},end:{line:25,column:96}},line:25},2:{name:"(anonymous_2)",decl:{start:{line:36,column:41},end:{line:36,column:42}},loc:{start:{line:36,column:52},end:{line:36,column:72}},line:36},3:{name:"(anonymous_3)",decl:{start:{line:46,column:41},end:{line:46,column:42}},loc:{start:{line:46,column:52},end:{line:46,column:74}},line:46},4:{name:"(anonymous_4)",decl:{start:{line:56,column:41},end:{line:56,column:42}},loc:{start:{line:56,column:52},end:{line:56,column:79}},line:56}},branchMap:{0:{loc:{start:{line:25,column:31},end:{line:25,column:98}},type:"binary-expr",locations:[{start:{line:25,column:31},end:{line:25,column:40}},{start:{line:25,column:45},end:{line:25,column:97}}],line:25},1:{loc:{start:{line:36,column:15},end:{line:36,column:74}},type:"binary-expr",locations:[{start:{line:36,column:15},end:{line:36,column:24}},{start:{line:36,column:29},end:{line:36,column:73}}],line:36},2:{loc:{start:{line:46,column:15},end:{line:46,column:76}},type:"binary-expr",locations:[{start:{line:46,column:15},end:{line:46,column:24}},{start:{line:46,column:29},end:{line:46,column:75}}],line:46},3:{loc:{start:{line:56,column:15},end:{line:56,column:81}},type:"binary-expr",locations:[{start:{line:56,column:15},end:{line:56,column:24}},{start:{line:56,column:29},end:{line:56,column:80}}],line:56}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/cff-initializer-javascript/cff-initializer-javascript/src/components/Keyword.vue"],names:["index","keyword","validationErrors","$emit","numKeywords"],mappings:";;;;qBACS,KAAK,EAAC,aAAa;qBACf,KAAK,EAAC,KAAK;;;;;;;wBADpB,aA6CM,OA7CN,UA6CM;IA5CF,aAaM,OAbN,UAaM;MAZF,aAWE;QAVE,SAAS,EAAT,EAAS;QACT,KAAK,EAAL,EAAK;QACL,QAAQ,EAAR,EAAQ;QACR,WAAW,EAAC,gBAAgB;QACrB,SAAO,oBAAoBA,UAAK;QAChC,KAAK,iBAAiBA,UAAK;QAC3B,aAAW,EAAEC,YAAO;QACpB,KAAK,EAAEC,qBAAgB,CAAC,MAAM;QAC9B,eAAa,EAAEA,qBAAgB,CAAC,IAAI;QACtC,qBAAiB,uCAAEC,UAAK,WAAW,MAAM;;;IAGtD,aASE;MARE,KAAK,EAAC,aAAa;MACnB,KAAK,EAAC,WAAW;MACjB,IAAI,EAAJ,EAAI;MACJ,IAAI,EAAC,cAAc;MACZ,YAAU,mBAAmBH,UAAK;MAClC,SAAO,kBAAkBA,UAAK;MAC9B,OAAO,EAAEA,UAAK;MAChB,OAAK,uCAAEG,UAAK;;IAErB,aASE;MARE,KAAK,EAAC,aAAa;MACnB,KAAK,EAAC,WAAW;MACjB,IAAI,EAAJ,EAAI;MACJ,IAAI,EAAC,gBAAgB;MACd,YAAU,mBAAmBH,UAAK;MAClC,SAAO,oBAAoBA,UAAK;MAChC,OAAO,EAAEA,UAAK,IAAII,gBAAW;MAC/B,OAAK,uCAAED,UAAK;;IAErB,aASE;MARE,KAAK,EAAC,aAAa;MACnB,KAAK,EAAC,UAAU;MAChB,IAAI,EAAJ,EAAI;MACJ,IAAI,EAAC,QAAQ;MACb,KAAK,EAAC,QAAQ;MACP,YAAU,qBAAqBH,UAAK;MACpC,SAAO,iBAAiBA,UAAK;MAC/B,OAAK,uCAAEG,UAAK",sourcesContent:['\n    <div class="row q-pb-lg">\n        <div class="col">\n            <q-input\n                autofocus\n                dense\n                outlined\n                placeholder="Type a keyword"\n                v-bind:data-cy="\'input-keyword\' + index"\n                v-bind:label="\'Keyword #\' + (index + 1)"\n                v-bind:model-value="keyword"\n                v-bind:error="validationErrors.length > 0"\n                v-bind:error-message="validationErrors.join(\', \')"\n                v-on:update:modelValue="$emit(\'update\', $event)"\n            />\n        </div>\n        <q-btn\n            class="keyword-btn"\n            color="secondary"\n            flat\n            icon="ion-arrow-up"\n            v-bind:aria-label="`move keyword #${index + 1} up`"\n            v-bind:data-cy="\'btn-move-up\' + index"\n            v-bind:disable="index == 0"\n            v-on:click="$emit(\'moveUp\')"\n        />\n        <q-btn\n            class="keyword-btn"\n            color="secondary"\n            flat\n            icon="ion-arrow-down"\n            v-bind:aria-label="`move keyword #${index + 1} down`"\n            v-bind:data-cy="\'btn-move-down\' + index"\n            v-bind:disable="index == numKeywords - 1"\n            v-on:click="$emit(\'moveDown\')"\n        />\n        <q-btn\n            class="keyword-btn"\n            color="negative"\n            flat\n            icon="delete"\n            title="Remove"\n            v-bind:aria-label="`remove keyword #${index + 1}`"\n            v-bind:data-cy="\'btn-remove\' + index"\n            v-on:click="$emit(\'removePressed\')"\n        />\n    </div>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8ba6adb3bcb3fd07d9a73f164576e42a6bf493b0"},r=o[A]||(o[A]={});r[n]&&r[n].hash===e||(r[n]=l);var a=r[n];return v=function(){return a},a}v();const y=(v().s[0]++,(0,A.HX)("data-v-7505fc48"));v().s[1]++,(0,A.dD)("data-v-7505fc48");const C=(v().s[2]++,{class:"row q-pb-lg"}),w=(v().s[3]++,{class:"col"});v().s[4]++,(0,A.Cn)();const E=(v().s[5]++,y(((n,e,o,l,r,a)=>{v().f[0]++;const i=(v().s[6]++,(0,A.up)("q-input")),t=(v().s[7]++,(0,A.up)("q-btn"));return v().s[8]++,(0,A.wg)(),(0,A.j4)("div",C,[(0,A.Wm)("div",w,[(0,A.Wm)(i,{autofocus:"",dense:"",outlined:"",placeholder:"Type a keyword","data-cy":"input-keyword"+n.index,label:"Keyword #"+(n.index+1),"model-value":n.keyword,error:n.validationErrors.length>0,"error-message":n.validationErrors.join(", "),"onUpdate:modelValue":(v().b[0][0]++,e[1]||(v().b[0][1]++,e[1]=e=>(v().f[1]++,v().s[9]++,n.$emit("update",e))))},null,8,["data-cy","label","model-value","error","error-message"])]),(0,A.Wm)(t,{class:"keyword-btn",color:"secondary",flat:"",icon:"ion-arrow-up","aria-label":`move keyword #${n.index+1} up`,"data-cy":"btn-move-up"+n.index,disable:0==n.index,onClick:(v().b[1][0]++,e[2]||(v().b[1][1]++,e[2]=e=>(v().f[2]++,v().s[10]++,n.$emit("moveUp"))))},null,8,["aria-label","data-cy","disable"]),(0,A.Wm)(t,{class:"keyword-btn",color:"secondary",flat:"",icon:"ion-arrow-down","aria-label":`move keyword #${n.index+1} down`,"data-cy":"btn-move-down"+n.index,disable:n.index==n.numKeywords-1,onClick:(v().b[2][0]++,e[3]||(v().b[2][1]++,e[3]=e=>(v().f[3]++,v().s[11]++,n.$emit("moveDown"))))},null,8,["aria-label","data-cy","disable"]),(0,A.Wm)(t,{class:"keyword-btn",color:"negative",flat:"",icon:"delete",title:"Remove","aria-label":`remove keyword #${n.index+1}`,"data-cy":"btn-remove"+n.index,onClick:(v().b[3][0]++,e[4]||(v().b[3][1]++,e[4]=e=>(v().f[4]++,v().s[12]++,n.$emit("removePressed"))))},null,8,["aria-label","data-cy"])])})));var p=o(8875);const K=(0,A.aZ)({name:"Keyword",props:{keyword:{type:String,default:""},index:{type:Number,required:!0},numKeywords:{type:Number,default:0}},setup(n){const{errors:e}=(0,p.V)(),o=(0,A.Fl)((()=>(0,c.R0)(n.index).filter((0,c.uY)(e.value)).map((n=>n.replace.message)))),l=(0,A.Fl)((()=>c._m.filter((0,c.uY)(e.value)).filter((0,c.uY)(e.value,(0,c.Uh)(n.index))).map((n=>n.replace.message)))),r=(0,A.Fl)((()=>[...o.value,...l.value]));return{validationErrors:r}},emits:["moveDown","moveUp","removePressed","update"]});var b=o(4842),f=o(8240),B=o(7518),k=o.n(B);K.render=E,K.__scopeId="data-v-7505fc48";const M=K;k()(K,"components",{QInput:b.Z,QBtn:f.Z});var h=o(4009),g=o(1364),U=function(n,e,o,A){function l(n){return n instanceof o?n:new o((function(e){e(n)}))}return new(o||(o=Promise))((function(o,r){function a(n){try{t(A.next(n))}catch(e){r(e)}}function i(n){try{t(A["throw"](n))}catch(e){r(e)}}function t(n){n.done?o(n.value):l(n.value).then(a,i)}t((A=A.apply(n,e||[])).next())}))};const x=(0,A.aZ)({name:"ScreenKeywords",components:{BannerErrorMessages:m.Z,InfoDialog:u.Z,Keyword:M},setup(){const{keywords:n,setKeywords:e}=(0,g.Y)(),{errors:o}=(0,p.V)(),l=()=>U(this,void 0,void 0,(function*(){let o;const l="";o=void 0===n.value?[l]:[...n.value,l],e(o),yield(0,A.Y3)(),(0,h.O)()})),r=o=>{if(void 0!==n.value){const A=[...n.value];A.splice(o,1),e(A),Array.isArray(A)&&0===A.length&&e(void 0)}},a=(o,A)=>{if(void 0!==n.value){const l=[...n.value];l[o]=A,e(l)}},i=(0,A.Fl)((()=>c.hM.filter((0,c.uY)(o.value)).map((n=>n.replace.message))));return{addKeyword:l,keywords:n,keywordsErrors:i,moveDown:s.v,moveUp:s.A,removeKeyword:r,setKeyword:a,setKeywords:e}}});x.render=d;const I=x;k()(x,"components",{QBtn:f.Z})}}]);