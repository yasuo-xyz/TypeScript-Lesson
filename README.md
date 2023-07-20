<!-- ここにやった事や学んだ事などをメモして書き留めておこう！！ -->
<!-- 自分で買ってUdemyで学んだ事の成果物です -->
# TypeScriptとは？

 JavaScriptにコンパイル（変換）される<br>
 静的型システムが付いた  
 JavaScriptの上位集合  

## JavaScriptにコンパイルされるとは？

TypeScriptで書いたものはJavaScriptでコンパイルされる<br>
TypeScriptはJavaScriptに変換させて、そのJavaScriptを実行しているプロセス（方法）<br>
なのでJavaScriptが動く環境であればTypeScriptも動くとゆう事になる<br>

## 静的型システムが付いたとは？

TypeScriptがJavaScriptに変換される時にTypeScriptの中身の全部に型の検査がされる<br>
変数、関数、仮引数、戻り値などの値がどうゆうのが返るのかを全部確認している<br>
型がちゃんと合ってるか、文字を入れないとダメなのに数字が入ってるとかも確認される<br>
なので型検査に通るようにTypeScriptは書く必要がある<br>

## JavaScriptの上位集合（英語：スーパーセット）とは？

反対の意味だと、部分集合（英語：サブセット）と言われる<br>
JavaScriptで書いたコードは全部TypeScriptでもある<br>
TypeScriptではJavaScriptの文法が全部使える<br>

## 何故VSCodeを使うのか？

両方ともMicrosoftが開発している為相性が良い<br>
元々自動的に内臓されており設定、プラグ（機能拡張、追加）も入れなくても使える<br>

## tscコマンドとは何か？

TypeScriptコンパイラーとゆう<br>
TypeScriptからJavaScriptにコンパイルされる
コンパイラーの中に型検査（英語：タイプチェック）とゆう機能も付いてる

## 何故TypeScriptを使うのか？

TypeScriptは3つの側面を利用する為に使われる<br>

## TypeScriptの3つの側面とは何か？

ドキュメントとしての側面を利用する為<br>
Linter（読み：リンター）としての側面を利用する為<br>
ES5へのコンパイラとしての側面を利用する為<br>

## ドキュメントとしての側面を利用する為とは何か？

ドキュメントとは変数や関数などの情報を教える（公式ドキュメントを見てなど）<br>
TypeScriptを使用する事によってドキュメントを半自動化し他の人に分かりやすく伝える事が出来る<br>

## Linterとしての側面を利用する為とは何か？

Linterとは実行する前にそのコードが正しいかどうか検証するツール（tscコマンドなど）<br>
TypeScriptは肩付きLinterとゆう他のLinterとは違う良さがある（JavaScriptだとESLintなど）<br>

## ES5へのコンパイラとしての側面を利用する為とは何か？

コンパイルする時にダウングレード出来る（トランススパイラル）<br>
バベルとゆうツールを使ってもダウングレード出来る<br>
<!-- https://kangax.github.io/compat-table/es6/ -->

## TypeScriptの型とJavaScriptの型

TypeScriptはJavaScriptにコンパイルする時にTypeScriptコンパイラー（tscコマンド）で型検査を行なっている<br>
なのでTypeScriptは型検査に通るように書く必要がある<br>
JavaScriptエンジンとゆうのによってJavaScriptは型検査が行われて機械に分かるような、実行出来るようなコードに変換されてそのコードが実行されて実際にJavaScriptが実行される<br>
JavaScriptエンジンとは、ブラウザーの中に搭載されているもの<br>
Google ChromeだったらV8、FirefoxならSpiderMonkey、Microsoft EdgeだったらChakra、SafariならJavaScriptCoreそれぞれのブラウザによって変わる<br>
つまり、TypeScriptコンパイラが使うものがTypeScriptの型（静的型付け）、JavaScriptエンジンで使うものがJavaScriptの型（動的型付け）になる<br>

## コンパイラを使う方法

今まではtscコマンドでコンパイルしていたが、コンパイルする時実はいろんな設定をする事が出来る<br>

1. watxhモードを使って、保存時に自動的にTSからJSにコンパイルする方法<br>
これをする事によって保存時に自動的にコンパイルされるようになる<br>
やり方：tsc [ファイル名] --watchかtsc [ファイル名] -wコマンドで出来る<br>
止める時は「control」 +「c」で止まる（Macの場合）<br>

2. tsc --initでtsconfig.jsonを作り、全てのファイルを一気にコンパイルする方法<br>
これをする事で、色んなファイルを一気にコンパイルする事が出来る<br>
その上で、tsconfig.jsonに色んな設定を書く事が出来る<br>
tsconfig.jsonとは、TypeScriptの設定ファイル<br>
tsconfig.json作成コマンド：tsc --init<br>
tsconfig.jsonファイルが作成された状態でtscコマンドを打つと今あるTypeScriptのファイル全部がコンパイルされる<br>

3. include（読み：インクルード）とexclude（読み：エクスクルード）とfiles（読み：ファイル）を使ってコンパイルするファイルを選ぶ方法<br>
これで何をコンパイルするのか、を指定する事が出来る<br>
以下はtsconfig.jsonファイル内の説明

　3.1 compilerOptions（コンパイルオプション）とは？<br>
　　どうやってコンパイルするかを決めるオプション<br>

　3.2 includeとは？<br>
　　どのファイルをコンパイルするかのオプション<br>
　　デフォルト（何もない状態）だと、全部コンパイルされる設定になっている<br>
　　excludeで同じ設定をしたら適用されない<br>

　3.3 excludeとは？<br>
　　特定のファイルを除くオプション<br>
　　＊←ワイルドカードと言い、なんでもいいよ、とゆう意味<br>
　　＊*2個付けて設定すると、どの階層にいても適用出来る<br>

　3.4 filesとは？<br>
　　includeと非常に似ていて、絶対パスか相対パスを書くのみになるオプション<br>
　　exclude内で同じのを設定しても適用される<br>

4. target（読み：ターゲット）を指定して、特定のバージョンのJavaScriptに変換する方法<br>
コンパイルされたJavaScriptのバージョンを指定する事が出来る<br>
以下はtsconfig.jsonファイル内の説明<br>

　4.1 targetとは？<br>
　　どうゆうJavaScriptのバージョンにコンパイルするかを決める設定<br>
　　デフォルト（何もない状態）だと、ES3になっている<br>

5. lib（読み：リブ）を指定して、TypeScriptが用意している型の定義を追加する<br>
これは、TypeScriptが用意してる型の定義を指定してコンパイラのコンパイルを考慮してコンパイルしてくれる設定<br>
以下はtsconfig.jsonファイル内の説明<br>
例えば、libの設定の中に、ES6を入れるとES6に関する全てのメソッド、プロパティの一覧で載ってる型の定義をコンパイルする時に一緒に使える事になる<br>
因みにtargetで設定しているES6の中身は、ES6、DOM、DOM.Iterable、ScriptHostがデフォルトで入ってる構成になる<br>

6. allowJs（アロージェイエス）、checkJs（チェックジェイエス）、jsx（ジェイエスエックス）、declaration（デクラレイション）、declarationMap（デクラレイションマップ）の設定はこう使う<br>
以下はtsconfig.jsonファイル内の説明<br>

　6.1 allowJsとは？<br>
　　allowJsがtrueの場合、JavaScriptをコンパイルの対象に含む、つまり.jsファイルを含む設定<br>
　　TypeScriptファイルだけではなくJavaScriptファイルもコンパイルする設定<br>
　　要はJavaScriptをコンパイラの対象にコンパイルの対象にしてるって意味なる<br>

　6.2 checkJsとは？<br>
　　allowJsと一緒に使う必要があるので、checkJs単体では使えない<br>
　　どうゆう物かとゆうと、TypeScriptファイルのようにJavaScriptファイルもエラーをチェックする設定<br>

　6.3 jsxとは？<br>
　　ReactJSの為に使う設定<br>

　6.4 declaration、declarationMapとは？<br>
　　型の定義ファイルを作成する設定<br>
　　trueの場合だと、tscコマンドでコンパイルした時新しいファイルが作成され.d.tsって物が作られる<br>
　　どうゆう物かとゆうと、出来上がったJavaScriptの型の情報その自分で自作したライブラリー全部の型の情報が載ってるってのが型定義　　ファイルになるって意味<br>
　　要は自分がライブラリーとかを使って他の人に使って欲しい時に使う物になるって事<br>

7. SourceMap（ソースマップ）を使用して、ブラウザでTypeScriptを操作する方法<br>
以下はtsconfig.jsonファイル内の説明<br>
デバックをしやすくするものらしい<br>
TypeScriptとJavaScriptの架け橋なる、マップファイルとゆうのを作成するもの<br>
具体的にいつ使うかとゆうと、ブラウザでTypeScriptのファイルを見たい時に使う<br>
ブラウザがTypeScriptを理解出来るようにする為のものになる<br>
どうゆう事かとゆうと、tscコマンドを打つと.jsファイルが作成されその次に.js.mapとゆうのが作成される<br>
この.js.mapはTypeScriptを作り出すファイルになっている、JavaScriptからTypeScriptを作り出すって感じ<br>


8. outDir（アウトディレクトリ）とrootDir（ルートディレクトリ）、removeComments（リムーブコメンツ）、noEmit（ノーエミット）、downlevellteration（ダウンレベルリテレーション）の使い方<br>
outDirとは？<br>
TypeScriptがコンパイルされてJavaScriptに出力する時の出力先を決める事が出来る設定<br>

　8.1 rootDirとは？<br>
　　指定したディレクトリしか出力されない<br>

　8.2 removeCommentsとは？<br>
　　コメントを消すかどうかの設定<br>

　8.3 noEmitとは？<br>
　　何も出力しない設定<br>
　　どうゆう事かとゆうと、TypeScriptの型チェックだけして出力はされないって事<br>

　8.4 downlevellterationとは？<br>
　　target内のES5とES3のみに使用出来る物<br>
　　ES5、ES3にコンパイルする時にループ系（for-of）をちゃんと出力出来るようにしてくれる物らしい（trueの場合）<br>

9. noEmitOnError（（ノーエミットオンエラー）オプションを使って、エラーが出た時にコンパイルしない方法<br>
エラーが出たら何か出力するかどうかみたいな感じ<br>

　9.1 noEmitOnErrorとは？<br>
　　エラーが起こったらJavaScriptに変換しない、JavaScriptのファイルを出力しない設定<br>

10. nolmplicitAny（ノーインプリッシュトエニー）やstrictNullChecks（ストリクトヌルチェック）などのstrict（ストリクト）の設定はこう使う<br>
厳しい設定、そのコードをちゃんと書けるのか、何か変なanyとかあったらダメだよみたいな、そうゆうのを書く事が出来る<br>

　10.1 strictとは？<br>
　　下記のもの全てのまとめた効果を持っている<br>
　　"noImplicitAny"<br>
　　"strictNullChecks"<br>
　　"strictFunctionTypes"<br>
　　"strictBindCallApply"<br>
　　"strictPropertyInitialization"<br>
　　"noImplicitThis"<br>
　　"alwaysStrict"<br>

　10.2 nolmplicitAnyとは？<br>
　　暗黙的なanyは避けよう、暗黙的な意味はエラーを出すとゆう設定<br>
　　明示的にanyにする場合はエラーは出ないがそもそもあまりよろしくない<br>
　　つまり何も型を指定していない時に出るanyはよろしくないよとゆう意味<br>
　　関数は後で書き換える事がない為一生同じ状態なので使い回す事がない<br>
　　変数は最初にanyに設定しても後で文字列などに変えると絶対に文字列！とTypeScriptが理解しているからエラーが起きないらしい<br>

　10.3 strictNullChecksとは？<br>
　　true場合は厳しいnullチェック<br>
　　VSCode参照<br>

　10.4 strictFunctionTypesとは？<br>
　　クラスの継承時に起こりえるバグの可能性を防ぐもの<br>

　10.5 strictBindCallApplyとは？<br>
　　コール、アプライ、バインドとゆうメソッドとゆう関数に適用するもの<br>

　10.6 strictPropertyInitializationとは？<br>
　　クラスを使用する時に使うもの<br>

　10.7 noImplicitThisとは？<br>
　　関数の中にある値（例：this）が一体何を示したのか分からない時にちゃんとエラーが起きるもの<br>
　　暗黙的にthisがanyになってしまう時とかにエラーが起きるとゆうもの<br>

　10.8 alwaysStrictとは？<br>
　　JavaScriptに変換した時に"use strict"があるかないとゆうもの<br>

11. 綺麗なコードを書くための設定をする方法<br>
色んなコンパイラの設定、どうやってコンパイルするかどうかの設定を色んな設定が入るみたいな感じ<br>

　11.1 "noUnusedLocals"とは？<br>
　　Unusedでローカル変数を使ってなかった場合ダメだよとゆう意味<br>

　11.2 "noUnusedParameters"とは？<br>
　　関数のパラメーターによって使われる<br>

　11.3 "noImplicitReturns"とは？<br>
　　暗黙的なリターンはダメとゆう意味<br>

　11.4 "noFallthroughCasesInSwitch"とは？<br>
　　Switch文の時に使えるようなものになる<br>

## TypeScriptではClassをこう使う！

1. これがオブジェクト指向プログラミングだ
英語でゆうとオブジェクトオリエンテッドプログラミング（省略：OOP）
結論：OOPとは現実世界の物に見立ててプログラムする方法
どのようにアプリケーションを作るかという方法の1つ
人間にとってわかりやすくロジックを分割する方法の1つ

　1.1 オブジェクトとは？<br>
　　VSCode参照<br>

　1.2以下作る方法<br>
　　オブジェクトリテラルとは？<br>
　　オブジェクトを書くとゆうものになる<br>
　　そのまんま普通に書くとゆう意味<br>
　　リテラルは、日本語に直すと文字通りって意味になる<br>
　　つまり、オブジェクトをそのまんまを文字通り書く、オブジェクトを作る時にそのまんま書くゆう意味<br>

　1.3Classとは？<br>
　　オブジェクトの設計図<br>
　　Classから作られたオブジェクトはインスタンスと呼ばれる<br>
　　似たようなオブジェクトを複数作成する時に便利<br>

2. classを定義してオブジェクトを作成する方法
class.tsファイルを参照

3. JSにコンパイルされたclassはこうなっている

4. クラスにメソッドを追加する方法
class.tsファイルを参照
ES6とTypeScriptの書き方は一緒

5. クラスを型として使う方法

6. public修飾子とprivate修飾子を使用して、アクセスを制限する方法
簡単にゆうと、クラスの中で定義されているデータとゆうものが外部からアクセスができるか出来ないの制御をするもの

7. 初期化の処理を省略する方法

8. readonly修飾子を使って、書き換え出来ないようにする方法

9. extendsを使用して、他のクラスの機能を継承する方法

10. protected修飾子を使用して、継承先までアクセス出来る範囲を広げる方法

11. ゲーターとセッターはこう作る

12. staticを使用して、インスタンスを作らずにクラスを使う方法

13. Abstractクラスを使用して、継承にのみ使えるクラスを作成する方法

14. privateをconstructorに付けて、シングルトンパターンを実装する方法