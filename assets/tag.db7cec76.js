import{k as c,r as a,I as u,s as f,y as i,a as v,h as R}from"./index.ca3481ad.js";function p(n){const t=c("useRender");t.render=n}function g(n){const t=a(),r=a();if(u){const s=new ResizeObserver(e=>{n==null||n(e,s),e.length&&(r.value=e[0].contentRect)});f(()=>{s.disconnect()}),i(t,(e,o)=>{o&&(s.unobserve(o),r.value=void 0),e&&s.observe(e)},{flush:"post"})}return{resizeRef:t,contentRect:v(r)}}const m=R({tag:{type:String,default:"div"}},"tag");export{g as a,m,p as u};
