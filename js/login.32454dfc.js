(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"265f":function(e,t,s){},"98ac":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"changePwd"})},r=[],i={name:"changePwd"},o=i,a=s("17cc"),l=Object(a["a"])(o,n,r,!1,null,null,null);t["default"]=l.exports},b953:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register"},[s("h1",[e._v("这里是注册页面")])])}],i={name:"register"},o=i,a=s("17cc"),l=Object(a["a"])(o,n,r,!1,null,null,null);t["default"]=l.exports},dc3f:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-box"},[s("span",[e._v(e._s(e.loginName))]),s("div",{staticClass:"flex-row"},[s("el-input",{staticStyle:{position:"fixed",bottom:"-99999px"}}),s("el-input",{staticClass:"user-name",attrs:{placeholder:"请输入用户名"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),s("div"),s("div",{staticClass:"flex-row"},[s("el-input",{staticStyle:{position:"fixed",bottom:"-99999px"},attrs:{type:"password"}}),s("el-input",{staticClass:"user-name",attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("el-button",{attrs:{type:"success"},on:{click:e.login}},[e._v("登录")]),s("div",{staticClass:"flex-row"},[s("div",{staticClass:"item",on:{click:function(t){return e.loginChoose(1)}}},[e._v("前台登录")]),s("div",{staticClass:"item",on:{click:function(t){return e.loginChoose(2)}}},[e._v("后台登录")])])],1)])},r=[];function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e){for(var t=1;t<arguments.length;t++)if(t%2){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){i(e,t,s[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}var a=s("591a"),l={name:"login",data:function(){return{user:"",password:"",loginName:"后台登录"}},computed:{doorKey:function(){return this.$store.state.doorKey}},methods:o({},Object(a["b"])(["saveDoorKey"]),{login:function(){if("后台登录"===this.loginName)if(console.log(111),"admin"===this.user&&"123456"===this.password)this.$router.push({name:"end"}),this.doorKey=!0,this.saveDoorKye(this.doorKey);else{if(!this.user||!this.password)return this.$message.error("数据不能为空"),0;if("admin"!==this.user)return this.$message.error("该用户不存在"),0;if("123456"!==this.password)return this.$message.error("密码填写错误"),0}else"nanjing"===this.user&&"123456"===this.password&&this.$router.push({name:"front"})},loginChoose:function(e){this.loginName=1===e?"前台登录":"后台登录"}})},c=l,u=(s("e330"),s("17cc")),f=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=f.exports},e330:function(e,t,s){"use strict";var n=s("265f"),r=s.n(n);r.a}}]);
//# sourceMappingURL=login.32454dfc.js.map