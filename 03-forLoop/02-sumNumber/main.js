// sum, sumOdd, sumEven, sumD2minD3 = sumDiv2-sumDiv3

let sum = 0;
let sumEven = 0;
let sumDiv2 = 0;
let sumDiv3 = 0;

for (i = 1; i <= 100; i++) {
  sum = sum + i;
  if (i % 2 == 0) {
    sumEven = sumEven + i;
    sumDiv2 += i * i;
  }
  if (i % 3 == 0) {
    sumDiv3 += i * i;
  }
}
console.log(`ผลรวมเลขถุกตัว: ${sum}`);
console.log(`ผลรวมเลขคู่: ${sumEven}`);
console.log(`ผลรวมเลขคี่: ${sum - sumEven}`);
console.log(`ผลรวมเลขที่หาร 2 ลงตัว ยกกำลังสอง: ${sumDiv2}`);
console.log(`ผลรวมเลขที่หาร 3 ลงตัว ยกกำลังสอง: ${sumDiv3}`);
console.log(
  `ผลรวมเลขที่หาร 2 ลงตัวลบด้วย ผลรวมเลขที่หาร 3 ลงตัว ยกกำลังสอง: ${
    sumDiv2 - sumDiv3
  }`
);
