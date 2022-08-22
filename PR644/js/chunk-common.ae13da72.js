"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[64],{7996:(e,t,i)=>{i.d(t,{Uh:()=>n,uY:()=>s,p2:()=>o,z8:()=>a,Lf:()=>d,gp:()=>p,_m:()=>c,CB:()=>h,lF:()=>l,I3:()=>f,R0:()=>m,hM:()=>u,Tc:()=>y,r9:()=>L,tB:()=>g,G_:()=>P,iA:()=>w,Sh:()=>C,Bs:()=>S});const r=(e,t)=>{const i=Object.keys(t.find);return(!i.includes("instancePath")||t.find.instancePath===e.instancePath)&&((!i.includes("schemaPath")||t.find.schemaPath===e.schemaPath)&&(!i.includes("message")||t.find.message===e.message))},n=e=>t=>t.params.i===e||t.params.j===e,s=(e,t=r)=>i=>e.some((e=>t(e,i))),o=[{find:{instancePath:"/authors",schemaPath:"#/properties/authors/minItems",message:"must NOT have fewer than 1 items"},replace:{message:"Use the button to add an author."}},{find:{instancePath:"/authors",schemaPath:"#/properties/authors/uniqueItems"},replace:{message:"There are duplicate authors."}}],a=[{find:{instancePath:"/date-released",schemaPath:"#/definitions/date/pattern"},replace:{message:"Use the YYYY-MM-DD format."}}],d=[{find:{instancePath:"/authors",schemaPath:"#/properties/authors/uniqueItems"},replace:{message:"This author is a duplicate."}}],p=[{find:{instancePath:"/identifiers",schemaPath:"#/properties/identifiers/uniqueItems"},replace:{message:"This identifier is a duplicate."}}],c=[{find:{instancePath:"/keywords",schemaPath:"#/properties/keywords/uniqueItems"},replace:{message:"This keyword is a duplicate."}}],h=e=>[{find:{instancePath:`/authors/${e}/email`,schemaPath:"#/definitions/email/pattern"},replace:{message:"Something like bob@gmail.com, akira@yahoo.co.jp, or t.achebe@live.org.za"}}],l=(e,t)=>[[{find:{instancePath:`/identifiers/${e}/value`,schemaPath:"#/definitions/doi/pattern"},replace:{message:"e.g. '10.5281/zenodo.1003149' or '10.7717/peerj-cs.86'. Does not include the resolver URL."}},{find:{instancePath:`/identifiers/${e}/value`,schemaPath:"#/definitions/url/pattern"},replace:{message:"e.g. 'https://www.example.com' (http, ftp, sftp hyperlinks are also supported)"}},{find:{instancePath:`/identifiers/${e}/value`,schemaPath:"#/definitions/swh-identifier/pattern"},replace:{message:"e.g. 'swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d'. Besides 'rev', other allowed values are: 'snp', 'rel', 'dir', and 'cnt'."}},{find:{instancePath:`/identifiers/${e}/value`,schemaPath:"#/anyOf/3/properties/value/minLength"},replace:{message:"Zero-length identifier values are not allowed. Please type an identifier value or remove the identifier entirely."}}][t]],f=[{find:{instancePath:"/identifiers",schemaPath:"#/properties/identifiers/uniqueItems"},replace:{message:"There are duplicate identifiers."}}],m=e=>[{find:{instancePath:`/keywords/${e}`,schemaPath:"#/properties/keywords/items/minLength"},replace:{message:"Zero-length keywords are not allowed. Please type a keyword or remove the field entirely."}}],u=[{find:{instancePath:"/keywords",schemaPath:"#/properties/keywords/uniqueItems"},replace:{message:"There are duplicate keywords."}}],y=[{find:{instancePath:"",message:"must have required property 'message'",schemaPath:"#/required"},replace:{message:"'message' is a required property"}},{find:{message:"must NOT have fewer than 1 characters",schemaPath:"#/properties/message/minLength"},replace:{message:"'message' needs to be at least 1 character long."}}],L=e=>[{find:{instancePath:`/authors/${e}/orcid`,schemaPath:"#/definitions/orcid/pattern"},replace:{message:"Expected format is: https://orcid.org/0000-0000-0000-0000"}}],g=[{find:{instancePath:"/repository-artifact",schemaPath:"#/definitions/url/pattern"},replace:{message:"Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)"}}],P=[{find:{instancePath:"/repository-code",schemaPath:"#/definitions/url/pattern"},replace:{message:"Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)"}}],w=[{find:{instancePath:"/repository",schemaPath:"#/definitions/url/pattern"},replace:{message:"Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)"}}],C=[{find:{instancePath:"",message:"must have required property 'title'",schemaPath:"#/required"},replace:{message:"'title' is a required property"}},{find:{message:"must NOT have fewer than 1 characters",schemaPath:"#/properties/title/minLength"},replace:{message:"'title' needs to be at least 1 character long."}}],S=[{find:{instancePath:"/url",schemaPath:"#/definitions/url/pattern"},replace:{message:"Format: https://www.example.com (http, ftp, sftp hyperlinks are also supported)"}}]},4009:(e,t,i)=>{i.d(t,{O:()=>r});const r=(e="bottom")=>{document.getElementsByClassName(e)[0].scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}},1364:(e,t,i)=>{i.d(t,{Y:()=>a});var r=i(1959),n=i(3673);const s=()=>({abstract:void 0,authors:[],cffVersion:"1.2.0",commit:void 0,dateReleased:void 0,identifiers:void 0,keywords:void 0,license:void 0,message:"",repository:void 0,repositoryArtifact:void 0,repositoryCode:void 0,title:"",type:"software",url:void 0,version:void 0}),o=(0,r.iH)(s()),a=()=>({abstract:(0,n.Fl)((()=>o.value.abstract)),authors:(0,n.Fl)((()=>o.value.authors)),commit:(0,n.Fl)((()=>o.value.commit)),cffVersion:(0,n.Fl)((()=>o.value.cffVersion)),dateReleased:(0,n.Fl)((()=>o.value.dateReleased)),identifiers:(0,n.Fl)((()=>o.value.identifiers)),keywords:(0,n.Fl)((()=>o.value.keywords)),license:(0,n.Fl)((()=>o.value.license)),message:(0,n.Fl)((()=>o.value.message)),repository:(0,n.Fl)((()=>o.value.repository)),repositoryArtifact:(0,n.Fl)((()=>o.value.repositoryArtifact)),repositoryCode:(0,n.Fl)((()=>o.value.repositoryCode)),title:(0,n.Fl)((()=>o.value.title)),type:(0,n.Fl)((()=>o.value.type)),url:(0,n.Fl)((()=>o.value.url)),version:(0,n.Fl)((()=>o.value.version)),setAbstract:e=>{o.value.abstract=""===e?void 0:e},setAuthors:e=>{o.value.authors=e},setCommit:e=>{o.value.commit=""===e?void 0:e},setDateReleased:e=>{o.value.dateReleased=""===e?void 0:e},setIdentifiers:e=>{o.value.identifiers=e===[]?void 0:e},setKeywords:e=>{o.value.keywords=e===[]?void 0:e},setLicense:e=>{o.value.license=""===e?void 0:e},setMessage:e=>{o.value.message=e},setRepository:e=>{o.value.repository=""===e?void 0:e},setRepositoryArtifact:e=>{o.value.repositoryArtifact=""===e?void 0:e},setRepositoryCode:e=>{o.value.repositoryCode=""===e?void 0:e},setTitle:e=>{o.value.title=e},setType:e=>{o.value.type=e},setUrl:e=>{o.value.url=""===e?void 0:e},setVersion:e=>{o.value.version=""===e?void 0:e},reset:()=>{o.value=s()}})},6037:(e,t,i)=>{i.d(t,{Y:()=>c});var r=i(2883),n=i(3673),s=i(3207),o=i.n(s),a=i(2640),d=i.n(a),p=i(1364);const c=()=>{const{abstract:e,authors:t,commit:i,cffVersion:s,dateReleased:a,identifiers:c,keywords:h,license:l,message:f,repository:m,repositoryArtifact:u,repositoryCode:y,title:L,type:g,url:P,version:w}=(0,p.Y)(),C=(e,t,i)=>void 0!==e&&null!==e,S=()=>{const r={cffVersion:s.value,title:L.value,message:f.value,type:g.value,authors:t.value,identifiers:c.value,repositoryCode:y.value,url:P.value,repository:m.value,repositoryArtifact:u.value,abstract:e.value,keywords:h.value,license:l.value,commit:i.value,version:w.value,dateReleased:a.value},n=o()(r,C);return d()(n,{deep:!0})},T=()=>{const e=S(),t=r.dump(e,{indent:2,lineWidth:53}),i="# This CITATION.cff file was generated with cffinit.\n# Visit https://bit.ly/cffinit to generate yours today!\n\n";return i+t};return{jsObject:(0,n.Fl)(S),cffstr:(0,n.Fl)(T)}}},6513:(e,t,i)=>{i.d(t,{v:()=>a});var r=i(1959),n=i(3673);const s=()=>({authors:!0,identifiers:!1,keywords:!1,relatedResources:!1,start:!0,versionSpecific:!1}),o=(0,r.iH)(s()),a=()=>({errorStateScreenAuthors:(0,n.Fl)((()=>o.value.authors)),errorStateScreenIdentifiers:(0,n.Fl)((()=>o.value.identifiers)),errorStateScreenKeywords:(0,n.Fl)((()=>o.value.keywords)),errorStateScreenRelatedResources:(0,n.Fl)((()=>o.value.relatedResources)),errorStateScreenStart:(0,n.Fl)((()=>o.value.start)),errorStateScreenVersionSpecific:(0,n.Fl)((()=>o.value.versionSpecific)),reset:()=>o.value=s(),setErrorStateScreenAuthors:e=>o.value.authors=e,setErrorStateScreenIdentifiers:e=>o.value.identifiers=e,setErrorStateScreenKeywords:e=>o.value.keywords=e,setErrorStateScreenRelatedResources:e=>o.value.relatedResources=e,setErrorStateScreenStart:e=>o.value.start=e,setErrorStateScreenVersionSpecific:e=>o.value.versionSpecific=e})},8875:(e,t,i)=>{i.d(t,{V:()=>l});var r=i(5331),n=i.n(r),s=i(5917),o=i.n(s),a=i(3673),d=i(6298),p=i(6037);const c=new(n())({allErrors:!0});o()(c),c.addSchema(d);const{jsObject:h}=(0,p.Y)(),l=()=>({errors:(0,a.Fl)((()=>(c.validate(d.$id,h.value),c.errors?c.errors:[])))})},2064:(e,t,i)=>{i.d(t,{v:()=>n,A:()=>s});const r=(e,t,i,r)=>{const n=[...i];n[e]=n.splice(e+t,1,n[e])[0],r(n)},n=(e,t,i)=>{e!==t.length-1&&r(e,1,t,i)},s=(e,t,i)=>{0!==e&&r(e,-1,t,i)}},1195:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(3673);function n(e,t,i,n,s,o){const a=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.j4)(a,{color:"primary",icon:"download",label:"Download",size:"xl","no-caps":"",type:"a",download:"CITATION.cff",href:e.downloadUrl},null,8,["href"])}var s=i(6037);const o=e=>`data:text/vnd.yaml,${encodeURIComponent(e)}`,a=(0,r.aZ)({name:"DownloadButton",setup(){const{cffstr:e}=(0,s.Y)();return{downloadUrl:(0,r.Fl)((()=>o(e.value)))}}});var d=i(8240),p=i(7518),c=i.n(p);a.render=n;const h=a;c()(a,"components",{QBtn:d.Z})},1622:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(3673);const n=(0,r.HX)("data-v-177d5193");(0,r.dD)("data-v-177d5193");const s=(0,r.Uk)(" Click the icon to access specific documentation ");(0,r.Cn)();const o=n(((e,t,i,o,a,d)=>{const p=(0,r.up)("q-icon"),c=(0,r.up)("q-tooltip");return(0,r.wg)(),(0,r.j4)("a",{href:"https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md"+e.anchor,tabindex:"-1",target:"_blank"},[(0,r.Wm)(p,{name:"ion-information-circle-outline",size:"24px",color:"primary"}),(0,r.Wm)(c,{anchor:"center right",class:"bg-primary text-body2 text-white",self:"center left","transition-show":"scale","transition-hide":"scale"},{default:n((()=>[s])),_:1})],8,["href"])})),a=(0,r.aZ)({name:"SchemaGuideLink",props:{anchor:{type:String,required:!0}}});var d=i(4554),p=i(8870),c=i(7518),h=i.n(c);a.render=o,a.__scopeId="data-v-177d5193";const l=a;h()(a,"components",{QIcon:d.Z,QTooltip:p.Z})},6298:e=>{e.exports=JSON.parse('{"$id":"https://citation-file-format.github.io/1.2.0/schema.json","$schema":"http://json-schema.org/draft-07/schema","additionalProperties":false,"definitions":{"address":{"description":"An address.","minLength":1,"type":"string"},"alias":{"description":"An alias.","minLength":1,"type":"string"},"city":{"description":"A city","minLength":1,"type":"string"},"commit":{"description":"The (e.g., Git) commit hash or (e.g., Subversion) revision number of the work.","minLength":1,"type":"string"},"country":{"$comment":"ISO 3166-1 alpha-2 codes can be found at https://en.wikipedia.org/wiki/ISO_3166-1","description":"The ISO 3166-1 alpha-2 country code for a country.","enum":["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],"type":"string"},"date":{"$comment":"Note to tool implementers: it is necessary to cast YAML \'date\' objects to string objects when validating against this schema.","examples":["1900-01-01","2020-12-31"],"format":"date","pattern":"^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$","type":"string"},"doi":{"description":"The DOI of the work (i.e., 10.5281/zenodo.1003150, not the resolver URL http://doi.org/10.5281/zenodo.1003150).","examples":["10.5281/zenodo.1003150"],"pattern":"^10\\\\.\\\\d{4,9}(\\\\.\\\\d+)?/[A-Za-z0-9:/_;\\\\-\\\\.\\\\(\\\\)\\\\[\\\\]\\\\\\\\]+$","type":"string"},"email":{"description":"An email address.","pattern":"^[\\\\S]+@[\\\\S]+\\\\.[\\\\S]{2,}$","type":"string"},"entity":{"additionalProperties":false,"description":"An entity, i.e., an institution, team, research group, company, conference, etc., as opposed to a single natural person.","properties":{"address":{"$ref":"#/definitions/address","description":"The entity\'s address."},"alias":{"$ref":"#/definitions/alias","description":"The entity\'s alias."},"city":{"$ref":"#/definitions/city","description":"The entity\'s city."},"country":{"$ref":"#/definitions/country","description":"The entity\'s country."},"date-end":{"$ref":"#/definitions/date","description":"The entity\'s ending date, e.g., when the entity is a conference."},"date-start":{"$ref":"#/definitions/date","description":"The entity\'s starting date, e.g., when the entity is a conference."},"email":{"$ref":"#/definitions/email","description":"The entity\'s email address."},"fax":{"$ref":"#/definitions/fax","description":"The entity\'s fax number."},"location":{"description":"The entity\'s location, e.g., when the entity is a conference.","minLength":1,"type":"string"},"name":{"description":"The entity\'s name.","minLength":1,"type":"string"},"orcid":{"$ref":"#/definitions/orcid","description":"The entity\'s orcid."},"post-code":{"$ref":"#/definitions/post-code","description":"The entity\'s post code."},"region":{"$ref":"#/definitions/region","description":"The entity\'s region."},"tel":{"$ref":"#/definitions/tel","description":"The entity\'s telephone number."},"website":{"$ref":"#/definitions/url","description":"The entity\'s website."}},"required":["name"],"type":"object"},"fax":{"description":"A fax number.","minLength":1,"type":"string"},"identifier":{"anyOf":[{"additionalProperties":false,"properties":{"description":{"$ref":"#/definitions/identifier-description"},"type":{"enum":["doi"],"type":"string"},"value":{"$ref":"#/definitions/doi"}},"required":["type","value"],"type":"object"},{"additionalProperties":false,"properties":{"description":{"$ref":"#/definitions/identifier-description"},"type":{"enum":["url"],"type":"string"},"value":{"$ref":"#/definitions/url"}},"required":["type","value"],"type":"object"},{"additionalProperties":false,"properties":{"description":{"$ref":"#/definitions/identifier-description"},"type":{"enum":["swh"],"type":"string"},"value":{"$ref":"#/definitions/swh-identifier"}},"required":["type","value"],"type":"object"},{"additionalProperties":false,"properties":{"description":{"$ref":"#/definitions/identifier-description"},"type":{"enum":["other"],"type":"string"},"value":{"minLength":1,"type":"string"}},"required":["type","value"],"type":"object"}],"description":"An identifier for a work."},"identifier-description":{"description":"A description for a specific identifier value.","examples":["The version DOI for this version, which has a relation childOf with the concept DOI specified in the doi field in the root of this file.","The identifier provided by Archival Repository, which points to this version of the software."],"minLength":1,"type":"string"},"license":{"description":"An SPDX license identifier.","oneOf":[{"$ref":"#/definitions/license-enum","examples":["Apache-2.0","MIT"]},{"$comment":"When there are multiple licenses, it is assumed their relationship is OR, not AND","examples":[["Apache-2.0","MIT"],["GPL-3.0","GPL-3.0-or-later"]],"items":{"$ref":"#/definitions/license-enum"},"minItems":1,"type":"array","uniqueItems":true}]},"license-enum":{"$comment":"Use https://github.com/citation-file-format/get-spdx-licenses to update this enum in the future","description":"SPDX license list; releaseDate=2021-05-14; source=https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json","enum":["0BSD","AAL","Abstyles","Adobe-2006","Adobe-Glyph","ADSL","AFL-1.1","AFL-1.2","AFL-2.0","AFL-2.1","AFL-3.0","Afmparse","AGPL-1.0","AGPL-1.0-only","AGPL-1.0-or-later","AGPL-3.0","AGPL-3.0-only","AGPL-3.0-or-later","Aladdin","AMDPLPA","AML","AMPAS","ANTLR-PD","ANTLR-PD-fallback","Apache-1.0","Apache-1.1","Apache-2.0","APAFML","APL-1.0","APSL-1.0","APSL-1.1","APSL-1.2","APSL-2.0","Artistic-1.0","Artistic-1.0-cl8","Artistic-1.0-Perl","Artistic-2.0","Bahyph","Barr","Beerware","BitTorrent-1.0","BitTorrent-1.1","blessing","BlueOak-1.0.0","Borceux","BSD-1-Clause","BSD-2-Clause","BSD-2-Clause-FreeBSD","BSD-2-Clause-NetBSD","BSD-2-Clause-Patent","BSD-2-Clause-Views","BSD-3-Clause","BSD-3-Clause-Attribution","BSD-3-Clause-Clear","BSD-3-Clause-LBNL","BSD-3-Clause-Modification","BSD-3-Clause-No-Nuclear-License","BSD-3-Clause-No-Nuclear-License-2014","BSD-3-Clause-No-Nuclear-Warranty","BSD-3-Clause-Open-MPI","BSD-4-Clause","BSD-4-Clause-Shortened","BSD-4-Clause-UC","BSD-Protection","BSD-Source-Code","BSL-1.0","BUSL-1.1","bzip2-1.0.5","bzip2-1.0.6","C-UDA-1.0","CAL-1.0","CAL-1.0-Combined-Work-Exception","Caldera","CATOSL-1.1","CC-BY-1.0","CC-BY-2.0","CC-BY-2.5","CC-BY-3.0","CC-BY-3.0-AT","CC-BY-3.0-US","CC-BY-4.0","CC-BY-NC-1.0","CC-BY-NC-2.0","CC-BY-NC-2.5","CC-BY-NC-3.0","CC-BY-NC-4.0","CC-BY-NC-ND-1.0","CC-BY-NC-ND-2.0","CC-BY-NC-ND-2.5","CC-BY-NC-ND-3.0","CC-BY-NC-ND-3.0-IGO","CC-BY-NC-ND-4.0","CC-BY-NC-SA-1.0","CC-BY-NC-SA-2.0","CC-BY-NC-SA-2.5","CC-BY-NC-SA-3.0","CC-BY-NC-SA-4.0","CC-BY-ND-1.0","CC-BY-ND-2.0","CC-BY-ND-2.5","CC-BY-ND-3.0","CC-BY-ND-4.0","CC-BY-SA-1.0","CC-BY-SA-2.0","CC-BY-SA-2.0-UK","CC-BY-SA-2.1-JP","CC-BY-SA-2.5","CC-BY-SA-3.0","CC-BY-SA-3.0-AT","CC-BY-SA-4.0","CC-PDDC","CC0-1.0","CDDL-1.0","CDDL-1.1","CDL-1.0","CDLA-Permissive-1.0","CDLA-Sharing-1.0","CECILL-1.0","CECILL-1.1","CECILL-2.0","CECILL-2.1","CECILL-B","CECILL-C","CERN-OHL-1.1","CERN-OHL-1.2","CERN-OHL-P-2.0","CERN-OHL-S-2.0","CERN-OHL-W-2.0","ClArtistic","CNRI-Jython","CNRI-Python","CNRI-Python-GPL-Compatible","Condor-1.1","copyleft-next-0.3.0","copyleft-next-0.3.1","CPAL-1.0","CPL-1.0","CPOL-1.02","Crossword","CrystalStacker","CUA-OPL-1.0","Cube","curl","D-FSL-1.0","diffmark","DOC","Dotseqn","DRL-1.0","DSDP","dvipdfm","ECL-1.0","ECL-2.0","eCos-2.0","EFL-1.0","EFL-2.0","eGenix","Entessa","EPICS","EPL-1.0","EPL-2.0","ErlPL-1.1","etalab-2.0","EUDatagrid","EUPL-1.0","EUPL-1.1","EUPL-1.2","Eurosym","Fair","Frameworx-1.0","FreeBSD-DOC","FreeImage","FSFAP","FSFUL","FSFULLR","FTL","GD","GFDL-1.1","GFDL-1.1-invariants-only","GFDL-1.1-invariants-or-later","GFDL-1.1-no-invariants-only","GFDL-1.1-no-invariants-or-later","GFDL-1.1-only","GFDL-1.1-or-later","GFDL-1.2","GFDL-1.2-invariants-only","GFDL-1.2-invariants-or-later","GFDL-1.2-no-invariants-only","GFDL-1.2-no-invariants-or-later","GFDL-1.2-only","GFDL-1.2-or-later","GFDL-1.3","GFDL-1.3-invariants-only","GFDL-1.3-invariants-or-later","GFDL-1.3-no-invariants-only","GFDL-1.3-no-invariants-or-later","GFDL-1.3-only","GFDL-1.3-or-later","Giftware","GL2PS","Glide","Glulxe","GLWTPL","gnuplot","GPL-1.0","GPL-1.0-only","GPL-1.0-or-later","GPL-1.0+","GPL-2.0","GPL-2.0-only","GPL-2.0-or-later","GPL-2.0-with-autoconf-exception","GPL-2.0-with-bison-exception","GPL-2.0-with-classpath-exception","GPL-2.0-with-font-exception","GPL-2.0-with-GCC-exception","GPL-2.0+","GPL-3.0","GPL-3.0-only","GPL-3.0-or-later","GPL-3.0-with-autoconf-exception","GPL-3.0-with-GCC-exception","GPL-3.0+","gSOAP-1.3b","HaskellReport","Hippocratic-2.1","HPND","HPND-sell-variant","HTMLTIDY","IBM-pibs","ICU","IJG","ImageMagick","iMatix","Imlib2","Info-ZIP","Intel","Intel-ACPI","Interbase-1.0","IPA","IPL-1.0","ISC","JasPer-2.0","JPNIC","JSON","LAL-1.2","LAL-1.3","Latex2e","Leptonica","LGPL-2.0","LGPL-2.0-only","LGPL-2.0-or-later","LGPL-2.0+","LGPL-2.1","LGPL-2.1-only","LGPL-2.1-or-later","LGPL-2.1+","LGPL-3.0","LGPL-3.0-only","LGPL-3.0-or-later","LGPL-3.0+","LGPLLR","Libpng","libpng-2.0","libselinux-1.0","libtiff","LiLiQ-P-1.1","LiLiQ-R-1.1","LiLiQ-Rplus-1.1","Linux-OpenIB","LPL-1.0","LPL-1.02","LPPL-1.0","LPPL-1.1","LPPL-1.2","LPPL-1.3a","LPPL-1.3c","MakeIndex","MirOS","MIT","MIT-0","MIT-advertising","MIT-CMU","MIT-enna","MIT-feh","MIT-Modern-Variant","MIT-open-group","MITNFA","Motosoto","mpich2","MPL-1.0","MPL-1.1","MPL-2.0","MPL-2.0-no-copyleft-exception","MS-PL","MS-RL","MTLL","MulanPSL-1.0","MulanPSL-2.0","Multics","Mup","NAIST-2003","NASA-1.3","Naumen","NBPL-1.0","NCGL-UK-2.0","NCSA","Net-SNMP","NetCDF","Newsletr","NGPL","NIST-PD","NIST-PD-fallback","NLOD-1.0","NLPL","Nokia","NOSL","Noweb","NPL-1.0","NPL-1.1","NPOSL-3.0","NRL","NTP","NTP-0","Nunit","O-UDA-1.0","OCCT-PL","OCLC-2.0","ODbL-1.0","ODC-By-1.0","OFL-1.0","OFL-1.0-no-RFN","OFL-1.0-RFN","OFL-1.1","OFL-1.1-no-RFN","OFL-1.1-RFN","OGC-1.0","OGDL-Taiwan-1.0","OGL-Canada-2.0","OGL-UK-1.0","OGL-UK-2.0","OGL-UK-3.0","OGTSL","OLDAP-1.1","OLDAP-1.2","OLDAP-1.3","OLDAP-1.4","OLDAP-2.0","OLDAP-2.0.1","OLDAP-2.1","OLDAP-2.2","OLDAP-2.2.1","OLDAP-2.2.2","OLDAP-2.3","OLDAP-2.4","OLDAP-2.5","OLDAP-2.6","OLDAP-2.7","OLDAP-2.8","OML","OpenSSL","OPL-1.0","OSET-PL-2.1","OSL-1.0","OSL-1.1","OSL-2.0","OSL-2.1","OSL-3.0","Parity-6.0.0","Parity-7.0.0","PDDL-1.0","PHP-3.0","PHP-3.01","Plexus","PolyForm-Noncommercial-1.0.0","PolyForm-Small-Business-1.0.0","PostgreSQL","PSF-2.0","psfrag","psutils","Python-2.0","Qhull","QPL-1.0","Rdisc","RHeCos-1.1","RPL-1.1","RPL-1.5","RPSL-1.0","RSA-MD","RSCPL","Ruby","SAX-PD","Saxpath","SCEA","Sendmail","Sendmail-8.23","SGI-B-1.0","SGI-B-1.1","SGI-B-2.0","SHL-0.5","SHL-0.51","SimPL-2.0","SISSL","SISSL-1.2","Sleepycat","SMLNJ","SMPPL","SNIA","Spencer-86","Spencer-94","Spencer-99","SPL-1.0","SSH-OpenSSH","SSH-short","SSPL-1.0","StandardML-NJ","SugarCRM-1.1.3","SWL","TAPR-OHL-1.0","TCL","TCP-wrappers","TMate","TORQUE-1.1","TOSL","TU-Berlin-1.0","TU-Berlin-2.0","UCL-1.0","Unicode-DFS-2015","Unicode-DFS-2016","Unicode-TOU","Unlicense","UPL-1.0","Vim","VOSTROM","VSL-1.0","W3C","W3C-19980720","W3C-20150513","Watcom-1.0","Wsuipa","WTFPL","wxWindows","X11","Xerox","XFree86-1.1","xinetd","Xnet","xpp","XSkat","YPL-1.0","YPL-1.1","Zed","Zend-2.0","Zimbra-1.3","Zimbra-1.4","Zlib","zlib-acknowledgement","ZPL-1.1","ZPL-2.0","ZPL-2.1"],"type":"string"},"orcid":{"description":"Identifier for an author, see https://orcid.org.","format":"uri","pattern":"https://orcid\\\\.org/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0-9X]{1}","type":"string"},"person":{"additionalProperties":false,"description":"A person.","properties":{"address":{"$ref":"#/definitions/address","description":"The person\'s address."},"affiliation":{"description":"The person\'s affilitation.","minLength":1,"type":"string"},"alias":{"$ref":"#/definitions/alias","description":"The person\'s alias."},"city":{"$ref":"#/definitions/city","description":"The person\'s city."},"country":{"$ref":"#/definitions/country","description":"The person\'s country."},"email":{"$ref":"#/definitions/email","description":"The person\'s email address."},"family-names":{"description":"The person\'s family names.","minLength":1,"type":"string"},"fax":{"$ref":"#/definitions/fax","description":"The person\'s fax number."},"given-names":{"description":"The person\'s given names.","minLength":1,"type":"string"},"name-particle":{"description":"The person\'s name particle, e.g., a nobiliary particle or a preposition meaning \'of\' or \'from\' (for example \'von\' in \'Alexander von Humboldt\').","examples":["von"],"minLength":1,"type":"string"},"name-suffix":{"description":"The person\'s name-suffix, e.g. \'Jr.\' for Sammy Davis Jr. or \'III\' for Frank Edwin Wright III.","examples":["Jr.","III"],"minLength":1,"type":"string"},"orcid":{"$ref":"#/definitions/orcid","description":"The person\'s ORCID."},"post-code":{"$ref":"#/definitions/post-code","description":"The person\'s post-code."},"region":{"$ref":"#/definitions/region","description":"The person\'s region."},"tel":{"$ref":"#/definitions/tel","description":"The person\'s phone number."},"website":{"$ref":"#/definitions/url","description":"The person\'s website."}},"type":"object"},"post-code":{"anyOf":[{"minLength":1,"type":"string"},{"type":"number"}],"description":"A post code."},"reference":{"additionalProperties":false,"description":"A reference to a work.","properties":{"abbreviation":{"description":"The abbreviation of a work.","minLength":1,"type":"string"},"abstract":{"description":"The abstract of a work.","minLength":1,"type":"string"},"authors":{"description":"The author(s) of a work.","items":{"anyOf":[{"$ref":"#/definitions/person"},{"$ref":"#/definitions/entity"}]},"minItems":1,"type":"array","uniqueItems":true},"collection-doi":{"$ref":"#/definitions/doi","description":"The DOI of a collection containing the work."},"collection-title":{"description":"The title of a collection or proceedings.","minLength":1,"type":"string"},"collection-type":{"description":"The type of a collection.","minLength":1,"type":"string"},"commit":{"$ref":"#/definitions/commit"},"conference":{"$ref":"#/definitions/entity","description":"The conference where the work was presented."},"contact":{"description":"The contact person, group, company, etc. for a work.","items":{"anyOf":[{"$ref":"#/definitions/person"},{"$ref":"#/definitions/entity"}]},"minItems":1,"type":"array","uniqueItems":true},"copyright":{"description":"The copyright information pertaining to the work.","minLength":1,"type":"string"},"data-type":{"description":"The data type of a data set.","minLength":1,"type":"string"},"database":{"description":"The name of the database where a work was accessed/is stored.","minLength":1,"type":"string"},"database-provider":{"$ref":"#/definitions/entity","description":"The provider of the database where a work was accessed/is stored."},"date-accessed":{"$ref":"#/definitions/date","description":"The date the work was accessed."},"date-downloaded":{"$ref":"#/definitions/date","description":"The date the work has been downloaded."},"date-published":{"$ref":"#/definitions/date","description":"The date the work has been published."},"date-released":{"$ref":"#/definitions/date","description":"The date the work has been released."},"department":{"description":"The department where a work has been produced.","minLength":1,"type":"string"},"doi":{"$ref":"#/definitions/doi","description":"The DOI of the work."},"edition":{"description":"The edition of the work.","minLength":1,"type":"string"},"editors":{"description":"The editor(s) of a work.","items":{"anyOf":[{"$ref":"#/definitions/person"},{"$ref":"#/definitions/entity"}]},"minItems":1,"type":"array","uniqueItems":true},"editors-series":{"description":"The editor(s) of a series in which a work has been published.","items":{"anyOf":[{"$ref":"#/definitions/person"},{"$ref":"#/definitions/entity"}]},"minItems":1,"type":"array","uniqueItems":true},"end":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The end page of the work."},"entry":{"description":"An entry in the collection that constitutes the work.","minLength":1,"type":"string"},"filename":{"description":"The name of the electronic file containing the work.","minLength":1,"type":"string"},"format":{"description":"The format in which a work is represented.","minLength":1,"type":"string"},"identifiers":{"description":"The identifier(s) of the work.","items":{"$ref":"#/definitions/identifier"},"minItems":1,"type":"array","uniqueItems":true},"institution":{"$ref":"#/definitions/entity","description":"The institution where a work has been produced or published."},"isbn":{"description":"The ISBN of the work.","pattern":"^[0-9\\\\- ]{10,17}X?$","type":"string"},"issn":{"description":"The ISSN of the work.","pattern":"^\\\\d{4}-\\\\d{3}[\\\\dxX]$","type":"string"},"issue":{"anyOf":[{"minLength":1,"type":"string"},{"type":"number"}],"description":"The issue of a periodical in which a work appeared."},"issue-date":{"description":"The publication date of the issue of a periodical in which a work appeared.","minLength":1,"type":"string"},"issue-title":{"description":"The name of the issue of a periodical in which the work appeared.","minLength":1,"type":"string"},"journal":{"description":"The name of the journal/magazine/newspaper/periodical where the work was published.","minLength":1,"type":"string"},"keywords":{"description":"Keywords pertaining to the work.","items":{"minLength":1,"type":"string"},"minItems":1,"type":"array","uniqueItems":true},"languages":{"description":"The language identifier(s) of the work according to ISO 639 language strings.","items":{"maxLength":3,"minLength":2,"pattern":"^[a-z]{2,3}$","type":"string"},"minItems":1,"type":"array","uniqueItems":true},"license":{"$ref":"#/definitions/license"},"license-url":{"$ref":"#/definitions/url","description":"The URL of the license text under which the work is licensed (only for non-standard licenses not included in the SPDX License List)."},"loc-end":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The line of code in the file where the work ends."},"loc-start":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The line of code in the file where the work starts."},"location":{"$ref":"#/definitions/entity","description":"The location of the work."},"medium":{"description":"The medium of the work.","minLength":1,"type":"string"},"month":{"anyOf":[{"maximum":12,"minimum":1,"type":"integer"},{"enum":["1","2","3","4","5","6","7","8","9","10","11","12"],"type":"string"}],"description":"The month in which a work has been published."},"nihmsid":{"description":"The NIHMSID of a work.","minLength":1,"type":"string"},"notes":{"description":"Notes pertaining to the work.","minLength":1,"type":"string"},"number":{"anyOf":[{"minLength":1,"type":"string"},{"type":"number"}],"description":"The accession number for a work."},"number-volumes":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The number of volumes making up the collection in which the work has been published."},"pages":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The number of pages of the work."},"patent-states":{"description":"The states for which a patent is granted.","items":{"minLength":1,"type":"string"},"minItems":1,"type":"array","uniqueItems":true},"pmcid":{"description":"The PMCID of a work.","pattern":"^PMC[0-9]{7}$","type":"string"},"publisher":{"$ref":"#/definitions/entity","description":"The publisher who has published the work."},"recipients":{"description":"The recipient(s) of a personal communication.","items":{"anyOf":[{"$ref":"#/definitions/entity"},{"$ref":"#/definitions/person"}]},"minItems":1,"type":"array","uniqueItems":true},"repository":{"$ref":"#/definitions/url","description":"The URL of the work in a repository (when the repository is neither a source code repository nor a build artifact repository)."},"repository-artifact":{"$ref":"#/definitions/url","description":"The URL of the work in a build artifact/binary repository."},"repository-code":{"$ref":"#/definitions/url","description":"The URL of the work in a source code repository."},"scope":{"description":"The scope of the reference, e.g., the section of the work it adheres to.","minLength":1,"type":"string"},"section":{"anyOf":[{"minLength":1,"type":"string"},{"type":"number"}],"description":"The section of a work that is referenced."},"senders":{"description":"The sender(s) of a personal communication.","items":{"anyOf":[{"$ref":"#/definitions/entity"},{"$ref":"#/definitions/person"}]},"minItems":1,"type":"array","uniqueItems":true},"start":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The start page of the work."},"status":{"description":"The publication status of the work.","enum":["abstract","advance-online","in-preparation","in-press","preprint","submitted"],"type":"string"},"term":{"description":"The term being referenced if the work is a dictionary or encyclopedia.","minLength":1,"type":"string"},"thesis-type":{"description":"The type of the thesis that is the work.","minLength":1,"type":"string"},"title":{"description":"The title of the work.","minLength":1,"type":"string"},"translators":{"description":"The translator(s) of a work.","items":{"anyOf":[{"$ref":"#/definitions/entity"},{"$ref":"#/definitions/person"}]},"minItems":1,"type":"array","uniqueItems":true},"type":{"description":"The type of the work.","enum":["art","article","audiovisual","bill","blog","book","catalogue","conference-paper","conference","data","database","dictionary","edited-work","encyclopedia","film-broadcast","generic","government-document","grant","hearing","historical-work","legal-case","legal-rule","magazine-article","manual","map","multimedia","music","newspaper-article","pamphlet","patent","personal-communication","proceedings","report","serial","slides","software-code","software-container","software-executable","software-virtual-machine","software","sound-recording","standard","statute","thesis","unpublished","video","website"],"type":"string"},"url":{"$ref":"#/definitions/url","description":"The URL of the work."},"version":{"$ref":"#/definitions/version","description":"The version of the work."},"volume":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The volume of the periodical in which a work appeared."},"volume-title":{"description":"The title of the volume in which the work appeared.","minLength":1,"type":"string"},"year":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The year in which a work has been published."},"year-original":{"anyOf":[{"type":"integer"},{"minLength":1,"type":"string"}],"description":"The year of the original publication."}},"required":["authors","title","type"],"type":"object"},"region":{"description":"A region.","minLength":1,"type":"string"},"swh-identifier":{"$comment":"Software Heritage identifiers are documented here: https://docs.softwareheritage.org/devel/swh-model/persistent-identifiers.html.","description":"The Software Heritage identifier (without further qualifiers such as origin, visit, anchor, path).","examples":["swh:1:cnt:94a9ed024d3859793618152ea559a168bbcbb5e2","swh:1:dir:d198bc9d7a6bcf6db04f476d29314f157507d505","swh:1:rev:309cf2674ee7a0749978cf8265ab91a60aea0f7d","swh:1:rel:22ece559cc7cc2364edc5e5593d63ae8bd229f9f","swh:1:snp:c7c108084bc0bf3d81436bf980b46e98bd338453"],"pattern":"^swh:1:(snp|rel|rev|dir|cnt):[0-9a-fA-F]{40}$","type":"string"},"tel":{"description":"A phone number.","minLength":1,"type":"string"},"url":{"format":"uri","pattern":"^(https|http|ftp|sftp)://.+","type":"string"},"version":{"anyOf":[{"minLength":1,"type":"string"},{"type":"number"}]}},"description":"A file with citation metadata for software or datasets.","properties":{"abstract":{"description":"A description of the software or dataset.","minLength":1,"type":"string"},"authors":{"description":"The author(s) of the software or dataset.","items":{"anyOf":[{"$ref":"#/definitions/person"},{"$ref":"#/definitions/entity"}]},"minItems":1,"type":"array","uniqueItems":true},"cff-version":{"description":"The version of CFF used for providing the citation metadata.","examples":["1.2.0"],"pattern":"^1\\\\.2\\\\.0$","type":"string"},"commit":{"$ref":"#/definitions/commit"},"contact":{"description":"The contact person, group, company, etc. for the software or dataset.","items":{"anyOf":[{"$ref":"#/definitions/person"},{"$ref":"#/definitions/entity"}]},"minItems":1,"type":"array","uniqueItems":true},"date-released":{"$ref":"#/definitions/date","description":"The date the work has been released."},"doi":{"$ref":"#/definitions/doi"},"identifiers":{"description":"The identifiers of the software or dataset.","items":{"$ref":"#/definitions/identifier"},"minItems":1,"type":"array","uniqueItems":true},"keywords":{"description":"Keywords that describe the work.","items":{"minLength":1,"type":"string"},"minItems":1,"type":"array","uniqueItems":true},"license":{"$ref":"#/definitions/license"},"license-url":{"$ref":"#/definitions/url","description":"The URL of the license text under which the software or dataset is licensed (only for non-standard licenses not included in the SPDX License List)."},"message":{"default":"If you use this software, please cite it using the metadata from this file.","description":"A message to the human reader of the file to let them know what to do with the citation metadata.","examples":["If you use this software, please cite it using the metadata from this file.","Please cite this software using these metadata.","Please cite this software using the metadata from \'preferred-citation\'."],"minLength":1,"type":"string"},"preferred-citation":{"$ref":"#/definitions/reference","description":"A reference to another work that should be cited instead of the software or dataset itself."},"references":{"description":"Reference(s) to other creative works.","items":{"$ref":"#/definitions/reference"},"minItems":1,"type":"array","uniqueItems":true},"repository":{"$ref":"#/definitions/url","description":"The URL of the software or dataset in a repository (when the repository is neither a source code repository nor a build artifact repository).","examples":["https://edoc.hu-berlin.de/handle/18452/23016","https://ascl.net/2105.013"]},"repository-artifact":{"$ref":"#/definitions/url","description":"The URL of the software in a build artifact/binary repository."},"repository-code":{"$ref":"#/definitions/url","description":"The URL of the software or dataset in a source code repository."},"title":{"description":"The name of the software or dataset.","minLength":1,"type":"string"},"type":{"default":"software","description":"The type of the work.","enum":["dataset","software"],"type":"string"},"url":{"$ref":"#/definitions/url","description":"The URL of a landing page/website for the software or dataset."},"version":{"$ref":"#/definitions/version","description":"The version of the software or dataset."}},"required":["authors","cff-version","message","title"],"title":"Citation File Format","type":"object"}')}}]);