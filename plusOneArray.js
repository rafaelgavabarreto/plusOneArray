/*
https://www.youtube.com/watch?v=uQdy914JRKQ

Example coding interview
Javascript in two versions

*/

function plusOneArray(array) {


// 1 version without language skills

  // array[array.length - 1] += 1;

  // if (array[array.length - 1] > 9) {

  //   for (var i = array.length - 1; i >= 0; i--) {
  //     if (array[i] > 9) {
  //       array[i] = '0';
  //       array[i - 1] += 1;

  //       if (array[0] > 9) {
  //         for (var j = array.length - 1; j >= 0; j--) {
  //           array[j + 1] = array[j];
  //         }
  //         array[1] = '0';
  //         array[0] = 1;
  //       }
  //     }
  //   }
  // }


// 2 version with language skill

  let numbers = array.join('');
  numbers = Number(numbers) + 1;
  array = numbers.toString(10).split('').map(Number);

  return array;
}

console.log(plusOneArray([9, 9, 9, 9, 9]));