
let txt=document.querySelector("input[type='text'")
function* generateNums(){
    let i=0
    while(true){
        yield i++;
    }
}
let counter = 0
document.forms[0].onsubmit=function(){
    if(txt.value === ''){
        alert("Please Enter Task First")
    }else{
        counter++
        localStorage.setItem(Math.random(),txt.value)
    }
}

for(let i of Object.keys(localStorage))
{
    let task=document.createElement('div')
    task.className="task"
    task.id=i
    task.innerHTML=`<input type=checkbox />
                   <span> ${localStorage.getItem(i)}</span>
                    <div class="del-btn">Delete</div>`
    document.body.append(task)
}

let delBtns=document.querySelectorAll(".del-btn")
delBtns.forEach(e=>e.onclick=function(){
    let msg=confirm("Are you sure to delete this")
    if(msg){
        localStorage.removeItem(this.parentElement.id)
        this.parentElement.remove()
    }
})