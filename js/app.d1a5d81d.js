(function(t){function e(e){for(var o,i,s=e[0],r=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],c[i]&&f.push(c[i][0]),c[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var r=n[s];0!==c[r]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/cnode-lite/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10d9":function(t,e,n){},1364:function(t,e,n){},"178d":function(t,e,n){t.exports=n.p+"img/cnodejs.10b2caeb.svg"},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"getTopics",function(){return $}),n.d(o,"getTopic",function(){return O}),n.d(o,"collectTopic",function(){return P}),n.d(o,"uncollectTopic",function(){return M}),n.d(o,"getCollectedTopics",function(){return U});var c={};n.r(c),n.d(c,"createReply",function(){return S}),n.d(c,"thumbUpReply",function(){return D});var a={};n.r(a),n.d(a,"getUserInfo",function(){return N}),n.d(a,"validateAccessToken",function(){return R});var i={};n.r(i),n.d(i,"getUnreadMessagesCount",function(){return E}),n.d(i,"getMessages",function(){return H}),n.d(i,"readAllMessages",function(){return V}),n.d(i,"readMessage",function(){return F});n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-progress-linear",{staticClass:"progress-bar",attrs:{color:"accent",active:t.loading,fixed:"",indeterminate:""}}),o("v-toolbar",{attrs:{app:"",dense:"","scroll-off-screen":""}},[o("v-toolbar-title",[t.showBackButton?o("v-btn",{attrs:{icon:""},on:{click:function(e){t.$router.back()}}},[o("v-icon",[t._v("arrow_back")])],1):o("v-btn",{attrs:{color:"transparent",flat:"",ripple:!1,to:"/",exact:""}},[o("img",{attrs:{id:"logo-image",src:n("178d"),alt:"CNode Logo"}})])],1),o("v-spacer"),o("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.navItems,function(e){return o("v-btn",{key:e.to,attrs:{flat:"",to:e.to,exact:""}},[t._v(t._s(e.title))])})),t.showTabs?o("AppTabs",{attrs:{slot:"extension",tabs:t.tabs,"active-tab":t.activeTab},on:{"switch-tab":t.switchTab},slot:"extension"}):t._e()],1),o("v-content",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.swipe("Left")},right:function(){return t.swipe("Right")}},expression:"{\n            left: () => swipe('Left'),\n            right: () => swipe('Right')\n        }"}]},[o("router-view")],1),o("v-bottom-nav",{staticClass:"hidden-sm-and-up",attrs:{color:"white",app:"",active:0,value:!0}},t._l(t.navItems,function(e){return o("v-btn",{key:e.to,attrs:{flat:"",to:e.to,exact:""}},[t._v("\n            "+t._s(e.title)+"\n            "),o("v-icon",[t._v(t._s(e.icon))])],1)}))],1)},l=[],u=n("c93e"),p=n("2f62"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{color:"transparent","fixed-tabs":"",value:t.vTabsValue}},t._l(t.tabs,function(e){return n("v-tab",{key:e,on:{click:function(n){t.$emit("switch-tab",e)}}},[t._v("\n        "+t._s(t._f("getTabName")(e))+"\n    ")])}))},d=[],v={name:"AppTabs",props:{tabs:Array,activeTab:String},computed:{vTabsValue:function(){var t=this;return this.tabs.findIndex(function(e){return e===t.activeTab})}}},g=v,h=n("2877"),m=Object(h["a"])(g,f,d,!1,null,null,null);m.options.__file="AppTabs.vue";var b=m.exports,_={name:"App",components:{AppTabs:b},computed:Object(u["a"])({},Object(p["b"])(["loading","loggedIn","autoLogin","userAccessToken","tabs","activeTab","selectedTopic","unreadMessagesCount"]),{showTabs:function(){return"home"===this.$route.name},showBackButton:function(){return"home"!==this.$route.name},navItems:function(){return[{title:"首页",icon:"forum",to:"/"},{title:"我的收藏",icon:"collections_bookmark",to:"/collections"},{title:this.loggedIn?"我":"登录",icon:"person",to:"/account"}]}}),methods:{switchTab:function(t){this.$store.commit("setActiveTab",t),this.$store.dispatch("getTopics"),window.scrollTo({top:0,behavior:"smooth"})},swipe:function(t){var e,n,o=this,c=this.tabs.findIndex(function(t){return t===o.activeTab});if("Right"===t)e=c+1;else{if("Left"!==t)return;e=c-1}n=e>this.tabs.length-1?e-this.tabs.length:e<0?e+this.tabs.length:e,this.switchTab(this.tabs[n])}},created:function(){this.$store.dispatch("getTopics"),this.autoLogin&&this.userAccessToken&&this.$store.dispatch("validateAccessToken",{accessToken:this.userAccessToken})}},T=_,k=Object(h["a"])(T,r,l,!1,null,null,null);k.options.__file="App.vue";var w=k.exports,y=n("8c4f"),C=JSON.parse(localStorage.getItem("user"));C||(C={id:"",userAccessToken:"",autoLogin:!1});var A={loading:!1,loggedIn:!1,userId:C.id,userAccessToken:C.accessToken,autoLogin:C.autoLogin,userInfo:null,tabs:["all","good","share","ask","job"],activeTab:"all",totalPages:1,topics:null,collectedTopics:null,topic:null},x={setLoading:function(t,e){t.loading=e},setLoggedIn:function(t,e){t.loggedIn=e},setUser:function(t,e){t.userId=e.id,t.userAccessToken=e.accessToken,t.autoLogin=e.autoLogin},setAutoLogin:function(t,e){t.autoLogin=e},setUserInfo:function(t,e){t.userInfo=e},setActiveTab:function(t,e){t.activeTab=e,t.totalPages=1},setTotalPages:function(t,e){t.totalPages=e},setTopic:function(t,e){t.topic=e},setTopics:function(t,e){1!==t.totalPages?t.topics=t.topics.concat(e):t.topics=e},setCollectedTopics:function(t,e){t.collectedTopics=e}},I="https://cnodejs.org/api/v1";function L(t,e){return new Promise(function(n,o){var c;c=e?fetch(t,e):fetch(t),c.then(function(t){t.ok&&t.json().then(function(t){return n(t)})}).catch(function(t){return o(t)})})}function j(t){return{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}}function $(t,e){var n="".concat(I,"/topics?limit=20");return t&&(n+="&tab=".concat(t)),e&&(n+="&page=".concat(e)),L(n)}function O(t,e){var n="".concat(I,"/topic/").concat(t);return e&&(n+="?accesstoken=".concat(e)),L(n)}function P(t,e){var n="".concat(I,"/topic_collect/collect"),o=j({accesstoken:t,topic_id:e});return L(n,o)}function M(t,e){var n="".concat(I,"/topic_collect/de_collect"),o=j({accesstoken:t,topic_id:e});return L(n,o)}function U(t){var e="".concat(I,"/topic_collect/").concat(t);return L(e)}function S(t,e,n,o){var c="".concat(I,"/topic/").concat(t,"/replies"),a={accesstoken:e,content:n};o&&(a.reply_id=o);var i=j(a);return L(c,i)}function D(t,e){var n="".concat(I,"/reply/").concat(t,"/ups"),o=j({accesstoken:e});return L(n,o)}function N(t){var e="".concat(I,"/user/").concat(t);return L(e)}function R(t){var e="".concat(I,"/accesstoken"),n=j({accesstoken:t});return L(e,n)}function E(t){var e="".concat(I,"/message/count?accesstoken=").concat(t);return L(e)}function H(t){var e="".concat(I,"/messages?accesstoken=").concat(t);return L(e)}function V(t){var e="".concat(I,"/message/mark_all"),n=j({accesstoken:t});return L(e,n)}function F(t,e){var n="".concat(base,"/message/mark_one/").concat(e),o=j({accesstoken:t});return L(n,o)}var B={topic:o,reply:c,user:a,message:i},G=B;function J(t){return t.map(function(t){return{id:t.id,author:{id:t.author_id,name:t.author.loginname,avatar:t.author.avatar_url},title:t.title,isTop:t.top,isGood:t.good,tab:t.tab,createAt:t.create_at,lastReplyAt:t.last_reply_at,replyCount:t.reply_count,visitCount:t.visit_count}})}function Y(t){return{id:t.id,author:{id:t.author_id,name:t.author.loginname,avatar:t.author.avatar_url},title:t.title,collected:t.is_collect,isTop:t.top,isGood:t.good,tab:t.tab,replyCount:t.reply_count,visitCount:t.visit_count,createAt:t.create_at,lastReplyAt:t.last_reply_at,content:t.content,replies:t.replies.map(function(t){return{id:t.id,author:{name:t.author.loginname,avatar:t.author.avatar_url},createAt:t.create_at,content:t.content,replyId:t.reply_id,ups:t.ups,uped:t.is_uped}})}}var z={getTopics:function(t){var e=t.commit,n=t.state,o=n.activeTab,c=n.totalPages;e("setLoading",!0),G.topic.getTopics(o,c).then(function(t){var n=J(t.data);e("setTopics",n),e("setLoading",!1)}).catch(function(t){return console.log(t)})},getTopic:function(t,e){var n=t.commit,o=t.state,c=e.id,a=(o.loggedIn,o.userAccessToken);return n("setLoading",!0),new Promise(function(t){G.topic.getTopic(c,a).then(function(e){var o=Y(e.data);n("setTopic",o),n("setLoading",!1),t()}).catch(function(t){return console.log(t)})})},validateAccessToken:function(t,e){var n=t.commit,o=t.dispatch,c=t.state,a=e.accessToken,i=c.autoLogin;G.user.validateAccessToken(a).then(function(t){if(t.success){var e={id:t.id,accessToken:a,autoLogin:i};localStorage.setItem("user",JSON.stringify(e)),n("setUser",e),o("getUserInfo",{loginName:t.loginname})}}).catch(function(t){return console.log(t)})},getUserInfo:function(t,e){var n=t.commit,o=e.loginName;n("setLoading",!0),G.user.getUserInfo(o).then(function(t){var e=t.data,o={name:e.loginname,avatar:e.avatar_url,githubUserName:e.githubUsername,createAt:e.create_at,score:e.score};n("setUserInfo",o),n("setLoggedIn",!0),n("setLoading",!1)}).catch(function(t){return console.log(t)})},collectTopic:function(t,e){var n=t.state,o=e.id,c=n.userAccessToken;return new Promise(function(t){G.topic.collectTopic(c,o).then(function(e){return t(e.success)}).catch(function(t){return console.log(t)})})},uncollectTopic:function(t,e){var n=t.state,o=e.id,c=n.userAccessToken;return new Promise(function(t,e){G.topic.uncollectTopic(c,o).then(function(e){return t(e.success)}).catch(function(t){return console.log(t)})})},getCollectedTopics:function(t){var e=t.commit,n=t.state,o=n.userInfo;e("setLoading",!0),G.topic.getCollectedTopics(o.name).then(function(t){var n=J(t.data);e("setCollectedTopics",n),e("setLoading",!1)})},thumbUpReply:function(t,e){var n=t.state,o=e.id,c=n.userAccessToken;return new Promise(function(t){G.reply.thumbUpReply(o,c).then(function(e){return t(e.action)}).catch(function(t){return console.log(t)})})}};s["default"].use(p["a"]);var q=new p["a"].Store({state:A,mutations:x,actions:z}),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[t.topics?n("TopicPreviewList",{attrs:{topics:t.topics}}):t._e()],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:"","justify-center":""}},[n("div",{staticClass:"pa-3"},[t._v("加载更多......")])])],1)],1)},Q=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"ul"},t._l(t.topics,function(e){return n("li",{key:e.id},[n("TopicPreview",{attrs:{topic:e},on:{"check-topic":function(n){t.checkTopic(e.id)}}}),n("v-divider")],1)}))},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"topic-preview mx-auto pa-2",on:{click:function(e){t.$emit("check-topic",t.topic.id)}}},[n("v-avatar",{staticClass:"mr-2",attrs:{size:"32"}},[n("img",{attrs:{src:t.topic.author.avatar,alt:"Avatar Image"}})]),n("span",{staticClass:"subheading mr-2"},[t._v(t._s(t.topic.author.name))]),n("span",{staticClass:"caption"},[t._v(t._s(t._f("getTimeAgo")(t.topic.createAt)))]),n("span",{staticClass:"topic-tag d-inline-block",class:{highlight:t.topic.isTop||t.topic.isGood}},[t._v("\n        "+t._s(t._f("getTabName")(t.topic.isTop?"top":t.topic.isGood?"good":t.topic.tab))+"\n    ")]),n("div",{staticClass:"title mx-5 my-2"},[t._v(t._s(t.topic.title))]),n("div",{staticClass:"flex-justify-end"},[n("span",{staticClass:"d-inline-block caption"},[t._v("\n            "+t._s(t.topic.visitCount)+"\n            "),n("v-icon",{staticClass:"caption"},[t._v("visibility")])],1),n("span",{staticClass:"d-inline-block caption"},[t._v("\n            "+t._s(t.topic.replyCount)+"\n            "),n("v-icon",{staticClass:"caption"},[t._v("reply")])],1)])],1)},tt=[],et={name:"TopicPreview",props:{topic:Object}},nt=et,ot=(n("c601"),Object(h["a"])(nt,Z,tt,!1,null,"5b09088f",null));ot.options.__file="TopicPreview.vue";var ct=ot.exports,at={name:"TopicPreviewList",components:{TopicPreview:ct},props:{topics:Array},methods:{checkTopic:function(t){var e=this;this.$store.dispatch("getTopic",{id:t}).then(function(){return e.$router.push("/topic/".concat(t))})}}},it=at,st=Object(h["a"])(it,W,X,!1,null,null,null);st.options.__file="TopicPreviewList.vue";var rt=st.exports,lt={name:"HomeView",components:{TopicPreviewList:rt},computed:Object(p["b"])(["topics"]),watch:{topics:function(){window.onscroll=this.handleScrollDown}},methods:{handleScrollDown:function(){if(window.scrollY+window.innerHeight>=document.body.scrollHeight){window.onscroll=null;var t=this.$store.state.totalPages;this.$store.commit("setTotalPages",t+1),this.$store.dispatch("getTopics")}}},mounted:function(){window.onscroll=this.handleScrollDown},destroyed:function(){window.onscroll=null}},ut=lt,pt=Object(h["a"])(ut,K,Q,!1,null,null,null);pt.options.__file="HomeView.vue";var ft=pt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[t.loggedIn?n("v-card",{staticClass:"pa-3 text-xs-center"},[n("v-avatar",{staticClass:"d-block mx-auto mb-5",attrs:{size:"96"}},[n("img",{attrs:{src:t.userInfo.avatar,alt:"Avatar Image"}})]),n("div",{staticClass:"body-2"},[t._v("\n            "+t._s(t.userInfo.name)+"\n            "),n("span",{staticClass:"caption ml-2"},[t._v("\n                注册于："+t._s(t._f("getTimeAgo")(t.userInfo.createAt))+"\n            ")])]),n("div",[t._v("\n            CNode：\n            "),n("a",{staticClass:"info--text",attrs:{href:"https://cnodejs.org/user/"+t.userInfo.name,target:"_blank"}},[t._v("\n                @"+t._s(t.userInfo.name)+"\n            ")])]),n("div",[t._v("\n            Github：\n            "),n("a",{staticClass:"info--text",attrs:{href:"https://github.com/"+t.userInfo.githubUserName,target:"_blank"}},[t._v("\n                @"+t._s(t.userInfo.githubUserName)+"\n            ")])]),n("div",[t._v("积分："+t._s(t.userInfo.score))]),n("v-btn",{on:{click:t.logout}},[t._v("退出登录")])],1):n("LoginForm")],1)},vt=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{staticClass:"mt-5 px-5 text-xs-center",attrs:{column:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"Access Token",clearable:""},model:{value:t.accessToken,callback:function(e){t.accessToken=e},expression:"accessToken"}})],1),n("v-flex",[n("v-checkbox",{attrs:{label:"自动登录"},model:{value:t.autoLogin,callback:function(e){t.autoLogin=e},expression:"autoLogin"}})],1),n("v-flex",[n("v-btn",{attrs:{loading:t.loading,block:""},on:{click:t.validate}},[t._v("\n                登录\n            ")])],1)],1)],1)},ht=[],mt={name:"LoginForm",data:function(){return{accessToken:"",autoLogin:!1,loading:!1}},methods:{validate:function(){this.$store.commit("setAutoLogin",this.autoLogin),this.$store.dispatch("validateAccessToken",{accessToken:this.accessToken})}},created:function(){this.accessToken=this.$store.state.userAccessToken,this.autoLogin=this.$store.state.autoLogin}},bt=mt,_t=Object(h["a"])(bt,gt,ht,!1,null,null,null);_t.options.__file="LoginForm.vue";var Tt=_t.exports,kt={name:"AccountView",components:{LoginForm:Tt},computed:Object(p["b"])(["loggedIn","userInfo"]),methods:{logout:function(){this.$store.commit("setLoggedIn",!1)}}},wt=kt,yt=Object(h["a"])(wt,dt,vt,!1,null,null,null);yt.options.__file="AccountView.vue";var Ct=yt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.collectedTopics?n("TopicPreviewList",{attrs:{topics:t.collectedTopics}}):t._e()],1)},xt=[],It={name:"MyCollectionsView",components:{TopicPreviewList:rt},computed:Object(p["b"])(["collectedTopics"]),created:function(){this.$store.dispatch("getCollectedTopics")}},Lt=It,jt=Object(h["a"])(Lt,At,xt,!1,null,null,null);jt.options.__file="MyCollectionsView.vue";var $t=jt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showTopic?n("TopicDetail",{attrs:{topic:t.topic}}):t._e()},Pt=[],Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.alert?n("v-alert",{staticClass:"alert",attrs:{type:t.alert.type,transition:"slide-x-reverse-transition",dismissible:""},on:{click:t.dismissAlert},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("\n        "+t._s(t.alert.message)+"\n    ")]):t._e(),n("div",{staticClass:"headline"},[t._v(t._s(t.topic.title))]),n("span",{staticClass:"caption mr-2"},[t._v("发布于 "+t._s(t._f("getTimeAgo")(t.topic.createAt)))]),n("span",{staticClass:"caption mr-2"},[t._v("作者 "+t._s(t.topic.author.name))]),n("span",{staticClass:"caption"},[t._v("\n        "+t._s(t.topic.visitCount)+"\n        "),n("v-icon",{staticClass:"caption"},[t._v("visibility")])],1),t.loggedIn?n("v-btn",{staticClass:"caption",attrs:{icon:"",ripple:!1},on:{click:function(e){t.collectTopicAction(t.topic.id)}}},[n("v-icon",{attrs:{color:t.topic.collected?"info":"",small:""}},[t._v("\n            "+t._s(t.topic.collected?"star":"star_border")+"\n        ")])],1):t._e(),n("v-divider"),n("v-container",{domProps:{innerHTML:t._s(t.topic.content)}}),n("v-divider"),n("div",[t._v(t._s(t.topic.replyCount)+" 回复")]),n("v-divider"),n("ul",{staticClass:"ul"},t._l(t.topic.replies,function(e){return n("li",{key:e.id,staticClass:"pa-1"},[n("div",{staticClass:"flex"},[n("v-avatar",{staticClass:"mr-3",attrs:{size:"24"}},[n("img",{attrs:{src:e.author.avatar,alt:"Avatar Image"}})]),n("span",{staticClass:"subheading mr-2"},[t._v(t._s(e.author.name))]),n("span",{staticClass:"caption mr-2"},[t._v(t._s(t._f("getTimeAgo")(e.createAt)))]),n("span",{staticClass:"caption"},[t._v("\n                    "+t._s(e.uped?e.ups.length+1:e.ups.length)+"\n                    "),n("v-icon",{attrs:{small:"",color:e.uped?"info":""},on:{click:function(n){t.thumbUpReply(e.id)}}},[t._v("thumb_up")])],1)],1),n("v-container",{staticClass:"reply-content",domProps:{innerHTML:t._s(e.content)}}),n("v-divider")],1)}))],1)},Ut=[],St={name:"TopicDetail",props:{topic:Object},data:function(){return{alert:null}},computed:Object(u["a"])({},Object(p["b"])(["loggedIn"]),{starIcon:function(){return this.topic.collected?"star":"star_border"}}),watch:{alert:function(){var t=this;setTimeout(function(){return t.alert=null},2e3)}},methods:{collectTopicAction:function(t){var e=this;this.loggedIn?this.topic.collected?this.$store.dispatch("uncollectTopic",{id:t}).then(function(t){t?(e.alert={type:"success",message:"取消收藏！"},e.$store.commit("setTopic",Object(u["a"])({},e.topic,{collected:!1}))):e.alert={type:"info",message:"你还没有收藏这篇话题！"}}):this.$store.dispatch("collectTopic",{id:t}).then(function(t){t?(e.alert={type:"success",message:"成功收藏！"},e.$store.commit("setTopic",Object(u["a"])({},e.topic,{collected:!0}))):e.alert={type:"info",message:"你已经收藏过了！"}}):this.alert={type:"error",message:"你还没有登录哦！"}},thumbUpReply:function(t){var e=this;this.loggedIn?this.$store.dispatch("thumbUpReply",{id:t}).then(function(n){e.$store.commit("setTopic",Object(u["a"])({},e.topic,{replies:e.topic.replies.map(function(e){if(e.id===t){var o="up"===n;return Object(u["a"])({},e,{uped:o})}return e})}))}):this.alert={type:"error",message:"你还没有登录哦！"}},dismissAlert:function(){this.alert=null}}},Dt=St,Nt=Object(h["a"])(Dt,Mt,Ut,!1,null,null,null);Nt.options.__file="TopicDetail.vue";var Rt=Nt.exports,Et={name:"TopicDetailView",components:{TopicDetail:Rt},props:{id:String},data:function(){return{showTopic:!1}},computed:Object(p["b"])(["topic"]),created:function(){var t=this;this.topic?this.showTopic=!0:this.$store.dispatch("getTopic",{id:this.id}).then(function(){return t.showTopic=!0})}},Ht=Et,Vt=Object(h["a"])(Ht,Ot,Pt,!1,null,null,null);Vt.options.__file="TopicDetailView.vue";var Ft=Vt.exports,Bt=[{path:"/",name:"home",component:ft},{path:"/account",name:"account",component:Ct},{path:"/collections",name:"collections",component:$t,beforeEnter:function(t,e,n){q.state.loggedIn?q.dispatch("getCollectedTopics").then(n):n("/account")}},{path:"/topic/:id",name:"topic",props:!0,component:Ft}];s["default"].use(y["a"]);var Gt=new y["a"]({routes:Bt,scrollBehavior:function(t,e,n){if("topic"===t.name)return{y:0}}}),Jt=n("ce5b"),Yt=n.n(Jt);n("bf40"),n("d1e7");s["default"].use(Yt.a),s["default"].filter("getTabName",function(t){switch(t){case"top":return"置顶";case"good":return"精华";case"share":return"分享";case"ask":return"问答";case"job":return"招聘";case"all":default:return"全部"}}),s["default"].filter("getTimeAgo",function(t){var e=new Date(Date.now()),n=new Date(t);return e.getFullYear()===n.getFullYear()?e.getMonth()===n.getMonth()?e.getDate()===n.getDate()?e.getHours()===n.getHours()?"".concat(e.getMinutes()-n.getMinutes(),"分钟前"):"".concat(e.getHours()-n.getHours(),"小时前"):"".concat(e.getDate()-n.getDate(),"天前"):"".concat(e.getMonth()-n.getMonth(),"月前"):"".concat(e.getFullYear()-n.getFullYear(),"年前")});n("10d9");s["default"].config.productionTip=!1,new s["default"]({router:Gt,store:q,render:function(t){return t(w)}}).$mount("#app")},c601:function(t,e,n){"use strict";var o=n("1364"),c=n.n(o);c.a}});
//# sourceMappingURL=app.d1a5d81d.js.map