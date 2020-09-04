import { observable, action, computed } from 'mobx'
import axios from 'axios'

export class GeneralStore {
  @observable categories = []
  @observable creators
  @observable hashtag
  @observable rating
  @observable singleEvent = {}

  constructor() {
    this.init()
  }
  init = async () => {
    this.getEventById(5)
    this.gelAllCategories()
  }

  @action async getEventById(eventId) {
    let getEventById = await axios.get(
      `http://localhost:8080/api/events/${eventId}`
    )
    getEventById = getEventById.data.event
    this.singleEvent = getEventById
    console.log(this.singleEvent)
  }

  @action async gelAllCategories() {
    let gelAllCategories = await axios.get(
      `http://localhost:8080/api/creators/general/details`
    )
    console.log(gelAllCategories.data.categories)
    gelAllCategories.data.categories.forEach(c => {
      this.categories.push(c)
    })

    console.log(this.categories)
  }
}
