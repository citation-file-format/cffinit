"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[367],{9849:(e,o,a)=>{a.r(o),a.d(o,{default:()=>ie});var t=a(3673),l=a(2323);const i=(0,t.HX)("data-v-3c943e3c");(0,t.dD)("data-v-3c943e3c");const r=(0,t.Wm)("div",{id:"form-title"},[(0,t.Wm)("h1",{class:"page-title"}," Authors ")],-1),n={id:"form-content"},s={class:"question"},m=(0,t.Uk)(" Who are the author(s) of the work? "),u={class:"scroll-to-bottom-container"},d=(0,t.Wm)("span",{class:"bottom"},null,-1),c=(0,t.Uk)(" Add author ");(0,t.Cn)();const h=i(((e,o,a,h,p,f)=>{const g=(0,t.up)("q-icon"),v=(0,t.up)("AuthorCardViewing"),w=(0,t.up)("AuthorCardEditing"),b=(0,t.up)("q-btn"),W=(0,t.up)("q-banner"),y=(0,t.up)("InfoDialog");return(0,t.wg)(),(0,t.j4)(t.HY,null,[r,(0,t.Wm)("div",n,[(0,t.Wm)("h2",s,[m,(0,t.Wm)(g,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[1]||(o[1]=o=>e.showAuthorsHelp=!0),style:{cursor:"pointer"}})]),(0,t.Wm)("div",u,[d,(0,t.Wm)("div",null,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.authors,((a,l)=>((0,t.wg)(),(0,t.j4)("div",{class:"q-mb-md q-mr-lg",key:l},[e.editingId!==l?((0,t.wg)(),(0,t.j4)(v,{key:0,index:l,author:a,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=l,onMoveDown:o=>e.moveAuthorDown(l),onMoveUp:o=>e.moveAuthorUp(l),onRemovePressed:o=>e.removeAuthor(l)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp","onRemovePressed"])):((0,t.wg)(),(0,t.j4)(w,(0,t.dG)({key:1,index:l},a,{onUpdate:e.setAuthorField,onClosePressed:o[2]||(o[2]=()=>e.editingId=-1),onRemovePressed:o[3]||(o[3]=o=>e.removeAuthor(e.editingId))}),null,16,["index","onUpdate"]))])))),128))])]),(0,t.Wm)(b,{class:"q-mt-md q-mb-md",color:"primary","data-cy":"btn-add-author","no-caps":"",onClick:e.addAuthor},{default:i((()=>[c])),_:1},8,["onClick"]),e.authorsErrors.length>0?((0,t.wg)(),(0,t.j4)(W,{key:0,class:["bg-warning","text-negative",e.authorsErrors.length>0?"has-error":""]},{default:i((()=>[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.authorsErrors,((e,o)=>((0,t.wg)(),(0,t.j4)("div",{key:o},(0,l.zw)(e),1)))),128))])),_:1},8,["class"])):(0,t.kq)("",!0),(0,t.Wm)(y,{modelValue:e.showAuthorsHelp,"onUpdate:modelValue":o[4]||(o[4]=o=>e.showAuthorsHelp=o),data:e.helpData.authors},null,8,["modelValue","data"])])],64)}));var p=a(7996),f=a(1959),g=a(2064);const v=(0,t.HX)("data-v-d722bed6");(0,t.dD)("data-v-d722bed6");const w={class:"row"},b={class:"subquestion"},W=(0,t.Uk)(" The person's given names "),y={class:"row"},k={class:"row"},x={class:"subquestion"},D=(0,t.Uk)(" The person's last names, split into parts "),C={class:"row"},H={class:"row"},A={class:"subquestion"},V=(0,t.Uk)(" The person's email address "),E={class:"row"},U={class:"row"},q={class:"subquestion col"},N=(0,t.Uk)(" The person's affiliation "),S={class:"subquestion col"},P=(0,t.Uk)(" The person's ORCID "),j={class:"row"};(0,t.Cn)();const I=v(((e,o,a,l,i,r)=>{const n=(0,t.up)("q-icon"),s=(0,t.up)("q-input"),m=(0,t.up)("q-btn"),u=(0,t.up)("q-card-actions"),d=(0,t.up)("q-card"),c=(0,t.up)("InfoDialog");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)(d,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:v((()=>[(0,t.Wm)("div",w,[(0,t.Wm)("h3",b,[W,(0,t.Wm)(n,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[1]||(o[1]=o=>e.showHelpDialogName=!0),style:{cursor:"pointer"}})])]),(0,t.Wm)("div",y,[(0,t.Wm)(s,{autofocus:"","bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"","model-value":e.givenNames,error:!1,"error-message":"","onUpdate:modelValue":o[2]||(o[2]=o=>e.$emit("update","givenNames",o))},null,8,["model-value"])]),(0,t.Wm)("div",k,[(0,t.Wm)("h3",x,[D,(0,t.Wm)(n,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[3]||(o[3]=o=>e.showHelpDialogLastName=!0),style:{cursor:"pointer"}})])]),(0,t.Wm)("div",C,[(0,t.Wm)(s,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"","model-value":e.nameParticle,error:!1,"error-message":"","onUpdate:modelValue":o[4]||(o[4]=o=>e.$emit("update","nameParticle",o))},null,8,["model-value"]),(0,t.Wm)(s,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"","model-value":e.familyNames,error:!1,"error-message":"","onUpdate:modelValue":o[5]||(o[5]=o=>e.$emit("update","familyNames",o))},null,8,["model-value"]),(0,t.Wm)(s,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"","model-value":e.nameSuffix,error:!1,"error-message":"","onUpdate:modelValue":o[6]||(o[6]=o=>e.$emit("update","nameSuffix",o))},null,8,["model-value"])]),(0,t.Wm)("div",H,[(0,t.Wm)("h3",A,[V,(0,t.Wm)(n,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[7]||(o[7]=o=>e.showHelpDialogEmail=!0),style:{cursor:"pointer"}})])]),(0,t.Wm)("div",E,[(0,t.Wm)(s,{"bg-color":"white",class:["col",e.emailErrors.length>0?"has-error":""],dense:"",label:"email",outlined:"",standout:"",type:"email","model-value":e.email,error:e.emailErrors.length>0,"error-message":e.emailErrors.join(", "),"onUpdate:modelValue":o[8]||(o[8]=o=>e.$emit("update","email",o))},null,8,["model-value","class","error","error-message"])]),(0,t.Wm)("div",U,[(0,t.Wm)("h3",q,[N,(0,t.Wm)(n,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[9]||(o[9]=o=>e.showHelpDialogAffiliation=!0),style:{cursor:"pointer"}})]),(0,t.Wm)("h3",S,[P,(0,t.Wm)(n,{name:"ion-information-circle-outline",size:"24px",color:"primary",onClick:o[10]||(o[10]=o=>e.showHelpDialogOrcid=!0),style:{cursor:"pointer"}})])]),(0,t.Wm)("div",j,[(0,t.Wm)(s,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"","model-value":e.affiliation,error:!1,"error-message":"","onUpdate:modelValue":o[11]||(o[11]=o=>e.$emit("update","affiliation",o))},null,8,["model-value"]),(0,t.Wm)(s,{"bg-color":"white",class:["col",e.orcidErrors.length>0?"has-error":""],dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",label:"orcid",mask:"https://orcid.org/####-####-####-###X",outlined:"",standout:"","model-value":e.orcid,error:e.orcidErrors.length>0,"error-message":e.orcidErrors.join(", "),"onUpdate:modelValue":o[12]||(o[12]=o=>e.$emit("update","orcid",o))},null,8,["class","model-value","error","error-message"])]),(0,t.Wm)(u,{align:"right"},{default:v((()=>[(0,t.Wm)(m,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:o[13]||(o[13]=o=>e.$emit("removePressed"))}),(0,t.Wm)(m,{"data-cy":"btn-done",dense:"",icon:"done",label:"Done",onClick:o[14]||(o[14]=o=>e.$emit("closePressed"))})])),_:1})])),_:1}),(0,t.Wm)(c,{modelValue:e.showHelpDialogName,"onUpdate:modelValue":o[15]||(o[15]=o=>e.showHelpDialogName=o),data:e.helpData.name},null,8,["modelValue","data"]),(0,t.Wm)(c,{modelValue:e.showHelpDialogLastName,"onUpdate:modelValue":o[16]||(o[16]=o=>e.showHelpDialogLastName=o),data:e.helpData.lastName},null,8,["modelValue","data"]),(0,t.Wm)(c,{modelValue:e.showHelpDialogEmail,"onUpdate:modelValue":o[17]||(o[17]=o=>e.showHelpDialogEmail=o),data:e.helpData.email},null,8,["modelValue","data"]),(0,t.Wm)(c,{modelValue:e.showHelpDialogAffiliation,"onUpdate:modelValue":o[18]||(o[18]=o=>e.showHelpDialogAffiliation=o),data:e.helpData.affiliation},null,8,["modelValue","data"]),(0,t.Wm)(c,{modelValue:e.showHelpDialogOrcid,"onUpdate:modelValue":o[19]||(o[19]=o=>e.showHelpDialogOrcid=o),data:e.helpData.orcid},null,8,["modelValue","data"])],64)}));var Z=a(7389),z=a(6513),T=a(8875);const Y=(0,t.aZ)({name:"AuthorCardEditing",components:{InfoDialog:Z.Z},props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""}},setup(e){(0,t.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,z.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,T.V)(),a=(0,t.Fl)((()=>(0,p.r9)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message)))),l=(0,t.Fl)((()=>(0,p.CB)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message)))),i={name:{title:"given-names",url:[{text:"Click here to see the documentation for given-names.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersongiven-names"}],description:"The person's given names.",examples:["Jane","John"]},lastName:{title:"name-particle, family-names, name-suffix",url:[{text:"Click here to see the documentation for name-particle.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-particle"},{text:"Click here to see the documentation for family-name.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonfamily-names"},{text:"Click here to see the documentation for name-suffix.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonname-suffix"}],description:"The person's last names, split into parts.",examples:["name-particle: von","family-name: Doe","name-suffix: Jr."]},email:{title:"email",url:[{text:"Click here to see the documentation for email.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonemail"}],description:"The person's email address.",examples:["mail@research-project.org"]},affiliation:{title:"affiliation",url:[{text:"Click here to see the documentation for affiliation.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonaffiliation"}],description:"The person's affiliation.",examples:["Netherlands eScience Center","German Aerospace Center (DLR)"]},orcid:{title:"orcid",url:[{text:"Click here to see the documentation for orcid.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#definitionspersonorcid"},{text:"https://orcid.org",link:"https://orcid.org"}],description:"The person's ORCID identifier.",examples:["https://orcid.org/0000-0003-4925-7248"]}};return{emailErrors:l,helpData:i,orcidErrors:a,showHelpDialogLastName:(0,f.iH)(!1),showHelpDialogName:(0,f.iH)(!1),showHelpDialogEmail:(0,f.iH)(!1),showHelpDialogAffiliation:(0,f.iH)(!1),showHelpDialogOrcid:(0,f.iH)(!1)}},emits:["closePressed","removePressed","update"]});var $=a(151),_=a(4554),F=a(4842),Q=a(9367),R=a(8240),B=a(7518),O=a.n(B);Y.render=I,Y.__scopeId="data-v-d722bed6";const L=Y;O()(Y,"components",{QCard:$.Z,QIcon:_.Z,QInput:F.Z,QCardActions:Q.Z,QBtn:R.Z});const J=(0,t.HX)("data-v-68a45e56");(0,t.dD)("data-v-68a45e56");const M={style:{"flex-grow":"1.0"}};(0,t.Cn)();const X=J(((e,o,a,i,r,n)=>{const s=(0,t.up)("q-btn"),m=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(m,{bordered:"",class:["bg-formcard",e.authorErrors.length>0?"red-border has-error":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:J((()=>[(0,t.Wm)("div",M,[(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,(0,l.zw)(e.author.givenNames)+" "+(0,l.zw)(e.author.nameParticle)+" "+(0,l.zw)(e.author.familyNames)+" "+(0,l.zw)(e.author.nameSuffix),1),(0,t.Wm)("li",null,(0,l.zw)(e.author.email),1),(0,t.Wm)("li",null,(0,l.zw)(e.author.affiliation)+" "+(0,l.zw)(e.author.orcid),1)])]),(0,t.Wm)("div",null,[(0,t.Wm)(s,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:o[1]||(o[1]=o=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(s,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:o[2]||(o[2]=o=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(s,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:o[3]||(o[3]=o=>e.$emit("editPressed"))}),(0,t.Wm)(s,{class:"author-button",color:"negative","hover-color":"negative",icon:"delete",title:"Remove author",onClick:o[4]||(o[4]=o=>e.$emit("removePressed"))})])])),_:1},8,["class"])})),G=(0,t.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},setup(e){(0,t.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,z.v)();e(document.getElementsByClassName("has-error").length>0)}));const{errors:o}=(0,T.V)(),a=(0,t.Fl)((()=>(0,p.CB)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message)))),l=(0,t.Fl)((()=>(0,p.r9)(e.index).filter((0,p.uY)(o.value)).map((e=>e.replace.message)))),i=(0,t.Fl)((()=>p.Lf.filter((0,p.uY)(o.value)).filter((0,p.uY)(o.value,(0,p.Uh)(e.index))).map((e=>e.replace.message)))),r=(0,t.Fl)((()=>[...a.value,...l.value,...i.value]));return{authorErrors:r}},emits:["editPressed","moveDown","moveUp","removePressed"]});G.render=X,G.__scopeId="data-v-68a45e56";const K=G;O()(G,"components",{QCard:$.Z,QBtn:R.Z});var ee=a(4009),oe=a(1364),ae=function(e,o,a,t){function l(e){return e instanceof a?e:new a((function(o){o(e)}))}return new(a||(a=Promise))((function(a,i){function r(e){try{s(t.next(e))}catch(o){i(o)}}function n(e){try{s(t["throw"](e))}catch(o){i(o)}}function s(e){e.done?a(e.value):l(e.value).then(r,n)}s((t=t.apply(e,o||[])).next())}))};const te=(0,t.aZ)({name:"ScreenAuthors",components:{AuthorCardEditing:L,AuthorCardViewing:K,InfoDialog:Z.Z},setup(){(0,t.ic)((()=>{const{setErrorStateScreenAuthors:e}=(0,z.v)();e(document.getElementsByClassName("has-error").length>0)}));const{authors:e,setAuthors:o}=(0,oe.Y)(),{errors:a}=(0,T.V)(),l=(0,f.iH)(-1),i=()=>ae(this,void 0,void 0,(function*(){const a={},i=[...e.value,a];o(i),l.value=i.length-1,yield(0,t.Y3)(),(0,ee.O)()})),r=a=>{const t=[...e.value];t.splice(a,1),o(t),a<l.value?l.value-=1:a===l.value&&(l.value=-1)},n=(a,t)=>{const i=Object.assign({},e.value[l.value]);i[a]=""===t?void 0:t,e.value[l.value]=i,o(e.value)},s=a=>{(0,g.A)(a,e.value,o),l.value===a&&a>0?l.value=l.value-1:l.value===a-1&&(l.value=l.value+1)},m=a=>{(0,g.v)(a,e.value,o),l.value===a&&a<e.value.length-1?l.value=l.value+1:l.value===a+1&&(l.value=l.value-1)},u=(0,t.Fl)((()=>p.p2.filter((0,p.uY)(a.value)).map((e=>e.replace.message)))),d={authors:{title:"authors",url:[{text:"Click here to see the documentation for authors.",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#authors"},{text:"How to deal with unknown individual authors?",link:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#how-to-deal-with-unknown-individual-authors"}],description:"The authors of a software or dataset.",examples:[" given-names: Jane\n family-names: Doe",' name: "The Research Software project"',' given-names: John\n family-names: Doe\n name: "The Research Software project"']}};return{addAuthor:i,authors:e,authorsErrors:u,editingId:l,helpData:d,moveAuthorDown:m,moveAuthorUp:s,removeAuthor:r,setAuthorField:n,showAuthorsHelp:(0,f.iH)(!1)}}});var le=a(5607);te.render=h,te.__scopeId="data-v-3c943e3c";const ie=te;O()(te,"components",{QIcon:_.Z,QBtn:R.Z,QBanner:le.Z})}}]);