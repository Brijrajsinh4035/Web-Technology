// import readlineSync from 'readline-sync';

// arr = readlineSync.question("Ask Me Anything Releted To DSA --->");

var arr = [9, 2, 5, 1, 5, 3, 8, 0, 1,-100];
var s = arr.length-1;
quicksort(arr, 0, s);
console.log(arr);

function quicksort(a, start, end) {
  if (start < end) {
    var p = partition(a, start, end);

    quicksort(a, start, p - 1);
    quicksort(a, p + 1, end);
  }
}

function partition(a, start, end) {
  var pivot = a[end];
  var i = start - 1;

  for (var j = start; j < end; j++) {
    if (a[j] < pivot) {
      i++;

      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }

  temp = a[i + 1];
  a[i + 1] = pivot;
  a[end] = temp;

  return i + 1;
}
