export function generateId(){
    return Math.random().toString(36).substring(2).toUpperCase();
}
export class DOM {
    dom=null
    constructor(val){
        this.dom = document.createElement(val)
        return this
    }
    addClass(val){
        this.dom.classList.add(val)
        return this
    }
    removeClass(val){
        this.dom.classList.remove(val)
        return this
    }
    toggleClass(val){
        this.dom.classList.toggle(val)
        return this
    }
    text(val){
        this.dom.textContent = val
        return this
    }
    getValue(){
        return this.dom.value
    }
    addEvent(type, fn){
        this.dom.addEventListener(type, fn)
        return this
    }
    append(val){
        this.dom.append(val.dom)
        return this
    }
    remove(){
        this.dom.remove()
        return this
    }
    static fromDom(val){
        const d = new DOM()
        d.dom = document.querySelector(val)
        return d
    }
}