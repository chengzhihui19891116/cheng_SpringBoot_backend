webpackJsonp([1],{"1sSq":function(t,e){},LnQL:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW");function i(t){return t.sort((t,e)=>t.name.localeCompare(e.name))}var s={created(){this.fetchData()},data:()=>({showMalePetsArr:[],showFemalePetsArr:[],cityChoose:"",my_todayWeather:"",cityMsg:""}),computed:{},methods:{handleCommand(t){this.cityChoose=t,this.$axios.get("http://localhost:6060/getWeather/"+t+"/?timeid="+(new Date).valueOf()).then(t=>{var e=t.data.data,a=e.forecast[0];this.my_todayWeather=a,this.cityMsg=e}).catch(function(t){console.log(t)})},fetchData(){this.$axios.get("https://5c92dbfae7b1a00014078e61.mockapi.io/owners").then(t=>{for(var e=t.data,a=[],r=[],s=0;s<e.length;s++)"Male"==e[s].gender&null!==e[s].pets?a.push(e[s].pets):"Female"==e[s].gender&null!==e[s].pets&&r.push(e[s].pets);var l=[];for(s=0;s<a.length;s++)for(var n=a[s],o=0;o<n.length;o++)"Cat"==n[o].type&&l.push(n[o]);var _=[];for(s=0;s<r.length;s++){var v=r[s];for(o=0;o<v.length;o++)"Cat"==v[o].type&&_.push(v[o])}i(_),this.showFemalePetsArr=_,i(l),this.showMalePetsArr=l}).catch(function(t){console.log(t)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("br"),a("br"),t._v(" "),a("div",{staticStyle:{float:"left"}},t._l(t.showMalePetsArr,function(e,r){return a("div",{key:r},[t._v(t._s(e.name))])}),0),t._v(" "),a("br"),t._v(" "),a("div",{staticStyle:{"margin-top":"100px"}},[t._m(1),a("br"),a("br"),t._v(" "),a("div",{staticStyle:{float:"left"}},t._l(t.showFemalePetsArr,function(e,r){return a("div",{key:r},[t._v(t._s(e.name))])}),0)]),t._v(" "),a("div",{staticStyle:{"margin-top":"150px",width:"200px"}},[a("el-dropdown",{attrs:{"split-button":"",type:"primary"},on:{command:t.handleCommand}},[t._v("\n                Weather for china\n                "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"大连"}},[t._v("大连")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"朝阳"}},[t._v("朝阳")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"凌源"}},[t._v("凌源")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{width:"250px"}},[a("div",["大连"==this.cityChoose?a("div",{staticStyle:{float:"left"}},[a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("City:"+t._s(t.cityMsg.city))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Update time:"+t._s(t.my_todayWeather.date))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Weather:"+t._s(t.my_todayWeather.type))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Temperature:"+t._s(t.my_todayWeather.high)+" "+t._s(t.my_todayWeather.low))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Wind:"+t._s(t.my_todayWeather.fengxiang))]),a("br")]):t._e()]),t._v(" "),"朝阳"==this.cityChoose?a("div",{staticStyle:{float:"left"}},[a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("City:"+t._s(t.cityMsg.city))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Update time:"+t._s(t.my_todayWeather.date))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Weather:"+t._s(t.my_todayWeather.type))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Temperature:"+t._s(t.my_todayWeather.high)+" "+t._s(t.my_todayWeather.low))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Wind:"+t._s(t.my_todayWeather.fengxiang))]),a("br")]):t._e(),t._v(" "),"凌源"==this.cityChoose?a("div",{staticStyle:{float:"left"}},[a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("City:"+t._s(t.cityMsg.city))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Update time:"+t._s(t.my_todayWeather.date))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Weather:"+t._s(t.my_todayWeather.type))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Temperature:"+t._s(t.my_todayWeather.high)+" "+t._s(t.my_todayWeather.low))]),a("br"),t._v(" "),a("div",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("Wind:"+t._s(t.my_todayWeather.fengxiang))]),a("br")]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{float:"left"}},[e("h3",[this._v("Male")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{float:"left"}},[e("h3",[this._v("Female")])])}]};var n={components:{Root:a("VU/8")(s,l,!1,function(t){a("LnQL")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("Root")],1)},staticRenderFns:[]};var _=a("VU/8")(n,o,!1,function(t){a("aGzQ")},null,null).exports,v=a("/ocq"),h={name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App"})},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")(h,f,!1,function(t){a("1sSq")},"data-v-d8ec41bc",null).exports;r.default.use(v.a);var c=new v.a({routes:[]}),d=a("mtWM"),m=a.n(d),p=a("zL8q"),u=a.n(p);a("tvR6");r.default.config.productionTip=!1,r.default.prototype.$axios=m.a,r.default.use(u.a),new r.default({el:"#app",router:c,components:{App:_},template:"<App/>"})},aGzQ:function(t,e){},tvR6:function(t,e){}},["NHnr"]);