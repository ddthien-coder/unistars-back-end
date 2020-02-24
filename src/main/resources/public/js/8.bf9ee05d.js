(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{1384:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticStyle:{"margin-top":"30px"}},[s("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":"","inline-label":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab",{attrs:{name:"event",label:"Event Manager",icon:"event_available"}})],1),s("q-separator"),s("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab-panel",{attrs:{name:"event"}},[s("div",{staticClass:"cus-title"},[s("q-icon",{attrs:{name:"event_available"}}),t._v("   Event Manager\n      ")],1),s("div",{staticClass:"cus-title-table"},[s("q-icon",{attrs:{name:"event_available"}}),t._v("   Event Manager - "+t._s(t.title)+"\n      ")],1),s("div",{staticClass:"cus-form"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3 col-12"},[s("p",{staticClass:"cus-text"},[t._v("Profile Picture")]),s("img",{staticStyle:{width:"100%"},attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})]),s("div",{staticClass:"offset-sm-1 offset-0 col-sm-8 col-12 row"},[s("p",{staticClass:"col-2 cus-text"},[t._v("Title")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.event.title))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Place")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.event.place))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Personnel")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.event.maxParticipant))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Lecturer")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.event.lecturer))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Dates-Time")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.event.startTime)+" ~ "+t._s(t.event.endTime))]),s("p",{staticClass:"col-2 cus-text"},[t._v("Deadline")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.event.endRegTime))]),t._l(t.event.addInfors,(function(e,a){return"yes"==t.haveAddInfor?s("q-item",{key:a,staticClass:"col-12",staticStyle:{padding:"0"}},[s("p",{staticClass:"col-2 cus-text"},[t._v("Additional Information "+t._s(a+1)+":")]),s("p",{staticClass:"offset-1"},[t._v(t._s(e.question)),e.isRequired?s("span",{staticStyle:{color:"red"}},[t._v(" (Required)")]):t._e()])]):t._e()})),s("div",{staticClass:"col-2 cus-text"},[t._v("Description")]),s("p",{staticClass:"offset-1 col-9"},[t._v(t._s(t.event.description))])],2),s("div",{staticClass:"col-12 row flex justify-between",staticStyle:{"margin-top":"30px"}},[s("div",{staticClass:"col-sm-3 col-12"},[s("p",{staticClass:"cus-text"},[t._v("How to register")]),s("img",{staticStyle:{width:"100%"},attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})]),s("div",{staticClass:"col-sm-3 col-12"},[s("p",{staticClass:"cus-text"},[t._v("Attendance Guide")]),s("img",{staticStyle:{width:"100%"},attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})]),s("div",{staticClass:"col-sm-3 col-12"},[s("p",{staticClass:"cus-text"},[t._v("Lecturer Information")]),s("img",{staticStyle:{width:"100%"},attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})])]),"yes"==t.haveSurvey?s("p",{staticClass:"col-2 cus-text",staticStyle:{"margin-top":"30px"}},[t._v("Survey")]):t._e(),t._l(t.event.surveys,(function(e,a){return"yes"==t.haveSurvey?s("q-item",{key:a,staticClass:"col-12",staticStyle:{padding:"0"}},[s("div",{staticClass:"col-12 cus-question row"},[s("p",{staticClass:"cus-text",staticStyle:{"margin-bottom":"10px"}},[t._v("Question  "+t._s(a+1)+" ")]),s("br"),s("div",{staticClass:"col-12",staticStyle:{"padding-bottom":"0px"}},[s("p",{staticStyle:{"padding-left":"10px","margin-bottom":"0px"}},[t._v(t._s(e.queSurvey))]),s("div",{staticClass:"col-11 cus-selection"},t._l(e.selections,(function(t,a){return s("q-item",{key:a,staticStyle:{padding:"0px"},attrs:{dense:""}},[s("q-radio",{attrs:{size:"xs",disable:"",label:e.selections[a],value:"A",val:""}})],1)})),1)])])]):t._e()}))],2),s("div",{staticClass:"text-center",staticStyle:{"margin-top":"30px"}},[s("q-btn",{attrs:{label:"OK",color:"primary",to:"/admin"}})],1)])])],1)],1)},i=[],n={name:"EventManager",data:function(){return{title:"Detail",tab:"event",event:{id:0,title:"",place:"",lecturer:"",maxParticipant:null,currentParticipant:null,startTime:"",endTime:"",endRegTime:"",addInfors:[],surveys:[],description:"",photoEvent:"",photoHowToReg:"",photoAttGuide:"",photoLecInf:"",createdDate:""},haveAddInfor:"no",haveSurvey:"no",role:""}},methods:{loadEvent:function(t){var e=this;this.$store.state.Event.events.forEach((function(s){s.id==t&&(e.event.id=s.id,e.event.title=s.title,e.event.place=s.place,e.event.lecturer=s.lecturer,e.event.maxParticipant=s.maxParticipant,e.event.currentParticipant=s.currentParticipant,e.event.startTime=s.startTime,e.event.endTime=s.endTime,e.event.startRegTime=s.startRegTime,e.event.endRegTime=s.endRegTime,e.event.addInfors=[],s.addInfors.forEach((function(t,s){e.event.addInfors.push({question:"",isRequired:!1}),e.event.addInfors[s].question=t.question,e.event.addInfors[s].isRequired=t.isRequired})),e.event.surveys=[],s.surveys.forEach((function(t,s){e.event.surveys.push({queSurvey:"",selections:[]}),e.event.surveys[s].queSurvey=t.queSurvey,t.selections.forEach((function(t,a){e.event.surveys[s].selections[a]=t}))})),e.event.description=s.description,e.event.photoEvent=s.photoEvent,e.event.photoHowToReg=s.photoHowToReg,e.event.photoAttGuide=s.photoAttGuide,e.event.photoLecInf=s.photoLecInf,e.event.createdDate=s.createdDate,e.event.addInfors.length>0&&(e.haveAddInfor="yes"),e.event.surveys.length>0&&(e.haveSurvey="yes"))}))}},computed:{},watch:{$route:function(t,e){this.loadEvent(this.$route.params.id)}},created:function(){this.loadEvent(this.$route.params.id)}},c=n,o=(s("6ec0"),s("2877")),r=s("eebe"),l=s.n(r),v=s("9989"),d=s("429b"),u=s("7460"),p=s("eb85"),m=s("adad"),f=s("823b"),_=s("0016"),y=s("66e5"),h=s("3786"),g=s("9c40"),b=Object(o["a"])(c,a,i,!1,null,"c8b6e680",null);e["default"]=b.exports;l()(b,"components",{QPage:v["a"],QTabs:d["a"],QTab:u["a"],QSeparator:p["a"],QTabPanels:m["a"],QTabPanel:f["a"],QIcon:_["a"],QItem:y["a"],QRadio:h["a"],QBtn:g["a"]})},5048:function(t,e,s){},"6ec0":function(t,e,s){"use strict";var a=s("5048"),i=s.n(a);i.a}}]);