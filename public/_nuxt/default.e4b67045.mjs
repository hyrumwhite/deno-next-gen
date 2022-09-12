import{w as A,d as D,f as M}from"./VSwitch.0b1a91a1.mjs";import{m as k,a3 as U,a as T,o as f,h as m,l as x,r as v,b as c,F as C,J as E,e as g,w,f as $,v as b,x as I,u as _,a4 as L,a5 as V,A as N,a6 as Y,a7 as B,s as X,a8 as z,S as O,U as j}from"./entry.7c2814e6.mjs";const F=decodeURIComponent,H=encodeURIComponent,J=/; */,h=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function q(e,s){if(typeof e!="string")throw new TypeError("argument str must be a string");let n={},o=s||{},i=e.split(J),r=o.decode||F;for(let t=0;t<i.length;t++){let a=i[t],d=a.indexOf("=");if(d<0)continue;let l=a.substr(0,d).trim(),u=a.substr(++d,a.length).trim();u[0]=='"'&&(u=u.slice(1,-1)),n[l]==null&&(n[l]=P(u,r))}return n}function y(e,s,n){let o=n||{},i=o.encode||H;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!h.test(e))throw new TypeError("argument name is invalid");let r=i(s);if(r&&!h.test(r))throw new TypeError("argument val is invalid");let t=e+"="+r;if(o.maxAge!=null){let a=o.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");t+="; Max-Age="+Math.floor(a)}if(o.domain){if(!h.test(o.domain))throw new TypeError("option domain is invalid");t+="; Domain="+o.domain}if(o.path){if(!h.test(o.path))throw new TypeError("option path is invalid");t+="; Path="+o.path}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");t+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(t+="; HttpOnly"),o.secure&&(t+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:t+="; SameSite=Strict";break;case"lax":t+="; SameSite=Lax";break;case"strict":t+="; SameSite=Strict";break;case"none":t+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return t}function P(e,s){try{return s(e)}catch{return e}}const G={path:"/",decode:e=>U(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function S(e,s){var r,t;const n={...G,...s},o=K(n),i=A((t=o[e])!=null?t:(r=n.default)==null?void 0:r.call(n));return k(i,()=>{W(e,i.value,n)}),i}function K(e={}){return q(document.cookie,e)}function Q(e,s,n={}){return s==null?y(e,s,{...n,maxAge:-1}):y(e,s,n)}function W(e,s,n={}){document.cookie=Q(e,s,n)}const Z={},ee={class:"flex-grow"};function te(e,s){return f(),m("div",ee)}const oe=T(Z,[["render",te]]),ne=()=>{const e=x(""),s=x(0);let n=null,o=null;return{onTouchStart:t=>{n=t.touches[0].clientX,o=t.touches[0].clientY},onTouchMove:t=>{if(n===null||o===null)return;const a=t.touches[0].clientX,d=t.touches[0].clientY,l=n-a,u=o-d;Math.abs(l)>Math.abs(u)?(s.value=l,l>0?e.value="left":e.value="right"):(s.value=u,u>0?e.value="up":e.value="down"),n=null,o=null,t.preventDefault()},swipeDirection:e,swipeDistance:s}},se=c("div",{class:"flex md:hidden align-center justify-center pt-1.5 pb-1 h-8"},[c("div",{class:"grab-bar w-[300px] h-3 bg-layoutaccent-400 dark:bg-layoutaccent-500 rounded-lg mb-2"})],-1),ae={class:"flex flex-col pl-0 mt-4"},ie={__name:"Sidebar",props:{routes:{type:Array,default:()=>[]}},setup(e){const s=x(!1),{onTouchMove:n,onTouchStart:o,swipeDirection:i}=ne();return k(i,()=>{(i.value==="up"||i.value==="down")&&(s.value=i.value==="up",s.value?window.document.body.style.overscrollBehaviorY="contain":window.setTimeout(()=>{window.document.body.style.overscrollBehaviorY=null},500))}),(r,t)=>{const a=L,d=oe;return f(),m("section",{class:I(["md:flex sidebar flex-col border lg:border-t-0 lg:border-l-0 lg:border-b-0 fixed lg:static z-50 -mt-8 rounded-md w-full h-full left-0 lg:mt-0 lg:rounded-none lg:w-auto bg-layout-100 dark:bg-layout-1000 dark:text-th-type-300 px-4 transition-all overscroll-contain",{"top-10":s.value,"top-full":!s.value}]),onTouchstart:t[0]||(t[0]=(...l)=>_(o)&&_(o)(...l)),onTouchmove:t[1]||(t[1]=(...l)=>_(n)&&_(n)(...l))},[se,v(r.$slots,"top"),c("nav",null,[c("ul",ae,[(f(!0),m(C,null,E(e.routes,l=>(f(),m("li",{class:"list-none flex items-center",key:l.text},[g(a,{class:"flex-grow hover:bg-layout-200 dark:hover:bg-layout-900 relative cursor-pointer p-3 rounded-md no-underline text-inherit","active-class":"bg-blue-100 dark:bg-layoutaccent-900 dark:text-layoutfont-100",to:l.path},{default:w(()=>[$(b(l.text),1)]),_:2},1032,["to"])]))),128))])]),g(d),v(r.$slots,"bottom")],34)}}},le=""+globalThis.__publicAssetsURL("img/straker-name.png"),re=""+globalThis.__publicAssetsURL("img/straker-icon.png");const R=e=>(O("data-v-6fdc8761"),e=e(),j(),e),ce={class:"dark:bg-layout-1000 dark:text-layoutfont-300 max-w-full"},ue=R(()=>c("img",{src:le,class:"dark:invert",width:"100px",height:"68px"},null,-1)),de=R(()=>c("img",{src:re,width:"47px",height:"68px"},null,-1)),pe={class:"p-2 pb-3 flex flex-col flex-grow-0"},fe=["value"],me={class:"p-2 py-3 flex-grow-0"},_e={class:"page-container d-flex flex-grow justify-center dark:bg-layout-900 overflow-auto mb-8 lg:mb-0"},ge={class:"body flex-grow p-4 md:pt-6 md:px-8 md:pb-0"},he={__name:"default",setup(e){const s=V(),n=S("useDarkMode");N(()=>{z({bodyAttrs:{class:n.value?"dark":""}})});const o=S("selectedLanguage");o.value&&(s.locale.value=o.value);const i=()=>{o.value=s.locale.value},r=[{path:"/",text:"Reports"},{path:"/exceptions",text:"Exceptions"}];return(t,a)=>{const d=D,l=M,u=ie;return f(),m("main",ce,[g(u,{routes:r},{top:w(()=>[g(d,{"no-gutters":"",class:"h-[68px] -my-2"},{default:w(()=>[ue,de]),_:1})]),bottom:w(()=>[c("span",pe,[$(b(t.$t("language"))+" ",1),Y(c("select",{"onUpdate:modelValue":a[0]||(a[0]=p=>t.$i18n.locale=p),class:"p-2 border bg-layout-200 dark:bg-layout-700",onChange:i},[(f(!0),m(C,null,E(t.$i18n.availableLocales,p=>(f(),m("option",{key:p,value:p},b(t.$t(`languages.${p}`)),9,fe))),128))],544),[[B,t.$i18n.locale]])]),c("span",me,[g(l,{modelValue:_(n),"onUpdate:modelValue":a[1]||(a[1]=p=>X(n)?n.value=p:null),"off-icon":"mdi-weather-sunny","on-icon":"mdi-moon-waxing-crescent",label:"Dark Mode"},null,8,["modelValue"])])]),_:1}),c("div",_e,[c("section",ge,[v(t.$slots,"default",{},void 0,!0)])])])}}},ve=T(he,[["__scopeId","data-v-6fdc8761"]]);export{ve as default};
