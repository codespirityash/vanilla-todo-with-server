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
            this.list.append(item.dom)
        })
    }
}