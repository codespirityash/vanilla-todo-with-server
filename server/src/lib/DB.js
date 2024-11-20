// use fs to manage a json database

import fs from 'fs'

export default class DB {
    constructor(name) {
        this.name = name
        const exists = fs.existsSync(name)
        if (!exists) {
            fs.writeFileSync(name, JSON.stringify({
                todos: [],
            }))
        }
    }
    read(){
        const data = fs.readFileSync(this.name)
        return JSON.parse(data)
    }
    add(item){
        const data = this.read()
        data.todos.push(item)
        fs.writeFileSync(this.name, JSON.stringify(data))
        return item
    }
    update(id, item){   
        const data = this.read()
        const index = data.todos.findIndex((todo) => todo.id === id)
        data.todos[index] = item
        fs.writeFileSync(this.name, JSON.stringify(data))
        return item
    }
    delete(id){
        const data = this.read()
        const index = data.todos.findIndex((todo) => todo.id === id)
        data.todos.splice(index, 1)
        fs.writeFileSync(this.name, JSON.stringify(data))
    }
} 