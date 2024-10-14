import{d as $,b as F,o as _,c as p,f as _e,n as c,_ as M,x as Le,r as m,y as Te,z as qe,A as Xe,B as we,C as Ze,D as te,E as Oe,G as Ke,H as Qe,I as et,J as tt,K as nt,L as st,s as I,v as Q,M as ee,N as A,O as D,P as U,k as de,u as i,Q as se,e as g,i as N,w as B,j as ne,t as E,F as C,h as j,l as L,g as O,T as Ce,R as ot,S as at,U as rt,V as it,W as lt,X as le,Y as ct,Z as ut,$ as _t,a0 as dt,a1 as vt,a2 as pt,a3 as mt,a4 as ht,a5 as ft,a6 as gt,a7 as yt,a8 as bt,a9 as Nt,aa as $t}from"./chunks/framework.CBd7paq1.js";import{a as P,u as Se,B as Mt,i as It,_ as he}from"./chunks/BackTop.CzbOVeyC.js";const kt=$({__name:"LayoutNavItemText",props:{level:{},bold:{type:Boolean},compact:{type:Boolean}},setup(e){const t=e,n=F(()=>Math.round(Math.min(Math.max(t.level,0),2)));return(s,o)=>(_(),p("div",{class:c([s.$style.NavItem_text,n.value==0?s.$style.NavItem_text___level0:"",n.value==1?s.$style.NavItem_text___level1:"",n.value==2?s.$style.NavItem_text___level2:"",t.bold?s.$style.NavItem_text___active:"",t.compact?s.$style.NavItem_text___compact:""])},[_e(s.$slots,"default")],2))}}),Lt="Aa",Tt="Ba",wt="Ca",Ot="Da",Ct="Ea",St="Fa",Ht="Ga",At={DarkMode:Lt,NavItem_text:Tt,NavItem_text___active:wt,NavItem_text___level0:Ot,NavItem_text___level1:Ct,NavItem_text___level2:St,NavItem_text___compact:Ht},Pt={$style:At},He=M(kt,[["__cssModules",Pt]]);/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Ae;const oe=e=>Ae=e,Pe=Symbol();function ce(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var K;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(K||(K={}));function Bt(){const e=Le(!0),t=e.run(()=>m({}));let n=[],s=[];const o=Te({install(a){oe(o),o._a=a,a.provide(Pe,o),a.config.globalProperties.$pinia=o,s.forEach(r=>n.push(r)),s=[]},use(a){return!this._a&&!qe?s.push(a):n.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const Be=()=>{};function fe(e,t,n,s=Be){e.push(t);const o=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),s())};return!n&&et()&&tt(o),o}function Y(e,...t){e.slice().forEach(n=>{n(...t)})}const Et=e=>e(),ge=Symbol(),re=Symbol();function ue(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,s)=>e.set(s,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],o=e[n];ce(o)&&ce(s)&&e.hasOwnProperty(n)&&!te(s)&&!Oe(s)?e[n]=ue(o,s):e[n]=s}return e}const xt=Symbol();function Gt(e){return!ce(e)||!e.hasOwnProperty(xt)}const{assign:R}=Object;function Rt(e){return!!(te(e)&&e.effect)}function Ft(e,t,n,s){const{state:o,actions:a,getters:r}=t,u=n.state.value[e];let h;function v(){u||(n.state.value[e]=o?o():{});const l=st(n.state.value[e]);return R(l,a,Object.keys(r||{}).reduce((b,d)=>(b[d]=Te(F(()=>{oe(n);const S=n._s.get(e);return r[d].call(S,S)})),b),{}))}return h=Ee(e,v,t,n,s,!0),h}function Ee(e,t,n={},s,o,a){let r;const u=R({actions:{}},n),h={deep:!0};let v,l,b=[],d=[],S;const x=s.state.value[e];!a&&!x&&(s.state.value[e]={}),m({});let G;function V(y){let f;v=l=!1,typeof y=="function"?(y(s.state.value[e]),f={type:K.patchFunction,storeId:e,events:S}):(ue(s.state.value[e],y),f={type:K.patchObject,payload:y,storeId:e,events:S});const T=G=Symbol();nt().then(()=>{G===T&&(v=!0)}),l=!0,Y(b,f,s.state.value[e])}const pe=a?function(){const{state:f}=n,T=f?f():{};this.$patch(z=>{R(z,T)})}:Be;function ze(){r.stop(),b=[],d=[],s._s.delete(e)}const me=(y,f="")=>{if(ge in y)return y[re]=f,y;const T=function(){oe(s);const z=Array.from(arguments),X=[],ae=[];function Je(w){X.push(w)}function Ue(w){ae.push(w)}Y(d,{args:z,name:T[re],store:H,after:Je,onError:Ue});let Z;try{Z=y.apply(this&&this.$id===e?this:H,z)}catch(w){throw Y(ae,w),w}return Z instanceof Promise?Z.then(w=>(Y(X,w),w)).catch(w=>(Y(ae,w),Promise.reject(w))):(Y(X,Z),Z)};return T[ge]=!0,T[re]=f,T},Ye={_p:s,$id:e,$onAction:fe.bind(null,d),$patch:V,$reset:pe,$subscribe(y,f={}){const T=fe(b,y,f.detached,()=>z()),z=r.run(()=>we(()=>s.state.value[e],X=>{(f.flush==="sync"?l:v)&&y({storeId:e,type:K.direct,events:S},X)},R({},h,f)));return T},$dispose:ze},H=Ze(Ye);s._s.set(e,H);const q=(s._a&&s._a.runWithContext||Et)(()=>s._e.run(()=>(r=Le()).run(()=>t({action:me}))));for(const y in q){const f=q[y];if(te(f)&&!Rt(f)||Oe(f))a||(x&&Gt(f)&&(te(f)?f.value=x[y]:ue(f,x[y])),s.state.value[e][y]=f);else if(typeof f=="function"){const T=me(f,y);q[y]=T,u.actions[y]=f}}return R(H,q),R(Ke(H),q),Object.defineProperty(H,"$state",{get:()=>s.state.value[e],set:y=>{V(f=>{R(f,y)})}}),s._p.forEach(y=>{R(H,r.run(()=>y({store:H,app:s._a,pinia:s,options:u})))}),x&&a&&n.hydrate&&n.hydrate(H.$state,x),v=!0,l=!0,H}function Dt(e,t,n){let s,o;const a=typeof t=="function";s=e,o=a?n:t;function r(u,h){const v=Qe();return u=u||(v?Xe(Pe,null):null),u&&oe(u),u=Ae,u._s.has(s)||(a?Ee(s,t,o,u):Ft(s,o,u)),u._s.get(s)}return r.$id=s,r}const Wt={height:480,width:720};function jt(){function e(){const t=k();t.viewportSize.width=document.documentElement.clientWidth,t.viewportSize.height=document.documentElement.clientHeight}Vt(e)}function Vt(e){I(()=>{e(),window.addEventListener("resize",e,{passive:!0})}),Q(()=>{window.removeEventListener("resize",e)})}function zt(){Yt(()=>{const e=k();e.activeHeadingId=Jt()})}function Yt(e){Q(()=>{window.removeEventListener("scroll",e)}),ee(()=>{e()}),I(()=>{window.addEventListener("scroll",e,{passive:!0}),A(e)})}function Jt(){const e=k(),t=xe(e.tocItems);return t?t.element.id:e.tocItems[0]?e.tocItems[0].element.id:""}function xe(e){const t=k();for(const n of e.slice().reverse()){const s=xe(n.children);if(s)return s;const o=n.element.getBoundingClientRect(),a=parseInt(window.getComputedStyle(n.element).marginTop);if(o.top<t.visibleAreaRectTop+a)return n}}function Ut(){const e=k();function t(){e.tocItems=qt()}I(()=>A(t)),ee(t)}function qt(){const e=k();if(!e.contentForToc)return[];const t=e.contentForToc.$el,n=Array.from(t.querySelectorAll("h1, h2, h3")).flatMap(r=>{var h;const u=(h=Array.from(r.childNodes).find(v=>v.nodeType==Node.TEXT_NODE&&v.textContent))==null?void 0:h.textContent;if(u){const v=Xt(r.tagName);return v!=null?[{level:v,children:[],element:r,title:u.trim(),utilityHeading:!1}]:[]}else return console.error("Error while trying to build TOC from headings. Heading is missing a title",r),[]}),s=[];let o=0;for(;;){const{heading:r,index:u}=Ge(n,o,1);if(r)s.push(r),o=u;else break}const a=document.querySelector(`#${P.page.content}`);return a&&s.unshift({children:[],utilityHeading:!0,level:0,title:"(to beginning)",element:a}),s}function Xt(e){const t=["H1","H2","H3","H4","H5","H6"].findIndex(n=>n==e);return t!=-1?t+1:(console.error(`Invalid heading tag: ${e}`),null)}function Ge(e,t,n){const s=e[t];if(!s||s.level<n)return{heading:null,index:t};for(t++;;){const{heading:o,index:a}=Ge(e,t,s.level+1);if(o)s.children.push(o),t=a;else break}return{heading:s,index:t}}function Zt(){const e=D(),t=k();I(()=>{A(()=>{e.path,t.isMobileNavPagesOpen=!1})}),ee(()=>{t.isMobileNavPagesOpen=!1})}const W=(e,t)=>{const n=/\.[^.]+$/;e=encodeURI(e.replace(n,"")),t=encodeURI(t.replace(n,""));const s={inside:!1,exact:!1};return t==e&&(s.exact=!0),e.slice(0,t.length)==t&&(s.inside=!0),s};function ve(e){return e.url=="/"||!e.children?e:e.children[0]?ve(e.children[0]):(console.error("Navitem has an empty children list:",e),{title:"Home",url:"/"})}function Kt(e){const t=D(),n=m(!1);function s(){n.value=W(t.path,e).exact}return ee(s),A(s),n}function Qt(){const e=k(),t=D(),{site:n}=U();I(()=>{A(()=>{var s;e.navMain=[{title:"Home",url:"/"}].concat(n.value.themeConfig.nav),e.navSecondary=((s=n.value.themeConfig.nav.find(o=>W(t.path,o.url).inside))==null?void 0:s.children)??[]})})}const k=Dt("counter",{state:()=>{const e=m(null),t=m(null),n=m(Wt),s=m([]),o=m(""),a=m(!1),r=m(!1),u=m([]),h=m([]),v=m(!1),l=m(!1);return{contentForToc:e,VisibleAreaMarker:t,viewportSize:n,tocItems:s,activeHeadingId:o,isViewportNarrow:v,isHeaderNavOverlapping:l,isMobileNavPagesOpen:a,isMobileNavTocOpen:r,navMain:u,navSecondary:h}},getters:{isCompactModeActive:e=>e.isHeaderNavOverlapping||e.isViewportNarrow,visibleAreaRectTop:e=>e.VisibleAreaMarker?e.VisibleAreaMarker.getBoundingClientRect().top:(console.error("Visible area marker was not initialized"),0),isMobileNavAnythingOpen:e=>e.isMobileNavPagesOpen||e.isMobileNavTocOpen}});function en(){const e=k();jt(),zt(),Ut(),Qt(),Zt();const t=function(s){e.isViewportNarrow=s.matches};let n=null;return I(()=>{n=matchMedia("screen and (width < 75em)"),n.addEventListener("change",t),e.isViewportNarrow=n.matches}),Q(()=>{n==null||n.removeEventListener("change",t)}),e}function Re(e,t){De(e)&&e.scrollIntoView({block:t})}const Fe=.5;function ye(e,t){return t-e>Fe}function be(e,t){return e-t>Fe}function De(e,t){if(!t){if(!e.parentElement)return!1;t=e.parentElement}const n=t.getBoundingClientRect(),s=e.getBoundingClientRect();return ye(s.left,n.left)||be(s.right,n.right)||ye(s.top,n.top)||be(s.bottom,n.bottom)?!0:t.parentElement?De(e,t.parentElement):!1}const tn=["aria-current"],nn=["href"],sn={key:0},on=$({__name:"LayoutNavTocItem",props:{heading:{},level:{},isTocLoaded:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){de(u=>({"3fdf84d4":i(o)-1}));const n=e,s=t,o=n.level??1,a=F(()=>k().activeHeadingId==n.heading.element.id);I(()=>{A(()=>{!a.value||!r.value||!n.isTocLoaded||r.value&&Re(r.value,"center")})});const r=m(null);return(u,h)=>{const v=se("LayoutNavTocItem",!0);return _(),p("li",{class:c(u.$style.TocItem),"aria-current":a.value?"location":void 0},[g("a",{class:c([u.$style.TocItem_link,a.value?u.$style.TocItem_link___active:""]),href:`#${n.heading.element.id}`,onClick:h[0]||(h[0]=l=>s("jumpedToItem")),ref:l=>{r.value=l}},[N(He,{level:i(o),bold:a.value&&!n.heading.utilityHeading,class:c([u.$style.TocItem_linkText,n.heading.utilityHeading?u.$style.TocItem_linkText___utilityHeading:""])},{default:B(()=>[ne(E(n.heading.title),1)]),_:1},8,["level","bold","class"])],10,nn),n.heading.children.length!=0?(_(),p("ul",sn,[(_(!0),p(C,null,j(n.heading.children,l=>(_(),L(v,{heading:l,level:i(o)+1,onJumpedToItem:h[1]||(h[1]=b=>s("jumpedToItem")),"is-toc-loaded":n.isTocLoaded},null,8,["heading","level","is-toc-loaded"]))),256))])):O("",!0)],10,tn)}}}),an="ka",rn="la",ln="ma",cn="na",un="oa",_n={DarkMode:an,TocItem:rn,TocItem_link:ln,TocItem_link___active:cn,TocItem_linkText___utilityHeading:un},dn={$style:_n},vn=M(on,[["__cssModules",dn]]),pn=["id"],mn=$({__name:"LayoutNavToc",props:{isMobile:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){const n=e,s=t,o=k(),a=m(!1);return I(()=>{a.value=!0}),(r,u)=>(_(),p("nav",{tabindex:"-1",id:i(P).page.toc,"aria-label":"Table of contents",class:c([r.$style.Toc,n.isMobile?r.$style.Toc___mobile:""])},[g("h2",{"aria-hidden":!0,class:c(r.$style.Toc_title)}," On this page: ",2),g("div",{class:c(r.$style.Toc_content)},[g("ul",{class:c(r.$style.Toc_itemList)},[(_(!0),p(C,null,j(i(o).tocItems,h=>(_(),L(vn,{key:h.element.id,heading:h,onJumpedToItem:u[0]||(u[0]=v=>s("jumpedToItem")),isTocLoaded:a.value},null,8,["heading","isTocLoaded"]))),128))],2)],2)],10,pn))}}),hn="N_",fn="O_",gn="P_",yn="Q_",bn="R_",Nn="S_",$n={DarkMode:hn,Toc:fn,Toc_title:gn,Toc___mobile:yn,Toc_content:bn,Toc_itemList:Nn},Mn={$style:$n},Ne=M(mn,[["__cssModules",Mn]]);function We(e){const t=m(null);function n(o){if(t.value==o){t.value=null;return}t.value=o}function s(o){return t.value==o}return{idOpenChild:t,toggleChild:n,isChildOpen:s}}const In="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='16'%20viewBox='0%200%208%2014'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-chevron-right'%3e%3cpolyline%20points='1%2013%207%207%201%201'%3e%3c/polyline%3e%3c/svg%3e",kn=["level","aria-current"],Ln=["href"],Tn=$({__name:"LayoutNavPagesItem",props:{navItem:{},depth:{},startingLevel:{},isOpen:{type:Boolean},isNavPagesLoaded:{type:Boolean}},emits:["navItemToggle"],setup(e,{emit:t}){de(d=>({"37429e8b":v.value,34235876:r,"518e81fe":s.navItem.children?"visible":"hidden"}));const n=t,s=e,o=D(),a=k(),r=`url("${In}")`,u=We((s.navItem.children??[]).map(d=>d.url));for(const d of s.navItem.children??[])W(o.path,d.url).inside&&u.toggleChild(d.url);function h(d){u.toggleChild(d.url),d.children||(a.isMobileNavPagesOpen=!1)}const v=F(()=>s.depth??0),l=Kt(s.navItem.url),b=m(null);return I(()=>{A(()=>{!b.value||!s.isNavPagesLoaded||Re(b.value,v.value==0?"center":"nearest")})}),(d,S)=>{const x=se("LayoutNavPagesItem",!0);return _(),p("li",{level:v.value,class:c([d.$style.NavItem,d.isOpen?d.$style.NavItem___open:""]),"aria-current":i(l)?"page":void 0},[g("a",{href:d.$props.navItem.children?"javascript:":s.navItem.url,class:c([d.$style.NavItem_link]),onClick:S[0]||(S[0]=G=>n("navItemToggle")),ref:G=>{b.value=G}},[N(He,{level:v.value+d.startingLevel,class:c(d.$style.NavItem_linkText),bold:i(l)},{default:B(()=>[ne(E(s.navItem.title),1)]),_:1},8,["level","class","bold"])],10,Ln),g("div",{class:c(d.$style.NavItem_childrenListWrapper)},[N(Ce,{"enter-from-class":d.$style.NavItem_childrenList___enterFrom,"enter-to-class":d.$style.NavItem_childrenList___enterTo,"enter-active-class":d.$style.NavItem_childrenList___enterActive,"leave-from-class":d.$style.NavItem_childrenList___leaveFrom,"leave-to-class":d.$style.NavItem_childrenList___leaveTo,"leave-active-class":d.$style.NavItem_childrenList___leaveActive},{default:B(()=>{var G;return[d.isOpen&&((G=s.navItem.children)!=null&&G.length)?(_(),p("ul",{key:0,class:c(d.$style.NavItem_childrenList)},[(_(!0),p(C,null,j(s.navItem.children,V=>(_(),L(x,{depth:v.value+1,"starting-level":d.startingLevel,"nav-item":V,onNavItemToggle:pe=>h(V),"is-open":i(u).isChildOpen(V.url),"is-nav-pages-loaded":s.isNavPagesLoaded},null,8,["depth","starting-level","nav-item","onNavItemToggle","is-open","is-nav-pages-loaded"]))),256))],2)):O("",!0)]}),_:1},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"])],2)],10,kn)}}}),wn="pa",On="qa",Cn="ra",Sn="sa",Hn="ta",An="ua",Pn="va",Bn="wa",En="xa",xn="ya",Gn="za",Rn={DarkMode:wn,NavItem:On,NavItem_link:Cn,NavItem___open:Sn,NavItem_childrenListWrapper:Hn,NavItem_childrenList___enterFrom:An,NavItem_childrenList___enterTo:Pn,NavItem_childrenList___enterActive:Bn,NavItem_childrenList___leaveFrom:En,NavItem_childrenList___leaveTo:xn,NavItem_childrenList___leaveActive:Gn},Fn={$style:Rn},Dn=M(Tn,[["__cssModules",Fn]]),Wn=["id","aria-label"],jn=$({__name:"LayoutNavPages",props:{mobile:{type:Boolean}},setup(e){const{site:t}=U(),n=e,s=D(),o=k(),a=F(()=>n.mobile?o.navMain:o.navSecondary),r=m(!1);I(()=>{r.value=!0});const u=F(()=>{var l;return n.mobile?"Menu":(((l=t.value.themeConfig.nav.find(b=>W(s.path,b.url).inside))==null?void 0:l.title)??"").concat("/")}),h=We(a.value.map(l=>l.url));for(const l of a.value)W(s.path,l.url).inside&&h.toggleChild(l.url);function v(l){h.toggleChild(l.url),l.children||(o.isMobileNavPagesOpen=!1)}return(l,b)=>(_(),p("nav",{tabindex:"-1",id:i(P).page.subMenu,"aria-label":`Submenu: ${u.value}`,class:c([l.$style.NavPages,n.mobile?l.$style.NavPages___mobile:""])},[a.value.length>0?(_(),p(C,{key:0},[g("h2",{"aria-hidden":"true",class:c(l.$style.NavPages_title)},E(u.value),3),g("ul",{class:c(l.$style.NavPages_itemList)},[(_(!0),p(C,null,j(a.value,d=>(_(),L(Dn,{"starting-level":n.mobile?0:1,"nav-item":d,"is-open":i(h).isChildOpen(d.url),onNavItemToggle:S=>v(d),"is-nav-pages-loaded":r.value},null,8,["starting-level","nav-item","is-open","onNavItemToggle","is-nav-pages-loaded"]))),256))],2)],64)):O("",!0)],10,Wn))}}),Vn="v_",zn="w_",Yn="x_",Jn="y_",Un={NavPages:Vn,NavPages_title:zn,NavPages_itemList:Yn,NavPages___mobile:Jn},qn={$style:Un},$e=M(jn,[["__cssModules",qn]]),Xn="/favicon.svg",Zn=["aria-current"],Kn=["aria-current","href"],Qn=$({__name:"LayoutHeaderNavItem",props:{navItem:{}},setup(e){const t=D(),n=e,s=F(()=>{const o=W(t.path,n.navItem.url);return n.navItem.url=="/"?o.exact:o.inside});return(o,a)=>(_(),p("li",{class:c([o.$style.NavItem,s.value?o.$style.NavItem___active:""]),"aria-current":s.value?"page":void 0},[g("a",{class:c(o.$style.NavItem_link),"aria-current":s.value?!0:void 0,href:i(ve)(n.navItem).url},E(n.navItem.title),11,Kn)],10,Zn))}}),es="Ha",ts="Ia",ns="Ja",ss="Ka",os={DarkMode:es,NavItem:ts,NavItem___active:ns,NavItem_link:ss},as={$style:os},rs=M(Qn,[["__cssModules",as]]),is=$({__name:"LayoutHeaderNav",setup(e){const t=k(),n=m(null),s=m(null);return(o,a)=>(_(),p("nav",{class:c(o.$style.HeaderNav),"aria-label":"Main menu",ref:r=>{s.value=r}},[g("ul",{ref:r=>{n.value=r}},[(_(!0),p(C,null,j(i(t).navMain,r=>(_(),L(rs,{"nav-item":r},null,8,["nav-item"]))),256))],512)],2))}}),ls="ja",cs={HeaderNav:ls},us={$style:cs},_s=M(is,[["__cssModules",us]]),ds=$({__name:"LayoutHeaderButtonBurger",props:{title:{},isOpen:{type:Boolean},toggleIsOpen:{type:Function},numLines:{},compact:{type:Boolean}},setup(e){const t=e;return(n,s)=>(_(),p("button",{class:c({[n.$style.BurgerWrapper]:!0,[n.$style.open]:t.isOpen}),onClick:s[0]||(s[0]=(...o)=>t.toggleIsOpen&&t.toggleIsOpen(...o))},[g("div",{class:c(n.$style.Burger_title)},E(t.title),3),t.compact?O("",!0):(_(),p("div",{key:0,class:c(n.$style.Burger)},[(_(!0),p(C,null,j(n.numLines,o=>(_(),p("div",{class:c(n.$style.Burger_line)},null,2))),256))],2))],2))}}),vs="da",ps="ea",ms="fa",hs="ga",fs="ha",gs={BurgerWrapper:vs,open:ps,Burger_title:ms,Burger:hs,Burger_line:fs},ys={$style:gs},Me=M(ds,[["__cssModules",ys]]),bs=["href"],Ns=$({__name:"LayoutHeaderSkipLink",props:{title:{},anchorId:{}},setup(e){const t=e;return(n,s)=>(_(),p("a",{class:c(n.$style.SkipLink),href:`#${t.anchorId}`},"Skip to "+E(t.title),11,bs))}}),$s="ia",Ms={SkipLink:$s},Is={$style:Ms},ie=M(Ns,[["__cssModules",Is]]),ks=$({__name:"LayoutHeader",setup(e){de(l=>({"482a79cd":a.value,"5ec3aa46":i(t).isCompactModeActive?"visible":"hidden",d63fb2be:i(t).isCompactModeActive&&i(t).tocItems.length?"visible":"hidden"}));const t=k(),n=m(null),s=m(null),o=m(null),a=m("visible"),r=m(!1);u();function u(){let l=null;const b=d=>{r.value=d.matches};I(()=>{l=window.matchMedia("screen and (width < 20rem)"),l.addEventListener("change",b),r.value=l.matches}),Q(()=>l==null?void 0:l.removeEventListener("change",b))}Se(()=>{h(),v()},()=>n.value);function h(){if(!s.value){console.error("logo ref not set");return}const l=s.value.nextElementSibling;l&&(s.value.getBoundingClientRect().right>l.getBoundingClientRect().left?a.value="hidden":a.value="visible")}function v(){if(!o.value){console.error("Header_navWrapper ref not set");return}const l=o.value.lastElementChild;l&&(t.isHeaderNavOverlapping=l.getBoundingClientRect().right>o.value.getBoundingClientRect().right)}return(l,b)=>(_(),p("header",{class:c(l.$style.Header),role:"banner",ref:d=>{n.value=d}},[N(ie,{class:c(l.$style.Header_skipLink),title:"content","anchor-id":i(P).page.content},null,8,["class","anchor-id"]),i(t).isCompactModeActive?O("",!0):(_(),p(C,{key:0},[i(t).navSecondary.length?(_(),L(ie,{key:0,class:c(l.$style.Header_skipLink),title:"submenu","anchor-id":i(P).page.subMenu},null,8,["class","anchor-id"])):O("",!0),i(t).tocItems.length?(_(),L(ie,{key:1,class:c(l.$style.Header_skipLink),title:"outline","anchor-id":i(P).page.toc},null,8,["class","anchor-id"])):O("",!0)],64)),g("div",{class:c(l.$style.Header_logoWrapper),ref:d=>{s.value=d}},[g("img",{class:c(l.$style.Header_logo),src:Xn,alt:"website logo",title:"website logo",style:{aspectRatio:1}},null,2)],2),g("div",{class:c(l.$style.Header_spacer)},null,2),g("div",{class:c(l.$style.Header_navWrapper),ref:d=>{o.value=d}},[N(_s,{style:ot({visibility:i(t).isCompactModeActive?"hidden":"visible"}),class:c(l.$style.Header_nav)},null,8,["style","class"])],2),N(Me,{class:c(l.$style.BurgerToc),title:"On this page","is-open":i(t).isMobileNavTocOpen,"toggle-is-open":()=>{i(t).isMobileNavTocOpen=!i(t).isMobileNavTocOpen},compact:r.value,"num-lines":3},null,8,["class","is-open","toggle-is-open","compact"]),N(Me,{class:c(l.$style.BurgerMenu),title:"Menu","is-open":i(t).isMobileNavPagesOpen,"toggle-is-open":()=>{i(t).isMobileNavPagesOpen=!i(t).isMobileNavPagesOpen},compact:r.value,"num-lines":5},null,8,["class","is-open","toggle-is-open","compact"])],2))}}),Ls="A_",Ts="B_",ws="C_",Os="D_",Cs="E_",Ss="F_",Hs="G_",As="H_",Ps="I_",Bs={Header:Ls,Header_skipLink:Ts,Header_logoWrapper:ws,Header_logo:Os,Header_spacer:Cs,Header_navWrapper:Ss,Header_nav:Hs,BurgerMenu:As,BurgerToc:Ps},Es={$style:Bs},xs=M(ks,[["__cssModules",Es]]),Gs=$({__name:"LayoutNavMobile",props:{isOpen:{type:Boolean},setIsOpen:{type:Function}},setup(e){const t=e,n=m(null);return I(()=>{function s(o){n.value&&(n.value.contains(o.target)||t.setIsOpen(!1))}A(()=>{t.isOpen?window.requestAnimationFrame(()=>window.addEventListener("click",s)):window.removeEventListener("click",s)})}),(s,o)=>(_(),L(Ce,{"enter-from-class":s.$style.NavMobile___enterFrom,"enter-to-class":s.$style.NavMobile___enterTo,"enter-active-class":s.$style.NavMobile___enterActive,"leave-from-class":s.$style.NavMobile___leaveFrom,"leave-to-class":s.$style.NavMobile___leaveTo,"leave-active-class":s.$style.NavMobile___leaveActive},{default:B(()=>[t.isOpen?(_(),p("div",{key:0,class:c([s.$style.NavMobile]),ref:a=>{n.value=a}},[_e(s.$slots,"default",{close:()=>t.setIsOpen(!1)})],2)):O("",!0)]),_:3},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"]))}}),Rs="X_",Fs="Y_",Ds="Z_",Ws="_a",js="-a",Vs="aa",zs="ba",Ys="ca",Js={DarkMode:Rs,NavMobile:Fs,NavMobile___enterFrom:Ds,NavMobile___enterTo:Ws,NavMobile___enterActive:js,NavMobile___leaveFrom:Vs,NavMobile___leaveTo:zs,NavMobile___leaveActive:Ys},Us={$style:Js},Ie=M(Gs,[["__cssModules",Us]]),qs=$({__name:"LayoutOverlay",setup(e){const t=k(),n=at();return I(()=>{A(()=>{var s,o;t.isMobileNavAnythingOpen?(s=document.querySelector("body"))==null||s.classList.add(n.noScroll):(o=document.querySelector("body"))==null||o.classList.remove(n.noScroll)})}),(s,o)=>(_(),p("div",{class:c([i(n).Overlay,i(t).isMobileNavAnythingOpen?i(n).Overlay___shaded:""])},[N(xs,{class:c(i(n).Header)},null,8,["class"]),g("div",{class:c(i(n).NavContainer)},[i(t).isCompactModeActive?O("",!0):(_(),p(C,{key:0},[g("div",{class:c(i(n).NavPagesWrapper)},[i(t).navSecondary.length?(_(),L($e,{key:0,class:c(i(n).NavPages)},null,8,["class"])):O("",!0)],2),g("div",{"aria-hidden":"true",class:c(i(n).Overlay_spacer___content)},null,2),g("div",{class:c(i(n).TocWrapper)},[i(t).tocItems.length?(_(),L(Ne,{key:0,class:c(i(n).Toc)},null,8,["class"])):O("",!0)],2)],64)),N(Ie,{class:c(i(n).NavMobile),isOpen:i(t).isMobileNavTocOpen,setIsOpen:a=>{i(t).isMobileNavTocOpen=a}},{default:B(({close:a})=>[N(Ne,{"is-mobile":"",onJumpedToItem:a},null,8,["onJumpedToItem"])]),_:1},8,["class","isOpen","setIsOpen"]),N(Ie,{class:c(i(n).NavMobile),isOpen:i(t).isMobileNavPagesOpen,setIsOpen:a=>{i(t).isMobileNavPagesOpen=a}},{default:B(()=>[N($e,{mobile:""})]),_:1},8,["class","isOpen","setIsOpen"])],2)],2))}}),Xs="V",Zs="W",Ks="X",Qs="Y",eo="Z",to="__",no="-_",so="a_",oo="b_",ao="c_",ro="d_",io={noScroll:Xs,Overlay:Zs,Header:Ks,NavContainer:Qs,Overlay_spacer___content:eo,Overlay___shaded:to,NavPagesWrapper:no,NavPages:so,TocWrapper:oo,Toc:ao,NavMobile:ro},lo={$style:io},co=M(qs,[["__cssModules",lo]]),uo={};function _o(e,t){return _(),p("p",null,"Page not found")}const vo=M(uo,[["render",_o]]);function je(){const e=D(),{site:t,frontmatter:n}=U();return F(()=>{function s(o){for(const r of o){const u=W(e.path,r.url);if(u.exact)return[r];if(u.inside&&r.children)return[r,...s(r.children)]}return[{title:po(n,e),url:e.path}]}return[{title:"Home",url:"/",children:t.value.themeConfig.nav},...s(t.value.themeConfig.nav)]})}function po(e,t){if(e.value.title)return e.value.title;const n=t.path.match(/[^\/]+$/);if(n){const o=decodeURI(n[0]).replace(/\.[^.]+$/,"");return o.charAt(0).toUpperCase()+o.slice(1)}return"Unknown page"}const mo=500,ho=$({__name:"MarkdownWrapper",setup(e){const t=m(null),n=m(!1),s=je();return Se(()=>{if(!t.value){console.error("markdown container element ref not set");return}n.value=t.value.clientWidth<mo},()=>t.value),(o,a)=>(_(),p("div",{ref:r=>{t.value=r},class:c([o.$style.Markdown,n.value?o.$style.Markdown___narrow:""])},[g("h1",null,E(i(s)[i(s).length-1].title),1),_e(o.$slots,"default")],2))}}),fo="T_",go="U_",yo="V_",bo="W_",No={DarkMode:fo,Markdown:go,copy:yo,Markdown___narrow:bo},$o={$style:No},Mo=M(ho,[["__cssModules",$o]]),Io=["aria-current","href"],ko=$({__name:"YouAreHere",setup(e){const t=je();return(n,s)=>(_(),p("div",{tabindex:-1,class:c(n.$style.YouAreHere)},[g("h2",{class:c(n.$style.YouAreHere_title)},"You are here:",2),(_(!0),p(C,null,j(i(t),(o,a)=>(_(),p(C,null,[g("a",{"aria-current":a==i(t).length-1?"page":void 0,href:i(ve)(o).url},E(o==null?void 0:o.title),9,Io),g("span",{class:c(n.$style.NavTrace_separator)}," / ",2)],64))),256))],2))}}),Lo="J_",To="K_",wo="L_",Oo="M_",Co={DarkMode:Lo,YouAreHere:To,YouAreHere_title:wo,NavTrace_separator:Oo},So={$style:Co},Ho=M(ko,[["__cssModules",So]]),Ao=["id"],Po=$({__name:"LayoutMainDoc",setup(e){const{page:t}=U(),n=k();return(s,o)=>{const a=se("Content");return _(),p("main",{class:c(s.$style.Doc),tabindex:"-1",id:i(P).page.content},[g("div",{class:c(s.$style.YouAreHere)},[N(Ho)],2),i(t).isNotFound?(_(),L(vo,{key:0})):(_(),L(Mo,{key:1,class:c(s.$style.Markdown)},{default:B(()=>[N(a,{ref:r=>{i(n).contentForToc=r}},null,512)]),_:1},8,["class"])),N(Mt)],10,Ao)}}}),Bo="S",Eo="T",xo="U",Go={Doc:Bo,YouAreHere:Eo,Markdown:xo},Ro={$style:Go},Fo=M(Po,[["__cssModules",Ro]]),Do=Symbol();function Wo(e){const t=m(e);return rt(Do,t),t}const jo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24'%20height='24'%3e%3cpath%20d='M12%20.25a.75.75%200%200%201%20.673.418l3.058%206.197%206.839.994a.75.75%200%200%201%20.415%201.279l-4.948%204.823%201.168%206.811a.751.751%200%200%201-1.088.791L12%2018.347l-6.117%203.216a.75.75%200%200%201-1.088-.79l1.168-6.812-4.948-4.823a.75.75%200%200%201%20.416-1.28l6.838-.993L11.328.668A.75.75%200%200%201%2012%20.25Zm0%202.445L9.44%207.882a.75.75%200%200%201-.565.41l-5.725.832%204.143%204.038a.748.748%200%200%201%20.215.664l-.978%205.702%205.121-2.692a.75.75%200%200%201%20.698%200l5.12%202.692-.977-5.702a.748.748%200%200%201%20.215-.664l4.143-4.038-5.725-.831a.75.75%200%200%201-.565-.41L12%202.694Z'%3e%3c/path%3e%3c/svg%3e",Vo={class:"Github"},zo=["src"],Yo=["src"],Jo=$({__name:"GitHubStars.ce",props:{repo:{type:String}},setup(e){const t=e,n=m(0);async function s(o){try{const a=await fetch(`https://api.github.com/repos/${o}`);return a.ok?(await a.json()).stargazers_count??null:null}catch{return null}}return I(async()=>{const o=`github stars: ${t.repo}`;function a(v){const l=localStorage.getItem(v);if(!l)return null;try{return JSON.parse(l)}catch{return localStorage.removeItem(v),null}}const r=a(o);if((r==null?void 0:r.timeStamp)!=null&&(r==null?void 0:r.stars)!=null){const v=(Date.now()-r.timeStamp)/1e3;if(v<300||v<3600&&r.stars!=-1){n.value=r.stars;return}}const u=await s(t.repo);if(!u){const v={stars:-1,timeStamp:Date.now()};localStorage.setItem(o,JSON.stringify(v));return}n.value=u;const h={stars:u,timeStamp:Date.now()};localStorage.setItem(o,JSON.stringify(h))}),(o,a)=>(_(),p("div",Vo,[N(he,{href:`https://github.com/${o.repo}`,class:"Github_box Github_box___repo"},{default:B(()=>[g("img",{class:"Github_icon",src:i(It),alt:"github icon","aria-hidden":"true"},null,8,zo),a[0]||(a[0]=ne(" GitHub "))]),_:1},8,["href"]),n.value!=-1?(_(),L(he,{key:0,href:`https://github.com/${o.repo}`,class:"Github_box Github_box___stars"},{default:B(()=>[g("img",{alt:"stars",class:"Github_icon Github_icon___star",src:i(jo)},null,8,Yo),ne(" "+E(n.value),1)]),_:1},8,["href"])):O("",!0)]))}}),Uo='.Github{position:relative;z-index:0}.Github_box___repo{z-index:1}.Github_box___stars{z-index:0}.Github{display:flex;flex-direction:row;align-items:center;gap:12rem}.Github_box{border:1rem solid #c0c0c0;border-radius:3rem;background-color:#fff;padding:6rem 12rem;display:flex;flex-direction:row;align-items:center;gap:6rem;text-decoration:none}.Github_box,.Github_box:link,.Github_box:visited{color:#000}.Github_box___repo{box-shadow:0 0 2rem #0003,0 -2rem 4rem #0002 inset;font-weight:700}.Github_box___repo:hover:not(:active){box-shadow:0 0 2rem #0003,0 -2rem 4rem #0004 inset}.Github_box___repo:hover:hover,.Github_box___repo:hover:visited:hover,.Github_box___repo:hover:link:hover{color:#0969da}.Github_box___stars{gap:1.5rem;padding-left:6rem;padding-right:6rem;font-weight:400;position:relative}.Github_box___stars:before,.Github_box___stars:after{content:"";position:absolute;aspect-ratio:1;right:100%;top:50%;transform-origin:center;transform:translateY(-50%) translate(-50%) rotate(-90deg) scaleY(2) scaleX(1)}.Github_box___stars:before{border:6rem solid transparent;border-bottom-color:silver}.Github_box___stars:after{border:5rem solid transparent;border-bottom-color:#fff}.Github_box___stars:hover{border-color:#0969da}.Github_box___stars:hover:before{border-bottom-color:#0969da}.Github_icon{vertical-align:middle;height:1.3em}.Github_icon___star{height:1.2em}.Github_box___repo{transition:box-shadow .2s linear,background-color .1s linear,color .1s linear}.Github_box___repo:active{transition:background-color .1s linear}.Github_box___stars,.Github_box___stars:before{transition:border-color .2s linear}',qo=M(Jo,[["styles",[Uo]]]),Xo=it(qo);function Zo(){I(()=>{customElements.define("github-stars",Xo)})}function Ko(){const e=D();I(()=>{document.addEventListener("click",ke)}),Q(()=>document.removeEventListener("click",ke)),we(()=>e.path,()=>{const t=document.querySelector(`#${P.page.root}`);t==null||t.focus(),t==null||t.blur()})}function ke(e){var n,s;let t=e.target;for(;t;){if(t.tagName=="A"){const o=(n=t.getAttribute)==null?void 0:n.call(t,"href");if(!o)return;if(o.charAt(0)=="#"){const a=document.querySelector(o);a&&((s=a==null?void 0:a.focus)==null||s.call(a,{preventScroll:!0}))}return}t=t.parentElement??null}}const Qo=["id"],ea=["inert"],ta=$({__name:"Layout",setup(e){var s;Zo(),Ko();const{frontmatter:t}=U();(s=lt())==null||s.appContext.app.use(Bt());const n=en();return Wo(!1),ee(()=>{t.value.title||console.warn("Frontmatter title empty")}),(o,a)=>{const r=se("Content");return _(),p("div",{class:c(o.$style.Layout),tabindex:"-1",id:i(P).page.root},[N(co,{class:c(o.$style.Overlay)},null,8,["class"]),i(t).hero?(_(),p("div",{key:1,inert:i(n).isMobileNavAnythingOpen?!0:void 0,class:c([o.$style.Main,o.$style.Main___hero,i(n).isMobileNavAnythingOpen?o.$style.Main___nonInteractive:""])},[N(r)],10,ea)):(_(),L(Fo,{key:0,inert:i(n).isMobileNavAnythingOpen?!0:void 0,class:c([o.$style.Main,o.$style.Main___doc,i(n).isMobileNavAnythingOpen?o.$style.Main___nonInteractive:""])},null,8,["inert","class"])),g("div",{"aria-hidden":"true",class:c(o.$style.VisibleRectMarker),ref:u=>{i(n).VisibleAreaMarker=u}},null,2)],10,Qo)}}}),na="b",sa="c",oa="d",aa="e",ra="f",ia="g",la="h",ca={Layout:na,Overlay:sa,Main:oa,VisibleRectMarker:aa,Main___doc:ra,Main___hero:ia,Main___nonInteractive:la},ua={$style:ca},_a=M(ta,[["__cssModules",ua]]),da={Layout:_a,enhanceApp({}){}};function Ve(e){if(e.extends){const t=Ve(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const J=Ve(da),va=$({name:"VitePressApp",setup(){const{site:e}=U();return I(()=>{A(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&yt(),bt(),Nt(),J.setup&&J.setup(),()=>$t(J.Layout)}});async function pa(){const e=ha(),t=ma();t.provide(ut,e);const n=_t(e.route);return t.provide(dt,n),t.component("Content",vt),t.component("ClientOnly",pt),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),J.enhanceApp&&await J.enhanceApp({app:t,router:e,siteData:mt}),{app:t,router:e,data:n}}function ma(){return ht(va)}function ha(){let e=le,t;return ft(n=>{let s=gt(n),o=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),o=import(s)),le&&(e=!1),o},J.NotFound)}le&&pa().then(({app:e,router:t,data:n})=>{t.go().then(()=>{ct(t.route,n.site),e.mount("#app")})});export{pa as createApp};
