
const button = document.querySelector("#add-button");

const addNewNote = (text = "") => {
    const container = document.createElement('div');
    container.classList.add("container");
    const htmlData = `
    <div class="icons">
            <button id="edit-button"> <i class="fas fa-edit"></i></button>
            <button id="delete-button"><i class="fas fa-trash-alt"></i></button>    
    </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class= "${text ? "" : "hidden"}"></textarea>
    
    `
  
    container.insertAdjacentHTML("afterbegin", htmlData);
    
    //getting the references
    const editButton = container.querySelector("#edit-button");
    const deleteButton = container.querySelector("#delete-button");
    const main = container.querySelector(".main");
    const textarea = container.querySelector("textarea");

    //delete the note
    deleteButton.addEventListener("click", () => {
        container.remove();
    });

    //edit the note
    textarea.value=text;
    main.innerHTML=text;

    editButton.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    });

    textarea.addEventListener('change',(event)=>{
      const value = event.target.value;
    })
   
    document.body.appendChild(container);
}

//add new note
button.addEventListener("click", addNewNote);

