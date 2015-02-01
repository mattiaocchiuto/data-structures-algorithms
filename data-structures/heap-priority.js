// Heap class
function Heap (arr) {
  this.heap = arr || [4,1,3,2,16,9,10,14,8,7];
  this.length = this.heap.length-1;
  this.heap_size = this.heap.length-1;
}

Heap.prototype = {
  maxHeapify: function(i){
    var l = this.getLeftIndex(i),
    r = this.getRightIndex(i),
    max = i;

    if (l && l<=this.heap_size && this.heap[l] > this.heap[i]) {
      max = l;
    }
    if (r && r<=this.heap_size && this.heap[r] > this.heap[max]) {
      max = r
    }
    if (max!=i){
      var node = this.heap[i];
      this.heap[i] = this.heap[max];
      this.heap[max] = node;
      this.maxHeapify(max);
    }
  },

  buildMaxHeap: function() {
    for (var i = this.heap.length/2; i>=0; i--){
      this.maxHeapify(i);
    }
  },

  getHeap: function(){
    return this.heap.slice(0, this.heap_size);
  },

  getNode: function (i) {
    if (this.heap[i]){
      return this.heap[i];
    }
    else {
      throw 'This element does not exist';
    }
  },

  updateNode: function (index, value) {
    return this.heap[index] = value;
  },

  getParent: function(i){
    return this.heap[parseInt(i/2)];
  },

  getParentIndex: function(i){
    return parseInt(i/2);
  },

  getLeftIndex: function(i){
    i++;
    var leafIndex = (i*2)-1;
    if(this.heap[leafIndex])
      return (i*2)-1;
    },

  getRightIndex: function(i){
    i++;
    var leafIndex = (i*2+1)-1;
    if(this.heap[leafIndex])
      return (i*2+1)-1;
  },

  getLeftChild: function(i){
    return this.heap[this.getLeftIndex(i)];
  },

  getRightChild: function(i){
    return this.heap[this.getRightIndex(i)];
  },

  decrHeapSize: function () {
    if (this.heap_size)
      this.heap_size--;
  },

invertNode: function (indexA, indexB) {
  var nodeA = this.heap[indexA],
      nodeB = this.heap[indexB];
  this.heap[indexA] = nodeB;
  this.heap[indexB] = nodeA;
  }
}

// Priority queue class
function PriorityQueue() {
  Heap.call(this);
}

// Extend operation - start
PriorityQueue.prototype = new Heap();
PriorityQueue.prototype.constructor = PriorityQueue;
// Extend operation - end

PriorityQueue.prototype.getPriorityQueue = function () {
  return this.getHeap();
}

PriorityQueue.prototype.heapMaximum = function () {
  return this.getHeap()[0];
}

PriorityQueue.prototype.heapExtractMax = function () {
  this.buildMaxHeap();

  var max = this.heapMaximum();
  this.invertNode(0, this.heap_size);

  this.decrHeapSize();
  this.maxHeapify(0);
  return max;
}

PriorityQueue.prototype.heapIncreaseKey = function (index, value) {
  if (arguments.length < 2){
    throw "Wrong arguments number";
  }
  if(this.getNode(index) > value){
    throw "The new value has to be bigger than the previous";
  }
  this.updateNode(index, value);
  while (index>=0 && this.getParent(index)<value) {
    this.invertNode(this.getParentIndex(index), index);
    index--;
  }
}
