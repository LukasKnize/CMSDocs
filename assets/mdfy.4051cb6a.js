import{ah as De,b as i,d as z,m as ve,M as fe,V as le,c as d,h as Q,a1 as N,ab as H,Z as ge,p as Ae,l as ae,r as R,T as Me,y as A,F as J,J as me,H as j,_ as K,t as ye,ai as he,U as pe,X,i as Oe,Q as L,D as Te,s as xe,o as be,aj as ie,E as se,ak as Le,G as Ee,al as Ne,am as He,an as je,j as oe,f as ze,ad as Ue,w as re,B as ue}from"./index.50aebacc.js";import{a as Ge,b as Ve}from"./index.9ccfb45e.js";import{a as We,w as qe,z as Ke,v as Xe,c as _e,L as Je,b as Ce,M as Ie,e as Qe,j as Ye,I as Ze,V as ce}from"./transition.b256a2f3.js";import{u as E}from"./tag.b4507f5a.js";class te{constructor(s){let{x:a,y:l,width:n,height:t}=s;this.x=a,this.y=l,this.width=n,this.height=t}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function et(e){const s=e.getBoundingClientRect(),a=getComputedStyle(e),l=a.transform;if(l){let n,t,o,r,u;if(l.startsWith("matrix3d("))n=l.slice(9,-1).split(/, /),t=+n[0],o=+n[5],r=+n[12],u=+n[13];else if(l.startsWith("matrix("))n=l.slice(7,-1).split(/, /),t=+n[0],o=+n[3],r=+n[4],u=+n[5];else return new te(s);const v=a.transformOrigin,p=s.x-r-(1-t)*parseFloat(v),x=s.y-u-(1-o)*parseFloat(v.slice(v.indexOf(" ")+1)),f=t?s.width/t:e.offsetWidth+1,b=o?s.height/o:e.offsetHeight+1;return new te({x:p,y:x,width:f,height:b})}else return new te(s)}function tt(e,s,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};const l=e.animate(s,a);return typeof l.finished>"u"&&(l.finished=new Promise(n=>{l.onfinish=()=>{n(l)}})),l}const nt="cubic-bezier(0.4, 0, 0.2, 1)";function we(e){const{t:s}=De();function a(l){var u;let{name:n}=l;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[n],o=e[`onClick:${n}`],r=o&&t?s(`$vuetify.input.${t}`,(u=e.label)!=null?u:""):void 0;return i(We,{icon:e[`${n}Icon`],"aria-label":r,onClick:o},null)}return{InputIcon:a}}const lt=z({name:"VLabel",props:{text:String,clickable:Boolean,...ve()},setup(e,s){let{slots:a}=s;return E(()=>{var l;return i("label",{class:["v-label",{"v-label--clickable":e.clickable}]},[e.text,(l=a.default)==null?void 0:l.call(a)])}),{}}}),q=z({name:"VFieldLabel",props:{floating:Boolean},setup(e,s){let{slots:a}=s;return E(()=>i(lt,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},a)),{}}}),ke=Q({focused:Boolean},"focus");function $e(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fe();const a=le(e,"focused"),l=d(()=>({[`${s}--focused`]:a.value}));function n(){a.value=!0}function t(){a.value=!1}return{focusClasses:l,isFocused:a,focus:n,blur:t}}const at=["underlined","outlined","filled","solo","plain"],Se=Q({appendInnerIcon:N,bgColor:String,clearable:Boolean,clearIcon:{type:N,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:N,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>at.includes(e)},"onClick:clear":H,"onClick:appendInner":H,"onClick:prependInner":H,...ve(),...qe()},"v-field"),Pe=ge()({name:"VField",inheritAttrs:!1,props:{id:String,...ke(),...Se()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:a,emit:l,slots:n}=s;const{themeClasses:t}=Ae(e),{loaderClasses:o}=Ke(e),{focusClasses:r,isFocused:u,focus:v,blur:p}=$e(e),{InputIcon:x}=we(e),f=d(()=>e.dirty||e.active),b=d(()=>!e.singleLine&&!!(e.label||n.label)),O=ae(),m=d(()=>e.id||`input-${O}`),M=d(()=>`${m.value}-messages`),B=R(),I=R(),w=R(),{backgroundColorClasses:V,backgroundColorStyles:k}=Xe(Me(e,"bgColor")),{textColorClasses:_,textColorStyles:F}=_e(d(()=>f.value&&u.value&&!e.error&&!e.disabled?e.color:void 0));A(f,g=>{if(b.value){const y=B.value.$el,h=I.value.$el;requestAnimationFrame(()=>{const $=et(y),S=h.getBoundingClientRect(),T=S.x-$.x,D=S.y-$.y-($.height/2-S.height/2),P=S.width/.75,U=Math.abs(P-$.width)>1?{maxWidth:ye(P)}:void 0,Y=getComputedStyle(y),G=getComputedStyle(h),Z=parseFloat(Y.transitionDuration)*1e3||150,W=parseFloat(G.getPropertyValue("--v-field-label-scale")),ee=G.getPropertyValue("color");y.style.visibility="visible",h.style.visibility="hidden",tt(y,{transform:`translate(${T}px, ${D}px) scale(${W})`,color:ee,...U},{duration:Z,easing:nt,direction:g?"normal":"reverse"}).finished.then(()=>{y.style.removeProperty("visibility"),h.style.removeProperty("visibility")})})}},{flush:"post"});const C=d(()=>({isActive:f,isFocused:u,controlRef:w,blur:p,focus:v}));function c(g){g.target!==document.activeElement&&g.preventDefault(),l("click:control",g)}return E(()=>{var g,y,h;const $=e.variant==="outlined",S=n["prepend-inner"]||e.prependInnerIcon,T=!!(e.clearable||n.clear),D=!!(n["append-inner"]||e.appendInnerIcon||T),P=n.label?n.label({label:e.label,props:{for:m.value}}):e.label;return i("div",K({class:["v-field",{"v-field--active":f.value,"v-field--appended":D,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":S,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!P,[`v-field--variant-${e.variant}`]:!0},t.value,V.value,r.value,o.value],style:[k.value,F.value],onClick:c},a),[i("div",{class:"v-field__overlay"},null),i(Je,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:n.loader}),S&&i("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&i(x,{key:"prepend-icon",name:"prependInner"},null),(g=n["prepend-inner"])==null?void 0:g.call(n,C.value)]),i("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&b.value&&i(q,{key:"floating-label",ref:I,class:[_.value],floating:!0,for:m.value},{default:()=>[P]}),i(q,{ref:B,for:m.value},{default:()=>[P]}),(y=n.default)==null?void 0:y.call(n,{...C.value,props:{id:m.value,class:"v-field__input","aria-describedby":M.value},focus:v,blur:p})]),T&&i(Ge,{key:"clear"},{default:()=>[J(i("div",{class:"v-field__clearable"},[n.clear?n.clear():i(x,{name:"clear"},null)]),[[me,e.dirty]])]}),D&&i("div",{key:"append",class:"v-field__append-inner"},[(h=n["append-inner"])==null?void 0:h.call(n,C.value),e.appendInnerIcon&&i(x,{key:"append-icon",name:"appendInner"},null)]),i("div",{class:["v-field__outline",_.value]},[$&&i(j,null,[i("div",{class:"v-field__outline__start"},null),b.value&&i("div",{class:"v-field__outline__notch"},[i(q,{ref:I,floating:!0,for:m.value},{default:()=>[P]})]),i("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&b.value&&i(q,{ref:I,floating:!0,for:m.value},{default:()=>[P]})])])}),{controlRef:w}}});function it(e){const s=Object.keys(Pe.props).filter(a=>!he(a));return pe(e,s)}const st=z({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Ce({transition:{component:Ve,leaveAbsolute:!0,group:!0}})},setup(e,s){let{slots:a}=s;const l=d(()=>X(e.messages)),{textColorClasses:n,textColorStyles:t}=_e(d(()=>e.color));return E(()=>i(Ie,{transition:e.transition,tag:"div",class:["v-messages",n.value],style:t.value,role:"alert","aria-live":"polite"},{default:()=>[e.active&&l.value.map((o,r)=>i("div",{class:"v-messages__message",key:`${r}-${l.value}`},[a.message?a.message({message:o}):o]))]})),{}}}),ot=Symbol.for("vuetify:form");function rt(){return Oe(ot,null)}const ut=Q({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...ke()},"validation");function ct(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fe(),a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ae();const l=le(e,"modelValue"),n=d(()=>e.validationValue===void 0?l.value:e.validationValue),t=rt(),o=R([]),r=R(!0),u=d(()=>!!(X(l.value===""?null:l.value).length||X(n.value===""?null:n.value).length)),v=d(()=>!!(e.disabled||t!=null&&t.isDisabled.value)),p=d(()=>!!(e.readonly||t!=null&&t.isReadonly.value)),x=d(()=>e.errorMessages.length?X(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):o.value),f=d(()=>e.error||x.value.length?!1:e.rules.length&&r.value?null:!0),b=R(!1),O=d(()=>({[`${s}--error`]:f.value===!1,[`${s}--dirty`]:u.value,[`${s}--disabled`]:v.value,[`${s}--readonly`]:p.value})),m=d(()=>{var V;return(V=e.name)!=null?V:L(a)});Te(()=>{t==null||t.register({id:m.value,validate:w,reset:B,resetValidation:I})}),xe(()=>{t==null||t.unregister(m.value)});const M=d(()=>e.validateOn||(t==null?void 0:t.validateOn.value)||"input");be(()=>t==null?void 0:t.update(m.value,f.value,x.value)),ie(()=>M.value==="input",()=>{A(n,()=>{if(n.value!=null)w();else if(e.focused){const V=A(()=>e.focused,k=>{k||w(),V()})}})}),ie(()=>M.value==="blur",()=>{A(()=>e.focused,V=>{V||w()})}),A(f,()=>{t==null||t.update(m.value,f.value,x.value)});function B(){I(),l.value=null}function I(){r.value=!0,o.value=[]}async function w(){var k;const V=[];b.value=!0;for(const _ of e.rules){if(V.length>=((k=e.maxErrors)!=null?k:1))break;const C=await(typeof _=="function"?_:()=>_)(n.value);if(C!==!0){if(typeof C!="string"){console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);continue}V.push(C)}}return o.value=V,b.value=!1,r.value=!1,o.value}return{errorMessages:x,isDirty:u,isDisabled:v,isReadonly:p,isPristine:r,isValid:f,isValidating:b,reset:B,resetValidation:I,validate:w,validationClasses:O}}const Fe=Q({id:String,appendIcon:N,prependIcon:N,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":H,"onClick:append":H,...Qe(),...ut()},"v-input"),Re=ge()({name:"VInput",props:{...Fe()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:a,slots:l,emit:n}=s;const{densityClasses:t}=Ye(e),{InputIcon:o}=we(e),r=ae(),u=d(()=>e.id||`input-${r}`),v=d(()=>`${u.value}-messages`),{errorMessages:p,isDirty:x,isDisabled:f,isReadonly:b,isPristine:O,isValid:m,isValidating:M,reset:B,resetValidation:I,validate:w,validationClasses:V}=ct(e,"v-input",u),k=d(()=>({id:u,messagesId:v,isDirty:x,isDisabled:f,isReadonly:b,isPristine:O,isValid:m,isValidating:M,reset:B,resetValidation:I,validate:w}));return E(()=>{var _,F,C,c,g;const y=!!(l.prepend||e.prependIcon),h=!!(l.append||e.appendIcon),$=!!((_=e.messages)!=null&&_.length||p.value.length),S=!e.hideDetails||e.hideDetails==="auto"&&($||!!l.details);return i("div",{class:["v-input",`v-input--${e.direction}`,t.value,V.value]},[y&&i("div",{key:"prepend",class:"v-input__prepend"},[(F=l.prepend)==null?void 0:F.call(l,k.value),e.prependIcon&&i(o,{key:"prepend-icon",name:"prepend"},null)]),l.default&&i("div",{class:"v-input__control"},[(C=l.default)==null?void 0:C.call(l,k.value)]),h&&i("div",{key:"append",class:"v-input__append"},[e.appendIcon&&i(o,{key:"append-icon",name:"append"},null),(c=l.append)==null?void 0:c.call(l,k.value)]),S&&i("div",{class:"v-input__details"},[i(st,{id:v.value,active:$,messages:p.value.length>0?p.value:e.messages},{message:l.message}),(g=l.details)==null?void 0:g.call(l,k.value)])])}),{reset:B,resetValidation:I,validate:w}}});function dt(e){const s=Object.keys(Re.props).filter(a=>!he(a));return pe(e,s)}const vt=z({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Ce({transition:{component:Ve}})},setup(e,s){let{slots:a}=s;const l=d(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return E(()=>i(Ie,{transition:e.transition},{default:()=>[J(i("div",{class:"v-counter"},[a.default?a.default({counter:l.value,max:e.max,value:e.value}):l.value]),[[me,e.active]])]})),{}}}),ne=Symbol("Forwarded refs");function ft(e){for(var s=arguments.length,a=new Array(s>1?s-1:0),l=1;l<s;l++)a[l-1]=arguments[l];return e[ne]=a,new Proxy(e,{get(n,t){if(Reflect.has(n,t))return Reflect.get(n,t);for(const o of a)if(o.value&&Reflect.has(o.value,t)){const r=Reflect.get(o.value,t);return typeof r=="function"?r.bind(o.value):r}},getOwnPropertyDescriptor(n,t){const o=Reflect.getOwnPropertyDescriptor(n,t);if(o)return o;if(!(typeof t=="symbol"||t.startsWith("__"))){for(const r of a){if(!r.value)continue;const u=Reflect.getOwnPropertyDescriptor(r.value,t);if(u)return u;if("_"in r.value&&"setupState"in r.value._){const v=Reflect.getOwnPropertyDescriptor(r.value._.setupState,t);if(v)return v}}for(const r of a){let u=r.value&&Object.getPrototypeOf(r.value);for(;u;){const v=Reflect.getOwnPropertyDescriptor(u,t);if(v)return v;u=Object.getPrototypeOf(u)}}for(const r of a){const u=r.value&&r.value[ne];if(!u)continue;const v=u.slice();for(;v.length;){const p=v.shift(),x=Reflect.getOwnPropertyDescriptor(p.value,t);if(x)return x;const f=p.value&&p.value[ne];f&&v.push(...f)}}}}})}const de=z({name:"VTextarea",directives:{Intersect:Ze},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...Fe(),...Se()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:a,emit:l,slots:n}=s;const t=le(e,"modelValue"),{isFocused:o,focus:r,blur:u}=$e(e),v=d(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),p=d(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function x(c,g){var y,h;!e.autofocus||!c||(y=g[0].target)==null||(h=y.focus)==null||h.call(y)}const f=R(),b=R(),O=R(""),m=R(),M=d(()=>o.value||e.persistentPlaceholder),B=d(()=>e.messages.length?e.messages:M.value||e.persistentHint?e.hint:"");function I(){if(m.value!==document.activeElement){var c;(c=m.value)==null||c.focus()}o.value||r()}function w(c){I(),l("click:control",c)}function V(c){c.stopPropagation(),I(),se(()=>{t.value="",He(e["onClick:clear"],c)})}function k(c){t.value=c.target.value}const _=R();function F(){!e.autoGrow||se(()=>{if(!_.value||!b.value)return;const c=getComputedStyle(_.value),g=getComputedStyle(b.value.$el),y=parseFloat(c.getPropertyValue("--v-field-padding-top"))+parseFloat(c.getPropertyValue("--v-input-padding-top"))+parseFloat(c.getPropertyValue("--v-field-padding-bottom")),h=_.value.scrollHeight,$=parseFloat(c.lineHeight),S=Math.max(parseFloat(e.rows)*$+y,parseFloat(g.getPropertyValue("--v-input-control-height"))),T=parseFloat(e.maxRows)*$+y||1/0;O.value=ye(je(h!=null?h:0,S,T))})}be(F),A(t,F),A(()=>e.rows,F),A(()=>e.maxRows,F),A(()=>e.density,F);let C;return A(_,c=>{if(c)C=new ResizeObserver(F),C.observe(_.value);else{var g;(g=C)==null||g.disconnect()}}),xe(()=>{var c;(c=C)==null||c.disconnect()}),E(()=>{const c=!!(n.counter||e.counter||e.counterValue),g=!!(c||n.details),[y,h]=Le(a),[{modelValue:$,...S}]=dt(e),[T]=it(e);return i(Re,K({ref:f,modelValue:t.value,"onUpdate:modelValue":D=>t.value=D,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},y,S,{focused:o.value,messages:B.value}),{...n,default:D=>{let{isDisabled:P,isDirty:U,isReadonly:Y,isValid:G}=D;return i(Pe,K({ref:b,style:{"--v-textarea-control-height":O.value},"onClick:control":w,"onClick:clear":V,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},T,{active:M.value||U.value,dirty:U.value||e.dirty,focused:o.value,error:G.value===!1}),{...n,default:Z=>{let{props:{class:W,...ee}}=Z;return i(j,null,[e.prefix&&i("span",{class:"v-text-field__prefix"},[e.prefix]),J(i("textarea",K({ref:m,class:W,value:t.value,onInput:k,autofocus:e.autofocus,readonly:Y.value,disabled:P.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:I,onBlur:u},ee,h),null),[[Ee("intersect"),{handler:x},null,{once:!0}]]),e.autoGrow&&J(i("textarea",{class:[W,"v-textarea__sizer"],"onUpdate:modelValue":Be=>t.value=Be,ref:_,readonly:!0,"aria-hidden":"true"},null),[[Ne,t.value]]),e.suffix&&i("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:g?D=>{var P;return i(j,null,[(P=n.details)==null?void 0:P.call(n,D),c&&i(j,null,[i("span",null,null),i(vt,{active:e.persistentCounter||o.value,value:v.value,max:p.value},n.counter)])])}:void 0})}),ft({},f,b,m)}}),pt={__name:"mdfy",setup(e){let s=oe({text:"test"}),a=oe({text:"test"});function l(){console.log(s.text);let t=s.text;t=t.split(`
`),t=t.join("\\n"),a.text=t,console.log(t)}function n(){navigator.clipboard.writeText(a.text)}return(t,o)=>(ze(),Ue(j,null,[i(de,{label:"Raw markdown","model-value":L(s).text,modelValue:L(s).text,"onUpdate:modelValue":o[0]||(o[0]=r=>L(s).text=r),class:"mdinp"},null,8,["model-value","modelValue"]),i(ce,{variant:"flat",color:"secondary",onClick:l},{default:re(()=>[ue(" convert ")]),_:1}),i(de,{label:"Raw markdown","model-value":L(a).text,modelValue:L(a).text,"onUpdate:modelValue":o[1]||(o[1]=r=>L(a).text=r),class:"mdinp"},null,8,["model-value","modelValue"]),i(ce,{variant:"flat",color:"secondary",onClick:n},{default:re(()=>[ue(" copy ")]),_:1})],64))}};export{pt as default};
