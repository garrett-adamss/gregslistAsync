
function _drawHouses(){
  // GET THE HOUES TEMPLATE
  document.getElementById('listings').innerHTML = '<p> houses go here </p>'
}



export class HousesController{



  viewHouses(){
    _drawHouses()
    // swap out car form with house form
  }
}