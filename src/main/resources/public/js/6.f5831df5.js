(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0d33":function(t,a,s){"use strict";var e=s("1ab8"),c=s.n(e);c.a},"1ab8":function(t,a,s){},"8eeb":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{staticStyle:{"margin-top":"30px"}},[s("div",{staticClass:"cus-title-table"},[s("q-icon",{attrs:{name:"perm_contact_calendar"}}),t._v("   Applicant - Update\n  ")],1),s("div",{staticClass:"cus-form"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3 col-12 "},[s("p",{staticClass:"cus-text"},[t._v("Profile Picture")]),s("img",{staticStyle:{width:"100%","max-width":"300px"},attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})]),s("div",{staticClass:"offset-sm-1 col-sm-8 offset-0 col-12 row"},[s("p",{staticClass:"col-2 cus-text"},[t._v("Name")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.applicant.name))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Email")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.applicant.email))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Phone No.")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.applicant.phone))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Belongs")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.applicant.belongs))]),s("div",{staticClass:"col-11",staticStyle:{"border-bottom":"2px solid rgba(0, 0, 0, 0.12)","margin-bottom":"14px"}}),t._l(t.applicant.addInfors,(function(a,e){return"yes"==t.haveAddInfor?s("q-item",{key:e,staticClass:"col-12",staticStyle:{padding:"0"}},[s("p",{staticClass:"col-5 cus-text"},[t._v(t._s(a.question)),a.isRequired?s("span",[t._v("*")]):t._e()]),s("q-input",{staticClass:"offset-1 col-6",attrs:{dense:"",outlined:""},model:{value:a.answer,callback:function(s){t.$set(a,"answer",s)},expression:"infor.answer"}})],1):t._e()})),s("div",{staticClass:"col-11",staticStyle:{"border-bottom":"2px solid rgba(0, 0, 0, 0.12)","margin-bottom":"14px"}}),s("p",{staticClass:"col-5 cus-text"},[t._v("Number of tickets")]),s("p",{staticClass:"offset-1 col-6"},[t._v(t._s(t.applicant.NumOfTicket))]),s("p",{staticClass:"col-12 cus-text",staticStyle:{"margin-bottom":"5px"}},[t._v("Pull Results")]),t._l(t.applicant.surveys,(function(a,e){return s("q-item",{key:a.id,staticClass:"col-12"},[s("div",{staticStyle:{width:"100%"}},[s("p",{staticClass:"cus-text col-12",staticStyle:{"margin-bottom":"5px"}},[t._v("Q"+t._s(e+1)+". "+t._s(a.queSurvey))]),s("q-select",{staticClass:"col-sm-6 col-12",attrs:{dense:"",outlined:"",options:a.selections},model:{value:a.selected,callback:function(s){t.$set(a,"selected",s)},expression:"survey.selected"}})],1)])}))],2)])]),s("div",{staticClass:"text-center",staticStyle:{"margin-top":"15px"}},[s("q-btn",{staticStyle:{"margin-right":"10px"},attrs:{label:"Save",color:"primary"}}),s("q-btn",{attrs:{label:"Cancel",color:"primary"}})],1)])},c=[],i=(s("7f7f"),{name:"EventManager",data:function(){return{applicant:{id:0,name:"",email:"",phone:"",belongs:"",appliedDate:"",orderNo:0,state:"",NumOfTicket:1,addInfors:[],surveys:[]},haveAddInfor:"no",haveSurvey:"no"}},methods:{loadApplicant:function(t){var a=this;this.$store.state.Applicant.applicants.forEach((function(s){s.id==t&&(a.applicant.id=t,a.applicant.name=s.name,a.applicant.email=s.email,a.applicant.phone=s.phone,a.applicant.belongs=s.belongs,a.applicant.appliedDate=s.appliedDate,a.applicant.orderNo=s.orderNo,a.applicant.state=s.state,a.applicant.NumOfTicket=s.NumOfTicket,a.applicant.addInfors=[],s.addInfors.forEach((function(t,s){a.applicant.addInfors.push({question:"",isRequired:!1}),a.applicant.addInfors[s].question=t.question,a.applicant.addInfors[s].isRequired=t.isRequired,a.applicant.addInfors[s].answer=t.answer})),a.applicant.surveys=[],s.surveys.forEach((function(t,s){a.applicant.surveys.push({queSurvey:"",selections:[],selected:""}),a.applicant.surveys[s].queSurvey=t.queSurvey,t.selections.forEach((function(t,e){a.applicant.surveys[s].selections[e]=t})),a.applicant.surveys[s].selected=t.selected})),a.applicant.addInfors.length>0&&(a.haveAddInfor="yes"),a.applicant.surveys.length>0&&(a.haveSurvey="yes"))}))}},computed:{},watch:{$route:function(t,a){this.loadApplicant(this.$route.params.id)}},created:function(){this.loadApplicant(this.$route.params.id)}}),l=i,n=(s("0d33"),s("2877")),o=s("eebe"),p=s.n(o),r=s("9989"),d=s("0016"),u=s("66e5"),f=s("27f9"),v=s("ddd8"),m=s("9c40"),h=Object(n["a"])(l,e,c,!1,null,"65c7f95c",null);a["default"]=h.exports;p()(h,"components",{QPage:r["a"],QIcon:d["a"],QItem:u["a"],QInput:f["a"],QSelect:v["a"],QBtn:m["a"]})}}]);