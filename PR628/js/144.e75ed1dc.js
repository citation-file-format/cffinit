"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[144],{5556:(e,o,r)=>{r.r(o),r.d(o,{default:()=>P});var n=r(3673),t=r(2323);const s=(0,n.HX)("data-v-0de27678");(0,n.dD)("data-v-0de27678");const d={id:"form",class:"col-12 col-lg-5 col-sm-10"},a=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Keywords ")],-1),l={id:"form-content"},i={class:"question"},c=(0,n.Uk)(" What keywords describe the work? "),u={class:"scroll-to-bottom-container"},m=(0,n.Wm)("span",{class:"bottom"},null,-1),v=(0,n.Uk)(" Add keyword "),w={id:"form-button-bar"};(0,n.Cn)();const p=s(((e,o,r,p,y,k)=>{const f=(0,n.up)("Stepper"),b=(0,n.up)("SchemaGuideLink"),h=(0,n.up)("Keyword"),g=(0,n.up)("q-btn"),K=(0,n.up)("q-banner"),W=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)(f),(0,n.Wm)("div",d,[a,(0,n.Wm)("div",l,[(0,n.Wm)("h2",i,[c,(0,n.Wm)(b,{anchor:"#keywords"})]),(0,n.Wm)("div",u,[m,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywords,((o,r)=>((0,n.wg)(),(0,n.j4)(h,{class:"q-mr-lg",key:r,keyword:o,index:r,"num-keywords":e.keywords.length,onMoveDown:o=>e.moveDown(r,e.keywords,e.setKeywords),onMoveUp:o=>e.moveUp(r,e.keywords,e.setKeywords),onRemovePressed:o=>e.removeKeyword(r),onUpdate:o=>e.setKeyword(r,o)},null,8,["keyword","index","num-keywords","onMoveDown","onMoveUp","onRemovePressed","onUpdate"])))),128))])]),(0,n.Wm)(g,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:s((()=>[v])),_:1},8,["onClick"]),e.keywordsErrors.length>0?((0,n.wg)(),(0,n.j4)(K,{key:0,class:["bg-warning","text-negative",e.keywordsErrors.length>0?"has-error":""]},{default:s((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywordsErrors,((e,o)=>((0,n.wg)(),(0,n.j4)("div",{key:o},(0,t.zw)(e),1)))),128))])),_:1},8,["class"])):(0,n.kq)("",!0)]),(0,n.Wm)("div",w,[(0,n.Wm)(W)])])],64)}));var y=r(7996),k=r(2064);const f=(0,n.HX)("data-v-b6c27e94");(0,n.dD)("data-v-b6c27e94");const b={class:"keyword"},h={class:"keyword-input"};(0,n.Cn)();const g=f(((e,o,r,t,s,d)=>{const a=(0,n.up)("q-input"),l=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)("div",b,[(0,n.Wm)("div",h,[(0,n.Wm)(a,{autofocus:"","bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword",class:e.validationErrors.length>0?"has-error":"","model-value":e.keyword,error:e.validationErrors.length>0,"error-message":e.validationErrors.join(", "),"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update",o))},null,8,["class","model-value","error","error-message"])]),(0,n.Wm)(l,{class:"keyword-btn",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(l,{class:"keyword-btn",color:"blue",disable:e.index==e.numKeywords-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[3]||(o[3]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(l,{class:"keyword-btn",color:"negative",dense:"",icon:"delete",tabindex:"-1",title:"Remove",onClick:o[4]||(o[4]=o=>e.$emit("removePressed"))})])}));var K=r(8875);const W=(0,n.aZ)({name:"Keyword",props:{keyword:{type:String,default:""},index:{type:Number,required:!0},numKeywords:{type:Number,default:0}},setup(e){const{errors:o}=(0,K.V)(),r=(0,n.Fl)((()=>(0,y.R0)(e.index).filter((0,y.uY)(o.value)).map((e=>e.replace.message)))),t=(0,n.Fl)((()=>y._m.filter((0,y.uY)(o.value)).filter((0,y.uY)(o.value,(0,y.Uh)(e.index))).map((e=>e.replace.message)))),s=(0,n.Fl)((()=>[...r.value,...t.value]));return{validationErrors:s}},emits:["moveDown","moveUp","removePressed","update"]});var x=r(4842),U=r(2165),q=r(7518),C=r.n(q);W.render=g,W.__scopeId="data-v-b6c27e94";const E=W;C()(W,"components",{QInput:x.Z,QBtn:U.Z});var S=r(1622),Y=r(5010),Z=r(146),j=r(4009),D=r(1364),_=r(6513),A=function(e,o,r,n){function t(e){return e instanceof r?e:new r((function(o){o(e)}))}return new(r||(r=Promise))((function(r,s){function d(e){try{l(n.next(e))}catch(o){s(o)}}function a(e){try{l(n["throw"](e))}catch(o){s(o)}}function l(e){e.done?r(e.value):t(e.value).then(d,a)}l((n=n.apply(e,o||[])).next())}))};const H=(0,n.aZ)({name:"ScreenKeywords",components:{SchemaGuideLink:S.Z,Stepper:Y.Z,StepperActions:Z.Z,Keyword:E},setup(){(0,n.ic)((()=>{const{setErrorStateScreenKeywords:e}=(0,_.v)();e(document.getElementsByClassName("has-error").length>0)}));const{keywords:e,setKeywords:o}=(0,D.Y)(),{errors:r}=(0,K.V)(),t=()=>A(this,void 0,void 0,(function*(){let r;const t="";r=void 0===e.value?[t]:[...e.value,t],o(r),yield(0,n.Y3)(),(0,j.O)()})),s=r=>{if(void 0!==e.value){const n=[...e.value];n.splice(r,1),o(n),Array.isArray(n)&&0===n.length&&o(void 0)}},d=(r,n)=>{if(void 0!==e.value){const t=[...e.value];t[r]=n,o(t)}},a=(0,n.Fl)((()=>y.hM.filter((0,y.uY)(r.value)).map((e=>e.replace.message))));return{addKeyword:t,keywords:e,keywordsErrors:a,moveDown:k.v,moveUp:k.A,removeKeyword:s,setKeyword:d,setKeywords:o}}});var M=r(5607);H.render=p,H.__scopeId="data-v-0de27678";const P=H;C()(H,"components",{QBtn:U.Z,QBanner:M.Z})}}]);