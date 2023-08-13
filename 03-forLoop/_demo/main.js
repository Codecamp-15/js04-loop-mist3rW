// while (i <=20){
//   if (i%5 === 0 && i%3 ===0){
//     console.log(`FizzBuzz`);
//   }else if (i%3 === 0){
//     console.log(`Fizz`);
//   }else if (i%5 ===0){
//     console.log(`Buzz`);
//   }else{
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 20; i = i +1 ){
//     if (i%5 === 0 && i%3 === 0){
//         console.log('FizzBuzz');
//     }else if (i%3 === 0){
//         console.log('Fizz');
//     }else if (i%5 === 0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 20; i++ ){
//     if(i % 3 == 0 %% i % 5 == 0) console.log('FizzBuzz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else if (i % 3 == 0) console.log('Fizz');
//     else console.log(i);
// }

// // EX3: Skip Fizz
// for (let i = 1; i <= 20; i++ ){
//     if(i % 3 == 0 %% i % 5 == 0) console.log('FizzBuzz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else if (i % 3 == 0) continue;
//     else console.log(i);
// }

// // EX3B
// for (let i = 1; i <= 20; i++ ){
//     if(i % 2 == 0) console.log(i);
//     else continue;
//     console.log('even');
// }


// EX4 : Concat String

// let str = "";

// for (let i = 1; i<= 10; i++){
//     if (i % 5 == 0) continue; // ใช้เพื่อข้ามเลขที่ไม่ต้องการ
//     str = str + i; // str += i;
// }

// EX5 : remove vowel (a,e,i,o,u)

// let src = 'codecamp';
// let res = '';

// for (let i = 0; i < src.length; i++){
//     let c = src[i];
//     let isVowel = c == 'a' || c == 'e' || c == 'i' || c == 'o' || c== 'u'
//     if (isVowel) continue;
//     else res = res + c;
//     // ' + src[0] = '' + 'c' => 'c'
// }

// ADVANCE : Nested Loop;
// Multiplication Table

for(let i = 2; i <= 12; i++){
    console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
    for (let j = 1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("\n");
}

console.log ('end');