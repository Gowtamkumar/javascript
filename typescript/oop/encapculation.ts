// encapculation main concept is access and unauthorize access and mutation of specifie propertics of an object
// exmple: private, public protected, readonly, static etc,
// এনক্যাপসুলেশনকে একক ইউনিটের অধীনে ডেটা মোড়ানো হিসাবে সংজ্ঞায়িত করা হয়।
// এটি এমন পদ্ধতি যা কোড এবং ডেটা ম্যানিপুলেট করে একত্রে আবদ্ধ করে। এনক্যাপসুলেশনে,
// একটি ক্লাসের ভেরিয়েবল বা ডেটা অন্য কোনও ক্লাস থেকে লুকানো থাকে এবং
// শুধুমাত্র তাদের ক্লাসের যে কোনও সদস্য ফাংশনের মাধ্যমে অ্যাক্সেস করা যায় যেখানে সেগুলি ঘোষণা করা হয়।
// এনক্যাপসুলেশনের মতো, একটি ক্লাসের ডেটা অন্যান্য ক্লাস থেকে লুকানো থাকে, তাই এটি ডেটা-লুকানো হিসাবেও পরিচিত।
class PersonEncap {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getFullName() {
    return this.name + " " + this.age;
  }
}

const resultEncap = new PersonEncap("Gowtam", 50);

console.log(resultEncap);
