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
    @observable AllCreators = []
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
        this.getAllCreators()
        // this.getCreatorById("auth0|5f4f7cb8397b7000674b08c2")
        // this.addUser()
        // this.updateEvent(3 , {field: "name" , value : "check232"})

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

    @action async getUserById(userId) {
        let getUserById = await axios.get(`http://localhost:8080/api/users/${userId}`)
        return getUserById
    }




    ////////////////SHOWS///////////////////////////
    @action async addShow(showData) {
        console.log(showData)
        let addNewShow = await axios.post(`http://localhost:8080/api/events/show`, showData)
        console.log(addNewShow)
        this.singleEvent.shows.push(addNewShow.data)
    }

    @action async deleteShow(showId, eventId) {
        let deleteShow = await axios.delete(`http://localhost:8080/api/events?showId=${showId}`)
        console.log(deleteShow)
        if (deleteShow){
            let deleteShowIndex = this.singleEvent.shows.findIndex(show => parseInt(show.id) === parseInt(showId))
            console.log(deleteShowIndex)
            let deleteTheShow = this.singleEvent.shows.splice(deleteShowIndex, 1)

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
        else {
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
        } else {
            console.log("problem with the current user")
        }
    }



    //////////CREATORS ///////////////////

    @action async getAllCreators() {
        let getAllCreators = await axios.get(`http://localhost:8080/api/creators?isEvents=1&isShows=1`)
        this.AllCreators = [...getAllCreators.data]
    }

    @action async getCreatorById(creatorId) {
        let getCreatorById = await axios.get(`http://localhost:8080/api/creators/${creatorId}`)
        return getCreatorById
    }


    /////////////////////EVENTS///////////////////
    @action async getEventById(eventId) {
        let getEventById = await axios.get(
            `http://localhost:8080/api/events/${eventId}`
        )
        getEventById = getEventById.data
        this.singleEvent = getEventById
    }


    @action async deleteEvent(eventId) {
        let deleteEvent = await axios.delete(`http://localhost:8080/api/events?eventId=${eventId}`)

        let deleteEventFromList = this.listOfEvents.listOfEvents.findindex(deleteId => deleteId.id === eventId)
        this.listOfEvents.listOfEvents.splice(deleteEventFromList, 1)
    }



    @action async updateEvent(eventId, eventData) {

        let updateEvent = await axios.put(`http://localhost:8080/api/events/${eventId}`, eventData)
        if (updateEvent.data) {
            let key = eventData.field

            let value = eventData.value
            this.singleEvent[key] = value;
            let toUpdate = this.listOfEvents.listOfEvents.findIndex(eventUpdate => eventUpdate.id === eventId)

            // console.log(toUpdate)
            this.listOfEvents.listOfEvents[toUpdate][key] = value
            console.log(this.listOfEvents.listOfEvents)
        } else {
            console.log("error")
        }

    }

}
