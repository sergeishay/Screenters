import { observable, action, computed } from 'mobx'

export class Category{
    @observable category 
    constructor(category){
        this.category = category
    }
}