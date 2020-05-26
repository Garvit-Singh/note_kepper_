var indexCounter = 0;
var num = 1000;
const data= [];

const myval = () => {
    const title=document.getElementById('title').value;
    const description=document.getElementById('descrip').value;

    data[indexCounter] = {
        id: indexCounter,
        title,
        description
    }
    console.log(data[indexCounter]);
    add(data[indexCounter]);

    document.getElementById('title').value="";
    document.getElementById('descrip').value="";
    indexCounter = indexCounter +1;
    }

const add = ( data_object ) => {
    var clicks0 = 0;
    var tap=0;

    const note_box = document.createElement("DIV");
    // adding id to each note saved different for all
    const id_add = document.createAttribute("ID");
    id_add.value = data_object.id;
    note_box.attributes.setNamedItem(id_add);
    // adding class to each note saved but same style for all
    const class_add = document.createAttribute("CLASS");
    class_add.value = "note_record";
    note_box.attributes.setNamedItem(class_add);
    // adding head to note_box according to title
    const head = document.createElement("strong");
    // adding style to head
    head.style.cssText="padding: 2px;margin: 2px";
    const head_text = document.createTextNode(data_object.title);
    head.appendChild(head_text);
    note_box.appendChild(head);

    // adding paragraph to note_box according to description
    const para = document.createElement("p");
    // adding style to para
    para.style.cssText="padding: 2px;margin: 2px";
    const para_text = document.createTextNode(data_object.description);
    para.appendChild(para_text);
    note_box.appendChild(para);

// for showing drop down button saved for later
    const btn0 = document.createElement("button");
    const i0 = document.createElement("I");
    const i0C = document.createAttribute("class");
    i0C.value="material-icons icons";
    i0.attributes.setNamedItem(i0C);
    const i0_text = document.createTextNode("more_vert");
    i0.appendChild(i0_text);
    // Adding button visibility to all
    btn0.onclick = function() {
//      console.log(document.activeElement.parentElement.childNodes);
        const zero = document.getElementById(document.activeElement.parentElement.id).childNodes;
//        console.log(zero);
        if(clicks0%2 == 0) {
            zero[3].style.cssText="visibility: visible";
            zero[4].style.cssText="visibility: visible";
            zero[5].style.cssText="visibility: visible";
        } else {
            zero[3].style.cssText="visibility: hidden";
            zero[4].style.cssText="visibility: hidden";
            zero[5].style.cssText="visibility: hidden";
        }
        clicks0 = clicks0 +1 ;
    };
    const btn0C = document.createAttribute("CLASS");
    btn0C.value="btn-vert";
    btn0.attributes.setNamedItem(btn0C);
    btn0.appendChild(i0);
    note_box.appendChild(btn0);

// delete button 
    const btn3 = document.createElement("button");
    const i3 = document.createElement("I");
    const i3C = document.createAttribute("class");
    i3C.value="material-icons icond";
    i3.attributes.setNamedItem(i3C);
    const i3_text = document.createTextNode("delete_sweep");
    i3.appendChild(i3_text);
    // add onclick for delete
    btn3.onclick = function() { document.getElementById(document.activeElement.parentElement.id).remove(); };
    const btn3C = document.createAttribute("CLASS");
    btn3C.value="btn-box";
    btn3.attributes.setNamedItem(btn3C);
    btn3.appendChild(i3);
    note_box.appendChild(btn3);

// duplicate btn 
    const btn2 = document.createElement("button");
    const i2 = document.createElement("I");
    const i2C = document.createAttribute("class");
    i2C.value="material-icons icond";
    i2.attributes.setNamedItem(i2C);
    const i2_text = document.createTextNode("file_copy");
    i2.appendChild(i2_text);
    // add onclick for duplicatings
    btn2.onclick = function() { 
        var original = document.getElementById(data_object.id);
        var cln = original.cloneNode(true);
        cln.removeAttribute("id");
        var newid = document.createAttribute("id");
        newid.value=num;
        num=num+1;
        cln.attributes.setNamedItem(newid);
        cln.childNodes[2].onclick = function() {
                   const zero = document.getElementById(document.activeElement.parentElement.id).childNodes;
                   if(clicks0%2 == 0) {
                       zero[3].style.cssText="visibility: visible";
                       zero[4].style.cssText="visibility: visible";
                       zero[5].style.cssText="visibility: visible";
                   } else {
                       zero[3].style.cssText="visibility: hidden";
                       zero[4].style.cssText="visibility: hidden";
                       zero[5].style.cssText="visibility: hidden";
                   }
                   clicks0 = clicks0 +1 ;
               };
        cln.childNodes[3].onclick= function() { document.getElementById(document.activeElement.parentElement.id).remove(); };
        cln.childNodes[4].onclick= function() { 
            var original = document.getElementById(document.activeElement.parentElement.id);
            var cln = original.cloneNode(true);
            cln.removeAttribute("id");
            var newid = document.createAttribute("id");
            newid.value=num;
            num=num+1;
            cln.attributes.setNamedItem(newid);
            cln.childNodes[2].onclick = function() {
                       const zero = document.getElementById(document.activeElement.parentElement.id).childNodes;
                       if(clicks0%2 == 0) {
                           zero[3].style.cssText="visibility: visible";
                           zero[4].style.cssText="visibility: visible";
                           zero[5].style.cssText="visibility: visible";
                       } else {
                           zero[3].style.cssText="visibility: hidden";
                           zero[4].style.cssText="visibility: hidden";
                           zero[5].style.cssText="visibility: hidden";
                       }
                       clicks0 = clicks0 +1 ;
                   };
            cln.childNodes[3].onclick= function() { document.getElementById(document.activeElement.parentElement.id).remove(); };
            cln.childNodes[4].onclick= function() { alert("You can not duplicate a note from duplicated one more than ones.")}
            cln.childNodes[5].onclick= function() {
               if( tap%2 == 0 ) {
                   alert("Tap on edit button when you are done")
                   const edittor = document.getElementById(document.activeElement.parentElement.id);
                   edittor.childNodes[0].contentEditable = "true";
                   edittor.childNodes[1].contentEditable = "true";
                   tap = tap+1;
               } else {
                   const edittor = document.getElementById(document.activeElement.parentElement.id);
                   edittor.childNodes[0].contentEditable = "false";
                   edittor.childNodes[1].contentEditable = "false";
                   tap = tap+1;
               }
            }
            document.getElementById("wrapper").insertBefore(cln,document.getElementById("wrapper").childNodes[0]);
         };
         cln.childNodes[5].onclick= function() {
            if( tap%2 == 0 ) {
                alert("Tap on edit button when you are done")
                const edittor = document.getElementById(document.activeElement.parentElement.id);
                edittor.childNodes[0].contentEditable = "true";
                edittor.childNodes[1].contentEditable = "true";
                console.log(edittor.childNodes[0]);     
                tap = tap+1;
            } else {
                const edittor = document.getElementById(document.activeElement.parentElement.id);
                edittor.childNodes[0].contentEditable = "false";
                edittor.childNodes[1].contentEditable = "false";
                console.log(edittor.childNodes[0]);     
                tap = tap+1;
            }
         }
        document.getElementById("wrapper").insertBefore(cln,document.getElementById("wrapper").childNodes[0]);
     };
    const btn2C = document.createAttribute("CLASS");
    btn2C.value="btn-box";
    btn2.attributes.setNamedItem(btn2C);
    btn2.appendChild(i2);
    note_box.appendChild(btn2);

// edit button
    const btn1 = document.createElement("button");
    
    const i1 = document.createElement("I");
    const i1C = document.createAttribute("class");
    i1C.value="material-icons icond";
    i1.attributes.setNamedItem(i1C);
    const i1_text = document.createTextNode("edit");
    i1.appendChild(i1_text);
    // have to add onclick for edit
     btn1.onclick = function() {
        console.log(document.activeElement.parentElement);
        if( tap%2 == 0 ) {
            alert("Tap on edit button when you are done")
            const edittor = document.getElementById(document.activeElement.parentElement.id);
            edittor.childNodes[0].contentEditable = "true";
            edittor.childNodes[1].contentEditable = "true";
            console.log(edittor.childNodes[0]);     
            tap = tap+1;
        } else {
            const edittor = document.getElementById(document.activeElement.parentElement.id);
            edittor.childNodes[0].contentEditable = "false";
            edittor.childNodes[1].contentEditable = "false";
            console.log(edittor.childNodes[0]);     
            tap = tap+1;
        }
     };
    const btn1C = document.createAttribute("CLASS");
    btn1C.value="btn-box";
    btn1.attributes.setNamedItem(btn1C);
    btn1.appendChild(i1);
    note_box.appendChild(btn1);

    // finally appending whole note_box to the div created
    document.getElementById("wrapper").insertBefore(note_box,document.getElementById("wrapper").childNodes[0]);

}

const check = () => {
    console.log(document.getElementById("wrapper").childNodes);
} 
const addfocus = () => {
    document.getElementById("title").focus();
}
const clear_all = () => {
    const x = document.getElementById("wrapper");
    while(x.firstChild) {
        x.removeChild(x.lastChild);
    }
}
