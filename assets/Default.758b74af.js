import{r as y,o as B,c as h,a as w,d as c,b as a,e as V,f as i,g as m,w as p,m as $,p as g,u as C}from"./index.41101c14.js";import{m as S,u as _}from"./tag.e48c9d2a.js";import{u as b,m as k,c as x}from"./layout.a21bcb6e.js";const A={__name:"AppBar",setup(e){return(s,t)=>null}};function L(){const e=y(!1);return B(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:w(e)}}const M=c({name:"VMain",props:{scrollable:Boolean,...S({tag:"main"})},setup(e,s){let{slots:t}=s;const{mainStyles:o}=b(),{ssrBootStyles:r}=L();return _(()=>{var l,n;return a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[o.value,r.value]},{default:()=>[e.scrollable?a("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(n=t.default)==null?void 0:n.call(t)]})}),{}}}),P={__name:"View",setup(e){return(s,t)=>{const o=V("router-view");return i(),m(M,null,{default:p(()=>[a(o)]),_:1})}}};const R=c({name:"VApp",props:{...k({fullHeight:!0}),...$()},setup(e,s){let{slots:t}=s;const o=g(e),{layoutClasses:r,layoutStyles:l,getLayoutItem:n,items:d,layoutRef:f}=x(e),{rtlClasses:v}=C();return _(()=>{var u;return a("div",{ref:f,class:["v-application",o.themeClasses.value,r.value,v.value],style:l.value},[a("div",{class:"v-application__wrap"},[(u=t.default)==null?void 0:u.call(t)])])}),{getLayoutItem:n,items:d,theme:o}}}),F={__name:"Default",setup(e){return(s,t)=>(i(),m(R,null,{default:p(()=>[a(A),a(P)]),_:1}))}};export{F as default};
