import{a as N}from"./chunk-M657KRTD.js";import{b as L,c as w,d as E}from"./chunk-OIOHJBRF.js";import{a as R}from"./chunk-Z6FPJQBB.js";import{a as C}from"./chunk-7BOANP3O.js";import{C as c,E as j,F as y,I,J as T,M as F,N as D,P as b,Q as S,X as H,Z as $,aa as z,e as d,h as M,j as P,k as h,l as v,n as l,o as u,p as o,q as _,r as x,s as O,u as m,v as n,w as g,x as s,y as p}from"./chunk-OODB2EFT.js";function G(e,r){if(e&1&&p(0,"div",5),e&2){let t=c().ngIf;n("innerHTML",t.description,l)}}function J(e,r){if(e&1&&p(0,"figcaption",10),e&2){let t=c().$implicit;n("innerHTML",t.title,l)}}function K(e,r){if(e&1&&p(0,"img",11),e&2){let t=c().$implicit;n("src",t.src,u)}}function Q(e,r){if(e&1&&p(0,"img",11),e&2){let t=r.$implicit;n("src",t,u)}}function V(e,r){if(e&1&&(g(0,"div",12),m(1,Q,1,1,"img",13),s()),e&2){let t=c().$implicit;o(),n("ngForOf",t.multipleSrc)}}function W(e,r){if(e&1&&p(0,"figcaption",14),e&2){let t=c().$implicit;n("innerHTML",t.description,l)}}function X(e,r){if(e&1&&(g(0,"figure"),m(1,J,1,1,"figcaption",6)(2,K,1,1,"img",7)(3,V,2,1,"div",8)(4,W,1,1,"figcaption",9),s()),e&2){let t=r.$implicit,i=c(2);o(),n("ngIf",t.title),o(),n("ngIf",i.isFigure(t)),o(),n("ngIf",i.isFigureSet(t)),o(),n("ngIf",t.description)}}function Y(e,r){if(e&1&&(g(0,"section")(1,"header")(2,"h1",1),j(3),s(),m(4,G,1,1,"div",2),s(),g(5,"article",3),m(6,X,5,4,"figure",4),s()()),e&2){let t=r.ngIf;o(3),y(t.title),o(),n("ngIf",t.description),o(2),n("ngForOf",t.figures)}}var k=(()=>{class e{constructor(t,i){this.route=t,this.pageMetaService=i,this.project$=this.route.data.pipe(M("project"))}ngOnInit(){this.subscription=this.project$.subscribe(t=>{let i=`${t.title} | ${C.localize("menu.first-name")} ${C.localize("menu.last-name")}`;this.pageMetaService.setTitle(i);let a=L(t);this.pageMetaService.setImage(a||"")})}ngOnDestroy(){this.subscription?.unsubscribe()}isFigure(t){return w(t)}isFigureSet(t){return E(t)}static{this.\u0275fac=function(i){return new(i||e)(_(H),_(R))}}static{this.\u0275cmp=x({type:e,selectors:[["app-project-details"]],standalone:!1,decls:2,vars:3,consts:[[4,"ngIf"],[1,"h1"],["class","description",3,"innerHTML",4,"ngIf"],[1,"content"],[4,"ngFor","ngForOf"],[1,"description",3,"innerHTML"],["class","image-title",3,"innerHTML",4,"ngIf"],["alt","",3,"src",4,"ngIf"],["class","img-set",4,"ngIf"],["class","image-description",3,"innerHTML",4,"ngIf"],[1,"image-title",3,"innerHTML"],["alt","",3,"src"],[1,"img-set"],["alt","",3,"src",4,"ngFor","ngForOf"],[1,"image-description",3,"innerHTML"]],template:function(i,a){i&1&&(m(0,Y,7,3,"section",0),I(1,"async")),i&2&&n("ngIf",T(1,1,a.project$))},dependencies:[F,D,b],styles:['h1[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:.05em}section[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header" "content";grid-gap:1rem}header[_ngcontent-%COMP%]{grid-area:header;margin-bottom:1rem}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:1.15rem;max-width:750px}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]     p{margin-bottom:.5rem}header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]     p:last-child{margin-bottom:0}article[_ngcontent-%COMP%]{grid-area:content}figure[_ngcontent-%COMP%]{display:grid;grid-template-areas:"image-title" "image" "image-description"}figure[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2rem}@media all and (min-width: 720px){figure[_ngcontent-%COMP%]{grid-template-columns:minmax(auto,750px)}}figure[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{grid-area:image;width:100%}figure[_ngcontent-%COMP%]   .img-set[_ngcontent-%COMP%]{grid-area:image;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-template-rows:1fr;grid-gap:1rem}figure[_ngcontent-%COMP%]   .img-set[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{align-self:center}figure[_ngcontent-%COMP%]   figcaption.image-title[_ngcontent-%COMP%]{grid-area:image-title;margin-bottom:.25rem}@media all and (min-width: 720px){figure[_ngcontent-%COMP%]   figcaption.image-title[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.5rem}}figure[_ngcontent-%COMP%]   figcaption.image-description[_ngcontent-%COMP%]{grid-area:image-description;margin-top:.25rem;font-size:.875rem}']})}}return e})();var f=(()=>{class e{constructor(t){this.router=t}resolve(t){let{id:i}=t.params,a=N().find(B=>B.id===i);return a?d(a):(this.router.navigateByUrl("/"),d(null))}static{this.\u0275fac=function(i){return new(i||e)(v($))}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac})}}return e})();var A=[{path:":id",component:k,resolve:{project:f}}];var Ce=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=O({type:e})}static{this.\u0275inj=h({providers:[f],imports:[S,z.forChild(A)]})}}return e})();export{Ce as ProjectsModule};
