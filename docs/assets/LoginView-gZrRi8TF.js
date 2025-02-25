import{g as $e,u as Y,t as Q,n as L,m as z,d as j,e as me,c as X,a as Oe,b as c,r as De,i as E,I as W,w as Z,f as Fe,h as he,p as J,F as be,j as Ne,k as qe,s as ze,l as We,o as je,q as Ue,v as O,x as Ge,y as R,z as oe,A as He,B as Ke,C as H,D as Ye,E as Je,G as Qe,H as Xe,J as se,K as ve,L as ne,M as Ze,N as pe,O as et,P as tt,Q as nt,R as at,S as lt,T as it,U as ce,V as ee,W as q,X as rt,Y as ot,Z as K,_ as st,$ as ct}from"./index-CZsDpnAg.js";let ut=0;function dt(){const e=$e(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++ut}`}const[ft,$]=X("cell"),ye={tag:z("div"),icon:String,size:String,title:L,value:L,label:L,center:Boolean,isLink:Boolean,border:Q,iconPrefix:String,valueClass:Y,labelClass:Y,titleClass:Y,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},gt=me({},ye,De);var mt=j({name:ft,props:gt,setup(e,{slots:n}){const s=Oe(),u=()=>{if(n.label||E(e.label))return c("div",{class:[$("label"),e.labelClass]},[n.label?n.label():e.label])},i=()=>{var l;if(n.title||E(e.title)){const h=(l=n.title)==null?void 0:l.call(n);return Array.isArray(h)&&h.length===0?void 0:c("div",{class:[$("title"),e.titleClass],style:e.titleStyle},[h||c("span",null,[e.title]),u()])}},f=()=>{const l=n.value||n.default;if(l||E(e.value))return c("div",{class:[$("value"),e.valueClass]},[l?l():c("span",null,[e.value])])},B=()=>{if(n.icon)return n.icon();if(e.icon)return c(W,{name:e.icon,class:$("left-icon"),classPrefix:e.iconPrefix},null)},V=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const l=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return c(W,{name:l,class:$("right-icon")},null)}};return()=>{var l;const{tag:h,size:g,center:D,border:P,isLink:M,required:A}=e,k=(l=e.clickable)!=null?l:M,a={center:D,required:!!A,clickable:k,borderless:!P};return g&&(a[g]=!!g),c(h,{class:$(a),role:k?"button":void 0,tabindex:k?0:void 0,onClick:s},{default:()=>{var d;return[B(),i(),f(),V(),(d=n.extra)==null?void 0:d.call(n)]}})}}});const ht=Z(mt),[bt,vt]=X("form"),yt={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:L,labelAlign:String,inputAlign:String,scrollToError:Boolean,scrollToErrorPosition:String,validateFirst:Boolean,submitOnEnter:Q,showErrorMessage:Q,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var St=j({name:bt,props:yt,emits:["submit","failed"],setup(e,{emit:n,slots:s}){const{children:u,linkChildren:i}=Fe(be),f=a=>a?u.filter(d=>a.includes(d.name)):u,B=a=>new Promise((d,b)=>{const S=[];f(a).reduce((p,F)=>p.then(()=>{if(!S.length)return F.validate().then(N=>{N&&S.push(N)})}),Promise.resolve()).then(()=>{S.length?b(S):d()})}),V=a=>new Promise((d,b)=>{const S=f(a);Promise.all(S.map(y=>y.validate())).then(y=>{y=y.filter(Boolean),y.length?b(y):d()})}),l=a=>{const d=u.find(b=>b.name===a);return d?new Promise((b,S)=>{d.validate().then(y=>{y?S(y):b()})}):Promise.reject()},h=a=>typeof a=="string"?l(a):e.validateFirst?B(a):V(a),g=a=>{typeof a=="string"&&(a=[a]),f(a).forEach(b=>{b.resetValidation()})},D=()=>u.reduce((a,d)=>(a[d.name]=d.getValidationStatus(),a),{}),P=(a,d)=>{u.some(b=>b.name===a?(b.$el.scrollIntoView(d),!0):!1)},M=()=>u.reduce((a,d)=>(d.name!==void 0&&(a[d.name]=d.formValue.value),a),{}),A=()=>{const a=M();h().then(()=>n("submit",a)).catch(d=>{n("failed",{values:a,errors:d});const{scrollToError:b,scrollToErrorPosition:S}=e;b&&d[0].name&&P(d[0].name,S?{block:S}:void 0)})},k=a=>{J(a),A()};return i({props:e}),he({submit:A,validate:h,getValues:M,scrollToField:P,resetValidation:g,getValidationStatus:D}),()=>{var a;return c("form",{class:vt(),onSubmit:k},[(a=s.default)==null?void 0:a.call(s)])}}});const wt=Z(St);function Se(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Vt(e,n){if(Se(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function Ct(e,n){return new Promise(s=>{const u=n.validator(e,n);if(je(u)){u.then(s);return}s(u)})}function ue(e,n){const{message:s}=n;return We(s)?s(e,n):s||""}function kt({target:e}){e.composing=!0}function de({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function xt(e,n){const s=Ne();e.style.height="auto";let u=e.scrollHeight;if(qe(n)){const{maxHeight:i,minHeight:f}=n;i!==void 0&&(u=Math.min(u,i)),f!==void 0&&(u=Math.max(u,f))}u&&(e.style.height=`${u}px`,ze(s))}function It(e,n){return e==="number"&&(e="text",n??(n="decimal")),e==="digit"&&(e="tel",n??(n="numeric")),{type:e,inputmode:n}}function I(e){return[...e].length}function te(e,n){return[...e].slice(0,n).join("")}const[Et,w]=X("field"),Bt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:L,max:Number,min:Number,formatter:Function,clearIcon:z("clear"),modelValue:Xe(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:z("focus"),formatTrigger:z("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},inputmode:String},Pt=me({},ye,Bt,{rows:L,type:z("text"),rules:Array,autosize:[Boolean,Object],labelWidth:L,labelClass:Y,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Tt=j({name:Et,props:Pt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:s}){const u=dt(),i=Ue({status:"unvalidated",focused:!1,validateMessage:""}),f=O(),B=O(),V=O(),{parent:l}=Ge(be),h=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(E(e[t]))return e[t];if(l&&E(l.props[t]))return l.props[t]},D=R(()=>{const t=g("readonly");if(e.clearable&&!t){const r=h()!=="",o=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return r&&o}return!1}),P=R(()=>V.value&&s.input?V.value():e.modelValue),M=R(()=>{var t;const r=g("required");return r==="auto"?(t=e.rules)==null?void 0:t.some(o=>o.required):r}),A=t=>t.reduce((r,o)=>r.then(()=>{if(i.status==="failed")return;let{value:m}=P;if(o.formatter&&(m=o.formatter(m,o)),!Vt(m,o)){i.status="failed",i.validateMessage=ue(m,o);return}if(o.validator)return Se(m)&&o.validateEmpty===!1?void 0:Ct(m,o).then(v=>{v&&typeof v=="string"?(i.status="failed",i.validateMessage=v):v===!1&&(i.status="failed",i.validateMessage=ue(m,o))})}),Promise.resolve()),k=()=>{i.status="unvalidated",i.validateMessage=""},a=()=>n("endValidate",{status:i.status,message:i.validateMessage}),d=(t=e.rules)=>new Promise(r=>{k(),t?(n("startValidate"),A(t).then(()=>{i.status==="failed"?(r({name:e.name,message:i.validateMessage}),a()):(i.status="passed",r(),a())})):r()}),b=t=>{if(l&&e.rules){const{validateTrigger:r}=l.props,o=se(r).includes(t),m=e.rules.filter(v=>v.trigger?se(v.trigger).includes(t):o);m.length&&d(m)}},S=t=>{var r;const{maxlength:o}=e;if(E(o)&&I(t)>+o){const m=h();if(m&&I(m)===+o)return m;const v=(r=f.value)==null?void 0:r.selectionEnd;if(i.focused&&v){const T=[...t],_=T.length-+o;return T.splice(v-_,_),T.join("")}return te(t,+o)}return t},y=(t,r="onChange")=>{var o,m;const v=t;t=S(t);const T=I(v)-I(t);if(e.type==="number"||e.type==="digit"){const x=e.type==="number";if(t=Je(t,x,x),r==="onBlur"&&t!==""&&(e.min!==void 0||e.max!==void 0)){const C=Qe(+t,(o=e.min)!=null?o:-1/0,(m=e.max)!=null?m:1/0);+t!==C&&(t=C.toString())}}let _=0;if(e.formatter&&r===e.formatTrigger){const{formatter:x,maxlength:C}=e;if(t=x(t),E(C)&&I(t)>+C&&(t=te(t,+C)),f.value&&i.focused){const{selectionEnd:G}=f.value,re=te(v,G);_=I(x(re))-I(re)}}if(f.value&&f.value.value!==t)if(i.focused){let{selectionStart:x,selectionEnd:C}=f.value;if(f.value.value=t,E(x)&&E(C)){const G=I(t);T?(x-=T,C-=T):_&&(x+=_,C+=_),f.value.setSelectionRange(Math.min(x,G),Math.min(C,G))}}else f.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},p=t=>{t.target.composing||y(t.target.value)},F=()=>{var t;return(t=f.value)==null?void 0:t.blur()},N=()=>{var t;return(t=f.value)==null?void 0:t.focus()},U=()=>{const t=f.value;e.type==="textarea"&&e.autosize&&t&&xt(t,e.autosize)},we=t=>{i.focused=!0,n("focus",t),H(U),g("readonly")&&F()},Ve=t=>{i.focused=!1,y(h(),"onBlur"),n("blur",t),!g("readonly")&&(b("onBlur"),H(U),Ze())},ae=t=>n("clickInput",t),Ce=t=>n("clickLeftIcon",t),ke=t=>n("clickRightIcon",t),xe=t=>{J(t),n("update:modelValue",""),n("clear",t)},le=R(()=>{if(typeof e.error=="boolean")return e.error;if(l&&l.props.showError&&i.status==="failed")return!0}),Ie=R(()=>{const t=g("labelWidth"),r=g("labelAlign");if(t&&r!=="top")return{width:oe(t)}}),Ee=t=>{t.keyCode===13&&(!(l&&l.props.submitOnEnter)&&e.type!=="textarea"&&J(t),e.type==="search"&&F()),n("keypress",t)},ie=()=>e.id||`${u}-input`,Be=()=>i.status,Pe=()=>{const t=w("control",[g("inputAlign"),{error:le.value,custom:!!s.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(s.input)return c("div",{class:t,onClick:ae},[s.input()]);const r={id:ie(),ref:f,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${u}-label`:void 0,"data-allow-mismatch":"attribute",onBlur:Ve,onFocus:we,onInput:p,onClick:ae,onChange:de,onKeypress:Ee,onCompositionend:de,onCompositionstart:kt};return e.type==="textarea"?c("textarea",ne(r,{inputmode:e.inputmode}),null):c("input",ne(It(e.type,e.inputmode),r),null)},Te=()=>{const t=s["left-icon"];if(e.leftIcon||t)return c("div",{class:w("left-icon"),onClick:Ce},[t?t():c(W,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},_e=()=>{const t=s["right-icon"];if(e.rightIcon||t)return c("div",{class:w("right-icon"),onClick:ke},[t?t():c(W,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Le=()=>{if(e.showWordLimit&&e.maxlength){const t=I(h());return c("div",{class:w("word-limit")},[c("span",{class:w("word-num")},[t]),ve("/"),e.maxlength])}},Me=()=>{if(l&&l.props.showErrorMessage===!1)return;const t=e.errorMessage||i.validateMessage;if(t){const r=s["error-message"],o=g("errorMessageAlign");return c("div",{class:w("error-message",o)},[r?r({message:t}):t])}},Ae=()=>{const t=g("labelWidth"),r=g("labelAlign"),o=g("colon")?":":"";if(s.label)return[s.label(),o];if(e.label)return c("label",{id:`${u}-label`,for:s.input?void 0:ie(),"data-allow-mismatch":"attribute",onClick:m=>{J(m),N()},style:r==="top"&&t?{width:oe(t)}:void 0},[e.label+o])},Re=()=>[c("div",{class:w("body")},[Pe(),D.value&&c(W,{ref:B,name:e.clearIcon,class:w("clear")},null),_e(),s.button&&c("div",{class:w("button")},[s.button()])]),Le(),Me()];return he({blur:F,focus:N,validate:d,formValue:P,resetValidation:k,getValidationStatus:Be}),pe(et,{customValue:V,resetValidation:k,validateWithTrigger:b}),He(()=>e.modelValue,()=>{y(h()),k(),b("onChange"),H(U)}),Ke(()=>{y(h(),e.formatTrigger),H(U)}),Ye("touchstart",xe,{target:R(()=>{var t;return(t=B.value)==null?void 0:t.$el})}),()=>{const t=g("disabled"),r=g("labelAlign"),o=Te(),m=()=>{const v=Ae();return r==="top"?[o,v].filter(Boolean):v||[]};return c(ht,{size:e.size,class:w({error:le.value,disabled:t,[`label-${r}`]:r}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Ie.value,valueClass:w("value"),titleClass:[w("label",[r,{required:M.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:o&&r!=="top"?()=>o:null,title:m,value:Re,extra:s.extra})}}});const fe=Z(Tt),[_t,ge]=X("cell-group"),Lt={title:String,inset:Boolean,border:Q};var Mt=j({name:_t,inheritAttrs:!1,props:Lt,setup(e,{slots:n,attrs:s}){const u=()=>{var f;return c("div",ne({class:[ge({inset:e.inset}),{[at]:e.border&&!e.inset}]},s,nt()),[(f=n.default)==null?void 0:f.call(n)])},i=()=>c("div",{class:ge("title",{inset:e.inset})},[n.title?n.title():e.title]);return()=>e.title||n.title?c(tt,null,[i(),u()]):u()}});const At=Z(Mt),Rt={class:"login"},$t={style:{margin:"16px"}},Dt=j({__name:"LoginView",setup(e){const n=O("test@example.com"),s=O("password"),u=O(!1),i={email:[{required:!0,message:"请填写邮箱地址"},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"请输入正确的邮箱格式"}],password:[{required:!0,message:"请填写密码"}]},f=async()=>{try{await ot()}catch{K("初始化失败，请刷新页面重试")}},B=async V=>{try{u.value=!0;const l=await st(V);l.code===200?(K("登录成功"),ct.push("/")):K(l.message||"登录失败")}catch{K("网络错误，请稍后重试")}finally{u.value=!1}};return f(),(V,l)=>(it(),lt("div",Rt,[l[3]||(l[3]=ce("h1",null,"登录页",-1)),c(q(wt),{onSubmit:B},{default:ee(()=>[c(q(At),{inset:""},{default:ee(()=>[c(q(fe),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=h=>n.value=h),name:"email",label:"邮箱地址",placeholder:"请输入邮箱地址",rules:i.email},null,8,["modelValue","rules"]),c(q(fe),{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=h=>s.value=h),type:"password",name:"password",label:"密码",placeholder:"请输入密码",rules:i.password},null,8,["modelValue","rules"])]),_:1}),ce("div",$t,[c(q(rt),{round:"",block:"",type:"primary","native-type":"submit",loading:u.value,"loading-text":"登录中..."},{default:ee(()=>l[2]||(l[2]=[ve(" 登录 ")])),_:1},8,["loading"])])]),_:1})]))}});export{Dt as default};
