// let studentMark = 90;
// if (studentMark >= 80){
//     console.log('Grade A');
// } else if (studentMark >= 70){
//     console.log('Grade B');
// } else if (studentMark >= 60){
//     console.log('Grade C');
// } else if (studentMark >= 50){
//     console.log('Grade D');
// } else {
//     console.log('Grade F');
// }
// SWITCH CASE
// let studentMark = 90;
// switch (true) {
//     case studentMark >= 80:
//         console.log('Grade A');
//         break;
//     case studentMark >= 70:
//         console.log ('Grade B');
//         break;
//     case studentMark >= 60:
//         console.log ('Grade C');
//         break;
//     case studentMark >= 50:
//         console.log ('Grade D');
//         break;
//     default:
//         console.log ('Grade F');                            
// }
// TRAFFIC LIGHTS
// let trafficLight = 'Yellow';
// switch (trafficLight){
//     case 'Red':
//         console.log('Stop!');
//         break;
//     case 'Yellow':
//         console.log('Slow Down!');
//         break;
//     case 'Green':
//         console.log ('Go!');
//         break;
//     default:
//         console.log('Invalid Color');            
// }
function readVietnameseNumber (n) {
if (isNaN(n) || n <0 || n > 999) {
    console.log('Error');
    return;
}
let ones = ["không", "một","hai","ba","bốn","năm","sáu","bảy","tám","chín"];
    let str = n.toString();
// số có 1 chữ số    
if (str.length === 1) { 
    console.log(ones[Number(str[0])]);
}
// số có 2 chữ số
if (str.length === 2) {
    let tens = str[0];
    let unit = str[1];
if (tens === "1"){ //khi số đầu tiên là 1
    if(unit === "0") {console.log('mười');} //trường hợp 10
    else if (unit === "5") {console.log("mười lăm");} // trường hợp 15
    else {console.log(`mười ${ones[Number(str[1])]}`);}} //còn lại
else { // số đầu tiên khác 1
    if(unit === "0") {console.log(`${ones[Number(str[0])]} mươi`);} // nếu số cuối là 0
    else if (unit === "5") {console.log(`${ones[Number(str[0])]} mươi lăm`);} // nếu số cuối là 5
    else {console.log(`${ones[Number(str[0])]} mươi ${ones[Number(str[1])]}`);} //còn lại
}
}
// số có 3 chữ số
if (str.length === 3) { 
    let hundreds = str[0];
    let tens = str[1];
    let unit = str[2];
if (tens === "0"){ // nếu số thứ 2 là 0
    if (unit === "0") {console.log(`${ones[Number(str[0])]} trăm`);} //trường hợp tròn trăm
    else {console.log(`${ones[Number(str[0])]} trăm lẻ ${ones[Number(str[2])]}`);}
}   else if (tens === "1") { // nếu số thứ 2 là 1
    if (unit === "0") {console.log(`${ones[Number(str[0])]} trăm mười`);}
    else if (unit === "5") {console.log(`${ones[Number(str[0])]} trăm mười lăm`);}
    else {console.log(`${ones[Number(str[0])]} trăm mười ${ones[Number(str[2])]}`);}
} else {
    if (unit === "0") {console.log(`${ones[Number(str[0])]} trăm ${ones[Number(str[2])]} mươi`);}
    else if (unit === "5") {console.log(`${ones[Number(str[0])]} trăm ${ones[Number(str[2])]} mươi lăm`);}
    else {console.log(`${ones[Number(str[0])]} trăm ${ones[Number(str[1])]} mươi ${ones[Number(str[2])]}`);}
}
}
}
readVietnameseNumber (102);