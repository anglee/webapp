// find the next node in a binary search tree

var findLeftMost = function(root) {

}
var findNext = function(node) {
  if (node.right) {
    return findLeftMost(node.right);
  } else {
    var n = node;
    while (isRightChild(n)) {
      n = n.parent;
    }
    if (n && n.parent) {
      return n.parent;
    } else {
      return -1; // no next
    }
  }
};

// if node is a leaf, and is a left child, return parent

// if node is a leaf, and is a right child, traverse up to a ancestor who is a left child,
// then return its parent

// if node is not a leaf, return the left most in a tree rooted at right child