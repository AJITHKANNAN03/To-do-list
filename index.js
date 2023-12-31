const inputBox=document.getElementById("taskAdd");
const taskBox=document.getElementById("task-box");

function addTask(){
    if(inputBox.value===""){
        alert("WRITE SOMETHING")
    }
    else{
        let li=document.createElement("li")
        taskBox.appendChild(li);
        li.innerHTML=inputBox.value;
        let span=document.createElement("span");
        li.appendChild(span);
        span.innerHTML="\u00d7";
    }
    inputBox.value="";
    save();
}
taskBox.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    save();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    save();
}
},false);
// to delete all taska
function del(){
    taskBox.innerHTML="";
    save();
}
// to save and get data from localStorage
function save(){
    localStorage.setItem("data", taskBox.innerHTML)
}
function show(){
    taskBox.innerHTML=localStorage.getItem("data");
}
show();