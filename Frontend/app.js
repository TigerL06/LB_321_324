function add(){
        let header = document.querySelector("#header");
        header.innerHTML = "Add";
        let container = document.createElement('div');
        container.setAttribute("id", "container")
        let title = document.createElement("h2")
        title.innerHTML = "Geben Sie hier den Titel für diese Notiz ein.";
        let title_input = document.createElement("input");
        let text_input = document.createElement("h2")
        text_input.innerHTML = "Geben Sie hier den Text für diese Notiz ein.";
        let input = document.createElement("input")
        let button = document.createElement("button")
        button.innerHTML= "Add"
        button.setAttribute("id", "button");
        title.setAttribute( "class",'titel');
        text_input.setAttribute( "class",'titel');
        title_input.setAttribute( "type",'text');
        input.setAttribute( "type",'text');
        container.setAttribute( "id",'login');
        container.appendChild(title);
        container.appendChild(title_input);
        container.appendChild(text_input)
        container.appendChild(input);
        container.appendChild(button)
        parent.appendChild(container);
        button.addEventListener("click", function (){

        
        });
}

let parent = document.querySelector("#main");
let button = document.querySelector("#add");
let container = document.querySelector("#container")
button.addEventListener("click", function (){
    container.remove();
    add();
});