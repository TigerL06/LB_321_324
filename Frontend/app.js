let parent = document.querySelector("#main");
let button = document.querySelector("#add");
let container = document.querySelector("#container")
button.addEventListener("click", function (){
    container.remove();
    add();
});

function add() {
    if(document.querySelector("#container") === null){
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

    }else{
        let container = document.querySelector("#container")
        container.remove();
        add();
    }
   
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
    notes.setAttribute("id", "note");
    top.appendChild(input);
    top.appendChild(button);
    container.appendChild(top);
    container.appendChild(notes);
    parent.appendChild(container);
    note();
    button.addEventListener("click", function (){
        container.remove
        add();
    
    });
}

function note(){
    let container = document.querySelector("#note")
    let note = document.createElement("div");
    note.setAttribute("class", "note");
    container.appendChild(note);
}