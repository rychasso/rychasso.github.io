(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",function(){return j});var o=n("ofXK"),r=n("tyNb"),i=n("lJxs"),c=n("fXoL"),s=n("7+Ip");function a(t,e){if(1&t&&(c.Hb(0,"p"),c.ac(1),c.Gb()),2&t){const t=c.Ob();c.vb(1),c.cc("",t.project.figures.length," \u0448\u0442.")}}let p=(()=>{class t{constructor(){}get posterUrl(){var t;return this.project.posterSrc||(null===(t=this.project.figures[0])||void 0===t?void 0:t.src)||null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.yb({type:t,selectors:[["app-project-list-item"]],inputs:{project:"project"},decls:7,vars:5,consts:[[1,"image-backdrop-desktop"],["alt","",1,"image-backdrop-mobile",3,"src"],[1,"content"],[4,"ngIf"]],template:function(t,e){1&t&&(c.Hb(0,"section"),c.Fb(1,"div",0),c.Fb(2,"img",1),c.Hb(3,"div",2),c.Hb(4,"h3"),c.ac(5),c.Gb(),c.Zb(6,a,2,1,"p",3),c.Gb(),c.Gb()),2&t&&(c.vb(1),c.Yb("background-image","url("+e.posterUrl+")"),c.vb(1),c.Rb("src",e.posterUrl,c.Wb),c.vb(3),c.bc(e.project.title),c.vb(1),c.Rb("ngIf",e.project.figures.length>1))},directives:[o.j],styles:["section[_ngcontent-%COMP%]{height:100%;position:relative;overflow:hidden;box-shadow:4px 3px 10px 0 var(--project-list-item-shadow-color)}@media (min-width:720px){section[_ngcontent-%COMP%]{height:0;padding-bottom:100%}}.image-backdrop-desktop[_ngcontent-%COMP%]{display:none}@media (min-width:720px){.image-backdrop-desktop[_ngcontent-%COMP%]{position:absolute;background-position:50%;background-size:cover;background-repeat:no-repeat;top:0;left:0;width:100%;height:100%;display:initial;transition:transform .25s}.image-backdrop-desktop[_ngcontent-%COMP%]:hover{transform:scale(1.02)}}.image-backdrop-mobile[_ngcontent-%COMP%]{display:block}@media (min-width:720px){.image-backdrop-mobile[_ngcontent-%COMP%]{display:none}}.content[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;padding:.75rem;background:var(--project-list-item-text-background);color:var(--project-list-item-text-color);width:100%;font-size:.65rem;display:flex;align-items:center;justify-content:space-between}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:inherit;font-weight:600;letter-spacing:.1em;text-transform:uppercase}"],changeDetection:0}),t})();const l=function(t){return["/projects",t]};function b(t,e){if(1&t&&(c.Hb(0,"li"),c.Hb(1,"a",2),c.Fb(2,"app-project-list-item",3),c.Gb(),c.Gb()),2&t){const t=e.$implicit;c.vb(1),c.Rb("routerLink",c.Tb(2,l,t.id)),c.vb(1),c.Rb("project",t)}}let d=(()=>{class t{constructor(t,e){this.route=t,this.pageMetaService=e,this.project$=this.route.data.pipe(Object(i.a)(t=>t.projects))}ngOnInit(){this.pageMetaService.setTitle("\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e | \u0410\u043b\u0451\u043d\u0430 \u0420\u044b\u0447\u0430\u0433\u043e\u0432\u0430"),this.pageMetaService.setDescription("\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043c\u043e\u0438\u0445 \u0440\u0430\u0431\u043e\u0442")}}return t.\u0275fac=function(e){return new(e||t)(c.Eb(r.a),c.Eb(s.a))},t.\u0275cmp=c.yb({type:t,selectors:[["app-home"]],decls:3,vars:3,consts:[[1,"grid"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"project"]],template:function(t,e){1&t&&(c.Hb(0,"ul",0),c.Zb(1,b,3,4,"li",1),c.Pb(2,"async"),c.Gb()),2&t&&(c.vb(1),c.Rb("ngForOf",c.Qb(2,1,e.project$)))},directives:[o.i,r.d,p],pipes:[o.b],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:1rem}@media (min-width:720px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}}"]}),t})();var g=n("LRne"),u=n("TwJ7");let m=(()=>{class t{resolve(t,e){return Object(g.a)(u.a)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Ab({token:t,factory:t.\u0275fac}),t})(),f=(()=>{class t{resolve(t,e){const{tag:n}=t.params;return Object(g.a)(u.a.filter(t=>{var e;return null===(e=t.tags)||void 0===e?void 0:e.includes(n)}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Ab({token:t,factory:t.\u0275fac}),t})();const v=[{path:"",component:d,resolve:{projects:m}},{path:"tags/:tag",component:d,resolve:{projects:f}}];var h=n("Iybg");let j=(()=>{class t{}return t.\u0275mod=c.Cb({type:t}),t.\u0275inj=c.Bb({factory:function(e){return new(e||t)},providers:[m,f],imports:[[o.c,r.e.forChild(v),h.a]]}),t})()}}]);