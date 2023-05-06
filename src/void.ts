export {};
//関数の戻り値にアノテーションをつける
//void型＝戻り値がない関数の戻り値へアノテーションをつける際に用いる
function returnNothing(): void {
  console.log("I don't return anything");
}

console.log(returnNothing());
