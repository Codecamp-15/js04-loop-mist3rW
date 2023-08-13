// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด
//     - รับค่าตัวเลขจากผู้ใช้งาน
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

let n = +prompt("Enter Number:");

let count = 0;
let sum = 0;

// PATTERN RECOGNITION
// 1152 => (115 * 10) + 2
// (1152 - 2) / 10 => n' = 115
// (115 - 5) / 10 => n' = 11
// (11 - 1) / 10 => n' = 1
// (7-7) / 10 => n' = 0

while (n) {
  let remainder = n % 10;
  n = (n - remainder) / 10;
  sum += remainder;
  count++;
}

console.log(count, sum);
