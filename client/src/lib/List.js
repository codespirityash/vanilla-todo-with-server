import { DOM } from "./index.js";
import { Item } from "./Item.js";
export class List {
    input=null;
    submit=null;
    list=null;
    constructor(inputName, submitName, listName) {
        this.input = DOM.fromDom(inputName)
        this.list = DOM.fromDom(listName)
        this.submit = DOM.fromDom(submitName)
        this.submit.addEvent("click", ()=>{
            const item = new Item(this.input.getValue())
            item.uploadToDB()
            this.input.dom.value = ""
            this.list.append(item.dom)
        })
        this.getInitialTodos()
    }
    async getInitialTodos(){
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/todos`, {
                method: "GET"
            })
            const data = await response.json()
            data.todos.forEach((todo)=>{
                if(!todo) return
                const item = new Item(todo.title||"", todo.completed)
                item.date = todo.date
                item.id = todo.id
                this.list.append(item.dom)
            })
        } catch(error) {
            console.log(error)
            return error
        }
    }
}