let hello: string = 'Hello World';
console.log(hello);

// ドキュメントとしての側面を利用する為とは何か（例）
// 関数（function）関数名（add）ドキュメント
// 以下の処理は、2つの数値を受け取り、その合計を返す関数です。
function add(a: number, b: number): number {
    return a + b;
}

// // TypeScriptの型はこう書く！（以下例）

// boolean型、number型、string型（例）
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

// 型注釈と型推論（例）
// 型注釈とは、変数に型を明示的に指定すること、英語でいうとアノテーション
let hasValue1: boolean = true;
// 型推論とは、型注釈を省略しても型を推論してくれる機能
let hasValue2 = true;
// 基本的には型推論を使い、型推論では型が推論できない場合は型注釈を使う

// オブジェクトに型を付ける方法（例）
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

// 配列に型を付けるArray型はこう使う（例）
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
// Array型何でも入るって意味
const fruits2: any[] = ['Apple', 'Banana', 'Grape', 1];
// この場合の型推論はユニオンタイプになり、stringとnumberの両方が入っていい配列になる
// 絶対に1つの型しか入れられない訳ではない
const fruits3 = ['Apple', 'Banana', 'Grape', 1];

// Tuple型を使用して、決まった内容の配列を作る方法（例）
// Tuple（読み：タプル）型は、決まった内容の配列を作る時に使う
// 配列にも厳しく制限が掛かったものになる
// TypeScriptは初期値は厳しくするのだがそれ以降は緩くなる
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21);
console.log(book[0]);

// Enumを使って、特定のまとまったグループのみを受け入れる列挙を使う方法（例）
// 列挙型とゆう新しい型を定義する時に使うEnum（イーナム）型がある
// Enum型は、特定のまとまったグループのみを受け入れる列挙を使う時に使う
// それを作るのにEnum型が必要になる
// オブジェクトでの例
// 要は特定のまとまったグループのみを受け入れる時に列挙型を使う
// Enum型は、オブジェクトに似ているが、オブジェクトとは違い、列挙型は変更不可
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
};

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

// この書き方もある
// これは、列挙型の中身を省略して書く方法
// この場合は、0から順番にインデックスが振られる
enum CoffeeSize2 {
    SHORT,
    TALL,
    GRANDE,
    VENTI
};

const coffee2 = {
    hot: true,
    size: CoffeeSize2.TALL
}
coffee2.size = CoffeeSize2.SHORT;

// どんな型にもなるany型について知る方法（例）
// any型はとは、なんでも入る型
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafj = 'fjiafj';
// この書き方もある
// これは、any型を使わないで、なんでも入る型を作る方法
let banana = 'banana';
banana = anything;
// もし正しくTypeScriptを書く場合は、any型はなるべく使わない方がいい

// Union（読み：ユニオン）型を使って、複数の型を許容する方法（例）
// number型とstring型一緒に入れたい時に使う
// |←バーティカルラインとゆう
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];
// unionType.toUpperCase();
// unionType = 'hello';
// unionType.toUpperCase();

// Literal（読み：リテラル）型を使って、特定の値のみを許容する方法（例）
// 特定の決まった値のみを扱う型になる
const apple: 'apple' = 'apple';
const apple1: 0 = 0;
const apple2: true = true;
// 因みにconstは再代入できないので、constを使うとリテラル型になる、TypeScriptの仕様らしい
// この書き方もある
// これはリテラル型とユニオン型を組み合わせて作る方法
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: clothSize
};

// Typeエイリアスを使って、複雑な型を変数のように扱う方法（例）
// Type型を変数のように扱うようにする事ができる
// エイリアスは別名とゆう意味もあるので、別名として扱う事ができる
type ClothSize = 'small' | 'medium' | 'large';
const apple3 = 'apple';
let clothSize2: ClothSize = 'large';
const cloth2: {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: clothSize2
};

// 関数に型を適応させる方法（例）
// 今ままでのは変数に型を付けていたが、今回は関数に型を付ける方法を学ぶ
// 以下add関数
// 型を付けるところは（）の中身とその後ろに付ける
function add1(num1: number, num2: number): number {
    return num1 + num2;
};

// 関数の戻り値に型を適応させる方法（例）
// もし関数が何も返さなかったらどうするのか？
// 基本的には、void型を使い、undefined型は使わないうようにした方がいい
// 以下sayHello関数
function sayHello(): void {
    console.log('Hello!');
    return;
}

// ここでundefined型とゆうのが登場
// 因みにundefined型は、滅多に使わない
// undefined型は、undefinedとnullを扱うことが出来る
// 以下tmp変数
console.log(sayHello());
let tmp: undefined;

// undefined型とnull型（例）
// undefined型は、undefinedを入れる事が出来る
// そしてundefined型に非常に似た型としてnull型がある
// null型もundefined型と同じようにnullしか基本的に入れる事が出来ない
let tmpUndefined: undefined = undefined;
let tmpNull: null = null;

// 関数型を使って、特定の関数のみを代入出来る変数を作る（例）
// 今回は関数を保持する変数に型を付ける方法を学ぶ
// 今までは関数宣言する時の関数に型を付けていた
// 関数の型注釈とゆう
const anotherAdd: (n1: number, n2: number) => number = add1;
// アロー関数の場合
const doubleNumber: (num: number) => number = num => num * 2;

// callback関数の型はこう書く（例）
// 以下doubleAndHandle関数
// => numberのところをvoidにすると
// return doubleNum;のところが無視されエラーも出なくなり緩くなるから注意した方がいい
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});

// unknown型を使って、柔軟でanyよりも厳しい型を定義する方法（例）
// any型（なんでも入る型）と、非常に似ていて、any型よりも少し厳しい型になる
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// 入れれるのは入れれるが使う時は注意が必要
text = anyInput;
// typeofメソッドを使うと、変数の型を調べる事が出来る（元々JavaScriptであったやつでTypeScriptではない）
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

// any型と比較
let unknownInput1: unknown;
let anyInput1: any;
let text1: string;
anyInput1 = 'hello';
anyInput1 = 21;
anyInput1 = true;
text1 = anyInput1;

// never型を使って、起こり得ない値の型を使用する方法（例）
// never型とは、決して何も返さないってゆう型
// void型とは違い、void型は何かしらの値を返す事が出来るが、never型は何も返さない
// 以下errorを投げる関数
function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is an error'));