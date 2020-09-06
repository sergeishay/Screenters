import { observable, action, computed } from 'mobx'

export class Show{
    @observable startTime 
    @observable endTime 
    @observable showID
    @observable eventID
    
    constructor(startTime , endTime , showID , eventID){
        this.startTime = startTime;
        this.endTime = endTime;
        this.showID = showID; 
        this.eventID = eventID;
    }
}
