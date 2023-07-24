// classを定義してオブジェクトを作成する方法（例）
// クラス名は最初大文字で始めるのが基本らしい
// 糖衣構文？というらしい
// クラスはオブジェクトの設計図（再確認）
// クラスを定義すると、同時にインスタンスを表す今回の場合だとPerson型が生成される
class Person {
    // nameフィールド、nameプロパティと言われる、nameの部分はどんな名前でも良い
    // デフォルトではパブリックになる（どこでも使える）
    name: string;
    // ageフィールド
    // プライベートにすると、クラスの外からはアクセスできなくなる
    private age: number;

    // コンストラクタ関数（予約語、メソッド）
    // 何をするものかとゆうと、今回Personとゆう設計図を元にオブジェクトを作成する時に実行される関数になる
    // つまり初期化とかする時、最初の処理をする時に便利な関数
    constructor(initName: string, initAge: number) {
        // thisはクラス内のフィールドを参照する時に使う
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    // クラスにメソッドを追加する方法（例）
    // greetingメソッド（第1引数）挨拶をするとゆう意味
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
// newキーワードを使ってPersonクラスのオブジェクトを作成する事が出来る
const quill = new Person("Quill", 38);
// console.log(quill);
quill.incrementAge();
quill.greeting();

// オブジェクト
// 上記のgretingメソッドをそのまま使い回してる感じ
// const anotherQuill = {
    // nameを追加している
    // name: "anotherQuill",
    // 下記の部分がthisになるがnameがない状態になるのでundefined（エラー）になる
    // greeting: quill.greeting
// }
// anotherQuill.greeting();