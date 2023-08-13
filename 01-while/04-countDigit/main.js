/* ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
    - รับค่าตัวเลขจากผู้ใช้งาน  
    - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข
*/

// # prompt number from user
// number / 10 to find how many digits
// return result as number of input

let count = 0;
let num = Number(prompt("Enter your number:"));

while (num >= 1) {
  console.log(num);
  count++;
  num = num / 10;
}

console.log(count);
