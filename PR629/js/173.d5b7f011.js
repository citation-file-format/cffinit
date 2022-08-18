"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[173],{8539:(e,o,r)=>{r.r(o),r.d(o,{default:()=>ne});var a=r(3673),t=r(2323);const s=(0,a.HX)("data-v-ff443be4");(0,a.dD)("data-v-ff443be4");const n={id:"form",class:"col-12 col-lg-5 col-sm-10"},l=(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Authors ")],-1),i={id:"form-content"},u={class:"question"},d=(0,a.Uk)(" Who are the author(s) of the work? "),m={class:"scroll-to-bottom-container"},c=(0,a.Wm)("span",{class:"bottom"},null,-1),p=(0,a.Uk)(" Add author "),h={id:"form-button-bar"};(0,a.Cn)();const v=s(((e,o,r,v,f,g)=>{const b=(0,a.up)("Stepper"),w=(0,a.up)("SchemaGuideLink"),W=(0,a.up)("AuthorCardViewing"),y=(0,a.up)("AuthorCardEditing"),k=(0,a.up)("q-btn"),x=(0,a.up)("q-banner"),A=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)(b),(0,a.Wm)("div",n,[l,(0,a.Wm)("div",i,[(0,a.Wm)("h2",u,[d,(0,a.Wm)(w,{anchor:"#authors"})]),(0,a.Wm)("div",m,[c,(0,a.Wm)("div",null,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.authors,((r,t)=>((0,a.wg)(),(0,a.j4)("div",{class:"q-mb-md q-mr-lg",key:t},[e.editingId!==t?((0,a.wg)(),(0,a.j4)(W,{key:0,index:t,author:r,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=t,onMoveDown:o=>e.moveAuthorDown(t),onMoveUp:o=>e.moveAuthorUp(t)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,a.wg)(),(0,a.j4)(y,(0,a.dG)({key:1,index:t},r,{onUpdate:e.setAuthorField,onClosePressed:o[1]||(o[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor}),null,16,["index","onUpdate","onRemovePressed"]))])))),128))])]),(0,a.Wm)(k,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:s((()=>[p])),_:1},8,["onClick"]),e.authorsErrors.length>0?((0,a.wg)(),(0,a.j4)(x,{key:0,class:["bg-warning","text-negative",e.authorsErrors.length>0?"has-error":""]},{default:s((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.authorsErrors,((e,o)=>((0,a.wg)(),(0,a.j4)("div",{key:o},(0,t.zw)(e),1)))),128))])),_:1},8,["class"])):(0,a.kq)("",!0)]),(0,a.Wm)("div",h,[(0,a.Wm)(A)])])],64)}));var f=r(7996),g=r(1959),b=r(2064);const w=(0,a.HX)("data-v-57872f9b");(0,a.dD)("data-v-57872f9b");const W={class:"row"},y={class:"subquestion"},k=(0,a.Uk)(" The person's given names "),x={class:"row"},A=(0,a.Wm)("div",{class:"row"},[(0,a.Wm)("h3",{class:"subquestion"}," The person's last names, split into parts ")],-1),_={class:"row"},C={class:"row"},E={class:"subquestion"},S=(0,a.Uk)(" The person's email address "),q={class:"row"},U={class:"row"},I={class:"subquestion col"},P=(0,a.Uk)(" The person's affiliation "),N={class:"subquestion col"},Z=(0,a.Uk)(" The person's ORCID "),j={class:"row"};(0,a.Cn)();const D=w(((e,o,r,t,s,n)=>{const l=(0,a.up)("SchemaGuideLink"),i=(0,a.up)("q-input"),u=(0,a.up)("q-btn"),d=(0,a.up)("q-card-actions"),m=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(m,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:w((()=>[(0,a.Wm)("div",W,[(0,a.Wm)("h3",y,[k,(0,a.Wm)(l,{anchor:"#definitionspersongiven-names"})])]),(0,a.Wm)("div",x,[(0,a.Wm)(i,{autofocus:"","bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,error:!1,"error-message":"","onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update","givenNames",o)),ref:"givenNamesRef"},null,8,["model-value"])]),A,(0,a.Wm)("div",_,[(0,a.Wm)(i,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,error:!1,"error-message":"","onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","nameParticle",o))},{default:w((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,a.Wm)(i,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,error:!1,"error-message":"","onUpdate:modelValue":o[3]||(o[3]=o=>e.$emit("update","familyNames",o))},{default:w((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,a.Wm)(i,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,error:!1,"error-message":"","onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameSuffix",o))},{default:w((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value"])]),(0,a.Wm)("div",C,[(0,a.Wm)("h3",E,[S,(0,a.Wm)(l,{anchor:"#definitionspersonemail"})])]),(0,a.Wm)("div",q,[(0,a.Wm)(i,{"bg-color":"white",class:["col",e.emailErrors.length>0?"has-error":""],dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,error:e.emailErrors.length>0,"error-message":e.emailErrors.join(", "),"onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","email",o))},null,8,["model-value","class","error","error-message"])]),(0,a.Wm)("div",U,[(0,a.Wm)("h3",I,[P,(0,a.Wm)(l,{anchor:"#definitionspersonaffiliation"})]),(0,a.Wm)("h3",N,[Z,(0,a.Wm)(l,{anchor:"#definitionspersonorcid"})])]),(0,a.Wm)("div",j,[(0,a.Wm)(i,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,error:!1,"error-message":"","onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,a.Wm)(i,{"bg-color":"white",class:["col",e.orcidErrors.length>0?"has-error":""],dense:"","fill-mask":"",mask:"https://orcid.org/####-####-####-###X",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,error:e.orcidErrors.length>0,"error-message":e.orcidErrors.join(", "),"onUpdate:modelValue":o[7]||(o[7]=o=>e.$emit("update","orcid",o))},null,8,["class","model-value","error","error-message"])]),(0,a.Wm)(d,{align:"right"},{default:w((()=>[(0,a.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[8]||(o[8]=o=>e.$emit("removePressed"))}),(0,a.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:o[9]||(o[9]=o=>e.$emit("closePressed"))})])),_:1})])),_:1})}));var V=r(1622),T=r(6513),Y=r(8875);const $=(0,a.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""}},setup(e){(0,a.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,T.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,Y.V)(),r=(0,a.Fl)((()=>(0,f.r9)(e.index).filter((0,f.uY)(o.value)).map((e=>e.replace.message)))),t=(0,a.Fl)((()=>(0,f.CB)(e.index).filter((0,f.uY)(o.value)).map((e=>e.replace.message))));return{emailErrors:t,orcidErrors:r}},emits:["closePressed","removePressed","update"],components:{SchemaGuideLink:V.Z}});var F=r(151),B=r(4842),z=r(9367),H=r(2165),Q=r(7518),R=r.n(Q);$.render=D,$.__scopeId="data-v-57872f9b";const G=$;R()($,"components",{QCard:F.Z,QInput:B.Z,QCardActions:z.Z,QBtn:H.Z});const L=(0,a.HX)("data-v-7773fae4");(0,a.dD)("data-v-7773fae4");const O={style:{"flex-grow":"1.0"}};(0,a.Cn)();const M=L(((e,o,r,s,n,l)=>{const i=(0,a.up)("q-btn"),u=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(u,{bordered:"",class:["bg-formcard",e.authorErrors.length>0?"red-border has-error":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:L((()=>[(0,a.Wm)("div",O,[(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,(0,t.zw)(e.author.givenNames)+" "+(0,t.zw)(e.author.nameParticle)+" "+(0,t.zw)(e.author.familyNames)+" "+(0,t.zw)(e.author.nameSuffix),1),(0,a.Wm)("li",null,(0,t.zw)(e.author.email),1),(0,a.Wm)("li",null,(0,t.zw)(e.author.affiliation)+" "+(0,t.zw)(e.author.orcid),1)])]),(0,a.Wm)("div",null,[(0,a.Wm)(i,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,a.Wm)(i,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,a.Wm)(i,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))})])])),_:1},8,["class"])})),X=(0,a.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},setup(e){(0,a.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,T.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,Y.V)(),r=(0,a.Fl)((()=>(0,f.CB)(e.index).filter((0,f.uY)(o.value)).map((e=>e.replace.message)))),t=(0,a.Fl)((()=>(0,f.r9)(e.index).filter((0,f.uY)(o.value)).map((e=>e.replace.message)))),s=(0,a.Fl)((()=>f.Lf.filter((0,f.uY)(o.value)).filter((0,f.uY)(o.value,(0,f.Uh)(e.index))).map((e=>e.replace.message)))),n=(0,a.Fl)((()=>[...r.value,...t.value,...s.value]));return{authorErrors:n}},emits:["editPressed","moveDown","moveUp"]});X.render=M,X.__scopeId="data-v-7773fae4";const J=X;R()(X,"components",{QCard:F.Z,QBtn:H.Z});var K=r(5010),ee=r(146),oe=r(4009),re=r(1364),ae=function(e,o,r,a){function t(e){return e instanceof r?e:new r((function(o){o(e)}))}return new(r||(r=Promise))((function(r,s){function n(e){try{i(a.next(e))}catch(o){s(o)}}function l(e){try{i(a["throw"](e))}catch(o){s(o)}}function i(e){e.done?r(e.value):t(e.value).then(n,l)}i((a=a.apply(e,o||[])).next())}))};const te=(0,a.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:V.Z,Stepper:K.Z,StepperActions:ee.Z,AuthorCardEditing:G,AuthorCardViewing:J},setup(){(0,a.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,T.v)();e(document.getElementsByClassName("has-error").length>0)}));const{authors:e,setAuthors:o}=(0,re.Y)(),{errors:r}=(0,Y.V)(),t=(0,g.iH)(-1),s=()=>ae(this,void 0,void 0,(function*(){const r={},s=[...e.value,r];o(s),t.value=s.length-1,yield(0,a.Y3)(),(0,oe.O)()})),n=()=>{const r=[...e.value];r.splice(t.value,1),o(r),t.value=-1},l=(r,a)=>{const s=Object.assign({},e.value[t.value]);s[r]=""===a||"orcid"===r&&"https://orcid.org/____-____-____-____"===a?void 0:a,e.value[t.value]=s,o(e.value)},i=r=>{(0,b.A)(r,e.value,o),t.value===r&&r>0?t.value=t.value-1:t.value===r-1&&(t.value=t.value+1)},u=r=>{(0,b.v)(r,e.value,o),t.value===r&&r<e.value.length-1?t.value=t.value+1:t.value===r+1&&(t.value=t.value-1)},d=(0,a.Fl)((()=>f.p2.filter((0,f.uY)(r.value)).map((e=>e.replace.message))));return{addAuthor:s,authors:e,authorsErrors:d,editingId:t,moveAuthorDown:u,moveAuthorUp:i,removeAuthor:n,setAuthorField:l}}});var se=r(5607);te.render=v,te.__scopeId="data-v-ff443be4";const ne=te;R()(te,"components",{QBtn:H.Z,QBanner:se.Z})}}]);