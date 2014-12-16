var swap = function(A, i, j) {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

var dsort = function(A) {
  var cat0 = -1;
  var cat1 = -1;
  var cat2 = -1;
  var i = 0;
  for (i = 0; i < A.length; ++i) {
    if (A[i] === 2) {
      // do nothing;
      if (cat2 == -1) {
        cat2 = i
      }
    } else if (A[i] === 1) {
      if (cat2 !== -1) {
        if (cat1 === -1) {
          cat1 = cat2;
        }
        swap(A, i, cat2);
        cat2++;
      } else {
        if (cat1 === -1) {
          cat1 = i;
        }
      }
    } else if (A[i] === 0) {
      if (cat2 !== -1) {
        swap(A, i, cat2);
        if (cat1 !== -1) {
          swap(A, cat1++, cat2++);
        } else {
          cat2++;
        }
      } else {
        if (cat1 !== -1) {
          swap(A, i, cat1++);
        }
      }

    }
  }

  return A;
};

console.log(dsort([0, 2, 0, 1, 1, 2, 1, 2, 0]));