function log (log, msg) {
  var msg = msg ||  '';
  try {
    console.log(msg, log);
  } catch (e) {}
}
function isUndefined (val) {
  return (typeof val === 'undefined')
}
function merge(a, p, q, e){
  var l=[],
      r=[],
      nl=q-p+1,
      nr=e-q;
  for(var i=0; i<nl;i++){
    l[i]=a[p+i];
  }
  for(var i=0;i<nr;i++){
    r[i]=a[q+1+i];
  }
  var lInd = 0,
      rInd = 0;
  for(var k=p;k<=e;k++){

    if(!isUndefined(l[lInd]) && !isUndefined(r[rInd])){
      if(l[lInd] <= r[rInd]){
        a[k] = l[lInd];
        lInd++;
      }
      else if(!!r[rInd]){
        a[k] = r[rInd];
        rInd++;
      }
    }
    else {
      if (!isUndefined(l[lInd])){
        a[k]=l[lInd];
        lInd++;
      }
      if (!isUndefined(r[rInd])){
        a[k]=r[rInd];
        rInd++;
      }
    }
  }
}

// Merge sort algorithms - complexity O(n)
function mergeSort(a, p, r){
  if(p<r){
    var q = parseInt((p+r)/2);
    mergeSort(a, p, q);
    mergeSort(a, q+1, r);
    merge(a,p,q,r);
  }
}

var input = [2,8,7,1,3,5,6,4];
mergeSort(input, 0, input.length-1);
log(input);
