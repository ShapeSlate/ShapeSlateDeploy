(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yrpu:function(r,e,t){"use strict";t.r(e),t.d(e,"RoomModule",(function(){return O}));var n=t("3Pt+"),o=t("ofXK"),i=t("tyNb"),s=t("fXoL"),b=t("J9tS");let c=(()=>{class r{constructor(r,e,t){this.router=r,this.accountService=e,this.roomService=t,this.accountService.slateUserValue&&this.roomService.roomValue&&this.router.navigate(["/"])}}return r.\u0275fac=function(e){return new(e||r)(s.Lb(i.c),s.Lb(b.a),s.Lb(b.d))},r.\u0275cmp=s.Fb({type:r,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"col-md-6","offset-md-3","mt-5"]],template:function(r,e){1&r&&(s.Ob(0,"div",0),s.Mb(1,"router-outlet"),s.Nb())},directives:[i.g],encapsulation:2}),r})();var a=t("SxV6");function m(r,e){1&r&&(s.Ob(0,"div"),s.nc(1,"Room Name is required"),s.Nb())}function u(r,e){if(1&r&&(s.Ob(0,"div",11),s.mc(1,m,2,0,"div",12),s.Nb()),2&r){const r=s.Yb();s.zb(1),s.bc("ngIf",r.f.roomname.errors.required)}}function d(r,e){1&r&&s.Mb(0,"span",13)}const l=function(r){return{"is-invalid":r}};function f(r,e){1&r&&(s.Ob(0,"div"),s.nc(1,"Room name is required"),s.Nb())}function h(r,e){if(1&r&&(s.Ob(0,"div",11),s.mc(1,f,2,0,"div",12),s.Nb()),2&r){const r=s.Yb();s.zb(1),s.bc("ngIf",r.f.roomname.errors.required)}}function p(r,e){1&r&&s.Mb(0,"span",13)}const v=function(r){return{"is-invalid":r}},g=[{path:"",component:c,children:[{path:"create",component:(()=>{class r{constructor(r,e,t,n,o){this.formBuilder=r,this.route=e,this.router=t,this.roomService=n,this.alertService=o,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({roomname:["",n.k.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.roomService.create(this.form.value).pipe(Object(a.a)()).subscribe(r=>{this.alertService.success("Creation successful",{keepAfterRouteChange:!0}),this.router.navigate(["../enter"],{relativeTo:this.route})},r=>{this.alertService.error("A room has already been created under this name."),this.loading=!1}))}}return r.\u0275fac=function(e){return new(e||r)(s.Lb(n.b),s.Lb(i.a),s.Lb(i.c),s.Lb(b.d),s.Lb(b.b))},r.\u0275cmp=s.Fb({type:r,selectors:[["ng-component"]],decls:16,vars:7,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","roomname"],["type","text","formControlName","roomname",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../enter",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(s.Ob(0,"div",0),s.Ob(1,"h4",1),s.nc(2,"Create Room"),s.Nb(),s.Ob(3,"div",2),s.Ob(4,"form",3),s.Wb("ngSubmit",(function(){return e.onSubmit()})),s.Ob(5,"div",4),s.Ob(6,"label",5),s.nc(7,"Room Name"),s.Nb(),s.Mb(8,"input",6),s.mc(9,u,2,1,"div",7),s.Nb(),s.Ob(10,"div",4),s.Ob(11,"button",8),s.mc(12,d,1,0,"span",9),s.nc(13," Create "),s.Nb(),s.Ob(14,"a",10),s.nc(15,"Cancel"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&r&&(s.zb(4),s.bc("formGroup",e.form),s.zb(4),s.bc("ngClass",s.dc(5,l,e.submitted&&e.f.roomname.errors)),s.zb(1),s.bc("ngIf",e.submitted&&e.f.roomname.errors),s.zb(2),s.bc("disabled",e.loading),s.zb(1),s.bc("ngIf",e.loading))},directives:[n.l,n.g,n.d,n.a,n.f,n.c,o.i,o.k,i.e],encapsulation:2}),r})()},{path:"enter",component:(()=>{class r{constructor(r,e,t,n,o){this.formBuilder=r,this.route=e,this.router=t,this.roomService=n,this.alertService=o,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({roomname:["",n.k.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.roomService.enter(this.f.roomname.value).pipe(Object(a.a)()).subscribe(r=>{this.router.navigate([this.returnUrl])},r=>{this.alertService.error("Room name is incorrect."),this.loading=!1}))}}return r.\u0275fac=function(e){return new(e||r)(s.Lb(n.b),s.Lb(i.a),s.Lb(i.c),s.Lb(b.d),s.Lb(b.b))},r.\u0275cmp=s.Fb({type:r,selectors:[["ng-component"]],decls:16,vars:7,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","room roomname"],["type","text","formControlName","roomname",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../create",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(s.Ob(0,"div",0),s.Ob(1,"h4",1),s.nc(2,"Enter Room"),s.Nb(),s.Ob(3,"div",2),s.Ob(4,"form",3),s.Wb("ngSubmit",(function(){return e.onSubmit()})),s.Ob(5,"div",4),s.Ob(6,"label",5),s.nc(7,"Room Name"),s.Nb(),s.Mb(8,"input",6),s.mc(9,h,2,1,"div",7),s.Nb(),s.Ob(10,"div",4),s.Ob(11,"button",8),s.mc(12,p,1,0,"span",9),s.nc(13," Enter "),s.Nb(),s.Ob(14,"a",10),s.nc(15,"Create"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&r&&(s.zb(4),s.bc("formGroup",e.form),s.zb(4),s.bc("ngClass",s.dc(5,v,e.submitted&&e.f.roomname.errors)),s.zb(1),s.bc("ngIf",e.submitted&&e.f.roomname.errors),s.zb(2),s.bc("disabled",e.loading),s.zb(1),s.bc("ngIf",e.loading))},directives:[n.l,n.g,n.d,n.a,n.f,n.c,o.i,o.k,i.e],encapsulation:2}),r})()}]}];let N=(()=>{class r{}return r.\u0275mod=s.Jb({type:r}),r.\u0275inj=s.Ib({factory:function(e){return new(e||r)},imports:[[i.f.forChild(g)],i.f]}),r})(),O=(()=>{class r{}return r.\u0275mod=s.Jb({type:r}),r.\u0275inj=s.Ib({factory:function(e){return new(e||r)},imports:[[o.c,n.j,N]]}),r})()}}]);