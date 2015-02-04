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
function merge_sort(a, p, r){
  if(p<r){
    var q = parseInt((p+r)/2);
    merge_sort(a, p, q);
    merge_sort(a, q+1, r);
    merge(a,p,q,r);
  }
  return a;
}
