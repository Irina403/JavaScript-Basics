// let a = prompt('Введите значение "a"');
// let b = prompt('Введите значение "b"');
// let c = prompt('Введите значение "c"');
// let d = b^2-4*a*c;
// // alert(d);

// // if (d < 0){
// //     alert('Корней нет');
//     if (d == 0){
//         d = b/(2*a);
//         alert(d, 'Один корень');
    
//     if (d > 0){
//         let sqrt1 = (-b + Math.sqrt(d) )/(2*a);
//         let sqrt2 = (-b - Math.sqrt(d) )/(2*a);
//         alert(sqrt1);
//     }
//     }else{
//         alert('Корней нет');
//     }


let a = prompt('Введите значение "a"');
let b = prompt('Введите значение "b"');
let c = prompt('Введите значение "c"');
let d = b^2-4*a*c;

if (d < 0){
   console.log(d, 'Корней нет!');
}
if (d == 0){
   let sqrt = b/(2*a);
   console.log('Один корень',sqrt);
}
if (d > 0){
    let sqrt1 = (-b + Math.sqrt(d) )/(2*a);
    let sqrt2 = (-b - Math.sqrt(d) )/(2*a);
    console.log('Два корня', sqrt1,sqrt2);
}
