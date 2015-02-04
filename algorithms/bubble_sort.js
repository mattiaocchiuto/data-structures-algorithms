// bubble sort algorithm - complexity O(n*n)
var bubble_sort = function (a){
  var changeExec = true,
      trips = 0;
  while(changeExec>0) {
    changeExec = false;
    for (var i=0; i<a.length-trips;i++) {
      if(a[i]>a[i+1]){
        var ai = a[i],
            aii = a[i+1];
        a[i] = aii;
        a[i+1] = ai;
        changeExec = true;
      }
    }
    trips++;
  }
  return a;
}