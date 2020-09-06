import { observable, action, computed } from 'mobx'
import { Show } from './Show'
import { Comment } from './Comment'
import { Category } from './Category'
import axios from 'axios'

export class Event {
    @observable id
    @observable name
    @observable description
    @observable imageURL
    @observable videoURL
    @observable coverImgURL
    @observable price
    @observable creatorID
    @observable categoryID
    @observable shows = []
    @observable comments = []
    @observable rating
    constructor(id, name, description, imageURL, videoURL, coverImgURL, price, creatorID, categoryID , rating) {
        this.id = id
        this.name = name
        this.description = description
        this.imageURL = imageURL
        this.videoURL = videoURL
        this.coverImgURL = coverImgURL
        this.price = price
        this.creatorID = creatorID
        this.categoryID = categoryID
        this.rating = rating
        this.init()
    }

    init = async () => {
        // this.getAllEvents()
        // this.getComments()
        // this.addShow({id:null , startTime:"2020-02-22T21:20:06.505Z" , endTime : "2020-02-27T21:21:06.505Z" ,showEventID: 3})
    }
    @action async addShow(showData) {
        let addNewShow = await axios.post(`http://localhost:8080/api/events/show` ,  showData)
        console.log(addNewShow)
    }
    @action async deleteShow(eventId , showId) {
        let deleteShow = await axios.post(`http://localhost:8080/api/events/${eventId}/${showId}`)

    }
    // @action async updateShow(showId  , showData){
    //     let updateShow = await axios.put(`http://localhost:8080/api/events/${showId}`, showData)
    //     console.log(updateShow)
    //     if (updateShow.data) {
    //         let key = updateShow.field
    //         let value = updateShow.value
    //         console.log(key)
    //         ///option 1
    //         let toUpdateEvent = this.listOfEvents.listOfEvents.findIndex(eventUpdate => eventUpdate.id === eventId)
    //         let toUpdateShow = this.listOfEvents.listOfEvents[toUpdate].findIndex((showUpdate => showUpdate.id === showEventID))
    //         this.listOfEvents.listOfEvents[toUpdateEvent][toUpdateShow][key] = value
    //         console.log(this.listOfEvents.listOfEvents)
    //         ///option 2 
    //         let toUpdateShow = this.shows.findIndex(showUpdate => showUpdate.id === showEventID)
    //         this.shows[toUpdateShow][key] = value


    //     } else { 
    //         console.log("error")
    //     }
    // }



  @action async addShow(showData) {
    let addNewShow = await axios.post(
      `http://localhost:8080/api/events/show`,
      showData
    )
    console.log(addNewShow)
  }
  @action async deleteShow(eventId, showId) {
    let deleteShow = await axios.post(
      `http://localhost:8080/api/events/${eventId}/${showId}`
    )
  }
//   @action async updateShow(showId, showData) {
//     let updateShow = await axios.put(
//       `http://localhost:8080/api/events/${showId}`,
//       showData
//     )
//     console.log(updateShow)
//     if (updateShow.data) {
//       // let key = updateShow.field
//       // let value = updateShow.value
//       // console.log(key)
//       // ///option 1
//       // let toUpdateEvent = this.listOfEvents.listOfEvents.findIndex(eventUpdate => eventUpdate.id === eventId)
//       // let toUpdateShow = this.listOfEvents.listOfEvents[toUpdate].findIndex((showUpdate => showUpdate.id === showEventID))
//       // this.listOfEvents.listOfEvents[toUpdateEvent][toUpdateShow][key] = value
//       // console.log(this.listOfEvents.listOfEvents)
//       // ///option 2
//       // let toUpdateShow = this.shows.findIndex(showUpdate => showUpdate.id === showEventID)
//       // this.shows[toUpdateShow][key] = value
//     } else {
//       console.log('error')
//     }
//   }

//   @action getEvent() {}
//   @action setEvent() {}

  // @action async getComments() {
  //     let getComments = await axios.get(`http://localhost:8080/api/reviews/`)
  //     console.log(getComments)
  // }
}
