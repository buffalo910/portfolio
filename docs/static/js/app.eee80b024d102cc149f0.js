webpackJsonp([0],{"+rdz":function(t,s,a){t.exports=a.p+"static/img/pexels-steve-johnson-861414.260c731.jpg"},"4AvH":function(t,s,a){t.exports=a.p+"static/img/pexels-tyler-lastovich-699122.434ba0c.jpg"},"6R3u":function(t,s,a){t.exports=a.p+"static/img/pexels-polina-zimmerman-3747486.e33c294.jpg"},EMlf:function(t,s,a){t.exports=a.p+"static/img/pexels-karolina-grabowska-4475524.232d522.jpg"},Edmx:function(t,s,a){t.exports=a.p+"static/img/pexels-matthias-zomer-339620.0ec2157.jpg"},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),n=a("ijWU"),e=a.n(n),l={data:function(){return{scrollY:0,imageUrl1:"background-image: url(."+e.a+");",imageUrl2:e.a}},mounted:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(){this.scrollY=window.scrollY},scrollToProfile:function(){event.preventDefault(),this.$SmoothScroll(document.querySelector("#tag-profile"),400,null,null,"y")},scrollToWork:function(){event.preventDefault(),this.$SmoothScroll(document.querySelector("#tag-works"),400,null,null,"y")},scrollToSkill:function(){event.preventDefault(),this.$SmoothScroll(document.querySelector("#tag-skills"),400,null,null,"y")},scrollToMotto:function(){event.preventDefault(),this.$SmoothScroll(document.querySelector("#tag-motto"),400,null,null,"y")}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrapper"},[a("div",{class:[t.scrollY<370?"menu-color-0":"menu-color-1"],attrs:{id:"menu"}},[a("p",{staticClass:"menu-text",on:{click:t.scrollToMotto}},[a("span",{staticClass:"menu-text-span"},[a("font-awesome-icon",{attrs:{icon:["fas","coffee"]}}),t._v("MOTTO")],1)]),t._v(" "),a("p",{staticClass:"menu-text",on:{click:t.scrollToSkill}},[a("span",{staticClass:"menu-text-span"},[a("font-awesome-icon",{attrs:{icon:["fas","server"]}}),t._v("SKILL")],1)]),t._v(" "),a("p",{staticClass:"menu-text",on:{click:t.scrollToWork}},[a("span",{staticClass:"menu-text-span"},[a("font-awesome-icon",{attrs:{icon:["fas","briefcase"]}}),t._v("WORK")],1)]),t._v(" "),a("p",{staticClass:"menu-text",on:{click:t.scrollToProfile}},[a("span",{staticClass:"menu-text-span"},[a("font-awesome-icon",{attrs:{icon:["fas","id-card"]}}),t._v("PROFILE")],1)])]),t._v(" "),a("header",{style:t.imageUrl1,attrs:{id:"header"}},[t._m(0)]),t._v("\n  "+t._s(t.imageUrl1)+"\n  "+t._s(t.imageUrl2)+"\n")])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"title"},[s("span",{staticClass:"title-text"},[this._v("My Portfolio")])])}]};var c=a("VU/8")(l,v,!1,function(t){a("qS6+")},null,null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("main",{attrs:{id:"contents"}},[i("div",{staticStyle:{height:"30px"},attrs:{id:"tag-profile"}}),t._v(" "),i("section",{attrs:{id:"my-profile"}},[i("div",{staticClass:"contents-title"},[i("span",[t._v("My Profile")])]),t._v(" "),i("div",{staticClass:"contents-box"},[i("div",{staticClass:"contents-inner"},[i("p",{staticClass:"text"},[t._v("\n          初めまして、私はかれこれ約２０年に渡り、業務システムの構築を生業としてきました。"),i("br"),t._v("\n          これまで大小様々な、それこそフロントエンドからバックエンドに至るまで幅広く開発に携わってきました。\n          そんな私ですが、現在SIer（それ以外にもテクノロジー全般を扱う企業）で業務を行う毎日を過ごしています。"),i("br"),t._v("\n          これまでの開発の中で得たスキルは（いわゆる）オープン系がメインで、開発現場で技術を磨きてきたため、幅広く知識を持ち合わせていると思っています。\n          また、それ以外にも荒い仕様から実際に動くモノをたたき台として作り、触って感触を確認してもらいながら細部を詰めていく作業も行ってきましたので、\n          コミュニケーションを図りながらスムーズに開発を進めるというようなこともできます。\n        ")])])])]),t._v(" "),i("div",{staticStyle:{height:"30px"},attrs:{id:"tag-works"}}),t._v(" "),i("section",{staticClass:"clear",attrs:{id:"my-works"}},[i("div",{staticClass:"contents-title"},[i("span",[t._v("My Works")])]),t._v(" "),i("div",{staticClass:"contents-box"},[i("div",{staticClass:"contents-inner"},[i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("WA7m"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("バージョン管理システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("開発された部品のバージョンとテストを紐づけて管理するWebシステムを構築。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("UNIX")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("Angular")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("HTML")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("javascript")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("Go")]),t._v(" "),i("p",{staticClass:"environment-l"},[t._v("BlockChain")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("aedD"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("自動配送システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("燃料を拠点から各配送先へ配送する際に、最適な配送ルート選択するWebシステムを構築。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("wondows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("java")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("HTML")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("javascript")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("vZzB"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("見積もりシステム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("見積もりシステム。最適な製品の組み合わせや構成を抽出し、その価格の見積もりを行うシステムを構築。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("wondows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("VB.NET")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("HTML")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("Typescript")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("jQuery")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("SQLServer")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("EMlf"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("人事給与システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("既存となる人事給与システム及び共済システムのコンバージョンを実施。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("windows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("VB.NET")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("Edmx"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("ポータルサイト")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("介護に携わる方々をターゲットととした、介護にまつわる様々な情報を発信するポータルサイトを構築。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("windows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("C#.net")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("RAZOR")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("HTML")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("SU0h"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("アパレル・小売業界向け業務システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("既存システムの新バージョンとなる、基幹システムのフロントエンドを開発。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("windows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("C#.net")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("SOAP")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("SQLServer")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("hyRC"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("フィールド業務向け基幹システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("フィールド業務担当者の作業の進捗状況を外出先から登録、管理するモバイル端末向けシステムの要件定義を実施。")])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("+rdz"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("水道検針・料金収納システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("検針・収納システム（パッケージソフト）について、各水道局の業務にあわせたカスタマイズを実施。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("windows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("Delphi")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("ORACLE")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("jToA"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("名簿調整システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("業務実施候補者の名簿を調整し、候補者から業務実施者の選出、および選任手続きまでを管理するシステムを構築。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("windows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("java")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("JSP")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("HTML")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("SQLServer")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("6R3u"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("設備経費管理システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("企業内における、設備機器及び経費の管理を行うシステムを構築。")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("windows")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("C#.net")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("SQLServer")])])])]),t._v(" "),i("figure",{staticClass:"card"},[i("img",{staticClass:"work-image",attrs:{src:a("s1OW"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("リバースエンジニアリングツール開発")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("メインフレーム上に構築されたシステムのプログラムを解析し、構造をビジュアル化するWebシステムのカスタマイズを実施")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("UNIX")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("LINUX")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("C")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("javascript")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("HTML")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("Perl")])])])]),t._v(" "),i("figure",{staticClass:"card clear"},[i("img",{staticClass:"work-image",attrs:{src:a("4AvH"),alt:""}}),t._v(" "),i("figcaption",{staticClass:"caption"},[i("p",{staticClass:"text bold"},[t._v("携帯電話通話料算出システム")]),t._v(" "),i("p",{staticClass:"overview"},[t._v("各基地局から転送された通話データを解析し、呼種や発信地域等をもとに料金を算出するシステムの改修を実施")]),t._v(" "),i("div",{staticClass:"env-box"},[i("p",{staticClass:"environment-m"},[t._v("UNIX")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("C")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("pro*C")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("ORACLE")]),t._v(" "),i("p",{staticClass:"environment-m"},[t._v("shell")])])])])])])]),t._v(" "),i("div",{staticStyle:{height:"30px"},attrs:{id:"tag-skills"}}),t._v(" "),i("section",{attrs:{id:"my-skills"}},[i("div",{staticClass:"contents-title"},[i("span",[t._v("My Skills")])]),t._v(" "),i("div",{staticClass:"contents-box"},[i("div",{staticClass:"contents-inner"},[i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("Java")]),i("span",[t._v("★★★★☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("C#.NET")]),i("span",[t._v("★★★☆☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("Go")]),i("span",[t._v("★★☆☆☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("VB.NET")]),i("span",[t._v("★★★★☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("C")]),i("span",[t._v("★★★★☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("Typescript")]),i("span",[t._v("★★★☆☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("jQuery")]),i("span",[t._v("★★★★☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("javascript")]),i("span",[t._v("★★★☆☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("Angular CLI")]),i("span",[t._v("★★☆☆☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("SQL")]),i("span",[t._v("★★★★☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("Git")]),i("span",[t._v("★★★☆☆")])])]),t._v(" "),i("div",{staticClass:"skill-canvas"},[i("p",{staticClass:"skill"},[i("span",[t._v("Agile")]),i("span",[t._v("★★☆☆☆")])])])])])]),t._v(" "),i("div",{staticStyle:{height:"30px"},attrs:{id:"tag-motto"}}),t._v(" "),i("section",{attrs:{id:"my-motto"}},[i("div",{staticClass:"contents-title"},[i("span",[t._v("My Motto")])]),t._v(" "),i("div",{staticClass:"contents-box"},[i("div",{staticClass:"contents-inner"},[i("p",{staticClass:"text",staticStyle:{"text-align":"center","font-size":"30px"}},[t._v("知らざるを知らずと為す是知るなり")]),t._v(" "),i("p",{staticClass:"text"},[i("br"),t._v("\n          その昔、中国の孔子という人物とその弟子達によって記録された「論語」の中のフレーズだそうですが、\n          意味は「知らない事は、知らないと自覚すること、これが本当の知るということである」となります。"),i("br"),t._v("\n          まぁ、そののままですね。"),i("br"),t._v("\n          要するに、知ったかぶりせず、きちんと学びましょうというとなのですが、人間そうありたいですね。\n        ")])])])])])}]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrapper"},[s("footer",{attrs:{id:"footer"}},[s("span",{staticClass:"title-text"},[this._v("Portfolio")])])])}]};var p={name:"App",components:{Header:c,Contents:a("VU/8")(null,o,!1,function(t){a("otzk")},null,null).exports,Footer:a("VU/8")(null,r,!1,function(t){a("dLSB")},null,null).exports}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("Contents"),s("Footer")],1)},staticRenderFns:[]};var m=a("VU/8")(p,_,!1,function(t){a("iv5r")},null,null).exports,C=a("C/JF"),d=a("fhbW"),u=a("Yu89"),f=a("1e6/"),g=a("KLw7"),x=a.n(g);C.c.add(d.a,u.a),i.a.component("font-awesome-icon",f.a),i.a.config.productionTip=!1,i.a.use(x.a),new i.a({el:"#app",components:{App:m},template:"<App/>"}),new i.a({el:"#Header",components:{Header:c}})},SU0h:function(t,s,a){t.exports=a.p+"static/img/pexels-artem-beliaikin-994523.24758db.jpg"},WA7m:function(t,s,a){t.exports=a.p+"static/img/pexels-shane-aldendorff-924675.88b8e4f.jpg"},aedD:function(t,s,a){t.exports=a.p+"static/img/pexels-pixabay-162568.6a5e517.jpg"},dLSB:function(t,s){},hyRC:function(t,s,a){t.exports=a.p+"static/img/pexels-nout-gons-378570.553befb.jpg"},ijWU:function(t,s,a){t.exports=a.p+"static/img/pexels-ena-marinkovic-5843609.1cf0551.jpg"},iv5r:function(t,s){},jToA:function(t,s,a){t.exports=a.p+"static/img/pexels-ylanite-koppens-796600.317e1e8.jpg"},otzk:function(t,s){},"qS6+":function(t,s){},s1OW:function(t,s,a){t.exports=a.p+"static/img/pexels-photomix-company-95916.785045a.jpg"},vZzB:function(t,s,a){t.exports=a.p+"static/img/pexels-skitterphoto-349749.410159a.jpg"}},["NHnr"]);
//# sourceMappingURL=app.eee80b024d102cc149f0.js.map