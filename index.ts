let hello: string = 'Hello World';
console.log(hello);

// ドキュメントとしての側面を利用する為とは何か？（例）
// 関数（function）関数名（add）ドキュメント
function add(a: number, b: number): number {
    return a + b;
}

// boolean型、number型、string型の例
// boolean型はtrueかfalseのみ
let hasValue: boolean = true;
// number型は整数、小数、負の数、16進数、2進数、8進数がある
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// string型は文字列
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// 型注釈と型推論の例
// 型注釈とは、変数に型を明示的に指定すること、英語でいうとアノテーション
let hasValue1: boolean = true;
// 型推論とは、型注釈を省略しても型を推論してくれる機能
let hasValue2 = true;
// 基本的には型推論を使い、型推論では型が推論できない場合は型注釈を使う