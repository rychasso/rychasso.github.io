(self.webpackChunkrychasso_me=self.webpackChunkrychasso_me||[]).push([[519],{5519:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomeModule:()=>_});var o=n(1116),r=n(3001),i=n(9996),c=n(8652),s=n(8619),a=n(7923),p=n(6931),l=n(6997);function g(t,e){if(1&t&&(s.TgZ(0,"div",4),s._UZ(1,"app-icon",5),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("title",t.project.figures.length+" \u0448\u0442")}}let m=(()=>{class t{constructor(){}get posterUrl(){return this.project.posterSrc?this.project.posterSrc:(0,p.f0)(this.project)||null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-project-list-item"]],inputs:{project:"project"},decls:7,vars:5,consts:[[1,"image-backdrop-desktop"],["alt","",1,"image-backdrop-mobile",3,"src"],[1,"content"],["class","icon-container",4,"ngIf"],[1,"icon-container"],["name","images",1,"icon",3,"title"]],template:function(t,e){1&t&&(s.TgZ(0,"section"),s._UZ(1,"div",0),s._UZ(2,"img",1),s.TgZ(3,"div",2),s.TgZ(4,"h3"),s._uU(5),s.qZA(),s.YNc(6,g,2,1,"div",3),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Udp("background-image","url("+e.posterUrl+")"),s.xp6(1),s.Q6J("src",e.posterUrl,s.LSH),s.xp6(3),s.Oqu(e.project.title),s.xp6(1),s.Q6J("ngIf",e.project.figures.length>1))},directives:[o.O5,l.o],styles:["section[_ngcontent-%COMP%]{height:100%;position:relative;overflow:hidden;box-shadow:4px 3px 10px 0 var(--project-list-item-shadow-color)}@media (min-width:720px){section[_ngcontent-%COMP%]{height:0;padding-bottom:100%}}.image-backdrop-desktop[_ngcontent-%COMP%]{display:none}@media (min-width:720px){.image-backdrop-desktop[_ngcontent-%COMP%]{position:absolute;background-position:50%;background-size:cover;background-repeat:no-repeat;top:0;left:0;width:100%;height:100%;display:initial;transition:transform .25s}.image-backdrop-desktop[_ngcontent-%COMP%]:hover{transform:scale(1.02)}}.image-backdrop-mobile[_ngcontent-%COMP%]{display:block}@media (min-width:720px){.image-backdrop-mobile[_ngcontent-%COMP%]{display:none}}.content[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;padding:.75rem;background:var(--project-list-item-text-background);color:var(--project-list-item-text-color);width:100%;font-size:.65rem;display:flex;align-items:center;justify-content:space-between}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:inherit;font-weight:600;letter-spacing:.1em;text-transform:uppercase}.content[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{position:relative;width:2em}.content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{fill:var(--project-list-item-text-color);font-size:1.75em;position:absolute;right:0;top:50%;transform:translateY(-50%)}"],changeDetection:0}),t})();const d=function(t){return["/projects",t]};function u(t,e){if(1&t&&(s.TgZ(0,"li"),s.TgZ(1,"a",2),s._UZ(2,"app-project-list-item",3),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.Q6J("routerLink",s.VKq(2,d,t.id)),s.xp6(1),s.Q6J("project",t)}}let f=(()=>{class t{constructor(t,e){this.route=t,this.pageMetaService=e,this.project$=this.route.data.pipe((0,i.U)(t=>t.projects))}ngOnInit(){const t=`${c.s.localize("menu.portfolio")} | ${c.s.localize("menu.first-name")} ${c.s.localize("menu.last-name")}`;this.pageMetaService.setTitle(t),this.pageMetaService.setDescription("\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043c\u043e\u0438\u0445 \u0440\u0430\u0431\u043e\u0442")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(r.gz),s.Y36(a.d))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-home"]],decls:3,vars:3,consts:[[1,"grid"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"project"]],template:function(t,e){1&t&&(s.TgZ(0,"ul",0),s.YNc(1,u,3,4,"li",1),s.ALo(2,"async"),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngForOf",s.lcZ(2,1,e.project$)))},directives:[o.sg,r.yS,m],pipes:[o.Ov],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:1rem}@media (min-width:720px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}}"]}),t})();var h=n(878),v=n(7027);let b=(()=>{class t{resolve(t,e){return(0,h.of)((0,v.m)())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),k=(()=>{class t{resolve(t,e){const{tag:n}=t.params;return(0,h.of)((0,v.m)().filter(t=>{var e;return null===(e=t.tags)||void 0===e?void 0:e.includes(n)}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const j=[{path:"",component:f,resolve:{projects:b}},{path:"tags/:tag",component:f,resolve:{projects:k}}];var x=n(2979);let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[b,k],imports:[[o.ez,r.Bz.forChild(j),x.Q]]}),t})()}}]);