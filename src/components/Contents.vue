<template>
  <main id="contents">
    <div id="tag-profile" style="height: 30px;"></div>
    <section id="my-profile">
      <div class="contents-title">
        <span>My Profile</span>
      </div>
      <div class="contents-box">
        <div class="contents-inner">
          <p class="text">
            初めまして、私はかれこれ約２０年に渡り、業務システムの構築を生業としてきました。<br>
            これまで大小様々な、それこそフロントエンドからバックエンドに至るまで幅広く開発に携わってきました。
            そんな私ですが、現在SIer（それ以外にもテクノロジー全般を扱う企業）で業務を行う毎日を過ごしています。<br>
            これまでの開発の中で得たスキルは（いわゆる）オープン系がメインで、開発現場で技術を磨きてきたため、幅広く知識を持ち合わせていると思っています。
            また、それ以外にも荒い仕様から実際に動くモノをたたき台として作り、触って感触を確認してもらいながら細部を詰めていく作業も行ってきましたので、
            コミュニケーションを図りながらスムーズに開発を進めるというようなこともできます。
          </p>
        </div>
      </div>
    </section>
    <div id="tag-works" style="height: 30px;"></div>
    <section id="my-works" class="clear">
      <div class="contents-title">
        <span>My Works</span>
      </div>
      <div class="contents-box">
        <div class="contents-inner">
        <div class="content-work-canvas">
          <figure class="card">
            <img class="work-image" src="../assets/pexels-shane-aldendorff-924675.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">バージョン管理システム</p>
              <p class="overview">開発された部品のバージョンとテストを紐づけて管理するWebシステムを構築。</p>
              <div class="env-box">
                <p class="environment-m">UNIX</p>
                <p class="environment-m">Angular</p>
                <p class="environment-m">HTML</p>
                <p class="environment-m">javascript</p>
                <p class="environment-m">Go</p>
                <p class="environment-l">BlockChain</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-pixabay-162568.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">自動配送システム</p>
              <p class="overview">燃料などを拠点から各配送先へ配送する際に、最適な配送ルート選択するWebシステムを構築。</p>
              <div class="env-box">
                <p class="environment-m">wondows</p>
                <p class="environment-m">java</p>
                <p class="environment-m">HTML</p>
                <p class="environment-m">javascript</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-skitterphoto-349749.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">見積もりシステム</p>
              <p class="overview">見積もりシステム。各商材の最適な製品の組み合わせや構成を抽出し、その価格の見積もりを行うwebシステムを構築。</p>
              <div class="env-box">
                <p class="environment-m">wondows</p>
                <p class="environment-m">VB.NET</p>
                <p class="environment-m">HTML</p>
                <p class="environment-m">Typescript</p>
                <p class="environment-m">jQuery</p>
                <p class="environment-m">SQLServer</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-karolina-grabowska-4475524.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">人事給与システム</p>
              <p class="overview">既存の人事給与・共催システムを新システムへのコンバージョンを実施。</p>
              <div class="env-box">
                <p class="environment-m">windows</p>
                <p class="environment-m">VB.NET</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-matthias-zomer-339620.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">ポータルサイト</p>
              <p class="overview">介護に携わる方々をターゲットととした、介護にまつわる様々な情報を発信するポータルサイトを構築。</p>
              <div class="env-box">
                <p class="environment-m">windows</p>
                <p class="environment-m">C#.net</p>
                <p class="environment-m">RAZOR</p>
                <p class="environment-m">HTML</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-artem-beliaikin-994523.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">アパレルなどの小売業界向け基幹業務システム</p>
              <p class="overview">既存システムの新バージョンとなる、基幹システム。バックエンドとSOAPにより通信を行うフロントエンド側を開発。</p>
              <div class="env-box">
                <p class="environment-m">windows</p>
                <p class="environment-m">C#.net</p>
                <p class="environment-m">SOAP</p>
                <p class="environment-m">SQLServer</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-nout-gons-378570.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">フィールド業務向け基幹システム</p>
              <p class="overview">社外での作業進捗状況を外出先からでも登録ができる、モバイル端末向けシステムの要件定義を実施。</p>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-steve-johnson-861414.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">水道検針・料金収納システム</p>
              <p class="overview">検針から収納までを管理するパッケージソフトを各自治体の業務にあわせてカスタマイズを実施。</p>
              <div class="env-box">
                <p class="environment-m">windows</p>
                <p class="environment-m">Delphi</p>
                <p class="environment-m">ORACLE</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-ylanite-koppens-796600.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">実務遂行対象者の選出システム</p>
              <p class="overview">実務を実施する候補者の名簿を調整し、その候補者の中から実施対象者の選出と選任の手続きまでを管理するwebシステムを構築。</p>
              <div class="env-box">
                <p class="environment-m">windows</p>
                <p class="environment-m">java</p>
                <p class="environment-m">JSP</p>
                <p class="environment-m">HTML</p>
                <p class="environment-m">SQLServer</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-polina-zimmerman-3747486.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">設備経費管理システム</p>
              <p class="overview">企業内における、設備機器及び経費の管理を行うシステムを構築。</p>
              <div class="env-box">
                <p class="environment-m">windows</p>
                <p class="environment-m">C#.net</p>
                <p class="environment-m">SQLServer</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card">
            <img class="work-image" src="../assets/pexels-photomix-company-95916.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">リバースエンジニアリングツール開発</p>
              <p class="overview">メインフレーム上に構築されたシステムのソースコードを解析し、構造をビジュアル化するWebシステムのカスタマイズを実施</p>
              <div class="env-box">
                <p class="environment-m">UNIX</p>
                <p class="environment-m">LINUX</p>
                <p class="environment-m">C</p>
                <p class="environment-m">javascript</p>
                <p class="environment-m">HTML</p>
                <p class="environment-m">Perl</p>
              </div>
            </figcaption>
          </figure>
          <figure class="card clear">
            <img class="work-image" src="../assets/pexels-tyler-lastovich-699122.jpg" alt></img>
            <figcaption class="caption">
              <p class="text bold">携帯電話通話料算出システム</p>
              <p class="overview">各基地局から転送された通話データを解析し、呼種や発信地域等をもとに料金を算出するシステムの改修を実施</p>
              <div class="env-box">
                <p class="environment-m">UNIX</p>
                <p class="environment-m">C</p>
                <p class="environment-m">pro*C</p>
                <p class="environment-m">ORACLE</p>
                <p class="environment-m">shell</p>
              </div>
            </figcaption>
          </figure>
        </div>
        </div>
      </div>
    </section>
    <div id="tag-skills" style="height: 30px;"></div>
    <section id="my-skills">
      <div class="contents-title">
        <span>My Skills</span>
      </div>
      <div class="contents-box">
        <div class="contents-inner">
          <div class="contents-inner-skill">
            <div class="skill-canvas">
              <ul class="skill">
                <li>Java</li>
                <li class="star">★★★★☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>C#.NET</li>
                <li class="star">★★★☆☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>Go</li>
                <li class="star">★★☆☆☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>VB.NET</li>
                <li class="star">★★★★☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>C</li>
                <li class="star">★★★★☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>Typescript</li>
                <li class="star">★★★☆☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>jQuery</li>
                <li class="star">★★★★☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>javascript</li>
                <li class="star">★★★☆☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>Angular CLI</li>
                <li class="star">★★☆☆☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>SQL</li>
                <li class="star">★★★★☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>Git</li>
                <li class="star">★★★☆☆</li>
              </ul>
            </div>
            <div class="skill-canvas">
              <ul class="skill">
                <li>Agile</li>
                <li class="star">★★☆☆☆</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="tag-motto" style="height: 30px;"></div>
    <section id="my-motto">
      <div class="contents-title">
        <span>My Motto</span>
      </div>
      <div class="contents-box">
        <div class="contents-inner">
          <p class="text" style="text-align: center; font-size:30px;">知らざるを知らずと為す是知るなり</p>
          <p class="text"><br>
            その昔、中国の孔子という人物とその弟子達によって記録された「論語」の中のフレーズだそうですが、
            意味は「知らない事は、知らないと自覚すること、これが本当の知るということである」となります。<br>
            まぁ、そののままですね。<br>
            要するに、知ったかぶりせず、きちんと学びましょうというとなのですが、人間そうありたいですね。
          </p>
        </div>
      </div>
    </section>
    <section id="my-motto">
      <div class="contents-title">
        <span>About Recently</span>
      </div>
      <div class="contents-box">
        <div class="contents-inner">
          <p class="text"><br>
            これまでずっと業務システムに携わってきた私ですが、最近思うことがあります。それは・・・<br>
            「業務システムって進化がほぼなくない！？」ということです。使用している技術や見た目も同様です。<br>
            巷には新しい技術やフレームワーク、そしてライブラリなどが気づかないうちにどんどん増えてきています。最近ではVueやAngularなんかでしょうか。<br>
            業務システムの領域では企業活動が止まらないよう、安定稼働が求められます。従って、こなれた技術を適用しますし、また、そうするべきとも思います。<br>
            ですが、エンジニアですから、新しいものに興味を持ち、どんなものか使ってみたいと思うのは私だけでしょうか。<br>
            技術のトレンドは移り変わっていきますので、すべてに追従すのは困難ですが、興味を失ったらエンジニア人生も終わりかなと思うのです。
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Oswald:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

main {
  margin-top: 80px;
  min-width: 320px;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

.contents-box {
  width: 100%;
  margin-top: 1em;
  position: relative;
}

.contents-inner {
  width: 70%;
  margin: 0 auto;
  position: relative;
}

.contents-title {
  width: 100%;
  margin-top: 100px;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 42px;
}

.text {
  font-family: 'Kosugi Maru', sans-serif;
  font-size: 120%;
  line-height: 1.75;
}

.content-work-canvas {
  position: relative;
}

figure {
  float: left;
  width: 45%;
  margin-bottom: 10px;
  padding: 5px 10px 5px 10px;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  display: -ms-flexbox;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  overflow: hidden;
  border-radius: .25rem;
  transition: 0.5s;
}

@media (min-width: 320px) {
  figure { margin-left: auto; width: 100%; }
}

@media (min-width: 800px) {
  figure { margin-left: 5px; width: 45%; }
}

.caption {
  position: relative;
}

@media (min-width: 320px) {
  .work-image { height: 220px; }
  .caption { height: 200px; }
}

@media (min-width: 960px) {
  .work-image { height: 260px; }
  .caption { height: 200px; }
}

@media (min-width: 1200px) {
  .work-image { height: 300px; }
  .caption { height: 160px; }
}

.overview {
  font-family: 'Kosugi Maru', sans-serif;
  margin-top: 10px;
}

.bold {
  font-weight: bold;
}

#my-works:after, #my-skills:after {
  content: "";
  clear: both;
  display: block;
}

.env-box {
  position: absolute;
  bottom: 2px;
  transition: 0.5s;
}

.environment-m, .environment-l {
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #F5F5F5;
  display: inline-block;
  margin-top: 2px;
  font-size: 14px;
  text-align: center;
  line-height: 1.75em;
  border: 1px solid #888888;
  border-radius: 12px 12px 12px 12px;
}

.environment-m {
  width: 64px;
}

.environment-l {
  width: 76px;
}

.contents-inner-skill {
  max-width: 87%;
  margin: 0 auto;
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.skill-canvas {
  position: relative;
  margin: 5px;
  width: 31%;
  height: 40px;
  border: 2px solid #f0f0f0;
  border-radius: 10px 10px 10px 10px;
  background-color: #FFF;
  display: inline-block;
  transition: 0.5s;
}


@media (min-width: 320px) {
  .skill-canvas { width: 90%; }
}

@media (min-width: 960px) {
  .skill-canvas { width: 45%; }
}

@media (min-width: 1200px) {
  .skill-canvas { width: 31%; }
}

.skill {
  font-family: 'Oswald', sans-serif;
  font-size: 100%;
  text-align: center;
  line-height: 1em;
  display: table;
  width: 100%;
}

.skill li {
  position: relative;
  display: table-cell;
  width: 55%;
  line-height: 2.5em;
}
</style>