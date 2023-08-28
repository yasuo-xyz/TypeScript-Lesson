// classを定義してオブジェクトを作成する方法（例）
// クラス名は最初大文字で始めるのが基本らしい
// 糖衣構文？というらしい
// クラスはオブジェクトの設計図（再確認）
// クラスを定義すると、同時にインスタンスを表す今回の場合だとPerson型が生成される
abstract class Person {
    static species = "ホモ・サピエンス";
    static isAdult(age: number) {
        if (age > 17) return true;
        return false;
    }
    // nameフィールド、nameプロパティと言われる、nameの部分はどんな名前でも良い
    // デフォルトではパブリックになる（どこでも使える）
    // name: string;

    // ageフィールド
    // プライベートにすると、クラスの外からはアクセスできなくなる
    // private age: number;

    // コンストラクタ関数（予約語、メソッド）
    // 何をするものかとゆうと、今回Personとゆう設計図を元にオブジェクトを作成する時に実行される関数になる
    // つまり初期化とかする時、最初の処理をする時に便利な関数
    // 初期化の処理を省略する方法（例）
    // 変わったのは、引数の部分のみ
    constructor(public name: string, protected age: number) {
        // thisはクラス内のフィールドを参照する時に使う
        // this.name = initName;
        // this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    // クラスにメソッドを追加する方法（例）
    // greetingメソッド（第1引数）挨拶をするとゆう意味
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
    abstract explainJob(): void;
}
// newキーワードを使ってPersonクラスのオブジェクトを作成する事が出来る
// const quill = new Person("Quill", 38);
// console.log(quill);
// quill.incrementAge();
// quill.greeting();

// オブジェクト
// 上記のgretingメソッドをそのまま使い回してる感じ
// const anotherQuill = {
    // nameを追加している
    // name: "anotherQuill",
    // 下記の部分がthisになるがnameがない状態になるのでundefined（エラー）になる
    // greeting: quill.greeting
// }
// anotherQuill.greeting();

// extendsを使用して、他のクラスの機能を継承する方法（例）
// 記述の内容としては、上記のPersonの内容をTeacherにコピーするとゆう意味
// もし、何か追加したい場合は、コンストラクタ関数とsuper関数を使わないといけない
class Teacher extends Person {
    private static instance: Teacher;
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}.`);
    }
    // ゲッターは、get関数使う
    get subject() {
        if (!this._subject) {
            throw new Error("There is no subject.");
        }
        return this._subject;
    }
    // セッターは、set関数使う
    set subject(value) {
        if (!value) {
            throw new Error("Invalid value.");
        }
        this._subject = value;
    }
    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
    static getInstance() {
        if (Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher("Quill", 38, "Math");
        return Teacher.instance;
    }
}
// const teacher = new Teacher("Quill", 38, "Math");
// teacher.subject = "Music";
// console.log(teacher.subject);
// teacher.greeting();
// console.log(Person.species);
// console.log(Person.isAdult(38));
const teacher = Teacher.getInstance();
teacher.greeting();
// 休息25