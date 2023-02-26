import{V as O,a as T,b as U}from"./sideBar.vue_vue_type_style_index_0_scoped_4b5de220_lang.4db5a5ff.js";import{m as V}from"./tag.04a4200b.js";import{z as _,d as p,c as N,A as x,f as j,g as w,w as o,b as l,B as f,C as h}from"./index.db594d15.js";import{V as d,a as g}from"./transition.9272e43b.js";const R="/CMSDocs/assets/logo.3f834fa8.svg",b=["sm","md","lg","xl","xxl"],$=(()=>b.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),L=(()=>b.reduce((e,t)=>(e["offset"+_(t)]={type:[String,Number],default:null},e),{}))(),A=(()=>b.reduce((e,t)=>(e["order"+_(t)]={type:[String,Number],default:null},e),{}))(),v={col:Object.keys($),offset:Object.keys(L),order:Object.keys(A)};function H(e,t,n){let a=e;if(!(n==null||n===!1)){if(t){const s=t.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(n===""||n===!0)||(a+=`-${n}`),a.toLowerCase()}}const W=["auto","start","end","center","baseline","stretch"],m=p({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...$,offset:{type:[String,Number],default:null},...L,order:{type:[String,Number],default:null},...A,alignSelf:{type:String,default:null,validator:e=>W.includes(e)},...V()},setup(e,t){let{slots:n}=t;const a=N(()=>{const s=[];let r;for(r in v)v[r].forEach(i=>{const u=e[i],C=H(r,i,u);C&&s.push(C)});const c=s.some(i=>i.startsWith("v-col-"));return s.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return x(e.tag,{class:a.value},(s=n.default)==null?void 0:s.call(n))}}}),F=["sm","md","lg","xl","xxl"],y=["start","end","center"],E=["space-between","space-around","space-evenly"];function S(e,t){return F.reduce((n,a)=>(n[e+_(a)]=t(),n),{})}const K=[...y,"baseline","stretch"],B=e=>K.includes(e),P=S("align",()=>({type:String,default:null,validator:B})),D=[...y,...E],z=e=>D.includes(e),G=S("justify",()=>({type:String,default:null,validator:z})),J=[...y,...E,"stretch"],I=e=>J.includes(e),M=S("alignContent",()=>({type:String,default:null,validator:I})),k={align:Object.keys(P),justify:Object.keys(G),alignContent:Object.keys(M)},Y={align:"align",justify:"justify",alignContent:"align-content"};function q(e,t,n){let a=Y[e];if(n!=null){if(t){const s=t.replace(e,"");a+=`-${s}`}return a+=`-${n}`,a.toLowerCase()}}const Q=p({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:B},...P,justify:{type:String,default:null,validator:z},...G,alignContent:{type:String,default:null,validator:I},...M,...V()},setup(e,t){let{slots:n}=t;const a=N(()=>{const s=[];let r;for(r in k)k[r].forEach(c=>{const i=e[c],u=q(r,c,i);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return x(e.tag,{class:["v-row",a.value]},(s=n.default)==null?void 0:s.call(n))}}}),X=h("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),Z=h("h1",{class:"text-h2 font-weight-bold"},"CMS",-1),ee=h("div",{class:"py-14"},null,-1),te={__name:"HelloWorld",setup(e){return(t,n)=>(j(),w(U,{class:"fill-height"},{default:o(()=>[l(O,{class:"d-flex align-center text-center fill-height"},{default:o(()=>[l(T,{contain:"",height:"300",src:R}),X,Z,ee,l(Q,{class:"d-flex align-center justify-center"},{default:o(()=>[l(m,{cols:"auto"},{default:o(()=>[l(d,{href:"https://github.com/LukasKnize/CMS/tree/backend","min-width":"164",rel:"noopener noreferrer",variant:"text"},{default:o(()=>[l(g,{icon:"mdi-github",size:"large",start:""}),f(" GitHub ")]),_:1})]),_:1}),l(m,{cols:"auto"},{default:o(()=>[l(d,{color:"primary",href:"/docs","min-width":"228",rel:"noopener noreferrer",size:"x-large",variant:"flat"},{default:o(()=>[l(g,{icon:"mdi-speedometer",size:"large",start:""}),f(" Get Started ")]),_:1})]),_:1}),l(m,{cols:"auto"},{default:o(()=>[l(d,{href:"https://github.com/LukasKnize/CMS/issues","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:o(()=>[l(g,{icon:"mdi-account-group",size:"large",start:""}),f(" Issues ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},oe={__name:"Home",setup(e){return(t,n)=>(j(),w(te))}};export{oe as default};
