import { observable, action, computed, get } from 'mobx'
import { Event } from './Event'
import axios from 'axios'
export class Events {
    @observable listOfEvents = [];
    constructor() {

        this.init()
    }
    init = async () => {
        console.log('INIT')
        this.getAllEvents()
    }
    @action async getAllEvents() {
        let getData = await axios.get("http://localhost:8080/api/events")
        getData = getData.data
        for(let d of getData){
            console.log(d)
            this.listOfEvents.push(new Event(d.id, d.name, d.description, d.imgURL, d.videoURL, d.coverImgURL, d.price, d.categoryID, d.creatorID))
        }
        console.log(this.listOfEvents)
    }
    @action addNewEvent() {

    }

    @action removeEvent(id) {

    }

    @action updateEvent(id) {

    }
    @computed get topEvents() {

    }

}



















// @observable products = [];
// @observable cart = [];
// @action getProducts() {
//     let dataArray = getData()
//     console.log(dataArray)
//     dataArray.forEach(d =>{
//        this.products.push(new Product(d.id , d.name , d.img , d.price , d.likes))
//     })

// }
// @action findProductById(id){
//    let productId = this.products.find(i => i.id == id )
//    return productId
// }
// @computed get isProductsPopulated (){return this.products.length > 0 }
// @action addToCart(id){
//     console.log(this.cart)
//     let checkItem = this.cart.find(i =>i.item.id === id)
//     if (checkItem){checkItem.quantity++}
//     else{this.cart.push({item:this.findProductById(id) , quantity : 1})}
// }
// @computed get cartQuantity(){
//     let count = 0 ;
//     this.cart.forEach(c =>count+=c.quantity )
//     return count
// }
// @computed get cartTotal(){
//     let count = 0 ; 
//     this.cart.forEach(c => count+= c.item.price *c.quantity)
//     return count
// }
// @action deleteFromCart =(id)=>{
//     let deleteItem = this.cart.findIndex(c=>c.item.id === id)
//     if(this.cart[deleteItem].quantity>1){this.cart[deleteItem].quantity--}
//     else{this.cart.splice(deleteItem,"1")}
// }