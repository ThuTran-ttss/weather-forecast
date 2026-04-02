// let x = 4;
// for (let i = 1; i<= 10; i++){
//     console.log(`${x} x ${i} = ${x*i}`);
// }

// for(let x=2; x<= 9; x++){
//     for (let i = 1; i<= 10; i++){
//         console.log(`${x} x ${i} = ${x*i}`);
//     }
// }

// let x=2;
// while (x<=9){
//     let i = 1;
//     while(i<=10) {
//         console.log(`${x} x ${i} = ${x*i}`);
//         i++;
//     }
//     x++;
// }

// let x = 13;
// let count = 0;
// if (x<=1) {console.log('Not a prime number');}
// for (i = 1; i<= x; i++){
//         if (x%i === 0) {count++;}
// }
// console.log(count !== 2? 'Not a prime number' : 'This is a prime number');

// Recursion
// function power(base,exp){
//     if (exp === 0) {return 1;}
//     return base * power(base,exp-1);
// }
// console.log(power(2,4));

// function reverseString(str){
//     if (str.length <= 1) {return str};
//      return reverseString(str.slice(1)) + str[0];
// }
// console.log(reverseString("hello"));

// function reverseString(str,i=0) {
//     if (i === str.length) {return str};
//     reverseString(str,i+1); // bắt đầu chia nhỏ bài toán và chạy check tiếp
//     console.log(str[i]); // sau khi return cái cuối rồi thì bắt đầu quay lại bài toán liền kề
// }
// console.log(reverseString("hello"));

