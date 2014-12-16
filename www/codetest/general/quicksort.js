// THIS IS NOT WORKING YET !!!!!!!!!! DAMN!



var _ = require("lodash");

var swap = function(A, i, j) {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
var partition = function(A, i, j) {
  var p = i;
  i++;
  var pivot = A[p];
  if (i === j) {
    if (A[p] > A[j]) {
      swap(A, p, j);
    }
  }
  while (i < j) {
    //scan i from left to right
    while (A[i] < pivot && i < j) {
      i++;
    }
    //scan j from right to left
    while (A[j] > pivot && i < j) {
      j--;
    }
    if (i >= j) {
      if (A[p] > A[j]) {

        swap(A, p, j);
      }
      return j;
    } else {
      swap(A, i, j);
    }
  }
  return p;
};
var quicksort = function(A, si, sj) {

  if (si < sj) {
    var p = partition(A, si, sj);
    console.log(si, sj, p);
    //console.log("quicksort L", si, p - 1);
    quicksort(A, si, p - 1);
    //console.log("quicksort R", p+1, si);
    quicksort(A, p + 1, sj);
  }
  return A;
};

//console.log(quicksort([9,3,4,7,5,6,2,1,8,0], 0, 9));
//console.log(quicksort([3,2,1], 0, 2));
//console.log(quicksort([2,1], 0, 1));
//console.log(quicksort([1,2,3], 0, 2));
//console.log(quicksort([3,1,2], 0, 2));
//console.log(quicksort([2,1,3], 0, 2));
//console.log(quicksort([2,3,1], 0, 2));
console.log(quicksort([1,3,2], 0, 2));