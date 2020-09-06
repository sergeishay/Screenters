import { observable, action, computed } from 'mobx'
import { Show } from './Show'
import { Comment } from './Comment'
import { Category } from './Category'
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
    constructor(id, name, description, imageURL, videoURL, coverImgURL, price, creatorID, categoryID ,  shows , rating) {
        this.id = id
        this.name = name
        this.description = description
        this.imageURL = imageURL
        this.videoURL = videoURL
        this.coverImgURL = coverImgURL
        this.price = price
        this.creatorID = creatorID
        this.categoryID = categoryID

        this.shows = shows
        this.rating = rating
        this.init()
    }
    init = async () => {
        // this.getAllEvents()
        // this.getComments()
    }
    @action async addShow(showData) {
        let addNewShow = await axios.post(`http://localhost:8080/api/events/` ,  showData)
    }
    @action async removeShow(eventId , showId) {
        let deleteShow = await axios.post(`http://localhost:8080/api/events/${eventId}/${showId}`)

    }

    @action getEvent() {

    }
    @action setEvent() {

    }



    // @action async getComments() {
    //     let getComments = await axios.get(`http://localhost:8080/api/reviews/`)
    //     console.log(getComments)
    // }
}


