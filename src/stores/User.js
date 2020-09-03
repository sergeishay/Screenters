import { observable, action, computed } from 'mobx'
import axios from 'axios'
import { Show } from './Show'



export class User{
    @observable userID 
    @observable firstName 
    @observable lastName 
    @observable imgUrl
    @observable memberSince
    @observable isAuthorized
    @observable role
    @observable futureShows =[]
    @observable pastShows =[]

    
    constructor(userID , firstName ,lastName ,imgUrl ,memberSince , isAuthorized) {
        this.userID = userID
        this.firstName = firstName
        this.lastName = lastName
        this.imgUrl = imgUrl
        this.memberSince = memberSince
        this.isAuthorized = isAuthorized 
    }
    @action makeYourSelfCreator(){

    }
    @action async deleteUser(userId){
        let deleteUser = await axios.delete(`http://localhost:8080/api/users/${userId}`)
    }
    @action async updateUser(userId){
        let updateUser = await axios.put(`http://localhost:8080/api/users/${userId}`)
    }
    @action async bookShow(eventId  , showId){
        let book = new Show(eventId , showId)
        let bookShow = await axios.post(`http://localhost:8080/api/users/show` , {book})
        this.futureShows.push(book)

    }
    
    @action cancelShow(showId){
        // let cancelShow = this.futureShows.find(s =>  )
    }
    

    
}
