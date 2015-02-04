// Counting sort algorithm - complexity O(k+n)
function counting_sort (a, k) {
  var b = [],
      c = [];

  for (var i=0;i<=k+1;i++) {
    c[i] = 0;
  }
  for (j in a) {
    c[a[j]]++;
  }
  for (i in c){
    if(i-1>=0) {
      c[i] = c[i]+c[i-1];
    }
  }
  for(var i=a.length-1;i>=0;i--){
    b[c[a[i]]-1] = a[i];
    c[a[i]]--;
  }
  return b;
}
