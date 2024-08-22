function addTodo() {
   var todoinput= document.getElementById("todo-input");
    var todotext =todoinput.value.trim();

    if(todotext !== ""){
        var li=document.createElement("li");
        li.textContent=todotext;
        

        var deleteButton=document.createElement("button");
        deleteButton.textContent="Remove";
        deleteButton.classList.add("delete", "btn");
        deleteButton.onclick=function(){
            li.remove();
        };
       
        li.appendChild(deleteButton);

        document.getElementById("To-DoList").appendChild(li);
        todoinput.value="";
    }



}