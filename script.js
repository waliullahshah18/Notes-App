const notesContainer = document.querySelector(".notes-container")
const creatbtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")


function shownots() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
shownots();


function updateLocalStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

creatbtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList = "input-box"
    inputBox.setAttribute("contenteditable", "true")
    img.src = "images/delete-589.png"
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateLocalStorage()
    }else if(e.target.tagName === "P"){
        notes.forEach(nt=>{
            nt.onkeyup = function () {
                updateLocalStorage()
            }
        })
    }
})


document.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        document.execCommand("insetLineBreak");
        event.preventDefault();
    }
})
