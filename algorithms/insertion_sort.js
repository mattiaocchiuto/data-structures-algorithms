function log (log, msg) {
  var msg = msg ||  '';
  try {
    console.log(msg, log);
  } catch (e) {

  }
}

var arrToSort = [5,2,4,6,1,3];

// Insertion Sort algorithm - O(n*n) 
console.time("insertion_sort_decr");
var insertion_sort_incr = (function(a){
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

  log(a, 'increased');
  log(iteration, 'increased iteration');

})(arrToSort);
console.timeEnd("insertion_sort_decr");

console.time("insertion_sort_decr");
var insertion_sort_decr = (function(a){
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

})(arrToSort);
console.timeEnd("insertion_sort_decr");
