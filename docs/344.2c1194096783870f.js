"use strict";(self.webpackChunkrychasso_me=self.webpackChunkrychasso_me||[]).push([[344],{2344:(F,l,o)=>{o.r(l),o.d(l,{ProjectsModule:()=>D});var s=o(1368),g=o(2896),C=o(7604),m=o(132),p=o(9980),t=o(4496),M=o(2044);function P(e,r){if(1&e&&t.wR5(0,"div",5),2&e){const n=t.GaO().ngIf;t.E7m("innerHTML",n.description,t.E3n)}}function O(e,r){if(1&e&&t.wR5(0,"figcaption",10),2&e){const n=t.GaO().$implicit;t.E7m("innerHTML",n.title,t.E3n)}}function y(e,r){if(1&e&&t.wR5(0,"img",11),2&e){const n=t.GaO().$implicit;t.E7m("src",n.src,t.K6U)}}function v(e,r){1&e&&t.wR5(0,"img",11),2&e&&t.E7m("src",r.$implicit,t.K6U)}function I(e,r){if(1&e&&(t.I0R(0,"div",12),t.yuY(1,v,1,1,"img",13),t.C$Y()),2&e){const n=t.GaO().$implicit;t.yG2(),t.E7m("ngForOf",n.multipleSrc)}}function j(e,r){if(1&e&&t.wR5(0,"figcaption",14),2&e){const n=t.GaO().$implicit;t.E7m("innerHTML",n.description,t.E3n)}}function E(e,r){if(1&e&&(t.I0R(0,"figure"),t.yuY(1,O,1,1,"figcaption",6)(2,y,1,1,"img",7)(3,I,2,1,"div",8)(4,j,1,1,"figcaption",9),t.C$Y()),2&e){const n=r.$implicit,i=t.GaO(2);t.yG2(),t.E7m("ngIf",n.title),t.yG2(),t.E7m("ngIf",i.isFigure(n)),t.yG2(),t.E7m("ngIf",i.isFigureSet(n)),t.yG2(),t.E7m("ngIf",n.description)}}function T(e,r){if(1&e&&(t.I0R(0,"section")(1,"header")(2,"h1",1),t.OEk(3),t.C$Y(),t.yuY(4,P,1,1,"div",2),t.C$Y(),t.I0R(5,"article",3),t.yuY(6,E,5,4,"figure",4),t.C$Y()()),2&e){const n=r.ngIf;t.yG2(3),t.cNF(n.title),t.yG2(),t.E7m("ngIf",n.description),t.yG2(2),t.E7m("ngForOf",n.figures)}}let G=(()=>{class e{constructor(n,i){this.route=n,this.pageMetaService=i,this.project$=this.route.data.pipe(function _(...e){const r=e.length;if(0===r)throw new Error("list of properties cannot be empty.");return n=>(0,C.k)(function h(e,r){return i=>{let c=i;for(let a=0;a<r;a++){const d=c?.[e[a]];if(void 0===d)return;c=d}return c}}(e,r))(n)}("project"))}ngOnInit(){this.subscription=this.project$.subscribe(n=>{const i=`${n.title} | ${p.q.localize("menu.first-name")} ${p.q.localize("menu.last-name")}`;this.pageMetaService.setTitle(i);const c=(0,m.C2)(n);this.pageMetaService.setImage(c||"")})}ngOnDestroy(){this.subscription?.unsubscribe()}isFigure(n){return(0,m.S_)(n)}isFigureSet(n){return(0,m.QP)(n)}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(g.gV),t.GI1(M.c))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-project-details"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"h1"],["class","description",3,"innerHTML",4,"ngIf"],[1,"content"],[4,"ngFor","ngForOf"],[1,"description",3,"innerHTML"],["class","image-title",3,"innerHTML",4,"ngIf"],["alt","",3,"src",4,"ngIf"],["class","img-set",4,"ngIf"],["class","image-description",3,"innerHTML",4,"ngIf"],[1,"image-title",3,"innerHTML"],["alt","",3,"src"],[1,"img-set"],["alt","",3,"src",4,"ngFor","ngForOf"],[1,"image-description",3,"innerHTML"]],template:function(i,c){1&i&&(t.yuY(0,T,7,3,"section",0),t.wVc(1,"async")),2&i&&t.E7m("ngIf",t.kDX(1,1,c.project$))},dependencies:[s.ay,s.u_,s.a],styles:['h1[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:.05em}section[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header" "content";grid-gap:1rem}header[_ngcontent-%COMP%]{grid-area:header;margin-bottom:1rem}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:1.15rem;max-width:750px}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]     p{margin-bottom:.5rem}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]     p:last-child{margin-bottom:0}article[_ngcontent-%COMP%]{grid-area:content}figure[_ngcontent-%COMP%]{display:grid;grid-template-areas:"image-title" "image" "image-description"}figure[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2rem}@media all and (min-width: 720px){figure[_ngcontent-%COMP%]{grid-template-columns:minmax(auto,750px)}}figure[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{grid-area:image;width:100%}figure[_ngcontent-%COMP%]   .img-set[_ngcontent-%COMP%]{grid-area:image;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-template-rows:1fr;grid-gap:1rem}figure[_ngcontent-%COMP%]   .img-set[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{align-self:center}figure[_ngcontent-%COMP%]   figcaption.image-title[_ngcontent-%COMP%]{grid-area:image-title;margin-bottom:.25rem}@media all and (min-width: 720px){figure[_ngcontent-%COMP%]   figcaption.image-title[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.5rem}}figure[_ngcontent-%COMP%]   figcaption.image-description[_ngcontent-%COMP%]{grid-area:image-description;margin-top:.25rem;font-size:.875rem}']})}return e})();var f=o(6648),$=o(7992);let u=(()=>{class e{constructor(n){this.router=n}resolve(n){const{id:i}=n.params,c=(0,$.U)().find(a=>a.id===i);return c?(0,f.of)(c):(this.router.navigateByUrl("/"),(0,f.of)(null))}static#t=this.\u0275fac=function(i){return new(i||e)(t.CoB(g.E5))};static#e=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac})}return e})();const x=[{path:":id",component:G,resolve:{project:u}}];let D=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.a4G({type:e});static#n=this.\u0275inj=t.s3X({providers:[u],imports:[s.MD,g.qQ.forChild(x)]})}return e})()}}]);