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
    saveForm(ref);
}

function replaceInputByValue(inputRef) {
    tdRef = getNextParentTag(inputRef, "TD");
    var textValue = inputRef.value;
    deleteAll(tdRef);
    tdRef.appendChild(document.createTextNode(textValue));
}

function addLine(tdRef) {
    trRef = getNextParentTag(tdRef, "TR");
    var inputRefs = [...trRef.getElementsByTagName("INPUT")]; // copie pour pouvoir supprimer les tags inputs dans la boucle for
    // Suppression des form et remplacement par du texte
    for (i = 0; i < inputRefs.length; i++) { 
        replaceInputByValue(inputRefs[i]);
    }
    
    // Ajout des icônes
    deleteAll(trRef.children[5]);
    initIcons(trRef.children[5]);
    
    // Ajout d'une ligne
    var tbodyRef = getNextParentTag(trRef, "TBODY");
    tbodyRef.appendChild(initEmptyLine());
}

function saveForm(tdRef) { // tdRef : ref to the save or plus button that launches the action
    trRef = getNextParentTag(tdRef, "TR");
    var inputRefs = [...trRef.getElementsByTagName("INPUT")]; // copie pour pouvoir supprimer les tags inputs dans la boucle for
    // Suppression des form et remplacement par du texte
    for (i = 0; i < inputRefs.length; i++) { 
        replaceInputByValue(inputRefs[i]);
    }
}

function initIcons(tdRef) {
    tdRef.innerHTML = '<td class="centered"> \
    <img src="delete.png" style="display:inline;" onClick="deleteLine(this);"/> \
    <img src="edit.png" style="display:inline;" onClick="editLine(this);"/> \
    <img src="save.png" style="display:none;" onClick="saveLine(this);"/> \
    </td>';
}

function initEmptyLine() {
    var trRef =  document.createElement('tr');
    trRef.innerHTML = '<td></td> \
        <td><form><input type="text"/></form></td> \
        <td><form><input type="text"/></form></td> \
        <td><form><input type="text"/></form></td> \
        <td></td> \
        <td class="centered"><img src="plus.png" onClick="addLine(this);"/></td>';
    return trRef;
}

function deleteAll(node) {  // delete all children
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