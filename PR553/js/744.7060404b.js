"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[744],{1086:(e,o,r)=>{r.r(o),r.d(o,{default:()=>R});var n=r(3673),t=r(2323);const s=(0,n.HX)("data-v-17f39df8");(0,n.dD)("data-v-17f39df8");const d={id:"metroline"},a={id:"form"},l=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Keywords ")],-1),i={id:"form-content"},c={class:"question"},u=(0,n.Uk)(" What keywords describe the work? "),m={class:"scroll-to-bottom-container"},w=(0,n.Wm)("span",{class:"bottom"},null,-1),y=(0,n.Uk)(" Add keyword "),v={id:"form-button-bar"};(0,n.Cn)();const p=s(((e,o,r,p,k,f)=>{const h=(0,n.up)("Stepper"),b=(0,n.up)("SchemaGuideLink"),g=(0,n.up)("Keyword"),K=(0,n.up)("q-btn"),W=(0,n.up)("q-banner"),x=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",d,[(0,n.Wm)(h)]),(0,n.Wm)("div",a,[l,(0,n.Wm)("div",i,[(0,n.Wm)("p",c,[u,(0,n.Wm)(b,{anchor:"#keywords"})]),(0,n.Wm)("div",m,[w,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywords,((o,r)=>((0,n.wg)(),(0,n.j4)(g,{class:"q-mr-lg",key:r,keyword:o,index:r,"num-keywords":e.keywords.length,onMoveDown:o=>e.moveDown(r,e.keywords,e.setKeywords),onMoveUp:o=>e.moveUp(r,e.keywords,e.setKeywords),onRemovePressed:o=>e.removeKeyword(r),onUpdate:o=>e.setKeyword(r,o)},null,8,["keyword","index","num-keywords","onMoveDown","onMoveUp","onRemovePressed","onUpdate"])))),128))])]),(0,n.Wm)(K,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",style:{width:"max-content"},onClick:e.addKeyword},{default:s((()=>[y])),_:1},8,["onClick"]),e.keywordsErrors.length>0?((0,n.wg)(),(0,n.j4)(W,{key:0,class:["bg-warning","text-negative",e.keywordsErrors.length>0?"has-error":""]},{default:s((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.keywordsErrors,((e,o)=>((0,n.wg)(),(0,n.j4)("div",{key:o},(0,t.zw)(e),1)))),128))])),_:1},8,["class"])):(0,n.kq)("",!0)]),(0,n.Wm)("div",v,[(0,n.Wm)(x)])])],64)}));var k=r(1622),f=r(2620),h=r(2334);const b=(0,n.HX)("data-v-78c3184e");(0,n.dD)("data-v-78c3184e");const g={class:"keyword"},K={class:"keyword-input"};(0,n.Cn)();const W=b(((e,o,r,t,s,d)=>{const a=(0,n.up)("q-input"),l=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)("div",g,[(0,n.Wm)("div",K,[(0,n.Wm)(a,{autofocus:"","bg-color":"white",dense:"",outlined:"",placeholder:"Type a keyword",class:e.keywordErrors.length>0?"has-error":"","model-value":e.keyword,error:e.keywordErrors.length>0,"error-message":e.keywordErrors.join(", "),"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update",o)),ref:"keywordRef"},null,8,["class","model-value","error","error-message"])]),(0,n.Wm)(l,{class:"keyword-btn",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(l,{class:"keyword-btn",color:"blue",disable:e.index==e.numKeywords-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[3]||(o[3]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(l,{class:"keyword-btn",color:"negative",dense:"",icon:"delete",tabindex:"-1",title:"Remove",onClick:o[4]||(o[4]=o=>e.$emit("removePressed"))})])}));var x=r(8875),U=r(7996);const q=(0,n.aZ)({name:"Keyword",props:{keyword:{type:String,default:""},index:{type:Number,required:!0},numKeywords:{type:Number,default:0}},setup(e){const{errors:o}=(0,x.V)(),r=(0,n.Fl)((()=>(0,U.R0)(e.index).filter((0,U.uY)(o.value)).map((e=>e.replace.message))));return{keywordErrors:r}},emits:["moveDown","moveUp","removePressed","update"]});var C=r(4842),E=r(2165),S=r(7518),Z=r.n(S);q.render=W,q.__scopeId="data-v-78c3184e";const j=q;Z()(q,"components",{QInput:C.Z,QBtn:E.Z});var D=r(2064),Y=r(1364),A=r(4009),_=r(6513),H=function(e,o,r,n){function t(e){return e instanceof r?e:new r((function(o){o(e)}))}return new(r||(r=Promise))((function(r,s){function d(e){try{l(n.next(e))}catch(o){s(o)}}function a(e){try{l(n["throw"](e))}catch(o){s(o)}}function l(e){e.done?r(e.value):t(e.value).then(d,a)}l((n=n.apply(e,o||[])).next())}))};const M=(0,n.aZ)({name:"ScreenKeywords",components:{SchemaGuideLink:k.Z,Stepper:f.Z,StepperActions:h.Z,Keyword:j},setup(){(0,n.ic)((()=>{const{setErrorStateScreenKeywords:e}=(0,_.v)();e(document.getElementsByClassName("has-error").length>0)}));const{keywords:e,setKeywords:o}=(0,Y.Y)(),{errors:r}=(0,x.V)(),t=()=>H(this,void 0,void 0,(function*(){let r;const t="";r=void 0===e.value?[t]:[...e.value,t],o(r),yield(0,n.Y3)(),(0,A.O)()})),s=r=>{if(void 0!==e.value){const n=[...e.value];n.splice(r,1),o(n),Array.isArray(n)&&0===n.length&&o(void 0)}},d=(r,n)=>{if(void 0!==e.value){const t=[...e.value];t[r]=n,o(t)}},a=(0,n.Fl)((()=>U.hM.filter((0,U.uY)(r.value)).map((e=>e.replace.message))));return{addKeyword:t,keywords:e,keywordsErrors:a,moveDown:D.v,moveUp:D.A,removeKeyword:s,setKeyword:d,setKeywords:o}}});var P=r(5607);M.render=p,M.__scopeId="data-v-17f39df8";const R=M;Z()(M,"components",{QBtn:E.Z,QBanner:P.Z})}}]);