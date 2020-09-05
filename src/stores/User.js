import { observable, action, computed } from 'mobx'
import axios from 'axios'
import { Show } from './Show'



export class User {
    @observable id
    @observable firstName
    @observable lastName
    @observable imgURL
    @observable memberSince
    @observable isAuthorized
    @observable birthday
    @observable username
    @observable email
    @observable phone
    @observable gender
    @observable userRole
    @observable videoURL
    @observable about
    @observable futureShows = []
    @observable pastShows = []


    constructor(id, firstName, lastName, username, imgURL, videoURL, email, birthday, memberSince, gender, about ,userRole ,  isAuthorized,  phone) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.imgURL = imgURL
        this.memberSince = memberSince
        this.isAuthorized = isAuthorized
        this.username = username
        this.email = email
        this.phone = phone
        this.gender = gender
        this.userRole = userRole
        this.birthday = birthday
        this.videoURL = videoURL
        this.about = about
        this.userData = {
            about: null,
            birthday: null,
            email: "traubenheimer5@wiley.com",
            firstName: "Theodoric",
            gender: "Male",
            id: "10",
            imageURL: "http://dummyimage.com/185x104.jpg/dddddd/000000",
            isAuthorized: null,
            lastName: "Raubenheimer",
            memberSince: "2020-09-01T17:01:28.000Z",
            phone: null,
            userRole: "USER",
            username: "traubenheimer5",
            videoURL: null,
        }
        this.init()
    }
    init = async () => {
        // this.getCreators()
        // this.addUser(this.eventData)
        // this.addNewEvent(this.userData)
    }



    @action async addUser(userData) {

        let addUser = await axios.post(`http://localhost:8080/api/users`)
    }


    @action makeYourSelfCreator() {

    }
    @action async deleteUser(userId) {
        let deleteUser = await axios.delete(`http://localhost:8080/api/users/${userId}`)
    }
    @action async updateUser(userId) {
        let updateUser = await axios.put(`http://localhost:8080/api/users/${userId}`)
    }
    @action async bookShow(eventId, showId) {
        let book = new Show(eventId, showId)
        let bookShow = await axios.post(`http://localhost:8080/api/users/show`, { book })
        this.futureShows.push(book)

    }

    @action cancelShow(showId) {
        // let cancelShow = this.futureShows.find(s =>  )
    }



}
