import { observable, action, computed, get } from 'mobx'
import { Event } from './Event'
import axios from 'axios'
export class Events {
    @observable listOfEvents = [];
    @observable creators = []
    @observable hashtags =[]
    @observable categories = []
    constructor() {

        this.init()
    }
    init = async () => {
        this.getAllEvents()
    }
    @action async getAllEvents() {
        let getData = await axios.get("http://localhost:8080/api/events")
        // console.log(getData.data)
        for(let d of getData.data){
            let counter = 0 ;
            const rating = d.shows.reduce((total , item)=> {
                if(item.rating){
                    counter++
                    return total+item.rating
                }else{
                    return total 
                }
            } , 0)
            const avgRating = (counter == 0 )? 5 : rating/counter
            // id, name, description, imageURL, videoURL, coverImgURL, price, creatorID, categoryID , shows , rating
            this.listOfEvents.push(new Event(d.id, d.name, d.description, d.imageURL, d.videoURL, d.coverImgURL, d.price, d.categoryID,d.creatorID , d.shows , avgRating))

        }
        // console.log(this.listOfEvents)
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
