// Stack data structure - LIFO
function Stack () {
  this.stack = [];
  this.top = -1;
}

Stack.prototype = {
  isEmpty: function () {
    return this.stack.length === 0;
  },
  push: function(el){
    this.stack[this.stack.length] = el;
    this.top++;
  },
  pop: function(){
    if(this.top ===-1){
      throw "empty stack";
    }
    var lastEl = this.stack.pop();
    this.top--;
    return lastEl;
  }
}

var stack = new Stack();


// Queue data structure - FIFO
function Queue () {
  this.queue = [];
}

Queue.prototype = {
  enqueue: function (el) {
    this.queue[this.queue.length] = el;
  },
  dequeue: function () {
    if(this.queue===[]){
      throw "empty stack";
    }
    return this.queue.shift();
  }
}

var queue = new Queue();
