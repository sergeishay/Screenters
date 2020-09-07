import { observable, action, computed } from 'mobx'
import { Show } from './Show'
import { Comment } from './Comment'
import { Category } from './Category'
import axios from 'axios'

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
    constructor(id, name, description, imageURL, videoURL, coverImgURL, price, creatorID, categoryID, rating, shows) {
        this.id = id
        this.name = name
        this.description = description
        this.imageURL = imageURL
        this.videoURL = videoURL
        this.coverImgURL = coverImgURL
        this.price = price
        this.creatorID = creatorID
        this.categoryID = categoryID
        this.rating = rating
        this.shows = shows
        this.init()
    }

    init = async () => {
        // this.getAllEvents()
        // this.getComments()
        // this.addShow({id:null,startTime:'2011-09-10 10:10:10',endTime:'2011-09-10 10:10:10',showEventID:3})
    }
    // @action async addShow(showData) {
    //     let addNewShow = await axios.post(`http://localhost:8080/api/events/show`, showData)
    //     console.log(addNewShow)
    // }
    // @action async deleteShow(eventId, showId) {
    //     let deleteShow = await axios.post(`http://localhost:8080/api/events/${eventId}/${showId}`)

    // }
}
