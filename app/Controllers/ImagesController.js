import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"


function _drawImg() {
  document.getElementById('body').style.backgroundImage = `url('${ProxyState.images}')`
}



export class ImagesController {

  constructor() {
    ProxyState.on('images', _drawImg)
    this.getImages()

  }

  async getImages() {
    try {
      await imagesService.getImages()
    } catch (error) {
      console.log(error);
    }
  }
}







