import { observable, action, computed } from 'mobx'
import axios from 'axios'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Show } from './Show'
import { Events } from './Events'
import { User } from './User'

export class GeneralStore {
  @observable categories = []
  @observable creators
  @observable hashtags = []


    @observable currentUser = {}
    @observable singleEvent = {
        shows: [],
    }

    constructor(listOfEvents) {
        this.listOfEvents = listOfEvents
        this.init()
    }
    init = async () => {
        this.gelAllCategories()
    }

    @action async getUserById(userId) {
        let getUserById = await axios.get(`http://localhost:8080/api/users/${userId}`)
        return getUserById
    }
    @action async getCreatorById(creatorId) {
        let getCreatorById = await axios.get(`http://localhost:8080/api/creators/${creatorId}`)
        return getCreatorById
    }

    @action async getEventById(eventId) {
        let getEventById = await axios.get(
            `http://localhost:8080/api/events/${eventId}`
        )
        getEventById = getEventById.data
        this.singleEvent = getEventById
    }

    @action async gelAllCategories() {
        let gelAllCategories = await axios.get(
            `http://localhost:8080/api/creators/general/details`
        )
        console.log(gelAllCategories.data.categories)
        gelAllCategories.data.categories.forEach(c => {
            this.categories.push(c)
        })
    }
    ////////////////shows///////////////////////////
    @action async addShow(showData) {
        console.log(showData)
        let addNewShow = await axios.post(`http://localhost:8080/api/events/show`, showData)
        console.log(addNewShow)
        this.singleEvent.shows.push(addNewShow)
    }

    @action async deleteShow(showId, eventId) {
        let deleteShow = await axios.delete(`http://localhost:8080/api/events?showId=${showId}`)
        console.log(deleteShow)
        if (deleteShow) {
            const indexHolder = this.singleEvent.findIndex(event => event.id === eventId)
            console.log(indexHolder)
            let deleteShowFromEvent = this.listOfEvents[indexHolder].shows.findIndex(show => show.id === showId)
            console.log(deleteShowFromEvent)
            let deleteTheShow = this.listOfEvents[indexHolder].shows.splice(deleteShowFromEvent, 1)
            console.log(this.listOfEvents[indexHolder].shows)
            console.log(deleteTheShow)
        } else {
            console.log("error")
        }
    }
    /////////////////User Auth/////////////////////

    @action async checkUserInDataBase(user) {
        const userId = user.sub
        console.log(userId)
        const returnedUser = await axios.get(`http://localhost:8080/api/users/${userId}`)
        console.log(returnedUser)

        if (returnedUser.data) {
            
            this.currentUser = returnedUser.data
            console.log(this.currentUser)
        }
        else{
            this.addUser(user)
            console.log("Adding new User")
        }
    }

    @action async addUser(userData) {
        let insertUsesData = new User(
            userData.sub,
            userData.given_name || null,
            userData.family_name || null,
            userData.nickname,
            userData.picture,
            null,
            userData.email,
            null,
            userData.updated_at,
            null,
            null,
            'USER',
            null,
            null,
        )
        console.log(insertUsesData)

        let userDetails = await axios.post(`http://localhost:8080/api/users`, insertUsesData)
        console.log(userDetails)
        if (userDetails.data) {
            this.currentUser = userDetails.data
        }else{
            console.log("problem with the current user")
        }
    }






    @action async getAllCreators() {
        let getAllCreators = await axios.get(`http://localhost:8080/api/creators`)
        console.log(getAllCreators)
        getAllCreators.data.forEach(creator => {
            this.AllCreators.push(creator)
        })
        console.log(this.AllCreators)
    }






    @action async deleteEvent(eventId) {
        let deleteEvent = await axios.delete(`http://localhost:8080/api/events?eventId=${eventId}`)
        // console.log(deleteEvent)
        let deleteEventFromList = this.listOfEvents.listOfEvents.findindex(deleteId => deleteId.id === eventId)
        this.listOfEvents.listOfEvents.splice(deleteEventFromList, 1)
    }



    @action async updateEvent(eventId, eventData) {
        console.log(eventData)

        let updateEvent = await axios.put(`http://localhost:8080/api/events/${eventId}`, eventData)
        console.log(updateEvent)
        if (updateEvent.data) {
            let key = eventData.field
            // console.log(key)
            let value = eventData.value
            this.singleEvent[key] = value;
            console.log(this.singleEvent)
            let toUpdate = this.listOfEvents.listOfEvents.findIndex(eventUpdate => eventUpdate.id === eventId)
            // console.log(toUpdate)
            this.listOfEvents.listOfEvents[toUpdate][key] = value
            console.log(this.listOfEvents.listOfEvents)
        } else { 
            console.log("error")
        }

    }
  
}
