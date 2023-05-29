"use strict";(self.webpackChunkAngular_Component=self.webpackChunkAngular_Component||[]).push([[664],{1664:(b,u,e)=>{e.r(u),e.d(u,{FormModule:()=>C});var s=e(6895),m=e(4859),n=e(4006),l=e(8555),o=e(4650),c=e(8095),f=e(1125),d=e(760),g=e(3874);let v=(()=>{class t{constructor(){}getValidatorErrorMsg(r,a){return{required:"Required"}[r]}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,i){if(1&t&&(o.TgZ(0,"p"),o._uU(1),o.qZA()),2&t){const r=o.oxw();o.xp6(1),o.hij("*",r.errorMsg,"")}}let Z=(()=>{class t{constructor(r){this.validator=r}get errorMsg(){if(null!==this.control.errors)for(const r in this.control.errors)if(this.control.errors.hasOwnProperty(r)&&this.control.touched)return this.validator.getValidatorErrorMsg(r,this.control.errors[r]);return null}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(v))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-error-validation"]],inputs:{control:"control"},decls:2,vars:1,consts:[[1,"error-msg"],[4,"ngIf"]],template:function(r,a){1&r&&(o.TgZ(0,"div",0),o.YNc(1,h,2,1,"p",1),o.qZA()),2&r&&(o.xp6(1),o.Q6J("ngIf",null!==a.errorMsg))},dependencies:[s.O5],styles:[".error-msg{color:var(--color-fail);font-size:var(--font-size-three-quarter);font-family:inherit}\n"],encapsulation:2}),t})();const y=[{path:"",component:(()=>{class t{constructor(r){this.formBuilder=r,this.formDetail=this.formBuilder.group({name:"",email:["",n.kI.email]}),this.formAddress=this.formBuilder.group({line1:"",line2:"",region:"",country:""})}resetForm(){this.formDetail.reset(),this.formAddress.reset()}saveDetails(){console.log(this.formDetail.value),this.resetForm()}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(n.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-form"]],decls:46,vars:4,consts:[[1,"form"],["appOutletLeft","",1,"form__form-section"],[2,"display","block",3,"formGroup"],["for","nameInput"],["id","nameInput","type","text","formControlName","name"],["for","emailInput"],["id","emailInput","type","text","formControlName","email"],["appOutletRight","",1,"form__form-section",2,"margin-top","18px"],[3,"formGroup"],[2,"display","flex"],[2,"width","50%"],["for","line1Input"],["id","linr1Input","type","text","formControlName","line1",3,"required"],[3,"control"],["for","line2Input"],["id","linr2Input","type","text","formControlName","line2"],["for","regionInput"],["id","regionInput","type","text","formControlName","region"],["for","countryInput"],["id","countryInput","type","text","formControlName","country"],["selected",""],["appOutletButton","",1,"buttonBar"],["mat-raised-button","","color","primary",1,"buttonBar__save-button",3,"click"],["mat-raised-button","",1,"buttonBar__reset-button",3,"click"]],template:function(r,a){1&r&&(o.TgZ(0,"div",0)(1,"app-wrapper")(2,"span",1)(3,"h4"),o._uU(4,"My Details"),o.qZA(),o.TgZ(5,"form",2)(6,"label",3),o._uU(7,"Name"),o.qZA(),o._UZ(8,"input",4),o.TgZ(9,"label",5),o._uU(10,"Email"),o.qZA(),o._UZ(11,"input",6),o.qZA()(),o.TgZ(12,"span",7),o._UZ(13,"h4"),o.TgZ(14,"form",8)(15,"span",9)(16,"span",10)(17,"label",11),o._uU(18,"Line 1"),o.qZA(),o._UZ(19,"input",12)(20,"app-error-validation",13),o.qZA(),o.TgZ(21,"span",10)(22,"label",14),o._uU(23,"Line 2"),o.qZA(),o._UZ(24,"input",15),o.qZA()(),o.TgZ(25,"span",9)(26,"span",10)(27,"label",16),o._uU(28,"Region"),o.qZA(),o._UZ(29,"input",17),o.qZA(),o.TgZ(30,"span",10)(31,"label",18),o._uU(32,"Country"),o.qZA(),o.TgZ(33,"select",19),o._UZ(34,"option",20),o.TgZ(35,"option"),o._uU(36,"Sri Lanka"),o.qZA(),o.TgZ(37,"option"),o._uU(38,"Australia"),o.qZA(),o.TgZ(39,"option"),o._uU(40,"USA"),o.qZA()()()()()(),o.TgZ(41,"span",21)(42,"button",22),o.NdJ("click",function(){return a.saveDetails()}),o._uU(43," Save "),o.qZA(),o.TgZ(44,"button",23),o.NdJ("click",function(){return a.resetForm()}),o._uU(45," Reset "),o.qZA()()()()),2&r&&(o.xp6(5),o.Q6J("formGroup",a.formDetail),o.xp6(9),o.Q6J("formGroup",a.formAddress),o.xp6(5),o.Q6J("required",!0),o.xp6(1),o.Q6J("control",a.formAddress.controls.line1))},dependencies:[m.lW,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.Q7,n.sg,n.u,c.A,f.Y,d.A,g.y,Z],styles:[".form{display:flex;flex-direction:column;gap:var(--spacing-half);width:100%;margin:0}.form__form-section{width:98%;flex-direction:column;gap:var(--spacing-quarter);margin:var(--spacing-quarter)}.buttonBar{top:0;right:0;margin-right:4px}.buttonBar__save-button{margin-right:4px}.buttonBar__save-button:hover{background-color:var(--color-g-night)}.buttonBar__reset-button:hover{background-color:var(--color-n-reset)}\n"],encapsulation:2,changeDetection:0}),t})(),data:{breadcrumb:"single-form"}}];let A=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(y),l.Bz]}),t})();var F=e(9545);let C=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,A,m.ot,n.UX,n.u5,F.n,l.Bz]}),t})()}}]);