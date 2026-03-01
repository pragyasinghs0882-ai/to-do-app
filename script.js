const today =
document.getElementById("Day");
const coming=
document.getElementById("Coming");
const Completed =
document.getElementById("goat");
const Goals =
document.getElementById("Now");
const Todo =
document.getElementById("Future");
const Done =
document.getElementById("completed");
const icon =
document.getElementById("plus");
const Panel =
document.getElementById("left-panel");
const Plus =
document.getElementById("addTasks")
const Text =
document.getElementById("taskbar");
const Save = 
document.getElementById("Added");

const Container=
document.getElementById("output")
today.addEventListener('click', function() {
    if (Goals.style.display == 'none' ||   Done.style.display == 'block' ||  Todo.style.display == 'block') {
        Goals.style.display = 'block'; 
         Todo.style.display = 'none';
         Done.style.display = 'none';
    }
    else 
        (Goals.style.display = 'none')
});
coming.addEventListener('click', function() {
    if (Todo.style.display == 'none' ||  Goals.style.display == 'block'||   Done.style.display == 'block' ) {
        Todo.style.display = 'block'; 
        Done.style.display = 'none';
        Goals.style.display = 'none';
    }
    else(
        Todo.style.display = 'none'
    )
});
Completed.addEventListener('click', function() {
    if (Done.style.display = 'none' || Todo.style.display == 'block' ||  Goals.style.display == 'block') {

        Done.style.display = 'block';
         Goals.style.display = 'none';
         Todo.style.display = 'none';
}
        else(
            Done.style.display = 'none'
        )
    
});
Plus.addEventListener('click',function() {
if(Text.style.display = 'none' ) 
 Text.style.display = 'block';
Save.style.display='block';
}
)
Save.addEventListener('click' , function() {
    let Taken =
    document.createElement("div");
    Taken.className = "context" ;
    Taken.innerText = Text.value;
    Container.appendChild(Taken);
    Text.value = "";
})