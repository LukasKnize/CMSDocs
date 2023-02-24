import{a as _e,u as Oe,c as Me,b as vt}from"./sideBar.vue_vue_type_style_index_0_scoped_4b5de220_lang.f2c8b274.js";import{d as L,z as ft,aa as mt,A as gt,m as j,p as J,T as V,c as g,t as R,b as o,i as oe,r as I,v as re,h as U,V as he,s as De,k as yt,l as ht,a1 as $,Z as D,F as ke,J as pt,U as Ce,ab as Le,y as He,G as Fe,_ as ne,R as Ve,ac as Z,f as O,ad as le,C as bt,ae as Te,H as Ge,af as Ee,g as se,w as z,B as Re,Q as St,o as _t}from"./index.ca3481ad.js";import{V as ze}from"./index.522e052a.js";import{u as x,m as M}from"./tag.db7cec76.js";import{c as je,d as N,e as Y,f as ee,g as kt,h as ue,i as Ie,j as ce,k as te,l as Ct,a as pe,n as xe,R as Je,o as de,m as Ae,p as ve,q as Ue,r as Ke,s as fe,u as Be,t as me,v as We,w as Vt,x as It,y as xt,z as At,A as Bt,B as Pt,L as $t,V as wt}from"./transition.6aaf7c33.js";import{a as Lt,b as Tt}from"./layout.2f3ea2c6.js";function ae(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return L({name:t!=null?t:ft(mt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l}},setup(a,s){let{slots:n}=s;return()=>{var i;return gt(a.tag,{class:e},(i=n.default)==null?void 0:i.call(n))}}})}const Nt=L({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...j()},setup(e,l){let{attrs:t}=l;const{themeClasses:a}=J(e),{textColorClasses:s,textColorStyles:n}=je(V(e,"color")),i=g(()=>{const u={};return e.length&&(u[e.vertical?"maxHeight":"maxWidth"]=R(e.length)),e.thickness&&(u[e.vertical?"borderRightWidth":"borderTopWidth"]=R(e.thickness)),u});return x(()=>o("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,s.value],style:[i.value,n.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),be=Symbol.for("vuetify:list");function qe(){const e=oe(be,{hasPrepend:I(!1),updateHasPrepend:()=>null}),l={hasPrepend:I(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return re(be,l),e}function Qe(){return oe(be,null)}const Ot={open:e=>{let{id:l,value:t,opened:a,parents:s}=e;if(t){const n=new Set;n.add(l);let i=s.get(l);for(;i!=null;)n.add(i),i=s.get(i);return n}else return a.delete(l),a},select:()=>null},Ze={open:e=>{let{id:l,value:t,opened:a,parents:s}=e;if(t){let n=s.get(l);for(a.add(l);n!=null&&n!==l;)a.add(n),n=s.get(n);return a}else a.delete(l);return a},select:()=>null},Mt={open:Ze.open,select:e=>{let{id:l,value:t,opened:a,parents:s}=e;if(!t)return a;const n=[];let i=s.get(l);for(;i!=null;)n.push(i),i=s.get(i);return new Set(n)}},Pe=e=>{const l={select:t=>{let{id:a,value:s,selected:n}=t;if(e&&!s){const i=Array.from(n.entries()).reduce((u,d)=>{let[y,v]=d;return v==="on"?[...u,y]:u},[]);if(i.length===1&&i[0]===a)return n}return n.set(a,s?"on":"off"),n},in:(t,a,s)=>{let n=new Map;for(const i of t||[])n=l.select({id:i,value:!0,selected:new Map(n),children:a,parents:s});return n},out:t=>{const a=[];for(const[s,n]of t.entries())n==="on"&&a.push(s);return a}};return l},Xe=e=>{const l=Pe(e);return{select:a=>{let{selected:s,id:n,...i}=a;const u=s.has(n)?new Map([[n,s.get(n)]]):new Map;return l.select({...i,id:n,selected:u})},in:(a,s,n)=>{let i=new Map;return a!=null&&a.length&&(i=l.in(a.slice(0,1),s,n)),i},out:(a,s,n)=>l.out(a,s,n)}},Dt=e=>{const l=Pe(e);return{select:a=>{let{id:s,selected:n,children:i,...u}=a;return i.has(s)?n:l.select({id:s,selected:n,children:i,...u})},in:l.in,out:l.out}},Ht=e=>{const l=Xe(e);return{select:a=>{let{id:s,selected:n,children:i,...u}=a;return i.has(s)?n:l.select({id:s,selected:n,children:i,...u})},in:l.in,out:l.out}},Ft=e=>{const l={select:t=>{let{id:a,value:s,selected:n,children:i,parents:u}=t;const d=new Map(n),y=[a];for(;y.length;){const r=y.shift();n.set(r,s?"on":"off"),i.has(r)&&y.push(...i.get(r))}let v=u.get(a);for(;v;){const r=i.get(v),c=r.every(m=>n.get(m)==="on"),f=r.every(m=>!n.has(m)||n.get(m)==="off");n.set(v,c?"on":f?"off":"indeterminate"),v=u.get(v)}return e&&!s&&Array.from(n.entries()).reduce((c,f)=>{let[m,_]=f;return _==="on"?[...c,m]:c},[]).length===0?d:n},in:(t,a,s)=>{let n=new Map;for(const i of t||[])n=l.select({id:i,value:!0,selected:new Map(n),children:a,parents:s});return n},out:(t,a)=>{const s=[];for(const[n,i]of t.entries())i==="on"&&!a.has(n)&&s.push(n);return s}};return l},X=Symbol.for("vuetify:nested"),Ye={id:I(),root:{register:()=>null,unregister:()=>null,parents:I(new Map),children:I(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:I(new Set),selected:I(new Map),selectedValues:I([])}},Gt=U({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Et=e=>{let l=!1;const t=I(new Map),a=I(new Map),s=he(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Ht(e.mandatory);case"leaf":return Dt(e.mandatory);case"independent":return Pe(e.mandatory);case"single-independent":return Xe(e.mandatory);case"classic":default:return Ft(e.mandatory)}}),i=g(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Mt;case"single":return Ot;case"multiple":default:return Ze}}),u=he(e,"selected",e.selected,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value));De(()=>{l=!0});function d(r){const c=[];let f=r;for(;f!=null;)c.unshift(f),f=a.value.get(f);return c}const y=yt("nested"),v={id:I(),root:{opened:s,selected:u,selectedValues:g(()=>{const r=[];for(const[c,f]of u.value.entries())f==="on"&&r.push(c);return r}),register:(r,c,f)=>{c&&r!==c&&a.value.set(r,c),f&&t.value.set(r,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],r])},unregister:r=>{var f;if(l)return;t.value.delete(r);const c=a.value.get(r);if(c){const m=(f=t.value.get(c))!=null?f:[];t.value.set(c,m.filter(_=>_!==r))}a.value.delete(r),s.value.delete(r)},open:(r,c,f)=>{y.emit("click:open",{id:r,value:c,path:d(r),event:f});const m=i.value.open({id:r,value:c,opened:new Set(s.value),children:t.value,parents:a.value,event:f});m&&(s.value=m)},openOnSelect:(r,c,f)=>{const m=i.value.select({id:r,value:c,selected:new Map(u.value),opened:new Set(s.value),children:t.value,parents:a.value,event:f});m&&(s.value=m)},select:(r,c,f)=>{y.emit("click:select",{id:r,value:c,path:d(r),event:f});const m=n.value.select({id:r,value:c,selected:new Map(u.value),children:t.value,parents:a.value,event:f});m&&(u.value=m),v.root.openOnSelect(r,c,f)},children:t,parents:a}};return re(X,v),v.root},et=(e,l)=>{const t=oe(X,Ye),a=Symbol(ht()),s=g(()=>{var i;return(i=e.value)!=null?i:a}),n={...t,id:s,open:(i,u)=>t.root.open(s.value,i,u),openOnSelect:(i,u)=>t.root.openOnSelect(s.value,i,u),isOpen:g(()=>t.root.opened.value.has(s.value)),parent:g(()=>t.root.parents.value.get(s.value)),select:(i,u)=>t.root.select(s.value,i,u),isSelected:g(()=>t.root.selected.value.get(s.value)==="on"),isIndeterminate:g(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:g(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),De(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&re(X,n),n},Rt=()=>{const e=oe(X,Ye);re(X,{...e,isGroupActivator:!0})},zt=L({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Rt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),jt=U({activeColor:String,color:String,collapseIcon:{type:$,default:"$collapse"},expandIcon:{type:$,default:"$expand"},prependIcon:$,appendIcon:$,fluid:Boolean,subgroup:Boolean,value:null,...M()},"v-list-group"),tt=D()({name:"VListGroup",props:{title:String,...jt()},setup(e,l){let{slots:t}=l;const{isOpen:a,open:s,id:n}=et(V(e,"value"),!0),i=g(()=>`v-list-group--id-${String(n.value)}`),u=Qe();function d(r){s(!a.value,r)}const y=g(()=>({onClick:d,class:"v-list-group__header",id:i.value})),v=g(()=>a.value?e.collapseIcon:e.expandIcon);return x(()=>{var r;return o(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value}]},{default:()=>[t.activator&&o(N,{defaults:{VListItem:{active:a.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}}},{default:()=>[o(zt,null,{default:()=>[t.activator({props:y.value,isOpen:a})]})]}),o(ze,null,{default:()=>[ke(o("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(r=t.default)==null?void 0:r.call(t)]),[[pt,a.value]])]})]})}),{}}});function Jt(e){return Ce(e,Object.keys(tt.props))}const Ut=U({start:Boolean,end:Boolean,icon:$,image:String,...Y(),...ee(),...kt(),...M(),...j(),...ue({variant:"flat"})},"v-avatar"),ie=L({name:"VAvatar",props:Ut(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=J(e),{colorClasses:s,colorStyles:n,variantClasses:i}=Ie(e),{densityClasses:u}=ce(e),{roundedClasses:d}=te(e),{sizeClasses:y,sizeStyles:v}=Ct(e);return x(()=>{var r;return o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,u.value,d.value,y.value,i.value],style:[n.value,v.value]},{default:()=>[e.image?o(_e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(pe,{key:"icon",icon:e.icon},null):(r=t.default)==null?void 0:r.call(t),xe(!1,"v-avatar")]})}),{}}}),Kt=ae("v-list-item-subtitle"),Wt=ae("v-list-item-title"),Ne=D()({name:"VListItem",directives:{Ripple:Je},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:$,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:$,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Le,onClickOnce:Le,...de(),...Y(),...Ae(),...ve(),...ee(),...Ue(),...M(),...j(),...ue({variant:"text"})},emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:a,emit:s}=l;const n=Ke(e,t),i=g(()=>{var p;return(p=e.value)!=null?p:n.href.value}),{select:u,isSelected:d,isIndeterminate:y,isGroupActivator:v,root:r,parent:c,openOnSelect:f}=et(i,!1),m=Qe(),_=g(()=>{var p;return e.active!==!1&&(e.active||((p=n.isActive)==null?void 0:p.value)||d.value)}),C=g(()=>e.link!==!1&&n.isLink.value),k=g(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!m)),h=g(()=>e.rounded||e.nav),b=g(()=>{var p;return{color:_.value&&(p=e.activeColor)!=null?p:e.color,variant:e.variant}});He(()=>{var p;return(p=n.isActive)==null?void 0:p.value},p=>{p&&c.value!=null&&r.open(c.value,!0),p&&f(p)},{immediate:!0});const{themeClasses:T}=J(e),{borderClasses:H}=fe(e),{colorClasses:K,colorStyles:w,variantClasses:S}=Ie(b),{densityClasses:A}=ce(e),{dimensionStyles:W}=Be(e),{elevationClasses:F}=me(e),{roundedClasses:G}=te(h),E=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),B=g(()=>({isActive:_.value,select:u,isSelected:d.value,isIndeterminate:y.value}));function P(p){var q;s("click",p),!(v||!k.value)&&((q=n.navigate)==null||q.call(n,p),e.value!=null&&u(!d.value,p))}function ge(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),P(p))}return x(()=>{var p,q,$e;const rt=C.value?"a":e.tag,we=!m||d.value||_.value,ut=a.title||e.title,ct=a.subtitle||e.subtitle,dt=!!(a.append||e.appendAvatar||e.appendIcon),ye=!!(a.prepend||e.prependAvatar||e.prependIcon);return m==null||m.updateHasPrepend(ye),ke(o(rt,{class:["v-list-item",{"v-list-item--active":_.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ye&&(m==null?void 0:m.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&_.value},T.value,H.value,we?K.value:void 0,A.value,F.value,E.value,G.value,S.value],style:[we?w.value:void 0,W.value],href:n.href.value,tabindex:k.value?0:void 0,onClick:P,onKeydown:k.value&&!C.value&&ge},{default:()=>[xe(k.value||_.value,"v-list-item"),ye&&o("div",{key:"prepend",class:"v-list-item__prepend"},[e.prependAvatar&&o(ie,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&o(pe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null),a.prepend&&o(N,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[a.prepend(B.value)]})]),o("div",{class:"v-list-item__content","data-no-activator":""},[ut&&o(Wt,{key:"title"},{default:()=>{var Q;return[(Q=(p=a.title)==null?void 0:p.call(a,{title:e.title}))!=null?Q:e.title]}}),ct&&o(Kt,{key:"subtitle"},{default:()=>{var Q;return[(Q=(q=a.subtitle)==null?void 0:q.call(a,{subtitle:e.subtitle}))!=null?Q:e.subtitle]}}),($e=a.default)==null?void 0:$e.call(a,B.value)]),dt&&o("div",{key:"append",class:"v-list-item__append"},[a.append&&o(N,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[a.append(B.value)]}),e.appendIcon&&o(pe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&o(ie,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])]}),[[Fe("ripple"),k.value&&e.ripple]])}),{}}}),qt=L({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...M()},setup(e,l){let{slots:t}=l;const{textColorClasses:a,textColorStyles:s}=je(V(e,"color"));return x(()=>{var n;const i=!!(t.default||e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value],style:{textColorStyles:s}},{default:()=>{var u;return[i&&o("div",{class:"v-list-subheader__text"},[(u=(n=t.default)==null?void 0:n.call(t))!=null?u:e.title])]}})}),{}}}),at=D()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:t}=l;return qe(),()=>{var n;var a,s;return(n=(a=t.default)==null?void 0:a.call(t))!=null?n:(s=e.items)==null?void 0:s.map(i=>{var C,k;let{children:u,props:d,type:y,raw:v}=i;if(y==="divider"){var r;return(C=(r=t.divider)==null?void 0:r.call(t,{props:d}))!=null?C:o(Nt,d,null)}if(y==="subheader"){var c;return(k=(c=t.subheader)==null?void 0:c.call(t,{props:d}))!=null?k:o(qt,d,{default:t.subheader})}const f={subtitle:t.subtitle?h=>{var b;return(b=t.subtitle)==null?void 0:b.call(t,{...h,item:v})}:void 0,prepend:t.prepend?h=>{var b;return(b=t.prepend)==null?void 0:b.call(t,{...h,item:v})}:void 0,append:t.append?h=>{var b;return(b=t.append)==null?void 0:b.call(t,{...h,item:v})}:void 0,default:t.default?h=>{var b;return(b=t.default)==null?void 0:b.call(t,{...h,item:v})}:void 0,title:t.title?h=>{var b;return(b=t.title)==null?void 0:b.call(t,{...h,item:v})}:void 0},[m,_]=Jt(d);return u?o(tt,ne({value:d==null?void 0:d.value},m),{activator:h=>{let{props:b}=h;return t.header?t.header({...d,...b}):o(Ne,ne(d,b),f)},default:()=>o(at,{items:u},t)}):t.item?t.item(d):o(Ne,d,f)})}}}),Qt=U({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Zt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Xt(e,l){const t=Z(l,e.itemType,"item"),a=Zt(l)?l:Z(l,e.itemTitle),s=Z(l,e.itemValue,void 0),n=Z(l,e.itemChildren),i=e.itemProps===!0?Ce(l,["children"])[1]:Z(l,e.itemProps),u={title:a,value:s,...i};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?nt(e,n):void 0,raw:l}}function nt(e,l){const t=[];for(const a of l)t.push(Xt(e,a));return t}function Yt(e){return{items:g(()=>nt(e,e.items))}}const ea=D()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Gt({selectStrategy:"single-leaf",openStrategy:"list"}),...de(),...Y(),...Ae(),...ve(),itemType:{type:String,default:"type"},...Qt(),...ee(),...M(),...j(),...ue({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:a}=Yt(e),{themeClasses:s}=J(e),{backgroundColorClasses:n,backgroundColorStyles:i}=We(V(e,"bgColor")),{borderClasses:u}=fe(e),{densityClasses:d}=ce(e),{dimensionStyles:y}=Be(e),{elevationClasses:v}=me(e),{roundedClasses:r}=te(e),{open:c,select:f}=Et(e),m=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),_=V(e,"activeColor"),C=V(e,"color");qe(),Ve({VListGroup:{activeColor:_,color:C},VListItem:{activeClass:V(e,"activeClass"),activeColor:_,color:C,density:V(e,"density"),disabled:V(e,"disabled"),lines:V(e,"lines"),nav:V(e,"nav"),variant:V(e,"variant")}});const k=I(!1),h=I();function b(S){k.value=!0}function T(S){k.value=!1}function H(S){var A;!k.value&&!(S.relatedTarget&&(A=h.value)!=null&&A.contains(S.relatedTarget))&&w()}function K(S){if(!!h.value){if(S.key==="ArrowDown")w("next");else if(S.key==="ArrowUp")w("prev");else if(S.key==="Home")w("first");else if(S.key==="End")w("last");else return;S.preventDefault()}}function w(S){if(!h.value)return;const A=[...h.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(B=>!B.hasAttribute("disabled")),W=A.indexOf(document.activeElement);if(S)if(S==="first"){var G;(G=A[0])==null||G.focus()}else if(S==="last"){var E;(E=A.at(-1))==null||E.focus()}else{let B,P=W;const ge=S==="next"?1:-1;do P+=ge,B=A[P];while((!B||B.offsetParent==null)&&P<A.length&&P>=0);B?B.focus():w(S==="next"?"first":"last")}else if(!h.value.contains(document.activeElement)){var F;(F=A[0])==null||F.focus()}}return x(()=>o(e.tag,{ref:h,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,n.value,u.value,d.value,v.value,m.value,r.value],style:[i.value,y.value],role:"listbox","aria-activedescendant":void 0,onFocusin:b,onFocusout:T,onFocus:H,onKeydown:K},{default:()=>[o(at,{items:a.value},t)]})),{open:c,select:f,focus:w}}}),ta={class:"listContainer"},aa={class:"chapterH2"},na={__name:"lists",props:{listItem:Object},setup(e){function l(t){Oe().data=t}return(t,a)=>(O(),le("div",ta,[bt("h2",aa,Te(e.listItem.chapterName),1),(O(!0),le(Ge,null,Ee(e.listItem.pages,(s,n)=>(O(),se(ea,{key:n,onClick:i=>l(s.data),class:"chapterLink"},{default:z(()=>[Re(Te(s.pageName),1)]),_:2},1032,["onClick"]))),128))]))}},lt=(e,l)=>{const t=e.__vccOpts||e;for(const[a,s]of l)t[a]=s;return t};const la=L({name:"VCardActions",setup(e,l){let{slots:t}=l;return Ve({VBtn:{variant:"text"}}),x(()=>{var a;return o("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),sa=ae("v-card-subtitle"),ia=ae("v-card-title"),oa=L({name:"VCardItem",props:{appendAvatar:String,appendIcon:$,prependAvatar:String,prependIcon:$,subtitle:String,title:String,...Y()},setup(e,l){let{slots:t}=l;return x(()=>{var a,s,n,i,u;const d=!!(e.prependAvatar||e.prependIcon||t.prepend),y=!!(e.appendAvatar||e.appendIcon||t.append),v=!!(e.title||t.title),r=!!(e.subtitle||t.subtitle);return o("div",{class:"v-card-item"},[d&&o(N,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var c;return[o("div",{class:"v-card-item__prepend"},[(c=(a=t.prepend)==null?void 0:a.call(t))!=null?c:o(ie,null,null)])]}}),o("div",{class:"v-card-item__content"},[v&&o(ia,{key:"title"},{default:()=>{var c;return[(c=(s=t.title)==null?void 0:s.call(t))!=null?c:e.title]}}),r&&o(sa,{key:"subtitle"},{default:()=>{var c;return[(c=(n=t.subtitle)==null?void 0:n.call(t))!=null?c:e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),y&&o(N,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var c;return[o("div",{class:"v-card-item__append"},[(c=(u=t.append)==null?void 0:u.call(t))!=null?c:o(ie,null,null)])]}})])}),{}}}),ra=ae("v-card-text"),ua=L({name:"VCard",directives:{Ripple:Je},props:{appendAvatar:String,appendIcon:$,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:$,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...j(),...de(),...Y(),...Ae(),...ve(),...Vt(),...It(),...xt(),...ee(),...Ue(),...M(),...ue({variant:"elevated"})},setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:s}=J(e),{borderClasses:n}=fe(e),{colorClasses:i,colorStyles:u,variantClasses:d}=Ie(e),{densityClasses:y}=ce(e),{dimensionStyles:v}=Be(e),{elevationClasses:r}=me(e),{loaderClasses:c}=At(e),{locationStyles:f}=Bt(e),{positionClasses:m}=Pt(e),{roundedClasses:_}=te(e),C=Ke(e,t),k=g(()=>e.link!==!1&&C.isLink.value),h=g(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return x(()=>{var b,T,H;const K=k.value?"a":e.tag,w=!!(a.title||e.title),S=!!(a.subtitle||e.subtitle),A=w||S,W=!!(a.append||e.appendAvatar||e.appendIcon),F=!!(a.prepend||e.prependAvatar||e.prependIcon),G=!!(a.image||e.image),E=A||F||W,B=!!(a.text||e.text);return ke(o(K,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":h.value},s.value,n.value,i.value,y.value,r.value,c.value,m.value,_.value,d.value],style:[u.value,v.value,f.value],href:C.href.value,onClick:h.value&&C.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[G&&o(N,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var P;return[o("div",{class:"v-card__image"},[(P=(b=a.image)==null?void 0:b.call(a))!=null?P:o(_e,null,null)])]}}),o($t,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),E&&o(oa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),B&&o(ra,{key:"text"},{default:()=>{var P;return[(P=(T=a.text)==null?void 0:T.call(a))!=null?P:e.text]}}),(H=a.default)==null?void 0:H.call(a),a.actions&&o(la,null,{default:a.actions}),xe(h.value,"v-card")]}),[[Fe("ripple"),h.value&&e.ripple]])}),{}}}),ca={__name:"sideBar",setup(e){let l=Me(),t=JSON.parse(JSON.stringify(l.data));return(a,s)=>(O(),se(ua,{class:"mx-auto sideMenu",width:"300"},{default:z(()=>[(O(!0),le(Ge,null,Ee(St(t).chapters,(n,i)=>(O(),se(na,{key:i,listItem:n},null,8,["listItem"]))),128))]),_:1}))}},da=lt(ca,[["__scopeId","data-v-4b5de220"]]);const va={id:"content",class:"marginLeft"},fa={__name:"content",setup(e){let l="",t="";return t=Me().data,t=JSON.parse(JSON.stringify(t.chapters[0].pages[0].data)),He(Oe(),a=>{t=JSON.parse(JSON.stringify(a.data)),l=document.getElementById("content"),l.innerHTML=marked.parse(t);for(const s of l.children)s.classList+="mg"}),_t(()=>{l=document.getElementById("content"),l.innerHTML=marked.parse(t);for(const a of l.children)a.classList+="mg"}),(a,s)=>(O(),le("div",va))}},ma=lt(fa,[["__scopeId","data-v-00272ac8"]]);const st=U({text:String,...M()},"v-toolbar-title"),it=D()({name:"VToolbarTitle",props:st(),setup(e,l){let{slots:t}=l;return x(()=>{var a;const s=!!(t.default||t.text||e.text);return o(e.tag,{class:"v-toolbar-title"},{default:()=>[s&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]})}),{}}}),ga=[null,"prominent","default","comfortable","compact"],ot=U({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ga.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...de(),...ve(),...ee(),...M({tag:"header"}),...j()},"v-toolbar"),Se=D()({name:"VToolbar",props:ot(),setup(e,l){var t;let{slots:a}=l;const{backgroundColorClasses:s,backgroundColorStyles:n}=We(V(e,"color")),{borderClasses:i}=fe(e),{elevationClasses:u}=me(e),{roundedClasses:d}=te(e),{themeClasses:y}=J(e),v=I(!!(e.extended||(t=a.extension)!=null&&t.call(a))),r=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=g(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ve({VBtn:{variant:"text"}}),x(()=>{var f,m,_,C,k;const h=!!(e.title||a.title),b=!!(a.image||e.image),T=(f=a.extension)==null?void 0:f.call(a);return v.value=!!(e.extended||T),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,i.value,u.value,d.value,y.value],style:[n.value]},{default:()=>[b&&o("div",{key:"image",class:"v-toolbar__image"},[o(N,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[a.image?(m=a.image)==null?void 0:m.call(a):o(_e,null,null)]})]),o(N,{defaults:{VTabs:{height:R(r.value)}}},{default:()=>[o("div",{class:"v-toolbar__content",style:{height:R(r.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),h&&o(it,{key:"title",text:e.title},{text:a.title}),(C=a.default)==null?void 0:C.call(a),a.append&&o("div",{class:"v-toolbar__append"},[(k=a.append)==null?void 0:k.call(a)])])]}),o(N,{defaults:{VTabs:{height:R(c.value)}}},{default:()=>[o(ze,null,{default:()=>[v.value&&o("div",{class:"v-toolbar__extension",style:{height:R(c.value)}},[T])]})]})]})}),{contentHeight:r,extensionHeight:c}}});function ya(e){var l;return Ce(e,Object.keys((l=Se==null?void 0:Se.props)!=null?l:{}))}const ha=D()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ot(),...Lt(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const a=I(),s=he(e,"modelValue"),n=g(()=>{var r,c;var u,d;const y=(r=(u=a.value)==null?void 0:u.contentHeight)!=null?r:0,v=(c=(d=a.value)==null?void 0:d.extensionHeight)!=null?c:0;return y+v}),{layoutItemStyles:i}=Tt({id:e.name,order:g(()=>parseInt(e.order,10)),position:V(e,"location"),layoutSize:n,elementSize:n,active:s,absolute:V(e,"absolute")});return x(()=>{const[u]=ya(e);return o(Se,ne({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...i.value,height:void 0}},u),t)}),{}}}),pa=L({name:"VAppBarNavIcon",props:{icon:{type:$,default:"$menu"}},setup(e,l){let{slots:t}=l;return x(()=>o(wt,{class:"v-app-bar-nav-icon",icon:e.icon},t)),{}}}),ba=L({name:"VAppBarTitle",props:st(),setup(e,l){let{slots:t}=l;return x(()=>o(it,ne(e,{class:"v-app-bar-title"}),t)),{}}}),xa={__name:"docs",setup(e){function l(){document.getElementById("sideBar").classList.toggle("hide"),document.getElementById("content").classList.toggle("marginLeft")}return(t,a)=>(O(),se(vt,{class:"container"},{default:z(()=>[o(ha,{color:"primary",density:"compact"},{prepend:z(()=>[o(pa,{onClick:l})]),default:z(()=>[o(ba,null,{default:z(()=>[Re("CMS")]),_:1})]),_:1}),o(da,{id:"sideBar"}),o(ma)]),_:1}))}};export{xa as default};
