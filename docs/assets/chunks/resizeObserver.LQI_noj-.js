import{d as c,b as p,o as a,c as f,j as i,t as l,f as u,v as d,x as m}from"./framework.oytdgtbb.js";const h=["href"],_=["href"],b=c({__name:"HyperLink",props:{text:{},href:{},sameTab:{type:Boolean}},setup(o){const n=o,s=p(()=>n.text??"");return(e,t)=>n.sameTab?(a(),f("a",{key:0,href:e.href},[i(l(s.value),1),u(e.$slots,"default")],8,h)):(a(),f("a",{key:1,rel:"noopener",target:"_blank",href:e.href},[i(l(s.value),1),u(e.$slots,"default")],8,_))}});function v(o,n,s){let e=null;d(()=>{e=new ResizeObserver(o),s&&o([]);const t=n();if(t){if(Array.isArray(t)){for(const r of t)r&&e.observe(r);return}e.observe(t)}}),m(()=>{e==null||e.disconnect()})}export{b as _,v as u};