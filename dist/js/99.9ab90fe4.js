"use strict";(self["webpackChunkww_web"]=self["webpackChunkww_web"]||[]).push([[99],{5099:function(s,e,n){n.r(e),n.d(e,{default:function(){return f}});var t=n(3396),r=n(9242);const o={class:"container mt-5"},a={class:"col-md-6"},l=(0,t._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),i={class:"mb-2"},u=(0,t._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},c=(0,t._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,t._)("div",{class:"text-end mt-4"},[(0,t._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(s,e,n,m,w,b){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,r.iM)(((...s)=>b.signIn&&b.signIn(...s)),["prevent"]))},[(0,t._)("div",a,[l,(0,t._)("div",i,[u,(0,t.wy)((0,t._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"","onUpdate:modelValue":e[0]||(e[0]=s=>w.user.username=s),autofocus:""},null,512),[[r.nr,w.user.username]])]),(0,t._)("div",d,[c,(0,t.wy)((0,t._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=s=>w.user.password=s),required:""},null,512),[[r.nr,w.user.password]])]),p])],32)])}var w={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{const{token:e,expired:n}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(n)}`,console.log(s)}))}}},b=n(89);const h=(0,b.Z)(w,[["render",m]]);var f=h}}]);
//# sourceMappingURL=99.9ab90fe4.js.map