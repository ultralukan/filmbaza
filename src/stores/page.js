import {makeAutoObservable} from 'mobx'

class Page{
    page = 1
    constructor(){
        makeAutoObservable(this)
    }
    get(){
        return this.page
    }
    set(value){
        this.page=this.page+value
    }
}

export default new Page()
