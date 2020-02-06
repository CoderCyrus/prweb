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
  for(var i = 2 ; i<= 6 ; i++){
    deleteAll(child[i]);
    ref.append(createForm(i));
  }
}

function deleteAll(node){
  var child = node.firstChild;
  while(child !== null){
    node.removeChild(child);
    // always put the next child in the position of first child
    child = node.firstChild;
  }
}

// function to create an empty element each time delete an element
function createForm(){
  var input,form;
  form  = document.createElement("form");
  input = document.createElement("input");
  input.append("text");
  form.append(input);
  return form;
}

function getNextParentTag(currentElement,tagName){
  // nodeType= 1 is TAG
  while((currentElement !== null)&&((currentElement.nodeType != 1)||(currentElement.tagName != tagName))){
    currentElement = currentElement.parentNode;
  }
  return currentElement;
}
