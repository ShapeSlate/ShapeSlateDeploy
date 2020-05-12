(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jcJX:function(r,e,t){"use strict";t.r(e),t.d(e,"AccountModule",(function(){return L}));var n=t("3Pt+"),s=t("ofXK"),i=t("tyNb"),o=t("fXoL"),b=t("J9tS");let c=(()=>{class r{constructor(r,e,t){this.router=r,this.accountService=e,this.roomService=t,this.accountService.slateUserValue&&!this.roomService.roomValue&&this.router.navigate(["/room/enter"]),this.accountService.slateUserValue&&this.roomService.roomValue&&this.router.navigate(["/"])}}return r.\u0275fac=function(e){return new(e||r)(o.Lb(i.c),o.Lb(b.a),o.Lb(b.d))},r.\u0275cmp=o.Fb({type:r,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"col-md-6","offset-md-3","mt-5"]],template:function(r,e){1&r&&(o.Ob(0,"div",0),o.Mb(1,"router-outlet"),o.Nb())},directives:[i.g],encapsulation:2}),r})();var a=t("SxV6");function u(r,e){1&r&&(o.Ob(0,"div"),o.nc(1,"Username is required"),o.Nb())}function d(r,e){if(1&r&&(o.Ob(0,"div",13),o.mc(1,u,2,0,"div",14),o.Nb()),2&r){const r=o.Yb();o.zb(1),o.bc("ngIf",r.f.username.errors.required)}}function m(r,e){1&r&&(o.Ob(0,"div"),o.nc(1,"Password is required"),o.Nb())}function f(r,e){if(1&r&&(o.Ob(0,"div",13),o.mc(1,m,2,0,"div",14),o.Nb()),2&r){const r=o.Yb();o.zb(1),o.bc("ngIf",r.f.password.errors.required)}}function l(r,e){1&r&&o.Mb(0,"span",15)}const p=function(r){return{"is-invalid":r}};function g(r,e){1&r&&(o.Ob(0,"div"),o.nc(1,"Username is required"),o.Nb())}function v(r,e){if(1&r&&(o.Ob(0,"div",13),o.mc(1,g,2,0,"div",14),o.Nb()),2&r){const r=o.Yb();o.zb(1),o.bc("ngIf",r.f.username.errors.required)}}function h(r,e){1&r&&(o.Ob(0,"div"),o.nc(1,"Password is required"),o.Nb())}function N(r,e){1&r&&(o.Ob(0,"div"),o.nc(1,"Password must be at least 6 characters"),o.Nb())}function O(r,e){if(1&r&&(o.Ob(0,"div",13),o.mc(1,h,2,0,"div",14),o.mc(2,N,2,0,"div",14),o.Nb()),2&r){const r=o.Yb();o.zb(1),o.bc("ngIf",r.f.password.errors.required),o.zb(1),o.bc("ngIf",r.f.password.errors.minlength)}}function w(r,e){1&r&&o.Mb(0,"span",15)}const S=function(r){return{"is-invalid":r}},I=[{path:"",component:c,children:[{path:"login",component:(()=>{class r{constructor(r,e,t,n,s){this.formBuilder=r,this.route=e,this.router=t,this.accountService=n,this.alertService=s,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({username:["",n.k.required],password:["",n.k.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/room/enter"}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.login(this.f.username.value,this.f.password.value).pipe(Object(a.a)()).subscribe(r=>{this.router.navigate([this.returnUrl])},r=>{this.alertService.error("Username or password is incorrect."),this.loading=!1}))}}return r.\u0275fac=function(e){return new(e||r)(o.Lb(n.b),o.Lb(i.a),o.Lb(i.c),o.Lb(b.a),o.Lb(b.b))},r.\u0275cmp=o.Fb({type:r,selectors:[["ng-component"]],decls:21,vars:11,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(o.Ob(0,"div",0),o.Ob(1,"h4",1),o.nc(2,"Login"),o.Nb(),o.Ob(3,"div",2),o.Ob(4,"form",3),o.Wb("ngSubmit",(function(){return e.onSubmit()})),o.Ob(5,"div",4),o.Ob(6,"label",5),o.nc(7,"Username"),o.Nb(),o.Mb(8,"input",6),o.mc(9,d,2,1,"div",7),o.Nb(),o.Ob(10,"div",4),o.Ob(11,"label",8),o.nc(12,"Password"),o.Nb(),o.Mb(13,"input",9),o.mc(14,f,2,1,"div",7),o.Nb(),o.Ob(15,"div",4),o.Ob(16,"button",10),o.mc(17,l,1,0,"span",11),o.nc(18," Login "),o.Nb(),o.Ob(19,"a",12),o.nc(20,"Register"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&r&&(o.zb(4),o.bc("formGroup",e.form),o.zb(4),o.bc("ngClass",o.dc(7,p,e.submitted&&e.f.username.errors)),o.zb(1),o.bc("ngIf",e.submitted&&e.f.username.errors),o.zb(4),o.bc("ngClass",o.dc(9,p,e.submitted&&e.f.password.errors)),o.zb(1),o.bc("ngIf",e.submitted&&e.f.password.errors),o.zb(2),o.bc("disabled",e.loading),o.zb(1),o.bc("ngIf",e.loading))},directives:[n.l,n.g,n.d,n.a,n.f,n.c,s.i,s.k,i.e],encapsulation:2}),r})()},{path:"register",component:(()=>{class r{constructor(r,e,t,n,s){this.formBuilder=r,this.route=e,this.router=t,this.accountService=n,this.alertService=s,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({username:["",n.k.required],password:["",[n.k.required,n.k.minLength(6)]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.register(this.form.value).pipe(Object(a.a)()).subscribe(r=>{this.alertService.success("Registration successful",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},r=>{this.alertService.error("Name is already registered."),this.loading=!1}))}}return r.\u0275fac=function(e){return new(e||r)(o.Lb(n.b),o.Lb(i.a),o.Lb(i.c),o.Lb(b.a),o.Lb(b.b))},r.\u0275cmp=o.Fb({type:r,selectors:[["ng-component"]],decls:21,vars:11,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(o.Ob(0,"div",0),o.Ob(1,"h4",1),o.nc(2,"Register"),o.Nb(),o.Ob(3,"div",2),o.Ob(4,"form",3),o.Wb("ngSubmit",(function(){return e.onSubmit()})),o.Ob(5,"div",4),o.Ob(6,"label",5),o.nc(7,"Username"),o.Nb(),o.Mb(8,"input",6),o.mc(9,v,2,1,"div",7),o.Nb(),o.Ob(10,"div",4),o.Ob(11,"label",8),o.nc(12,"Password"),o.Nb(),o.Mb(13,"input",9),o.mc(14,O,3,2,"div",7),o.Nb(),o.Ob(15,"div",4),o.Ob(16,"button",10),o.mc(17,w,1,0,"span",11),o.nc(18," Register "),o.Nb(),o.Ob(19,"a",12),o.nc(20,"Cancel"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&r&&(o.zb(4),o.bc("formGroup",e.form),o.zb(4),o.bc("ngClass",o.dc(7,S,e.submitted&&e.f.username.errors)),o.zb(1),o.bc("ngIf",e.submitted&&e.f.username.errors),o.zb(4),o.bc("ngClass",o.dc(9,S,e.submitted&&e.f.password.errors)),o.zb(1),o.bc("ngIf",e.submitted&&e.f.password.errors),o.zb(2),o.bc("disabled",e.loading),o.zb(1),o.bc("ngIf",e.loading))},directives:[n.l,n.g,n.d,n.a,n.f,n.c,s.i,s.k,i.e],encapsulation:2}),r})()}]}];let z=(()=>{class r{}return r.\u0275mod=o.Jb({type:r}),r.\u0275inj=o.Ib({factory:function(e){return new(e||r)},imports:[[i.f.forChild(I)],i.f]}),r})(),L=(()=>{class r{}return r.\u0275mod=o.Jb({type:r}),r.\u0275inj=o.Ib({factory:function(e){return new(e||r)},imports:[[s.c,n.j,z]]}),r})()}}]);