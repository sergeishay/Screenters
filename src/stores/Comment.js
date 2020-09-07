import { observable, action, computed } from 'mobx'

export class Comment {
    @observable id
    @observable header
    @observable text
    @observable reviewUserID
    @observable reviewCreatorID
    @observable time
    @observable parentReview
   
    constructor(id, header, text, reviewUserID, reviewCreatorID, time, parentReview) {
        this.id = id
        this.header = header
        this.text = text
        this.reviewUserID = reviewUserID
        this.reviewCreatorID = reviewCreatorID
        this.time = time
        this.parentReview = parentReview

    }
}

