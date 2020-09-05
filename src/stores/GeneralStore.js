import { observable, action, computed } from 'mobx'
import axios from 'axios'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Show } from './Show'
import { User } from './User'

export class GeneralStore {
    @observable categories = []
    @observable creators
    @observable hashtags = []
    @observable rating
    @observable currentUser = null
    @observable singleEvent = {
        shows: [],
    }

    constructor() {
        // const { user } = useAuth0()
        // let context = Auth0Context
        this.init()
    }
    init = async () => {
        // this.getEventById(5)
        // this.currentUser()
        // this.gelAllCategories()
        // this.addUser()
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
    @action async getCurrentUser(currentUserData) {
        this.currentUser = currentUserData
        console.log(this.currentUser)
    }

    // id, firstName, lastName, username, imgURL, videoURL, email, birthday, memberSince, gender, about ,userRole ,  isAuthorized,  phone
    @action async addUser(userData) {


        console.log(userData)
        let insertUsesData = new User(
            userData,
            userData.given_name,
            userData.family_name,
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
        console.log(addUser)
        this.getCurrentUser(addUser)
    }

    @action async checkUserInDataBase(user) {
        let stupidUser = user.sub
        let checkUserInDataBase = await axios.get( `http://localhost:8080/api/users/${stupidUser}`)
        console.log(checkUserInDataBase)
        if (checkUserInDataBase.data) {
            this.getCurrentUser(checkUserInDataBase.data)
        } else {
            this.addUser(user)
        }
    }
}
