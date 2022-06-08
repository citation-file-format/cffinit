"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[479],{1621:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var o=a(3673);const s=(0,o.HX)("data-v-45e79819");(0,o.dD)("data-v-45e79819");const l={id:"metroline"},r={id:"form"},n=(0,o.Wm)("div",{id:"form-title"},[(0,o.Wm)("h1",{class:"page-title"}," Version specific ")],-1),i={id:"form-content"},d={class:"question"},m=(0,o.Uk)(" What is the commit identifier of the work? "),u={class:"question"},c=(0,o.Uk)(" What is the version of the work? "),p={class:"question"},v=(0,o.Uk)(" When was the version released? "),h={class:"row items-center justify-end"},W={id:"form-button-bar"};(0,o.Cn)();const f=s(((e,t,a,f,g,D)=>{const V=(0,o.up)("Stepper"),w=(0,o.up)("SchemaGuideLink"),b=(0,o.up)("q-input"),k=(0,o.up)("q-btn"),R=(0,o.up)("q-date"),S=(0,o.up)("q-popup-proxy"),Y=(0,o.up)("q-icon"),U=(0,o.up)("StepperActions"),Z=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)("div",l,[(0,o.Wm)(V)]),(0,o.Wm)("div",r,[n,(0,o.Wm)("div",i,[(0,o.Wm)("p",d,[m,(0,o.Wm)(w,{anchor:"#commit"})]),(0,o.Wm)(b,{"bg-color":"white",label:"commit",outlined:"",standout:"","model-value":e.commit,"onUpdate:modelValue":e.setCommit},null,8,["model-value","onUpdate:modelValue"]),(0,o.Wm)("p",u,[c,(0,o.Wm)(w,{anchor:"#version"})]),(0,o.Wm)(b,{"bg-color":"white",label:"version",outlined:"",standout:"","model-value":e.version,"onUpdate:modelValue":e.setVersion},null,8,["model-value","onUpdate:modelValue"]),(0,o.Wm)("p",p,[v,(0,o.Wm)(w,{anchor:"#date-released"})]),(0,o.Wm)(b,{"bg-color":"white",hint:"Format: YYYY-MM-DD",label:"date-released",mask:"####-##-##",outlined:"",standout:"",style:{width:"33.33%"},"today-btn":"true",class:e.dateReleasedErrors.length>0?"has-error":"","model-value":e.dateReleased,error:e.dateReleasedErrors.length>0,"error-message":e.dateReleasedErrors.join(", "),"onUpdate:modelValue":e.setDateReleased},{append:s((()=>[(0,o.Wm)(Y,{name:"event",class:"cursor-pointer"},{default:s((()=>[(0,o.Wm)(S,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:s((()=>[(0,o.Wm)(R,{"model-value":""===e.dateReleased?e.initializeDate():e.dateReleased,"onUpdate:modelValue":e.setDateReleased,mask:"YYYY-MM-DD"},{default:s((()=>[(0,o.Wm)("div",h,[(0,o.wy)((0,o.Wm)(k,{label:"Close",color:"primary",flat:""},null,512),[[Z]])])])),_:1},8,["model-value","onUpdate:modelValue"])])),_:1},512)])),_:1})])),_:1},8,["class","model-value","error","error-message","onUpdate:modelValue"])]),(0,o.Wm)("div",W,[(0,o.Wm)(U)])])],64)}));var g=a(1622),D=a(8222),V=a(2334),w=a(1364),b=a(8875),k=a(7996),R=a(6513);const S=(0,o.aZ)({name:"ScreenVersionSpecific",components:{SchemaGuideLink:g.Z,Stepper:D.Z,StepperActions:V.Z},setup(){(0,o.ic)((()=>{const{setErrorStateScreenVersionSpecific:e}=(0,R.v)();e(document.getElementsByClassName("has-error").length>0)}));const e=()=>{const e=new Date,t=e.getFullYear(),a=("0"+(e.getMonth()+1).toString()).slice(-2),o=("0"+e.getDate().toString()).slice(-2);return`${t}-${a}-${o}`},{commit:t,dateReleased:a,version:s,setCommit:l,setDateReleased:r,setVersion:n}=(0,w.Y)(),{errors:i}=(0,b.V)(),d=(0,o.Fl)((()=>k.z8.filter((0,k.uY)(i.value)).map((e=>e.replace.message))));return{commit:t,dateReleased:a,dateReleasedErrors:d,initializeDate:e,version:s,setCommit:l,setDateReleased:r,setVersion:n}}});var Y=a(4842),U=a(4554),Z=a(3944),q=a(5836),y=a(2165),C=a(677),E=a(7518),Q=a.n(E);S.render=f,S.__scopeId="data-v-45e79819";const _=S;Q()(S,"components",{QInput:Y.Z,QIcon:U.Z,QPopupProxy:Z.Z,QDate:q.Z,QBtn:y.Z}),Q()(S,"directives",{ClosePopup:C.Z})}}]);