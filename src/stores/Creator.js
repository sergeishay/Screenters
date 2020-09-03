import { observable, action, computed } from 'mobx'
import { User } from './User'
import {Event} from './Event'
import axios from 'axios'

export class Creator extends User {
    @observable creatorId
    @observable videoUrl
    @observable email
    @observable birthDay
    @observable gender
    @observable phone
    @observable about
    @observable rating
    @observable newEvents = []
    @observable oldEvents = []
    @observable comments = []
    @observable statistics
    constructor(userID, firstName, lastName, imgUrl, memberSince) {
        super(userID, firstName, lastName, imgUrl, memberSince)
        this.init()

    }
    init = async () => {
        // this.getAllEvents()
    }

    ///SHOWS ACTION
    @action async addShow(eventId, showId) {
        let addNewShow = await axios.post(`http://localhost:8080/api/events/${eventId}/${showId}`)
    }
    @action async deleteShow(eventId , showId) {
        let deleteShow = await axios.delete(`http://localhost:8080/api/events/${eventId}/${showId}`)

    }
    @action async updateShow(eventId , showId) {
        let updateShow = await axios.put(`http://localhost:8080/api/events/${eventId}/${showId}`)

    }

    ///EVENTS ACTION 
    @action async addNewEvent(creatorId) {
        let addEvent = await axios.post(`http://localhost:8080/api/events/${creatorId}`)
    }

    @action async deleteEvent(eventId) {
        let deleteEvent = await axios.delete(`http://localhost:8080/api/events/${eventId}`)

    }
    @action async updateEvent(eventId) {
        let updateEvent = await axios.put(`http://localhost:8080/api/events/${eventId}`)
    }

    ///CREATOR ACTIONS 
    @action async getCreators(){
        let getCreators = await axios.get(`http://localhost:8080/api/creators`)
    }
    @action async addCreator(creatorId) {
        let addCreator = await axios.post(`http://localhost:8080/api/creators/${creatorId}`)

    }
    @action async deleteCreator(creatorId) {
        let deleteCreator = await axios.delete(`http://localhost:8080/api/creators/${creatorId}`)

    }
    @action async updateCreator(creatorId) {
        let updateCreator = await axios.put(`http://localhost:8080/api/creators/${creatorId}`)

    }

}