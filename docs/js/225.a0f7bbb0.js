"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[225],{1364:(e,t,s)=>{s.d(t,{Y:()=>r});var a=s(1959),l=s(3673);const o=(0,a.iH)({abstract:"",cffVersion:"1.2.0",commit:"",dateReleased:"",identifiers:[],keywords:[],license:"",message:"",repository:"",repositoryArtifact:"",repositoryCode:"",title:"",type:"software",url:"",version:""});function r(){return{abstract:(0,l.Fl)((()=>o.value.abstract)),commit:(0,l.Fl)((()=>o.value.commit)),cffVersion:(0,l.Fl)((()=>o.value.cffVersion)),dateReleased:(0,l.Fl)((()=>o.value.dateReleased)),identifiers:(0,l.Fl)((()=>o.value.identifiers)),keywords:(0,l.Fl)((()=>o.value.keywords)),license:(0,l.Fl)((()=>o.value.license)),message:(0,l.Fl)((()=>o.value.message)),repository:(0,l.Fl)((()=>o.value.repository)),repositoryArtifact:(0,l.Fl)((()=>o.value.repositoryArtifact)),repositoryCode:(0,l.Fl)((()=>o.value.repositoryCode)),title:(0,l.Fl)((()=>o.value.title)),type:(0,l.Fl)((()=>o.value.type)),url:(0,l.Fl)((()=>o.value.url)),version:(0,l.Fl)((()=>o.value.version)),setAbstract:e=>{o.value.abstract=e},setCommit:e=>{o.value.commit=e},setDateReleased:e=>{o.value.dateReleased=e},setIdentifiers:e=>{o.value.identifiers=e},setKeywords:e=>{o.value.keywords=e},setLicense:e=>{o.value.license=e},setMessage:e=>{o.value.message=e},setRepository:e=>{o.value.repository=e},setRepositoryArtifact:e=>{o.value.repositoryArtifact=e},setRepositoryCode:e=>{o.value.repositoryCode=e},setTitle:e=>{o.value.title=e},setType:e=>{o.value.type=e},setUrl:e=>{o.value.url=e},setVersion:e=>{o.value.version=e},reset:()=>{o.value={abstract:"",cffVersion:"1.2.0",commit:"",dateReleased:"",identifiers:[],keywords:[],license:"",message:"",repository:"",repositoryArtifact:"",repositoryCode:"",title:"",type:"software",url:"",version:""}}}}},8150:(e,t,s)=>{s.d(t,{g:()=>r});var a=s(1959),l=s(3673);const o=(0,a.iH)(1);function r(){return{step:(0,l.Fl)((()=>o.value)),next:()=>{o.value=o.value+1},previous:()=>{o.value=o.value-1},goto:e=>{o.value=e}}}},6281:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(3673);const l={class:"row action-buttons"},o={class:"col"},r={class:"col q-mr-lg",align:"right"};function i(e,t,s,i,n,u){const c=(0,a.up)("q-btn"),d=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",l,[(0,a.Wm)("div",o,[(0,a.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:e.navigatePrevious},null,8,["onClick"])]),(0,a.Wm)("div",r,[(0,a.Wm)(d,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,a.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:e.navigateNext},null,8,["onClick"])])),_:1})])])}var n=s(9582),u=s(8150);const c=(0,a.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,n.tv)(),s=()=>{e.next();const s=`/${e.step.value}`;return t.push({path:s})},a=()=>{e.previous();const s=`/${e.step.value}`;return t.push({path:s})},l=s=>{e.goto(s);const a=`/${e.step.value}`;return t.push({path:a})};return{step:e,navigateNext:s,navigatePrevious:a,navigateTo:l}}});var d=s(8240),v=s(6375),m=s(7518),p=s.n(m);c.render=i;const f=c;p()(c,"components",{QBtn:d.Z,QBtnGroup:v.Z})},6225:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(3673);const l=(0,a.HX)("data-v-55e18f66");(0,a.dD)("data-v-55e18f66");const o={class:"q-pa-md col-flex"},r={class:"q-gutter-md title-field text-dark"},i=(0,a.Wm)("p",{class:"q-mt-xl page-title"}," Version specific ",-1),n=(0,a.Wm)("p",{class:"question"}," What is the commit identifier of the work? ",-1),u=(0,a.Wm)("p",{class:"question"}," What is the version of the work? ",-1),c=(0,a.Wm)("p",{class:"question"}," When was the version released? ",-1);(0,a.Cn)();const d=l(((e,t,s,l,d,v)=>{const m=(0,a.up)("q-input"),p=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",o,[(0,a.Wm)("div",r,[i,n,(0,a.Wm)(m,{"bg-color":"white",label:"commit",outlined:"",standout:"","model-value":e.commit,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setCommit},null,8,["model-value","rules","onUpdate:modelValue"]),u,(0,a.Wm)(m,{"bg-color":"white",label:"version",outlined:"",standout:"","model-value":e.version,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setVersion},null,8,["model-value","rules","onUpdate:modelValue"]),c,(0,a.Wm)(m,{"bg-color":"white",label:"date-released",outlined:"",standout:"","model-value":e.dateReleased,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setDateReleased},null,8,["model-value","rules","onUpdate:modelValue"])])]),(0,a.Wm)(p)],64)}));var v=s(6281),m=s(1364);const p=(0,a.aZ)({name:"VersionSpecific",components:{StepperActions:v.Z},setup(){const{commit:e,dateReleased:t,version:s,setCommit:a,setDateReleased:l,setVersion:o}=(0,m.Y)();return{commit:e,dateReleased:t,version:s,setCommit:a,setDateReleased:l,setVersion:o}}});var f=s(8908),y=s(7518),g=s.n(y);p.render=d,p.__scopeId="data-v-55e18f66";const h=p;g()(p,"components",{QInput:f.Z})}}]);