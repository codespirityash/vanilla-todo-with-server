import { DOM, generateId } from "./index.js";
export class Item {
    dom=null;
    completed = false
    id=""
    date=""
    constructor(title){
        this.createDOM(title)
        this.id = generateId()
        this.date = Date.now()
    }
    createDOM(title){
        const item = new DOM("div").addClass("item")
        const header = new DOM("div").addClass("header").text(title)
        const footer = new DOM("div").addClass("footer")
        const removeButton = new DOM("button").text("Remove").addEvent("click", () => this.remove())
        const completeButton = new DOM("button").text("Complete").addEvent("click", () => this.complete()) 
        footer.append(removeButton).append(completeButton)
        item.append(header).append(footer)
        this.dom = item
        return this.dom
    }
    remove(){
        this.dom.remove()
        this.dom = null;
    }
    complete(){
        this.dom.toggleClass("complete")
        this.completed = !this.completed
    }
}