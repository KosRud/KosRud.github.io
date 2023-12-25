import{y as ye,z as Ne,r as p,A as $e,B as ze,C as Ye,D as ee,E as Me,G as Je,H as Ue,I as qe,J as Ze,K as Xe,L as Ke,M as Qe,b as R,v as $,x as ne,N as K,O as H,P as F,Q as Y,d as M,o as _,c as m,f as ie,n as c,_ as I,m as ce,u as i,R as se,e as h,i as k,w as B,j as te,t as D,F as S,h as V,p as w,g as P,S as et,T as Ie,U as tt,V as nt,W as st,X as ot,Y as at,Z as ae,$ as rt,a0 as lt,a1 as it,a2 as ct,a3 as ut,a4 as _t,a5 as vt,a6 as dt,a7 as pt,a8 as mt,a9 as ht,aa as ft,ab as gt,ac as bt,ad as yt}from"./chunks/framework.oytdgtbb.js";import{u as Te,_ as ve}from"./chunks/resizeObserver.LQI_noj-.js";/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ke;const oe=e=>ke=e,Le=Symbol();function re(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var X;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(X||(X={}));function Nt(){const e=Ne(!0),t=e.run(()=>p({}));let s=[],n=[];const o=$e({install(a){oe(o),o._a=a,a.provide(Le,o),a.config.globalProperties.$pinia=o,n.forEach(r=>s.push(r)),n=[]},use(a){return!this._a&&!qe?n.push(a):s.push(a),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return o}const we=()=>{};function de(e,t,s,n=we){e.push(t);const o=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),n())};return!s&&Xe()&&Ke(o),o}function j(e,...t){e.slice().forEach(s=>{s(...t)})}const $t=e=>e();function le(e,t){e instanceof Map&&t instanceof Map&&t.forEach((s,n)=>e.set(n,s)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const n=t[s],o=e[s];re(o)&&re(n)&&e.hasOwnProperty(s)&&!ee(n)&&!Me(n)?e[s]=le(o,n):e[s]=n}return e}const Mt=Symbol();function It(e){return!re(e)||!e.hasOwnProperty(Mt)}const{assign:G}=Object;function Tt(e){return!!(ee(e)&&e.effect)}function kt(e,t,s,n){const{state:o,actions:a,getters:r}=t,u=s.state.value[e];let d;function f(){u||(s.state.value[e]=o?o():{});const l=Qe(s.state.value[e]);return G(l,a,Object.keys(r||{}).reduce((N,b)=>(N[b]=$e(R(()=>{oe(s);const v=s._s.get(e);return r[b].call(v,v)})),N),{}))}return d=Ce(e,f,t,s,n,!0),d}function Ce(e,t,s={},n,o,a){let r;const u=G({actions:{}},s),d={deep:!0};let f,l,N=[],b=[],v;const A=n.state.value[e];!a&&!A&&(n.state.value[e]={}),p({});let Q;function E(y){let g;f=l=!1,typeof y=="function"?(y(n.state.value[e]),g={type:X.patchFunction,storeId:e,events:v}):(le(n.state.value[e],y),g={type:X.patchObject,payload:y,storeId:e,events:v});const O=Q=Symbol();Ze().then(()=>{Q===O&&(f=!0)}),l=!0,j(N,g,n.state.value[e])}const J=a?function(){const{state:g}=s,O=g?g():{};this.$patch(x=>{G(x,O)})}:we;function _e(){r.stop(),N=[],b=[],n._s.delete(e)}function We(y,g){return function(){oe(n);const O=Array.from(arguments),x=[],q=[];function Ve(L){x.push(L)}function je(L){q.push(L)}j(b,{args:O,name:y,store:C,after:Ve,onError:je});let Z;try{Z=g.apply(this&&this.$id===e?this:C,O)}catch(L){throw j(q,L),L}return Z instanceof Promise?Z.then(L=>(j(x,L),L)).catch(L=>(j(q,L),Promise.reject(L))):(j(x,Z),Z)}}const Fe={_p:n,$id:e,$onAction:de.bind(null,b),$patch:E,$reset:J,$subscribe(y,g={}){const O=de(N,y,g.detached,()=>x()),x=r.run(()=>ze(()=>n.state.value[e],q=>{(g.flush==="sync"?l:f)&&y({storeId:e,type:X.direct,events:v},q)},G({},d,g)));return O},$dispose:_e},C=Ye(Fe);n._s.set(e,C);const U=(n._a&&n._a.runWithContext||$t)(()=>n._e.run(()=>(r=Ne()).run(t)));for(const y in U){const g=U[y];if(ee(g)&&!Tt(g)||Me(g))a||(A&&It(g)&&(ee(g)?g.value=A[y]:le(g,A[y])),n.state.value[e][y]=g);else if(typeof g=="function"){const O=We(y,g);U[y]=O,u.actions[y]=g}}return G(C,U),G(Je(C),U),Object.defineProperty(C,"$state",{get:()=>n.state.value[e],set:y=>{E(g=>{G(g,y)})}}),n._p.forEach(y=>{G(C,r.run(()=>y({store:C,app:n._a,pinia:n,options:u})))}),A&&a&&s.hydrate&&s.hydrate(C.$state,A),f=!0,l=!0,C}function Lt(e,t,s){let n,o;const a=typeof t=="function";typeof e=="string"?(n=e,o=a?s:t):(o=e,n=e.id);function r(u,d){const f=Ue();return u=u||(f?ye(Le,null):null),u&&oe(u),u=ke,u._s.has(n)||(a?Ce(n,t,o,u):kt(n,o,u)),u._s.get(n)}return r.$id=n,r}const wt={height:480,width:720};function Ct(){function e(){const t=T();t.viewportSize.width=document.documentElement.clientWidth,t.viewportSize.height=document.documentElement.clientHeight}Ot(e)}function Ot(e){$(()=>{e(),window.addEventListener("resize",e,{passive:!0})}),ne(()=>{window.removeEventListener("resize",e)})}function St(){Ht(()=>{const e=T();e.activeHeadingId=At()})}function Ht(e){ne(()=>{window.removeEventListener("scroll",e)}),K(()=>{e()}),$(()=>{window.addEventListener("scroll",e,{passive:!0}),H(e)})}function At(){const e=T(),t=Oe(e.tocItems);return t?t.element.id:e.tocItems[0]?e.tocItems[0].element.id:""}function Oe(e){const t=T();for(const s of e.slice().reverse()){const n=Oe(s.children);if(n)return n;const o=s.element.getBoundingClientRect(),a=parseInt(window.getComputedStyle(s.element).marginTop);if(o.top<t.visibleAreaRectTop+a)return s}}function Pt(){const e=T();function t(){e.tocItems=Bt()}$(()=>H(t)),K(t)}function Bt(){const e=T();if(!e.contentForToc)return[];const t=e.contentForToc.$el,s=Array.from(t.querySelectorAll("h1, h2, h3")).flatMap(a=>{var u;const r=(u=Array.from(a.childNodes).find(d=>d.nodeType==Node.TEXT_NODE&&d.textContent))==null?void 0:u.textContent;return r?[{level:Et(a.tagName),children:[],element:a,title:r.trim(),italic:!1}]:(console.error("Error while trying to build TOC from headings. Heading is missing a title",a),[])}),n=[];let o=0;for(;;){const{heading:a,index:r}=Se(s,o,1);if(a)n.push(a),o=r;else break}if(n.length==1&&n[0].level==1){const a=n[0].children;return n[0].children=[],n[0].title="(beginning)",n[0].italic=!0,a.unshift(n[0]),a}return n}function Et(e){const t=["H1","H2","H3","H4","H5","H6"].findIndex(s=>s==e);return t!=-1?t+1:(console.error(`Invalid heading tag: ${e}`),7)}function Se(e,t,s){const n=e[t];if(!n||n.level<s)return{heading:null,index:t};for(t++;;){const{heading:o,index:a}=Se(e,t,n.level+1);if(o)n.children.push(o),t=a;else break}return{heading:n,index:t}}function Gt(){const e=F(),t=T();$(()=>{H(()=>{e.path,t.isMobileNavPagesOpen=!1})}),K(()=>{t.isMobileNavPagesOpen=!1})}const W=(e,t)=>{const s=/\.[^.]+$/;e=encodeURI(e.replace(s,"")),t=encodeURI(t.replace(s,""));const n={inside:!1,exact:!1};return t==e&&(n.exact=!0),e.slice(0,t.length)==t&&(n.inside=!0),n};function Rt(e){const t=F(),s=p(!1);function n(){s.value=W(t.path,e).exact}return K(n),H(n),s}function Dt(){const e=T(),t=F(),{site:s}=Y();$(()=>{H(()=>{var n;e.navMain=[{title:"Home",url:"/"}].concat(s.value.themeConfig.nav),e.navSecondary=((n=s.value.themeConfig.nav.find(o=>W(t.path,o.url).inside))==null?void 0:n.children)??[]})})}const T=Lt("counter",{state:()=>{const e=p(null),t=p(null),s=p(wt),n=p([]),o=p(""),a=p(!1),r=p(!1),u=p([]),d=p([]),f=p(!1),l=p(!1);return{contentForToc:e,VisibleAreaMarker:t,viewportSize:s,tocItems:n,activeHeadingId:o,isViewportNarrow:f,isHeaderNavOverlapping:l,isMobileNavPagesOpen:a,isMobileNavTocOpen:r,navMain:u,navSecondary:d}},getters:{isCompactModeActive:e=>e.isHeaderNavOverlapping||e.isViewportNarrow,visibleAreaRectTop:e=>e.VisibleAreaMarker?e.VisibleAreaMarker.getBoundingClientRect().top:(console.log("Visible area marker was not initialized"),0),isMobileNavAnythingOpen:e=>e.isMobileNavPagesOpen||e.isMobileNavTocOpen}});function xt(){const e=T();Ct(),St(),Pt(),Dt(),Gt();const t=function(n){e.isViewportNarrow=n.matches};let s=null;return $(()=>{s=matchMedia("screen and (width < 75em)"),s.addEventListener("change",t),e.isViewportNarrow=s.matches}),ne(()=>{s==null||s.removeEventListener("change",t)}),e}const Wt=M({__name:"LayoutNavItemText",props:{level:{},active:{type:Boolean},compact:{type:Boolean}},setup(e){const t=e,s=R(()=>Math.round(Math.min(Math.max(t.level,0),2)));return(n,o)=>(_(),m("div",{class:c([n.$style.NavItem_text,s.value==0?n.$style.NavItem_text___level0:"",s.value==1?n.$style.NavItem_text___level1:"",s.value==2?n.$style.NavItem_text___level2:"",t.active?n.$style.NavItem_text___active:"",t.compact?n.$style.NavItem_text___compact:""])},[ie(n.$slots,"default")],2))}}),Ft="Db",Vt="Eb",jt="Fb",zt="Gb",Yt="Hb",Jt="Ib",Ut="Jb",qt={DarkMode:Ft,NavItem_text:Vt,NavItem_text___active:jt,NavItem_text___level0:zt,NavItem_text___level1:Yt,NavItem_text___level2:Jt,NavItem_text___compact:Ut},Zt={$style:qt},He=I(Wt,[["__cssModules",Zt]]);function Ae(e,t){Be(e)&&e.scrollIntoView({block:t})}const Pe=.5;function pe(e,t){return t-e>Pe}function me(e,t){return e-t>Pe}function Be(e,t){if(!t){if(!e.parentElement)return!1;t=e.parentElement}const s=t.getBoundingClientRect(),n=e.getBoundingClientRect();return pe(n.left,s.left)||me(n.right,s.right)||pe(n.top,s.top)||me(n.bottom,s.bottom)?!0:t.parentElement?Be(e,t.parentElement):!1}const Xt=["href"],Kt={key:0},Qt=M({__name:"LayoutNavTocItem",props:{heading:{},level:{},isTocLoaded:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){ce(u=>({"357fa55d":i(o)-1}));const s=e,n=t,o=s.level??1,a=R(()=>T().activeHeadingId==s.heading.element.id);$(()=>{H(()=>{!a.value||!r.value||!s.isTocLoaded||r.value&&Ae(r.value,"center")})});const r=p(null);return(u,d)=>{const f=se("LayoutNavTocItem",!0);return _(),m("li",{class:c(u.$style.TocItem)},[h("a",{class:c([u.$style.TocItem_link,a.value?u.$style.TocItem_link___active:""]),href:`#${s.heading.element.id}`,onClick:d[0]||(d[0]=l=>n("jumpedToItem")),ref:l=>{r.value=l}},[k(He,{level:i(o),compact:"",active:a.value&&!s.heading.italic,class:c([u.$style.TocItem_linkText,s.heading.italic?u.$style.TocItem_linkText___italics:""])},{default:B(()=>[te(D(s.heading.title),1)]),_:1},8,["level","active","class"])],10,Xt),s.heading.children.length!=0?(_(),m("ul",Kt,[(_(!0),m(S,null,V(s.heading.children,l=>(_(),w(f,{heading:l,level:i(o)+1,onJumpedToItem:d[1]||(d[1]=N=>n("jumpedToItem")),"is-toc-loaded":s.isTocLoaded},null,8,["heading","level","is-toc-loaded"]))),256))])):P("",!0)],2)}}}),en="yb",tn="zb",nn="Ab",sn="Bb",on="Cb",an={DarkMode:en,TocItem:tn,TocItem_link:nn,TocItem_link___active:sn,TocItem_linkText___italics:on},rn={$style:an},ln=I(Qt,[["__cssModules",rn]]),cn=M({__name:"LayoutNavToc",props:{isMobile:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){const s=e,n=t,o=T(),a=p(!1);return $(()=>{a.value=!0}),(r,u)=>(_(),m("nav",{"aria-label":"Table of contents",class:c([r.$style.Toc,s.isMobile?r.$style.Toc___mobile:""])},[h("h2",{"aria-hidden":!0,class:c(r.$style.Toc_title)}," On this page: ",2),h("div",{class:c(r.$style.Toc_content)},[h("ul",{class:c(r.$style.Toc_itemList)},[(_(!0),m(S,null,V(i(o).tocItems,d=>(_(),w(ln,{key:d.element.id,heading:d,onJumpedToItem:u[0]||(u[0]=f=>n("jumpedToItem")),isTocLoaded:a.value},null,8,["heading","isTocLoaded"]))),128))],2)],2)],2))}}),un="D_",_n="E_",vn="F_",dn="G_",pn="H_",mn="I_",hn={DarkMode:un,Toc:_n,Toc_title:vn,Toc___mobile:dn,Toc_content:pn,Toc_itemList:mn},fn={$style:hn},he=I(cn,[["__cssModules",fn]]),Ee=Symbol();function gn(e){const t=p(e);return et(Ee,t),t}function Ge(){return ye(Ee)??p(!1)}function Re(e){const t=p(null);function s(o){if(t.value==o){t.value=null;return}t.value=o}function n(o){return t.value==o}return{idOpenChild:t,toggleChild:s,isChildOpen:n}}const bn="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='16'%20viewBox='0%200%208%2014'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-chevron-right'%3e%3cpolyline%20points='1%2013%207%207%201%201'%3e%3c/polyline%3e%3c/svg%3e",yn=["level"],Nn=["href"],$n=M({__name:"LayoutNavPagesItem",props:{navItem:{},depth:{},startingLevel:{},isOpen:{type:Boolean},isNavPagesLoaded:{type:Boolean}},emits:["navItemToggle"],setup(e,{emit:t}){ce(v=>({"73db589d":f.value,"449e641a":r,"58a84210":n.navItem.children?"visible":"hidden"}));const s=t,n=e,o=F(),a=T(),r=`url("${bn}")`,u=Re((n.navItem.children??[]).map(v=>v.url));$(()=>{for(const v of n.navItem.children??[])W(o.path,v.url).inside&&u.toggleChild(v.url)});function d(v){u.toggleChild(v.url),v.children||(a.isMobileNavPagesOpen=!1)}const f=R(()=>n.depth??0),l=Rt(n.navItem.url),N=Ge(),b=p(null);return $(()=>{H(()=>{!b.value||!n.isNavPagesLoaded||Ae(b.value,f.value==0?"center":"nearest")})}),(v,A)=>{const Q=se("LayoutNavPagesItem",!0);return _(),m("li",{level:f.value,class:c([v.$style.NavItem,i(N)?v.$style.Dark:"",v.isOpen?v.$style.NavItem___open:""])},[h("a",{href:v.$props.navItem.children?"javascript:":n.navItem.url,class:c([v.$style.NavItem_link]),onClick:A[0]||(A[0]=E=>s("navItemToggle")),ref:E=>{b.value=E}},[k(He,{level:f.value+v.startingLevel,class:c(v.$style.NavItem_linkText),active:i(l)},{default:B(()=>[te(D(n.navItem.title),1)]),_:1},8,["level","class","active"])],10,Nn),h("div",{class:c(v.$style.NavItem_childrenListWrapper)},[k(Ie,{"enter-from-class":v.$style.NavItem_childrenList___enterFrom,"enter-to-class":v.$style.NavItem_childrenList___enterTo,"enter-active-class":v.$style.NavItem_childrenList___enterActive,"leave-from-class":v.$style.NavItem_childrenList___leaveFrom,"leave-to-class":v.$style.NavItem_childrenList___leaveTo,"leave-active-class":v.$style.NavItem_childrenList___leaveActive},{default:B(()=>{var E;return[v.isOpen&&((E=n.navItem.children)!=null&&E.length)?(_(),m("ul",{key:0,class:c(v.$style.NavItem_childrenList)},[(_(!0),m(S,null,V(n.navItem.children,J=>(_(),w(Q,{depth:f.value+1,"starting-level":v.startingLevel,"nav-item":J,onNavItemToggle:_e=>d(J),"is-open":i(u).isChildOpen(J.url),"is-nav-pages-loaded":n.isNavPagesLoaded},null,8,["depth","starting-level","nav-item","onNavItemToggle","is-open","is-nav-pages-loaded"]))),256))],2)):P("",!0)]}),_:1},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"])],2)],10,yn)}}}),Mn="ib",In="jb",Tn="kb",kn="lb",Ln="mb",wn="nb",Cn="ob",On="pb",Sn="qb",Hn="rb",An="sb",Pn="tb",Bn={DarkMode:Mn,NavItem:In,NavItem_link:Tn,NavItem___open:kn,NavItem_childrenListWrapper:Ln,Dark:wn,NavItem_childrenList___enterFrom:Cn,NavItem_childrenList___enterTo:On,NavItem_childrenList___enterActive:Sn,NavItem_childrenList___leaveFrom:Hn,NavItem_childrenList___leaveTo:An,NavItem_childrenList___leaveActive:Pn},En={$style:Bn},Gn=I($n,[["__cssModules",En]]),Rn=["aria-label"],Dn=M({__name:"LayoutNavPages",props:{mobile:{type:Boolean}},setup(e){const{site:t}=Y(),s=e,n=F(),o=T(),a=R(()=>s.mobile?o.navMain:o.navSecondary),r=p(!1);$(()=>{r.value=!0});const u=R(()=>{var l;return s.mobile?"Menu":(((l=t.value.themeConfig.nav.find(N=>W(n.path,N.url).inside))==null?void 0:l.title)??"").concat("/")}),d=Re(a.value.map(l=>l.url));$(()=>{for(const l of a.value)W(n.path,l.url).inside&&d.toggleChild(l.url)});function f(l){d.toggleChild(l.url),l.children||(o.isMobileNavPagesOpen=!1)}return(l,N)=>(_(),m("nav",{"aria-label":`Submenu: ${u.value}`,class:c([l.$style.NavPages,s.mobile?l.$style.NavPages___mobile:""])},[a.value.length>0?(_(),m(S,{key:0},[h("h2",{"aria-hidden":"true",class:c(l.$style.NavPages_title)},D(u.value),3),h("ul",{class:c(l.$style.NavPages_itemList)},[(_(!0),m(S,null,V(a.value,b=>(_(),w(Gn,{"starting-level":s.mobile?0:1,"nav-item":b,"is-open":i(d).isChildOpen(b.url),onNavItemToggle:v=>f(b),"is-nav-pages-loaded":r.value},null,8,["starting-level","nav-item","is-open","onNavItemToggle","is-nav-pages-loaded"]))),256))],2)],64)):P("",!0)],10,Rn))}}),xn="z",Wn="A",Fn="B",Vn="C",jn={NavPages:xn,NavPages_title:Wn,NavPages_itemList:Fn,NavPages___mobile:Vn},zn={$style:jn},fe=I(Dn,[["__cssModules",zn]]);function ue(e){return e.url=="/"||!e.children?e:e.children[0]?ue(e.children[0]):(console.error("Navitem has an empty children list:",e),{title:"Home",url:"/"})}const Yn=["aria-current"],Jn=["href"],Un=M({__name:"LayoutHeaderNavItem",props:{navItem:{}},setup(e){const t=F(),s=e,n=R(()=>{const o=W(t.path,s.navItem.url);return s.navItem.url=="/"?o.exact:o.inside});return(o,a)=>(_(),m("li",{class:c(o.$style.NavItem),"aria-current":n.value?"page":void 0},[h("a",{class:c([o.$style.NavItem_link,n.value?o.$style.NavItem_link___active:""]),href:i(ue)(s.navItem).url},D(s.navItem.title),11,Jn)],10,Yn))}}),qn="ub",Zn="vb",Xn="wb",Kn="xb",Qn={DarkMode:qn,NavItem:Zn,NavItem_link:Xn,NavItem_link___active:Kn},es={$style:Qn},ts=I(Un,[["__cssModules",es]]),ns=M({__name:"LayoutHeaderNav",setup(e){const t=T(),s=p(null),n=p(null);return(o,a)=>(_(),m("nav",{class:c(o.$style.HeaderNav),"aria-label":"Main menu",ref:r=>{n.value=r}},[h("ul",{ref:r=>{s.value=r}},[(_(!0),m(S,null,V(i(t).navMain,r=>(_(),w(ts,{"nav-item":r},null,8,["nav-item"]))),256))],512)],2))}}),ss="L",os={HeaderNav:ss},as={$style:os},rs=I(ns,[["__cssModules",as]]),ls=M({__name:"LayoutHeaderButtonBurger",props:{title:{},isOpen:{type:Boolean},toggleIsOpen:{type:Function},numLines:{},compact:{type:Boolean}},setup(e){const t=e;return(s,n)=>(_(),m("button",{class:c({[s.$style.BurgerWrapper]:!0,[s.$style.open]:t.isOpen}),onClick:n[0]||(n[0]=(...o)=>t.toggleIsOpen&&t.toggleIsOpen(...o))},[h("div",{class:c(s.$style.Burger_title)},D(t.title),3),t.compact?P("",!0):(_(),m("div",{key:0,class:c(s.$style.Burger)},[(_(!0),m(S,null,V(s.numLines,o=>(_(),m("div",{class:c(s.$style.Burger_line)},null,2))),256))],2))],2))}}),is="S",cs="T",us="U",_s="V",vs="W",ds={BurgerWrapper:is,open:cs,Burger_title:us,Burger:_s,Burger_line:vs},ps={$style:ds},ge=I(ls,[["__cssModules",ps]]),ms=M({__name:"LayoutHeader",setup(e){ce(l=>({ba1a7e3e:a.value,"2da92c5a":i(t).isCompactModeActive?"visible":"hidden","62cb630d":i(t).isCompactModeActive&&i(t).tocItems.length?"visible":"hidden"}));const t=T(),s=p(null),n=p(null),o=p(null),a=p("visible"),r=p(!1);u();function u(){let l=null;const N=b=>{r.value=b.matches};$(()=>{l=window.matchMedia("screen and (width < 20rem)"),l.addEventListener("change",N),r.value=l.matches}),ne(()=>l==null?void 0:l.removeEventListener("change",N))}Te(()=>{d(),f()},()=>s.value,!0);function d(){if(!n.value){console.error("logo ref not set");return}const l=n.value.nextElementSibling;l&&(n.value.getBoundingClientRect().right>l.getBoundingClientRect().left?a.value="hidden":a.value="visible")}function f(){if(!o.value){console.error("Header_navWrapper ref not set");return}const l=o.value.lastElementChild;l&&(t.isHeaderNavOverlapping=l.getBoundingClientRect().right>o.value.getBoundingClientRect().right)}return(l,N)=>(_(),m("header",{class:c(l.$style.Header),role:"banner",ref:b=>{s.value=b}},[h("a",{href:"/",class:c(l.$style.Header_logoWrapper),ref:b=>{n.value=b}},[h("img",{class:c(l.$style.Header_logo),src:tt,alt:"website logo",title:"website logo",style:{aspectRatio:1}},null,2)],2),h("div",{class:c(l.$style.Header_spacer)},null,2),h("div",{class:c(l.$style.Header_navWrapper),ref:b=>{o.value=b}},[k(rs,{style:nt({visibility:i(t).isCompactModeActive?"hidden":"visible"}),class:c(l.$style.Header_nav)},null,8,["style","class"])],2),k(ge,{class:c(l.$style.BurgerToc),title:"On this page","is-open":i(t).isMobileNavTocOpen,"toggle-is-open":()=>{i(t).isMobileNavTocOpen=!i(t).isMobileNavTocOpen},compact:r.value,"num-lines":3},null,8,["class","is-open","toggle-is-open","compact"]),k(ge,{class:c(l.$style.BurgerMenu),title:"Menu","is-open":i(t).isMobileNavPagesOpen,"toggle-is-open":()=>{i(t).isMobileNavPagesOpen=!i(t).isMobileNavPagesOpen},compact:r.value,"num-lines":5},null,8,["class","is-open","toggle-is-open","compact"])],2))}}),hs="D",fs="E",gs="F",bs="G",ys="H",Ns="I",$s="J",Ms="K",Is={Header:hs,Header_logoWrapper:fs,Header_logo:gs,Header_spacer:bs,Header_navWrapper:ys,Header_nav:Ns,BurgerMenu:$s,BurgerToc:Ms},Ts={$style:Is},ks=I(ms,[["__cssModules",Ts]]),Ls=M({__name:"LayoutNavMobile",props:{isOpen:{type:Boolean},setIsOpen:{type:Function}},setup(e){const t=e,s=p(null);return $(()=>{function n(o){s.value&&(s.value.contains(o.target)||t.setIsOpen(!1))}H(()=>{t.isOpen?window.requestAnimationFrame(()=>window.addEventListener("click",n)):window.removeEventListener("click",n)})}),(n,o)=>(_(),w(Ie,{"enter-from-class":n.$style.NavMobile___enterFrom,"enter-to-class":n.$style.NavMobile___enterTo,"enter-active-class":n.$style.NavMobile___enterActive,"leave-from-class":n.$style.NavMobile___leaveFrom,"leave-to-class":n.$style.NavMobile___leaveTo,"leave-active-class":n.$style.NavMobile___leaveActive},{default:B(()=>[t.isOpen?(_(),m("div",{key:0,class:c([n.$style.NavMobile]),ref:a=>{s.value=a}},[ie(n.$slots,"default",{close:()=>t.setIsOpen(!1)})],2)):P("",!0)]),_:3},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"]))}}),ws="J_",Cs="K_",Os="L_",Ss="M_",Hs="N_",As="O_",Ps="P_",Bs="Q_",Es={DarkMode:ws,NavMobile:Cs,NavMobile___enterFrom:Os,NavMobile___enterTo:Ss,NavMobile___enterActive:Hs,NavMobile___leaveFrom:As,NavMobile___leaveTo:Ps,NavMobile___leaveActive:Bs},Gs={$style:Es},be=I(Ls,[["__cssModules",Gs]]),Rs=M({__name:"LayoutOverlay",setup(e){const t=T(),s=st();return H(()=>{var n,o;t.isMobileNavAnythingOpen?(n=document.querySelector("body"))==null||n.classList.add(s.noScroll):(o=document.querySelector("body"))==null||o.classList.remove(s.noScroll)}),(n,o)=>(_(),m("div",{class:c([i(s).Overlay,i(t).isMobileNavAnythingOpen?i(s).Overlay___shaded:""])},[k(ks,{class:c(i(s).Header)},null,8,["class"]),h("div",{class:c(i(s).NavContainer)},[i(t).isCompactModeActive?P("",!0):(_(),m(S,{key:0},[h("div",{class:c(i(s).NavPagesWrapper)},[i(t).navSecondary.length?(_(),w(fe,{key:0,class:c(i(s).NavPages)},null,8,["class"])):P("",!0)],2),h("div",{"aria-hidden":"true",class:c(i(s).Overlay_spacer___content)},null,2),h("div",{class:c(i(s).TocWrapper)},[i(t).tocItems.length?(_(),w(he,{key:0,class:c(i(s).Toc)},null,8,["class"])):P("",!0)],2)],64)),k(be,{class:c(i(s).NavMobile),isOpen:i(t).isMobileNavTocOpen,setIsOpen:a=>{i(t).isMobileNavTocOpen=a}},{default:B(({close:a})=>[k(he,{"is-mobile":"",onJumpedToItem:a},null,8,["onJumpedToItem"])]),_:1},8,["class","isOpen","setIsOpen"]),k(be,{class:c(i(s).NavMobile),isOpen:i(t).isMobileNavPagesOpen,setIsOpen:a=>{i(t).isMobileNavPagesOpen=a}},{default:B(()=>[k(fe,{mobile:""})]),_:1},8,["class","isOpen","setIsOpen"])],2)],2))}}),Ds="g",xs="h",Ws="i",Fs="j",Vs="k",js="l",zs="m",Ys="n",Js="o",Us="p",qs="q",Zs={noScroll:Ds,Overlay:xs,Header:Ws,NavContainer:Fs,Overlay_spacer___content:Vs,Overlay___shaded:js,NavPagesWrapper:zs,NavPages:Ys,TocWrapper:Js,Toc:Us,NavMobile:qs},Xs={$style:Zs},Ks=I(Rs,[["__cssModules",Xs]]),Qs={};function eo(e,t){return _(),m("p",null,"Page not found")}const to=I(Qs,[["render",eo]]);function De(){const e=F(),{site:t,frontmatter:s}=Y();return R(()=>{function n(o){for(const r of o){const u=W(e.path,r.url);if(u.exact)return[r];if(u.inside&&r.children)return[r,...n(r.children)]}return[{title:no(s,e),url:e.path}]}return[{title:"Home",url:"/",children:t.value.themeConfig.nav},...n(t.value.themeConfig.nav)]})}function no(e,t){if(e.value.title)return e.value.title;const s=t.path.match(/[^\/]+$/);if(s){const o=decodeURI(s[0]).replace(/\.[^.]+$/,"");return o.charAt(0).toUpperCase()+o.slice(1)}return"Unknown page"}const so=500,oo=M({__name:"MarkdownWrapper",setup(e){const t=p(null),s=p(!1),n=De();return Te(()=>{if(!t.value){console.error("markdown container element ref not set");return}s.value=t.value.clientWidth<so},()=>t.value,!0),(o,a)=>(_(),m("div",{ref:r=>{t.value=r},class:c([o.$style.Markdown,s.value?o.$style.Markdown___narrow:""])},[h("h1",null,D(i(n)[i(n).length-1].title),1),ie(o.$slots,"default")],2))}}),ao="R_",ro="S_",lo="T_",io="U_",co={DarkMode:ao,Markdown:ro,copy:lo,Markdown___narrow:io},uo={$style:co},_o=I(oo,[["__cssModules",uo]]),vo=["aria-current","href"],po=M({__name:"YouAreHere",setup(e){const t=Ge(),s=De();return(n,o)=>(_(),m("p",{class:c([n.$style.YouAreHere,i(t)?n.$style.YouAreHere___dark:""])},[h("h2",{class:c(n.$style.YouAreHere_title)},"You are here:",2),(_(!0),m(S,null,V(i(s),(a,r)=>(_(),m(S,null,[h("a",{"aria-current":r==i(s).length-1?"page":void 0,href:i(ue)(a).url},D(a==null?void 0:a.title),9,vo),h("span",{class:c(n.$style.NavTrace_separator)},"/",2)],64))),256))],2))}}),mo="V_",ho="W_",fo="X_",go="Y_",bo="Z_",yo={DarkMode:mo,YouAreHere:ho,YouAreHere___dark:fo,YouAreHere_title:go,NavTrace_separator:bo},No={$style:yo},$o=I(po,[["__cssModules",No]]),Mo=M({__name:"LayoutMainDoc",setup(e){const{page:t}=Y(),s=T();return(n,o)=>{const a=se("Content");return _(),m("div",{class:c([n.$style.MainWrapper,i(s).isCompactModeActive?n.$style.MainWrapper___compact:""])},[h("div",{class:c(n.$style.Main)},[h("div",{class:c(n.$style.CurrentLocation)},[k($o)],2),h("main",null,[i(t).isNotFound?(_(),w(to,{key:0})):(_(),w(_o,{key:1,class:c(n.$style.Markdown)},{default:B(()=>[k(a,{ref:r=>{i(s).contentForToc=r}},null,512)]),_:1},8,["class"]))])],2)],2)}}}),Io="M",To="N",ko="O",Lo="P",wo={MainWrapper:Io,CurrentLocation:To,Main:ko,MainWrapper___compact:Lo},Co={$style:wo},Oo=I(Mo,[["__cssModules",Co]]),So="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20d='M8%200c4.42%200%208%203.58%208%208a8.013%208.013%200%200%201-5.45%207.59c-.4.08-.55-.17-.55-.38%200-.27.01-1.13.01-2.2%200-.75-.25-1.23-.54-1.48%201.78-.2%203.65-.88%203.65-3.95%200-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12%200%200-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68%200-1.36.09-2%20.27-1.53-1.03-2.2-.82-2.2-.82-.44%201.1-.16%201.92-.08%202.12-.51.56-.82%201.28-.82%202.15%200%203.06%201.86%203.75%203.64%203.95-.23.2-.44.55-.51%201.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82%201.13.16.45.68%201.31%202.69.94%200%20.67.01%201.3.01%201.49%200%20.21-.15.45-.55.38A7.995%207.995%200%200%201%200%208c0-4.42%203.58-8%208-8Z'%3e%3c/path%3e%3c/svg%3e",Ho="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24'%20height='24'%3e%3cpath%20d='M12%20.25a.75.75%200%200%201%20.673.418l3.058%206.197%206.839.994a.75.75%200%200%201%20.415%201.279l-4.948%204.823%201.168%206.811a.751.751%200%200%201-1.088.791L12%2018.347l-6.117%203.216a.75.75%200%200%201-1.088-.79l1.168-6.812-4.948-4.823a.75.75%200%200%201%20.416-1.28l6.838-.993L11.328.668A.75.75%200%200%201%2012%20.25Zm0%202.445L9.44%207.882a.75.75%200%200%201-.565.41l-5.725.832%204.143%204.038a.748.748%200%200%201%20.215.664l-.978%205.702%205.121-2.692a.75.75%200%200%201%20.698%200l5.12%202.692-.977-5.702a.748.748%200%200%201%20.215-.664l4.143-4.038-5.725-.831a.75.75%200%200%201-.565-.41L12%202.694Z'%3e%3c/path%3e%3c/svg%3e",Ao={class:"Github"},Po=["src"],Bo=["src"],Eo=M({__name:"GitHubStars.ce",props:{repo:{type:String}},setup(e){const t=e,s=p(0);return $(async()=>{function n(){const f=localStorage.getItem("githubStars")??"{}";try{return JSON.parse(f)}catch{return localStorage.setItem("githubStars","{}"),{}}}const o=n(),a=o[t.repo];if(a!==void 0){const f=(Date.now()-a.timeStamp)/1e3,l=3600;if(f<300||f<l&&a.numStars!=-1){s.value=a.numStars;return}}const d=(await(await fetch(`https://api.github.com/repos/${t.repo}`)).json()).stargazers_count??-1;s.value=d,o[t.repo]={numStars:d,timeStamp:Date.now()},localStorage.setItem("githubStars",JSON.stringify(o))}),(n,o)=>(_(),m("div",Ao,[k(ve,{href:`https://github.com/${n.repo}`,class:"Github_box Github_box___repo"},{default:B(()=>[h("img",{class:"Github_icon",src:i(So),alt:"github icon","aria-hidden":"true"},null,8,Po),te(" GitHub ")]),_:1},8,["href"]),s.value!=-1?(_(),w(ve,{key:0,href:`https://github.com/${n.repo}`,class:"Github_box Github_box___stars"},{default:B(()=>[h("img",{alt:"stars",class:"Github_icon Github_icon___star",src:i(Ho)},null,8,Bo),te(" "+D(s.value),1)]),_:1},8,["href"])):P("",!0)]))}}),Go='.Github{display:flex;flex-direction:row;align-items:center;gap:12rem}.Github_box{border:1rem solid #c0c0c0;border-radius:3rem;background-color:#fff;padding:6rem 12rem;display:flex;flex-direction:row;align-items:center;gap:6rem;text-decoration:none}.Github_box,.Github_box:link,.Github_box:visited{color:#000}.Github_box___repo{box-shadow:0 0 2rem #0003,0 -2rem 4rem #0002 inset;font-weight:700}.Github_box___repo:hover:not(:active){box-shadow:0 0 2rem #0003,0 -2rem 4rem #0004 inset}.Github_box___repo:hover:hover,.Github_box___repo:hover:visited:hover,.Github_box___repo:hover:link:hover{color:#0969da}.Github_box___stars{gap:1.5rem;padding-left:6rem;padding-right:6rem;font-weight:400;position:relative}.Github_box___stars:before,.Github_box___stars:after{content:"";position:absolute;aspect-ratio:1;right:100%;top:50%;transform-origin:center;transform:translateY(-50%) translate(-50%) rotate(-90deg) scaleY(2) scaleX(1)}.Github_box___stars:before{border:6rem solid transparent;border-bottom-color:silver}.Github_box___stars:after{border:5rem solid transparent;border-bottom-color:#fff}.Github_box___stars:hover{border-color:#0969da}.Github_box___stars:hover:before{border-bottom-color:#0969da}.Github_icon{vertical-align:middle;height:1.3em}.Github_icon___star{height:1.2em}.Github{position:relative;z-index:0}.Github_box___repo{z-index:1}.Github_box___stars{z-index:0}.Github_box___repo{transition:box-shadow .2s linear,background-color .1s linear,color .1s linear}.Github_box___repo:active{transition:background-color .1s linear}.Github_box___stars,.Github_box___stars:before{transition:border-color .2s linear}',Ro=I(Eo,[["styles",[Go]]]),Do=ot(Ro);function xo(){$(()=>{customElements.define("github-stars",Do)})}const Wo=["inert"],Fo=M({__name:"Layout",setup(e){var o;xo();const{frontmatter:t}=Y();(o=at())==null||o.appContext.app.use(Nt());const s=xt(),n=p(null);return gn(!1),K(()=>{t.value.title||console.warn("Frontmatter title empty")}),(a,r)=>{const u=se("Content");return _(),m("div",{class:c(a.$style.Layout),ref:d=>{n.value=d}},[k(Ks,{class:c(a.$style.Overlay)},null,8,["class"]),i(t).hero?(_(),m("div",{key:1,inert:i(s).isMobileNavAnythingOpen?!0:void 0,class:c([a.$style.Main,a.$style.Main___hero,i(s).isMobileNavAnythingOpen?a.$style.Main___nonInteractive:""])},[k(u)],10,Wo)):(_(),w(Oo,{key:0,inert:i(s).isMobileNavAnythingOpen?!0:void 0,class:c([a.$style.Main,a.$style.Main___doc,i(s).isMobileNavAnythingOpen?a.$style.Main___nonInteractive:""])},null,8,["inert","class"])),h("div",{"aria-hidden":"true",class:c(a.$style.VisibleRectMarker),ref:d=>{i(s).VisibleAreaMarker=d}},null,2)],2)}}}),Vo="_",jo="a",zo="b",Yo="c",Jo="d",Uo="e",qo="f",Zo={VisibleRectMarker:Vo,Layout:jo,Main:zo,Main___doc:Yo,Main___hero:Jo,Main___nonInteractive:Uo,Overlay:qo},Xo={$style:Zo},Ko=I(Fo,[["__cssModules",Xo]]),Qo={Layout:Ko,enhanceApp({}){}};function xe(e){if(e.extends){const t=xe(e.extends);return{...t,...e,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const z=xe(Qo),ea=M({name:"VitePressApp",setup(){const{site:e}=Y();return $(()=>{H(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&ft(),gt(),bt(),z.setup&&z.setup(),()=>yt(z.Layout)}});async function ta(){const e=sa(),t=na();t.provide(lt,e);const s=it(e.route);return t.provide(ct,s),t.component("Content",ut),t.component("ClientOnly",_t),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),z.enhanceApp&&await z.enhanceApp({app:t,router:e,siteData:vt}),{app:t,router:e,data:s}}function na(){return dt(ea)}function sa(){let e=ae,t;return pt(s=>{let n=mt(s),o=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o=ht(()=>import(n),__vite__mapDeps([]))),ae&&(e=!1),o},z.NotFound)}ae&&ta().then(({app:e,router:t,data:s})=>{t.go().then(()=>{rt(t.route,s.site),e.mount("#app")})});export{ta as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}