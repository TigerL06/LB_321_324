let parent = document.querySelector("#main");
let button = document.querySelector("#add");
let container = document.querySelector("#container")
button.addEventListener("click", function (){
    container.remove();
    add();
});

let addButton = document.querySelector("#add");
let popup = document.querySelector("#popup");
let closeButton = document.querySelector(".close-button");
let saveButton = document.querySelector("#save-note");

addButton.addEventListener("click", function () {
    popup.style.display = "flex";
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

saveButton.addEventListener("click", function () {
    let title = document.querySelector("#note-title").value;
    let content = document.querySelector("#note-content").value;
    
    console.log("Titel:", title);
    console.log("Inhalt:", content);
    
    popup.style.display = "none";
});

function add() {
    let header = document.querySelector("#header");
    header.innerHTML = "Add";

    let container = document.createElement('div');
    container.setAttribute("id", "container");

    let title = document.createElement("h2");
    title.innerHTML = "Geben Sie hier den Titel für diese Notiz ein.";
    let title_input = document.createElement("input");
    title_input.setAttribute("type", "text");

    let text_input = document.createElement("h2");
    text_input.innerHTML = "Geben Sie hier den Text für diese Notiz ein.";
    let input = document.createElement("input");
    input.setAttribute("type", "text");

    let button = document.createElement("button");
    button.innerHTML = "Add";
    button.setAttribute("id", "button");

    container.appendChild(title);
    container.appendChild(title_input);
    container.appendChild(text_input);
    container.appendChild(input);
    container.appendChild(button);

    let parent = document.querySelector("#main");
    parent.appendChild(container);

    button.addEventListener("click", function () {
        container.remove();
        home();
    });
}


function home(){
    let header = document.querySelector("#header");
    header.innerHTML = "Notitzwebseite";
    let container = document.createElement('div');
    container.setAttribute("id", "container");
    let top = document.createElement("div");
    top.setAttribute("id", "top");
    let input = document.createElement("input");
    input.setAttribute("id", "search")
    let button = document.createElement("button")
    button.innerHTML= "Add"
    button.setAttribute("id", "add");
    let notes = document.createElement("div");
    notes.setAttribute("class", "note");

    top.appendChild(input);
    top.appendChild(button);
    container.appendChild(top);
    container.appendChild(notes);
    parent.appendChild(container);
    button.addEventListener("click", function (){
        container.remove
        add();
    
    });
}