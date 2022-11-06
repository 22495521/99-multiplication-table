// for (let x = 2; x < 10; x++) {
//     for (let y = 1;y<10; y++) {
//         console.log(`${x}*${y}=${x*y}`);
//     }
// }


const main= document.querySelector('.main');
const mainli1 =document.querySelectorAll('.main li');


let str2='';
for (let x = 2; x < 10; x++){
    let str ='';
   for (let y = 1; y < 10; y++){
        str= str+`<p>${x}x${y}=${x*y}</p>`;
   }
   str2=str2+`<li><h2>${x}</h2>${str}</li>`;
}


main.insertAdjacentHTML('beforeend',str2); //在原本main新增


