export {};

let numbers: number[] = [1, 2, 3];
console.log({ numbers });

let strings: string[] = ["TypeScript", "JavaScript", "CoffeeScript"];

//二次元配列のアノテーション
let nijigennhairetu: number[][] = [
  [50, 100],
  [150, 300],
];

// 共用型：複数の型が混在する型　union types
let ary: (string | number | boolean)[] = [1, false, "Japan"];
console.log({ ary });
