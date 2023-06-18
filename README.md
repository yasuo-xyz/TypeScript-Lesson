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
元々自動的に内臓されており設定、プラグも入れなくても使える<br>

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