const note=document.querySelector(".notes-container");
const cbtn =document.querySelector(".btn");
let notes =document.querySelector(".input-box");

function showNotes(){
    note.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",note.innerHTML);
}

cbtn.addEventListener("click",()=>{
    let ib=document.createElement("p");
    let img=document.createElement("img");
    ib.className="input-box";
    ib.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    note.appendChild(ib).appendChild(img);
})
note.addEventListener("click",function(e)
{
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})