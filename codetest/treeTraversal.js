var tree = [1,2,3,4,5,6,7];

var getLeftChildIndex = function(i) {
  return i * 2 + 1;
};
var getRightChildIndex = function(i) {
  return i * 2 + 2;
};

var visit = function(it) {
  console.log(it);
};
var inOrder = function(tree, i) {
  if (i >= tree.length) {
    return;
  }
  inOrder(tree, i * 2 + 1);
  visit(tree[i]);
  inOrder(tree, i * 2 + 2);
};
var preOrder = function(tree) {
  var s = [], i;
  s.push(0);
  while (s.length > 0) {
    i = s.pop();
    visit(tree[i]);
    if (i * 2 + 2 < tree.length) {
      s.push(i * 2 + 2);
    }
    if (i * 2 + 1 < tree.length) {
      s.push(i * 2 + 1);
    }
  }
};

var postOrder = function(tree, i) {
  if (i >= tree.length) { return; }
  postOrder(tree, i * 2 + 1);
  postOrder(tree, i * 2 + 2);
  visit(tree[i]);
};

//console.log(inOrder(tree, 0));
//console.log(preOrder(tree));
console.log(postOrder(tree, 0));