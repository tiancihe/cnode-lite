(function(t){function e(e){for(var o,r,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)r=i[p],n[r]&&f.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},n={app:0},a=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cnode-lite/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("27fb"),n=s.n(o);n.a},"0d42":function(t,e,s){},1783:function(t,e,s){},"23d6":function(t,e,s){},"27fb":function(t,e,s){},2818:function(t,e,s){"use strict";var o=s("0d42"),n=s.n(o);n.a},"2a20":function(t,e,s){},"2cad":function(t,e,s){},5187:function(t,e,s){"use strict";var o=s("c07c"),n=s.n(o);n.a},"55e4":function(t,e,s){"use strict";var o=s("7c78"),n=s.n(o);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.progress?s("ProgressBar",{attrs:{id:"progress-bar",totalStages:t.progress.totalStages,currentStage:t.progress.currentStage},on:{"finish-progress":t.finishProgress}}):t._e(),s("NavigationBar",{attrs:{id:"nav"}}),s("router-view",{attrs:{id:"main"}})],1)},a=[],r=(s("7f7f"),s("f751"),s("2f62")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progress-bar"})},c=[],u=(s("c5f6"),{props:{totalStages:{type:Number,default:1},currentStage:{type:Number,default:0}},computed:{oneStageWidth:function(){return 90/this.totalStages}},watch:{currentStage:function(t,e){this.continueTo(t),t===this.totalStages&&this.finish()}},methods:{continueTo:function(t){this.$el.style.width="".concat(t*this.oneStageWidth+10,"%")},finish:function(){var t=this;this.$el.style.width="100%",setTimeout(function(){return t.$emit("finish-progress")},1e3)}},mounted:function(){this.$el.style.width="10%"}}),l=u,p=(s("9033"),s("2877")),f=Object(p["a"])(l,i,c,!1,null,"c1397252",null);f.options.__file="ProgressBar.vue";var h=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar"},[s("router-link",{attrs:{to:"/",exact:""}},[s("img",{staticClass:"logo-image",attrs:{src:"https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg",alt:"CNode Logo"}})])],1)},v=[],d={name:"NavigationBar"},m=d,b=(s("b654"),Object(p["a"])(m,g,v,!1,null,"18dad232",null));b.options.__file="NavigationBar.vue";var _=b.exports,P={name:"App",components:{ProgressBar:h,NavigationBar:_},computed:Object.assign({},Object(r["b"])(["progress","showPost"]),{currentRoute:function(){return this.$route.name}}),watch:{showPost:function(t,e){!0===t?this.$router.push("/post"):this.$router.push("/")},currentRoute:function(t,e){"post"===e&&"home"===t&&this.$store.commit("setShowPost",{showPost:!1})}},methods:{finishProgress:function(){this.$store.commit("setProgress",{progress:null})}},created:function(){this.$store.dispatch("fetchPosts")}},w=P,T=(s("034f"),Object(p["a"])(w,n,a,!1,null,null,null));T.options.__file="App.vue";var y=T.exports,A=s("8c4f"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("PostPreviewList",{attrs:{id:"post-list"}}),s("CategoryTabs",{attrs:{id:"categories"}})],1)},C=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("AppTabs",{attrs:{tabs:t.tabs,"active-tab":t.activeTab},on:{"switch-tab":t.switchTab}})},S=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"tabs"},t._l(t.tabs,function(e){return s("li",{key:e,staticClass:"tab",class:{active:e===t.activeTab},on:{click:function(s){t.$emit("switch-tab",e)}}},[t._v("\n    "+t._s(t.getTabName(e))+"\n  ")])}))},x=[];function k(t){if(Array.isArray(t))return t.map(function(t){return{id:t.id,author:{name:t.author.loginname,avatar:t.author.avatar_url},title:t.title,isTop:t.top,isGood:t.good,tab:t.tab,createAt:t.create_at,lastReplyAt:t.last_reply_at,replyCount:t.reply_count,visitCount:t.visit_count}});throw new Error("The data passed in to formatPosts() is not an Array!")}var E=s("6bde");function D(t){if("object"===Object(E["a"])(t))return{title:t.title,author:{name:t.author.loginname,avatar:t.author.avatar_url},isTop:t.top,isGood:t.isGood,tab:t.tab,createAt:t.create_at,lastReplyAt:t.last_reply_at,replyCount:t.reply_count,visitCount:t.visit_count,content:t.content,replies:t.replies.map(function(t){return{author:{name:t.author.loginname,avatar:t.author.avatar_url},createAt:t.create_at,content:t.content,ups:t.ups.length}})};throw new Error("The data passed in to formatPost() is not an Object!")}function H(t){switch(t){case"good":return"精华";case"share":return"分享";case"ask":return"问答";case"all":default:return"全部"}}function M(t){var e=new Date(Date.now()),s=new Date(t);return e.getFullYear()===s.getFullYear()?e.getMonth()===s.getMonth()?e.getDate()===s.getDate()?e.getHours()===s.getHours()?"".concat(e.getMinutes()-s.getMinutes(),"分钟前"):"".concat(e.getHours()-s.getHours(),"小时前"):"".concat(e.getDate()-s.getDate(),"天前"):"".concat(e.getMonth()-s.getMonth(),"月前"):"".concat(e.getFullYear()-s.getFullYear(),"年前")}var N={name:"AppTabs",props:{tabs:Array,activeTab:String},methods:{getTabName:H}},B=N,I=(s("55e4"),Object(p["a"])(B,$,x,!1,null,"26c5a2bc",null));I.options.__file="AppTabs.vue";var L=I.exports,z={name:"CategoryTabs",components:{AppTabs:L},computed:Object(r["b"])(["tabs","activeTab"]),methods:{switchTab:function(t){var e=this;new Promise(function(s){e.$store.commit("setActiveTab",{tab:t}),s()}).then(function(){e.$store.dispatch("fetchPosts")}),window.scrollTo({top:0,behavior:"smooth"})}}},G=z,Y=Object(p["a"])(G,O,S,!1,null,null,null);Y.options.__file="CategoryTabs.vue";var F=Y.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"post-preview-list"},t._l(t.posts,function(e){return s("li",{key:e.id,staticClass:"post-preview-item"},[s("PostPreview",{attrs:{post:e},on:{"check-post":t.checkPost}})],1)}))},J=[],W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-preview",on:{click:function(e){t.$emit("check-post",t.post.id)}}},[s("AppAuthorInfo",{attrs:{author:t.post.author}}),s("AppTag",{staticClass:"tag",attrs:{tag:t.tagName,highlight:t.tagHighlight}}),s("h2",[t._v(t._s(t.post.title))]),s("span",{staticClass:"smaller-font-size"},[t._v(t._s(t.getTimeAgo(t.post.createAt)))]),s("span",{staticClass:"smaller-font-size float-right"},[t._v(t._s(t.post.replyCount)+"回帖")])],1)},q=[],K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"author-info"},[t.author.avatar?s("img",{staticClass:"avatar",attrs:{alt:"Avatar Image",src:t.author.avatar}}):s("div",{staticClass:"avatar-alt"}),s("span",{staticClass:"name"},[t._v(t._s(t.author.name?t.author.name:""))])])},Q=[],U={name:"AppAuthorInfo",props:{author:Object}},V=U,X=(s("5187"),Object(p["a"])(V,K,Q,!1,null,"40d21221",null));X.options.__file="AppAuthorInfo.vue";var Z=X.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag",class:{highlight:t.highlight}},[t._v(t._s(t.tag))])},et=[],st={name:"AppTag",props:{tag:String,highlight:Boolean}},ot=st,nt=(s("e56b"),Object(p["a"])(ot,tt,et,!1,null,"5ff2b85e",null));nt.options.__file="AppTag.vue";var at=nt.exports,rt={name:"PostPreview",components:{AppAuthorInfo:Z,AppTag:at},props:{post:Object},computed:{tagHighlight:function(){return this.post.isTop||this.post.isGood},tagName:function(){return this.post.isTop?"置顶":this.post.isGood?"精华":H(this.post.tab)}},methods:{getTimeAgo:M}},it=rt,ct=(s("e246"),Object(p["a"])(it,W,q,!1,null,"1d53cf1a",null));ct.options.__file="PostPreview.vue";var ut=ct.exports,lt={name:"PostPreviewList",components:{PostPreview:ut},computed:Object(r["b"])(["posts"]),watch:{posts:function(){window.onscroll=this.handleScrollDown}},methods:{checkPost:function(t){this.$store.dispatch("fetchPost",{id:t})},handleScrollDown:function(){if(window.scrollY+window.innerHeight>=document.body.scrollHeight){window.onscroll=null;var t=this.$store.state.totalPages;this.$store.commit("setTotalPages",{totalPages:t+1}),this.$store.dispatch("fetchPosts")}}},mounted:function(){window.onscroll=this.handleScrollDown},beforeDestroy:function(){window.onscroll=null}},pt=lt,ft=(s("d928"),Object(p["a"])(pt,R,J,!1,null,"6302bfa8",null));ft.options.__file="PostPreviewList.vue";var ht=ft.exports,gt={name:"Home",components:{CategoryTabs:F,PostPreviewList:ht}},vt=gt,dt=(s("2818"),Object(p["a"])(vt,j,C,!1,null,"0255c45a",null));dt.options.__file="Home.vue";var mt=dt.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("PostDetail")],1)},_t=[],Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post"},[s("div",{staticClass:"header"},[s("h1",[t._v(t._s(t.post.title))]),s("p",{staticClass:"info smaller-font-size"},[s("span",[t._v("发布于 "+t._s(t.getTimeAgo(t.post.createAt)))]),s("span",[t._v("作者 "+t._s(t.post.author.name))]),s("span",[t._v(t._s(t.post.visitCount)+" 次浏览")])])]),s("hr"),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}}),s("hr"),s("div",{staticClass:"reply-count"},[t._v(t._s(t.post.replyCount)+" 回复")]),s("ul",{staticClass:"replies"},t._l(t.post.replies,function(e){return s("li",{key:e.id,staticClass:"reply"},[s("AppAuthorInfo",{attrs:{author:e.author}}),s("div",{domProps:{innerHTML:t._s(e.content)}}),s("span",{staticClass:"smaller-font-size"},[t._v(t._s(t.getTimeAgo(e.createAt)))]),s("span",{staticClass:"smaller-font-size float-right"},[t._v(t._s(e.ups)+" 赞")])],1)}))])},wt=[],Tt={name:"PostDetail",components:{AppAuthorInfo:Z},computed:Object(r["b"])(["post"]),methods:{getTimeAgo:M}},yt=Tt,At=(s("c435"),Object(p["a"])(yt,Pt,wt,!1,null,"57cf1cef",null));At.options.__file="PostDetail.vue";var jt=At.exports,Ct={name:"Post",components:{PostDetail:jt}},Ot=Ct,St=Object(p["a"])(Ot,bt,_t,!1,null,null,null);St.options.__file="Post.vue";var $t=St.exports;o["a"].use(A["a"]);var xt=new A["a"]({routes:[{path:"/",name:"home",component:mt},{path:"/post",name:"post",component:$t}],scrollBehavior:function(t,e,s){return"post"===t.name?{x:0,y:0}:"home"===t.name?s:void 0}}),kt={setProgress:function(t,e){var s=e.progress;t.progress=s},setActiveTab:function(t,e){var s=e.tab;t.activeTab=s,t.totalPages=1},setTotalPages:function(t,e){var s=e.totalPages;t.totalPages=s},setPosts:function(t,e){var s=e.data;1!==t.totalPages?t.posts=t.posts.concat(s):t.posts=s},setPost:function(t,e){var s=e.data;t.post=s},setShowPost:function(t,e){var s=e.showPost;t.showPost=s}},Et="https://cnodejs.org/api/v1";function Dt(t,e){var s="".concat(Et,"/topics?tab=").concat(t,"&page=").concat(e,"&limit=20");return new Promise(function(t,e){fetch(s).then(function(s){s.ok?s.json().then(function(e){return t(e.data)}):e(new Error("".concat(response.status,": ").concat(response.statusText)))})})}function Ht(t){var e="".concat(Et,"/topic/").concat(t);return new Promise(function(t,s){fetch(e).then(function(e){e.ok?e.json().then(function(e){return t(e.data)}):s(new Error("".concat(response.status,": ").concat(response.statusText)))})})}var Mt={fetchPosts:function(t){var e=t.commit,s=t.state,o=s.activeTab,n=s.totalPages,a=s.progress;e("setProgress",{progress:{totalStages:3,currentStage:0}}),Dt(o,n).then(function(t){return e("setProgress",{progress:Object.assign({},a,{currentStage:1})}),new Promise(function(s){var o=k(t);e("setPosts",{data:o}),s()})}).then(function(){e("setProgress",{progress:Object.assign({},a,{currentStage:2})})}).catch(function(t){return console.log(t)})},fetchPost:function(t,e){var s=t.commit,o=t.state,n=e.id,a=o.progress;s("setProgress",{progress:{totalStages:2,currentStage:0}}),Ht(n).then(function(t){return s("setProgress",{progress:Object.assign({},a,{currentStage:1})}),new Promise(function(e){var o=D(t);s("setPost",{data:o}),e()})}).then(function(){s("setShowPost",{showPost:!0}),s("setProgress",{progress:Object.assign({},a,{currentStage:2})})}).catch(function(t){return console.log(t)})}};o["a"].use(r["a"]);var Nt=new r["a"].Store({state:{tabs:["all","good","share","ask"],activeTab:"all",totalPages:1,progress:null,posts:null,post:null,showPost:!1},mutations:kt,actions:Mt});o["a"].config.productionTip=!1,new o["a"]({router:xt,store:Nt,render:function(t){return t(y)}}).$mount("#app")},"7c78":function(t,e,s){},"81e2":function(t,e,s){},9033:function(t,e,s){"use strict";var o=s("23d6"),n=s.n(o);n.a},b654:function(t,e,s){"use strict";var o=s("c5b2"),n=s.n(o);n.a},c07c:function(t,e,s){},c435:function(t,e,s){"use strict";var o=s("2a20"),n=s.n(o);n.a},c5b2:function(t,e,s){},d928:function(t,e,s){"use strict";var o=s("81e2"),n=s.n(o);n.a},e246:function(t,e,s){"use strict";var o=s("2cad"),n=s.n(o);n.a},e56b:function(t,e,s){"use strict";var o=s("1783"),n=s.n(o);n.a}});
//# sourceMappingURL=app.c626f1b2.js.map