import { observable, action, computed } from 'mobx'

export class Comment {
    @observable reviewID
    @observable header 
    @observable text
    @observable reviewUserID
    @observable reviewShowID
    @observable reviewTime
    @observable reviewParentID
    @observable reviewEventID


    @action updateShow(){
        
    }

}