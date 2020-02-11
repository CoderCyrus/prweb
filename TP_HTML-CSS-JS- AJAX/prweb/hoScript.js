function getNextParentTag(currentElement, tagName) {
    // nodeType=1 is TAG
    while ((currentElement !== null)
    && ((currentElement.nodeType != 1)
    || (currentElement.tagName !== tagName))) {
    currentElement = currentElement.parentNode;
    } return currentElement;
    }


function deleteLine(ref) {
    var trRef = getNextParentTag(ref, "TR");
    if (trRef !== null) trRef.parentNode.removeChild(trRef);
    }

function deleteAll(ref) {
    if (ref !== null) { while (ref.firstChild !== null){
        ref.removeChild(ref.firstChild)}}
}

function editLine(ref) {
    var trRef = getNextParentTag(ref, "TR");
    if (trRef !== null){
        var tdRef = trRef.firstElementChild;
        while (tdRef !== null){
            if (tdRef.id.includes("id")){
                tdRef = tdRef.nextElementSibling;
            }
            else if (tdRef.id.includes("action")) {
                var buttonRef = tdRef.firstElementChild;
                if (tdRef !== null) { 
                    while (buttonRef !== null){
                        if(buttonRef.id.includes("edit")){
                            document.getElementById(buttonRef.id).style = "display:none";
                        }
                        else if (buttonRef.id.includes("save")){
                            document.getElementById(buttonRef.id).style = "display:inline";
                        }
                        buttonRef=buttonRef.nextElementSibling;
                    }    
                tdRef = tdRef.nextElementSibling;
                }
            }
            else{
                var inputNode = document.createElement("input"); 
                a = JSON.stringify(tdRef);
                deleteAll(tdRef) 
                tdRef.appendChild(inputNode);
                tdRef = tdRef.nextElementSibling;
            }
        }
    }
}

function saveLine(ref){
    var trRef = getNextParentTag(ref, "TR");
    if (trRef !== null){
        var tdRef = trRef.firstElementChild;
        while (tdRef !== null){
            if (tdRef.id.includes("id")){
                tdRef = tdRef.nextElementSibling;
            }
            else if (tdRef.id.includes("action")) {
                var buttonRef = tdRef.firstElementChild;
                if (tdRef !== null) { 
                    while (buttonRef !== null){
                        if(buttonRef.id.includes("save")){
                            document.getElementById(buttonRef.id).style = "display:none";
                        }
                        else if (buttonRef.id.includes("edit")){
                            document.getElementById(buttonRef.id).style = "display:inline";
                        }
                        buttonRef=buttonRef.nextElementSibling;
                    }    
                tdRef = tdRef.nextElementSibling;
                }
            }
            else{
                
                var textNode = document.createElement("text"); 
                deleteAll(tdRef);
                tdRef = tdRef.nextElementSibling;
            }
        }
    }
}

function addLine(ref){


    if (getNextParentTag(ref, "TR").previousElementSibling !== null){
        var trRef = getNextParentTag(ref, "TR").previousElementSibling;
        var identifer = parseInt(trRef.firstElementChild.innerHTML)+1
    }
    else{
        identifer =  1;
    }

    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    td1.id = id="id".concat(identifer);
    var td2 = document.createElement("td");
    td2.id = id="title".concat(identifer);
    var td3 = document.createElement("td");
    td3.id = id="author".concat(identifer);
    var td4 = document.createElement("td");
    td4.id = id="body".concat(identifer);     
    var td5 = document.createElement("td");
    td5.id = id="action".concat(identifer);


    td1.innerHTML  = identifer;
    td2.innerHTML  = document.getElementById("titleAdd").value;
    td3.innerHTML  = document.getElementById("authorAdd").value;
    td4.innerHTML  = document.getElementById("bodyAdd").value;



    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    document.getElementById("tbody").insertBefore(row,document.getElementById("add"))


}