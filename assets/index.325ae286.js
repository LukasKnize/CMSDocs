import{d as p,ag as x,a7 as g,A as c,aa as S}from"./index.2e42a106.js";function i(s){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return p({name:s,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:f}},setup(o,a){let{slots:r}=a;return()=>{const t=o.group?x:g;return c(t,{name:s,mode:o.mode,onBeforeEnter(e){e.style.transformOrigin=o.origin},onLeave(e){if(o.leaveAbsolute){const{offsetTop:l,offsetLeft:d,offsetWidth:y,offsetHeight:u}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${l}px`,e.style.left=`${d}px`,e.style.width=`${y}px`,e.style.height=`${u}px`}o.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(o.leaveAbsolute&&e!=null&&e._transitionInitialStyles){const{position:l,top:d,left:y,width:u,height:v}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=l||"",e.style.top=d||"",e.style.left=y||"",e.style.width=u||"",e.style.height=v||""}}},r.default)}}})}function h(s,f){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return p({name:s,props:{mode:{type:String,default:n}},setup(o,a){let{slots:r}=a;return()=>c(g,{name:s,...f},r.default)}})}function m(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=S(`offset-${n}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[o]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=e.transition,s&&t._parent&&t._parent.classList.add(s),requestAnimationFrame(()=>{t.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[o]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(t){s&&t._parent&&t._parent.classList.remove(s),r(t)}function r(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[n]=e),delete t._initialStyle}}i("fab-transition","center center","out-in");i("dialog-bottom-transition");i("dialog-top-transition");i("fade-transition");i("scale-transition");i("scroll-x-transition");i("scroll-x-reverse-transition");i("scroll-y-transition");i("scroll-y-reverse-transition");i("slide-x-transition");i("slide-x-reverse-transition");const w=i("slide-y-transition");i("slide-y-reverse-transition");const L=h("expand-transition",m()),A=h("expand-x-transition",m("",!0));export{L as V,A as a,w as b};
