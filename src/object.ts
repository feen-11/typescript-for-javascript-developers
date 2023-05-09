export {};

let profile1: object = { name: "Taichi" };
profile1 = { birthYear: 1998 };
console.log(profile1);

let profile2: { name: string } = { name: "Taichi" };
// profile2 = { birthYear: 1998 }; //型注釈で縛りを設けているので入れられない
console.log(profile2);
