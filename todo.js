let todoList=[
    {
    item:'buy milk',
    dueDate:'4/10/2030'
},
{
    item:'strong',
    dueDate:'5/10/2023'

}
];
displayItems();

function addtodo(){
    let inputelement=document.querySelector
    ('#todo-input');
    let dateelement=document.querySelector
    ('#todo-date');
    let todoItem=inputelement.value;
    let dateItem=dateelement.value;
    todoList.push({item:todoItem,dueDate:dateItem});
    inputelement.value='';
    dateelement.value='';

    displayItems();
}

function displayItems(){
    let containerElements=document.querySelector
    ('.todo-container');
         let newHtml='';

    for(let i=0;i<todoList.length;i++){
        let item=todoList[i].item;
        let dueDate=todoList[i].dueDate;
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button  class='btn-delete' onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>
        `;
    }
        containerElements.innerHTML=newHtml;
}