// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Array.prototype.exchange = function (origin, destination) {
  var oV = this[origin],
      dV = this[destination];

  if (oV && dV) {
    this[origin] = dV;
    this[destination] = oV;
  }
}

function quick_sort_partition(a, start, end){
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

function quick_sort_partition_random(a, start, end){
  var pivotIndex = getRandomInt(start,end),
      pivot = a[pivotIndex],
      lessLimit = start-1;
  a.exchange(pivotIndex, end);
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

function quick_sort(a, p, q) {
  if (p<q){
    var mid = quick_sort_partition(a, p, q);
    quick_sort(a, p, mid-1);
    quick_sort(a, mid+1, q);
  }
  return a;
}

function quick_sort_random(a, p, q) {
  if (p<q){
    var mid = quick_sort_partition_random(a, p, q);
    quick_sort_random(a, p, mid-1);
    quick_sort_random(a, mid+1, q);
  }
  return a;
}
