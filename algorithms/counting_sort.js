// Counting sort algotithm - complexity O(k+n)
function countingSort (a, k) {
  var b = [],
      c = [];

  for (var i=0;i<=k;i++) {
    c[i] = 0;
  }
  for (var j=0;j<a.length;j++) {
    c[a[j]]++;
  }
  for (i in c){
    if(i-1>0) {
      c[i] = c[i]+c[i-1];
    }
  }
  for(var i=a.length-1;i>=0;i--){
    b[c[a[i]]] = a[i];
    c[a[i]]--;
  }
}

var input = [2,5,3,0,2,3,0,3];
countingSort(input, 8);
