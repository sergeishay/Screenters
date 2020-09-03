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
    constructor(reviewID ,header, text  , reviewUserID , reviewShowID , reviewTime , reviewParentID , reviewEventID){
        this.reviewID = reviewID
        this.header = header 
        this.text = text 
        this.reviewUserID = reviewUserID
        this.reviewShowID = reviewShowID
        this.reviewTime = reviewTime
        this.reviewParentID = reviewParentID
        this.reviewEventID = reviewEventID
    }
}