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