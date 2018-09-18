// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var arr = [];
  if(node === undefined){
    node = document.body;
  }
  if(node.classList && node.classList.contains(className)){
    arr.push(node)
  }
  for(var i = 0; i < node.childNodes.length; i++){
    var b = node.childNodes[i];
    arr = arr.concat(getElementsByClassName(className, b));
  }
  return arr;
};
getElementsByClassName('targetClassName')