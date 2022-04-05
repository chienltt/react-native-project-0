const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let count =0
let unCheckedCount =0

const updateCounter = ()=>{
  itemCountSpan.innerText=count
  uncheckedCountSpan.innerText=unCheckedCount
}

const onClickButton = (idButton)=>{
  // let id= document.getElementById(idButton)
  let id = idButton.replace('delete-','')
  const element = document.getElementById(id)
  const checkElement = document.getElementById(`check-${id}`)
  if(checkElement.checked === false)
    unCheckedCount-=1
  count -= 1
  updateCounter()
  list.removeChild(element)

}

const checkTodo = (id)=>{
  const checkbox = document.getElementById(id)
  if (checkbox.checked === true ) unCheckedCount -=1
  else unCheckedCount+=1
  updateCounter()
}

function newTodo() {
  const task = prompt('New Todo name:',"New TODO")
  if(task.length!== 0) {
    count += 1
    unCheckedCount +=1
    updateCounter()
    const TODO_item = document.createElement("li")
    TODO_item.className=classNames.TODO_ITEM
    TODO_item.id=count
    list.append(TODO_item)
    const TODO_checkbox = document.createElement('input')
    TODO_checkbox.className=classNames.TODO_CHECKBOX
    TODO_checkbox.type= 'checkbox'
    TODO_checkbox.id=`check-${count}`
    TODO_checkbox.setAttribute('onClick','checkTodo(this.id)')
    TODO_item.append(TODO_checkbox)
    const TODO_text = document.createTextNode(task)
    TODO_item .append(TODO_text)
    const TODO_delete = document.createElement('button')
    TODO_delete.className=classNames.TODO_DELETE
    TODO_delete.id=`delete-${count}`
    TODO_delete.innerText='Delete'
    TODO_delete.setAttribute('onClick', 'onClickButton(this.id)')
    TODO_item.append(TODO_delete)
  }

}
