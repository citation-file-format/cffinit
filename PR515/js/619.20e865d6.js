"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[619],{7997:(e,o,a)=>{a.r(o),a.d(o,{default:()=>le});var t=a(3673),n=a(2323);const l=(0,t.HX)("data-v-79ae4979");(0,t.dD)("data-v-79ae4979");const i={id:"metroline"},r={id:"form"},s=(0,t.Wm)("div",{id:"form-title"},[(0,t.Wm)("h1",{class:"page-title"}," Authors ")],-1),d={id:"form-content"},u={class:"question"},m=(0,t.Uk)(" Who are the author(s) of the work? "),c={class:"scroll-to-bottom-container"},v=(0,t.Wm)("span",{class:"bottom"},null,-1),p=(0,t.Uk)(" Add author "),h={id:"form-button-bar"};(0,t.Cn)();const f=l(((e,o,a,f,g,w)=>{const b=(0,t.up)("Stepper"),W=(0,t.up)("SchemaGuideLink"),y=(0,t.up)("AuthorCardViewing"),k=(0,t.up)("AuthorCardEditing"),x=(0,t.up)("q-btn"),A=(0,t.up)("q-banner"),C=(0,t.up)("StepperActions");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",i,[(0,t.Wm)(b)]),(0,t.Wm)("div",r,[s,(0,t.Wm)("div",d,[(0,t.Wm)("p",u,[m,(0,t.Wm)(W,{anchor:"#authors"})]),(0,t.Wm)("div",c,[v,(0,t.Wm)("div",null,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.authors,((a,n)=>((0,t.wg)(),(0,t.j4)("div",{class:"q-mb-md q-mr-lg",key:n},[e.editingId!==n?((0,t.wg)(),(0,t.j4)(y,{key:0,index:n,author:a,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=n,onMoveDown:o=>e.moveAuthorDown(n),onMoveUp:o=>e.moveAuthorUp(n)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,t.wg)(),(0,t.j4)(k,(0,t.dG)({key:1,index:n,"num-authors":e.authors.length},a,{onUpdate:e.setAuthorField,onClosePressed:o[1]||(o[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor,onMoveDown:o=>e.moveAuthorDown(n),onMoveUp:o=>e.moveAuthorUp(n)}),null,16,["index","num-authors","onUpdate","onRemovePressed","onMoveDown","onMoveUp"]))])))),128))])]),(0,t.Wm)(x,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:l((()=>[p])),_:1},8,["onClick"]),e.errors.authors.length>0?((0,t.wg)(),(0,t.j4)(A,{key:0,class:"bg-warning text-negative"},{default:l((()=>[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.errors.authors,((e,o)=>((0,t.wg)(),(0,t.j4)("div",{key:o},(0,n.zw)(e),1)))),128))])),_:1})):(0,t.kq)("",!0)]),(0,t.Wm)("div",h,[(0,t.Wm)(C)])])],64)}));var g=a(1730),w=a(1959),b=a(2064),W=a(4009),y=a(4897);const k=(0,t.HX)("data-v-1a1938ce");(0,t.dD)("data-v-1a1938ce");const x={class:"row"},A={class:"text-dark"},C=(0,t.Uk)(" The person's given names "),U={class:"row"},q=(0,t.Wm)("div",{class:"row"},[(0,t.Wm)("p",{class:"text-dark"}," The person's last names, split into parts ")],-1),S={class:"row"},D={class:"row"},I={class:"text-dark"},P=(0,t.Uk)(" The person's email address "),Z={class:"row"},$={class:"row"},_={class:"text-dark col"},N=(0,t.Uk)(" The person's affiliation "),j={class:"text-dark col"},T=(0,t.Uk)(" The person's ORCID "),V={class:"row"};(0,t.Cn)();const z=k(((e,o,a,n,l,i)=>{const r=(0,t.up)("SchemaGuideLink"),s=(0,t.up)("q-input"),d=(0,t.up)("q-btn"),u=(0,t.up)("q-card-actions"),m=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(m,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:k((()=>[(0,t.Wm)("div",x,[(0,t.Wm)("p",A,[C,(0,t.Wm)(r,{anchor:"#definitionspersongiven-names"})])]),(0,t.Wm)("div",U,[(0,t.Wm)(s,{autofocus:"","bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,"onUpdate:modelValue":o[1]||(o[1]=o=>e.$emit("update","givenNames",o)),ref:"givenNamesRef"},null,8,["model-value"])]),q,(0,t.Wm)("div",S,[(0,t.Wm)(s,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,"onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","nameParticle",o))},{default:k((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,t.Wm)(s,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,"onUpdate:modelValue":o[3]||(o[3]=o=>e.$emit("update","familyNames",o))},{default:k((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value"]),(0,t.Wm)(s,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,"onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameSuffix",o))},{default:k((()=>[(0,t.Wm)(r,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value"])]),(0,t.Wm)("div",D,[(0,t.Wm)("p",I,[P,(0,t.Wm)(r,{anchor:"#definitionsperson-email"})])]),(0,t.Wm)("div",Z,[(0,t.Wm)(s,{"bg-color":"white",class:"col",dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,"onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","email",o))},null,8,["model-value"])]),(0,t.Wm)("div",$,[(0,t.Wm)("p",_,[N,(0,t.Wm)(r,{anchor:"#definitionsperson-affiliation"})]),(0,t.Wm)("p",j,[T,(0,t.Wm)(r,{anchor:"#definitionsperson-orcid"})])]),(0,t.Wm)("div",V,[(0,t.Wm)(s,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,"onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,t.Wm)(s,{"bg-color":"white",class:"col",dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",label:"orcid",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,"onUpdate:modelValue":o[7]||(o[7]=o=>e.$emit("update","orcid",o))},null,8,["model-value"])]),(0,t.Wm)(u,{align:"right"},{default:k((()=>[(0,t.Wm)(d,{color:"blue",dense:"",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[8]||(o[8]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(d,{color:"blue",dense:"",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[9]||(o[9]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(d,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[10]||(o[10]=o=>e.$emit("removePressed"))}),(0,t.Wm)(d,{dense:"",icon:"done",label:"Done",onClick:o[11]||(o[11]=o=>e.$emit("closePressed"))})])),_:1})])),_:1})}));var H=a(1622);const M=(0,t.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""},numAuthors:{type:Number,default:0}},emits:["closePressed","removePressed","update","moveUp","moveDown"],components:{SchemaGuideLink:H.Z}});var Q=a(151),E=a(4842),R=a(9367),Y=a(2165),F=a(7518),G=a.n(F);M.render=z,M.__scopeId="data-v-1a1938ce";const O=M;G()(M,"components",{QCard:Q.Z,QInput:E.Z,QCardActions:R.Z,QBtn:Y.Z});const B=(0,t.HX)("data-v-f6de709c");(0,t.dD)("data-v-f6de709c");const L={style:{"flex-grow":"1.0"}};(0,t.Cn)();const X=B(((e,o,a,l,i,r)=>{const s=(0,t.up)("q-btn"),d=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(d,{bordered:"",flat:"",style:{display:"flex","flex-direction":"row"}},{default:B((()=>[(0,t.Wm)("div",L,[(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,(0,n.zw)(e.author.givenNames)+" "+(0,n.zw)(e.author.nameParticle)+" "+(0,n.zw)(e.author.familyNames)+" "+(0,n.zw)(e.author.nameSuffix),1),(0,t.Wm)("li",null,(0,n.zw)(e.author.email),1),(0,t.Wm)("li",null,(0,n.zw)(e.author.affiliation)+" "+(0,n.zw)(e.author.orcid),1)])]),(0,t.Wm)("div",null,[(0,t.Wm)(s,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(s,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(s,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))})])])),_:1})})),J=(0,t.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},emits:["editPressed","moveDown","moveUp"]});J.render=X,J.__scopeId="data-v-f6de709c";const K=J;G()(J,"components",{QCard:Q.Z,QBtn:Y.Z});var ee=a(9192),oe=a(623),ae=function(e,o,a,t){function n(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,l){function i(e){try{s(t.next(e))}catch(o){l(o)}}function r(e){try{s(t["throw"](e))}catch(o){l(o)}}function s(e){e.done?a(e.value):n(e.value).then(i,r)}s((t=t.apply(e,o||[])).next())}))};const te=(0,t.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:H.Z,Stepper:ee.Z,StepperActions:oe.Z,AuthorCardEditing:O,AuthorCardViewing:K},setup(){const{authors:e,setAuthors:o,errors:a}=(0,y.Y)(),n=(0,w.iH)(0),l=()=>ae(this,void 0,void 0,(function*(){let a;const l={};a=void 0===e.value?[l]:[...e.value,l],o(a),n.value=a.length-1,yield(0,t.Y3)(),(0,W.O)()})),i=()=>{if(void 0!==e.value){const a=[...e.value];a.splice(n.value,1),o(a),n.value=-1,Array.isArray(a)&&0===a.length&&o(void 0)}},r=(a,t)=>{if(void 0!==e.value){const l=Object.assign({},e.value[n.value]);l[a]=""===t?void 0:t,e.value[n.value]=l,o(e.value)}},s=a=>{void 0!==e.value&&((0,b.A)(a,e.value,o),n.value===a&&a>0?n.value=n.value-1:n.value===a-1&&(n.value=n.value+1))},d=a=>{void 0!==e.value&&((0,b.v)(a,e.value,o),n.value===a&&a<e.value.length-1?n.value=n.value+1:n.value===a+1&&(n.value=n.value-1))},u=(0,t.Fl)((()=>({authors:g.p2.filter((0,g.uY)(a.value)).map((e=>e.replace.message))})));return{addAuthor:l,authors:e,editingId:n,errors:u,moveAuthorDown:d,moveAuthorUp:s,removeAuthor:i,setAuthorField:r}}});var ne=a(5607);te.render=f,te.__scopeId="data-v-79ae4979";const le=te;G()(te,"components",{QBtn:Y.Z,QBanner:ne.Z})}}]);