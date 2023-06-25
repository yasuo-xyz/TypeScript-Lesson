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

// オブジェクトに型を付ける方法の例
// オブジェクト型とゆうのもあるのだがその場合は全体的なオブジェクトを表してるとゆう意味になる、{}のみも同様
const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
};
console.log(person);

const person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
console.log(person2);
// オブジェクトに型を付ける方法は2つある
// 1つ目はオブジェクトリテラルで型を定義する方法
// 2つ目はインターフェースを使って型を定義する方法
// オブジェクトリテラルで型を定義する方法
// オブジェクトリテラルで型を定義する場合は、オブジェクトの各プロパティに型を定義する

// 配列に型を付けるArray型はこう使うの例
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
// Array型何でも入るって意味
const fruits2: any[] = ['Apple', 'Banana', 'Grape', 1];
// この場合の型推論はユニオンタイプになり、stringとnumberの両方が入っていい配列になる
// 絶対に1つの型しか入れられない訳ではない
const fruits3 = ['Apple', 'Banana', 'Grape', 1];

// Tuple型を使用して、決まった内容の配列を作る方法の例
// Tuple（読み：タプル）型は、決まった内容の配列を作る時に使う
// 配列にも厳しく制限が掛かったものになる
// TypeScriptは初期値は厳しくするのだがそれ以降は緩くなる
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21);
console.log(book[3]);

// Enumを使って、特定のまとまったグループのみを受け入れる列挙を使う方法の例
// 列挙型とゆう新しい型を定義する時に使うEnum（イーナム）型がある
// Enum型は、特定のまとまったグループのみを受け入れる列挙を使う時に使う
// それを作るのにEnum型が必要になる
// オブジェクトでの例
const CoffeeSize = {
    SHORT: 'SHORT',
    TALL: 'TALL',
    GRANDE: 'GRANDE',
    VENTI: 'VENTI'
};

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}