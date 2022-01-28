// Promice

// callBack HELL
// setTimeout(() => {
//     const num1 = 10
//     console.log('call 1');

//     setTimeout(() => {
//         const num2 = 10
//         console.log('call 2');

//         setTimeout(() => {
//             const num3 = 10
//             console.log('call 3');

//             setTimeout(() => {
//                 const num4 = 10
//                 console.log('call 4');

//                 setTimeout(() => {
//                     const num5 = 10
//                     console.log('call 5');
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
// }, 1000)

// const reg = new Promise((resolve, reject) => {
//     console.log('Запрос...');
//     setTimeout(() =>{
//         console.log('Подготовка данных...');
//         const element = {
//             name: 'phone',
//             price: 20000
//         }
//         console.log('1');

//         resolve()
//     }, 2000)
// })

// reg
//     .then((element) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => { 
//                 element.wrapped = true
//                 console.log('2');

//                 resolve(element)
//         }, 1000)
//     })
// })
//     .then((element) => {
//         return new Promise((resolve, reject) => {
//             element.modify2 = true
//             console.log('3');

//             resolve()
//         })
//     })
//     .then(() => {
//         console.log('4');
//     })
//     .catch(() => {
//         console.log('error');
//     })
//     .finally(() => {
//         console.log('fanally');
//     })

// fatch API
// DOM API
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
