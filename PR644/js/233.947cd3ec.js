"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[233],{2573:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var a=s(3673);const r=(0,a.HX)("data-v-c52153bc");(0,a.dD)("data-v-c52153bc");const o=(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Start ")],-1),l={id:"form-content"},n={class:"question"},i=(0,a.Uk)(" What type of work does this CITATION.cff describe? "),c={class:"question"},m=(0,a.Uk)(" What is the title of the work? "),u={class:"question"},d=(0,a.Uk)(" What do you want citers to do with the information provided in your CITATION.cff file? ");(0,a.Cn)();const p=r(((e,t,s,r,p,g)=>{const h=(0,a.up)("SchemaGuideLink"),f=(0,a.up)("q-option-group"),v=(0,a.up)("q-input");return(0,a.wg)(),(0,a.j4)(a.HY,null,[o,(0,a.Wm)("div",l,[(0,a.Wm)("h2",n,[i,(0,a.Wm)(h,{anchor:"#type"})]),(0,a.Wm)(f,{type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":[e.setType,e.parseAndSetMessagePlaceHolder]},null,8,["model-value","options","onUpdate:modelValue"]),(0,a.Wm)("h2",c,[m,(0,a.Wm)(h,{anchor:"#title"})]),(0,a.Wm)(v,{"bg-color":"white",label:"title",outlined:"",standout:"",class:[e.titleErrors.length>0?"has-error":""],"model-value":e.title,error:e.titleErrors.length>0,"error-message":e.titleErrors.join(", "),"onUpdate:modelValue":e.setTitle},null,8,["class","model-value","error","error-message","onUpdate:modelValue"]),(0,a.Wm)("h2",u,[d,(0,a.Wm)(h,{anchor:"#message"})]),(0,a.Wm)(v,{"bg-color":"white",label:"message",outlined:"",standout:"",placeholder:e.messagePlaceHolder,class:[e.messageErrors.length>0?"has-error":""],"model-value":e.message,error:e.messageErrors.length>0,"error-message":e.messageErrors.join(", "),"onUpdate:modelValue":e.setMessage},null,8,["placeholder","class","model-value","error","error-message","onUpdate:modelValue"])])],64)}));var g=s(7996),h=s(1959),f=s(1622),v=s(1364),y=s(6513),W=s(8875);const w=(0,a.aZ)({name:"ScreenStart",components:{SchemaGuideLink:f.Z},setup(){(0,a.ic)((()=>{const{setErrorStateScreenStart:e}=(0,y.v)();e(document.getElementsByClassName("has-error").length>0)}));const{message:e,title:t,type:s,setMessage:r,setTitle:o,setType:l}=(0,v.Y)(),n=(0,h.iH)("e.g. If you use this software, please cite it using the metadata from this file."),{errors:i}=(0,W.V)(),c=(0,a.Fl)((()=>g.Tc.filter((0,g.uY)(i.value)).map((e=>e.replace.message)))),m=(0,a.Fl)((()=>g.Sh.filter((0,g.uY)(i.value)).map((e=>e.replace.message)))),u=()=>{const e=/(software|dataset)/gim,t=e.exec(n.value);t&&(n.value=n.value.split(t[0]).join(s.value))};return{message:e,messageErrors:c,title:t,titleErrors:m,type:s,typeOptions:[{label:"Software",value:"software"},{label:"Dataset",value:"dataset"}],setMessage:r,messagePlaceHolder:n,parseAndSetMessagePlaceHolder:u,setTitle:o,setType:l}}});var b=s(7011),S=s(4842),k=s(7518),T=s.n(k);w.render=p,w.__scopeId="data-v-c52153bc";const E=w;T()(w,"components",{QOptionGroup:b.Z,QInput:S.Z})}}]);