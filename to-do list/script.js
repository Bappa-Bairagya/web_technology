const inputtext=document.getElementById("input-text")
const listcontainer=document.getElementById("list-container")

function addtask(){
    if (inputtext.value==="") {
        alert("you may wright something")
    } else {
        const li=document.createElement("li")
        li.innerHTML=inputtext.value
        listcontainer.appendChild(li)
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputtext.value=""
    savedata()
}
listcontainer.addEventListener("click",function(e){
if (e.target.tagName=="LI") {
    e.target.classList.toggle("checked")
    savedata()
}
else if(e.target.tagName=="SPAN"){
    e.target.parentElement.remove();
    savedata()
}

})
function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML); // Corrected syntax
}

function getdata() {
    listcontainer.innerHTML = localStorage.getItem("data") || ""; // Ensures no null value
}
getdata();
