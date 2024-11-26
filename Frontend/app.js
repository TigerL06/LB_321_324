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
    fetchAndDisplayNotes();
    button.addEventListener("click", function (){
        container.remove
        add();
    
    });
}

async function fetchAndDisplayNotes() {
    try {
      const response = await fetch('http://localhost:3000/notes', {
        mode: 'cors'});

      if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Daten');
      }
  
      const notes = await response.json();
      
  
      // Notizen dynamisch hinzufügen
      notes.forEach(note => {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";
  
        // Titel und Haupttext einfügen
        let title = document.createElement("h2");
        title.textContent = note.title;
  
        let mainText = document.createElement("p");
        mainText.textContent = note.mainText;
  
        let container = document.querySelector("#note")
        // Elemente hinzufügen
        noteDiv.appendChild(title);
        noteDiv.appendChild(mainText);
        container.appendChild(noteDiv);
      });
    } catch (error) {
      console.error("Fehler:", error);
    }
  }