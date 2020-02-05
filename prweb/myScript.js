function writeData(){
    document.write("This is my text");
  }

function deleteLine(ref){
  var trRef = getNextParentTag(ref,"TR");
  if(trRef !== null){
    trRef.parentNode.removeChild(trRef);
  }
  console.log("");
}

function editLine(ref){
  var trRef = getNextParentTag(ref,"TR");
  var i = Number.ref;
  if(i>=1){
    deleteAll(child[i]);
    i--;    
    ref.append(createForm(i));
  }
}

function deleteAll(node){
  var child = node.firstChild;
  while(child !== null){
    node.removeChild(child);
    child = node.firstChild;
  }

}

function createForm(){
  var input,form;
  form  = document.createElement("form");
  input = document.createElement("input");
  input.append("text");
  form = form.append(input);
  return form;
}

function getNextParentTag(currentElement,tagName){
  // nodeType= 1 is TAG
  while((currentElement !== null)&&((currentElement.nodeType != 1)||(currentElement.tagName != tagName))){
    currentElement = currentElement.parentNode;
  }
  return currentElement;
}
