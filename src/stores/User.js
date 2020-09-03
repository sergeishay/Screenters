import { observable, action, computed } from 'mobx'



export class User{
    @observable userID 
    @observable firstName 
    @observable lastName 
    @observable imgUrl
    @observable memberSince
    @observable isAuthorized
    @observable incomingShows =[]
    @observable pastShows =[]
    constructor(userID , firstName ,lastName ,imgUrl ,memberSince , isAuthorized) {
        this.userID = userID
        this.firstName = firstName
        this.lastName = lastName
        this.imgUrl = imgUrl
        this.memberSince = memberSince
        this.isAuthorized = isAuthorized 
    }
    @action addUser(){

    }
    @action removeUser(id){

    }
    @action updateUser(id){

    }
    @action bookShow(id){
        
    }
    @action cancelShow(id){

    }


}