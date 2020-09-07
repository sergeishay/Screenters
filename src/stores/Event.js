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
    }

}
