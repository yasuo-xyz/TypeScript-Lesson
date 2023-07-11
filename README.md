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
compilerOptions（コンパイルオプション）とは？<br>
どうやってコンパイルするかを決めるオプション<br>
includeとは？<br>
どのファイルをコンパイルするかのオプション<br>
デフォルト（何もない状態）だと、全部コンパイルされる設定になっている<br>
excludeで同じ設定をしたら適用されない<br>
excludeとは？<br>
特定のファイルを除くオプション<br>
＊←ワイルドカードと言い、なんでもいいよ、とゆう意味<br>
＊*2個付けて設定すると、どの階層にいても適用出来る<br>
filesとは？<br>
includeと非常に似ていて、絶対パスか相対パスを書くのみになるオプション<br>
exclude内で同じのを設定しても適用される<br>

4. target（読み：ターゲット）を指定して、特定のバージョンのJavaScriptに変換する方法<br>
コンパイルされたJavaScriptのバージョンを指定する事が出来る<br>
以下はtsconfig.jsonファイル内の説明<br>
targetとは？<br>
どうゆうJavaScriptのバージョンにコンパイルするかを決める設定<br>
デフォルト（何もない状態）だと、ES3になっている<br>

5. lib（読み：リブ）を指定して、TypeScriptが用意している型の定義を追加する<br>
これは、TypeScriptが用意してる型の定義を指定してコンパイラのコンパイルを考慮してコンパイルしてくれる設定<br>
例えば、libの設定の中に、ES6を入れるとES6に関する全てのメソッド、プロパティの一覧で載ってる型の定義をコンパイルする時に一緒に使える事になる<br>
因みにtargetで設定しているES6の中身は、ES6、DOM、DOM.Iterable、ScriptHostがデフォルトで入ってる構成になる

6. allowJs（アロージェイエス）、checkJs（チェックジェイエス）、jsx（ジェイエスエックス）、declaration（デクラレイション）、declarationMap（デクラレイションマップ）の設定はこう使う<br>

7. SourceMap（ソースマップ）を使用して、ブラウザでTypeScriptを操作する方法<br>
デバックをしやすくするものらしい<br>

8. outDir（アウトディレクトリ）とrootDir（ルートディレクトリ）、removeComments（リムーブコメンツ）、noEmit（ノーエミット）、downlevellteration（ダウンレベルリテレーション）の使い方<br>

9. noEmitOnError（（ノーエミットオンエラー）オプションを使って、エラーが出た時にコンパイルしない方法<br>
エラーが出たら何か出力するかどうかみたいな感じ<br>

10. nolmplicitAny（ノーインプリッシュトエニー）やstrictNullChecks（ストリクトヌルチェック）などのstrict（ストリクト）の設定はこう使う<br>
厳しい設定、そのコードをちゃんと書けるのか、何か変なanyとかあったらダメだよみたいな、そうゆうのを書く事が出来る<br>

11. 綺麗なコードを書くための設定をする方法<br>
色んなコンパイラの設定、どうやってコンパイルするかどうかの設定を色んな設定が入るみたいな感じ<br>