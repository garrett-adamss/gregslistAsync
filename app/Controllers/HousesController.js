import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { houseService } from "../Services/HouseService.js"
import { Pop } from "../Utils/Pop.js";


function _drawHouses() {
  // GET THE HOUES TEMPLATE
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
  document.getElementById('form').innerHTML = getHouseForm()
}



export class HousesController {

  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }

  viewHouses() {
    _drawHouses()
    this.getHouses()
  }

  async getHouses() {
    try {
      await houseService.getHouses()
    } catch (error) {
      console.log('[Get House]', error)
      Pop.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let newHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.img.value
      }
      await houseService.createHouse(newHouse)
      form.reset()
    } catch (error) {
    console.log("[Create House]", error);
    Pop.error
    }
  }


  async deleteHouse(houseId){
    try {
      await houseService.deleteHouse(houseId)
    } catch (error) {
      console.log('[Delete House]', error);
      Pop.error(error)
    }
  }


  // adjustHouse(houseId){
  //   try {
  //     window.event.preventDefault()
  //     let form = window.target.value
  //     let houseData = {
  //       id: houseId,
  //       // @ts-ignore
  //       bedrooms: form.bedrooms.value,
  //       // @ts-ignore
  //       bathrooms: form.bathrooms.value,
  //       // @ts-ignore
  //       year: form.year.value,
  //       // @ts-ignore
  //       price: form.price.value,
  //       // @ts-ignore
  //       imgUrl: form.img.value,
  //       // @ts-ignore
  //       description: form.description.value
  //     }
  //   await houseService.editHouse(houseData)
  //   } catch (error) {
  //     console.log('[Edit House]', error)
  //     Pop.error(error)
  //   }
  // }
}