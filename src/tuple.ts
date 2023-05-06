export {};
//tuple型 どの"順序"でどの型が入るかまでを正確に定義する　union typesよりも制約が強いイメージ ※型推論で記述方法が表示されないのでしっかり覚える
let profile: [string, number] = ["Ham", 43];
// profile = [43, "Ham"]; // Type 'number' is not assignable to type 'string'.Type 'string' is not assignable to type 'number'.
console.log({ profile });
