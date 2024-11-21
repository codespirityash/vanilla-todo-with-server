import { DOM } from "./index.js";
export class Item {
    dom = null;
    completed = false
    id = ""
    date = ""
    title = ""
    constructor(title, completed=false) {
        this.title = title
        this.completed = completed
        this.createDOM()
    }
    createDOM() {
        const item = new DOM("div").addClass("item")
        if(this.completed===true) item.addClass("complete")
        const header = new DOM("div").addClass("header").text(this.title)
        const footer = new DOM("div").addClass("footer")
        const removeButton = new DOM("button").text("Remove").addEvent("click", () => this.remove())
        const completeButton = new DOM("button").text("Complete").addEvent("click", () => this.complete())
        footer.append(removeButton).append(completeButton)
        item.append(header).append(footer)
        this.dom = item
        return this.dom
    }
    remove() {
        this.dom.remove()
        this.dom = null;
        this.removeFromDB()
    }
    complete() {
        this.dom.toggleClass("complete")
        this.completed = !this.completed
        this.updateDB()
    }
    async uploadToDB() {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/todos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.title,
                    completed: this.completed,
                })
            })
            const {id} = await response.json()
            this.id = id
            return data
        } catch (error) {
            console.log(error)
            return error
        }
    }
    async updateDB() {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/todos`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    todo: {
                        title: this.title,
                        completed: this.completed,
                        date: this.date
                    },
                    id: this.id
                })
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
            return error
        }
    }
    async removeFromDB() {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/todos/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: this.id
                })
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
            return error
        }
    }
}