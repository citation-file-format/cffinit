"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[872],{345:(e,r,o)=>{o.r(r),o.d(r,{default:()=>ne});var a=o(3673),n=o(2323);const t=(0,a.HX)("data-v-943ef910");(0,a.dD)("data-v-943ef910");const s={id:"metroline"},i={id:"form"},l=(0,a.Wm)("div",{id:"form-title"},[(0,a.Wm)("h1",{class:"page-title"}," Authors ")],-1),d={id:"form-content"},u={class:"question"},m=(0,a.Uk)(" Who are the author(s) of the work? "),c={class:"scroll-to-bottom-container"},v=(0,a.Wm)("span",{class:"bottom"},null,-1),f=(0,a.Uk)(" Add author "),p={id:"form-button-bar"};(0,a.Cn)();const h=t(((e,r,o,h,g,w)=>{const b=(0,a.up)("Stepper"),W=(0,a.up)("SchemaGuideLink"),x=(0,a.up)("AuthorCardViewing"),y=(0,a.up)("AuthorCardEditing"),E=(0,a.up)("q-btn"),k=(0,a.up)("q-banner"),A=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",s,[(0,a.Wm)(b)]),(0,a.Wm)("div",i,[l,(0,a.Wm)("div",d,[(0,a.Wm)("p",u,[m,(0,a.Wm)(W,{anchor:"#authors"})]),(0,a.Wm)("div",c,[v,(0,a.Wm)("div",null,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.authors,((o,n)=>((0,a.wg)(),(0,a.j4)("div",{class:"q-mb-md q-mr-lg",key:n},[e.editingId!==n?((0,a.wg)(),(0,a.j4)(x,{key:0,index:n,author:o,"num-authors":e.authors.length,onEditPressed:()=>e.editingId=n,onMoveDown:r=>e.moveAuthorDown(n),onMoveUp:r=>e.moveAuthorUp(n)},null,8,["index","author","num-authors","onEditPressed","onMoveDown","onMoveUp"])):((0,a.wg)(),(0,a.j4)(y,(0,a.dG)({key:1,index:n,"num-authors":e.authors.length},o,{onUpdate:e.setAuthorField,onClosePressed:r[1]||(r[1]=()=>e.editingId=-1),onRemovePressed:e.removeAuthor,onMoveDown:r=>e.moveAuthorDown(n),onMoveUp:r=>e.moveAuthorUp(n)}),null,16,["index","num-authors","onUpdate","onRemovePressed","onMoveDown","onMoveUp"]))])))),128))])]),(0,a.Wm)(E,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addAuthor},{default:t((()=>[f])),_:1},8,["onClick"]),e.authorsErrors.messages.length>0?((0,a.wg)(),(0,a.j4)(k,{key:0,class:"bg-warning text-negative"},{default:t((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.authorsErrors,((e,r)=>((0,a.wg)(),(0,a.j4)("div",{key:r},(0,n.zw)(e),1)))),128))])),_:1})):(0,a.kq)("",!0)]),(0,a.Wm)("div",p,[(0,a.Wm)(A)])])],64)}));var g=o(1959),w=o(1622),b=o(525),W=o(2334);const x=(0,a.HX)("data-v-1ecc5af0");(0,a.dD)("data-v-1ecc5af0");const y={class:"row"},E=(0,a.Uk)(" The person's given names "),k={class:"row"},A={class:"row"},U=(0,a.Uk)(" The person's last names, split into parts "),C={class:"row"},q={class:"row"},S=(0,a.Uk)(" The person's email address "),j={class:"row"},I={class:"row"},$=(0,a.Uk)(" The person's affiliation "),N=(0,a.Uk)(" The person's ORCID "),_={class:"row"};(0,a.Cn)();const P=x(((e,r,o,t,s,i)=>{const l=(0,a.up)("SchemaGuideLink"),d=(0,a.up)("q-label"),u=(0,a.up)("q-input"),m=(0,a.up)("q-banner"),c=(0,a.up)("q-btn"),v=(0,a.up)("q-card-actions"),f=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(f,{flat:"",bordered:"",class:"bg-formcard q-pa-md"},{default:x((()=>[(0,a.Wm)("div",y,[(0,a.Wm)(d,{class:"text-dark"},{default:x((()=>[E,(0,a.Wm)(l,{anchor:"#definitionspersongiven-names"})])),_:1})]),(0,a.Wm)("div",k,[(0,a.Wm)(u,{"bg-color":"white",class:"col",dense:"",label:"given-names",outlined:"",standout:"",title:"The person's given names.","model-value":e.givenNames,error:e.givenNamesError.hasError,"error-message":e.givenNamesError.messages.join(", "),"onUpdate:modelValue":r[1]||(r[1]=r=>e.$emit("update","givenNames",r)),ref:"givenNamesRef"},null,8,["model-value","error","error-message"])]),(0,a.Wm)("div",A,[(0,a.Wm)(d,{class:"text-dark"},{default:x((()=>[U])),_:1})]),(0,a.Wm)("div",C,[(0,a.Wm)(u,{"bg-color":"white",class:"col-3",dense:"",label:"name-particle",outlined:"",standout:"",title:"The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt').","model-value":e.nameParticle,error:e.nameParticleError.hasError,"error-message":e.nameParticleError.messages.join(", "),"onUpdate:modelValue":r[2]||(r[2]=r=>e.$emit("update","nameParticle",r))},{default:x((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonname-particle",class:"q-pt-sm"})])),_:1},8,["model-value","error","error-message"]),(0,a.Wm)(u,{"bg-color":"white",class:"col",dense:"",label:"family-names",outlined:"",standout:"",title:"The person's family names.","model-value":e.familyNames,error:e.familyNamesError.hasError,"error-message":e.familyNamesError.messages.join(", "),"onUpdate:modelValue":r[3]||(r[3]=r=>e.$emit("update","familyNames",r))},{default:x((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonfamily-names",class:"q-pt-sm"})])),_:1},8,["model-value","error","error-message"]),(0,a.Wm)(u,{"bg-color":"white",class:"col-3",dense:"",label:"name-suffix",outlined:"",standout:"",title:"The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III.","model-value":e.nameSuffix,error:e.nameSuffixError.hasError,"error-message":e.nameSuffixError.messages.join(", "),"onUpdate:modelValue":r[4]||(r[4]=r=>e.$emit("update","nameSuffix",r))},{default:x((()=>[(0,a.Wm)(l,{anchor:"#definitionspersonname-suffix",class:"q-pt-sm"})])),_:1},8,["model-value","error","error-message"])]),(0,a.Wm)("div",q,[(0,a.Wm)(d,{class:"text-dark"},{default:x((()=>[S,(0,a.Wm)(l,{anchor:"#definitionsperson-email"})])),_:1})]),(0,a.Wm)("div",j,[(0,a.Wm)(u,{"bg-color":"white",class:"col",dense:"",label:"email",outlined:"",standout:"",title:"The person's email address.",type:"email","model-value":e.email,error:e.emailError.hasError,"error-message":e.emailError.messages.join(", "),"onUpdate:modelValue":r[5]||(r[5]=r=>e.$emit("update","email",r))},null,8,["model-value","error","error-message"])]),(0,a.Wm)("div",I,[(0,a.Wm)(d,{class:"text-dark col"},{default:x((()=>[$,(0,a.Wm)(l,{anchor:"#definitionsperson-affiliation"})])),_:1}),(0,a.Wm)(d,{class:"text-dark col"},{default:x((()=>[N,(0,a.Wm)(l,{anchor:"#definitionsperson-orcid"})])),_:1})]),(0,a.Wm)("div",_,[(0,a.Wm)(u,{"bg-color":"white",class:"col",dense:"",label:"affiliation",outlined:"",standout:"",title:"The person's affiliation.","model-value":e.affiliation,error:e.affiliationError.hasError,"error-message":e.affiliationError.messages.join(", "),"onUpdate:modelValue":r[6]||(r[6]=r=>e.$emit("update","affiliation",r))},null,8,["model-value","error","error-message"]),(0,a.Wm)(u,{"bg-color":"white",class:"col",dense:"",hint:"Format: https://orcid.org/0000-0000-0000-0000",label:"orcid",outlined:"",standout:"",title:"The person's ORCID identifier.","model-value":e.orcid,error:e.orcidError.hasError,"error-message":e.orcidError.messages.join(", "),"onUpdate:modelValue":r[7]||(r[7]=r=>e.$emit("update","orcid",r))},null,8,["model-value","error","error-message"])]),e.authorErrors.messages.length>0?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"bg-warning text-negative"},{default:x((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.authorErrors.messages,((e,r)=>((0,a.wg)(),(0,a.j4)("div",{key:r},(0,n.zw)(e),1)))),128))])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(v,{align:"right"},{default:x((()=>[(0,a.Wm)(c,{color:"blue",dense:"",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:r[8]||(r[8]=r=>e.$emit("moveUp"))},null,8,["disable"]),(0,a.Wm)(c,{color:"blue",dense:"",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:r[9]||(r[9]=r=>e.$emit("moveDown"))},null,8,["disable"]),(0,a.Wm)(c,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:r[10]||(r[10]=r=>e.$emit("removePressed"))}),(0,a.Wm)(c,{dense:"",icon:"done",label:"Done",onClick:r[11]||(r[11]=r=>e.$emit("closePressed"))})])),_:1})])),_:1})}));var D=o(3281),Z=o(9152);const F=(0,a.aZ)({name:"AuthorCardEditing",props:{index:{type:Number,required:!0},givenNames:{type:String,default:""},nameParticle:{type:String,default:""},familyNames:{type:String,default:""},nameSuffix:{type:String,default:""},email:{type:String,default:""},affiliation:{type:String,default:""},orcid:{type:String,default:""},numAuthors:{type:Number,default:0}},setup(e){const r=(0,g.iH)(null);return(0,a.bv)((()=>{var e;null===(e=r.value)||void 0===e||e.focus()})),{givenNamesRef:r,givenNamesError:(0,a.Fl)((()=>(0,D.I)(`/authors/${e.index}/given-names`))),nameParticleError:(0,a.Fl)((()=>(0,D.I)(`/authors/${e.index}/name-particle`))),familyNamesError:(0,a.Fl)((()=>(0,D.I)(`/authors/${e.index}/family-names`))),nameSuffixError:(0,a.Fl)((()=>(0,D.I)(`/authors/${e.index}/name-suffix`))),emailError:(0,a.Fl)((()=>(0,D.I)(`/authors/${e.index}/email`))),affiliationError:(0,a.Fl)((()=>(0,D.I)(`/authors/${e.index}/affiliation`))),orcidError:(0,a.Fl)((()=>(0,D.I)(`/authors/${e.index}/orcid`))),authorErrors:(0,a.Fl)((()=>(0,Z.p)(e.index)))}},emits:["closePressed","removePressed","update","moveUp","moveDown"],components:{SchemaGuideLink:w.Z}});var T=o(151),H=o(4842),V=o(5607),z=o(9367),Q=o(2165),M=o(7518),R=o.n(M);F.render=P,F.__scopeId="data-v-1ecc5af0";const Y=F;R()(F,"components",{QCard:T.Z,QInput:H.Z,QBanner:V.Z,QCardActions:z.Z,QBtn:Q.Z});const B=(0,a.HX)("data-v-97d818c2");(0,a.dD)("data-v-97d818c2");const G={style:{"flex-grow":"1.0"}};(0,a.Cn)();const O=B(((e,r,o,t,s,i)=>{const l=(0,a.up)("q-btn"),d=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(d,{bordered:"",class:["bg-formcard",e.authorErrors.hasError?"red-border":""],flat:"",style:{display:"flex","flex-direction":"row"}},{default:B((()=>[(0,a.Wm)("div",G,[(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,(0,n.zw)(e.author.givenNames)+" "+(0,n.zw)(e.author.nameParticle)+" "+(0,n.zw)(e.author.familyNames)+" "+(0,n.zw)(e.author.nameSuffix),1),(0,a.Wm)("li",null,(0,n.zw)(e.author.email),1),(0,a.Wm)("li",null,(0,n.zw)(e.author.affiliation)+" "+(0,n.zw)(e.author.orcid),1)])]),(0,a.Wm)("div",null,[(0,a.Wm)(l,{class:"author-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:r[1]||(r[1]=r=>e.$emit("moveUp"))},null,8,["disable"]),(0,a.Wm)(l,{class:"author-button",color:"blue",disable:e.index>=e.numAuthors-1,icon:"ion-arrow-down",tabindex:"-1",onClick:r[2]||(r[2]=r=>e.$emit("moveDown"))},null,8,["disable"]),(0,a.Wm)(l,{class:"author-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:r[3]||(r[3]=r=>e.$emit("editPressed"))})])])),_:1},8,["class"])})),L=(0,a.aZ)({name:"AuthorCardViewing",props:{index:{type:Number,required:!0},author:{type:Object,required:!0},numAuthors:{type:Number,default:0}},setup(e){return{authorErrors:(0,a.Fl)((()=>(0,Z.p)(e.index)))}},emits:["editPressed","moveDown","moveUp"]});L.render=O,L.__scopeId="data-v-97d818c2";const K=L;R()(L,"components",{QCard:T.Z,QBtn:Q.Z});var X=o(2064),J=o(1364),ee=o(4009),re=o(5093),oe=function(e,r,o,a){function n(e){return e instanceof o?e:new o((function(r){r(e)}))}return new(o||(o=Promise))((function(o,t){function s(e){try{l(a.next(e))}catch(r){t(r)}}function i(e){try{l(a["throw"](e))}catch(r){t(r)}}function l(e){e.done?o(e.value):n(e.value).then(s,i)}l((a=a.apply(e,r||[])).next())}))};const ae=(0,a.aZ)({name:"ScreenAuthors",components:{SchemaGuideLink:w.Z,Stepper:b.Z,StepperActions:W.Z,AuthorCardEditing:Y,AuthorCardViewing:K},setup(){const{authors:e,setAuthors:r}=(0,J.Y)(),o=(0,g.iH)(0),n=()=>oe(this,void 0,void 0,(function*(){let n;const t={};n=void 0===e.value?[t]:[...e.value,t],r(n),o.value=n.length-1,yield(0,a.Y3)(),(0,ee.O)()})),t=()=>{if(void 0!==e.value){const a=[...e.value];a.splice(o.value,1),r(a),o.value=-1,Array.isArray(a)&&0===a.length&&r(void 0)}},s=(a,n)=>{if(void 0!==e.value){const t=Object.assign({},e.value[o.value]);t[a]=""===n?void 0:n,e.value[o.value]=t,r(e.value)}},i=a=>{void 0!==e.value&&((0,X.A)(a,e.value,r),o.value===a&&a>0?o.value=o.value-1:o.value===a-1&&(o.value=o.value+1))},l=a=>{void 0!==e.value&&((0,X.v)(a,e.value,r),o.value===a&&a<e.value.length-1?o.value=o.value+1:o.value===a+1&&(o.value=o.value-1))};return{addAuthor:n,authors:e,editingId:o,moveAuthorDown:l,moveAuthorUp:i,removeAuthor:t,setAuthorField:s,authorsErrors:(0,a.Fl)((()=>({messages:(0,re.e)(e.value).messages.map((e=>e.message)).join("\n")})))}}});ae.render=h,ae.__scopeId="data-v-943ef910";const ne=ae;R()(ae,"components",{QBtn:Q.Z,QBanner:V.Z})}}]);