(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0B1/":function(t,e,n){"use strict";n.r(e),n.d(e,"ProjectsModule",function(){return h});var i=n("ofXK"),r=n("tyNb"),o=n("lJxs"),c=n("fXoL"),s=n("7+Ip");function a(t,e){if(1&t&&c.Fb(0,"div",5),2&t){const t=c.Ob().ngIf;c.Rb("innerHTML",t.description,c.Vb)}}function g(t,e){if(1&t&&(c.Hb(0,"figcaption"),c.ac(1),c.Gb()),2&t){const t=c.Ob().$implicit;c.vb(1),c.bc(t.description)}}function p(t,e){if(1&t&&(c.Hb(0,"figure"),c.Fb(1,"img",6),c.Zb(2,g,2,1,"figcaption",0),c.Gb()),2&t){const t=e.$implicit;c.vb(1),c.Rb("src",t.src,c.Wb),c.vb(1),c.Rb("ngIf",t.description)}}function b(t,e){if(1&t&&(c.Hb(0,"section"),c.Hb(1,"header"),c.Hb(2,"h1",1),c.ac(3),c.Gb(),c.Zb(4,a,1,1,"div",2),c.Gb(),c.Hb(5,"article",3),c.Zb(6,p,3,2,"figure",4),c.Gb(),c.Gb()),2&t){const t=e.ngIf;c.vb(3),c.bc(t.title),c.vb(1),c.Rb("ngIf",t.description),c.vb(2),c.Rb("ngForOf",t.figures)}}let d=(()=>{class t{constructor(t,e){this.route=t,this.pageMetaService=e,this.project$=this.route.data.pipe(function(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return n=>Object(o.a)(function(t,e){return n=>{let i=n;for(let r=0;r<e;r++){const e=null!=i?i[t[r]]:void 0;if(void 0===e)return;i=e}return i}}(t,e))(n)}("project"))}ngOnInit(){this.subscription=this.project$.subscribe(t=>{var e;this.pageMetaService.setTitle(`${t.title} | \u0410\u043b\u0451\u043d\u0430 \u0420\u044b\u0447\u0430\u0433\u043e\u0432\u0430`),this.pageMetaService.setImage((null===(e=t.figures[0])||void 0===e?void 0:e.src)||"")})}ngOnDestroy(){var t;null===(t=this.subscription)||void 0===t||t.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Eb(r.a),c.Eb(s.a))},t.\u0275cmp=c.yb({type:t,selectors:[["app-project-details"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"h1"],["class","description",3,"innerHTML",4,"ngIf"],[1,"content"],[4,"ngFor","ngForOf"],[1,"description",3,"innerHTML"],["alt","",3,"src"]],template:function(t,e){1&t&&(c.Zb(0,b,7,3,"section",0),c.Pb(1,"async")),2&t&&c.Rb("ngIf",c.Qb(1,1,e.project$))},directives:[i.j,i.i],pipes:[i.b],styles:['h1[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:.05em}section[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header" "content";grid-gap:1rem}header[_ngcontent-%COMP%]{grid-area:header;margin-bottom:1rem}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:1.15rem;max-width:750px}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]     p{margin-bottom:.5rem}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]     p:last-child{margin-bottom:0}article[_ngcontent-%COMP%]{grid-area:content}figure[_ngcontent-%COMP%]{display:grid;grid-template-areas:"image" "image-description";grid-gap:1rem}figure[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}@media (min-width:720px){figure[_ngcontent-%COMP%]{grid-template-areas:"image image-description";grid-template-columns:minmax(auto,750px) 250px}}figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{grid-area:image}figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{grid-area:image-description}']}),t})();var u=n("LRne"),f=n("TwJ7");let l=(()=>{class t{constructor(t){this.router=t}resolve(t,e){const{id:n}=t.params,i=f.a.find(t=>t.id===n);return i?Object(u.a)(i):(this.router.navigateByUrl("/"),Object(u.a)(null))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(r.b))},t.\u0275prov=c.Ab({token:t,factory:t.\u0275fac}),t})();const m=[{path:":id",component:d,resolve:{project:l}}];let h=(()=>{class t{}return t.\u0275mod=c.Cb({type:t}),t.\u0275inj=c.Bb({factory:function(e){return new(e||t)},providers:[l],imports:[[i.c,r.e.forChild(m)]]}),t})()}}]);