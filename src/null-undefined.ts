export {};
//null、undefinedは型推論だとany型になるので、明示的に: null とする必要がある。
let absence: null = null;
// absence = "string";
console.log({ absence });

let data: undefined = undefined;
console.log({ data });
