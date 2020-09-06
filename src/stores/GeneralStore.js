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
    // const { user } = useAuth0()
    // let context = Auth0Context
    this.listOfEvents = listOfEvents
    this.init()
  }
  init = async () => {
    // this.getEventById(5)
    // this.currentUser()
    this.gelAllCategories()
    // this.addUser()
    // this.updateEvent(3 , {field: "name" , value : "check232"})
  }

  @action async getEventById(eventId) {
    let getEventById = await axios.get(
      `http://localhost:8080/api/events/${eventId}`
    )
    console.log(getEventById)
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
    @action  getCurrentUser(currentUserData) {
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
        console.log(insertUsesData)
        let addUser = await axios.post(`http://localhost:8080/api/users`, insertUsesData)
        console.log(addUser)
        this.getCurrentUser(addUser)
    }

    @action async checkUserInDataBase(user) {
        let stupidUser = user.sub
        console.log(stupidUser)
        let checkUserInDataBase = await axios.get(`http://localhost:8080/api/users/${stupidUser}`)
        console.log(checkUserInDataBase)
        if (checkUserInDataBase.data) {
            this.getCurrentUser(checkUserInDataBase.data)
        } else {
            console.log("here some ")
            this.addUser(user)
        }
    }
  


    @action async deleteEvent(eventId) {
        let deleteEvent = await axios.delete(`http://localhost:8080/api/events/${eventId}`)
        console.log(deleteEvent)
        this.newEvents.find(deleteId => deleteId.eventID)
    }



    @action async updateEvent(eventId, eventData) {
        console.log(eventData)

        let updateEvent = await axios.put(`http://localhost:8080/api/events/${eventId}`, eventData)
        console.log(updateEvent)
        if (updateEvent.data) {
            let key = eventData.field
            console.log(key)
            let value = eventData.value
            this.singleEvent[key] = value;
            console.log(this.singleEvent)
            let toUpdate = this.listOfEvents.listOfEvents.findIndex(eventUpdate => eventUpdate.id === eventId)
            console.log(toUpdate)
            this.listOfEvents.listOfEvents[toUpdate][key] = value
            console.log(this.listOfEvents.listOfEvents)
        } else { 
            console.log("error")
        }

    }
  
}
