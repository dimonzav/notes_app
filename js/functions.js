function closeFunc() {
	var el = document.getElementById("pan");
	el.parentNode.removeChild(el);
}
document.getElementById("closePanel").onclick = closeFunc;

function setNotes() {
    var notes = [];
    var dates = [];
    if(notes.length === 0) {
        var elem = document.getElementById("pan");
        elem.style.display = "block";
    }
    else {
        createPanel();
    }

    if(notes.length === 0) {
        var text = document.getElementById("textarea").value;
	    var note = document.getElementById("textNote");
	    note.innerHTML = text;
        var date = document.getElementById("date");
        date.innerHTML = Date();
    }
    else {
        var elem = document.getElementById("panelGroup").lastChild;
        elem.
    }

    notes[notes.length] = note.innerHTML;
    dates[dates.length] = date.innerHTML;
    localStorage.notes = JSON.stringify(notes);
    localStorage.dates = JSON.stringify(dates);
}
document.getElementById("add").onclick = setNotes;

function createPanel() {
    var panel = document.getElementsByClassName("panel")[0];
    note.innerHTML = "";
    date.innerHTML - "";
    var clonePanel = panel.cloneNode(true);
    document.getElementById("panelGroup").appendChild(clonePanel);
}

function getNotes() {
    // var dates = JSON.parse(localStorage.dates);
    // var notes = JSON.parse(localStorage.notes);

    var el1 = document.getElementById("some");
    some.innerHTML = JSON.parse(localStorage.notes[0]);

    // var elem = document.getElementById("pan");
    // elem.style.display = "none";
}
document.getElementById("add2").onclick = getNotes;

function foo() {
    var elem = document.getElementById("pan");
    elem.style.display = "none";
}
document.getElementById("add2").onclick = foo;