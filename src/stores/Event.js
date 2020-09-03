import { observable, action, computed } from 'mobx'
import {Show} from './Show'
import {Comment} from './Comment'
import axios from 'axios'

const show = new Show()
export class Event {
    @observable id
    @observable name 
    @observable description
    @observable imageURL 
    @observable videoURL 
    @observable coverImgURL
    @observable price  
    @observable creatorID
    @observable categoryID
    @observable shows = []
    @observable comments = []
    @observable rating
    constructor( id , name , description ,imageURL ,videoURL , coverImgURL ,price , creatorID ,categoryID) {
        this.id = id
        this.name = name
        this.description = description
        this.imageURL = imageURL
        this.videoURL = videoURL
        this.coverImgURL = coverImgURL
        this.price = price 
        this.creatorID = creatorID
        this.categoryID = categoryID

        this.init()
    }
    init = async () => {
        // this.getAllEvents()
    }
    @action async addShow(eventId , showId ){


        let addNewShow = await axios.post(`http://localhost:8080/api/event/${eventId}/${showId}`)
    }
    
    @action getEvent(){
        
    }
    @action setEvent(){

    }
    @action addShow(id){

    }
    @action removeShow(id){

    }

    @action getComments(){

    }
}


