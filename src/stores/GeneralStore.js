import { observable, action, computed, observe } from 'mobx'
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
        // const { user } = useAuth0()
        // let context = Auth0Context
        this.listOfEvents = listOfEvents
        this.init()
    }
    init = async () => {
        // this.getEventById(5)
        // this.currentUser()
        this.gelAllCategories()
        this.getAllCreators()
        // this.getCreatorById("auth0|5f4f7cb8397b7000674b08c2")
        // this.addUser()
        // this.updateEvent(3 , {field: "name" , value : "check232"})
    }

    @action async getUserById(userId) {
        let getUserById = await axios.get(`http://localhost:8080/api/users/${userId}`)
        return getUserById
    }
    @action async getCreatorById(creatorId) {
        let getCreatorById = await axios.get(`http://localhost:8080/api/creators/${creatorId}`)
        return getCreatorById
    }
    @action async createNewEvent(creatorId) {

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
        gelAllCategories.data.categories.forEach(c => {
            this.categories.push(c)
        })
    }
    @action getCurrentUser(currentUserData) {
        console.log(currentUserData)
        this.currentUser = currentUserData
        console.log(this.currentUser)
    }
    // id, firstName, lastName, username, imageURL, videoURL, email, birthday, memberSince, gender, about ,userRole ,  isAuthorized,  phone
    // id, firstName, lastName, username, imgURL, videoURL, email, birthday, memberSince, gender, about ,userRole ,  isAuthorized,  phone



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
        let addUser = await axios.post(`http://localhost:8080/api/users`, insertUsesData)
        this.getCurrentUser(addUser)
    }

    @action async checkUserInDataBase(user) {
        let stupidUser = user.sub
        let checkUserInDataBase = await axios.get(`http://localhost:8080/api/users/${stupidUser}`)
        if (checkUserInDataBase.data) {
            this.getCurrentUser(checkUserInDataBase.data)
        } else {
            this.addUser(user)
        }
    }


    @action async getAllCreators() {
        let getAllCreators = await axios.get(`http://localhost:8080/api/creators?isEvents=1&isShows=1`)
        this.AllCreators = [...getAllCreators.data]
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
            this.listOfEvents.listOfEvents[toUpdate][key] = value
        } else {
            console.log("error")
        }

    }

}
