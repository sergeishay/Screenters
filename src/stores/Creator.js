import { observable, action, computed } from 'mobx'
import {User} from './User'
export class Creator extends User{
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
    constructor(userID , firstName ,lastName ,imgUrl ,memberSince) {
       super(userID , firstName ,lastName ,imgUrl ,memberSince)
       creatorId = this.creatorId
       

    }


    @action addCreator(){

    }
    @action removeCreator(id){

    }
    @action updateCreator(id){

    }
    @action allTheEvent(id){
        //two arrays that push to the new and old Events
    }

}