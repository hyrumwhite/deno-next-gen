import{d as I,f as A}from"./VSwitch.37fbc398.mjs";import{G as y,f as L,x as U,W as V,a as b,o as d,b as p,r as x,e as l,F as S,E as $,C as _,w as h,i as C,t as w,X as N,M as E,N as T,Y as D,l as M,Z as z,$ as O,u as j,a0 as B}from"./entry.741fbdb0.mjs";const F=e=>y(e)?e:L(e),H=decodeURIComponent,q=encodeURIComponent,G=/; */,g=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function J(e,s){if(typeof e!="string")throw new TypeError("argument str must be a string");let n={},t=s||{},r=e.split(G),a=t.decode||H;for(let o=0;o<r.length;o++){let i=r[o],f=i.indexOf("=");if(f<0)continue;let m=i.substr(0,f).trim(),u=i.substr(++f,i.length).trim();u[0]=='"'&&(u=u.slice(1,-1)),n[m]==null&&(n[m]=P(u,a))}return n}function v(e,s,n){let t=n||{},r=t.encode||q;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!g.test(e))throw new TypeError("argument name is invalid");let a=r(s);if(a&&!g.test(a))throw new TypeError("argument val is invalid");let o=e+"="+a;if(t.maxAge!=null){let i=t.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(i)}if(t.domain){if(!g.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!g.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function P(e,s){try{return s(e)}catch{return e}}const W={path:"/",decode:e=>V(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function k(e,s){var a,o;const n={...W,...s},t=X(n),r=F((o=t[e])!=null?o:(a=n.default)==null?void 0:a.call(n));return U(r,()=>{Z(e,r.value,n)}),r}function X(e={}){return J(document.cookie,e)}function Y(e,s,n={}){return s==null?v(e,s,{...n,maxAge:-1}):v(e,s,n)}function Z(e,s,n={}){document.cookie=Y(e,s,n)}const K={},Q={class:"flex-grow"};function ee(e,s){return d(),p("div",Q)}const te=b(K,[["render",ee]]);const oe=e=>(E("data-v-141559a7"),e=e(),T(),e),ne={class:"hidden md:flex sidebar flex-col border-r dark:border-slate-700 dark:text-slate-400 px-4"},se=oe(()=>l("div",{class:"grab-bar-container flex md:hidden flex-row align-center justify-center pt-2 pb-1"},[l("div",{class:"grab-bar w-[200px] h-1 bg-slate-400 dark:bg-slate-700 rounded-lg"})],-1)),ae={class:"d-flex flex-column pl-0"},ie={__name:"Sidebar",props:{routes:{type:Array,default:()=>[]}},setup(e){return(s,n)=>{const t=N,r=te;return d(),p("section",ne,[se,x(s.$slots,"top",{},void 0,!0),l("nav",null,[l("ul",ae,[(d(!0),p(S,null,$(e.routes,a=>(d(),p("li",{class:"list-none flex items-center",key:a.text},[_(t,{class:"flex-grow hover:bg-slate-200 dark:hover:bg-zinc-900 relative cursor-pointer p-3 rounded-md no-underline text-inherit","active-class":"bg-blue-100 dark:bg-slate-900 dark:text-slate-200",to:a.path},{default:h(()=>[C(w(a.text),1)]),_:2},1032,["to"])]))),128))])]),_(r),x(s.$slots,"bottom",{},void 0,!0)])}}},re=b(ie,[["__scopeId","data-v-141559a7"]]),le=""+globalThis.__publicAssetsURL("img/straker-name.png"),ce=""+globalThis.__publicAssetsURL("img/straker-icon.png");const R=e=>(E("data-v-7878fff1"),e=e(),T(),e),de={class:"dark:bg-black dark:text-slate-300 max-w-full"},pe=R(()=>l("img",{src:le,class:"dark:invert",width:"100px",height:"68px"},null,-1)),ue=R(()=>l("img",{src:ce,width:"47px",height:"68px"},null,-1)),fe={class:"p-2 pb-3 flex flex-col flex-grow-0"},_e=["value"],me={class:"p-2 py-3 flex-grow-0"},ge={class:"page-container d-flex flex-grow justify-center dark:bg-zinc-900 overflow-auto"},he={class:"body flex-grow p-4 md:pt-6 md:px-8 md:pb-0"},xe={__name:"default",setup(e){const s=D(),n=k("useDarkMode");M(()=>{B({bodyAttrs:{class:n.value?"dark":""}})});const t=k("selectedLanguage");t.value&&(s.locale.value=t.value);const r=()=>{t.value=s.locale.value},a=[{path:"/",text:"Reports"},{path:"/exceptions",text:"Exceptions"}];return(o,i)=>{const f=I,m=A,u=re;return d(),p("main",de,[_(u,{routes:a},{top:h(()=>[_(f,{"no-gutters":"",class:"h-[68px] -my-2"},{default:h(()=>[pe,ue]),_:1})]),bottom:h(()=>[l("span",fe,[C(w(o.$t("language"))+" ",1),z(l("select",{"onUpdate:modelValue":i[0]||(i[0]=c=>o.$i18n.locale=c),class:"p-2 dark:bg-zinc-800",onChange:r},[(d(!0),p(S,null,$(o.$i18n.availableLocales,c=>(d(),p("option",{key:c,value:c},w(o.$t(`languages.${c}`)),9,_e))),128))],544),[[O,o.$i18n.locale]])]),l("span",me,[_(m,{modelValue:j(n),"onUpdate:modelValue":i[1]||(i[1]=c=>y(n)?n.value=c:null),"off-icon":"mdi-weather-sunny","on-icon":"mdi-moon-waxing-crescent",label:"Dark Mode"},null,8,["modelValue"])])]),_:1}),l("div",ge,[l("section",he,[x(o.$slots,"default",{},void 0,!0)])])])}}},ve=b(xe,[["__scopeId","data-v-7878fff1"]]);export{ve as default};
