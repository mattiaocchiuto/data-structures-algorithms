// Insertion Sort algorithm - O(n*n) 
var insertion_sort_incr = function(a){
  var iteration = 0;
  for(var i=1; i<a.length; i++){
    var k=a[i],
        j=i-1;

    while(j>=0 && a[j]>k){
      a[j+1] = a[j];
      j = j-1;
      iteration++;
    }
    a[j+1]=k;
  }
  return a;
};

var insertion_sort_decr = function(a){
  var iteration = 0;
  for(var i=a.length-1; i>=0; i--){
    var k=a[i],
    j=i+1;

    while(j<a.length && a[j]>k){
      a[j-1] = a[j];
      j = j+1;
      iteration++;
    }
    a[j-1]=k;
  }
  return a;
}
