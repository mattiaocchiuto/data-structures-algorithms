Array.prototype.exchange = function (origin, destination) {
  var oV = this[origin],
      dV = this[destination];

  if (oV && dV) {
    this[origin] = dV;
    this[destination] = oV;
  }
}

function quickSort_partition(a, start, end){
  var pivot = a[end],
      lessLimit = start-1;
  for (var j=start;j<end;j++){
    if(a[j]<=pivot){
      lessLimit++;
      if (j>lessLimit){
        a.exchange(lessLimit,j);
      }
    }
  }
  a.exchange(lessLimit+1, end);
  return lessLimit+1;
}

function quickSort(a, p, q) {
  if (p<q){
    var mid = quickSort_partition(a, p, q);
    quickSort(a, p, mid-1);
    quickSort(a, mid+1, q);
  }
}

var input = [2,8,7,1,3,5,6,4];
quickSort(input, 0, input.length-1);
