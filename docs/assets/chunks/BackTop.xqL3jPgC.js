import{d as f,b as h,o as a,c as n,j as c,t as p,f as i,v as _,x as m,e as g,n as u,u as d,_ as w}from"./framework.oytdgtbb.js";const v=["href"],y=["href"],V=f({__name:"HyperLink",props:{text:{},href:{},sameTab:{type:Boolean}},setup(s){const o=s,t=h(()=>o.text??"");return(e,r)=>o.sameTab?(a(),n("a",{key:0,href:e.href},[c(p(t.value),1),i(e.$slots,"default")],8,v)):(a(),n("a",{key:1,rel:"noopener",target:"_blank",href:e.href},[c(p(t.value),1),i(e.$slots,"default")],8,y))}});function C(s,o,t){let e=null;_(()=>{e=new ResizeObserver(s),t&&s([]);const r=o();if(r){if(Array.isArray(r)){for(const l of r)l&&e.observe(l);return}e.observe(r)}}),m(()=>{e==null||e.disconnect()})}const B={page:{toc:"toc",subMenu:"subMenu",content:"content",root:"root"}},T="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20id='up-circle'%20class='icon%20glyph'%3e%3cpath%20d='M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,11.71a1,1,0,0,1-1.42,0L12,11.41l-2.29,2.3a1,1,0,0,1-1.42-1.42l3-3a1,1,0,0,1,1.42,0l3,3A1,1,0,0,1,15.71,13.71Z'%20style='fill:%2316643d'%3e%3c/path%3e%3c/svg%3e",k=["href"],x=["src"],$=f({__name:"BackTop",setup(s){return(o,t)=>(a(),n("a",{class:u(o.$style.BackToTop),href:`#${d(B).page.root}`},[g("img",{alt:"upward arrow",class:u(o.$style.Arrow),src:d(T)},null,10,x),c("Back to top")],10,k))}}),b="g",A="h",M={BackToTop:b,Arrow:A},R={$style:M},G=w($,[["__cssModules",R]]);export{G as B,V as _,B as a,C as u};