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

### 静的型システムが付いたとは？

TypeScriptがJavaScriptに変換される時にTypeScriptの全部型の検査がされる<br>
変数、関数、仮引数、戻り値などの値がどうゆうのが返るのかを全部確認している<br>
型がちゃんと合ってるか文字を入れないとダメなのに数字が入ってるとかも確認される<br>
なので型検査に通るようにTypeScriptは書く必要がある<br>

#### JavaScriptの上位集合（英語：スーパーセット）とは？

反対の意味だと、部分集合（英語：サブセット）と言われる<br>
JavaScriptで書いたコードは全部TypeScriptでもある<br>
TypeScriptではJavaScriptの文法が全部使える<br>

##### 何故VSCodeを使うのか？

両方ともMicrosoftが開発している為相性が良い<br>
元々自動的に内臓されており設定、プラグも入れなくても使える<br>

###### tscコマンドとは何か？

TypeScriptコンパイラーとゆう<br>
TypeScriptからJavaScriptにコンパイルされる
コンパイラーの中に型検査（英語：タイプチェック）とゆう機能も付いてる