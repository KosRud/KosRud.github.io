import{d as N,b as R,o as _,c as p,f as ue,n as c,_ as M,y as Me,z as Ie,r as m,A as ke,B as Le,C as qe,D as ne,E as Te,G as Ze,H as Xe,I as Ke,J as Qe,K as et,L as tt,M as nt,v as L,x as Q,N as ee,O as A,P as F,Q as J,m as _e,u as i,R as oe,e as f,i as $,w as E,j as se,t as x,F as H,h as j,p as T,g as C,S as st,T as we,U as ot,V as at,W as rt,X as it,Y as lt,Z as ie,$ as ct,a0 as ut,a1 as _t,a2 as dt,a3 as vt,a4 as pt,a5 as mt,a6 as ht,a7 as ft,a8 as gt,a9 as bt,aa as yt,ab as $t,ac as Nt,ad as Mt}from"./chunks/framework.oytdgtbb.js";import{a as B,u as Ce,B as It,_ as pe}from"./chunks/BackTop.ChWYl9Wu.js";const kt=N({__name:"LayoutNavItemText",props:{level:{},bold:{type:Boolean},compact:{type:Boolean}},setup(e){const t=e,s=R(()=>Math.round(Math.min(Math.max(t.level,0),2)));return(n,o)=>(_(),p("div",{class:c([n.$style.NavItem_text,s.value==0?n.$style.NavItem_text___level0:"",s.value==1?n.$style.NavItem_text___level1:"",s.value==2?n.$style.NavItem_text___level2:"",t.bold?n.$style.NavItem_text___active:"",t.compact?n.$style.NavItem_text___compact:""])},[ue(n.$slots,"default")],2))}}),Lt="Db",Tt="Eb",wt="Fb",Ct="Gb",Ht="Hb",Ot="Ib",St="Jb",At={DarkMode:Lt,NavItem_text:Tt,NavItem_text___active:wt,NavItem_text___level0:Ct,NavItem_text___level1:Ht,NavItem_text___level2:Ot,NavItem_text___compact:St},Pt={$style:At},He=M(kt,[["__cssModules",Pt]]);/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Oe;const ae=e=>Oe=e,Se=Symbol();function le(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var K;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(K||(K={}));function Bt(){const e=Ie(!0),t=e.run(()=>m({}));let s=[],n=[];const o=ke({install(a){ae(o),o._a=a,a.provide(Se,o),a.config.globalProperties.$pinia=o,n.forEach(r=>s.push(r)),n=[]},use(a){return!this._a&&!Ke?n.push(a):s.push(a),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return o}const Ae=()=>{};function me(e,t,s,n=Ae){e.push(t);const o=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),n())};return!s&&et()&&tt(o),o}function z(e,...t){e.slice().forEach(s=>{s(...t)})}const Et=e=>e();function ce(e,t){e instanceof Map&&t instanceof Map&&t.forEach((s,n)=>e.set(n,s)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const n=t[s],o=e[s];le(o)&&le(n)&&e.hasOwnProperty(s)&&!ne(n)&&!Te(n)?e[s]=ce(o,n):e[s]=n}return e}const xt=Symbol();function Dt(e){return!le(e)||!e.hasOwnProperty(xt)}const{assign:G}=Object;function Gt(e){return!!(ne(e)&&e.effect)}function Rt(e,t,s,n){const{state:o,actions:a,getters:r}=t,u=s.state.value[e];let h;function d(){u||(s.state.value[e]=o?o():{});const l=nt(s.state.value[e]);return G(l,a,Object.keys(r||{}).reduce((I,b)=>(I[b]=ke(R(()=>{ae(s);const v=s._s.get(e);return r[b].call(v,v)})),I),{}))}return h=Pe(e,d,t,s,n,!0),h}function Pe(e,t,s={},n,o,a){let r;const u=G({actions:{}},s),h={deep:!0};let d,l,I=[],b=[],v;const P=n.state.value[e];!a&&!P&&(n.state.value[e]={}),m({});let te;function D(y){let g;d=l=!1,typeof y=="function"?(y(n.state.value[e]),g={type:K.patchFunction,storeId:e,events:v}):(ce(n.state.value[e],y),g={type:K.patchObject,payload:y,storeId:e,events:v});const S=te=Symbol();Qe().then(()=>{te===S&&(d=!0)}),l=!0,z(I,g,n.state.value[e])}const U=a?function(){const{state:g}=s,S=g?g():{};this.$patch(W=>{G(W,S)})}:Ae;function ve(){r.stop(),I=[],b=[],n._s.delete(e)}function ze(y,g){return function(){ae(n);const S=Array.from(arguments),W=[],Z=[];function Je(w){W.push(w)}function Ue(w){Z.push(w)}z(b,{args:S,name:y,store:O,after:Je,onError:Ue});let X;try{X=g.apply(this&&this.$id===e?this:O,S)}catch(w){throw z(Z,w),w}return X instanceof Promise?X.then(w=>(z(W,w),w)).catch(w=>(z(Z,w),Promise.reject(w))):(z(W,X),X)}}const Ye={_p:n,$id:e,$onAction:me.bind(null,b),$patch:D,$reset:U,$subscribe(y,g={}){const S=me(I,y,g.detached,()=>W()),W=r.run(()=>Le(()=>n.state.value[e],Z=>{(g.flush==="sync"?l:d)&&y({storeId:e,type:K.direct,events:v},Z)},G({},h,g)));return S},$dispose:ve},O=qe(Ye);n._s.set(e,O);const q=(n._a&&n._a.runWithContext||Et)(()=>n._e.run(()=>(r=Ie()).run(t)));for(const y in q){const g=q[y];if(ne(g)&&!Gt(g)||Te(g))a||(P&&Dt(g)&&(ne(g)?g.value=P[y]:ce(g,P[y])),n.state.value[e][y]=g);else if(typeof g=="function"){const S=ze(y,g);q[y]=S,u.actions[y]=g}}return G(O,q),G(Ze(O),q),Object.defineProperty(O,"$state",{get:()=>n.state.value[e],set:y=>{D(g=>{G(g,y)})}}),n._p.forEach(y=>{G(O,r.run(()=>y({store:O,app:n._a,pinia:n,options:u})))}),P&&a&&s.hydrate&&s.hydrate(O.$state,P),d=!0,l=!0,O}function Ft(e,t,s){let n,o;const a=typeof t=="function";typeof e=="string"?(n=e,o=a?s:t):(o=e,n=e.id);function r(u,h){const d=Xe();return u=u||(d?Me(Se,null):null),u&&ae(u),u=Oe,u._s.has(n)||(a?Pe(n,t,o,u):Rt(n,o,u)),u._s.get(n)}return r.$id=n,r}const Wt={height:480,width:720};function Vt(){function e(){const t=k();t.viewportSize.width=document.documentElement.clientWidth,t.viewportSize.height=document.documentElement.clientHeight}jt(e)}function jt(e){L(()=>{e(),window.addEventListener("resize",e,{passive:!0})}),Q(()=>{window.removeEventListener("resize",e)})}function zt(){Yt(()=>{const e=k();e.activeHeadingId=Jt()})}function Yt(e){Q(()=>{window.removeEventListener("scroll",e)}),ee(()=>{e()}),L(()=>{window.addEventListener("scroll",e,{passive:!0}),A(e)})}function Jt(){const e=k(),t=Be(e.tocItems);return t?t.element.id:e.tocItems[0]?e.tocItems[0].element.id:""}function Be(e){const t=k();for(const s of e.slice().reverse()){const n=Be(s.children);if(n)return n;const o=s.element.getBoundingClientRect(),a=parseInt(window.getComputedStyle(s.element).marginTop);if(o.top<t.visibleAreaRectTop+a)return s}}function Ut(){const e=k();function t(){e.tocItems=qt()}L(()=>A(t)),ee(t)}function qt(){const e=k();if(!e.contentForToc)return[];const t=e.contentForToc.$el,s=Array.from(t.querySelectorAll("h1, h2, h3")).flatMap(r=>{var h;const u=(h=Array.from(r.childNodes).find(d=>d.nodeType==Node.TEXT_NODE&&d.textContent))==null?void 0:h.textContent;if(u){const d=Zt(r.tagName);return d!=null?[{level:d,children:[],element:r,title:u.trim(),utilityHeading:!1}]:[]}else return console.error("Error while trying to build TOC from headings. Heading is missing a title",r),[]}),n=[];let o=0;for(;;){const{heading:r,index:u}=Ee(s,o,1);if(r)n.push(r),o=u;else break}const a=document.querySelector(`#${B.page.content}`);return a&&n.unshift({children:[],utilityHeading:!0,level:0,title:"(to beginning)",element:a}),n}function Zt(e){const t=["H1","H2","H3","H4","H5","H6"].findIndex(s=>s==e);return t!=-1?t+1:(console.error(`Invalid heading tag: ${e}`),null)}function Ee(e,t,s){const n=e[t];if(!n||n.level<s)return{heading:null,index:t};for(t++;;){const{heading:o,index:a}=Ee(e,t,n.level+1);if(o)n.children.push(o),t=a;else break}return{heading:n,index:t}}function Xt(){const e=F(),t=k();L(()=>{A(()=>{e.path,t.isMobileNavPagesOpen=!1})}),ee(()=>{t.isMobileNavPagesOpen=!1})}const V=(e,t)=>{const s=/\.[^.]+$/;e=encodeURI(e.replace(s,"")),t=encodeURI(t.replace(s,""));const n={inside:!1,exact:!1};return t==e&&(n.exact=!0),e.slice(0,t.length)==t&&(n.inside=!0),n};function de(e){return e.url=="/"||!e.children?e:e.children[0]?de(e.children[0]):(console.error("Navitem has an empty children list:",e),{title:"Home",url:"/"})}function Kt(e){const t=F(),s=m(!1);function n(){s.value=V(t.path,e).exact}return ee(n),A(n),s}function Qt(){const e=k(),t=F(),{site:s}=J();L(()=>{A(()=>{var n;e.navMain=[{title:"Home",url:"/"}].concat(s.value.themeConfig.nav),e.navSecondary=((n=s.value.themeConfig.nav.find(o=>V(t.path,o.url).inside))==null?void 0:n.children)??[]})})}const k=Ft("counter",{state:()=>{const e=m(null),t=m(null),s=m(Wt),n=m([]),o=m(""),a=m(!1),r=m(!1),u=m([]),h=m([]),d=m(!1),l=m(!1);return{contentForToc:e,VisibleAreaMarker:t,viewportSize:s,tocItems:n,activeHeadingId:o,isViewportNarrow:d,isHeaderNavOverlapping:l,isMobileNavPagesOpen:a,isMobileNavTocOpen:r,navMain:u,navSecondary:h}},getters:{isCompactModeActive:e=>e.isHeaderNavOverlapping||e.isViewportNarrow,visibleAreaRectTop:e=>e.VisibleAreaMarker?e.VisibleAreaMarker.getBoundingClientRect().top:(console.log("Visible area marker was not initialized"),0),isMobileNavAnythingOpen:e=>e.isMobileNavPagesOpen||e.isMobileNavTocOpen}});function en(){const e=k();Vt(),zt(),Ut(),Qt(),Xt();const t=function(n){e.isViewportNarrow=n.matches};let s=null;return L(()=>{s=matchMedia("screen and (width < 75em)"),s.addEventListener("change",t),e.isViewportNarrow=s.matches}),Q(()=>{s==null||s.removeEventListener("change",t)}),e}function xe(e,t){Ge(e)&&e.scrollIntoView({block:t})}const De=.5;function he(e,t){return t-e>De}function fe(e,t){return e-t>De}function Ge(e,t){if(!t){if(!e.parentElement)return!1;t=e.parentElement}const s=t.getBoundingClientRect(),n=e.getBoundingClientRect();return he(n.left,s.left)||fe(n.right,s.right)||he(n.top,s.top)||fe(n.bottom,s.bottom)?!0:t.parentElement?Ge(e,t.parentElement):!1}const tn=["aria-current"],nn=["href"],sn={key:0},on=N({__name:"LayoutNavTocItem",props:{heading:{},level:{},isTocLoaded:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){_e(u=>({"55d0d702":i(o)-1}));const s=e,n=t,o=s.level??1,a=R(()=>k().activeHeadingId==s.heading.element.id);L(()=>{A(()=>{!a.value||!r.value||!s.isTocLoaded||r.value&&xe(r.value,"center")})});const r=m(null);return(u,h)=>{const d=oe("LayoutNavTocItem",!0);return _(),p("li",{class:c(u.$style.TocItem),"aria-current":a.value?"location":void 0},[f("a",{class:c([u.$style.TocItem_link,a.value?u.$style.TocItem_link___active:""]),href:`#${s.heading.element.id}`,onClick:h[0]||(h[0]=l=>n("jumpedToItem")),ref:l=>{r.value=l}},[$(He,{level:i(o),bold:a.value&&!s.heading.utilityHeading,class:c([u.$style.TocItem_linkText,s.heading.utilityHeading?u.$style.TocItem_linkText___utilityHeading:""])},{default:E(()=>[se(x(s.heading.title),1)]),_:1},8,["level","bold","class"])],10,nn),s.heading.children.length!=0?(_(),p("ul",sn,[(_(!0),p(H,null,j(s.heading.children,l=>(_(),T(d,{heading:l,level:i(o)+1,onJumpedToItem:h[1]||(h[1]=I=>n("jumpedToItem")),"is-toc-loaded":s.isTocLoaded},null,8,["heading","level","is-toc-loaded"]))),256))])):C("",!0)],10,tn)}}}),an="mb",rn="nb",ln="ob",cn="pb",un="qb",_n={DarkMode:an,TocItem:rn,TocItem_link:ln,TocItem_link___active:cn,TocItem_linkText___utilityHeading:un},dn={$style:_n},vn=M(on,[["__cssModules",dn]]),pn=["id"],mn=N({__name:"LayoutNavToc",props:{isMobile:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){const s=e,n=t,o=k(),a=m(!1);return L(()=>{a.value=!0}),(r,u)=>(_(),p("nav",{tabindex:"-1",id:i(B).page.toc,"aria-label":"Table of contents",class:c([r.$style.Toc,s.isMobile?r.$style.Toc___mobile:""])},[f("h2",{"aria-hidden":!0,class:c(r.$style.Toc_title)}," On this page: ",2),f("div",{class:c(r.$style.Toc_content)},[f("ul",{class:c(r.$style.Toc_itemList)},[(_(!0),p(H,null,j(i(o).tocItems,h=>(_(),T(vn,{key:h.element.id,heading:h,onJumpedToItem:u[0]||(u[0]=d=>n("jumpedToItem")),isTocLoaded:a.value},null,8,["heading","isTocLoaded"]))),128))],2)],2)],10,pn))}}),hn="R_",fn="S_",gn="T_",bn="U_",yn="V_",$n="W_",Nn={DarkMode:hn,Toc:fn,Toc_title:gn,Toc___mobile:bn,Toc_content:yn,Toc_itemList:$n},Mn={$style:Nn},ge=M(mn,[["__cssModules",Mn]]),Re=Symbol();function In(e){const t=m(e);return st(Re,t),t}function Fe(){return Me(Re)??m(!1)}function We(e){const t=m(null);function s(o){if(t.value==o){t.value=null;return}t.value=o}function n(o){return t.value==o}return{idOpenChild:t,toggleChild:s,isChildOpen:n}}const kn="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='16'%20viewBox='0%200%208%2014'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-chevron-right'%3e%3cpolyline%20points='1%2013%207%207%201%201'%3e%3c/polyline%3e%3c/svg%3e",Ln=["level","aria-current"],Tn=["href"],wn=N({__name:"LayoutNavPagesItem",props:{navItem:{},depth:{},startingLevel:{},isOpen:{type:Boolean},isNavPagesLoaded:{type:Boolean}},emits:["navItemToggle"],setup(e,{emit:t}){_e(v=>({"77b25700":d.value,cf81fd20:r,"2eba421a":n.navItem.children?"visible":"hidden"}));const s=t,n=e,o=F(),a=k(),r=`url("${kn}")`,u=We((n.navItem.children??[]).map(v=>v.url));for(const v of n.navItem.children??[])V(o.path,v.url).inside&&u.toggleChild(v.url);function h(v){u.toggleChild(v.url),v.children||(a.isMobileNavPagesOpen=!1)}const d=R(()=>n.depth??0),l=Kt(n.navItem.url),I=Fe(),b=m(null);return L(()=>{A(()=>{!b.value||!n.isNavPagesLoaded||xe(b.value,d.value==0?"center":"nearest")})}),(v,P)=>{const te=oe("LayoutNavPagesItem",!0);return _(),p("li",{level:d.value,class:c([v.$style.NavItem,i(I)?v.$style.Dark:"",v.isOpen?v.$style.NavItem___open:""]),"aria-current":i(l)?"page":void 0},[f("a",{href:v.$props.navItem.children?"javascript:":n.navItem.url,class:c([v.$style.NavItem_link]),onClick:P[0]||(P[0]=D=>s("navItemToggle")),ref:D=>{b.value=D}},[$(He,{level:d.value+v.startingLevel,class:c(v.$style.NavItem_linkText),bold:i(l)},{default:E(()=>[se(x(n.navItem.title),1)]),_:1},8,["level","class","bold"])],10,Tn),f("div",{class:c(v.$style.NavItem_childrenListWrapper)},[$(we,{"enter-from-class":v.$style.NavItem_childrenList___enterFrom,"enter-to-class":v.$style.NavItem_childrenList___enterTo,"enter-active-class":v.$style.NavItem_childrenList___enterActive,"leave-from-class":v.$style.NavItem_childrenList___leaveFrom,"leave-to-class":v.$style.NavItem_childrenList___leaveTo,"leave-active-class":v.$style.NavItem_childrenList___leaveActive},{default:E(()=>{var D;return[v.isOpen&&((D=n.navItem.children)!=null&&D.length)?(_(),p("ul",{key:0,class:c(v.$style.NavItem_childrenList)},[(_(!0),p(H,null,j(n.navItem.children,U=>(_(),T(te,{depth:d.value+1,"starting-level":v.startingLevel,"nav-item":U,onNavItemToggle:ve=>h(U),"is-open":i(u).isChildOpen(U.url),"is-nav-pages-loaded":n.isNavPagesLoaded},null,8,["depth","starting-level","nav-item","onNavItemToggle","is-open","is-nav-pages-loaded"]))),256))],2)):C("",!0)]}),_:1},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"])],2)],10,Ln)}}}),Cn="rb",Hn="sb",On="tb",Sn="ub",An="vb",Pn="wb",Bn="xb",En="yb",xn="zb",Dn="Ab",Gn="Bb",Rn="Cb",Fn={DarkMode:Cn,NavItem:Hn,NavItem_link:On,NavItem___open:Sn,NavItem_childrenListWrapper:An,Dark:Pn,NavItem_childrenList___enterFrom:Bn,NavItem_childrenList___enterTo:En,NavItem_childrenList___enterActive:xn,NavItem_childrenList___leaveFrom:Dn,NavItem_childrenList___leaveTo:Gn,NavItem_childrenList___leaveActive:Rn},Wn={$style:Fn},Vn=M(wn,[["__cssModules",Wn]]),jn=["id","aria-label"],zn=N({__name:"LayoutNavPages",props:{mobile:{type:Boolean}},setup(e){const{site:t}=J(),s=e,n=F(),o=k(),a=R(()=>s.mobile?o.navMain:o.navSecondary),r=m(!1);L(()=>{r.value=!0});const u=R(()=>{var l;return s.mobile?"Menu":(((l=t.value.themeConfig.nav.find(I=>V(n.path,I.url).inside))==null?void 0:l.title)??"").concat("/")}),h=We(a.value.map(l=>l.url));for(const l of a.value)V(n.path,l.url).inside&&h.toggleChild(l.url);function d(l){h.toggleChild(l.url),l.children||(o.isMobileNavPagesOpen=!1)}return(l,I)=>(_(),p("nav",{tabindex:"-1",id:i(B).page.subMenu,"aria-label":`Submenu: ${u.value}`,class:c([l.$style.NavPages,s.mobile?l.$style.NavPages___mobile:""])},[a.value.length>0?(_(),p(H,{key:0},[f("h2",{"aria-hidden":"true",class:c(l.$style.NavPages_title)},x(u.value),3),f("ul",{class:c(l.$style.NavPages_itemList)},[(_(!0),p(H,null,j(a.value,b=>(_(),T(Vn,{"starting-level":s.mobile?0:1,"nav-item":b,"is-open":i(h).isChildOpen(b.url),onNavItemToggle:v=>d(b),"is-nav-pages-loaded":r.value},null,8,["starting-level","nav-item","is-open","onNavItemToggle","is-nav-pages-loaded"]))),256))],2)],64)):C("",!0)],10,jn))}}),Yn="F_",Jn="G_",Un="H_",qn="I_",Zn={NavPages:Yn,NavPages_title:Jn,NavPages_itemList:Un,NavPages___mobile:qn},Xn={$style:Zn},be=M(zn,[["__cssModules",Xn]]),Kn=["aria-current"],Qn=["aria-current","href"],es=N({__name:"LayoutHeaderNavItem",props:{navItem:{}},setup(e){const t=F(),s=e,n=R(()=>{const o=V(t.path,s.navItem.url);return s.navItem.url=="/"?o.exact:o.inside});return(o,a)=>(_(),p("li",{class:c([o.$style.NavItem,n.value?o.$style.NavItem___active:""]),"aria-current":n.value?"page":void 0},[f("a",{class:c(o.$style.NavItem_link),"aria-current":n.value?!0:void 0,href:i(de)(s.navItem).url},x(s.navItem.title),11,Qn)],10,Kn))}}),ts="Kb",ns="Lb",ss="Mb",os="Nb",as={DarkMode:ts,NavItem:ns,NavItem___active:ss,NavItem_link:os},rs={$style:as},is=M(es,[["__cssModules",rs]]),ls=N({__name:"LayoutHeaderNav",setup(e){const t=k(),s=m(null),n=m(null);return(o,a)=>(_(),p("nav",{class:c(o.$style.HeaderNav),"aria-label":"Main menu",ref:r=>{n.value=r}},[f("ul",{ref:r=>{s.value=r}},[(_(!0),p(H,null,j(i(t).navMain,r=>(_(),T(is,{"nav-item":r},null,8,["nav-item"]))),256))],512)],2))}}),cs="bb",us={HeaderNav:cs},_s={$style:us},ds=M(ls,[["__cssModules",_s]]),vs=N({__name:"LayoutHeaderButtonBurger",props:{title:{},isOpen:{type:Boolean},toggleIsOpen:{type:Function},numLines:{},compact:{type:Boolean}},setup(e){const t=e;return(s,n)=>(_(),p("button",{class:c({[s.$style.BurgerWrapper]:!0,[s.$style.open]:t.isOpen}),onClick:n[0]||(n[0]=(...o)=>t.toggleIsOpen&&t.toggleIsOpen(...o))},[f("div",{class:c(s.$style.Burger_title)},x(t.title),3),t.compact?C("",!0):(_(),p("div",{key:0,class:c(s.$style.Burger)},[(_(!0),p(H,null,j(s.numLines,o=>(_(),p("div",{class:c(s.$style.Burger_line)},null,2))),256))],2))],2))}}),ps="db",ms="eb",hs="fb",fs="gb",gs="hb",bs={BurgerWrapper:ps,open:ms,Burger_title:hs,Burger:fs,Burger_line:gs},ys={$style:bs},ye=M(vs,[["__cssModules",ys]]),$s=["href"],Ns=N({__name:"LayoutHeaderSkip",props:{title:{},anchorId:{}},setup(e){const t=e;return(s,n)=>(_(),p("a",{class:c(s.$style.SkipLink),href:`#${t.anchorId}`},"Skip to "+x(t.title),11,$s))}}),Ms="cb",Is={SkipLink:Ms},ks={$style:Is},re=M(Ns,[["__cssModules",ks]]),Ls=N({__name:"LayoutHeader",setup(e){_e(l=>({"9223f6c8":a.value,"5d67c155":i(t).isCompactModeActive?"visible":"hidden","38efce72":i(t).isCompactModeActive&&i(t).tocItems.length?"visible":"hidden"}));const t=k(),s=m(null),n=m(null),o=m(null),a=m("visible"),r=m(!1);u();function u(){let l=null;const I=b=>{r.value=b.matches};L(()=>{l=window.matchMedia("screen and (width < 20rem)"),l.addEventListener("change",I),r.value=l.matches}),Q(()=>l==null?void 0:l.removeEventListener("change",I))}Ce(()=>{h(),d()},()=>s.value,!0);function h(){if(!n.value){console.error("logo ref not set");return}const l=n.value.nextElementSibling;l&&(n.value.getBoundingClientRect().right>l.getBoundingClientRect().left?a.value="hidden":a.value="visible")}function d(){if(!o.value){console.error("Header_navWrapper ref not set");return}const l=o.value.lastElementChild;l&&(t.isHeaderNavOverlapping=l.getBoundingClientRect().right>o.value.getBoundingClientRect().right)}return(l,I)=>(_(),p("header",{class:c(l.$style.Header),role:"banner",ref:b=>{s.value=b}},[$(re,{class:c(l.$style.Header_skipLink),title:"content","anchor-id":i(B).page.content},null,8,["class","anchor-id"]),i(t).isCompactModeActive?C("",!0):(_(),p(H,{key:0},[i(t).navSecondary.length?(_(),T(re,{key:0,class:c(l.$style.Header_skipLink),title:"submenu","anchor-id":i(B).page.subMenu},null,8,["class","anchor-id"])):C("",!0),i(t).tocItems.length?(_(),T(re,{key:1,class:c(l.$style.Header_skipLink),title:"outline","anchor-id":i(B).page.toc},null,8,["class","anchor-id"])):C("",!0)],64)),f("div",{class:c(l.$style.Header_logoWrapper),ref:b=>{n.value=b}},[f("img",{class:c(l.$style.Header_logo),src:ot,alt:"website logo",title:"website logo",style:{aspectRatio:1}},null,2)],2),f("div",{class:c(l.$style.Header_spacer)},null,2),f("div",{class:c(l.$style.Header_navWrapper),ref:b=>{o.value=b}},[$(ds,{style:at({visibility:i(t).isCompactModeActive?"hidden":"visible"}),class:c(l.$style.Header_nav)},null,8,["style","class"])],2),$(ye,{class:c(l.$style.BurgerToc),title:"On this page","is-open":i(t).isMobileNavTocOpen,"toggle-is-open":()=>{i(t).isMobileNavTocOpen=!i(t).isMobileNavTocOpen},compact:r.value,"num-lines":3},null,8,["class","is-open","toggle-is-open","compact"]),$(ye,{class:c(l.$style.BurgerMenu),title:"Menu","is-open":i(t).isMobileNavPagesOpen,"toggle-is-open":()=>{i(t).isMobileNavPagesOpen=!i(t).isMobileNavPagesOpen},compact:r.value,"num-lines":5},null,8,["class","is-open","toggle-is-open","compact"])],2))}}),Ts="w_",ws="x_",Cs="y_",Hs="z_",Os="A_",Ss="B_",As="C_",Ps="D_",Bs="E_",Es={Header:Ts,Header_skipLink:ws,Header_logoWrapper:Cs,Header_logo:Hs,Header_spacer:Os,Header_navWrapper:Ss,Header_nav:As,BurgerMenu:Ps,BurgerToc:Bs},xs={$style:Es},Ds=M(Ls,[["__cssModules",xs]]),Gs=N({__name:"LayoutNavMobile",props:{isOpen:{type:Boolean},setIsOpen:{type:Function}},setup(e){const t=e,s=m(null);return L(()=>{function n(o){s.value&&(s.value.contains(o.target)||t.setIsOpen(!1))}A(()=>{t.isOpen?window.requestAnimationFrame(()=>window.addEventListener("click",n)):window.removeEventListener("click",n)})}),(n,o)=>(_(),T(we,{"enter-from-class":n.$style.NavMobile___enterFrom,"enter-to-class":n.$style.NavMobile___enterTo,"enter-active-class":n.$style.NavMobile___enterActive,"leave-from-class":n.$style.NavMobile___leaveFrom,"leave-to-class":n.$style.NavMobile___leaveTo,"leave-active-class":n.$style.NavMobile___leaveActive},{default:E(()=>[t.isOpen?(_(),p("div",{key:0,class:c([n.$style.NavMobile]),ref:a=>{s.value=a}},[ue(n.$slots,"default",{close:()=>t.setIsOpen(!1)})],2)):C("",!0)]),_:3},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"]))}}),Rs="J_",Fs="K_",Ws="L_",Vs="M_",js="N_",zs="O_",Ys="P_",Js="Q_",Us={DarkMode:Rs,NavMobile:Fs,NavMobile___enterFrom:Ws,NavMobile___enterTo:Vs,NavMobile___enterActive:js,NavMobile___leaveFrom:zs,NavMobile___leaveTo:Ys,NavMobile___leaveActive:Js},qs={$style:Us},$e=M(Gs,[["__cssModules",qs]]),Zs=N({__name:"LayoutOverlay",setup(e){const t=k(),s=rt();return A(()=>{var n,o;t.isMobileNavAnythingOpen?(n=document.querySelector("body"))==null||n.classList.add(s.noScroll):(o=document.querySelector("body"))==null||o.classList.remove(s.noScroll)}),(n,o)=>(_(),p("div",{class:c([i(s).Overlay,i(t).isMobileNavAnythingOpen?i(s).Overlay___shaded:""])},[$(Ds,{class:c(i(s).Header)},null,8,["class"]),f("div",{class:c(i(s).NavContainer)},[i(t).isCompactModeActive?C("",!0):(_(),p(H,{key:0},[f("div",{class:c(i(s).NavPagesWrapper)},[i(t).navSecondary.length?(_(),T(be,{key:0,class:c(i(s).NavPages)},null,8,["class"])):C("",!0)],2),f("div",{"aria-hidden":"true",class:c(i(s).Overlay_spacer___content)},null,2),f("div",{class:c(i(s).TocWrapper)},[i(t).tocItems.length?(_(),T(ge,{key:0,class:c(i(s).Toc)},null,8,["class"])):C("",!0)],2)],64)),$($e,{class:c(i(s).NavMobile),isOpen:i(t).isMobileNavTocOpen,setIsOpen:a=>{i(t).isMobileNavTocOpen=a}},{default:E(({close:a})=>[$(ge,{"is-mobile":"",onJumpedToItem:a},null,8,["onJumpedToItem"])]),_:1},8,["class","isOpen","setIsOpen"]),$($e,{class:c(i(s).NavMobile),isOpen:i(t).isMobileNavPagesOpen,setIsOpen:a=>{i(t).isMobileNavPagesOpen=a}},{default:E(()=>[$(be,{mobile:""})]),_:1},8,["class","isOpen","setIsOpen"])],2)],2))}}),Xs="R",Ks="S",Qs="T",eo="U",to="V",no="W",so="X",oo="Y",ao="Z",ro="__",io="a_",lo={noScroll:Xs,Overlay:Ks,Header:Qs,NavContainer:eo,Overlay_spacer___content:to,Overlay___shaded:no,NavPagesWrapper:so,NavPages:oo,TocWrapper:ao,Toc:ro,NavMobile:io},co={$style:lo},uo=M(Zs,[["__cssModules",co]]),_o={};function vo(e,t){return _(),p("p",null,"Page not found")}const po=M(_o,[["render",vo]]);function Ve(){const e=F(),{site:t,frontmatter:s}=J();return R(()=>{function n(o){for(const r of o){const u=V(e.path,r.url);if(u.exact)return[r];if(u.inside&&r.children)return[r,...n(r.children)]}return[{title:mo(s,e),url:e.path}]}return[{title:"Home",url:"/",children:t.value.themeConfig.nav},...n(t.value.themeConfig.nav)]})}function mo(e,t){if(e.value.title)return e.value.title;const s=t.path.match(/[^\/]+$/);if(s){const o=decodeURI(s[0]).replace(/\.[^.]+$/,"");return o.charAt(0).toUpperCase()+o.slice(1)}return"Unknown page"}const ho=500,fo=N({__name:"MarkdownWrapper",setup(e){const t=m(null),s=m(!1),n=Ve();return Ce(()=>{if(!t.value){console.error("markdown container element ref not set");return}s.value=t.value.clientWidth<ho},()=>t.value,!0),(o,a)=>(_(),p("div",{ref:r=>{t.value=r},class:c([o.$style.Markdown,s.value?o.$style.Markdown___narrow:""])},[f("h1",null,x(i(n)[i(n).length-1].title),1),ue(o.$slots,"default")],2))}}),go="ib",bo="jb",yo="kb",$o="lb",No={DarkMode:go,Markdown:bo,copy:yo,Markdown___narrow:$o},Mo={$style:No},Io=M(fo,[["__cssModules",Mo]]),ko=["aria-current","href"],Lo=N({__name:"YouAreHere",setup(e){const t=Fe(),s=Ve();return(n,o)=>(_(),p("div",{tabindex:-1,class:c([n.$style.YouAreHere,i(t)?n.$style.YouAreHere___dark:""])},[f("h2",{class:c(n.$style.YouAreHere_title)},"You are here:",2),(_(!0),p(H,null,j(i(s),(a,r)=>(_(),p(H,null,[f("a",{"aria-current":r==i(s).length-1?"page":void 0,href:i(de)(a).url},x(a==null?void 0:a.title),9,ko),f("span",{class:c(n.$style.NavTrace_separator)},"/",2)],64))),256))],2))}}),To="X_",wo="Y_",Co="Z_",Ho="_b",Oo="ab",So={DarkMode:To,YouAreHere:wo,YouAreHere___dark:Co,YouAreHere_title:Ho,NavTrace_separator:Oo},Ao={$style:So},Po=M(Lo,[["__cssModules",Ao]]),Bo=["id"],Eo=N({__name:"LayoutMainDoc",setup(e){const{page:t}=J(),s=k();return(n,o)=>{const a=oe("Content");return _(),p("div",{class:c(n.$style.Doc),tabindex:"-1",id:i(B).page.content},[f("div",{class:c(n.$style.YouAreHere)},[$(Po)],2),f("main",null,[i(t).isNotFound?(_(),T(po,{key:0})):(_(),T(Io,{key:1,class:c(n.$style.Markdown)},{default:E(()=>[$(a,{ref:r=>{i(s).contentForToc=r}},null,512)]),_:1},8,["class"]))]),$(It)],10,Bo)}}}),xo="b_",Do="c_",Go="d_",Ro={Doc:xo,YouAreHere:Do,Markdown:Go},Fo={$style:Ro},Wo=M(Eo,[["__cssModules",Fo]]),Vo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20d='M8%200c4.42%200%208%203.58%208%208a8.013%208.013%200%200%201-5.45%207.59c-.4.08-.55-.17-.55-.38%200-.27.01-1.13.01-2.2%200-.75-.25-1.23-.54-1.48%201.78-.2%203.65-.88%203.65-3.95%200-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12%200%200-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68%200-1.36.09-2%20.27-1.53-1.03-2.2-.82-2.2-.82-.44%201.1-.16%201.92-.08%202.12-.51.56-.82%201.28-.82%202.15%200%203.06%201.86%203.75%203.64%203.95-.23.2-.44.55-.51%201.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82%201.13.16.45.68%201.31%202.69.94%200%20.67.01%201.3.01%201.49%200%20.21-.15.45-.55.38A7.995%207.995%200%200%201%200%208c0-4.42%203.58-8%208-8Z'%3e%3c/path%3e%3c/svg%3e",jo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24'%20height='24'%3e%3cpath%20d='M12%20.25a.75.75%200%200%201%20.673.418l3.058%206.197%206.839.994a.75.75%200%200%201%20.415%201.279l-4.948%204.823%201.168%206.811a.751.751%200%200%201-1.088.791L12%2018.347l-6.117%203.216a.75.75%200%200%201-1.088-.79l1.168-6.812-4.948-4.823a.75.75%200%200%201%20.416-1.28l6.838-.993L11.328.668A.75.75%200%200%201%2012%20.25Zm0%202.445L9.44%207.882a.75.75%200%200%201-.565.41l-5.725.832%204.143%204.038a.748.748%200%200%201%20.215.664l-.978%205.702%205.121-2.692a.75.75%200%200%201%20.698%200l5.12%202.692-.977-5.702a.748.748%200%200%201%20.215-.664l4.143-4.038-5.725-.831a.75.75%200%200%201-.565-.41L12%202.694Z'%3e%3c/path%3e%3c/svg%3e",zo={class:"Github"},Yo=["src"],Jo=["src"],Uo=N({__name:"GitHubStars.ce",props:{repo:{type:String}},setup(e){const t=e,s=m(0);async function n(o){try{const a=await fetch(`https://api.github.com/repos/${o}`);return a.ok?(await a.json()).stargazers_count??null:null}catch{return null}}return L(async()=>{const o=`github stars: ${t.repo}`;function a(d){const l=localStorage.getItem(d);if(!l)return null;try{return JSON.parse(l)}catch{return localStorage.removeItem(d),null}}const r=a(o);if((r==null?void 0:r.timeStamp)!=null&&(r==null?void 0:r.stars)!=null){const d=(Date.now()-r.timeStamp)/1e3,l=3600;if(d<300||d<l&&r.stars!=-1){s.value=r.stars;return}}const u=await n(t.repo);if(!u){const d={stars:-1,timeStamp:Date.now()};localStorage.setItem(o,JSON.stringify(d));return}s.value=u;const h={stars:u,timeStamp:Date.now()};localStorage.setItem(o,JSON.stringify(h))}),(o,a)=>(_(),p("div",zo,[$(pe,{href:`https://github.com/${o.repo}`,class:"Github_box Github_box___repo"},{default:E(()=>[f("img",{class:"Github_icon",src:i(Vo),alt:"github icon","aria-hidden":"true"},null,8,Yo),se(" GitHub ")]),_:1},8,["href"]),s.value!=-1?(_(),T(pe,{key:0,href:`https://github.com/${o.repo}`,class:"Github_box Github_box___stars"},{default:E(()=>[f("img",{alt:"stars",class:"Github_icon Github_icon___star",src:i(jo)},null,8,Jo),se(" "+x(s.value),1)]),_:1},8,["href"])):C("",!0)]))}}),qo='.Github{display:flex;flex-direction:row;align-items:center;gap:12rem}.Github_box{border:1rem solid #c0c0c0;border-radius:3rem;background-color:#fff;padding:6rem 12rem;display:flex;flex-direction:row;align-items:center;gap:6rem;text-decoration:none}.Github_box,.Github_box:link,.Github_box:visited{color:#000}.Github_box___repo{box-shadow:0 0 2rem #0003,0 -2rem 4rem #0002 inset;font-weight:700}.Github_box___repo:hover:not(:active){box-shadow:0 0 2rem #0003,0 -2rem 4rem #0004 inset}.Github_box___repo:hover:hover,.Github_box___repo:hover:visited:hover,.Github_box___repo:hover:link:hover{color:#0969da}.Github_box___stars{gap:1.5rem;padding-left:6rem;padding-right:6rem;font-weight:400;position:relative}.Github_box___stars:before,.Github_box___stars:after{content:"";position:absolute;aspect-ratio:1;right:100%;top:50%;transform-origin:center;transform:translateY(-50%) translate(-50%) rotate(-90deg) scaleY(2) scaleX(1)}.Github_box___stars:before{border:6rem solid transparent;border-bottom-color:silver}.Github_box___stars:after{border:5rem solid transparent;border-bottom-color:#fff}.Github_box___stars:hover{border-color:#0969da}.Github_box___stars:hover:before{border-bottom-color:#0969da}.Github_icon{vertical-align:middle;height:1.3em}.Github_icon___star{height:1.2em}.Github{position:relative;z-index:0}.Github_box___repo{z-index:1}.Github_box___stars{z-index:0}.Github_box___repo{transition:box-shadow .2s linear,background-color .1s linear,color .1s linear}.Github_box___repo:active{transition:background-color .1s linear}.Github_box___stars,.Github_box___stars:before{transition:border-color .2s linear}',Zo=M(Uo,[["styles",[qo]]]),Xo=it(Zo);function Ko(){L(()=>{customElements.define("github-stars",Xo)})}function Qo(){const e=F();L(()=>{document.addEventListener("click",Ne)}),Q(()=>document.removeEventListener("click",Ne)),Le(()=>e.path,()=>{const t=location.href.replace(/#.*$/,"");location.href=`${t}#${B.page.root}`})}function Ne(e){var s,n;let t=e.target;for(;t;){if(t.tagName=="A"){const o=(s=t.getAttribute)==null?void 0:s.call(t,"href");if(!o)return;if(o.charAt(0)=="#"){const a=document.querySelector(o);a&&((n=a==null?void 0:a.focus)==null||n.call(a,{preventScroll:!0}))}return}t=t.parentElement??null}}const ea=["id"],ta=["inert"],na=N({__name:"Layout",setup(e){var n;Ko(),Qo();const{frontmatter:t}=J();(n=lt())==null||n.appContext.app.use(Bt());const s=en();return In(!1),ee(()=>{t.value.title||console.warn("Frontmatter title empty")}),(o,a)=>{const r=oe("Content");return _(),p("div",{class:c(o.$style.Layout),tabindex:"-1",id:i(B).page.root},[$(uo,{class:c(o.$style.Overlay)},null,8,["class"]),i(t).hero?(_(),p("div",{key:1,inert:i(s).isMobileNavAnythingOpen?!0:void 0,class:c([o.$style.Main,o.$style.Main___hero,i(s).isMobileNavAnythingOpen?o.$style.Main___nonInteractive:""])},[$(r)],10,ta)):(_(),T(Wo,{key:0,inert:i(s).isMobileNavAnythingOpen?!0:void 0,class:c([o.$style.Main,o.$style.Main___doc,i(s).isMobileNavAnythingOpen?o.$style.Main___nonInteractive:""])},null,8,["inert","class"])),f("div",{"aria-hidden":"true",class:c(o.$style.VisibleRectMarker),ref:u=>{i(s).VisibleAreaMarker=u}},null,2)],10,ea)}}}),sa="b",oa="c",aa="d",ra="e",ia="f",la="g",ca="h",ua={VisibleRectMarker:sa,Layout:oa,Main:aa,Main___doc:ra,Main___hero:ia,Main___nonInteractive:la,Overlay:ca},_a={$style:ua},da=M(na,[["__cssModules",_a]]),va={Layout:da,enhanceApp({}){}};function je(e){if(e.extends){const t=je(e.extends);return{...t,...e,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const Y=je(va),pa=N({name:"VitePressApp",setup(){const{site:e}=J();return L(()=>{A(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&yt(),$t(),Nt(),Y.setup&&Y.setup(),()=>Mt(Y.Layout)}});async function ma(){const e=fa(),t=ha();t.provide(ut,e);const s=_t(e.route);return t.provide(dt,s),t.component("Content",vt),t.component("ClientOnly",pt),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),Y.enhanceApp&&await Y.enhanceApp({app:t,router:e,siteData:mt}),{app:t,router:e,data:s}}function ha(){return ht(pa)}function fa(){let e=ie,t;return ft(s=>{let n=gt(s),o=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o=bt(()=>import(n),__vite__mapDeps([]))),ie&&(e=!1),o},Y.NotFound)}ie&&ma().then(({app:e,router:t,data:s})=>{t.go().then(()=>{ct(t.route,s.site),e.mount("#app")})});export{ma as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}