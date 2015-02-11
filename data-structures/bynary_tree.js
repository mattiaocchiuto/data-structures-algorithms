var Node = function (v) {
  this.v = v;
  this.p = null;
  this.l = null;
  this.r = null;
  this.color = 'white'; // Used for the breadth-first algorithm
  this.distance = 0;    // Used for the breadth-first algorithm
}
Node.prototype = {
  foreach: function(callback){
    if(typeof callback !== 'function'){
      throw new TypeError(callback+' is not a function');
    }

    var childs = [];
    childs.push(this.l);
    childs.push(this.r);

    for(var i=0;i<childs.length;i++){
      if (childs[i]){
        callback.apply(this, [i, childs[i]]);
      }
    }
  }
}

var BinaryTree = function () {
  this.root = null;
}

BinaryTree.prototype = {
  /** 
  * complexity O(h), where h is the height of the tree
  */
  insert: function(node){
    var x = this.root,
        y = null;

    while(!!x){
      y = x;
      if(x.v > n.v){
        x = x.l;
      }
      else {
        x = x.r;
      }
    }
    n.p = y;
    if(!y){
      this.root = n;
    }else if(y.v > n.v){
      y.l = n;
    }else{
      y.r = n;
    }
  },
  /** 
  * complexity O(h), where h is the height of the tree
  */
  minimum: function(){
    var x = this.root;
    while(!!x.l){
      x=x.l;
    }
    return x;
  },
  /** 
  * complexity O(h), where h is the height of the tree
  */
  maximum: function(){
    var x = this.root;
    while(!!x.r){
      x=x.r;
    }
    return x;
  },
  /** 
  * complexity O(h), where h is the height of the tree
  */
  search: function(v){
    var x = this.root;

    if(!x){
      return x;
    }
    while(!!x){
      if(x.v===v){
        return x;
      }
      else if(x.v>v){
        x=x.l;
      }
      else{
        x=x.r;
      }
    }
  },
  /** 
  * complexity O(h), where h is the height of the tree
  */
  successor: function(x){
    if(!!x.r){
      return this.minimum(x);
    }
    else {
      var y=x.p;
      while(!!y && y.r===x){
        x=y;
        y=y.p;
      }
      return y;
    }
  },
  /** 
  * complexity O(h), where h is the height of the tree
  */
  delete: function(v){
    if(!v.l){
      this._transplant(v, v.r);
    }
    else if(!v.r){
      this._transplant(v, v.l);
    }
    else {
      var y = this.minimum(v.r);
      if(y.p!=v){
        this._transplant(y, y.r);
        y.r = v.r;
        y.r.p = y;
      }
      this._transplant(v,y);
      y.l=v.l;
      y.l.p = y;
    }
  },
  // DEPTH-FIRST TRAVERSAL ALGORITHMS
  /** 
  * Navigate the tree in in-order traversal way 
  * complexity O(n), where n is the number of nodes in the tree
  */
  inOrderWalk: function(x, result){
    var result = result||[];
    if(!!x){
      this.inOrderWalk(x.l, result);
      result.push(x.v);
      this.inOrderWalk(x.r, result);
    }
    return result;
  },
  /** 
  * Navigate the tree in pre-order traversal way 
  * complexity O(n), where n is the number of nodes in the tree
  */
  preOrderWalk: function(x, result){
    var result = result||[];
    if(!!x){
      result.push(x.v);
      this.preOrderWalk(x.l, result);
      this.preOrderWalk(x.r, result);
    }
    return result;
  },
  /** 
  * Navigate the tree in post-order traversal way 
  * complexity O(n), where n is the number of nodes in the tree
  */
  postOrderWalk: function(x, result){
    var result = result||[];
    if(!!x){
      this.postOrderWalk(x.l, result);
      this.postOrderWalk(x.r, result);
      result.push(x.v);
    }
    return result;
  },
  breadthFirts: function(x){
    var queue = [];
    queue.push(x);

    while(queue.length>=1){
      // non devo usare pop, inquanto mi gestirebbe una lista LIFO, questa è FIFO => devo togliere dalla testa
      var u = queue.shift();
      u.foreach(function(i, elem){
        if(elem.color ==='white'){
          elem.color = 'grey';
          elem.distance = elem.distance+1;
          queue.push(elem);
        }
      });
      u.color = 'black';
    }
  },
  // Private methods
  /**
  * Replace one subtree as a child of its parent 
  * with another subtree
  */  
  _transplant: function(u,v){
    if(!u){
      this.root = v;
    }
    else if(u===u.p.l){
      u.p.l = v;
    }
    else {
      u.p.r = v;
    }
    if(!!v){
      v.p = u.p;
    }
  }
}
