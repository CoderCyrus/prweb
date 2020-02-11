function deleteLine(ref) {
    var trRef = getNextParentTag(ref, "TR");
    if (trRef !== null) trRef.parentNode.removeChild(trRef);
}

function getNextParentTag(currentElement, tagName) {
    // nodeType=1 is TAG
    while ((currentElement !== null) && 
        ((currentElement.nodeType != 1) || (currentElement.tagName !== tagName))) {
            currentElement = currentElement.parentNode;
    }
    return currentElement;
}

function editLine(ref) {
    ref.style.display = "none";
    ref.parentNode.children[2].style.display = "inline";
    var trRef = getNextParentTag(ref, "TR");
    for (i = 1; i <= 3; i++) {
        deleteAll(trRef.children[i]);
        trRef.children[i].appendChild(createForm());
    }
}

function saveLine(ref) {
    ref.style.display = "none";
    ref.parentNode.children[1].style.display = "inline";
}

function addLine(ref) {
    
}


function deleteAll(node) {
    var firstChild = node.firstChild
    while (firstChild != null) {
        firstChild.parentNode.removeChild(firstChild);
        firstChild = node.firstChild;
    }
}

function createForm() {
    var form, input;
    form = document.createElement("form");
    input = document.createElement("input");
    input.type = "text";
    form.appendChild(input);
    return form;
}

function hide(node) {
    node.style.display = none;
}