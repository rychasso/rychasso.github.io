(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",function(){return u});var o=n("ofXK"),r=n("tyNb"),i=n("lJxs"),c=n("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.yb({type:t,selectors:[["app-project-list-item"]],inputs:{project:"project"},decls:6,vars:4,consts:[[1,"image-backdrop-desktop"],["alt","",1,"image-backdrop-mobile",3,"src"],[1,"content"],[1,"h4"]],template:function(t,e){1&t&&(c.Jb(0,"section"),c.Fb(1,"div",0),c.Fb(2,"img",1),c.Jb(3,"div",2),c.Jb(4,"h3",3),c.Zb(5),c.Ib(),c.Ib(),c.Ib()),2&t&&(c.vb(1),c.Xb("background-image","url("+e.project.src+")"),c.vb(1),c.Sb("src",e.project.src,c.Vb),c.vb(3),c.ac(e.project.title))},styles:["section[_ngcontent-%COMP%]{height:100%;position:relative;overflow:hidden}@media (min-width:720px){section[_ngcontent-%COMP%]{height:0;padding-bottom:100%}}.image-backdrop-desktop[_ngcontent-%COMP%]{display:none}@media (min-width:720px){.image-backdrop-desktop[_ngcontent-%COMP%]{position:absolute;background-position:50%;background-size:cover;background-repeat:no-repeat;top:0;left:0;width:100%;height:100%;display:initial;transition:transform .25s}.image-backdrop-desktop[_ngcontent-%COMP%]:hover{transform:scale(1.02)}}.image-backdrop-mobile[_ngcontent-%COMP%]{display:block}@media (min-width:720px){.image-backdrop-mobile[_ngcontent-%COMP%]{display:none}}.content[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;padding:.5rem;background:rgba(0,0,0,.25);color:#fff}"],changeDetection:0}),t})();const s=function(t){return["projects",t]};function p(t,e){if(1&t&&(c.Jb(0,"li"),c.Jb(1,"a",2),c.Fb(2,"app-project-list-item",3),c.Ib(),c.Ib()),2&t){const t=e.$implicit;c.vb(1),c.Sb("routerLink",c.Tb(2,s,t.id)),c.vb(1),c.Sb("project",t)}}let b=(()=>{class t{constructor(t){this.route=t,this.project$=this.route.data.pipe(Object(i.a)(t=>t.projects))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Eb(r.a))},t.\u0275cmp=c.yb({type:t,selectors:[["app-home"]],decls:3,vars:3,consts:[[1,"grid"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"project"]],template:function(t,e){1&t&&(c.Jb(0,"ul",0),c.Yb(1,p,3,4,"li",1),c.Qb(2,"async"),c.Ib()),2&t&&(c.vb(1),c.Sb("ngForOf",c.Rb(2,1,e.project$)))},directives:[o.i,r.c,a],pipes:[o.b],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:1rem}@media (min-width:720px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}}"]}),t})();var d=n("LRne"),l=n("TwJ7");let g=(()=>{class t{resolve(t,e){return Object(d.a)(l.a)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Ab({token:t,factory:t.\u0275fac}),t})();const m=[{path:"",component:b,resolve:{projects:g}}];let u=(()=>{class t{}return t.\u0275mod=c.Cb({type:t}),t.\u0275inj=c.Bb({factory:function(e){return new(e||t)},providers:[g],imports:[[o.c,r.d.forChild(m)]]}),t})()}}]);