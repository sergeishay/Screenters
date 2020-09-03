import { observable, action, computed } from 'mobx'
import {Show} from './Show'

const show = new Show()
export class Event {
    @observable id
    @observable name 
    @observable description
    @observable imgURL 
    @observable videoURL 
    @observable coverImgURL
    @observable price  
    @observable creatorID
    @observable categoryID
    @observable shows = []
    @observable comments = []
    @observable rating
    constructor( id , name , description ,imgURL ,videoURL , coverImgURL ,price , creatorID ,categoryID) {
        this.id = id
        this.name = name
        this.description = description
        this.imgURL = imgURL
        this.videoURL = videoURL
        this.coverImgURL = coverImgURL
        this.price = price 
        this.creatorID = creatorID
        this.categoryID = categoryID

    }
    @action getEvent(){
        
    }
    @action setEvent(){

    }
    @action addShow(id){

    }
    @action removeShow(id){

    }
}


