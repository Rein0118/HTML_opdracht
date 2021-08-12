// // This function produce something
// const check = function (number) {
//    if (number > 100){
//        return true;
//    }
//    return false;
// }

// // const result = check(101);
// // console.log(result);

// const result = check(99);
// console.log(result);

// const bouncerBrenda = function (maxPeople, currentPeople, age) {
//     if (maxPeople < currentPeople && age > 17){
//         return "it's too busy now, come back later";
//     } else if (maxPeople >= currentPeople && age < 18){
//         return "this club is for adults";
//     } else {
//         return "come in"
//     }
// }

// // const result = bouncerBrenda(100, 50, 19);
// // console.log(result);

// // const result =bouncerBrenda (100, 101, 19);
// // console.log(result);

// const result = bouncerBrenda (100, 50, 17);
// console.log (result);


function average(a, n)
      {
               // Find sum of array element
        var sum = 0;
        for (var i = 0; i < n; i++) sum += a[i];
 
        return Math.round(sum / n);
      }
 
      // Driver code
 
      var arr = [10, 2, 3, 4, 5];
      var n = arr.length;
 
      console.log(average(arr, n));
  

