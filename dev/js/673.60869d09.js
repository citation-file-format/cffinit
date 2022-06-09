"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[673],{8469:(e,i,t)=>{t.r(i),t.d(i,{default:()=>ee});var n=t(3673),r=t(2323);const a=(0,n.HX)("data-v-2ad2026a");(0,n.dD)("data-v-2ad2026a");const o={id:"metroline"},l={id:"form"},d=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Identifiers ")],-1),s={id:"form-content"},u={class:"question"},c=(0,n.Uk)(" What persistent identifiers are available for the work? "),p={class:"scroll-to-bottom-container"},v=(0,n.Wm)("span",{class:"bottom"},null,-1),m=(0,n.Uk)(" Add identifier "),f={id:"form-button-bar"};(0,n.Cn)();const h=a(((e,i,t,h,g,b)=>{const w=(0,n.up)("Stepper"),y=(0,n.up)("SchemaGuideLink"),W=(0,n.up)("IdentifierCardViewing"),I=(0,n.up)("IdentifierCardEditing"),k=(0,n.up)("q-btn"),q=(0,n.up)("q-banner"),C=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",o,[(0,n.Wm)(w)]),(0,n.Wm)("div",l,[d,(0,n.Wm)("div",s,[(0,n.Wm)("h2",u,[c,(0,n.Wm)(y,{anchor:"#identifiers"})]),(0,n.Wm)("div",p,[v,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.identifiers,((t,r)=>((0,n.wg)(),(0,n.j4)("div",{class:"q-mb-md q-mr-lg",key:r},[e.editingId!==r?((0,n.wg)(),(0,n.j4)(W,{key:0,index:r,identifier:t,"num-identifiers":e.identifiers.length,onEditPressed:()=>e.editingId=r,onMoveDown:i=>e.moveIdentifierDown(r),onMoveUp:i=>e.moveIdentifierUp(r)},null,8,["index","identifier","num-identifiers","onEditPressed","onMoveDown","onMoveUp"])):((0,n.wg)(),(0,n.j4)(I,(0,n.dG)({key:1,index:r},t,{onUpdateType:e.setIdentifierTypeField,onUpdateValue:e.setIdentifierValueField,onUpdateDescription:e.setIdentifierDescriptionField,onClosePressed:i[1]||(i[1]=()=>e.editingId=-1),onRemovePressed:e.removeIdentifier}),null,16,["index","onUpdateType","onUpdateValue","onUpdateDescription","onRemovePressed"]))])))),128))])]),(0,n.Wm)(k,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addIdentifier},{default:a((()=>[m])),_:1},8,["onClick"]),e.identifiersErrors.length>0?((0,n.wg)(),(0,n.j4)(q,{key:0,class:["bg-warning","text-negative",e.identifiersErrors.length>0?"has-error":""]},{default:a((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.identifiersErrors,((e,i)=>((0,n.wg)(),(0,n.j4)("div",{key:i},(0,r.zw)(e),1)))),128))])),_:1},8,["class"])):(0,n.kq)("",!0)]),(0,n.Wm)("div",f,[(0,n.Wm)(C)])])],64)}));var g=t(7996),b=t(1959),w=t(2064);t(246);const y=(0,n.HX)("data-v-7d202203");(0,n.dD)("data-v-7d202203");const W={class:"items-center no-wrap"},I={class:"q-mt-md items-center no-wrap"},k={class:"row"},q={class:"subquestion"},C={class:"q-mt-md items-center no-wrap"},V={class:"row"},U={class:"subquestion"};(0,n.Cn)();const x=y(((e,i,t,a,o,l)=>{const d=(0,n.up)("q-option-group"),s=(0,n.up)("SchemaGuideLink"),u=(0,n.up)("q-input"),c=(0,n.up)("q-card-section"),p=(0,n.up)("q-btn"),v=(0,n.up)("q-card-actions"),m=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(m,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:y((()=>[(0,n.Wm)(c,null,{default:y((()=>[(0,n.Wm)("div",W,[(0,n.Wm)(d,{inline:"",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":i[1]||(i[1]=i=>e.$emit("updateType","type",i))},null,8,["model-value","options"])]),(0,n.Wm)("div",I,[(0,n.Wm)("div",k,[(0,n.Wm)("h3",q,[(0,n.Uk)(" What is the value of the "+(0,r.zw)(e.label)+"? ",1),(0,n.Wm)(s,{anchor:e.anchor},null,8,["anchor"])])]),(0,n.Wm)(u,{autofocus:"","bg-color":"white",label:"Value",outlined:"",standout:"",dense:"",class:e.identifierValueErrors.length>0?"has-error":"",error:e.identifierValueErrors.length>0,"error-message":e.identifierValueErrors.join(", "),"model-value":e.value,"onUpdate:modelValue":i[2]||(i[2]=i=>e.$emit("updateValue","value",i)),ref:"valueRef"},null,8,["class","error","error-message","model-value"])]),(0,n.Wm)("div",C,[(0,n.Wm)("div",V,[(0,n.Wm)("h3",U,[(0,n.Uk)(" What is the description for the "+(0,r.zw)(e.label)+"? ",1),(0,n.Wm)(s,{anchor:"#definitionsidentifier-description"})])]),(0,n.Wm)(u,{"bg-color":"white",label:"Description",outlined:"",standout:"",dense:"","model-value":e.description,"onUpdate:modelValue":i[3]||(i[3]=i=>e.$emit("updateDescription","description",i))},null,8,["model-value"])])])),_:1}),(0,n.Wm)(v,{align:"right"},{default:y((()=>[(0,n.Wm)(p,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:i[4]||(i[4]=i=>e.$emit("removePressed"))}),(0,n.Wm)(p,{dense:"",icon:"done",label:"Done",onClick:i[5]||(i[5]=i=>e.$emit("closePressed"))})])),_:1})])),_:1})}));var D=t(1622),E=t(8875);const S=(0,n.aZ)({name:"IdentifierCardEditing",props:{index:{type:Number,required:!0},type:{type:String,default:""},value:{type:String,default:""},description:{type:String,default:""}},components:{SchemaGuideLink:D.Z},setup(e){const{errors:i}=(0,E.V)(),t={doi:{label:"DOI",anchor:"#definitionsdoi"},url:{label:"URL",anchor:"#definitionsurl"},swh:{label:"Software Heritage identifier",anchor:"#definitionsswh-identifier"},other:{label:"identifier",anchor:"#definitionsidentifier"}},r=(0,n.Fl)((()=>(0,g.lF)(e.index,["doi","url","swh","other"].indexOf(e.type)).filter((0,g.uY)(i.value)).map((e=>e.replace.message))));return{typeOptions:[{label:"DOI",value:"doi"},{label:"URL",value:"url"},{label:"Software Heritage",value:"swh"},{label:"Other",value:"other"}],label:(0,n.Fl)((()=>t[e.type].label)),anchor:(0,n.Fl)((()=>t[e.type].anchor)),identifierValueErrors:r}},emits:["closePressed","removePressed","updateType","updateValue","updateDescription"]});var Z=t(151),j=t(5589),F=t(4140),O=t(4842),P=t(9367),_=t(2165),Q=t(7518),H=t.n(Q);S.render=x,S.__scopeId="data-v-7d202203";const Y=S;H()(S,"components",{QCard:Z.Z,QCardSection:j.Z,QOptionGroup:F.Z,QInput:O.Z,QCardActions:P.Z,QBtn:_.Z});const $=(0,n.HX)("data-v-777aa42c");(0,n.dD)("data-v-777aa42c");const A={style:{"flex-grow":"1.0"}};(0,n.Cn)();const z=$(((e,i,t,a,o,l)=>{const d=(0,n.up)("q-btn"),s=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(s,{bordered:"",class:["bg-formcard",e.identifierValueErrors.length>0?"red-border has-error":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:$((()=>[(0,n.Wm)("div",A,[(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,(0,r.zw)(e.identifier.description),1),(0,n.Wm)("li",null,(0,r.zw)(e.identifier.type)+": "+(0,r.zw)(e.identifier.value),1)])]),(0,n.Wm)("div",null,[(0,n.Wm)(d,{class:"identifier-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:i[1]||(i[1]=i=>e.$emit("moveUp"))},null,8,["disable"]),(0,n.Wm)(d,{class:"identifier-button",color:"blue",disable:e.index>=e.numIdentifiers-1,icon:"ion-arrow-down",tabindex:"-1",onClick:i[2]||(i[2]=i=>e.$emit("moveDown"))},null,8,["disable"]),(0,n.Wm)(d,{class:"identifier-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:i[3]||(i[3]=i=>e.$emit("editPressed"))})])])),_:1},8,["class"])})),G=(0,n.aZ)({name:"IdentifierCardViewing",props:{index:{type:Number,required:!0},identifier:{type:Object,required:!0},numIdentifiers:{type:Number,default:0}},setup(e){const{errors:i}=(0,E.V)(),t=(0,n.Fl)((()=>(0,g.lF)(e.index,["doi","url","swh","other"].indexOf(e.identifier.type)).filter((0,g.uY)(i.value)).map((e=>e.replace.message))));return{identifierValueErrors:t}},emits:["editPressed","moveDown","moveUp"]});G.render=z,G.__scopeId="data-v-777aa42c";const L=G;H()(G,"components",{QCard:Z.Z,QBtn:_.Z});var R=t(6702),T=t(6787),B=t(4009),M=t(1364),N=t(6513),X=function(e,i,t,n){function r(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{d(n.next(e))}catch(i){a(i)}}function l(e){try{d(n["throw"](e))}catch(i){a(i)}}function d(e){e.done?t(e.value):r(e.value).then(o,l)}d((n=n.apply(e,i||[])).next())}))};const K=(0,n.aZ)({name:"ScreenIdentifiers",components:{SchemaGuideLink:D.Z,Stepper:R.Z,StepperActions:T.Z,IdentifierCardEditing:Y,IdentifierCardViewing:L},setup(){(0,n.ic)((()=>{const{setErrorStateScreenIdentifiers:e}=(0,N.v)();e(document.getElementsByClassName("has-error").length>0)}));const{identifiers:e,setIdentifiers:i}=(0,M.Y)(),{errors:t}=(0,E.V)(),r=(0,b.iH)(-1),a=()=>X(this,void 0,void 0,(function*(){let t;const a={type:"doi",value:"",description:void 0};t=void 0===e.value?[a]:[...e.value,a],i(t),r.value=t.length-1,yield(0,n.Y3)(),(0,B.O)()})),o=()=>{if(void 0!==e.value){const t=[...e.value];t.splice(r.value,1),i(t),r.value=-1,Array.isArray(t)&&0===t.length&&i(void 0)}},l=(t,n)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.description=""===n?void 0:n,e.value[r.value]=t,i(e.value)}},d=(t,n)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.type=n,e.value[r.value]=t,i(e.value)}},s=(t,n)=>{if(void 0!==e.value){const t=Object.assign({},e.value[r.value]);t.value=n,e.value[r.value]=t,i(e.value)}},u=t=>{void 0!==e.value&&((0,w.A)(t,e.value,i),r.value===t&&t>0?r.value=r.value-1:r.value===t-1&&(r.value=r.value+1))},c=t=>{void 0!==e.value&&((0,w.v)(t,e.value,i),r.value===t&&t<e.value.length-1?r.value=r.value+1:r.value===t+1&&(r.value=r.value-1))},p=(0,n.Fl)((()=>g.I3.filter((0,g.uY)(t.value)).map((e=>e.replace.message))));return{addIdentifier:a,editingId:r,identifiers:e,identifiersErrors:p,moveIdentifierUp:u,moveIdentifierDown:c,removeIdentifier:o,setIdentifierDescriptionField:l,setIdentifierTypeField:d,setIdentifierValueField:s}}});var J=t(5607);K.render=h,K.__scopeId="data-v-2ad2026a";const ee=K;H()(K,"components",{QBtn:_.Z,QBanner:J.Z})}}]);