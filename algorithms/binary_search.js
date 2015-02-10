function binarySearch_recursive(A, x, min, max){
  if(max<min){
    throw {
      name: "not_found",
      message: "Element not found"
    }
  }
  else {
    var mid = parseInt(((max-min)/2)+(min));
    if(A[mid]>x){
      console.log('first', mid);
      binarySearch_recursive(A, x, min, mid-1);
    }
    else if(A[mid]<x){
      binarySearch_recursive(A, x, mid+1, max);
    }
    else{
      return mid;
    }
  }
}

function binarySearch_iterative(A, x, min, max){
  while(min<max){
    console.log(min,max);
    var mid = parseInt(((max-min)/2)+(min));
    if(A[mid]>x){
      min=min;
      max=mid-1;
    }
    else if(A[mid]<x){
      min=mid+1;
      max = max;
    }
    else{
      if(A[mid]===x){
        return mid
      }
      else{
        throw new Error('Element not found');
      }
    }
  }
}
