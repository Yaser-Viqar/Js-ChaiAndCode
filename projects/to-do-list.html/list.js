const btn=document.querySelector('#button')
const inp=document.querySelector('#text')
const listcontainer=document.querySelector('#listcontainer')
btn.addEventListener('click',()=>{
    if(inp.value===''){
        alert("enter task");
    }
    else{
        let element=document.createElement("li")
        element.innerHTML=inp.value;
        listcontainer.appendChild(element)
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        element.appendChild(span)
    }
    inp.value=''
})
span.addEventListener('click',()=>{
    
})