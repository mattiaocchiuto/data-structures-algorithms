var Node = function (v) {
  this.v = v;
  this.p = null;
  this.l = null;
  this.r = null;
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
  /** 
  * Navigate the tree and return a sorted array 
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
