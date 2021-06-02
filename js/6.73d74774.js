(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"199a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"row q-ma-sm"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[a("q-btn",{attrs:{color:this.getColorNot(),label:this.getErroLabel()},on:{click:e.showNotif}})],1),a("div",{staticClass:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},[a("CardBadge",{attrs:{title:"Temperatura",borderColor:"#00ff00",color:"primary"},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"text-h5 text-black"},[e._v("\n              "+e._s(e.getTemperatura)+"°C\n            ")])]},proxy:!0}])})],1),a("div",{staticClass:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},[a("CardBadge",{attrs:{title:"Umidade",borderColor:"#00ff00",color:"primary"},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"text-h5 text-black"},[e._v("\n              "+e._s(e.getUmidade)+"%\n            ")])]},proxy:!0}])})],1)])])])},r=[],n=a("a34a"),c=a.n(n),o=(a("96cf"),a("551c"),a("06db"),a("c973")),i=a.n(o),d=a("5337"),l=a("4a88"),f=a("34f1"),u={name:"MD4",components:{CardBadge:d["a"],LineChart:l["a"],Container:f["a"]},data:function(){return{temperatura:0,umidade:0,erro:0}},computed:{getTemperatura:function(){return"-127"==String(this.temperatura)?"erro":"".concat(this.temperatura)},getUmidade:function(){return"-127"==String(this.umidade)?"erro":"".concat(this.umidade)}},methods:{getCaption:function(){switch(this.erro){case 0:return"Verifique sua conexão com a internet.\nSe demorar muito, o sistema pode estar offline.";case 1:return"Há alguém";case 2:return"Temperatura: "+this.temperatura+"°C";case 3:return"Umidade: "+this.umidade+"%";default:return"Não te preocupes"}},getErroLabel:function(){switch(this.erro){case 0:return"Carregando Dados";case 1:return"Erro na Temperatura";case 2:return"Erro na Umidade";default:return"Tudo ok :)"}},getColorNot:function(){switch(this.erro){case 0:return"grey";case 1:return"pink-13";case 2:return"deep-orange";case 3:return"orange";default:return"black"}},showNotif:function(){this.$q.notify({message:this.getErroLabel(),color:this.getColorNot(),caption:this.getCaption()})},handleData:function(){var e=this;function t(){return a.apply(this,arguments)}function a(){return a=i()(c.a.mark((function e(){var t,a,s,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],a="https://cors-anywhere.herokuapp.com/http://7345653d8e71.ngrok.io; //https://api.jsonbin.io/b/5ee79d3c0e966a7aa369f1f5",e.next=4,fetch(a);case 4:return s=e.sent,e.next=7,s.json();case 7:return r=e.sent,t=[r.TempDHT22,r.UmidDHT22,r.pir],e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}var s=t();console.log(s);var r=new Promise((function(e,t){setTimeout((function(){e(s)}),null)}));r.then((function(t){e.temperatura=t[0],e.umidade=t[1],e.temperatura>60?e.erro=1:e.umidade>40?e.erro=2:e.erro=4}))}},created:function(){var e=this;return i()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handleData();case 1:case"end":return t.stop()}}),t)})))()}},j=u,b=a("2877"),m=a("eebe"),p=a.n(m),h=a("9989"),g=a("9c40"),v=Object(b["a"])(j,s,r,!1,null,"822c29f6",null);t["default"]=v.exports;p()(v,"components",{QPage:h["a"],QBtn:g["a"]})},"34f1":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{class:e.elevated&&"shadow-8"},[a("q-card-section",{staticClass:"text-h6 text-blue-grey-8 text-weight-medium"},[e._v("\n    "+e._s(e.label)+"\n  ")]),a("q-separator"),a("q-card-section",{staticClass:"bg-grey-1"},[e._t("default")],2),a("q-inner-loading",{attrs:{showing:e.loading}},[a("q-spinner-gears",{attrs:{size:"140px",color:"white"}})],1)],1)},r=[],n={name:"Container",props:{label:{type:String},elevated:{type:Boolean},loading:{type:Boolean,default:!1}}},c=n,o=a("2877"),i=a("eebe"),d=a.n(i),l=a("f09f"),f=a("a370"),u=a("eb85"),j=a("74f7"),b=a("cf57"),m=Object(o["a"])(c,s,r,!1,null,"6a427d76",null);t["a"]=m.exports;d()(m,"components",{QCard:l["a"],QCardSection:f["a"],QSeparator:u["a"],QInnerLoading:j["a"],QSpinnerGears:b["a"]})},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"4a88":function(e,t,a){"use strict";var s,r,n=a("1fca"),c=n["b"].reactiveProp,o={name:"LineChart",extends:n["a"],mixins:[c],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},i=o,d=a("2877"),l=Object(d["a"])(i,s,r,!1,null,"7c1ae5d1",null);t["a"]=l.exports},5337:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"shadow-8",style:e.borderColor?"border-left: .25rem solid "+e.borderColor+" !important;":""},[a("q-card-section",{staticClass:"row",attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-xs-8 justify-center"},[a("div",{staticClass:"col"},[a("div",{class:"text-subtitle1 text-weight-medium text-"+e.color},[e._v("\n        "+e._s(e.title)+"\n      ")]),a("div",[e._t("content")],2)])]),a("q-card-section",{staticClass:"col-xs-4 content-center text-right"},[a("q-icon",{staticClass:"text-blue-grey-2",attrs:{name:e.icon,size:"lg"}})],1)],1)],1)},r=[],n={name:"CardBadge",props:{title:{type:String,required:!0},icon:{type:String,default:""},color:{type:String,default:"blue-grey-8"},borderColor:{type:String,default:"#616161"}}},c=n,o=a("2877"),i=a("eebe"),d=a.n(i),l=a("f09f"),f=a("a370"),u=a("0016"),j=Object(o["a"])(c,s,r,!1,null,"41542e66",null);t["a"]=j.exports;d()(j,"components",{QCard:l["a"],QCardSection:f["a"],QIcon:u["a"]})}}]);