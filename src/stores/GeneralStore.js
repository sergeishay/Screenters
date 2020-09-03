import { observable, action, computed } from 'mobx'

export class GeneralStore {
  @observable category
  constructor(category) {
    this.category = category
  }
}
