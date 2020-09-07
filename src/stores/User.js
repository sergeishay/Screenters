import { observable, action, computed } from 'mobx'
import axios from 'axios'
import { Show } from './Show'

export class User {
    @observable id
    @observable firstName
    @observable lastName
    @observable imageURL
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


    constructor(id, firstName, lastName, username, imageURL, videoURL, email, birthday, memberSince, gender, about ,userRole ,  isAuthorized,  phone) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.imageURL = imageURL
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
        this.init()

    }
    init = async () => {
        // this.getCreators()
        // this.some()
        this.bookShow(10 , 90)
        // this.addNewEvent(this.userData)
    }



    @action async addUser(userData) {
        let addUser = await axios.post(`http://localhost:8080/api/users`)
    }

    @action async deleteUser(userId) {
        let deleteUser = await axios.delete(`http://localhost:8080/api/users/${userId}`)
    }
    @action async updateUser(userId, data) {
        let updateUser = await axios.put(`http://localhost:8080/api/users/${userId}`, data)
    }
    @action async bookShow(eventId, showId) {
        let book = new Show(eventId, showId)
        let bookShow = await axios.post(`http://localhost:8080/api/users/show`, { book })
        this.futureShows.push(book)

    }

    @action async some(){
        console.log("fds")
    }



    // @action async bookShow(userID , showID){
    //     console.log("FDFDf")
    //     let bookShowToDataBase = await axios.post(`http://localhost:8080/api/users/show` ,{userID , showID}) 
    //     console.log(bookShowToDataBase)
    // }

    @action unBookShow(showId) {
        // let unBookShow = this.futureShows.find(s =>  )
    }



}
