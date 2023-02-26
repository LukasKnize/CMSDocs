import{m as x,u as j}from"./tag.fbcf1c90.js";import{d as f,b as a,c as h,r as c,y as z,D as V,S as A,E as $,F as B,G as H,H as W,t as F,J as O,K as G}from"./index.2e42a106.js";import{m as J,u as L,I as K,b as q,M as b}from"./transition.dc8e9a17.js";const ne=f({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...x()},setup(e,u){let{slots:i}=u;return j(()=>a(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},i)),{}}});function Z(e){return{aspectStyles:h(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const Q=f({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...J()},setup(e,u){let{slots:i}=u;const{aspectStyles:l}=Z(e),{dimensionStyles:p}=L(e);return j(()=>{var t;return a("div",{class:"v-responsive",style:p.value},[a("div",{class:"v-responsive__sizer",style:l.value},null),(t=i.additional)==null?void 0:t.call(i),i.default&&a("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),ae=f({name:"VImg",directives:{intersect:K},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...q()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:i,slots:l}=u;const p=c(""),t=c(),s=c(e.eager?"loading":"idle"),m=c(),g=c(),r=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>r.value.aspect||m.value/g.value||0);z(()=>e.src,()=>{y(s.value!=="idle")}),z(v,(n,o)=>{!n&&o&&t.value&&k(t.value)}),V(()=>y());function y(n){if(!(e.eager&&n)&&!(A&&!n&&!e.eager)){if(s.value="loading",r.value.lazySrc){const o=new Image;o.src=r.value.lazySrc,k(o,null)}!r.value.src||$(()=>{var o,d;if(i("loadstart",((o=t.value)==null?void 0:o.currentSrc)||r.value.src),(d=t.value)!=null&&d.complete){if(t.value.naturalWidth||_(),s.value==="error")return;v.value||k(t.value,null),S()}else v.value||k(t.value),P()})}}function S(){var n;P(),s.value="loaded",i("load",((n=t.value)==null?void 0:n.currentSrc)||r.value.src)}function _(){var n;s.value="error",i("error",((n=t.value)==null?void 0:n.currentSrc)||r.value.src)}function P(){const n=t.value;n&&(p.value=n.currentSrc||n.src)}let N=-1;function k(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(N);const{naturalHeight:R,naturalWidth:T}=n;R||T?(m.value=T,g.value=R):!n.complete&&s.value==="loading"&&o!=null?N=window.setTimeout(d,o):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,g.value=1)};d()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var n;if(!r.value.src||s.value==="idle")return null;const o=a("img",{class:["v-img__img",w.value],src:r.value.src,srcset:r.value.srcset,alt:"",sizes:e.sizes,ref:t,onLoad:S,onError:_},null),d=(n=l.sources)==null?void 0:n.call(l);return a(b,{transition:e.transition,appear:!0},{default:()=>[B(d?a("picture",{class:"v-img__picture"},[d,o]):o,[[O,s.value==="loaded"]])]})},D=()=>a(b,{transition:e.transition},{default:()=>[r.value.lazySrc&&s.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",w.value],src:r.value.lazySrc,alt:""},null)]}),E=()=>l.placeholder?a(b,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!l.error)&&a("div",{class:"v-img__placeholder"},[l.placeholder()])]}):null,M=()=>l.error?a(b,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&a("div",{class:"v-img__error"},[l.error()])]}):null,U=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,I=c(!1);{const n=z(v,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{I.value=!0})}),n())})}return j(()=>B(a(Q,{class:["v-img",{"v-img--booting":!I.value}],style:{width:F(e.width==="auto"?m.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(W,null,[a(C,null,null),a(D,null,null),a(U,null,null),a(E,null,null),a(M,null,null)]),default:l.default}),[[H("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:p,image:t,state:s,naturalWidth:m,naturalHeight:g}}}),te=G("content",{state:()=>({data:`# Idk
***Some* text** idk
# Idk2`})});const oe=G("pages",{state:()=>({data:{chapters:[{chapterName:"Za\u010D\xEDn\xE1me",pages:[{pageName:"instalace",data:`# Instalace

> Tato aplikace je st\xE1le ve st\xE1diu v\xFDvoje a proto nedoporu\u010Dujeme tuto aplikaci pou\u017E\xEDvat. Spousta u\u017Eite\u010Dn\xFDch funkc\xED st\xE1le chyb\xED a je mo\u017En\xE9 \u017Ee dojde k velk\xFDm zm\xE9n\xE1m v programu kter\xFD by mohl kompletn\u011B rozb\xEDt aplikaci.

## Co je zapot\u0159eb\xED?

- Node.js - aplikace je napsan\xE1 v javaScriptu a pro jej\xED spu\u0161t\u011Bn\xED je zapot\u0159eb\xED node.js a spolu s n\xEDm i NPM (zpravidla se instaluje automaticky s node.js). [Node.js](https://nodejs.org/en/)

- MongoDB - je zapot\u0159eb\xED mongoDB datab\xE1ze, ta je mo\u017En\xE1 bu\u010Fto lok\xE1ln\u011B a nebo hostovan\xE1 jako ciz\xED slu\u017Eba. [MongoDB](https://www.mongodb.com/)

## Instalace

- z [Githubu](https://github.com/LukasKnize/CMS/tree/backend) st\xE1hn\u011Bte projekt a nainstalujte bal\xED\u010Dky NPM

\`#npm i\`

## Enviroment\xE1ln\xED prom\u011Bnn\xE9

- je zapot\u0159eb\xED vytvo\u0159it soubor .env jeho\u017E form\xE1t bude n\xE1sleduj\xEDc\xED:

\`\`\`
SECRET=v\xE1\u0161Secret
DBHOST=DBADRESS
\`\`\`

## Spu\u0161t\u011Bn\xED

- prvn\u011B je zapot\u0159eb\xED spustit datab\xE1zi, pokud je na va\u0161em serveru a pot\xE9 se program spust\xED pomoc\xED \`npm run start\``},{pageName:"prvn\xED administr\xE1tor",data:`# Za\u010D\xEDn\xE1me

## Registrace prvn\xEDho administr\xE1tora

- Po instalaci je zapot\u0159eb\xED zaregistrovat prvn\xEDho administr\xE1tora, administr\xE1tor m\xE1 p\u0159\xEDst\u016Fp ke v\u0161em funkc\xEDm CMS, tato role by tedy m\u011Bla b\xFDt ud\u011Blov\xE1n\xE1 jen speci\xE1ln\u011B pov\u011B\u0159en\xFDm osob\xE1m.

![Registrace administr\xE1tora](../src/assets/adminRegistration.PNG)

- Jako u\u017Eivatelsk\xE9 jm\xE9no doporu\u010Dujeme zvolit jm\xE9no skute\u010Dn\xE9 nebo\u0165 toto jm\xE9no se bude zobrazovat jako autor p\u0159\xEDsp\u011Bvk\u016F pro v\u0161echny v aplikaci (toto jm\xE9no je mo\u017En\xE9 zm\u011Bnit)
- Heslo mus\xED b\xFDt slo\u017Eeno alespo\u0148 z dvan\xE1cti znak\u016F kombinuj\xEDc\xEDch mal\xE1 a velk\xE1 p\xEDsmena a \u010D\xEDsla`},{pageName:"\u0161ablony",data:`# \u0160ablona

> \u0161ablona je povin\xE1 sou\u010D\xE1st, bez n\xED nen\xED mo\u017En\xE9 tvo\u0159it str\xE1nky

## Form\xE1t \u0161ablony

form\xE1t \u0161ablony je slo\u017Eka s n\xE1zv\xE9m dan\xE9 \u0161ablony obsahuj\xEDc\xED obr\xE1zek s n\xE1zvem screenshot (aplikace p\u0159ijm\xE1 format\xFD JPEG, PNG a WEBP) a jeden HTML soubor.

\`\`\`
.
\u2514\u2500\u2500 folder (it's name will be displayed as a name of the template)/
    \u251C\u2500\u2500 index.html
    \u251C\u2500\u2500 screenshot.png
    \u2514\u2500\u2500 anything else
\`\`\`

## Instalace \u0161ablony

\u0160ablonu je mo\u017En\xE9 p\u0159idat p\u0159\xEDmo v souborov\xE9m syst\xE9mu programu do slo\u017Eky templates a nebo je mo\u017En\xE9 tuto zazipovanou \u0161ablonu nahr\xE1t v administraci`},{pageName:"\xFAprava str\xE1nek",data:`# Prvn\xED str\xE1nka

## Typy str\xE1nek

- Ulo\u017Een\xE1 jako soubor - tato varianta se hod\xED pro v\u011Bt\u0161inu u\u017Eivatel\u016F. Soubory ukl\xE1d\xE1 p\u0159\xEDmo do souborov\xE9ho syst\xE9mu aplikace a nen\xED zapot\u0159eb\xED \u017E\xE1dn\xFD speci\xE1ln\xED script na zobrazen\xED t\xE9to str\xE1nky

- API - data se ulo\u017E\xED jako text do datab\xE1ze a speci\xE1ln\xED script pak tyto data umo\u017En\xED \u010D\xEDst a zobrazit na str\xE1nk\xE1ch. Tato varianta se hod\xED pokud chcete umo\u017Enit ostatn\xEDm dom\xE9n\xE1m z\xEDsk\xE1vat data z va\u0161ich str\xE1nek

Typ str\xE1nek zv\xEDme p\u0159i p\u0159id\xE1v\xE1n\xED str\xE1nky
![p\u0159ep\xEDna\u010D mezi ulo\u017Een\xEDm a api](../src/assets/apiSwitch.PNG)

## P\u0159id\xE1n\xED str\xE1nky

- Str\xE1nku m\u016F\u017Eeme p\u0159idat kliknut\xEDm na nov\xE1 str\xE1nka v menu nebo na tla\u010D\xEDtko plus v seznamu v\u0161ech str\xE1nek

- Prvn\u011B nastav\xEDme n\xE1zev str\xE1nky. Toto jm\xE9no se bude zobrazovat v prohl\xED\u017Ee\u010Di a seznamu str\xE1nek
- Pot\xE9 adresu na kter\xE9 bude str\xE1nka dostupn\xE1. Pou\u017E\xEDvejte pouze mal\xE1 a velk\xE1 p\xEDsmena anglick\xE9 abecedy (tedy bez h\xE1\u010Dk\u016F a \u010D\xE1rek) a \u010D\xEDsla, nepou\u017E\xEDvejte \u017E\xE1dn\xE9 speci\xE1ln\xED znaky

> Pokud zad\xE1te t\u0159eba 'produkty' tak va\u0161e str\xE1nka bude dostupn\xE1 na www.vasedomena.cz/produkty

-Kr\xE1kt\xFD popisek, ten se zobrazuje v administraci a z\xE1rove\u0148 je pot\u0159ebn\xE1 pro vyhled\xE1va\u010De a n\u011Bkter\xE9 jin\xE9 n\xE1stroje
- Jako posledn\xED je zapot\u0159eb\xED zvolit \u0161ablonu

## Uprava str\xE1nky

- Upravit je mo\u017En\xE9 jak nov\u011B vytvo\u0159enou tak i ji\u017E existuj\xEDc\xED str\xE1nku

- Obsah se upravuje p\u0159\xEDmo na str\xE1nce a je mo\u017En\xE9 p\u0159episovat texty a m\u011Bnit obr\xE1zky a odkazy`}]},{chapterName:"API",pages:[{pageName:"Auth",data:`# AUTH

## Post /signUp
\`\`\`
headers:
    authorization: token

body:
    username
    email
    type
    password
\`\`\`

response: token nebo chybov\xE1 hl\xE1\u0161ka

> Role administr\xE1tora je zapot\u0159eb\xED

## Post /logIn

\`\`\`
body:
    email
    password
\`\`\`

response: token nebo chybov\xE1 hl\xE1\u0161ka

## Post /signUpAdmin

\`\`\`
headers:
    authorization: token

body:
    username
    email
    type
    password
    adminPassword 
    adminEmail
\`\`\`
response: token nebo chybov\xE1 hl\xE1\u0161ka
> Role administr\xE1tora je zapot\u0159eb\xED`},{pageName:"Users",data:`# Users

## Get /

pokud v aplikaci neexistuje \u017E\xE1dn\xFD u\u017Eivatel tak ode\u0161le do\u010Dasn\xFD token slou\u017E\xEDc\xED k zalo\u017Een\xED prvn\xEDho administr\xE1tora


## Post /deleteAccount

\`\`\`
headers:
    authorization: token

body:
    id
\`\`\`
> Role administr\xE1tora je zapot\u0159eb\xED

## Patch /:userId

\`\`\`
headers:
    authorization: token

body:
    username
    email
    password
\`\`\`
> M\u016F\u017Ee m\u011Bnit jen u\u017Eivatel s\xE1m sebe nebo administr\xE1tor ostatn\xED u\u017Eivatele`},{pageName:"Upload",data:`# Upload

## Post /
\`\`\`
headers:
    authorization: token

body: multipart/form-data
\`\`\``},{pageName:"Template",data:`# Template

## Post /
\`\`\`
headers:
    authorization: token

body: multipart/form-data
\`\`\`

## Get /all

response: list v\u0161ech \u0161ablon

## Get /edit/:param

response \u0161ablona s n\xE1zvem :param s edita\u010Dn\xEDm k\xF3dem`},{pageName:"Pages",data:`# Pages

## Get /all

response: list v\u0161ech str\xE1nek

## Post /
\`\`\`
headers:
    authorization: token

body:
    headline
    url
    desc
    template
\`\`\`

## Post /data/:urlParameter

\`\`\`
headers:
    authorization: token

body:
    content
\`\`\`

## Get /:urlParameter

response: data str\xE1nky s url :urlParameter

## Delete /:urlParameter

\`\`\`
headers:
    authorization: token
\`\`\`

> u\u017Eivatel mus\xED b\xFDt autor nebo admin

## Post /save
\`\`\`
headers:
    authorization: token

body:
    headline
    url
    desc
    template
\`\`\`

## Post /save/data/:name

\`\`\`
headers:
    authorization: token

body:
    name
    data
\`\`\`

## Get /id/:pageId

response: data str\xE1nky podle id :pageId`}]}]}})});export{Q as V,ae as a,ne as b,oe as c,te as u};
